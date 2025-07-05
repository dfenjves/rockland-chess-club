import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Us | Rockland County Chess Club',
  description: 'Join the Rockland County Chess Club with flexible membership options. $100/year, $10/month, or $10 drop-in rates.',
}

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}