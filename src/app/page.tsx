'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, section: string) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  const aboutContent = (
    <div className="max-w-[600px] space-y-8 text-gray-400">
      <p className="text-lg leading-relaxed">
        I am a <span className="text-gray-100">Full-Stack web developer</span> specializing in{' '}
        <span className="text-gray-100">React, Next.js, Node.js, Angular, Spring Boot</span>. 
        With deep expertise in both <span className="text-gray-100">backend</span> and{' '}
        <span className="text-gray-100">frontend</span> development, I create{' '}
        <span className="text-gray-100">scalable, high-performance applications</span>{' '}
        tailored to business needs.
      </p>

      <div>
        <h3 className="text-gray-400 text-xl mb-4">My Approach to Development:</h3>
        <ul className="space-y-4 list-none">
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-2">•</span>
            <span><span className="text-gray-100">Problem-Solving</span> – Passionate about tackling complex challenges, 
            architecting efficient solutions, and optimizing application performance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-2">•</span>
            <span><span className="text-gray-100">Scalability & Performance</span> – Developing systems that easily adapt to growth, 
            ensuring <span className="text-gray-100">clean architecture, maintainability</span>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-2">•</span>
            <span><span className="text-gray-100">Team Collaboration</span> – Capable of working independently and in teams, 
            with a focus on high-quality code and process optimization.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-2">•</span>
            <span><span className="text-gray-100">Continuous Learning & Innovation</span> – Staying up to date with cutting-edge technologies, 
            refining skills, and implementing best industry practices.</span>
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed">
        I am always open to new challenges and opportunities where I can leverage my expertise 
        to develop innovative solutions and create tangible business value.
      </p>
    </div>
  );

  const experienceContent = (
    <div className="max-w-[600px] space-y-8 text-gray-400">
      <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-gray-100 text-xl font-medium">Freelance Full-Stack Developer</h3>
            <p className="text-gray-400 mt-1">Self-Employed</p>
          </div>
          <span className="text-gray-400 text-sm">Nov 2024 - Present</span>
        </div>
        <p className="text-gray-400 mb-6">
          I have successfully managed and executed a range of projects that deliver high-quality, scalable, and maintainable solutions tailored to unique business needs. My work emphasizes process optimization, clear communication, and innovative problem-solving to drive client success.
        </p>
        <div className="flex flex-wrap gap-2">
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}
          >
            TypeScript
          </span>
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}
          >
            JavaScript
          </span>
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}
          >
            Next.js
          </span>
          <span 
            className="px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}
          >
            Node.js
          </span>
        </div>
      </div>
      
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-gray-100 hover:text-[rgb(134,231,212)] transition-colors"
      >
        <span className="text-base font-medium">View Full CV</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          className="transform transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
        >
          <path 
            d="M7 13L13 7" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          <path 
            d="M7 7H13V13" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );

  const projectsContent = (
    <div className="max-w-[600px] space-y-8 text-gray-400">
      <div className="rounded-lg overflow-hidden transition-all duration-200">
        <div className="flex gap-6 items-start p-6">
          <div className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200">
            <Image
              src="/projects/project1.jpeg"
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-2">
              <h3 className="text-xl font-medium text-gray-100">Project 1</h3>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                className="transform transition-all duration-200"
              >
                <path 
                  d="M7 13L13 7" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M7 7H13V13" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-400 mb-4">
              A comprehensive web application built with modern technologies, 
              featuring responsive design and seamless user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                React
              </span>
              <span className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div onMouseMove={handleMouseMove} className="flex min-h-screen relative bg-[#0a192f]">
      {/* Більш рівномірний розподіл фіолетового кольору */}
      <div 
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(180, 20, 255, 0.10) 0%,
            rgba(170, 10, 255, 0.09) 20%,
            rgba(160, 10, 255, 0.07) 40%,
            rgba(150, 0, 255, 0.05) 60%,
            rgba(140, 0, 240, 0.02) 80%,
            transparent 100%)`,
          WebkitBackgroundImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(180, 20, 255, 0.10) 0%,
            rgba(170, 10, 255, 0.09) 20%,
            rgba(160, 10, 255, 0.07) 40%,
            rgba(150, 0, 255, 0.05) 60%,
            rgba(140, 0, 240, 0.02) 80%,
            transparent 100%)`,
          mixBlendMode: "normal"
        }}
      />

      {/* Left Sidebar */}
      <div className="fixed w-1/2 h-screen p-20 flex items-center bg-[#0a192f]">
        <div className="flex flex-col justify-between min-h-[700px] max-w-[600px] mx-auto text-left w-full pl-24">
          <div className="flex flex-col gap-12 -mt-10">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-gray-100 font-[titillium-web]">Nazarii Voitkiv</h1>
              <h2 className="text-2xl text-gray-100 font-[titillium-web]">Full-Stack Developer</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                A passionate developer focused on creating elegant, efficient, and user-friendly applications.
              </p>
            </div>

            <nav className="space-y-2 relative font-[titillium-web]">
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
              >
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 rounded transition-opacity" />
                <div className={`h-[1px] transition-all z-10 ${
                  activeSection === 'about' 
                    ? 'w-12 bg-gray-100' 
                    : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                }`} />
                <span className={`z-10 ${activeSection === 'about' ? 'text-gray-100' : ''}`}>ABOUT</span>
              </button>
              <button 
                onClick={() => scrollToSection(experienceRef, 'experience')}
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
              >
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 rounded transition-opacity" />
                <div className={`h-[1px] transition-all z-10 ${
                  activeSection === 'experience' 
                    ? 'w-12 bg-gray-100' 
                    : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                }`} />
                <span className={`z-10 ${activeSection === 'experience' ? 'text-gray-100' : ''}`}>EXPERIENCE</span>
              </button>
              <button 
                onClick={() => scrollToSection(projectsRef, 'projects')}
                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
              >
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 rounded transition-opacity" />
                <div className={`h-[1px] transition-all z-10 ${
                  activeSection === 'projects' 
                    ? 'w-12 bg-gray-100' 
                    : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                }`} />
                <span className={`z-10 ${activeSection === 'projects' ? 'text-gray-100' : ''}`}>PROJECTS</span>
              </button>
            </nav>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 -mb-10">
              <a href="https://github.com/YOUR_GITHUB_USERNAME"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 hover:opacity-80 transition-opacity">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="dark:invert" />
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 hover:opacity-80 transition-opacity">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="dark:invert" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-1/2 min-h-screen ml-[50%] bg-[#0a192f] overflow-y-auto relative">
        <div className="relative">
          <div className="pt-20 pb-20 pr-20" ref={aboutRef}>
            {aboutContent}
          </div>
          
          <div className="pt-20 pb-20 pr-20" ref={experienceRef}>
            {experienceContent}
          </div>
          
          <div className="pt-20 pb-20 pr-20" ref={projectsRef}>
            {projectsContent}
          </div>
        </div>
      </div>
    </div>
  );
}
