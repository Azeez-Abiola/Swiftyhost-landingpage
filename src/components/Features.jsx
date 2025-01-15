import React from 'react';
import { Server, Globe, Shield } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-indigo-100 p-3 rounded-full mb-4">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Server,
      title: 'High-Performance Servers',
      description: 'Lightning-fast servers optimized for maximum uptime and speed.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Content delivery network for faster loading times worldwide.',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'State-of-the-art security measures to keep your website safe.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Phox Hosting</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
