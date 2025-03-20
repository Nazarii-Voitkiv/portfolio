'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Project6() {
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
        const rect = pageRef.current.getBoundingClientRect();
        // Keep last known X position, but adjust the Y based on scroll
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
  }, []);
  
  return (
    <div 
      ref={pageRef}
      onMouseMove={handleMouseMove} 
      className="min-h-screen bg-[#0a192f] relative"
    >
      {/* Gradient overlay - now fixed to the viewport, not the page */}
      <div 
        className="pointer-events-none fixed inset-0 z-10"
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
      
      <div className="container mx-auto px-6 py-12 max-w-5xl relative z-20">
        {/* Back button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors mb-10 group">
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
        
        {/* Project title */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Discord Channel Forwarder Bot</h1>
          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-xl">Automated Content Distribution System</span>
            <span className="text-sm bg-gray-800/60 px-3 py-1 rounded-full">March 2025</span>
          </div>
        </div>
        
        {/* Bot Commands Image */}
        <div className="w-full rounded-lg overflow-hidden mb-12 border border-gray-700">
          <div className="relative aspect-[16/9]">
            <Image
              src="/projects/discord-bot-commands.png"
              alt="Discord Bot Commands and Interface"
              fill
              className="object-contain bg-gray-800/50"
            />
          </div>
          <div className="bg-gray-800/80 p-4 text-center text-sm text-gray-300">
            Available slash commands and configuration options in the Discord Channel Forwarder Bot
          </div>
        </div>
        
        {/* Project details */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-12">
          {/* Main content */}
          <div className="text-gray-400">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Project Overview</h2>
            <p className="mb-5 text-lg">
              This custom Discord bot was developed to enable automated message forwarding between channels, providing server administrators with powerful scheduling capabilities. The bot selects random messages from designated source channels and forwards them to target channels based on user-defined schedules, enhancing community engagement through automated content sharing.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 my-12">
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Tech Stack
                </h3>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Node.js</span> – Runtime environment for server-side JavaScript execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">TypeScript</span> – Type-safe coding with enhanced developer experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Discord.js</span> – Feature-rich library for Discord API interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Cron-based Scheduling</span> – Flexible automated task execution</span>
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
                    <h4 className="text-gray-100 font-medium mb-1">Implementation</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Event-driven Architecture
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Multi-server Support
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Timeline</h4>
                    <p className="text-gray-400">March 2025</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Role</h4>
                    <p className="text-gray-400">Full-Stack Developer</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Repository</h4>
                    <p className="text-gray-400">Private (Client-owned)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation between projects */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-700">
          <Link 
            href="/projects/project5" 
            className="group inline-flex items-center gap-2 text-gray-100 hover:text-[rgb(134,231,212)] transition-colors"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              className="transform transition-all duration-200 group-hover:-translate-x-1"
              stroke="currentColor"
            >
              <path 
                d="M16 10H4" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <path 
                d="M10 4L4 10L10 16" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span>Previous Project</span>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}
