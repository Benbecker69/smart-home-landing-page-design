'use client'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black rounded-2xl shadow-xl overflow-hidden">
      <div className="px-6 md:px-8 lg:px-12 py-6 md:py-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg md:text-xl">○</span>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base">
              Products
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base">
              Features
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200 text-sm xl:text-base">
              Contacts
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-white text-sm md:text-base font-medium hover:text-gray-300 transition-colors duration-200">
              BUY NOW
            </button>
            
            <div className="h-4 md:h-5 w-px bg-gray-600"></div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6 md:w-7 md:h-7" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-800">
          <div className="px-6 md:px-8 py-6 space-y-4">
            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base py-2">
              About
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base py-2">
              Products
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base py-2">
              Features
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 text-sm md:text-base py-2">
              Contacts
            </a>
          </div>
        </div>
      )}
    </header>
  )
}