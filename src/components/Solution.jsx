/**
 * Solution Section Component
 * Describes Pet Buddy as the all-in-one solution
 */

import React, { useState, useEffect, useRef } from 'react'
import { 
  Heart, Stethoscope, Calendar, Wallet, AlertCircle, 
  Search, Users, MessageCircle, CheckCircle, Sparkles 
} from 'lucide-react'

const Solution = () => {
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

  // Solution features data
  const solutions = [
    {
      icon: Heart,
      title: 'Adoption',
      description: 'Browse and adopt pets from verified shelters and rescues.',
    },
    {
      icon: Stethoscope,
      title: 'Vet & Grooming Directory',
      description: 'Find trusted veterinarians and groomers near you.',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule appointments with a few taps.',
    },
    {
      icon: Wallet,
      title: 'Pet Medical Wallet',
      description: 'Store all medical records digitally and securely.',
    },
    {
      icon: AlertCircle,
      title: 'Smart Emergency Filtering',
      description: 'Instantly find 24/7 emergency vet services nearby.',
    },
    {
      icon: Search,
      title: 'Lost Pet SOS',
      description: 'Report lost pets and get community alerts.',
    },
    {
      icon: Users,
      title: 'Pet Buddy Volunteers',
      description: 'Connect with volunteers for pet sitting and walks.',
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Get instant answers to your pet care questions.',
    },
  ]

  return (
    <section id="solution" className="py-20 bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            The Solution
          </span>
          <h2 className="section-title">
            Introducing <span className="gradient-text">Pet Buddy</span>
          </h2>
          <p className="section-subtitle">
            One unified platform that brings together everything you need for complete pet care. 
            No more juggling between apps, websites, and phone calls.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className={`relative transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border-4 border-white rounded-full" />
                <div className="absolute bottom-4 right-4 w-48 h-48 border-4 border-white rounded-full" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">All-in-One Platform</h3>
                <p className="text-primary-100 mb-8">
                  Pet Buddy integrates 8 essential services into one seamless experience, 
                  designed specifically for Sri Lankan pet owners.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold">8+</p>
                    <p className="text-primary-100 text-sm">Integrated Services</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold">1</p>
                    <p className="text-primary-100 text-sm">Simple App</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-primary-100 text-sm">Availability</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-primary-100 text-sm">Free to Start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Feature List */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-primary-50 
                           hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 p-3 bg-primary-100 rounded-xl 
                                group-hover:bg-primary-500 transition-colors duration-300">
                    <solution.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {solution.description}
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary-500 ml-auto flex-shrink-0 opacity-0 
                                        group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution