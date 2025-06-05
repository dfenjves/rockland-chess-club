'use client'

import { MapPinIcon, ClockIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            About Our Club
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-forest-700" 
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Building a welcoming chess community in Rockland County since 2020
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="elegant-card p-12 bg-gradient-to-br from-amber-100 to-cream">
              <div className="text-center mb-8">
                <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
                <h2 className="text-4xl font-bold text-burgundy-800 mb-8" style={{fontFamily: 'var(--font-playfair)'}}>Our Mission</h2>
              </div>
              
              <p className="text-xl leading-8 text-forest-700 mb-6 text-center italic" style={{fontFamily: 'var(--font-baskerville)'}}>
                &ldquo;The Rockland Chess Club exists to foster a love of chess in our community by providing a welcoming, 
                inclusive environment where players of all skill levels can learn, compete, and grow together.&rdquo;
              </p>
              
              <div className="classical-divider my-8"></div>
              
              <p className="text-lg leading-8 text-forest-700 text-center" style={{fontFamily: 'var(--font-baskerville)'}}>
                Whether you&apos;re brand new to chess or a seasoned tournament player, our club offers something for everyone. 
                We believe chess is not just a game, but a tool for building critical thinking skills, forming friendships, 
                and creating lasting memories.
              </p>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>What to Expect</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="chess-piece-decoration text-3xl text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">♕</div>
                  <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>For New Players</h3>
                </div>
                <ul className="space-y-3 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Friendly introduction to chess basics
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Patient instruction from experienced players
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    No pressure, just fun learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Equipment provided
                  </li>
                </ul>
              </div>
              <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="chess-piece-decoration text-3xl text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">♗</div>
                  <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>For Experienced Players</h3>
                </div>
                <ul className="space-y-3 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Competitive tournament play
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Analysis of games and positions
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Opportunities to teach others
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Regular challenging opponents
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Meeting Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Meeting Details</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="elegant-card p-8">
                <div className="flex items-center justify-center mb-6">
                  <ClockIcon className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>Regular Meetings</h3>
                </div>
                <div className="space-y-3 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <p><strong>Thursdays:</strong> 7:00 PM - 9:00 PM</p>
                  <div className="classical-divider my-4"></div>
                  <p className="text-sm italic">Drop in anytime during these hours. No need to stay for the entire session.</p>
                </div>
              </div>
              
              <div className="elegant-card p-8">
                <div className="flex items-center justify-center mb-6">
                  <MapPinIcon className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>Location</h3>
                </div>
                <div className="space-y-3 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <p className="font-medium">7 North Broadway, 3rd Floor</p>
                  <p>Nyack, NY 10960</p>
                  <p>Accessible venue with parking available</p>
                  <div className="classical-divider my-4"></div>
                  <p className="text-sm italic text-amber-700">♔ New expanded space launching September 2025! ♔</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Club Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Our Community</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="elegant-card text-center p-8 hover:shadow-elegant transition-all duration-300 group">
                <UserGroupIcon className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>50+</div>
                <div className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>Active Members</div>
              </div>
              <div className="elegant-card text-center p-8 hover:shadow-elegant transition-all duration-300 group">
                <TrophyIcon className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>12</div>
                <div className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>Tournaments per Year</div>
              </div>
              <div className="elegant-card text-center p-8 hover:shadow-elegant transition-all duration-300 group">
                <ClockIcon className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>4</div>
                <div className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>Years Established</div>
              </div>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Leadership & Contact</h2>
            <div className="elegant-card p-12 bg-gradient-to-br from-amber-100 to-cream">
              <div className="text-center mb-8">
                <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
              </div>
              <p className="text-lg text-forest-700 mb-6 text-center" style={{fontFamily: 'var(--font-baskerville)'}}>
                Our club is run by passionate chess enthusiasts who volunteer their time to make our community thrive. 
                We welcome input from all members on how to improve and grow our club.
              </p>
              <div className="classical-divider my-8"></div>
              <p className="text-forest-700 text-center" style={{fontFamily: 'var(--font-baskerville)'}}>
                Questions about the club? Want to get involved in leadership? 
                Reach out to us through our <a href="/contact" className="text-amber-700 hover:text-amber-800 font-semibold transition-colors">contact page</a> 
                or speak with any of our organizers at a meeting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}