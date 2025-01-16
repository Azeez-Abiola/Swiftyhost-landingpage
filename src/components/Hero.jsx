import { useState } from 'react'

export default function Hero() {
  const [domain, setDomain] = useState('')

  const domainPricing = [
    { extension: '.com', price: '12.99' },
    { extension: '.net', price: '12.99' },
    { extension: '.org', price: '12.99' },
    { extension: '.club', price: '12.99' },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            SWIFTYHOST: RELIABLE, FAST AND SECURE HOSTING YOU CAN TRUST 
          </h1>
          <p className="text-lg text-gray-600">
            From securing your Domain to sustaining your sites, Swiftyhost expertise helps all your project reach their potential.
          </p>
          
          {/* Domain Search */}
          <div className="space-y-6">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5001]"
              />
              <button className="px-8 py-3 bg-[#ff5001] text-white rounded-lg hover:bg-[#ff5001] transition-colors">
                Check
              </button>
            </div>
            
            {/* Domain Pricing */}
            <div className="flex flex-wrap gap-6">
              {domainPricing.map((item) => (
                <div key={item.extension} className="flex items-center gap-1">
                  <span className="text-[#ff5001]">{item.extension}</span>
                  <span className="font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="relative">
          <img
            src="/assets/HomeScreenMobile.png"
            alt="Hosting Illustration"
            className="w-full"
          />
          
          {/* Floating Check Marks */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
              style={{
                top: `${20 + (i * 25)}%`,
                left: `${10 + (i * 20)}%`,
              }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos */}
      <div className="mt-16 border-t pt-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`/placeholder.svg?height=40&width=120`}
              alt={`Partner Logo ${i + 1}`}
              className="h-8 opacity-60"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
