import React from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ name, price, features, isPopular }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isPopular ? 'border-2 border-indigo-500' : ''}`}>
    {isPopular && (
      <div className="bg-indigo-500 text-white text-center py-2 text-sm font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-4">{name}</h3>
      <div className="text-4xl font-bold mb-4">${price}<span className="text-lg font-normal text-gray-500">/mo</span></div>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-md font-semibold ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition duration-300`}>
        Choose Plan
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 9.99,
      features: ['1 Website', '10 GB Storage', 'Free SSL Certificate', '24/7 Support'],
    },
    {
      name: 'Pro',
      price: 19.99,
      features: ['5 Websites', '50 GB Storage', 'Free SSL Certificate', '24/7 Support', 'Daily Backups'],
      isPopular: true,
    },
    {
      name: 'Business',
      price: 39.99,
      features: ['Unlimited Websites', '100 GB Storage', 'Free SSL Certificate', '24/7 Priority Support', 'Daily Backups', 'Advanced Security'],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingTier key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
