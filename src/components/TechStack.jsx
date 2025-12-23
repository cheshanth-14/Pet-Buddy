/**
 * Technology Stack Section Component
 * Displays the technologies and methodologies used
 */

import React, { useState, useEffect, useRef } from 'react'
import { Code, Server, Database, Shield, Map, Repeat, Layout, Layers } from 'lucide-react'

const TechStack = () => {
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

  // Technology stack data
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React / Next.js', icon: Code, description: 'Modern UI framework' },
        { name: 'Tailwind CSS', icon: Layout, description: 'Utility-first styling' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: Server, description: 'Server runtime' },
        { name: 'Express.js', icon: Layers, description: 'Web framework' },
      ],
    },
    {
      category: 'Database & Auth',
      items: [
        { name: 'MongoDB', icon: Database, description: 'NoSQL database' },
        { name: 'Firebase Auth', icon: Shield, description: 'Authentication' },
      ],
    },
    {
      category: 'APIs & Tools',
      items: [
        { name: 'Google Maps API', icon: Map, description: 'Location services' },
        { name: 'Firebase Storage', icon: Database, description: 'File storage' },
      ],
    },
  ]

  // Methodologies data
  const methodologies = [
    {
      name: 'Agile Development',
      icon: Repeat,
      description: 'Iterative development with continuous improvement',
    },
    {
      name: 'Scrum Framework',
      icon: Layers,
      description: 'Sprint-based project management',
    },
    {
      name: 'OOAD Design',
      icon: Code,
      description: 'Object-oriented analysis and design',
    },
  ]

  return (
    <section id="technology" className="py-20 bg-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
            <Code className="w-4 h-4 mr-2" />
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Built with <span className="text-primary-400">Modern Tech</span>
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
            Pet Buddy is powered by industry-leading technologies and best practices 
            to ensure reliability, scalability, and security.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 
                             hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                        <tech.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-white">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies */}
        <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-center text-primary-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Development Methodology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm 
                         rounded-full border border-gray-700 hover:border-primary-500/50 
                         transition-all duration-300 group"
              >
                <method.icon className="w-5 h-5 text-primary-400 mr-2" />
                <span className="font-medium text-white">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack