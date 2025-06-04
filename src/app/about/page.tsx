import type { Metadata } from 'next'
import { MapPinIcon, ClockIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About Us | Rockland Chess Club',
  description: 'Learn about the Rockland Chess Club - our history, mission, and what makes our community special.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Our Club
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Building a welcoming chess community in Rockland County since 2020
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Mission Statement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg leading-8 text-gray-600 mb-6">
              The Rockland Chess Club exists to foster a love of chess in our community by providing a welcoming, 
              inclusive environment where players of all skill levels can learn, compete, and grow together.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              Whether you&apos;re brand new to chess or a seasoned tournament player, our club offers something for everyone. 
              We believe chess is not just a game, but a tool for building critical thinking skills, forming friendships, 
              and creating lasting memories.
            </p>
          </div>

          {/* What to Expect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For New Players</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Friendly introduction to chess basics</li>
                  <li>• Patient instruction from experienced players</li>
                  <li>• No pressure, just fun learning</li>
                  <li>• Equipment provided</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Experienced Players</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Competitive tournament play</li>
                  <li>• Analysis of games and positions</li>
                  <li>• Opportunities to teach others</li>
                  <li>• Regular challenging opponents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Meeting Details</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <ClockIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Regular Meetings</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Thursdays:</strong> 7:00 PM - 9:00 PM</p>
                  <p><strong>Saturdays:</strong> 2:00 PM - 6:00 PM</p>
                  <p className="text-sm mt-4">Drop in anytime during these hours. No need to stay for the entire session.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">3 North Broadway, 3rd Floor</p>
                  <p>Nyack, NY 10960</p>
                  <p>Accessible venue with parking available</p>
                  <p className="text-sm mt-4 text-blue-600">🎉 New expanded space launching September 2025!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Club Stats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Community</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <UserGroupIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <TrophyIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Tournaments per Year</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <ClockIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">4</div>
                <div className="text-sm text-gray-600">Years Established</div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Leadership & Contact</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                Our club is run by passionate chess enthusiasts who volunteer their time to make our community thrive. 
                We welcome input from all members on how to improve and grow our club.
              </p>
              <p className="text-gray-600">
                Questions about the club? Want to get involved in leadership? 
                Reach out to us through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a> 
                or speak with any of our organizers at a meeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}