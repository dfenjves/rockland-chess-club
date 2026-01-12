import type { CommunityCard } from '@/types'

// Community cards for the homepage
// Update these manually as needed
export const communityCards: CommunityCard[] = [
  {
    id: 'skill-levels',
    title: 'All Skill Levels',
    description: "Never played? No problem. We'll teach you. Already good? You'll find worthy opponents.",
    icon: '♔',
    order: 1,
    status: 'active'
  },
  {
    id: 'gatherings',
    title: 'Regular Gatherings',
    description: 'Every Thursday night plus monthly tournaments and weekly classes',
    icon: '♕',
    order: 2,
    status: 'active'
  },
  {
    id: 'instruction',
    title: 'Instruction',
    description: 'Free lessons for members. Kids and adult classes available.',
    icon: '♗',
    order: 3,
    status: 'active'
  }
]

// Fallback for backward compatibility
export const fallbackCommunityCards = communityCards