import Hero from '@/components/home/Hero'
import InfoCards from '@/components/home/InfoCards'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import Toast from '@/components/ui/Toast'
import { fetchEventsFromGoogleCalendar } from '@/lib/google-calendar'
import { fetchAnnouncementsFromAirtable, fetchCommunityCardsFromAirtable } from '@/lib/airtable'
import Image from 'next/image'
import type { Event, Announcement, CommunityCard } from '@/types'

// Force dynamic rendering to always show fresh Google Calendar data
export const dynamic = 'force-dynamic'

export default async function Home() {
  // Fetch all data concurrently for better performance
  let events: Event[] = []
  let announcements: Announcement[] = []
  let communityCards: CommunityCard[] = []
  
  try {
    const [eventsData, announcementsData, communityCardsData] = await Promise.all([
      fetchEventsFromGoogleCalendar(),
      fetchAnnouncementsFromAirtable(),
      fetchCommunityCardsFromAirtable()
    ])
    
    events = eventsData
    announcements = announcementsData
    communityCards = communityCardsData
  } catch (error) {
    console.error('Failed to fetch data for home page:', error)
    // Fallback functions will be called automatically in each fetch function
  }
  
  
  return (
    <>
      <Hero communityCards={communityCards} />
      <InfoCards />
      
      {/* Photo Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-cream to-burgundy-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
              Our Chess Community
            </h2>
            <p className="text-xl text-forest-700 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-baskerville)'}}>
              From casual games to intense competitions, see what makes our club special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/conentrating-people.jpeg" 
                alt="Players concentrating during a match" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/thinking-kid.jpeg" 
                alt="Young player contemplating next move" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/multiplayer.jpg" 
                alt="Multiple chess games in progress" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/onlooker-kid.jpeg" 
                alt="Young spectator watching a game" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/simultaneous.jpg" 
                alt="Simultaneous chess exhibition" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/DSC_3653.JPG" 
                alt="Chess club members socializing" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      <UpcomingEvents events={events} />
      <NewsletterSignup />
      
      {/* Toast for announcements */}
      <Toast announcements={announcements} />
    </>
  )
}
