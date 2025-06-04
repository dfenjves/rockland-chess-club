import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}