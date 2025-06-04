'use client'

import { motion } from 'framer-motion'

export default function NewsletterSignup() {

  return (
    <section className="bg-gradient-to-br from-burgundy-700 via-burgundy-600 to-forest-700 relative">
      {/* Ornamental top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70"></div>
      
      {/* Decorative chess pieces */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-12 left-20 text-6xl text-amber-500 transform rotate-12">♔</div>
        <div className="absolute bottom-12 right-20 text-5xl text-cream transform -rotate-12">♕</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-amber-500 transform rotate-45">♗</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-cream transform -rotate-30">♘</div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold text-cream sm:text-5xl mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
            Stay Connected
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-amber-100" style={{fontFamily: 'var(--font-baskerville)'}}>
            Receive updates about our gatherings, tournaments, and special club announcements.
          </p>
          
            <form 
              name="newsletter" 
              method="POST" 
              data-netlify="true"
              className="mt-10 flex flex-col sm:flex-row max-w-md mx-auto gap-4"
              onSubmit={(e) => {
                // Let the browser handle the submission naturally
                e.currentTarget.submit()
              }}
            >
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-burgundy-800 bg-cream border-2 border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300"
                  style={{fontFamily: 'var(--font-baskerville)'}}
                />
              </div>
              <button 
                type="submit"
                className="btn-classical px-8 py-3 group"
              >
                <span>Join Our Updates</span>
                <span className="chess-piece-decoration text-sm ml-2 group-hover:rotate-12 transition-transform duration-300">♔</span>
              </button>
            </form>
            
            {/* Elegant note */}
            <p className="mt-6 text-sm text-amber-200 italic" style={{fontFamily: 'var(--font-baskerville)'}}>
              We respect your privacy and will never share your information.
            </p>
        </motion.div>
      </div>
      
      {/* Ornamental bottom border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70"></div>
    </section>
  )
}