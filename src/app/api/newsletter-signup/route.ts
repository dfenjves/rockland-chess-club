import { NextRequest, NextResponse } from 'next/server'
import { addNewsletterSubscriber } from '@/lib/airtable'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Add subscriber to Airtable
    const subscriber = await addNewsletterSubscriber(email, 'website')

    if (subscriber) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to newsletter',
          subscriber: {
            id: subscriber.id,
            email: subscriber.email,
            subscribedAt: subscriber.subscribedAt
          }
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to add subscriber to database' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Newsletter signup API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}