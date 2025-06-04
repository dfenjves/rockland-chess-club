'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

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
              netlify-honeypot="bot-field"
              data-netlify="true"
              method="POST"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="hidden">
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-0 bg-white/20 text-white placeholder:text-blue-100 focus:ring-white"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Subscribe
              </Button>
            </form>
        </motion.div>
      </div>
    </section>
  )
}