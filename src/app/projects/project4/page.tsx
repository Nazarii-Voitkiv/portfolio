'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Project4() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', '50%');
    root.style.setProperty('--mouse-y', '50%');

    let raf = 0 as number | 0;
    const onMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--mouse-x', `${e.clientX}px`);
        root.style.setProperty('--mouse-y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0a192f] relative">
      <div 
        className="pointer-events-none fixed inset-0 z-10 gradient-effect"
        style={{ mixBlendMode: "normal" }}
      />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl relative z-20">
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
        
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Bulk Messaging Bot (Telegram)</h1>
          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-xl">Automated Communication Tool</span>
            <span className="text-sm bg-gray-800/60 px-3 py-1 rounded-full">February 2025</span>
          </div>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden mb-12 border border-gray-700">
          <div className="relative aspect-[16/9]">
            <Image
              src="/projects/telegram-bot-commands.png"
              alt="Telegram Bot Commands and Functionality"
              fill
              className="object-contain bg-gray-800/50"
            />
          </div>
          <div className="bg-gray-800/80 p-4 text-center text-sm text-gray-300">
            Available commands and functionality in the automated messaging bot
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-12">
          <div className="text-gray-400">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Project Overview</h2>
            <p className="mb-5 text-lg">
              A custom-built Telegram bot developed on request for a client, designed for automated message distribution with flexible scheduling and database integration. The system enables efficient bulk messaging with randomized intervals, ensuring a natural communication pattern while maintaining reliability and security.
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
                    <span><span className="text-gray-100">Node.js & TypeScript</span> – Ensuring scalability and code maintainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Telegraf</span> – Framework for handling bot commands and interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">telegram package</span> – Direct user-session messaging with authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Supabase</span> – PostgreSQL database for message storage and logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">node-cron</span> – Task scheduling for automated message delivery</span>
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
                        Telegram Bot API
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Supabase
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Timeline</h4>
                    <p className="text-gray-400">February 2025</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Repository</h4>
                    <a 
                      href="https://github.com/Nazarii-Voitkiv/auto-tg-sender" 
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
        
        <div className="flex justify-between items-center pt-6 border-t border-gray-700">
          <Link 
            href="/projects/project3" 
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
          <Link 
            href="/projects/project5" 
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
