import { fetchEventsFromAirtable } from '@/lib/airtable'
import EventsPageContent from './EventsPageContent'
import type { Event } from '@/types'

// Force dynamic rendering to always show fresh Airtable data
export const dynamic = 'force-dynamic'

// Server component to fetch events
export default async function EventsPage() {
  // Fetch events from Airtable on the server with error handling
  let allEvents: Event[] = []
  try {
    allEvents = await fetchEventsFromAirtable()
  } catch (error) {
    console.error('Failed to fetch events for events page:', error)
    // Use empty array as fallback
    allEvents = []
  }

  return <EventsPageContent events={allEvents} />
}