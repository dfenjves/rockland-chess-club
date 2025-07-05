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
  
  // Generate next 12 weeks of Thursday Night Chess
  for (let week = 0; week < 12; week++) {
    const thursday = getNextWeekday(4, week) // 4 = Thursday
    events.push({
      id: `thursday-${week}`,
      title: 'Thursday Night Chess',
      date: thursday,
      time: '19:00',
      category: 'casual',
      description: 'Casual games, instruction, and friendly competition. All skill levels welcome!'
    })
  }
  
  // Add monthly board game nights (first Saturday of each month)
  const getFirstSaturdayOfMonth = (monthsFromNow: number) => {
    const now = new Date()
    const targetDate = new Date(now.getFullYear(), now.getMonth() + monthsFromNow, 1)
    // Find first Saturday of the month
    while (targetDate.getDay() !== 6) { // 6 = Saturday
      targetDate.setDate(targetDate.getDate() + 1)
    }
    return targetDate
  }
  
  // Generate next 3 months of board game nights
  for (let month = 0; month < 3; month++) {
    const saturday = getFirstSaturdayOfMonth(month)
    if (saturday >= new Date()) {
      events.push({
        id: `board-games-${month}`,
        title: 'Monthly Board Game Night',
        date: saturday,
        time: '19:00',
        category: 'board-games',
        description: 'Not just chess! Enjoy Scrabble, Settlers of Catan, and other strategy games in a fun, social setting.'
      })
    }
  }
  
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