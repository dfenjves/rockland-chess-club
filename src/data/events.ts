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
  
  // Generate next 8 weeks of Thursday Night Chess
  for (let week = 0; week < 8; week++) {
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
  
  // Add some special events and classes
  const specialEvents = [
    {
      id: 'beginner-class-1',
      title: 'Beginner Chess Class',
      date: getNextWeekday(4, 1), // Next week Thursday
      time: '18:30',
      category: 'classes' as const,
      description: 'Learn the basics of chess in a supportive environment.'
    },
    {
      id: 'puzzle-night',
      title: 'Chess Puzzle Championship',
      date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      time: '19:00',
      category: 'special' as const,
      description: 'Test your tactical skills in our monthly puzzle-solving competition!'
    },
    {
      id: 'simul',
      title: 'Simultaneous Exhibition',
      date: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000), // 25 days from now
      time: '18:00',
      category: 'special' as const,
      description: 'Local chess master plays 15+ players simultaneously. A rare opportunity!'
    },
    {
      id: 'beginner-class-2',
      title: 'Advanced Tactics Workshop',
      date: getNextWeekday(4, 3), // 3 weeks from now Thursday
      time: '18:30',
      category: 'classes' as const,
      description: 'Intermediate workshop focusing on advanced tactical patterns.'
    }
  ]
  
  return [...events, ...specialEvents]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
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