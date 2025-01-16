'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = {
  monthly: [
    {
      name: 'Startup',
      price: '39.99',
      features: [
        'All essential tools',
        'Up to 10,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: false
    },
    {
      name: 'GrowBig',
      price: '49.99',
      features: [
        'All essential tools',
        'Up to 25,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: true
    },
    {
      name: 'GoGeek',
      price: '59.99',
      features: [
        'All essential tools',
        'Up to 100,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: false
    }
  ],
  yearly: [
    {
      name: 'Startup',
      price: '49.99',
      features: [
        'All essential tools',
        'Up to 10,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: false
    },
    {
      name: 'GrowBig',
      price: '59.99',
      features: [
        'All essential tools',
        'Up to 25,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: true
    },
    {
      name: 'GoGeek',
      price: '69.99',
      features: [
        'All essential tools',
        'Up to 100,000 visitors',
        'Unlimited traffic',
        'Daily backup',
        'Free SSL',
        'PHP 8.1 supported',
        'Advanced WordPress',
        'Free WordPress installation',
        '24/7 Customer support',
        '30 Days Money Back'
      ],
      popular: false
    }
  ]
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <section className="bg-[#ff5001] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/80 mb-2">
            Trusted by the brands you trust.
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">
            Set up your WordPress experience.
          </h2>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-[#ff5001]'
                  : 'text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-[#ff5001]'
                  : 'text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans[billingPeriod].map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 relative ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-[#ff5001] text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="flex items-start justify-center mb-4">
                  <span className="text-sm mt-1">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm mt-1">/mo</span>
                </div>
                <button
                  className={`px-8 py-2 rounded-lg w-full ${
                    plan.popular
                      ? 'bg-[#ff5001] text-white'
                      : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Select
                </button>
              </div>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {/* Payment method icons - replace with actual payment icons */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-6 bg-white/20 rounded"></div>
              ))}
            </div>
            <span className="text-sm text-white/80">Accepted Payment Methods</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <span className="text-sm text-white/80">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <span className="text-sm text-white/80">SSL Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
