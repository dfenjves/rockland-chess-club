import Airtable from 'airtable'
import type { Event, Announcement, CommunityCard, NewsletterSubscriber, ContactSubmission } from '@/types'

// Initialize Airtable with validation
if (!process.env.AIRTABLE_API_KEY) {
  throw new Error('AIRTABLE_API_KEY environment variable is required')
}
if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('AIRTABLE_BASE_ID environment variable is required')
}

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)

const eventsTable = base(process.env.AIRTABLE_TABLE_NAME || 'Events')
const announcementsTable = base('Announcements')
const communityCardsTable = base('CommunityCards')
const newsletterTable = base('Newsletter')
const contactTable = base('Contact-Us')

// Types for Airtable records
interface AirtableEventRecord {
  id: string
  fields: {
    'Unique-Name'?: string
    Title: string
    Date: string
    Time: string
    Category: 'casual' | 'board-games'
    Description: string
    Location?: string
    Status?: 'Active' | 'Cancelled' | 'Draft'
  }
}

interface AirtableAnnouncementRecord {
  id: string
  fields: {
    Title: string
    Description: string
    'Link URL'?: string
    'Link Text'?: string
    Status: 'Active' | 'Inactive'
    Priority: number
    Icon?: string
  }
}

interface AirtableCommunityCardRecord {
  id: string
  fields: {
    Title: string
    Description: string
    Icon: string
    Order: number
    Status: 'Active' | 'Inactive'
  }
}

interface AirtableNewsletterRecord {
  id: string
  fields: {
    Email: string
    'Subscribed At': string
    Status: 'Active' | 'Inactive'
    Source?: string
  }
}

interface AirtableContactRecord {
  id: string
  fields: {
    Name: string
    Email: string
    Message: string
    'Submitted At': string
    Status: 'New' | 'Reviewed' | 'Responded' | 'Closed'
    Source?: string
  }
}

// Convert 12-hour time to 24-hour time
const convertTimeTo24Hour = (time12h: string): string => {
  const [time, modifier] = time12h.split(' ')
  let [hours] = time.split(':')
  const [, minutes] = time.split(':')
  
  if (hours === '12') {
    hours = '00'
  }
  
  if (modifier === 'PM') {
    hours = String(parseInt(hours, 10) + 12)
  }
  
  return `${hours}:${minutes}`
}

// Convert Airtable record to Event type
const convertAirtableToEvent = (record: AirtableEventRecord): Event => {
  // Fix timezone issue by treating date as local date
  const dateStr = record.fields.Date
  const [year, month, day] = dateStr.split('-').map(Number)
  const localDate = new Date(year, month - 1, day) // month is 0-indexed
  
  return {
    id: record.id,
    title: record.fields.Title,
    date: localDate,
    time: convertTimeTo24Hour(record.fields.Time),
    category: record.fields.Category,
    description: record.fields.Description,
    location: record.fields.Location || '7 North Broadway, 3rd Floor, Nyack, NY'
  }
}

// Convert Airtable records to typed objects
const convertAirtableToAnnouncement = (record: AirtableAnnouncementRecord): Announcement => {
  return {
    id: record.id,
    title: record.fields.Title,
    description: record.fields.Description,
    linkUrl: record.fields['Link URL'],
    linkText: record.fields['Link Text'],
    status: record.fields.Status.toLowerCase() as 'active' | 'inactive',
    priority: record.fields.Priority,
    icon: record.fields.Icon
  }
}

const convertAirtableToCommunityCard = (record: AirtableCommunityCardRecord): CommunityCard => {
  return {
    id: record.id,
    title: record.fields.Title,
    description: record.fields.Description,
    icon: record.fields.Icon,
    order: record.fields.Order,
    status: record.fields.Status.toLowerCase() as 'active' | 'inactive'
  }
}

const convertAirtableToNewsletterSubscriber = (record: AirtableNewsletterRecord): NewsletterSubscriber => {
  return {
    id: record.id,
    email: record.fields.Email,
    subscribedAt: new Date(record.fields['Subscribed At']),
    status: record.fields.Status.toLowerCase() as 'active' | 'inactive',
    source: record.fields.Source
  }
}

const convertAirtableToContactSubmission = (record: AirtableContactRecord): ContactSubmission => {
  return {
    id: record.id,
    name: record.fields.Name,
    email: record.fields.Email,
    message: record.fields.Message,
    submittedAt: new Date(record.fields['Submitted At']),
    status: record.fields.Status.toLowerCase() as 'new' | 'reviewed' | 'responded' | 'closed',
    source: record.fields.Source
  }
}

// Fetch all active events from Airtable
export async function fetchEventsFromAirtable(): Promise<Event[]> {
  try {
    const records = await eventsTable
      .select({
        filterByFormula: "{Status} = 'Active'",
        sort: [{ field: 'Date', direction: 'asc' }],
      })
      .all()

    const events = records
      .map((record) => convertAirtableToEvent(record as unknown as AirtableEventRecord))
      .filter(event => {
        // Compare dates without time to avoid timezone issues
        const today = new Date()
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        return event.date >= todayStart
      }) // Only future events

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
    const record = await eventsTable.create([
      {
        fields: {
          Title: eventData.title,
          Date: eventData.date.toISOString().split('T')[0],
          Time: eventData.time,
          Category: eventData.category,
          Description: eventData.description,
          Location: eventData.location,
          Status: 'Active'
        }
      }
    ])

    return convertAirtableToEvent(record[0] as unknown as AirtableEventRecord)
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

    const record = await eventsTable.update([
      {
        id,
        fields: updateFields
      }
    ])

    return convertAirtableToEvent(record[0] as unknown as AirtableEventRecord)
  } catch (error) {
    console.error('Error updating event in Airtable:', error)
    return null
  }
}

// Delete an event from Airtable (for future admin interface)
export async function deleteEvent(id: string): Promise<boolean> {
  try {
    await eventsTable.destroy([id])
    return true
  } catch (error) {
    console.error('Error deleting event from Airtable:', error)
    return false
  }
}

// Fetch active announcements from Airtable
export async function fetchAnnouncementsFromAirtable(): Promise<Announcement[]> {
  try {
    const records = await announcementsTable
      .select({
        filterByFormula: "{Status} = 'Active'",
        sort: [{ field: 'Priority', direction: 'asc' }],
      })
      .all()

    const announcements = records
      .map((record) => convertAirtableToAnnouncement(record as unknown as AirtableAnnouncementRecord))

    return announcements
  } catch (error) {
    console.error('Error fetching announcements from Airtable:', error)
    
    // Fallback to static announcement if Airtable fails
    return getFallbackAnnouncements()
  }
}

// Fetch active community cards from Airtable
export async function fetchCommunityCardsFromAirtable(): Promise<CommunityCard[]> {
  try {
    const records = await communityCardsTable
      .select({
        filterByFormula: "{Status} = 'Active'",
        sort: [{ field: 'Order', direction: 'asc' }],
      })
      .all()

    const communityCards = records
      .map((record) => convertAirtableToCommunityCard(record as unknown as AirtableCommunityCardRecord))

    return communityCards
  } catch (error) {
    console.error('Error fetching community cards from Airtable:', error)
    
    // Fallback to static community cards if Airtable fails
    return getFallbackCommunityCards()
  }
}

// Fallback announcements in case Airtable is unavailable
function getFallbackAnnouncements(): Announcement[] {
  return [
    {
      id: 'fallback-expansion',
      title: 'Expansion Announcement',
      description: 'New space opening September 2025',
      linkUrl: '/about',
      linkText: 'Learn More →',
      status: 'active',
      priority: 1,
      icon: '♔'
    }
  ]
}

// Fallback community cards in case Airtable is unavailable
function getFallbackCommunityCards(): CommunityCard[] {
  return [
    {
      id: 'fallback-skill-levels',
      title: 'All Skill Levels',
      description: 'From beginners to masters, every player finds their place in our Club',
      icon: '♔',
      order: 1,
      status: 'active'
    },
    {
      id: 'fallback-gatherings',
      title: 'Regular Gatherings',
      description: 'Casual matches, regular tournaments, and engaging classes',
      icon: '♕',
      order: 2,
      status: 'active'
    },
    {
      id: 'fallback-instruction',
      title: 'Instruction',
      description: 'Our instructors offer guidance in the art and science of chess',
      icon: '♗',
      order: 3,
      status: 'active'
    }
  ]
}

// Add newsletter subscriber to Airtable
export async function addNewsletterSubscriber(email: string, source: string = 'website'): Promise<NewsletterSubscriber | null> {
  try {
    // First check if email already exists
    const existingRecords = await newsletterTable
      .select({
        filterByFormula: `{Email} = "${email}"`,
        maxRecords: 1
      })
      .all()

    // If email already exists, return the existing record
    if (existingRecords.length > 0) {
      return convertAirtableToNewsletterSubscriber(existingRecords[0] as unknown as AirtableNewsletterRecord)
    }

    // Create new subscriber record
    const record = await newsletterTable.create([
      {
        fields: {
          Email: email,
          'Subscribed At': new Date().toISOString().split('T')[0],
          Status: 'Active',
          Source: source
        }
      }
    ])

    return convertAirtableToNewsletterSubscriber(record[0] as unknown as AirtableNewsletterRecord)
  } catch (error) {
    console.error('Error adding newsletter subscriber to Airtable:', error)
    return null
  }
}

// Fetch all active newsletter subscribers (for admin use)
export async function fetchNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const records = await newsletterTable
      .select({
        filterByFormula: "{Status} = 'Active'",
        sort: [{ field: 'Subscribed At', direction: 'desc' }],
      })
      .all()

    const subscribers = records
      .map((record) => convertAirtableToNewsletterSubscriber(record as unknown as AirtableNewsletterRecord))

    return subscribers
  } catch (error) {
    console.error('Error fetching newsletter subscribers from Airtable:', error)
    return []
  }
}

// Add contact form submission to Airtable
export async function addContactSubmission(
  name: string, 
  email: string, 
  message: string, 
  source: string = 'website'
): Promise<ContactSubmission | null> {
  try {
    // Create new contact submission record
    const record = await contactTable.create([
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
          'Submitted At': new Date().toISOString().split('T')[0],
          Status: 'New',
          Source: source
        }
      }
    ])

    return convertAirtableToContactSubmission(record[0] as unknown as AirtableContactRecord)
  } catch (error) {
    console.error('Error adding contact submission to Airtable:', error)
    return null
  }
}

// Fetch all contact submissions (for admin use)
export async function fetchContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const records = await contactTable
      .select({
        sort: [{ field: 'Submitted At', direction: 'desc' }],
      })
      .all()

    const submissions = records
      .map((record) => convertAirtableToContactSubmission(record as unknown as AirtableContactRecord))

    return submissions
  } catch (error) {
    console.error('Error fetching contact submissions from Airtable:', error)
    return []
  }
}

// Update contact submission status (for admin use)
export async function updateContactSubmissionStatus(
  id: string, 
  status: 'new' | 'reviewed' | 'responded' | 'closed'
): Promise<ContactSubmission | null> {
  try {
    const record = await contactTable.update([
      {
        id,
        fields: {
          Status: status.charAt(0).toUpperCase() + status.slice(1) as 'New' | 'Reviewed' | 'Responded' | 'Closed'
        }
      }
    ])

    return convertAirtableToContactSubmission(record[0] as unknown as AirtableContactRecord)
  } catch (error) {
    console.error('Error updating contact submission status in Airtable:', error)
    return null
  }
}