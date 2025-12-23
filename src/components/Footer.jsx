/**
 * Footer Component
 * Contains contact info, social links, and legal links
 */

import React from 'react'
import { 
  PawPrint, Mail, Phone, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, 
  Heart, ArrowUp, Crown, Check
} from 'lucide-react'

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Footer links data
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
  }

  // Premium features data
  const premiumFeatures = [
    'Unlimited pet profiles',
    'Priority vet booking',
    'Book volunteers',
    'Ad-free experience',
  ]

  // Social links data
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        
        {/* Row 1: Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary-500 rounded-xl">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Pet<span className="text-primary-400">Buddy</span>
              </span>
            </a>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sri Lanka's first unified digital ecosystem for pet adoption, 
              vet services, grooming, medical records, and emergency care.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@petbuddy.lk" 
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                hello@petbuddy.lk
              </a>
              <a 
                href="tel:+94112345678" 
                className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                +94 76 574 3454
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Premium Card & Newsletter - BELOW ALL COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-800">
          
          {/* Premium Features Card */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left side - Info */}
              <div>
                {/* Header */}
                <div className="flex items-center mb-3">
                  <Crown className="w-7 h-7 text-white mr-2" />
                  <h4 className="text-white font-bold text-xl">Go Premium</h4>
                </div>
                
                {/* Features list */}
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/90 text-sm">
                      <Check className="w-4 h-4 mr-2 text-white flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right side - Price & CTA */}
              <div className="text-center md:text-right">
                <div className="mb-3">
                  <span className="text-white/80 text-sm">Starting at</span>
                  <div className="flex items-baseline justify-center md:justify-end">
                    <span className="text-white text-3xl font-bold">Rs. 399</span>
                    <span className="text-white/80 text-sm ml-1">/month</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a
                  href="#premium"
                  className="inline-block px-8 py-3 bg-white text-orange-600 font-semibold 
                           rounded-xl text-center hover:bg-gray-100 transition-colors 
                           hover:scale-105 transform duration-300 shadow-lg"
                >
                  Upgrade Now ✨
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter - Stay Updated */}
          <div className="bg-gray-800/50 rounded-2xl p-6">
            <h4 className="text-white font-bold text-xl mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for pet care tips, app updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl 
                         text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 
                         transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl 
                         hover:bg-primary-600 transition-colors hover:scale-105 transform duration-300"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-gray-500 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-primary-400 
                           hover:bg-gray-700 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2025 Pet Buddy. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" />
              <span>in Sri Lanka</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary-500 text-white rounded-full shadow-lg 
                 hover:bg-primary-600 hover:shadow-xl transform hover:scale-110 
                 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer