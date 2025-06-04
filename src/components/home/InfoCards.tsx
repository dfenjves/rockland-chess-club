'use client'

import { motion } from 'framer-motion'
import { ClockIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What You Need to Know
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to get started with the Rockland Chess Club
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <card.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {card.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}