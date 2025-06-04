'use client'

import { motion } from 'framer-motion'
import { ClockIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    title: 'Meeting Times',
    description: 'Regular weekly sessions',
    icon: ClockIcon,
    content: [
      'Thursdays: 7:00 PM - 9:00 PM',
      'Saturdays: 2:00 PM - 6:00 PM',
      'Special tournaments monthly'
    ]
  },
  {
    title: 'Location',
    description: 'Convenient Nyack location',
    icon: MapPinIcon,
    content: [
      '7 North Broadway, 3rd Floor',
      'Nyack, NY 10960',
      'Parking available nearby'
    ]
  },
  {
    title: 'All Skill Levels',
    description: 'Everyone is welcome',
    icon: UserGroupIcon,
    content: [
      'Complete beginners welcome',
      'Intermediate players thrive',
      'Expert players compete'
    ]
  },
  {
    title: 'Learning & Growth',
    description: 'Improve your game',
    icon: AcademicCapIcon,
    content: [
      'Weekly chess lessons',
      'Puzzle solving sessions',
      'Game analysis & review'
    ]
  }
]

export default function InfoCards() {
  return (
    <section className="py-24 bg-cream relative paper-texture">
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
            Essential Information
          </h2>
          <p className="mt-6 text-xl leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Everything you need to know about joining our welcoming chess club
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="elegant-card h-full p-8 hover:shadow-elegant transition-all duration-300 group">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400">
                    <card.icon className="h-8 w-8 text-burgundy-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                    {card.title}
                  </h3>
                  <p className="text-forest-600 mb-6" style={{fontFamily: 'var(--font-baskerville)'}}>
                    {card.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {card.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-burgundy-700 flex items-center" style={{fontFamily: 'var(--font-baskerville)'}}>
                      <span className="mr-3 chess-piece-decoration text-amber-600">♦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}