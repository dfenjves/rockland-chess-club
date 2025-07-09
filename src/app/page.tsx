import Hero from '@/components/home/Hero'
import InfoCards from '@/components/home/InfoCards'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import { fetchEventsFromAirtable } from '@/lib/airtable'
import Image from 'next/image'
import type { Event } from '@/types'

export default async function Home() {
  // Fetch events for the upcoming events section with error handling
  let events: Event[] = []
  try {
    events = await fetchEventsFromAirtable()
  } catch (error) {
    console.error('Failed to fetch events for home page:', error)
    // Use empty array as fallback
    events = []
  }
  return (
    <>
      <Hero />
      <InfoCards />
      
      {/* Photo Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-cream to-burgundy-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/DSC_3177.JPG" 
                alt="Chess club activity" 
                width={600}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/DSC_3653.JPG" 
                alt="Chess club members" 
                width={600}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      <UpcomingEvents events={events} />
      <NewsletterSignup />
    </>
  )
}
