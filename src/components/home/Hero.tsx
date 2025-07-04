'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 py-24 sm:py-40 paper-texture">
      
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
          
          {/* Classical announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="elegant-card inline-flex items-center px-8 py-4 mx-auto">
              <div className="flex items-center space-x-4">
                <span className="chess-piece-decoration text-amber-600">♔</span>
                <div className="text-center">
                  <div className="text-burgundy-700 font-semibold" style={{fontFamily: 'var(--font-playfair)'}}>
                    Expansion Announcement
                  </div>
                  <div className="text-forest-600 text-sm mt-1" style={{fontFamily: 'var(--font-baskerville)'}}>
                    New space opening September 2025
                  </div>
                </div>
                <Link href="/about" className="text-amber-600 hover:text-amber-700 transition-colors">
                  <span className="text-sm font-medium" style={{fontFamily: 'var(--font-playfair)'}}>
                    Learn More →
                  </span>
                </Link>
                <span className="chess-piece-decoration text-amber-600">♔</span>
              </div>
            </div>
          </motion.div>

          {/* Grand title with classical styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-burgundy-800 leading-tight" 
                style={{fontFamily: 'var(--font-playfair)'}}>
              <span className="block">The Rockland County</span>
              <span className="block text-amber-600 relative">
                Chess Club
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </span>
            </h1>
            <div className="mt-6 text-forest-700 text-xl italic" style={{fontFamily: 'var(--font-baskerville)'}}>
              &ldquo;Where chess lovers gather, learn, and grow together&rdquo;
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
            A warm, welcoming community for chess players of all skill levels. Whether you&apos;re taking your first steps or you&apos;re an experienced player, join us for tournaments, casual games, classes, and friendship.
          </motion.p>

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

          {/* Elegant features grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="elegant-card p-8 text-center group hover:shadow-elegant transition-all duration-300">
              <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4 group-hover:scale-110 transition-transform duration-300">♔</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                All Skill Levels
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                From beginners to masters, every player finds their place in our Club
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center group hover:shadow-elegant transition-all duration-300">
              <div className="chess-piece-decoration text-4xl text-forest-600 mb-4 group-hover:scale-110 transition-transform duration-300">♕</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                Regular Gatherings
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Casual matches, regular tournaments, and engaging classes
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center group hover:shadow-elegant transition-all duration-300">
              <div className="chess-piece-decoration text-4xl text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">♗</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                Instruction
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Our instructors offer guidance in the art and science of chess
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-burgundy-900/5 via-transparent to-amber-900/5"></div>
    </section>
  )
}