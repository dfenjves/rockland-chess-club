import { fetchEventsFromGoogleCalendar } from '@/lib/google-calendar'
import EventsPageContent from './EventsPageContent'
import type { Event } from '@/types'

// Force dynamic rendering to always show fresh Google Calendar data
export const dynamic = 'force-dynamic'

// Server component to fetch events
export default async function EventsPage() {
  // Fetch events from Google Calendar on the server with error handling
  let allEvents: Event[] = []
  try {
    allEvents = await fetchEventsFromGoogleCalendar()
  } catch (error) {
    console.error('Failed to fetch events for events page:', error)
    // Use empty array as fallback
    allEvents = []
  }

  return <EventsPageContent events={allEvents} />
}