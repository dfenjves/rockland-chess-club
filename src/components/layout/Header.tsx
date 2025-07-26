'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Classes', href: '/classes' },
  { name: 'Join', href: '/join' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-cream relative border-b-2 border-amber-500 shadow-elegant z-50">
      {/* Ornamental top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70"></div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-12 relative" aria-label="Global">
        {/* Decorative corner elements */}
        <div className="ornamental-corner top-left"></div>
        <div className="ornamental-corner top-right"></div>
        
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Rockland County Chess Club</span>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image 
                  src="/favicon-32x32.png" 
                  alt="Rockland County Chess Club" 
                  width={56} 
                  height={56}
                  priority
                  className="h-14 w-14 relative z-10 object-contain"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-burgundy-800" 
                      style={{fontFamily: 'var(--font-playfair)'}}>
                  Rockland County Chess Club
                </span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-burgundy-600 hover:bg-amber-100 transition-all duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        
        {/* Classical navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item, index) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className="text-lg font-medium text-burgundy-800 hover:text-amber-600 transition-colors duration-300 relative py-2 px-4 group"
                style={{fontFamily: 'var(--font-playfair)'}}
                prefetch={true}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              {index < navigation.length - 1 && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-px h-6 bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-30"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/join"
            className="btn-classical inline-flex items-center space-x-2 group"
          >
            <span>Join The Club</span>
            <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♔</span>
          </Link>
        </div>
        
        {/* Bottom decorative border */}
        <div className="ornamental-corner bottom-left"></div>
        <div className="ornamental-corner bottom-right"></div>
      </nav>

      {/* Classical Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50 bg-burgundy-900/30 backdrop-blur-sm"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-cream px-8 py-8 sm:max-w-sm border-l-4 border-amber-500 shadow-elegant">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Rockland County Chess Club</span>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image 
                      src="/favicon-32x32.png" 
                      alt="Rockland County Chess Club" 
                      width={40} 
                      height={40}
                      className="h-10 w-10 relative z-10 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-burgundy-800" 
                          style={{fontFamily: 'var(--font-playfair)'}}>
                      RCC
                    </span>
                    <span className="text-xs text-forest-600 italic -mt-1"
                          style={{fontFamily: 'var(--font-baskerville)'}}>
                      Chess Club
                    </span>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-burgundy-600 hover:bg-amber-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            
            {/* Decorative divider */}
            <div className="classical-divider mb-8"></div>
            
            <div className="flow-root">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-4 text-lg font-medium text-burgundy-800 hover:bg-amber-100 hover:text-burgundy-900 rounded-lg transition-all duration-300 group"
                      style={{fontFamily: 'var(--font-playfair)'}}
                      onClick={() => setMobileMenuOpen(false)}
                      prefetch={true}
                    >
                      <span>{item.name}</span>
                      <span className="chess-piece-decoration text-xs group-hover:rotate-12 transition-transform duration-300">
                        {['♔', '♕', '♗', '♘', '♖', '♙'][index]}
                      </span>
                    </Link>
                    {index < navigation.length - 1 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30 mx-4"></div>
                    )}
                  </div>
                ))}
                
                {/* Classical divider */}
                <div className="classical-divider my-8"></div>
                
                <div className="px-4">
                  <Link
                    href="/join"
                    className="btn-classical w-full text-center inline-flex items-center justify-center space-x-2 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Join Our Club</span>
                    <span className="chess-piece-decoration text-sm group-hover:rotate-12 transition-transform duration-300">♔</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Footer decoration */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2 text-amber-600 opacity-40">
                <span className="chess-piece-decoration text-lg">♔</span>
                <span className="chess-piece-decoration text-lg">♕</span>
                <span className="chess-piece-decoration text-lg">♗</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}