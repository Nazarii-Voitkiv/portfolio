'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Project1() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Update mouse position relative to the viewport, not the element
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  
  // Handle scroll events to keep the gradient positioned correctly
  useEffect(() => {
    const handleScroll = () => {
      // If we have a stored mouse position, adjust it for the scroll
      if (pageRef.current && mousePosition.x && mousePosition.y) {
        // Remove unused rect variable
        setMousePosition(prev => ({
          x: prev.x,
          y: prev.y
        }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial position in the middle of the viewport
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition.x, mousePosition.y]); // Add missing dependencies
  
  return (
    <div 
      ref={pageRef}
      onMouseMove={handleMouseMove} 
      className="min-h-screen bg-[#0a192f] relative"
    >
      {/* Gradient overlay - now fixed to the viewport, not the page */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 gradient-effect"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(180, 20, 255, 0.10) 0%,
            rgba(170, 10, 255, 0.09) 20%,
            rgba(160, 10, 255, 0.07) 40%,
            rgba(150, 0, 255, 0.05) 60%,
            rgba(140, 0, 240, 0.02) 80%,
            transparent 100%)`,
          mixBlendMode: "normal"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl relative z-20">
        {/* Back button with better mobile spacing */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors mb-6 sm:mb-10 group">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            className="transform rotate-180 transition-all duration-200 group-hover:-translate-x-1"
            stroke="currentColor"
          >
            <path 
              d="M7 13L13 7" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <path 
              d="M7 7H13V13" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Projects</span>
        </Link>
        
        {/* Project title with better mobile spacing */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">Fullstack Online Shop</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400">
            <span className="text-lg sm:text-xl">E-commerce Platform</span>
            <span className="text-xs sm:text-sm bg-gray-800/60 px-3 py-1 rounded-full">November - December 2024</span>
          </div>
        </div>
        
        {/* YouTube Video with better mobile margins */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-8 sm:mb-12 border border-gray-700">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/v62LFPjSDqI"
            title="Fullstack Online Shop Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Project details with better mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-10 mb-8 sm:mb-12">
          {/* Main content */}
          <div className="text-gray-400">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Project Overview</h2>
            <p className="mb-5 text-lg">
              A custom-built e-commerce system developed as a monorepo, integrating a high-performance frontend and a scalable backend with secure payment processing, user authentication, and inventory management.
            </p>
            
            {/* Feature cards with better mobile layout */}
            <div className="flex flex-col md:flex-row gap-5 sm:gap-8 my-8 sm:my-12">
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Frontend Stack
                </h3>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Angular 19</span> – Modern, component-based UI development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Tailwind CSS & DaisyUI</span> – Responsive and flexible styling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">NX Monorepo</span> – Managed SSR, environment configurations, and Jest testing</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M4 6H20V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Backend Stack
                </h3>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Spring Boot 3 & Spring Data JPA</span> – Secure and efficient API handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Liquibase & PostgreSQL</span> – Database versioning and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">OAuth2 & Spring Security</span> – Authentication and access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Maven & Java 21</span> – Dependency management and build optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="10" y="11" width="4" height="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Integrations</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Stripe
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Kinde
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Docker
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Timeline</h4>
                    <p className="text-gray-400">November 2024 - December 2024</p>
                  </div>
                  
                  {/* Role section removed */}
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Repository</h4>
                    <a 
                      href="https://github.com/Nazarii-Voitkiv/online-shop" 
                      className="inline-flex items-center gap-2 text-[rgb(134,231,212)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub Repository</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation buttons with better mobile spacing */}
        <div className="flex justify-between items-center pt-4 sm:pt-6 border-t border-gray-700">
          <div></div>
          <Link 
            href="/projects/project2" 
            className="group inline-flex items-center gap-2 text-gray-100 hover:text-[rgb(134,231,212)] transition-colors"
          >
            <span>Next Project</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              className="transform transition-all duration-200 group-hover:translate-x-1"
              stroke="currentColor"
            >
              <path 
                d="M4 10H16" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <path 
                d="M10 4L16 10L10 16" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
