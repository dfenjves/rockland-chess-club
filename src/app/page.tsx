import Hero from '@/components/home/Hero'
import InfoCards from '@/components/home/InfoCards'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import { fetchEventsFromAirtable, fetchAnnouncementsFromAirtable, fetchCommunityCardsFromAirtable } from '@/lib/airtable'
import Image from 'next/image'
import type { Event, Announcement, CommunityCard } from '@/types'

// Force dynamic rendering to always show fresh Airtable data
export const dynamic = 'force-dynamic'

export default async function Home() {
  // Fetch all data concurrently for better performance
  let events: Event[] = []
  let announcements: Announcement[] = []
  let communityCards: CommunityCard[] = []
  
  try {
    const [eventsData, announcementsData, communityCardsData] = await Promise.all([
      fetchEventsFromAirtable(),
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
      <Hero announcements={announcements} communityCards={communityCards} />
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
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Focused Competition
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Deep concentration during tournament play
                </p>
              </div>
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/thinking-kid.jpeg" 
                alt="Young player contemplating next move" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Young Strategists
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Learning the art of chess at any age
                </p>
              </div>
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/multiplayer.jpg" 
                alt="Multiple chess games in progress" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Active Community
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Multiple games happening simultaneously
                </p>
              </div>
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/onlooker-kid.jpeg" 
                alt="Young spectator watching a game" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Learning by Watching
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Observing games teaches valuable lessons
                </p>
              </div>
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/simultaneous.jpg" 
                alt="Simultaneous chess exhibition" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Special Events
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Simultaneous exhibitions and tournaments
                </p>
              </div>
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/DSC_3653.JPG" 
                alt="Chess club members socializing" 
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                  Social Atmosphere
                </h3>
                <p className="text-forest-700 text-sm mt-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Building friendships through chess
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <UpcomingEvents events={events} />
      <NewsletterSignup />
    </>
  )
}
