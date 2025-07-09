import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  // Use local date components to avoid timezone issues
  const year = date.getFullYear()
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.getDate()
  return `${month} ${day}, ${year}`
}

export function formatTime(time: string): string {
  // Assumes time is in HH:MM format
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

// Create a timezone-safe date from YYYY-MM-DD string
export function createLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}