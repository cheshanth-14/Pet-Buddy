/**
 * Problem Section Component
 * Highlights the pain points in current pet care services
 */

import React, { useState, useEffect, useRef } from 'react'
import { AlertTriangle, Clock, Search, FileX, Phone, MapPin } from 'lucide-react'

const Problem = () => {
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

  // Problem cards data
  const problems = [
    {
      icon: Search,
      title: 'Scattered Information',
      description: 'Pet owners struggle to find reliable vets, groomers, and adoption centers across different platforms.',
      color: 'red',
    },
    {
      icon: FileX,
      title: 'No Medical Records',
      description: 'Paper-based records get lost, making it difficult to track vaccinations and health history.',
      color: 'orange',
    },
    {
      icon: Clock,
      title: 'Outdated Listings',
      description: 'Many online directories have incorrect or outdated contact information and service availability.',
      color: 'yellow',
    },
    {
      icon: Phone,
      title: 'No Emergency Support',
      description: 'Finding 24/7 emergency vet services during critical moments is nearly impossible.',
      color: 'red',
    },
    {
      icon: MapPin,
      title: 'Location Challenges',
      description: 'No easy way to find nearby pet services or filter by distance during emergencies.',
      color: 'purple',
    },
    {
      icon: AlertTriangle,
      title: 'Lost Pet Crisis',
      description: 'No unified system to report and search for lost pets in Sri Lanka.',
      color: 'pink',
    },
  ]

  // Color mapping for icons
  const colorClasses = {
    red: 'bg-red-100 text-red-500',
    orange: 'bg-orange-100 text-orange-500',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-500',
    pink: 'bg-pink-100 text-pink-500',
  }

  return (
    <section id="problem" className="py-20 bg-gray-50" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            The Problem
          </span>
          <h2 className="section-title">
            Pet Care in Sri Lanka is <span className="text-red-500">Fragmented</span>
          </h2>
          <p className="section-subtitle">
            Pet owners face numerous challenges when trying to provide the best care for their beloved companions. 
            The current landscape is disconnected, outdated, and lacks essential emergency support.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl border border-gray-100 hover:border-red-200 
                         hover:shadow-lg transition-all duration-500 group
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${colorClasses[problem.color]} mb-4 
                              group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-600 mb-4">
            <span className="font-semibold text-gray-800">Sound familiar?</span> You're not alone.
          </p>
          <p className="text-primary-600 font-medium">
            That's exactly why we built Pet Buddy. ↓
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem