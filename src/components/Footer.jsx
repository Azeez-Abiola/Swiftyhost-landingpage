import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#ff5001] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-white">Phox Hosting provides reliable and high-performance web hosting solutions for businesses of all sizes.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200">Web Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Domain Registration</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">SSL Certificates</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Website Builder</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200">Knowledge Base</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Live Chat</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-200">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">LinkedIn</a></li>
              <li><a href="#" className="text-white hover:text-gray-200">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white">&copy; 2023 Phox Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
