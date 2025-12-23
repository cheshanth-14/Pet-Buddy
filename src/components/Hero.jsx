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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-neon/20 to-transparent" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-neon/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-400" />

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 text-primary-neon/20 animate-float hidden lg:block">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-primary-neon/30 rounded-full mb-8 animate-fade-in backdrop-blur-sm shadow-[0_0_15px_rgba(0,242,234,0.15)]">
              <span className="w-2 h-2 bg-primary-neon rounded-full mr-2 animate-pulse shadow-[0_0_10px_#00f2ea]" />
              <span className="text-gray-200 font-medium text-sm tracking-wide">
                Next-Gen Pet Care Ecosystem
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-slide-up tracking-tight">
              Pet Buddy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon via-white to-accent-purple drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]">
                Future of Care.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 mb-10 animate-slide-up animation-delay-200 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-primary-neon/50 pl-6">
              Experience the unified digital ecosystem for pet adoption,
              AI-powered diagnosis, verified vet services, and emergency care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up animation-delay-400">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center group">
                <span className="relative z-10">Initialize App</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 rounded-full bg-primary-neon blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </a>
              <a href="#features" className="btn-secondary inline-flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5 text-primary-neon" />
                Wait, show me demo
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-16 animate-fade-in animation-delay-600 border-t border-white/10 pt-8">
              <div className="text-center group cursor-default">
                <div className="flex items-center justify-center lg:justify-start mb-1">
                  <Heart className="w-5 h-5 text-secondary-neon mr-2 group-hover:animate-pulse" />
                  <span className="text-3xl font-bold text-white">40+</span>
                </div>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Pets Adopted</span>
              </div>
              <div className="text-center group cursor-default">
                <div className="flex items-center justify-center lg:justify-start mb-1">
                  <Shield className="w-5 h-5 text-primary-neon mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="text-3xl font-bold text-white">25+</span>
                </div>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Verified Vets</span>
              </div>
              <div className="text-center group cursor-default">
                <div className="flex items-center justify-center lg:justify-start mb-1">
                  <Clock className="w-5 h-5 text-accent-purple mr-2 group-hover:spin-slow" />
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Emergency AI</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative animate-fade-in animation-delay-400 mt-12 lg:mt-0">
            {/* Main Illustration Container */}
            <div className="relative z-10">
              {/* Glowing Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-neon to-accent-purple rounded-full blur-[60px] opacity-20 animate-pulse-slow" />

              {/* Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-500">
                <div className="rounded-[1.9rem] overflow-hidden bg-background-paper p-8 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-50">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                  </div>

                  {/* Futuristic Pet Wireframe/Holo Representation */}
                  <div className="aspect-square flex items-center justify-center relative">
                    {/* Cyber Rings */}
                    <div className="absolute inset-0 border border-primary-neon/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-dashed border-accent-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                    <svg
                      className="w-64 h-64 text-primary-neon drop-shadow-[0_0_15px_rgba(0,242,234,0.5)]"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    >
                      {/* Abstract Geometric Pet Face */}
                      <path d="M30 40 L50 70 L70 40 L50 20 Z" fill="rgba(0, 242, 234, 0.1)" stroke="currentColor" />
                      <circle cx="50" cy="45" r="25" stroke="currentColor" strokeDasharray="4 2" className="animate-[spin_20s_linear_infinite]" />
                      <path d="M35 40 Q 50 50 65 40" stroke="currentColor" strokeWidth="1" fill="none" />
                      <circle cx="42" cy="38" r="3" fill="currentColor" className="animate-pulse" />
                      <circle cx="58" cy="38" r="3" fill="currentColor" className="animate-pulse" />
                    </svg>

                    {/* Floating Data Points */}
                    <div className="absolute top-10 right-10 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-primary-neon/50 text-[10px] text-primary-neon font-mono">
                      HR: 85 BPM
                    </div>
                    <div className="absolute bottom-20 left-10 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-accent-purple/50 text-[10px] text-accent-purple font-mono">
                      STATUS: HEALTHY
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 glass-panel rounded-xl p-4 animate-float border-l-4 border-l-primary-neon">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-neon/10 rounded-lg">
                    <Shield className="w-5 h-5 text-primary-neon" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Vital Signs</p>
                    <p className="text-xs text-primary-neon/80 font-mono">MONITORING...</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 glass-panel rounded-xl p-4 animate-float animation-delay-600 border-r-4 border-r-secondary-neon">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary-neon/10 rounded-lg">
                    <Heart className="w-5 h-5 text-secondary-neon" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Match Found</p>
                    <p className="text-xs text-secondary-neon/80 font-mono">98% COMPATIBILITY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-neon to-transparent"></div>
      </div>
    </section>
  )
}

export default Hero