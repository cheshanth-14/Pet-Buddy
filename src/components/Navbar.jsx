/**
 * Navbar Component
 * Responsive navigation with mobile hamburger menu
 */

import React, { useState, useEffect } from 'react'
import { Menu, X, PawPrint } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
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
          ? 'bg-background/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5'
          : 'bg-transparent'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-neon/20 rounded-xl group-hover:bg-primary-neon/30 transition-colors border border-primary-neon/50 shadow-[0_0_10px_rgba(0,242,234,0.3)]">
              <PawPrint className="w-6 h-6 text-primary-neon" />
            </div>
            <span className="text-xl font-bold text-white tracking-wider">
              Pet<span className="text-primary-neon drop-shadow-[0_0_5px_rgba(0,242,234,0.5)]">Buddy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-neon font-medium transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-neon group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,242,234,0.8)]" />
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-white/10 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-4 pt-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-primary-neon font-medium transition-colors px-2 py-2 border-l-2 border-transparent hover:border-primary-neon hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary text-center mt-4"
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