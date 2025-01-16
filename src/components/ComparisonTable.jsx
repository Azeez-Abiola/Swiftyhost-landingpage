'use client'

import { useState } from 'react'
import { Search, Check, X, ShoppingCart } from 'lucide-react'

const plans = [
  {
    name: 'Phox',
    price: '$9.99',
    features: {
      'WordPress Installs': '1',
      'Monthly visits': '20,000',
      'SSD storage': '10 GB',
      'Free CDN': '50 GB',
      'Google Cloud Platform': true,
      'Multiple support': false,
      'Backup retention': '14 days',
      'SSL Access': true,
    }
  },
  {
    name: 'Starter',
    price: '$19.99',
    features: {
      'WordPress Installs': '2',
      'Monthly visits': '40,000',
      'SSD storage': '20 GB',
      'Free CDN': '50 GB',
      'Google Cloud Platform': true,
      'Multiple support': true,
      'Backup retention': '14 days',
      'SSL Access': true,
    }
  },
  {
    name: 'Pro',
    price: '$29.99',
    features: {
      'WordPress Installs': '3',
      'Monthly visits': '60,000',
      'SSD storage': '30 GB',
      'Free CDN': '75 GB',
      'Google Cloud Platform': true,
      'Multiple support': true,
      'Backup retention': '14 days',
      'SSL Access': true,
    }
  },
  {
    name: 'Business',
    price: '$39.99',
    features: {
      'WordPress Installs': '4',
      'Monthly visits': '80,000',
      'SSD storage': '40 GB',
      'Free CDN': '80 GB',
      'Google Cloud Platform': true,
      'Multiple support': true,
      'Backup retention': '24 days',
      'SSL Access': true,
    }
  }
]

export default function ComparisonTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const features = Object.keys(plans[0].features)

  const filteredFeatures = features.filter(feature =>
    feature.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Many more features
          </h2>
          <p className="text-[#ff5001]">
            all the details
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5001]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#ff5001] text-white p-4 text-left w-64"></th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 text-center border-b border-gray-200 min-w-[200px]">
                    <div className="font-semibold text-gray-900">{plan.name}</div>
                    <div className="text-xl font-bold text-gray-900 mt-1">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredFeatures.map((feature, index) => (
                <tr 
                  key={feature}
                  className="group hover:bg-gray-50 transition-colors"
                >
                  <td className="bg-[#ff5001] text-white p-4 font-medium">
                    {feature}
                  </td>
                  {plans.map((plan) => (
                    <td key={`${plan.name}-${feature}`} className="p-4 text-center border-b border-gray-200">
                      {typeof plan.features[feature] === 'boolean' ? (
                        plan.features[feature] ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        plan.features[feature]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="group hover:bg-gray-50 transition-colors">
                <td className="bg-[#ff5001] text-white p-4 font-medium">
                  Order
                </td>
                {plans.map((plan) => (
                  <td key={`${plan.name}-order`} className="p-4 text-center border-b border-gray-200">
                    <button className="text-[#ff5001] hover:text-[#ff5001] transition-colors">
                      <ShoppingCart className="w-5 h-5 mx-auto" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
