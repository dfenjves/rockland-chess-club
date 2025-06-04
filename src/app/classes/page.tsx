import type { Metadata } from 'next'
import { AcademicCapIcon, ClockIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Chess Classes | Rockland Chess Club',
  description: 'Learn chess with our structured classes for all skill levels. From complete beginner to advanced tactics and strategy.',
}

const classes = [
  {
    title: 'Absolute Beginner',
    level: 'Complete Beginner',
    duration: '4 weeks',
    schedule: 'Wednesdays 6:30-7:30 PM',
    maxStudents: 8,
    description: 'Perfect for those who have never played chess or need a refresher on the basics.',
    topics: [
      'How the pieces move',
      'Basic rules and objectives',
      'Check, checkmate, and stalemate',
      'Simple opening principles',
      'Basic endgame patterns'
    ],
    nextStart: 'January 10, 2024',
    instructor: 'Club volunteers',
    cost: 'Included with membership'
  },
  {
    title: 'Intermediate Tactics',
    level: 'Intermediate',
    duration: '6 weeks',
    schedule: 'Saturdays 1:00-2:00 PM',
    maxStudents: 10,
    description: 'Improve your tactical vision and pattern recognition with systematic training.',
    topics: [
      'Pin, fork, and skewer tactics',
      'Double attacks and discoveries',
      'Combination patterns',
      'Tactical puzzles and exercises',
      'Game analysis and review'
    ],
    nextStart: 'January 13, 2024',
    instructor: 'Experienced club members',
    cost: 'Included with membership'
  },
  {
    title: 'Opening Principles',
    level: 'Beginner to Intermediate',
    duration: '4 weeks',
    schedule: 'Wednesdays 8:00-9:00 PM',
    maxStudents: 12,
    description: 'Learn the fundamental principles that guide good opening play.',
    topics: [
      'Development and center control',
      'King safety and castling',
      'Common opening traps',
      'Popular opening systems',
      'Transition to middlegame'
    ],
    nextStart: 'February 7, 2024',
    instructor: 'Tournament-rated players',
    cost: 'Included with membership'
  },
  {
    title: 'Endgame Mastery',
    level: 'Intermediate to Advanced',
    duration: '8 weeks',
    schedule: 'Saturdays 2:30-3:30 PM',
    maxStudents: 8,
    description: 'Master essential endgame positions and techniques.',
    topics: [
      'Basic checkmate patterns',
      'Pawn endgames',
      'Rook and minor piece endgames',
      'Practical endgame technique',
      'Endgame composition studies'
    ],
    nextStart: 'January 20, 2024',
    instructor: 'Advanced club members',
    cost: 'Included with membership'
  }
]

const skillLevels = [
  {
    title: 'Complete Beginner',
    icon: UserGroupIcon,
    description: 'Never played chess or need to learn the basics',
    characteristics: [
      'Learning how pieces move',
      'Understanding basic rules',
      'First chess games',
      'Building confidence'
    ]
  },
  {
    title: 'Beginner',
    icon: AcademicCapIcon,
    description: 'Knows the rules but wants to improve',
    characteristics: [
      'Knows piece movement',
      'Understands check/checkmate',
      'Ready for tactics training',
      'Seeking structured improvement'
    ]
  },
  {
    title: 'Intermediate',
    icon: TrophyIcon,
    description: 'Regular player looking to advance skills',
    characteristics: [
      'Comfortable with basic tactics',
      'Some opening knowledge',
      'Participates in tournaments',
      'Wants specialized training'
    ]
  },
  {
    title: 'Advanced',
    icon: ClockIcon,
    description: 'Strong player seeking mastery',
    characteristics: [
      'Solid tactical foundation',
      'Good positional understanding',
      'Tournament experience',
      'Focused on specific weaknesses'
    ]
  }
]

export default function ClassesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Chess Classes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Structured learning for every skill level, from complete beginner to advanced player.
          </p>
        </div>
      </div>

      {/* Skill Levels */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Find Your Level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our classes are designed to meet you where you are and help you progress to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillLevels.map((level) => (
            <Card key={level.title} className="text-center h-full">
              <CardHeader>
                <level.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{level.title}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  {level.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Available Classes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Current Class Offerings
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classes.map((cls) => (
              <Card key={cls.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                      {cls.level}
                    </span>
                    <span className="text-sm text-gray-500">{cls.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{cls.title}</CardTitle>
                  <CardDescription>{cls.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Schedule:</span>
                      <p className="text-gray-600">{cls.schedule}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Max Students:</span>
                      <p className="text-gray-600">{cls.maxStudents} students</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Next Start:</span>
                      <p className="text-gray-600">{cls.nextStart}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Cost:</span>
                      <p className="text-gray-600">{cls.cost}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-gray-900 block mb-2">Topics Covered:</span>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cls.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Instructor:</span> {cls.instructor}
                    </p>
                    <Button className="w-full">
                      Register for Class
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Class Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">What&apos;s Included</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• All equipment provided (boards, sets, clocks)</li>
                  <li>• Handouts and study materials</li>
                  <li>• Practice exercises and homework</li>
                  <li>• Small class sizes for personalized attention</li>
                  <li>• Certificate of completion</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Class Format</h4>
                <p className="text-sm text-gray-600">
                  Each class combines instruction, practice games, and Q&A. 
                  We use a mix of lecture, hands-on exercises, and group discussion 
                  to ensure everyone understands the material.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Private Lessons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Want more personalized instruction? Several of our experienced 
                members offer private lessons for focused, one-on-one learning.
              </p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customized curriculum based on your goals</li>
                  <li>• Flexible scheduling</li>
                  <li>• Analysis of your own games</li>
                  <li>• Faster improvement with focused attention</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">
                  Rates and availability vary by instructor. 
                  Contact us to be connected with available tutors.
                </p>
                <Button variant="outline" className="w-full">
                  <a href="/contact">Inquire About Private Lessons</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Info */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Improve Your Chess?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All classes are included with your club membership. Classes fill up quickly, 
            so register early to secure your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join">
              <Button size="lg">Join Club & Register</Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">Ask About Classes</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}