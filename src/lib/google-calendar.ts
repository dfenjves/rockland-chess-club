import { google, calendar_v3 } from 'googleapis'
import { createLocalDate } from '@/lib/utils'
import type { Event } from '@/types'

// Initialize Google Calendar API with validation
if (!process.env.GOOGLE_CALENDAR_API_KEY) {
  throw new Error('GOOGLE_CALENDAR_API_KEY environment variable is required')
}
if (!process.env.GOOGLE_CALENDAR_ID) {
  throw new Error('GOOGLE_CALENDAR_ID environment variable is required')
}

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.GOOGLE_CALENDAR_API_KEY
})

// Types for Google Calendar API responses (using official types)
type GoogleCalendarEvent = calendar_v3.Schema$Event

// Map Google Calendar event categories to our Event categories
const mapGoogleCalendarCategory = (description?: string | null, extendedProperties?: calendar_v3.Schema$Event['extendedProperties']): Event['category'] => {
  const categoryText = extendedProperties?.private?.category || description || ''
  const lowerCategory = categoryText.toLowerCase()
  
  if (lowerCategory.includes('tournament')) return 'tournament'
  if (lowerCategory.includes('class') || lowerCategory.includes('lesson')) return 'classes'
  if (lowerCategory.includes('board') || lowerCategory.includes('game')) return 'board-games'
  if (lowerCategory.includes('special') || lowerCategory.includes('event')) return 'special'
  
  return 'casual' // Default category
}

// Extract time from Google Calendar dateTime
const extractTimeFromDateTime = (dateTime?: string): string => {
  if (!dateTime) return '19:00' // Default time
  
  const date = new Date(dateTime)
  // Convert to Eastern timezone to get the correct local time
  const easternTime = new Date(date.toLocaleString("en-US", {timeZone: "America/New_York"}))
  const hours = easternTime.getHours().toString().padStart(2, '0')
  const minutes = easternTime.getMinutes().toString().padStart(2, '0')
  
  return `${hours}:${minutes}`
}

// Convert Google Calendar event to Event type
const convertGoogleCalendarToEvent = (gcalEvent: GoogleCalendarEvent): Event | null => {
  // Skip events without required fields
  if (!gcalEvent.id || !gcalEvent.summary || !gcalEvent.start) {
    return null
  }
  
  // Handle date extraction (prefer dateTime, fallback to date)
  let eventDate: Date
  let eventTime: string
  
  if (gcalEvent.start.dateTime) {
    eventDate = new Date(gcalEvent.start.dateTime)
    eventTime = extractTimeFromDateTime(gcalEvent.start.dateTime)
  } else if (gcalEvent.start.date) {
    eventDate = createLocalDate(gcalEvent.start.date)
    eventTime = '19:00' // Default time for all-day events
  } else {
    return null
  }
  
  return {
    id: gcalEvent.id,
    title: gcalEvent.summary,
    date: eventDate,
    time: eventTime,
    category: mapGoogleCalendarCategory(gcalEvent.description, gcalEvent.extendedProperties),
    description: gcalEvent.description || '',
    location: gcalEvent.location || '70 Main St, 3rd Floor, Nyack, NY'
  }
}

// Fetch all upcoming events from Google Calendar
export async function fetchEventsFromGoogleCalendar(): Promise<Event[]> {
  try {
    // Get current time in Eastern timezone for filtering
    const nowInEastern = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
    const startOfToday = new Date(nowInEastern.getFullYear(), nowInEastern.getMonth(), nowInEastern.getDate())
    
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: startOfToday.toISOString(),
      maxResults: 50, // Limit to prevent too many results
      singleEvents: true,
      orderBy: 'startTime',
      showDeleted: false,
    })

    const events = response.data.items || []
    
    const convertedEvents = events
      .map(event => convertGoogleCalendarToEvent(event))
      .filter((event): event is Event => event !== null)
      .filter(event => {
        // Double-check date filtering in Eastern timezone for consistency
        const nowInEastern = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
        const eventYear = event.date.getFullYear()
        const eventMonth = event.date.getMonth()
        const eventDay = event.date.getDate()
        const todayYear = nowInEastern.getFullYear()
        const todayMonth = nowInEastern.getMonth()
        const todayDay = nowInEastern.getDate()
        
        // Event is today or in the future
        return (eventYear > todayYear) || 
               (eventYear === todayYear && eventMonth > todayMonth) ||
               (eventYear === todayYear && eventMonth === todayMonth && eventDay >= todayDay)
      })

    return convertedEvents
  } catch (error) {
    console.error('Error fetching events from Google Calendar:', error)
    
    // Fallback to static events if Google Calendar fails
    return getFallbackEvents()
  }
}

// Fallback events in case Google Calendar is unavailable (same as Airtable version)
function getFallbackEvents(): Event[] {
  const events: Event[] = []
  
  // Generate next 4 weeks of Thursday Night Chess as fallback
  for (let week = 0; week < 4; week++) {
    const thursday = getNextWeekday(4, week)
    events.push({
      id: `fallback-thursday-${week}`,
      title: 'Thursday Night Chess',
      date: thursday,
      time: '19:00',
      category: 'casual',
      description: 'Casual games, instruction, and friendly competition. All skill levels welcome!',
      location: '70 Main St, 3rd Floor, Nyack, NY'
    })
  }
  
  return events
}

// Helper function to get the next occurrence of a weekday (same as Airtable version)
function getNextWeekday(weekday: number, weeksFromNow: number = 0): Date {
  const now = new Date()
  const date = new Date(now)
  const daysUntilWeekday = (weekday - date.getDay() + 7) % 7
  date.setDate(date.getDate() + daysUntilWeekday + (weeksFromNow * 7))
  return date
}

// Create a new event in Google Calendar (for future admin interface)
export async function createEvent(eventData: Omit<Event, 'id'>): Promise<Event | null> {
  try {
    // Combine date and time for Google Calendar
    const eventDateTime = new Date(eventData.date)
    const [hours, minutes] = eventData.time.split(':').map(Number)
    eventDateTime.setHours(hours, minutes, 0, 0)

    const endDateTime = new Date(eventDateTime)
    endDateTime.setHours(endDateTime.getHours() + 2) // Default 2-hour duration

    const gcalEvent = {
      summary: eventData.title,
      description: eventData.description,
      location: eventData.location,
      start: {
        dateTime: eventDateTime.toISOString(),
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York',
      },
      extendedProperties: {
        private: {
          category: eventData.category
        }
      }
    }

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: gcalEvent,
    })

    if (response.data) {
      const convertedEvent = convertGoogleCalendarToEvent(response.data)
      return convertedEvent
    }

    return null
  } catch (error) {
    console.error('Error creating event in Google Calendar:', error)
    return null
  }
}

// Update an event in Google Calendar (for future admin interface)
export async function updateEvent(id: string, eventData: Partial<Event>): Promise<Event | null> {
  try {
    // First get the existing event
    const existingEvent = await calendar.events.get({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId: id,
    })

    if (!existingEvent.data) {
      return null
    }

    // Prepare update data
    const updateData: GoogleCalendarEvent = { ...existingEvent.data }
    
    if (eventData.title) updateData.summary = eventData.title
    if (eventData.description) updateData.description = eventData.description
    if (eventData.location) updateData.location = eventData.location
    
    if (eventData.date && eventData.time) {
      const eventDateTime = new Date(eventData.date)
      const [hours, minutes] = eventData.time.split(':').map(Number)
      eventDateTime.setHours(hours, minutes, 0, 0)
      
      const endDateTime = new Date(eventDateTime)
      endDateTime.setHours(endDateTime.getHours() + 2)
      
      updateData.start = {
        dateTime: eventDateTime.toISOString(),
        timeZone: 'America/New_York',
      }
      updateData.end = {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York',
      }
    }
    
    if (eventData.category) {
      updateData.extendedProperties = {
        private: {
          category: eventData.category
        }
      }
    }

    const response = await calendar.events.update({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId: id,
      requestBody: updateData,
    })

    if (response.data) {
      const convertedEvent = convertGoogleCalendarToEvent(response.data)
      return convertedEvent
    }

    return null
  } catch (error) {
    console.error('Error updating event in Google Calendar:', error)
    return null
  }
}

// Delete an event from Google Calendar (for future admin interface)
export async function deleteEvent(id: string): Promise<boolean> {
  try {
    await calendar.events.delete({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId: id,
    })
    return true
  } catch (error) {
    console.error('Error deleting event from Google Calendar:', error)
    return false
  }
}