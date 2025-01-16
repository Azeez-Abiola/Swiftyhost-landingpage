import { useState } from "react";
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, ShoppingCart, User, Search, ChevronDown, Menu } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">info@site.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff5001] font-medium">Support</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="../swiftyhostlogo.png" 
              alt="Swiftyhost Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">Swiftyhost</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff5001]">
                <span>DEMOS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Demo 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Demo 2
                </a>
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff5001]">
                <span>HOSTING</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#ff5001]">
              DOMAIN
            </a>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff5001]">
                <span>PAGES</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff5001]">
                <span>ELEMENTS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff5001]">
                <span>BLOG</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#ff5001]">
              SHOP
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#ff5001] relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#ff5001] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="text-gray-700 hover:text-[#ff5001]">
              <User className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-[#ff5001]">
              <Search className="w-6 h-6" />
            </button>
            <button 
              className="md:hidden text-gray-700 hover:text-[#ff5001]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">DEMOS</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">HOSTING</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">DOMAIN</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">PAGES</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">ELEMENTS</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">BLOG</a>
              <a href="#" className="text-gray-700 hover:text-[#ff5001]">SHOP</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
