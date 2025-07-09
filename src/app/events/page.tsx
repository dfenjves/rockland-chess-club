import { fetchEventsFromAirtable } from '@/lib/airtable'
import EventsPageContent from './EventsPageContent'

// Server component to fetch events
export default async function EventsPage() {
  // Fetch events from Airtable on the server
  const allEvents = await fetchEventsFromAirtable()

  return <EventsPageContent events={allEvents} />
}