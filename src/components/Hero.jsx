/**
 * Hero Section Component
 * Main landing area with title, subtitle, and CTA buttons
 */

import React from 'react'
import { ArrowRight, Play, Heart, Shield, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue via-white to-pastel-green opacity-70" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pastel-pink rounded-full blur-3xl opacity-30 animate-pulse-slow animation-delay-400" />

      {/* Floating Paw Prints (decorative) */}
      <div className="absolute top-32 right-20 text-primary-200 animate-float">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              <span className="text-primary-700 font-medium text-sm">
                LK Made for Sri Lanka's Pet Lovers
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 animate-slide-up">
              Pet Buddy –{' '}
              <span className="gradient-text">One App.</span>
              <br />
              <span className="gradient-text">Every Pet Need.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-slide-up animation-delay-200 max-w-xl mx-auto lg:mx-0">
              Sri Lanka's first unified digital ecosystem for pet adoption,
              vet services, grooming, medical records, and emergency care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="btn-secondary inline-flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-fade-in animation-delay-600">
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start">
                  <Heart className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-2xl font-bold text-gray-800">40+</span>
                </div>
                <span className="text-gray-500 text-sm">Pets Adopted</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start">
                  <Shield className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-800">25+</span>
                </div>
                <span className="text-gray-500 text-sm">Verified Vets</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start">
                  <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-800">24/7</span>
                </div>
                <span className="text-gray-500 text-sm">Emergency Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative animate-fade-in animation-delay-400">
            {/* Main Illustration Container */}
            <div className="relative z-10">
              <div className="relative bg-gradient-to-br from-primary-50/50 to-pastel-blue/50 rounded-3xl p-4 shadow-2xl backdrop-blur-sm border border-white/50">
                <img
                  src="/assets/hero-illustration.png"
                  alt="Pet Buddy 3D Illustration"
                  className="w-full h-auto rounded-2xl shadow-inner animate-float"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 animate-float border border-white/50 z-20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Verified Vets</p>
                    <p className="text-sm text-gray-500">100% Trusted</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 animate-float animation-delay-600 border border-white/50 z-20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Easy Adoption</p>
                    <p className="text-sm text-gray-500">Find your buddy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 -z-10 transform scale-110" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero