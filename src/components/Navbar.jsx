/**
 * Navbar Component
 * Responsive navigation with mobile hamburger menu
 */

import React, { useState, useEffect } from 'react'
import { Menu, X, PawPrint } from 'lucide-react'

const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  // State for navbar background on scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Technology', href: '#technology' },
    { name: 'Team', href: '#team' },
  ]

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-500 rounded-xl group-hover:bg-primary-600 transition-colors">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Pet<span className="text-primary-500">Buddy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-500 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-primary-500 font-medium transition-colors px-2 py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar