'use client'

import { useState } from 'react'
import { MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import type { ContactForm } from '@/types'

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Location',
    details: [
      '7 North Broadway, 3rd Floor',
      'Nyack, NY 10960',
      'Accessible venue with parking available'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Meeting Hours',
    details: [
      'Thursdays: 7:00 PM - 9:00 PM',
      'Saturdays: 2:00 PM - 6:00 PM',
      'Drop in anytime during hours'
    ]
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: [
      'info@rocklandchessclub.org',
      'We respond within 24 hours',
      'Questions always welcome'
    ]
  }
]

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Questions about membership, meetings, or chess in general? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <div className="mt-2 space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎉 Exciting News!
              </h3>
              <p className="text-gray-600">
                We&apos;re expanding to a new, larger space in September 2025! This will allow us to host more events, 
                accommodate more members, and offer enhanced facilities for our chess community.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.57 14.244c.48.48 1.15.797 1.879.797.729 0 1.399-.317 1.879-.797l1.449 1.447c-.88.807-2.031 1.297-3.328 1.297zm7.198 0c-1.297 0-2.448-.49-3.328-1.297l1.449-1.447c.48.48 1.15.797 1.879.797.729 0 1.399-.317 1.879-.797l1.449 1.447c-.88.807-2.031 1.297-3.328 1.297z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 mb-2">
                  <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                className="space-y-6"
                name="contact"
                netlify-honeypot="bot-field"
                data-netlify="true"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your chess experience, questions about the club, or anything else you&apos;d like to know..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map Coming Soon</h3>
            <p className="text-gray-600">
              Visit us at 7 North Broadway, 3rd Floor in Nyack, NY. 
              Our location is easily accessible with parking available nearby.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}