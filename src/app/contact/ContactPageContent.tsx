'use client'

import { MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

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
      'Drop in anytime during our hours',
      'All skill levels welcome'
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

  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" style={{fontFamily: 'var(--font-playfair)'}}>
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Questions about membership, meetings, or chess in general? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-burgundy-800 mb-8" style={{fontFamily: 'var(--font-playfair)'}}>Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="elegant-card p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <item.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>{item.title}</h3>
                      <div className="mt-2 space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 elegant-card p-8 bg-gradient-to-br from-amber-100 to-cream">
              <div className="chess-piece-decoration text-4xl text-burgundy-600 mb-4">♔</div>
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                Exciting News!
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                We&apos;re expanding to a new, larger space in September 2025! This will allow us to host more events, 
                accommodate more members, and offer enhanced facilities for our chess community.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="elegant-card p-3 text-burgundy-600 hover:text-amber-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="elegant-card p-3 text-burgundy-600 hover:text-amber-600 transition-colors"
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
            <h2 className="text-4xl font-bold text-burgundy-800 mb-8" style={{fontFamily: 'var(--font-playfair)'}}>
              Send us a Message
            </h2>
            
            <div className="elegant-card p-8 text-center">
              <div className="chess-piece-decoration text-6xl text-amber-600 mb-4">♔</div>
              <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                Contact Form Temporarily Disabled
              </h3>
              <p className="text-forest-700 text-lg" style={{fontFamily: 'var(--font-baskerville)'}}>
                Please email us directly at info@rocklandchessclub.org while we work on form improvements.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-burgundy-800 mb-8 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Find Us</h2>
          <div className="elegant-card p-12 text-center">
            <MapPinIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>Interactive Map Coming Soon</h3>
            <p className="text-forest-700 text-lg" style={{fontFamily: 'var(--font-baskerville)'}}>
              Visit us at 7 North Broadway, 3rd Floor in Nyack, NY. 
              Our location is easily accessible with parking available nearby.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}