import type { CommunityCard } from '@/types'

// Static community cards used as fallback when Airtable is unavailable
// These should be updated manually when needed
export const fallbackCommunityCards: CommunityCard[] = [
  {
    id: 'fallback-skill-levels',
    title: 'All Skill Levels',
    description: 'From beginners to masters, every player finds their place in our Club',
    icon: '♔',
    order: 1,
    status: 'active'
  },
  {
    id: 'fallback-gatherings',
    title: 'Regular Gatherings',
    description: 'Casual matches, regular tournaments, and engaging classes',
    icon: '♕',
    order: 2,
    status: 'active'
  },
  {
    id: 'fallback-instruction',
    title: 'Instruction',
    description: 'Our instructors offer guidance in the art and science of chess',
    icon: '♗',
    order: 3,
    status: 'active'
  },
  {
    id: 'fallback-community',
    title: 'Vibrant Community',
    description: 'Connect with fellow chess enthusiasts in Rockland County',
    icon: '♘',
    order: 4,
    status: 'active'
  }
]