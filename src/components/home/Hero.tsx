'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { CommunityCard } from '@/types'

interface HeroProps {
  communityCards: CommunityCard[]
}

export default function Hero({ communityCards }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 py-12 sm:py-20 paper-texture">
      
      {/* Classical background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-8xl text-burgundy-600 transform rotate-12">♔</div>
        <div className="absolute top-40 right-32 text-6xl text-forest-600 transform -rotate-6">♕</div>
        <div className="absolute bottom-32 left-40 text-7xl text-amber-600 transform rotate-45">♗</div>
        <div className="absolute bottom-20 right-20 text-5xl text-burgundy-600 transform -rotate-12">♘</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-forest-600 transform rotate-30">♖</div>
        <div className="absolute top-1/3 right-1/4 text-6xl text-amber-600 transform -rotate-30">♙</div>
      </div>

      <div className="mx-auto max-w-6xl px-8 lg:px-12 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Large logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <Image 
                src="/new-logo.png" 
                alt="Rockland County Chess Club" 
                width={448} 
                height={448}
                priority
                className="w-[28rem] h-[28rem] object-contain"
                sizes="(max-width: 768px) 100vw, 28rem"
              />
            </div>
            <div className="mt-6 text-forest-700 text-xl italic" style={{fontFamily: 'var(--font-baskerville)'}}>
              Play chess. Make friends. All skill levels welcome.
            </div>
          </motion.div>

          {/* Elegant description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl leading-relaxed text-burgundy-700 max-w-3xl mx-auto"
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Join Rockland County&apos;s friendliest chess club. We meet every Thursday from 7-9 PM in Nyack. Beginners and experts play side by side.
          </motion.p>

          {/* First Visit Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 bg-amber-100 border-2 border-amber-400 rounded-lg px-6 py-3"
          >
            <span className="text-2xl">👋</span>
            <span className="text-burgundy-800 font-medium" style={{fontFamily: 'var(--font-baskerville)'}}>
              <strong>First visit?</strong> Just drop in any Thursday — $10 at the door, no reservation needed.
            </span>
          </motion.div>

          {/* Classical action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/join" className="btn-classical text-lg px-10 py-4 group">
              <span>Join The Club</span>
              <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♔</span>
            </Link>
            
            <Link href="/events" 
                  className="inline-flex items-center px-10 py-4 border-2 border-amber-500 text-burgundy-700 rounded-lg hover:bg-amber-100 transition-all duration-300 group"
                  style={{fontFamily: 'var(--font-playfair)'}}>
              <span className="font-semibold text-lg">View Events</span>
              <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">♕</span>
            </Link>
          </motion.div>

          {/* Classical divider */}
          <div className="classical-divider mt-16 mb-12"></div>

          {/* Dynamic community cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {communityCards.map((card, index) => {
              const colors = ['text-burgundy-600', 'text-forest-600', 'text-amber-600']
              const colorClass = colors[index % colors.length]
              
              return (
                <div key={card.id} className="elegant-card p-8 text-center group hover:shadow-elegant transition-all duration-300">
                  <div className={`chess-piece-decoration text-4xl ${colorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                    {card.title}
                  </h3>
                  <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                    {card.description}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-burgundy-900/5 via-transparent to-amber-900/5"></div>
    </section>
  )
}