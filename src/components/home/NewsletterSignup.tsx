'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import type { NewsletterForm } from '@/types'

export default function NewsletterSignup() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterForm>()

  const onSubmit = async (data: NewsletterForm) => {
    try {
      // Netlify Forms submission
      const formData = new URLSearchParams()
      formData.append('form-name', 'newsletter')
      formData.append('email', data.email)

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

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
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-lg bg-green-500 p-4 text-white"
            >
              <p className="font-semibold">Thank you for subscribing!</p>
              <p className="text-sm">We&apos;ll keep you updated on all club activities.</p>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit(onSubmit)} 
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
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 bg-white/20 text-white placeholder:text-blue-100 focus:ring-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-200">{errors.email.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}