'use client'

import EventCalendar from '@/components/events/EventCalendar'
import { upcomingEvents } from '@/data/events'
import { motion } from 'framer-motion'

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
  
  // Add next 8 weeks of Thursday events
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
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Chess Events & Calendar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-forest-700" 
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Join us for tournaments, casual play, classes, and special chess events throughout the month.
          </motion.p>
        </div>
      </div>

      {/* Calendar and Events */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <EventCalendar events={allEvents} />
        
        {/* Event Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <div className="chess-piece-decoration text-3xl text-burgundy-600 mb-4 group-hover:scale-110 transition-transform duration-300">♔</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Tournament Play</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Competitive rated games with prizes. Monthly Swiss tournaments and special events.
              </p>
            </div>
            
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <div className="chess-piece-decoration text-3xl text-forest-600 mb-4 group-hover:scale-110 transition-transform duration-300">♕</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Casual Nights</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Relaxed atmosphere for games, analysis, and socializing. Perfect for all skill levels.
              </p>
            </div>
            
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <div className="chess-piece-decoration text-3xl text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">♗</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Chess Classes</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Structured learning sessions covering everything from basics to advanced tactics.
              </p>
            </div>
            
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <div className="chess-piece-decoration text-3xl text-burgundy-600 mb-4 group-hover:scale-110 transition-transform duration-300">♘</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Board Games</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Not just chess! Enjoy other strategy games and puzzles in a fun, social setting.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Regular Schedule */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="classical-divider mb-16"></div>
          <div className="elegant-card p-12 bg-gradient-to-br from-amber-100 to-cream">
            <div className="text-center mb-8">
              <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
              <h2 className="text-4xl font-bold text-burgundy-800 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>Regular Schedule</h2>
            </div>
            <div className="text-center max-w-lg mx-auto">
              <div className="chess-piece-decoration text-2xl text-amber-600 mb-4">♖</div>
              <h3 className="text-2xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Thursday Nights</h3>
              <p className="text-xl text-forest-700 mb-2 font-semibold" style={{fontFamily: 'var(--font-baskerville)'}}>7:00 PM - 9:00 PM</p>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Casual games, instruction for beginners, puzzle solving, and friendly competition
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}