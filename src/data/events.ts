import type { Event } from '@/types'

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Thursday Night Chess',
    date: new Date('2024-12-12'),
    time: '19:00',
    category: 'casual',
    description: 'Casual games and friendly competition. All skill levels welcome!'
  },
  {
    id: '2', 
    title: 'Saturday Tournament',
    date: new Date('2024-12-14'),
    time: '14:00',
    category: 'tournament',
    description: 'Monthly Swiss tournament with prizes. Registration starts at 1:30 PM.'
  },
  {
    id: '3',
    title: 'Beginner Chess Class',
    date: new Date('2024-12-18'),
    time: '18:30',
    category: 'classes',
    description: 'Learn the basics of chess in a supportive environment.'
  },
  {
    id: '4',
    title: 'Board Game Night',
    date: new Date('2024-12-21'),
    time: '19:00', 
    category: 'board-games',
    description: 'Not just chess! Enjoy other strategy games and puzzles.'
  }
]

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