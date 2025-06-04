'use client'

import { motion } from 'framer-motion'

export default function NewsletterSignup() {

  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Get the latest news about events, tournaments, and special announcements delivered to your inbox.
          </p>
          
            <form name="newsletter" method="POST" data-netlify="true">
              <p>
                <label>Email: <input type="email" name="email" required /></label>
              </p>
              <p>
                <button type="submit">Subscribe</button>
              </p>
            </form>
        </motion.div>
      </div>
    </section>
  )
}