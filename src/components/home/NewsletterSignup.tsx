'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
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

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <section className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 relative paper-texture">
      {/* Classical decorative divider */}
      <div className="classical-divider mb-16"></div>
      
      {/* Decorative chess pieces */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-20 text-6xl text-burgundy-600 transform rotate-12">♔</div>
        <div className="absolute bottom-12 right-20 text-5xl text-amber-600 transform -rotate-12">♕</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-forest-600 transform rotate-45">♗</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-burgundy-600 transform -rotate-30">♘</div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 sm:text-5xl mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
            Stay Connected
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Receive updates about our gatherings, tournaments, and special club announcements.
          </p>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 elegant-card max-w-md mx-auto p-6 text-center bg-gradient-to-br from-cream to-amber-100"
            >
              <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-3">♔</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Welcome to Our Updates!
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Thank you for subscribing. You&apos;ll receive our latest news and announcements.
              </p>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit(onSubmit)}
              name="newsletter" 
              method="POST" 
              data-netlify="true"
              className="mt-10 flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
            >
              {/* Hidden form name for Netlify */}
              <input type="hidden" name="form-name" value="newsletter" />
              
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  name="email"
                  id="newsletter-email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-burgundy-800 bg-white border-2 border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-lg"
                  style={{fontFamily: 'var(--font-baskerville)'}}
                />
                {errors.email && (
                  <p className="mt-2 text-burgundy-600 text-sm" style={{fontFamily: 'var(--font-baskerville)'}}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-classical px-8 py-3 group disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full"
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Join Our Updates'}</span>
                <span className="chess-piece-decoration text-sm ml-2 group-hover:rotate-12 transition-transform duration-300">
                  {isSubmitting ? '⧗' : '♔'}
                </span>
              </button>
            </form>
          )}
            
          {/* Elegant note */}
          <p className="mt-6 text-sm text-forest-600 italic text-center" style={{fontFamily: 'var(--font-baskerville)'}}>
            We respect your privacy and will never share your information.
          </p>
        </motion.div>
      </div>
    </section>
  )
}