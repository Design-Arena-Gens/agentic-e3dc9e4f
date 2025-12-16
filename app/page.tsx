'use client'

import { useState } from 'react'
import { FaReact, FaAngular, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-blue-400" />, level: 90 },
    { name: 'Angular', icon: <FaAngular className="text-4xl text-red-500" />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-600" />, level: 88 },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" />, level: 92 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-cyan-400" />, level: 90 },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-600" />, level: 85 },
    { name: 'RxJS', icon: <FaCode className="text-4xl text-pink-500" />, level: 75 },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      tech: 'React, Redux, TypeScript, Tailwind CSS',
      description: 'Built a full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      highlights: ['30% performance improvement', '50K+ active users', 'Mobile-first design']
    },
    {
      title: 'Enterprise Dashboard',
      tech: 'Angular, RxJS, Material UI, Chart.js',
      description: 'Developed a comprehensive analytics dashboard for enterprise clients with real-time data visualization.',
      highlights: ['Real-time updates', 'Complex data handling', 'Role-based access control']
    },
    {
      title: 'Social Media App',
      tech: 'Next.js, React, Firebase, Tailwind CSS',
      description: 'Created a social media application with posts, comments, likes, and user authentication.',
      highlights: ['Server-side rendering', 'Optimistic UI updates', 'Image optimization']
    },
    {
      title: 'Task Management System',
      tech: 'Angular, NgRx, TypeScript, Bootstrap',
      description: 'Built a task management system with drag-and-drop, notifications, and team collaboration features.',
      highlights: ['Drag & drop interface', 'Push notifications', 'Team collaboration']
    }
  ]

  const experience = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer',
      period: '2023 - Present',
      responsibilities: [
        'Developed and maintained React and Angular applications',
        'Improved application performance by 40%',
        'Mentored junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      company: 'Digital Innovations Ltd.',
      position: 'Junior Frontend Developer',
      period: '2022 - 2023',
      responsibilities: [
        'Built responsive web applications using React',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Wrote unit and integration tests',
        'Participated in code reviews'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              &lt;Developer /&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              3 Years of Experience in React & Angular
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful, performant, and user-friendly web applications
              with modern technologies and best practices.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get In Touch
              </a>
              <a href="#projects" className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex justify-center space-x-6 text-3xl">
              <FaGithub className="hover:text-blue-400 cursor-pointer transition-colors" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition-colors" />
              <FaEnvelope className="hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <FaCode className="mr-4 text-blue-400" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="text-green-400 mr-2">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
            <FaBriefcase className="mr-4 text-blue-400" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.position}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-2">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently available for freelance work and full-time opportunities.
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:developer@example.com" className="flex items-center text-lg hover:text-blue-400 transition-colors">
              <FaEnvelope className="mr-2" />
              developer@example.com
            </a>
            <a href="https://github.com" className="flex items-center text-lg hover:text-blue-400 transition-colors">
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com" className="flex items-center text-lg hover:text-blue-400 transition-colors">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Frontend Developer Portfolio. Built with React & Next.js</p>
      </footer>
    </div>
  )
}
