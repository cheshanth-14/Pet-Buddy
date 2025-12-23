/**
 * Team Section Component
 * Displays the project team with their roles and clickable profiles
 */

import React, { useState, useEffect, useRef } from 'react'
import { 
  Users, Code, Palette, TestTube, FileText, Server, 
  X, Mail, Linkedin, Github, Globe, MapPin, GraduationCap 
} from 'lucide-react'

const Team = () => {
  const [isInView, setIsInView] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
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

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Team members data - ADD YOUR TEAM DETAILS HERE
  const team = [
    {
      name: 'Enoch Fernando',
      role: 'Backend Developer',
      icon: Server,
      description: 'API design, database management, and server-side logic',
      color: 'from-blue-500 to-cyan-500',
      initial: 'EF',
      image: '/images/team/ef1.jpg',
      // Detailed information for popup
      bio: 'Passionate backend developer with 3+ years of experience in building scalable APIs and microservices. Loves working with Node.js and MongoDB.',
      location: 'Colombo, Sri Lanka',
      education: 'BSc in Computer Science, IIT',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
      linkedin:'https://www.linkedin.com/in/sangeeth-fernando-3a9a7938b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
     
    },
     {
      name: 'Jenet Milan',
      role: 'Backend Developer',
      icon: Server,
      description: 'API design, database management, and server-side logic',
      color: 'from-blue-500 to-cyan-500',
      initial: 'JM',
      image: '/images/team/jn1.jpg',
      // Detailed information for popup
      bio: 'Passionate backend developer with 3+ years of experience in building scalable APIs and microservices. Loves working with Node.js and MongoDB.',
      location: 'Colombo, Sri Lanka',
      education: 'BSc in Computer Science, IIT',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
      linkedin:'https://www.linkedin.com/in/sangeeth-fernando-3a9a7938b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
     
    },
    {
      name: 'Jagannithy Cheshanth',
      role: 'Frontend Developer',
      icon: Code,
      description: 'React development, responsive design, and user interactions',
      color: 'from-purple-500 to-pink-500',
      initial: 'JC',
      image:'/images/team/ch.jpg',
      bio: 'Creative frontend developer who transforms designs into beautiful, responsive web applications. Specializes in React and modern CSS frameworks.',
      location: 'Vavuniya, Sri Lanka',
      education: 'BSc in Computer science, IIT',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Figma'],
      email: 'cheshanth14@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jagannithy-cheshanth-975128304',
      github: 'https://github.com/cheshanth-14',
    },
    {
      name: 'Enosh Shermith',
      role: 'UI/UX Designer',
      icon: Palette,
      description: 'User experience design, prototyping, and visual design',
      color: 'from-orange-500 to-red-500',
      initial: 'KP',
      image:'/images/team/es.jpg' ,
      bio: 'Award-winning UI/UX designer with a keen eye for detail. Creates intuitive and visually stunning interfaces that users love.',
      location: 'Negembo, Sri Lanka',
      education: 'BSc in Computer science, IIT',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
    },
    {
      name: 'Abdul',
      role: 'QA Tester',
      icon: TestTube,
      description: 'Quality assurance, testing strategies, and bug tracking',
      color: 'from-green-500 to-emerald-500',
      initial: 'Ab',
      image: '/images/team/ab1.jpg',
      bio: 'Detail-oriented QA engineer ensuring every feature works flawlessly. Expert in both manual and automated testing methodologies.',
      location: 'Colombo, Sri Lanka',
      education: 'BSc in Computer Science, IIT',
      skills: ['Selenium', 'Jest', 'Cypress', 'Postman', 'JIRA', 'Test Planning'],
      
    },
    {
      name: 'Arumugam Kishanthan',
      role: 'Documentation',
      icon: FileText,
      description: 'Technical documentation, user guides, and API docs',
      color: 'from-teal-500 to-cyan-500',
      initial: 'AK',
      image: '/images/team/ki1.jpg',
      bio: 'Technical writer who makes complex concepts easy to understand. Creates comprehensive documentation that developers and users love.',
      location: 'Negombo, Sri Lanka',
      education: 'BA in English, University of Peradeniya',
      skills: ['Technical Writing', 'Markdown', 'API Documentation', 'Swagger', 'Confluence', 'Git'],
    },
  ]

  // Modal Component
  const MemberModal = ({ member, onClose }) => {
    if (!member) return null

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full 
                     transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header with gradient background */}
          <div className={`bg-gradient-to-br ${member.color} p-8 pb-20 rounded-t-3xl relative`}>
            {/* Decorative circles */}
            <div className="absolute top-4 left-4 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full" />
          </div>

          {/* Profile Image */}
          <div className="flex justify-center -mt-16 relative z-10">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className={`absolute -bottom-2 -right-2 p-2 bg-gradient-to-br ${member.color} 
                            rounded-full shadow-lg`}>
                <member.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 pt-4 text-center">
            {/* Name & Role */}
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color} font-semibold mb-2`}>
              {member.role}
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              {member.location}
            </div>

            {/* Bio */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {member.bio}
            </p>

            {/* Education */}
            <div className="flex items-center justify-center text-gray-600 text-sm mb-6">
              <GraduationCap className="w-4 h-4 mr-2 text-primary-500" />
              {member.education}
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Skills & Expertise</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full 
                             hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-3 bg-gray-100 hover:bg-primary-100 rounded-xl text-gray-600 
                           hover:text-primary-600 transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl text-gray-600 
                           hover:text-blue-600 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-600 
                           hover:text-gray-800 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-purple-100 rounded-xl text-gray-600 
                           hover:text-purple-600 transition-all hover:scale-110"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </span>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            Passionate developers and designers working together to bring Pet Buddy to life.
            <br />
            <span className="text-primary-500 text-sm">Click on a team member to learn more!</span>
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                         transition-all duration-500 border border-gray-100 
                         hover:border-primary-300 group text-center cursor-pointer
                         hover:-translate-y-2
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-4">
                <div className="relative">
                  {/* Image with gradient border on hover */}
                  <div className={`w-24 h-24 rounded-full p-1 bg-gradient-to-br ${member.color} 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                 absolute inset-0 mx-auto`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 
                             group-hover:border-transparent transition-all duration-300 
                             relative z-10 mx-auto"
                  />
                </div>
                {/* Role Icon Badge */}
                <div className={`absolute -bottom-2 -right-2 p-2 bg-gradient-to-br ${member.color} 
                               rounded-full shadow-lg group-hover:scale-110 transition-transform z-20`}
                     style={{ right: 'calc(50% - 52px)' }}>
                  <member.icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${member.color} mb-2`}>
                {member.role}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>

              {/* View Profile hint */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-primary-500 font-medium">
                  Click to view profile →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Team Message */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-primary-50 rounded-full">
            <span className="text-primary-600 font-medium">
              🐾 United by our love for pets
            </span>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      <MemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  )
}

export default Team