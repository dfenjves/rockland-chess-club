import type { Event } from '@/types'

// Helper function to get the next occurrence of a weekday
const getNextWeekday = (weekday: number, weeksFromNow: number = 0) => {
  const now = new Date()
  const date = new Date(now)
  const daysUntilWeekday = (weekday - date.getDay() + 7) % 7
  date.setDate(date.getDate() + daysUntilWeekday + (weeksFromNow * 7))
  return date
}

// Generate upcoming events dynamically
const generateUpcomingEvents = (): Event[] => {
  const events: Event[] = []
  
  // Next Thursday Night Chess
  const nextThursday = getNextWeekday(4) // 4 = Thursday
  events.push({
    id: '1',
    title: 'Thursday Night Chess',
    date: nextThursday,
    time: '19:00',
    category: 'casual',
    description: 'Casual games and friendly competition. All skill levels welcome!'
  })
  
  // Next Saturday Tournament (first Saturday of the month) or regular Saturday
  const nextSaturday = getNextWeekday(6) // 6 = Saturday
  const isFirstSaturday = nextSaturday.getDate() <= 7
  events.push({
    id: '2',
    title: isFirstSaturday ? 'Monthly Tournament' : 'Saturday Chess Club',
    date: nextSaturday,
    time: '14:00',
    category: isFirstSaturday ? 'tournament' : 'casual',
    description: isFirstSaturday 
      ? 'Monthly Swiss tournament with prizes. Registration starts at 1:30 PM.'
      : 'Weekend chess club with casual games and instruction.'
  })
  
  // Beginner Chess Class (next week's Thursday)
  const nextWeekThursday = getNextWeekday(4, 1)
  events.push({
    id: '3',
    title: 'Beginner Chess Class',
    date: nextWeekThursday,
    time: '18:30',
    category: 'classes',
    description: 'Learn the basics of chess in a supportive environment.'
  })
  
  // Board Game Night (next Friday)
  const nextFriday = getNextWeekday(5) // 5 = Friday
  events.push({
    id: '4',
    title: 'Board Game Night',
    date: nextFriday,
    time: '19:00',
    category: 'board-games',
    description: 'Not just chess! Enjoy other strategy games and puzzles.'
  })
  
  // Sort by date and return
  return events.sort((a, b) => a.date.getTime() - b.date.getTime())
}

export const upcomingEvents: Event[] = generateUpcomingEvents()

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