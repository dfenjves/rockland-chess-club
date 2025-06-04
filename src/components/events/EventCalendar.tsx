'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { categoryColors, categoryLabels } from '@/data/events'
import { formatDate, formatTime } from '@/lib/utils'
import type { Event } from '@/types'
import 'react-calendar/dist/Calendar.css'

interface EventCalendarProps {
  events: Event[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Filter events by category
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory)

  // Get events for selected date
  const eventsForDate = filteredEvents.filter(event => 
    event.date.toDateString() === selectedDate.toDateString()
  )

  // Get upcoming events (next 30 days)
  const thirtyDaysFromNow = new Date()
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)
  
  const upcomingFilteredEvents = filteredEvents
    .filter(event => event.date >= new Date() && event.date <= thirtyDaysFromNow)
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  // Check if date has events
  const hasEvents = (date: Date) => {
    return filteredEvents.some(event => 
      event.date.toDateString() === date.toDateString()
    )
  }

  // Get tile content for calendar
  const getTileContent = ({ date }: { date: Date }) => {
    if (hasEvents(date)) {
      return <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1"></div>
    }
    return null
  }

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'tournament', label: 'Tournaments' },
    { value: 'casual', label: 'Casual Play' },
    { value: 'classes', label: 'Classes' },
    { value: 'board-games', label: 'Board Games' },
    { value: 'special', label: 'Special Events' }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Calendar and Filters */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Event Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Calendar */}
            <div className="calendar-container">
              <Calendar
                onChange={(date) => setSelectedDate(date as Date)}
                value={selectedDate}
                tileContent={getTileContent}
                className="w-full border-0"
              />
            </div>

            {/* Selected Date Events */}
            {eventsForDate.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">
                  Events on {formatDate(selectedDate)}
                </h3>
                <div className="space-y-2">
                  {eventsForDate.map(event => (
                    <div key={event.id} className="text-sm p-2 bg-gray-50 rounded">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-gray-600">{formatTime(event.time)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Event List */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'all' ? 'Upcoming Events' : `Upcoming ${categories.find(c => c.value === selectedCategory)?.label}`}
          </h2>
          <div className="text-sm text-gray-600">
            {upcomingFilteredEvents.length} events in the next 30 days
          </div>
        </div>

        <div className="space-y-6">
          {upcomingFilteredEvents.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'all' 
                    ? 'No upcoming events in the next 30 days.'
                    : `No upcoming ${categories.find(c => c.value === selectedCategory)?.label.toLowerCase()} in the next 30 days.`
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            upcomingFilteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {event.title}
                          </h3>
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[event.category]}`}>
                            {categoryLabels[event.category]}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {formatTime(event.time)}
                      </div>
                      {event.location && (
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {event.date < new Date() ? 'Past Event' : 
                           event.date.toDateString() === new Date().toDateString() ? 'Today' :
                           `${Math.ceil((event.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days away`}
                        </div>
                        {event.date >= new Date() && (
                          <Button variant="outline" size="sm">
                            More Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}