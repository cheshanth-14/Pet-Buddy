/**
 * Features Section Component
 * Showcases all key features with animated cards
 */

import React, { useState, useEffect, useRef } from 'react'
import { 
  Heart, Search, Calendar, FileText, AlertTriangle, Bell, 
  DollarSign, Users, MessageSquare, Scissors, Star 
} from 'lucide-react'

const Features = () => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Features data
  const features = [
    {
      icon: Heart,
      title: 'Adoption Search',
      description: 'Browse pets available for adoption from verified shelters. Filter by species, breed, age, and location.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Search,
      title: 'Vet & Groomer Finder',
      description: 'Discover trusted veterinarians and groomers with ratings, reviews, and verified credentials.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      title: 'Online Booking',
      description: 'Schedule appointments instantly with your preferred service providers. No phone calls needed.',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: FileText,
      title: 'Medical Records Wallet',
      description: 'Store vaccinations, prescriptions, and health records securely. Access them anytime, anywhere.',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Vet Locator',
      description: 'Find 24/7 emergency veterinary services near you with real-time availability status.',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Bell,
      title: 'Lost Pet Alert System',
      description: 'Report lost pets and receive instant community alerts. Help reunite pets with their families.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: DollarSign,
      title: 'Finance Tracker',
      description: 'Track pet expenses, set budgets, and manage payments for all your pet care needs.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Pet Buddy Volunteers',
      description: 'Connect with verified volunteers for pet sitting, dog walking, and temporary care.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Assistant',
      description: 'Get instant answers to pet care questions from our intelligent AI assistant.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Scissors,
      title: 'Grooming Gallery',
      description: "Browse grooming styles, before/after photos, and book your pet's next makeover.",
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-50',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Key Features
          </span>
          <h2 className="section-title">
            Everything Your Pet <span className="gradient-text">Needs</span>
          </h2>
          <p className="section-subtitle">
            Powerful features designed to make pet care simple, organized, and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-4 
                              group-hover:scale-110 transition-transform duration-300`}>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-4 flex items-center text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features