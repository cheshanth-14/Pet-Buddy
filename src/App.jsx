/**
 * Pet Buddy - Main Application Component
 * All-in-One Pet Care Application Landing Page
 */

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TechStack from './components/TechStack'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Main landing area */}
        <Hero />
        
        {/* Problem Section - Pain points */}
        <Problem />
        
        {/* Solution Section - How Pet Buddy solves problems */}
        <Solution />
        
        {/* Features Section - Key features showcase */}
        <Features />
        
        {/* How It Works - Step by step guide */}
        <HowItWorks />
        
        {/* Technology Stack - Tools & technologies used */}
        <TechStack />
        
        {/* Team Section - Project team */}
        <Team />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App