/**
 * How It Works Section Component
 * Simple 4-step flow showing the user journey
 */

import React, { useState, useEffect, useRef } from 'react'
import { UserPlus, PawPrint, Search, Heart, ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
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

  // Steps data
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up in seconds with your email or social accounts. Tell us a bit about yourself and your pet care needs.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: PawPrint,
      title: 'Add Your Pet',
      description: 'Create profiles for your pets with their details, photos, and medical history. Keep everything organized in one place.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Search,
      title: 'Find Services & Book',
      description: 'Browse vets, groomers, and adoption listings. Book appointments directly through the app with instant confirmation.',
      color: 'from-teal-500 to-green-500',
    },
    {
      number: '04',
      icon: Heart,
      title: 'Manage Care & Emergency',
      description: 'Track medical records, set reminders, and access 24/7 emergency support whenever you need it.',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            How It Works
          </span>
          <h2 className="section-title">
            Getting Started is <span className="gradient-text">Simple</span>
          </h2>
          <p className="section-subtitle">
            Four easy steps to transform how you care for your pets.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-teal-200 to-orange-200 transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r ${step.color} 
                                  text-white text-sm font-bold rounded-full shadow-lg`}>
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mt-4 mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} 
                                  shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#contact" className="btn-primary inline-flex items-center">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks