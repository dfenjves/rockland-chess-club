import type { Metadata } from 'next'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Join Us | Rockland Chess Club',
  description: 'Join the Rockland Chess Club with flexible membership options. $100/year, $10/month, or $10 drop-in rates.',
}

const membershipBenefits = [
  'Access to all regular club meetings',
  'Priority registration for tournaments',
  'Discounted tournament entry fees', 
  'Access to club library and resources',
  'Opportunities for rated tournament play',
  'Free basic chess instruction',
  'Friendly community of chess enthusiasts',
  'Equipment provided (boards, sets, clocks)',
]

const pricingOptions = [
  {
    name: 'Annual Membership',
    price: '$100',
    period: 'per year',
    description: 'Best value for regular attendees',
    features: membershipBenefits,
    recommended: true,
    zeffyLink: 'https://www.zeffy.com/ticketing/rockland-chess-annual' // Placeholder
  },
  {
    name: 'Monthly Membership', 
    price: '$10',
    period: 'per month',
    description: 'Perfect for trying us out',
    features: membershipBenefits,
    recommended: false,
    zeffyLink: 'https://www.zeffy.com/ticketing/rockland-chess-monthly' // Placeholder
  },
  {
    name: 'Drop-in Rate',
    price: '$10',
    period: 'per visit',
    description: 'Casual attendance option',
    features: [
      'Access to that day&apos;s activities',
      'Equipment provided',
      'Casual games and instruction',
      'Meet the community'
    ],
    recommended: false,
    note: 'Pay at the door - cash or card accepted'
  }
]

const faqs = [
  {
    question: "I'm a complete beginner. Can I still join?",
    answer: "Absolutely! We welcome players of all skill levels, including complete beginners. We have experienced members who love teaching the basics, and you'll find a supportive environment to learn and grow."
  },
  {
    question: "Do I need to bring my own chess set?",
    answer: "No, we provide all equipment including chess sets, boards, and clocks. However, you're welcome to bring your own if you prefer."
  },
  {
    question: "What age groups participate?",
    answer: "Our club welcomes all ages! We have members ranging from teenagers to seniors, creating a diverse and enriching community."
  },
  {
    question: "Can I try before committing to membership?",
    answer: "Yes! You can drop in for $10 to experience our club before deciding on a membership. We're confident you'll love our welcoming community."
  },
  {
    question: "Are there opportunities for competitive play?",
    answer: "Yes, we host monthly tournaments and many of our members participate in rated tournament play. We cater to both casual and competitive players."
  }
]

export default function JoinPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Join Our Chess Family
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible membership options to fit your schedule and commitment level
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Membership Options
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the option that works best for you. All members get access to our full community and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingOptions.map((option) => (
            <div 
              key={option.name}
              className={`relative rounded-2xl border ${
                option.recommended 
                  ? 'border-blue-600 ring-2 ring-blue-600' 
                  : 'border-gray-200'
              } p-8 shadow-sm`}
            >
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900">{option.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-base font-medium text-gray-500">/{option.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {option.zeffyLink ? (
                <a href={option.zeffyLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    Join Now
                  </Button>
                </a>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">{option.note}</p>
                  <Button variant="outline" className="w-full" disabled>
                    Pay at Door
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Why Join?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Community & Friendship</h4>
              <p className="text-gray-600 text-sm">
                Connect with fellow chess enthusiasts in a welcoming, supportive environment. 
                Many of our members have formed lasting friendships beyond the chess board.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Skill Development</h4>
              <p className="text-gray-600 text-sm">
                Improve your game through regular play, instruction, and analysis. 
                Our experienced members are always happy to share knowledge and help you grow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Regular Activities</h4>
              <p className="text-gray-600 text-sm">
                Weekly meetings, monthly tournaments, puzzle sessions, and special events 
                keep our calendar full of engaging chess activities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">All Ages Welcome</h4>
              <p className="text-gray-600 text-sm">
                Our diverse membership spans all age groups, creating rich opportunities 
                for intergenerational learning and mentorship.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Chess Community?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose your membership option above, or drop by one of our meetings to experience 
            the Rockland Chess Club firsthand. We can&apos;t wait to welcome you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing">
              <Button size="lg">Choose Membership</Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">Ask Questions</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}