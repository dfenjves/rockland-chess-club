'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const membershipBenefits = [
  'Access to all regular club meetings',
  'Priority registration for tournaments',
  'Discounted tournament entry fees', 
  'Access to club library and resources',
  'Opportunities for rated tournament play',
  'Free basic chess instruction',
  'Friendly community of chess enthusiasts',
  'Equipment provided (boards, sets, clocks)',
]

const pricingOptions = [
  {
    name: 'Annual Membership',
    price: '$100',
    period: 'per year',
    description: 'Best value for regular attendees',
    features: membershipBenefits,
    recommended: true,
    zeffyFormLink: 'https://www.zeffy.com/embed/ticketing/904a5273-861e-4aa0-ba62-16d4df387e95?modal=true'
  },
  {
    name: 'Monthly Membership', 
    price: '$10',
    period: 'per month',
    description: 'Perfect for trying us out',
    features: membershipBenefits,
    recommended: false,
    zeffyFormLink: 'https://www.zeffy.com/embed/ticketing/904a5273-861e-4aa0-ba62-16d4df387e95?modal=true'
  },
  {
    name: 'Drop-in Rate',
    price: '$10',
    period: 'per visit',
    description: 'Casual attendance option',
    features: [
      'Access to that day&apos;s activities',
      'Equipment provided',
      'Casual games and instruction',
      'Meet the community'
    ],
    recommended: false,
    note: 'Pay at the door - cash or card accepted'
  }
]

const faqs = [
  {
    question: "I'm a complete beginner. Can I still join?",
    answer: "Absolutely! We welcome players of all skill levels, including complete beginners. We have experienced members who love teaching the basics, and you'll find a supportive environment to learn and grow."
  },
  {
    question: "Do I need to bring my own chess set?",
    answer: "No, we provide all equipment including chess sets, boards, and clocks. However, you're welcome to bring your own if you prefer."
  },
  {
    question: "What age groups participate?",
    answer: "Our club welcomes all ages! We have members ranging from teenagers to seniors, creating a diverse and enriching community."
  },
  {
    question: "Can I try before committing to membership?",
    answer: "Yes! You can drop in for $10 to experience our club before deciding on a membership. We're confident you'll love our welcoming community."
  },
  {
    question: "Are there opportunities for competitive play?",
    answer: "Yes, we host monthly tournaments and many of our members participate in rated tournament play. We cater to both casual and competitive players."
  }
]

export default function JoinPage() {
  useEffect(() => {
    // Check if Zeffy script is loaded and working
    const checkZeffy = () => {
      console.log('Checking for Zeffy script...')
      console.log('Window.Zeffy:', (window as Window & { Zeffy?: unknown }).Zeffy)
      console.log('Document scripts:', Array.from(document.scripts).filter(s => s.src.includes('zeffy')))
    }
    
    // Check immediately and after a delay
    checkZeffy()
    setTimeout(checkZeffy, 2000)
  }, [])

  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Join Our Chess Family
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-forest-700" 
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Flexible membership options to fit your schedule and commitment level
          </motion.p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 sm:text-5xl" style={{fontFamily: 'var(--font-playfair)'}}>
            Membership Options
          </h2>
          <p className="mt-6 text-xl leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Choose the option that works best for you. All members get access to our full community and activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingOptions.map((option, index) => (
            <motion.div 
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative elegant-card p-8 ${
                option.recommended 
                  ? 'border-2 border-amber-500 ring-2 ring-amber-300 bg-gradient-to-br from-amber-50 to-cream' 
                  : ''
              } hover:shadow-elegant transition-all duration-300 group`}
            >
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-burgundy-600 px-4 py-1 text-sm font-medium text-cream" style={{fontFamily: 'var(--font-playfair)'}}>
                    ♔ Recommended ♔
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="chess-piece-decoration text-3xl text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">♔</div>
                <h3 className="text-2xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>{option.name}</h3>
                <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>{option.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>{option.price}</span>
                  <span className="text-lg font-medium text-forest-600" style={{fontFamily: 'var(--font-baskerville)'}}>/{option.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>{feature}</span>
                  </li>
                ))}
              </ul>

              {option.zeffyFormLink ? (
                <button 
                  zeffy-form-link={option.zeffyFormLink}
                  className="btn-classical w-full text-lg px-8 py-4 group"
                  onClick={() => {
                    console.log('Zeffy link clicked:', option.zeffyFormLink)
                    
                    // Try multiple approaches for Zeffy modal
                    const windowWithZeffy = window as Window & { 
                      Zeffy?: { open?: (url: string) => void }
                      zeffyModal?: (url: string) => void
                    }
                    
                    if (windowWithZeffy.Zeffy?.open) {
                      console.log('Using Zeffy API')
                      windowWithZeffy.Zeffy.open(option.zeffyFormLink)
                    } else if (windowWithZeffy.zeffyModal) {
                      console.log('Using zeffyModal function')
                      windowWithZeffy.zeffyModal(option.zeffyFormLink)
                    } else {
                      console.log('Zeffy script not found, opening in new window')
                      // Fallback: open in new window
                      const fallbackUrl = option.zeffyFormLink.replace('?modal=true', '')
                      window.open(fallbackUrl, '_blank', 'width=800,height=900,scrollbars=yes,resizable=yes')
                    }
                  }}
                >
                  <span>Join Now</span>
                  <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♔</span>
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-forest-700 mb-4" style={{fontFamily: 'var(--font-baskerville)'}}>{option.note}</p>
                  <button className="w-full px-8 py-4 border-2 border-amber-500 text-burgundy-700 rounded-lg hover:bg-amber-100 transition-all duration-300" style={{fontFamily: 'var(--font-playfair)'}} disabled>
                    <span className="font-semibold">Pay at Door</span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 elegant-card p-12 bg-gradient-to-br from-amber-100 to-cream"
        >
          <div className="text-center mb-8">
            <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
            <h3 className="text-3xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>Why Join Our Club?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="chess-piece-decoration text-2xl text-amber-600 mb-3">♕</div>
              <h4 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Community & Friendship</h4>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Connect with fellow chess enthusiasts in a welcoming, supportive environment. 
                Many of our members have formed lasting friendships beyond the chess board.
              </p>
            </div>
            <div className="text-center">
              <div className="chess-piece-decoration text-2xl text-amber-600 mb-3">♗</div>
              <h4 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Skill Development</h4>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Improve your game through regular play, instruction, and analysis. 
                Our experienced members are always happy to share knowledge and help you grow.
              </p>
            </div>
            <div className="text-center">
              <div className="chess-piece-decoration text-2xl text-amber-600 mb-3">♘</div>
              <h4 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Regular Activities</h4>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Weekly meetings, monthly tournaments, puzzle sessions, and special events 
                keep our calendar full of engaging chess activities.
              </p>
            </div>
            <div className="text-center">
              <div className="chess-piece-decoration text-2xl text-amber-600 mb-3">♖</div>
              <h4 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>All Ages Welcome</h4>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Our diverse membership spans all age groups, creating rich opportunities 
                for intergenerational learning and mentorship.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="classical-divider mb-16"></div>
          <h2 className="text-4xl font-bold text-burgundy-800 text-center mb-12" style={{fontFamily: 'var(--font-playfair)'}}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="elegant-card p-6"
                >
                  <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                    {faq.question}
                  </h3>
                  <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="classical-divider mb-16"></div>
          <h2 className="text-3xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
            Ready to Join Our Chess Community?
          </h2>
          <p className="text-forest-700 mb-8 max-w-2xl mx-auto text-lg" style={{fontFamily: 'var(--font-baskerville)'}}>
            Choose your membership option above, or drop by one of our meetings to experience 
            the Rockland Chess Club firsthand. We can&apos;t wait to welcome you!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#pricing" className="btn-classical text-lg px-10 py-4 group">
              <span>Choose Membership</span>
              <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♔</span>
            </a>
            <a href="/contact" 
               className="inline-flex items-center px-10 py-4 border-2 border-amber-500 text-burgundy-700 rounded-lg hover:bg-amber-100 transition-all duration-300 group"
               style={{fontFamily: 'var(--font-playfair)'}}
            >
              <span className="font-semibold text-lg">Ask Questions</span>
              <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♕</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}