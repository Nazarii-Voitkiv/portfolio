'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Project7() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">United Spirit Time Reports</h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400">
            <span className="text-xl">Vue-powered time tracking dashboard</span>
            <span className="text-sm bg-gray-800/60 px-3 py-1 rounded-full">February 2025</span>
          </div>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden mb-12 border border-gray-700">
          <div className="relative aspect-[16/9]">
            <Image
              src="/projects/project7.png"
              alt="United Spirit time reports dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-gray-800/80 p-4 text-center text-sm text-gray-300">
            Time reporting view with filters for employees, departments, date ranges, and billable status.
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-12">
          <div className="text-gray-400">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Project Overview</h2>
            <p className="mb-5 text-lg">
              United Spirit needed a focused view for managers to audit billable hours without leaving their internal platform. I designed and built a dedicated time reports screen inside the existing Vue application, layering fast client-side filtering on top of the company&apos;s API so stakeholders can check totals before exporting data to finance.
            </p>
            <p className="mb-5 text-lg">
              The interface combines grouped tables, summary badges, and per-user breakdowns. Filters cascade across the dataset, keeping the view responsive even on large ranges while preserving the design language used across the rest of the product.
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
                    <span><span className="text-gray-100">Vue 3 (Composition API)</span> – Reactive UI with granular state control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">TypeScript</span> – Strong typing across components and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Pinia Store</span> – Centralized filter and dataset management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Vite</span> – Fast local builds and modular setup</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 12h-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Core Features
                </h3>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Advanced filtering</span> by date range, employee, department, and billable state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Aggregated totals</span> with instant recalculation and highlight of overtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Per-user drilldown</span> that keeps context while exploring time entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span><span className="text-gray-100">Export-ready layout</span> for CSV/PDF handoff to finance tools</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1 border border-gray-700 rounded-lg p-6 bg-gray-800/10 hover:bg-gray-800/20 transition-colors">
                <h3 className="text-xl font-medium text-gray-100 mb-4 flex items-center gap-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgb(134,231,212)]">
                    <path d="M4 6H20V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Implementation</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        Component-driven UI
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)' }}>
                        REST API integration
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Timeline</h4>
                    <p className="text-gray-400">February 2025</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-100 font-medium mb-1">Links</h4>
                    <div className="space-y-2">
                      <a 
                        href="https://app.unitedspirit.eu" 
                        className="inline-flex items-center gap-2 text-[rgb(134,231,212)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Application</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <p className="text-gray-400 text-sm">Repository: Private (client-owned)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-6 border-t border-gray-700">
          <Link 
            href="/projects/project6" 
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
