import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Rockland Chess Club',
  description: 'Learn about the Rockland Chess Club - our history, mission, and what makes our community special.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}