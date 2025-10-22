import type { Announcement } from '@/types'

// Announcements for the homepage toast
// Update these manually as needed
export const announcements: Announcement[] = [
  {
    id: 'welcome',
    title: 'Welcome to Rockland Chess Club',
    description: 'Join us for chess games, tournaments, and community events',
    linkUrl: '/join',
    linkText: 'Join Today →',
    status: 'active',
    priority: 1,
    icon: '♕'
  }
]

// Fallback for backward compatibility
export const fallbackAnnouncements = announcements