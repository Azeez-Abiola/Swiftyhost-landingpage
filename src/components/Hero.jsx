import React from 'react';

const Hero = () => {
  return (
    <div className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Fast & Secure Web Hosting
          </h1>
          <p className="text-xl mb-8">
            Get your website up and running in minutes with our easy-to-use hosting platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-100 transition duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-indigo-900 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="/hero-image.svg" alt="Web Hosting" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
