import { fetchEventsFromAirtable } from '@/lib/airtable'
import type { Event } from '@/types'

// This will be dynamically populated from Airtable
export let upcomingEvents: Event[] = []

// Function to load events from Airtable
export async function loadEvents(): Promise<Event[]> {
  try {
    const events = await fetchEventsFromAirtable()
    upcomingEvents = events
    return events
  } catch (error) {
    console.error('Failed to load events:', error)
    return []
  }
}

export const categoryColors = {
  tournament: 'bg-blue-100 text-blue-800',
  casual: 'bg-green-100 text-green-800', 
  classes: 'bg-orange-100 text-orange-800',
  'board-games': 'bg-purple-100 text-purple-800',
  special: 'bg-yellow-100 text-yellow-800'
}

export const categoryLabels = {
  tournament: 'Tournament',
  casual: 'Casual Play',
  classes: 'Classes', 
  'board-games': 'Board Games',
  special: 'Special Event'
}