import type { Announcement } from '@/types'

// Static announcements used as fallback when Airtable is unavailable
// These should be updated manually when needed
export const fallbackAnnouncements: Announcement[] = [
  {
    id: 'fallback-expansion',
    title: 'Expansion Announcement',
    description: 'New space opening September 2025',
    linkUrl: '/about',
    linkText: 'Learn More →',
    status: 'active',
    priority: 1,
    icon: '♔'
  },
  {
    id: 'fallback-welcome',
    title: 'Welcome to Rockland Chess Club',
    description: 'Join us for chess games, tournaments, and community events',
    linkUrl: '/join',
    linkText: 'Join Today →',
    status: 'active',
    priority: 2,
    icon: '♕'
  }
]