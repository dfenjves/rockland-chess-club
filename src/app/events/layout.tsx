import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | Rockland County Chess Club',
  description: 'View upcoming chess events, tournaments, classes, and casual play sessions at the Rockland County Chess Club.',
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}