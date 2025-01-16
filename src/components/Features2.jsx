'use client'

import { useState } from 'react'
import { Shield, Lock, Mail, Globe, Server, Settings, Database } from 'lucide-react'

const featureData = {
  features: [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "FREE Domain Name for 1st Year",
      description: "One year of domain registration is included with each new plan. After the initial year."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Free SSL Certificate", 
      description: "An SSL provides a secure connection to your website, allows for eCommerce."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "30-Day Money-Back Guarantee",
      description: "If you are unhappy for any reason within the first 30 days of service, you can cancel for a full refund."
    }
  ],
  advanced: [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Unmanaged",
      description: "Advanced users can have unfettered access and control over everything from the operating system."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Improved cPanel",
      description: "Every dedicated configuration includes the option of our enhanced cPanel-based interface."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Multi-Server Management",
      description: "Need more than one hosting service? You can add shared hosting, VPS hosting."
    }
  ],
  optional: [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Domain Privacy + Protection",
      description: "Help to prevent identity theft, spam, and phishing attacks by masking the personal information."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SiteLock",
      description: "Defend your websites against attacks and malware by detecting and fixing vulnerabilities."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Spam Protection",
      description: "Powered by Google, Postini filters out harmful and unwanted content before it reaches your inbox."
    }
  ]
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('features')

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff5001] mb-4">
            New functionality brings maximum power to everyone.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tuned for Optimum Performance
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-gray-200 w-full max-w-2xl">
            <div className="flex justify-center space-x-8">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-4 px-4 relative ${
                  activeTab === 'features'
                    ? 'text-[#ff5001]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Features
                {activeTab === 'features' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5001]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`pb-4 px-4 relative ${
                  activeTab === 'advanced'
                    ? 'text-[#ff5001]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Advanced Features
                {activeTab === 'advanced' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5001]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('optional')}
                className={`pb-4 px-4 relative ${
                  activeTab === 'optional'
                    ? 'text-[#ff5001]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Optional Features
                {activeTab === 'optional' && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5001]"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featureData[activeTab].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-[#ff5001]/10 rounded-lg text-[#ff5001]">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            More Features
          </button>
          <button className="px-6 py-2 bg-[#ff5001] text-white rounded-lg hover:bg-[#ff5001]/90 transition-colors flex items-center">
            Choose a Plan
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
