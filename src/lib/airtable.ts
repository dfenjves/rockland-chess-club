import Airtable from 'airtable'
import type { Event } from '@/types'

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!)

const table = base(process.env.AIRTABLE_TABLE_NAME || 'Events')

// Type for Airtable record
interface AirtableEventRecord {
  id: string
  fields: {
    Title: string
    Date: string
    Time: string
    Category: 'casual' | 'board-games'
    Description: string
    Location?: string
    Status?: 'active' | 'cancelled' | 'draft'
  }
}

// Convert Airtable record to Event type
const convertAirtableToEvent = (record: AirtableEventRecord): Event => {
  return {
    id: record.id,
    title: record.fields.Title,
    date: new Date(record.fields.Date),
    time: record.fields.Time,
    category: record.fields.Category,
    description: record.fields.Description,
    location: record.fields.Location || '7 North Broadway, 3rd Floor, Nyack, NY'
  }
}

// Fetch all active events from Airtable
export async function fetchEventsFromAirtable(): Promise<Event[]> {
  try {
    const records = await table
      .select({
        filterByFormula: "{Status} = 'active'",
        sort: [{ field: 'Date', direction: 'asc' }],
      })
      .all()

    const events = records
      .map((record) => convertAirtableToEvent(record as AirtableEventRecord))
      .filter(event => event.date >= new Date()) // Only future events

    return events
  } catch (error) {
    console.error('Error fetching events from Airtable:', error)
    
    // Fallback to static events if Airtable fails
    return getFallbackEvents()
  }
}

// Fallback events in case Airtable is unavailable
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
      location: '7 North Broadway, 3rd Floor, Nyack, NY'
    })
  }
  
  return events
}

// Helper function to get the next occurrence of a weekday
function getNextWeekday(weekday: number, weeksFromNow: number = 0): Date {
  const now = new Date()
  const date = new Date(now)
  const daysUntilWeekday = (weekday - date.getDay() + 7) % 7
  date.setDate(date.getDate() + daysUntilWeekday + (weeksFromNow * 7))
  return date
}

// Create a new event in Airtable (for future admin interface)
export async function createEvent(eventData: Omit<Event, 'id'>): Promise<Event | null> {
  try {
    const record = await table.create([
      {
        fields: {
          Title: eventData.title,
          Date: eventData.date.toISOString().split('T')[0],
          Time: eventData.time,
          Category: eventData.category,
          Description: eventData.description,
          Location: eventData.location,
          Status: 'active'
        }
      }
    ])

    return convertAirtableToEvent(record[0] as AirtableEventRecord)
  } catch (error) {
    console.error('Error creating event in Airtable:', error)
    return null
  }
}

// Update an event in Airtable (for future admin interface)
export async function updateEvent(id: string, eventData: Partial<Event>): Promise<Event | null> {
  try {
    const updateFields: Record<string, string> = {}
    if (eventData.title) updateFields.Title = eventData.title
    if (eventData.date) updateFields.Date = eventData.date.toISOString().split('T')[0]
    if (eventData.time) updateFields.Time = eventData.time
    if (eventData.category) updateFields.Category = eventData.category
    if (eventData.description) updateFields.Description = eventData.description
    if (eventData.location) updateFields.Location = eventData.location

    const record = await table.update([
      {
        id,
        fields: updateFields
      }
    ])

    return convertAirtableToEvent(record[0] as AirtableEventRecord)
  } catch (error) {
    console.error('Error updating event in Airtable:', error)
    return null
  }
}

// Delete an event from Airtable (for future admin interface)
export async function deleteEvent(id: string): Promise<boolean> {
  try {
    await table.destroy([id])
    return true
  } catch (error) {
    console.error('Error deleting event from Airtable:', error)
    return false
  }
}