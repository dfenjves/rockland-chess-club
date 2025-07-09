export interface Event {
  id: string
  title: string
  date: Date
  time: string
  category: 'tournament' | 'casual' | 'classes' | 'board-games' | 'special'
  description: string
  location?: string
}

export interface Member {
  id: string
  name: string
  role?: string
  bio?: string
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  image?: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NewsletterForm {
  email: string
}

export interface Announcement {
  id: string
  title: string
  description: string
  linkUrl?: string
  linkText?: string
  status: 'active' | 'inactive'
  priority: number
  icon?: string
}

export interface CommunityCard {
  id: string
  title: string
  description: string
  icon: string
  order: number
  status: 'active' | 'inactive'
}