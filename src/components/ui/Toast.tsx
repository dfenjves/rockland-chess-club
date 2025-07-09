'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import type { Announcement } from '@/types'

interface ToastProps {
  announcements: Announcement[]
}

export default function Toast({ announcements }: ToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Filter active announcements - the status should be 'active' (lowercase)
  const activeAnnouncements = announcements.filter(announcement => announcement.status === 'active')
  

  useEffect(() => {
    if (activeAnnouncements.length > 0 && !isDismissed) {
      setIsVisible(true)
      
      // Auto-rotate announcements if there are multiple
      if (activeAnnouncements.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % activeAnnouncements.length)
        }, 5000) // Change every 5 seconds
        
        return () => clearInterval(interval)
      }
    }
  }, [activeAnnouncements.length, isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (activeAnnouncements.length === 0 || isDismissed) {
    return null
  }

  const currentAnnouncement = activeAnnouncements[currentIndex]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="elegant-card p-4 bg-gradient-to-r from-amber-50 to-cream border-l-4 border-amber-500 shadow-elegant">
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-3">
                <div className="flex items-center mb-2">
                  <div className="chess-piece-decoration text-amber-600 mr-2">♔</div>
                  <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                    {currentAnnouncement.title}
                  </h3>
                </div>
                <p className="text-forest-700 text-sm leading-relaxed" style={{fontFamily: 'var(--font-baskerville)'}}>
                  {currentAnnouncement.description}
                </p>
                
                {/* Progress dots for multiple announcements */}
                {activeAnnouncements.length > 1 && (
                  <div className="flex items-center mt-3 space-x-2">
                    {activeAnnouncements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-amber-500' : 'bg-amber-200'
                        }`}
                        aria-label={`Go to announcement ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={handleDismiss}
                className="text-forest-600 hover:text-forest-800 transition-colors duration-200 p-1"
                aria-label="Dismiss announcement"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}