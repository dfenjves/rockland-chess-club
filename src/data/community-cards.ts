import type { CommunityCard } from '@/types'

// Community cards for the homepage
// Update these manually as needed
export const communityCards: CommunityCard[] = [
  {
    id: 'skill-levels',
    title: 'All Skill Levels',
    description: 'From beginners to masters, every player finds their place in our Club',
    icon: '♔',
    order: 1,
    status: 'active'
  },
  {
    id: 'gatherings',
    title: 'Regular Gatherings',
    description: 'Casual matches, regular tournaments, and engaging classes',
    icon: '♕',
    order: 2,
    status: 'active'
  },
  {
    id: 'instruction',
    title: 'Instruction',
    description: 'Our instructors offer guidance in the art and science of chess',
    icon: '♗',
    order: 3,
    status: 'active'
  }
]

// Fallback for backward compatibility
export const fallbackCommunityCards = communityCards