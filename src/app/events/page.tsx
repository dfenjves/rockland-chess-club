import type { Metadata } from 'next'
import EventCalendar from '@/components/events/EventCalendar'
import { upcomingEvents } from '@/data/events'

export const metadata: Metadata = {
  title: 'Events | Rockland Chess Club',
  description: 'View upcoming chess events, tournaments, classes, and casual play sessions at the Rockland Chess Club.',
}

// Generate more events for demonstration
const generateMoreEvents = () => {
  const additionalEvents = []
  const now = new Date()
  
  // Helper function to find next occurrence of a weekday
  const getNextWeekday = (weekday: number, weeksFromNow: number = 0) => {
    const date = new Date(now)
    const daysUntilWeekday = (weekday - date.getDay() + 7) % 7
    date.setDate(date.getDate() + daysUntilWeekday + (weeksFromNow * 7))
    return date
  }
  
  // Add next 8 weeks of Thursday and Saturday events
  for (let week = 0; week < 8; week++) {
    // Thursday Night Chess
    const thursday = getNextWeekday(4, week) // 4 = Thursday
    if (thursday > now) {
      additionalEvents.push({
        id: `thu-week-${week}`,
        title: 'Thursday Night Chess',
        date: thursday,
        time: '19:00',
        category: 'casual' as const,
        description: 'Casual games, analysis, and friendly competition. All skill levels welcome!'
      })
    }
    
    // Saturday events
    const saturday = getNextWeekday(6, week) // 6 = Saturday
    if (saturday > now) {
      additionalEvents.push({
        id: `sat-week-${week}`,
        title: week % 4 === 0 ? 'Monthly Tournament' : 'Saturday Chess Club',
        date: saturday,
        time: '14:00',
        category: week % 4 === 0 ? 'tournament' as const : 'casual' as const,
        description: week % 4 === 0 
          ? 'Monthly Swiss tournament with prizes. Registration starts at 1:30 PM.'
          : 'Weekend chess club with casual games and instruction.'
      })
    }
  }
  
  // Add some special events
  const specialEvents = [
    {
      id: 'puzzle-night',
      title: 'Chess Puzzle Championship',
      date: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      time: '19:00',
      category: 'special' as const,
      description: 'Test your tactical skills in our monthly puzzle-solving competition!'
    },
    {
      id: 'simul',
      title: 'Simultaneous Exhibition',
      date: new Date(now.getTime() + 25 * 24 * 60 * 60 * 1000), // 25 days from now
      time: '18:00',
      category: 'special' as const,
      description: 'Local chess master plays 20+ players simultaneously. A rare opportunity!'
    },
    {
      id: 'beginners-workshop',
      title: 'Beginners Workshop',
      date: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      time: '18:30',
      category: 'classes' as const,
      description: 'Perfect for new players! Learn the basics in a supportive environment.'
    },
    {
      id: 'game-night',
      title: 'Board Game Night',
      date: new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000), // 20 days from now
      time: '19:00',
      category: 'board-games' as const,
      description: 'Not just chess! Enjoy Scrabble, Settlers of Catan, and other strategy games.'
    }
  ]
  
  return [...upcomingEvents, ...additionalEvents, ...specialEvents]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

const allEvents = generateMoreEvents()

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Chess Events & Calendar
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for tournaments, casual play, classes, and special chess events throughout the month.
          </p>
        </div>
      </div>

      {/* Calendar and Events */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <EventCalendar events={allEvents} />
        
        {/* Event Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Tournament Play</h3>
            <p className="text-sm text-blue-700">
              Competitive rated games with prizes. Monthly Swiss tournaments and special events.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">Casual Nights</h3>
            <p className="text-sm text-green-700">
              Relaxed atmosphere for games, analysis, and socializing. Perfect for all skill levels.
            </p>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 mb-2">Chess Classes</h3>
            <p className="text-sm text-orange-700">
              Structured learning sessions covering everything from basics to advanced tactics.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Board Games</h3>
            <p className="text-sm text-purple-700">
              Not just chess! Enjoy other strategy games and puzzles in a fun, social setting.
            </p>
          </div>
        </div>

        {/* Regular Schedule */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regular Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Thursday Nights</h3>
              <p className="text-gray-600 mb-2">7:00 PM - 9:00 PM</p>
              <p className="text-sm text-gray-500">
                Casual games, instruction for beginners, and puzzle solving
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Saturday Afternoons</h3>
              <p className="text-gray-600 mb-2">2:00 PM - 6:00 PM</p>
              <p className="text-sm text-gray-500">
                Tournaments (first Saturday), casual play, and classes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}