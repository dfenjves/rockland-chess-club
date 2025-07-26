'use client'

import { AcademicCapIcon, ClockIcon, UserGroupIcon, TrophyIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'

const skillLevels = [
  {
    title: 'Complete Beginner',
    icon: UserGroupIcon,
    description: 'Never played chess or need to learn the basics',
    characteristics: [
      'Learning how pieces move',
      'Understanding basic rules',
      'First chess games',
      'Building confidence'
    ]
  },
  {
    title: 'Beginner',
    icon: AcademicCapIcon,
    description: 'Knows the rules but wants to improve',
    characteristics: [
      'Knows piece movement',
      'Understands check/checkmate',
      'Ready for tactics training',
      'Seeking structured improvement'
    ]
  },
  {
    title: 'Intermediate',
    icon: TrophyIcon,
    description: 'Regular player looking to advance skills',
    characteristics: [
      'Comfortable with basic tactics',
      'Some opening knowledge',
      'Participates in tournaments',
      'Wants specialized training'
    ]
  },
  {
    title: 'Advanced',
    icon: ClockIcon,
    description: 'Strong player seeking mastery',
    characteristics: [
      'Solid tactical foundation',
      'Good positional understanding',
      'Tournament experience',
      'Focused on specific weaknesses'
    ]
  }
]

export default function ClassesPage() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Decorative chess pieces */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-20 left-20 text-6xl text-burgundy-600 transform rotate-12">♔</div>
        <div className="absolute bottom-20 right-20 text-5xl text-amber-600 transform -rotate-12">♕</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-forest-600 transform rotate-45">♗</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-burgundy-600 transform -rotate-30">♘</div>
      </div>

      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Chess Classes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-forest-700" 
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Structured learning for every skill level, from complete beginner to advanced player.
          </motion.p>
        </div>
      </div>

      {/* Skill Levels */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
            Find Your Level
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto" style={{fontFamily: 'var(--font-baskerville)'}}>
            Our classes are designed to meet you where you are and help you progress to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillLevels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="elegant-card p-8 text-center hover:shadow-elegant transition-all duration-300 group"
            >
              <level.icon className="h-10 w-10 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>{level.title}</h3>
              <p className="text-forest-700 mb-4" style={{fontFamily: 'var(--font-baskerville)'}}>{level.description}</p>
              <ul className="text-sm text-forest-600 space-y-2" style={{fontFamily: 'var(--font-baskerville)'}}>
                {level.characteristics.map((char, charIndex) => (
                  <li key={charIndex} className="flex items-center">
                    <span className="text-amber-600 mr-2">♦</span>
                    {char}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Learning Environment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="classical-divider mb-16"></div>
          <h2 className="text-4xl font-bold text-burgundy-800 text-center mb-12" style={{fontFamily: 'var(--font-playfair)'}}>
            Learning Environment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/thinking-kid.jpeg" 
                alt="Young student learning chess" 
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/onlooker-kid.jpeg" 
                alt="Student observing a chess game" 
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="elegant-card overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <Image 
                src="/images/image1.jpg" 
                alt="Chess instruction session" 
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Current Class Offerings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 text-center mb-12" style={{fontFamily: 'var(--font-playfair)'}}>
            September 2025 Classes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Kids Classes */}
            <div className="elegant-card p-8 bg-gradient-to-br from-amber-50 to-cream hover:shadow-elegant transition-all duration-300">
              <div className="text-center mb-6">
                <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♕</div>
                <h3 className="text-3xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                  Kids Chess Classes
                </h3>
                <p className="text-lg text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  For young chess enthusiasts who already know piece movement
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-forest-700">
                  <ClockIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>Tuesdays, 4:30 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <AcademicCapIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>6-week session: September 9 - October 14</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <UserGroupIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>Must already know how to move chess pieces</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <TrophyIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>$150 for complete 6-week session</span>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>What Your Child Will Learn:</h4>
                <ul className="space-y-2 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Basic tactics and strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Opening principles
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Endgame fundamentals
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Game analysis and improvement
                  </li>
                </ul>
              </div>

              <a href="https://www.zeffy.com/en-US/ticketing/rockland-county-chess-club" 
                 className="btn-classical w-full inline-flex items-center justify-center space-x-2 group"
                 target="_blank" 
                 rel="noopener noreferrer">
                <span>Register for Kids Classes</span>
                <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♕</span>
              </a>
            </div>

            {/* Adult Classes */}
            <div className="elegant-card p-8 bg-gradient-to-br from-burgundy-50 to-amber-50 hover:shadow-elegant transition-all duration-300">
              <div className="text-center mb-6">
                <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
                <h3 className="text-3xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                  Adult Chess Classes
                </h3>
                <p className="text-lg text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Structured learning for adult players of all levels
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-forest-700">
                  <ClockIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>Tuesdays, 6:00 PM - 7:30 PM</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <AcademicCapIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>6-week session: September 9 - October 14</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <UserGroupIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>All skill levels welcome</span>
                </div>
                <div className="flex items-center text-forest-700">
                  <TrophyIcon className="h-5 w-5 text-amber-600 mr-3" />
                  <span style={{fontFamily: 'var(--font-baskerville)'}}>FREE with chess club membership</span>
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Course Coverage:</h4>
                <ul className="space-y-2 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Strategic thinking and planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Advanced tactics and combinations
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Opening theory and repertoire
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Practical endgame knowledge
                  </li>
                </ul>
              </div>

              <a href="https://www.zeffy.com/en-US/ticketing/rockland-county-chess-club" 
                 className="btn-classical w-full inline-flex items-center justify-center space-x-2 group bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800"
                 target="_blank" 
                 rel="noopener noreferrer">
                <span>Register for Adult Classes</span>
                <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♔</span>
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="elegant-card p-8 mt-8 bg-gradient-to-br from-cream to-amber-50 max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
              Course Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
              <div>
                <h5 className="font-semibold text-burgundy-800 mb-2">Location</h5>
                <p>7 North Broadway, 3rd Floor<br />Nyack, NY 10960</p>
              </div>
              <div>
                <h5 className="font-semibold text-burgundy-800 mb-2">Session Length</h5>
                <p>6 weeks of structured instruction<br />Small class sizes for personalized attention</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-amber-500/30">
              <p className="text-forest-600">
                Questions about the classes? <a href="/contact" className="text-burgundy-800 hover:text-burgundy-600 font-semibold">Contact us</a> for more information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Learning Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center mb-6">
              <BookOpenIcon className="h-8 w-8 text-amber-600 mr-4" />
              <h3 className="text-2xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>Informal Learning</h3>
            </div>
            <div className="space-y-4 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
              <p>
                Every Thursday night, our experienced members provide guidance and instruction 
                during casual play sessions.
              </p>
              
              <div>
                <h4 className="font-semibold text-burgundy-800 mb-2">What You&apos;ll Get:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Personalized tips during games
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Post-game analysis and feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Tactical puzzle solving sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Opening and endgame guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center mb-6">
              <UserGroupIcon className="h-8 w-8 text-amber-600 mr-4" />
              <h3 className="text-2xl font-bold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>Private Lessons</h3>
            </div>
            <div className="space-y-4 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
              <p>
                Several of our experienced members offer private lessons for focused, 
                one-on-one learning tailored to your specific needs.
              </p>
              
              <div>
                <h4 className="font-semibold text-burgundy-800 mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Customized curriculum based on your goals
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Flexible scheduling around your availability
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Analysis of your own games
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">♦</span>
                    Faster improvement with focused attention
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-amber-500/30">
                <p className="text-sm text-forest-600 mb-4">
                  Rates and availability vary by instructor. Contact us to be connected with available tutors.
                </p>
                <a href="/contact" className="btn-classical inline-flex items-center space-x-2 group w-full justify-center">
                  <span>Inquire About Private Lessons</span>
                  <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="elegant-card p-12 text-center bg-gradient-to-br from-burgundy-50 to-amber-50"
        >
          <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-6">♔</div>
          <h2 className="text-3xl font-bold text-burgundy-800 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
            Ready to Improve Your Chess?
          </h2>
          <p className="text-forest-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{fontFamily: 'var(--font-baskerville)'}}>
            Join our welcoming community of chess enthusiasts. Whether you&apos;re just learning the rules 
            or looking to sharpen your competitive edge, you&apos;ll find the support and guidance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="btn-classical inline-flex items-center justify-center space-x-2 group">
              <span>Join The Club</span>
              <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♔</span>
            </a>
            <a href="/contact" className="btn-classical inline-flex items-center justify-center space-x-2 group bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800">
              <span>Ask Questions</span>
              <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♕</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}