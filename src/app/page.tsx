import Hero from '@/components/home/Hero'
import InfoCards from '@/components/home/InfoCards'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <UpcomingEvents />
      <NewsletterSignup />
    </>
  )
}
