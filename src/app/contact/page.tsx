import type { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us | Rockland County Chess Club',
  description: 'Get in touch with the Rockland County Chess Club. Find our meeting location, hours, and contact information.',
}

export default function ContactPage() {
  return <ContactPageContent />
}