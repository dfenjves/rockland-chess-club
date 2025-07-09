import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  // Use consistent timezone formatting for both development and production
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York' // Force Eastern timezone for consistency
  }).format(date)
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
  
  // Create date in Eastern timezone to ensure consistency between dev and production
  const easternDate = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
  easternDate.setFullYear(year, month - 1, day)
  easternDate.setHours(12, 0, 0, 0) // Set to noon to avoid DST boundary issues
  
  return easternDate
}