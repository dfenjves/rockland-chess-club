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
          
            <form 
              className="mt-8 flex max-w-md mx-auto gap-x-4"
              name="newsletter"
              method="POST"
              data-netlify="true"
            >
              <div className="min-w-0 flex-1">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-0 bg-white/20 text-white placeholder:text-blue-100 focus:ring-white min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
        </motion.div>
      </div>
    </section>
  )
}