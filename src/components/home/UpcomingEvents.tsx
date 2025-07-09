'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { categoryLabels } from '@/data/events'
import { formatDate, formatTime } from '@/lib/utils'
import type { Event } from '@/types'

interface UpcomingEventsProps {
  events: Event[]
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const nextThreeEvents = events.slice(0, 3)
  
  // Don't render anything if no events
  if (nextThreeEvents.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 relative paper-texture">
      {/* Classical decorative divider */}
      <div className="classical-divider mb-16"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 sm:text-5xl" style={{fontFamily: 'var(--font-playfair)'}}>
            Upcoming Gatherings
          </h2>
          <p className="mt-6 text-xl leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Join us for our upcoming chess events and friendly competitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {nextThreeEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="elegant-card h-full p-8 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="chess-piece-decoration text-2xl text-amber-600 group-hover:scale-110 transition-transform duration-300">
                    ♔
                  </span>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border-2 ${
                    event.category === 'tournament' 
                      ? 'bg-burgundy-100 text-burgundy-800 border-burgundy-300'
                      : event.category === 'classes'
                      ? 'bg-forest-100 text-forest-800 border-forest-300'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`} style={{fontFamily: 'var(--font-playfair)'}}>
                    {categoryLabels[event.category]}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                  {event.title}
                </h3>
                
                <div className="flex flex-col space-y-2 mb-6 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-amber-600" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-amber-600" />
                    {formatTime(event.time)}
                  </div>
                </div>
                
                <p className="text-burgundy-700 leading-relaxed" style={{fontFamily: 'var(--font-baskerville)'}}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/events" 
                className="inline-flex items-center px-10 py-4 border-2 border-amber-500 text-burgundy-700 rounded-lg hover:bg-amber-100 transition-all duration-300 group"
                style={{fontFamily: 'var(--font-playfair)'}}>
            <span className="font-semibold text-lg">View All Events</span>
            <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♔</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}