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