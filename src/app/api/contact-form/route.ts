import { NextRequest, NextResponse } from 'next/server'
import { addContactSubmission } from '@/lib/airtable'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be less than 2000 characters' },
        { status: 400 }
      )
    }

    // Add contact submission to Airtable
    const submission = await addContactSubmission(name.trim(), email.trim(), message.trim(), 'website')

    if (submission) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully',
          submission: {
            id: submission.id,
            name: submission.name,
            email: submission.email,
            submittedAt: submission.submittedAt
          }
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to save contact submission' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}