'use client'

import Image from "next/image";
import Link from "next/link";
import {useState, useEffect, useRef} from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState('about');
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    // Improved mouse tracking with viewport coordinates
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    // Initialize mouse position and add global mouse tracking
    useEffect(() => {
        // Set initial position to middle of screen
        setMousePosition({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        const handleGlobalMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleGlobalMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, []);

    // Fix the type to accept RefObject<HTMLDivElement>
    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, section: string) => {
        sectionRef.current?.scrollIntoView({behavior: 'smooth'});
        // Important: Set active section explicitly when navigation is clicked
        setActiveSection(section);
    };

    // Додаємо Intersection Observer для виявлення поточного розділу під час прокрутки
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-10% 0px -40% 0px', // Adjust margins to improve detection accuracy
            threshold: 0.3, // Single threshold for more stable detection
        };

        // Debounce function to prevent rapid section changes
        let timeoutId: NodeJS.Timeout | null = null;
        const updateSection = (newSection: string) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setActiveSection(newSection);
            }, 100); // Small delay to smooth out transitions
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-section');
                    if (id) {
                        updateSection(id);
                    }
                }
            });
        }, options);

        // Спостерігаємо за всіма розділами
        const sections = [aboutRef.current, experienceRef.current, projectsRef.current];
        sections.forEach((section, index) => {
            if (section) {
                section.setAttribute('data-section', ['about', 'experience', 'projects'][index]);
                observer.observe(section);
            }
        });

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Додаємо Intersection Observer для виявлення поточного розділу під час прокрутки
    useEffect(() => {
        // Set active section manually when user scrolls
        const handleManualScroll = () => {
            // This helps with scroll-based navigation reliability
            // Remove unused variable
            const experienceTop = experienceRef.current?.offsetTop || 0;
            const projectsTop = projectsRef.current?.offsetTop || 0;

            // Get current scroll position with some offset for better detection
            const scrollPosition = window.scrollY + 300;

            // Simple position-based detection
            if (scrollPosition >= projectsTop) {
                setActiveSection('projects');
            } else if (scrollPosition >= experienceTop) {
                setActiveSection('experience');
            } else {
                setActiveSection('about');
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleManualScroll);

        // Also run once on initial load
        handleManualScroll();

        return () => {
            window.removeEventListener('scroll', handleManualScroll);
        };
    }, []);

    const aboutContent = (
        <div className="max-w-[600px] space-y-8 text-gray-400">
            <p className="text-lg leading-relaxed">
                I’m a developer who enjoys building things that are <span className="text-white">simple</span>, <span
                className="text-white">structured</span>, and <span className="text-white">built to last</span>. I care
                about clean architecture and making sure features serve <span className="text-white">real needs</span> —
                not just exist.
            </p>

            <p className="text-lg leading-relaxed">
                Currently, I’m helping develop an <span className="text-white">MVP</span> for a <span
                className="text-white">startup</span> as part of a <span className="text-white">distributed team</span>,
                focusing on the <span className="text-white">mobile interface</span> in <span className="text-white">React Native</span> and
                contributing to <span className="text-white">backend APIs</span> with <span
                className="text-white">Node.js</span>.
            </p>

            <p className="text-lg leading-relaxed">
                Previously, I’ve worked on various projects — from <span className="text-white">bots</span> and <span
                className="text-white">dashboards</span> to <span
                className="text-white">interactive landing pages</span> with <span className="text-white">CMS integrations</span> and <span
                className="text-white">automated flows</span>. Most of what I’ve learned has come from <span
                className="text-white">solving real problems</span>, not just <span className="text-white">following tutorials</span>.
            </p>
        </div>
    );

    const experienceContent = (
        <div className="max-w-[600px] space-y-8 text-gray-400">
            <div
                className="border border-gray-700 rounded-lg p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-100 text-xl font-medium">Freelance Full-Stack Developer</h3>
                        <p className="text-gray-400 mt-1">Self-Employed</p>
                    </div>
                    <span className="text-gray-400 text-sm">Nov 2024 - Apr 2025</span>
                </div>
                <p className="text-gray-400 mb-6">
                    I have successfully managed and executed a range of projects that deliver high-quality, scalable,
                    and maintainable solutions tailored to unique business needs. My work emphasizes process
                    optimization, clear communication, and innovative problem-solving to drive client success.
                </p>
                <div className="flex flex-wrap gap-2">
          <span
              className="px-3 py-1 rounded-full text-sm"
              style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
          >
            TypeScript
          </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
            JavaScript
          </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
            React
          </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
            Next.js
          </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
            Node.js
          </span>
                </div>
            </div>

            <div
                className="border border-gray-700 rounded-lg p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-100 text-xl font-medium">Mobile & Web Developer</h3>
                        <p className="text-gray-400 mt-1">ITSoft Solutions</p>
                    </div>
                    <span className="text-gray-400 text-sm">Apr 2025 - Present</span>
                </div>
                <p className="text-gray-400 mb-6">
                    Working in a small team to build an MVP for a mobile-first product.
                    Responsible for the mobile UI built with React Native (Expo) and TypeScript.
                    Also contributed to backend logic using Node.js and PostgreSQL — implementing routes, middleware,
                    and auth.
                    Focused on delivering clean architecture, cross-platform consistency, and smooth handoff between
                    client and server.
                </p>
                <div className="flex flex-wrap gap-2">
        <span
            className="px-3 py-1 rounded-full text-sm"
            style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
        >
          React Native (Expo)
        </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
          TypeScript
        </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
                    >
          Redux Toolkit
        </span>
                    <span
                        className="px-3 py-1 rounded-full text-sm"
                        style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}
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
        <div className="max-w-[600px] space-y-6 sm:space-y-8 text-gray-400 group/projects">
            {/* Project 1 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project1" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200">
                            <Image
                                src="/projects/project1.jpeg"
                                alt="Fullstack Online Shop"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Fullstack Online Shop</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                A custom-built e-commerce system with high-performance frontend and scalable backend,
                                featuring secure payment processing.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Angular
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Spring Boot
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  PostgreSQL
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project 2 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project2" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200 bg-white flex items-center justify-center">
                            <Image
                                src="/telegram-logo.png"
                                alt="Telegram Logo"
                                width={80}
                                height={80}
                                className="mb-6"  // Adjusted to create more space below the logo
                            />
                            <span className="block text-[#0088cc] font-bold text-2xl absolute bottom-1">Bot</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Telegram Raffle Bot</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                A full-stack solution automating Telegram raffles with a web admin panel and bot for
                                participant management and winner selection.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Next.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Node.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Telegram API
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project 3 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project3" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200">
                            <Image
                                src="/projects/project3.jpg"
                                alt="PROVse Website"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">PROVse Website</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                A fully functional, responsive landing page for freight work and handyman services in
                                Lviv with service browsing, quote requests, and Telegram notifications.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Next.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  TypeScript
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Tailwind CSS
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project 4 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project4" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200 bg-white flex items-center justify-center">
                            <Image
                                src="/telegram-logo.png"
                                alt="Telegram Bot for Automated Messaging"
                                width={80}
                                height={80}
                                className="mb-6"
                            />
                            <span className="block text-[#0088cc] font-bold text-2xl absolute bottom-1">Bot</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Telegram Bot for Automated
                                    Messaging</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                Custom-built Telegram bot for automated message distribution with flexible scheduling,
                                database integration, and randomized delivery intervals.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Node.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  TypeScript
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Supabase
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project 5 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project5" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200">
                            <Image
                                src="/projects/project5.png"
                                alt="Cybersecurity Education Platform"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Cybersecurity Landing Page</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                Custom landing page for a cybersecurity course with engaging content, secure
                                authentication, and an interactive user experience.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Next.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  TypeScript
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Tailwind CSS
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Project 6 */}
            <div
                className="rounded-lg overflow-hidden transition-all duration-200 border border-transparent hover:border-gray-700 hover:bg-gray-800/20 group/item hover:opacity-100 group-hover/projects:opacity-40 hover:!opacity-100">
                <Link href="/projects/project6" className="block">
                    <div className="flex gap-6 items-start p-6">
                        <div
                            className="w-[240px] h-[135px] relative shrink-0 rounded-md overflow-hidden border border-transparent transition-colors duration-200 bg-white flex items-center justify-center">
                            <Image
                                src="/discord-icon.svg"
                                alt="Discord Bot"
                                width={80}
                                height={80}
                                className="mb-6"
                            />
                            <span className="block text-[#5865F2] font-bold text-2xl absolute bottom-1">Bot</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Discord Channel Forwarder Bot</h3>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="transform transition-all duration-200 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:stroke-[rgb(134,231,212)]"
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
                            </div>
                            <p className="text-gray-400 mb-4">
                                Bot for automated message forwarding between Discord channels with scheduling
                                capabilities, random message selection, and server-specific configurations.
                            </p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm"
                      style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>
                  Node.js
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  TypeScript
                </span>
                                <span className="px-3 py-1 rounded-full text-sm"
                                      style={{
                                          backgroundColor: 'rgba(134, 231, 212, 0.1)',
                                          color: 'rgb(134, 231, 212)'
                                      }}>
                  Discord.js
                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div onMouseMove={handleMouseMove} className="flex flex-col lg:flex-row min-h-screen relative bg-[#0a192f]">
            {/* Purple gradient effect that works on all screen sizes */}
            <div
                className="pointer-events-none fixed inset-0 z-10 w-screen h-screen gradient-effect"
                style={{
                    background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(180, 20, 255, 0.10) 0%,
            rgba(170, 10, 255, 0.09) 20%,
            rgba(160, 10, 255, 0.07) 40%,
            rgba(150, 0, 255, 0.05) 60%,
            rgba(140, 0, 240, 0.02) 80%,
            transparent 100%)`,
                    position: 'fixed', // Ensure it's fixed relative to viewport
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    mixBlendMode: "normal"
                }}
            />

            {/* Left Sidebar - Now with better mobile responsiveness */}
            <div
                className="w-full lg:w-1/2 lg:fixed lg:h-screen p-5 sm:p-6 md:p-8 lg:p-20 flex items-center bg-[#0a192f]">
                <div
                    className="flex flex-col justify-between min-h-[auto] lg:min-h-[700px] max-w-[600px] mx-auto text-left w-full lg:pl-24">
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 lg:-mt-10">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100 font-[titillium-web]">Nazarii
                                Voitkiv</h1>
                            <h2 className="text-lg sm:text-xl lg:text-xl text-gray-100 font-[titillium-web]">Junior
                                Fullstack Developer (React / Node.js / React Native)</h2>
                        </div>

                        {/* Navigation - Desktop and Mobile */}
                        <nav className="space-y-2 relative font-[titillium-web]">
                            <button
                                onClick={() => scrollToSection(aboutRef, 'about')}
                                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
                            >
                                <div
                                    className={`absolute inset-0 bg-gray-800 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} rounded transition-opacity`}/>
                                <div className={`h-[1px] transition-all z-10 ${
                                    activeSection === 'about'
                                        ? 'w-12 bg-gray-100'
                                        : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                                }`}/>
                                <span
                                    className={`z-10 ${activeSection === 'about' ? 'text-gray-100' : ''}`}>ABOUT</span>
                            </button>
                            <button
                                onClick={() => scrollToSection(experienceRef, 'experience')}
                                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
                            >
                                <div
                                    className={`absolute inset-0 bg-gray-800 ${activeSection === 'experience' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} rounded transition-opacity`}/>
                                <div className={`h-[1px] transition-all z-10 ${
                                    activeSection === 'experience'
                                        ? 'w-12 bg-gray-100'
                                        : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                                }`}/>
                                <span
                                    className={`z-10 ${activeSection === 'experience' ? 'text-gray-100' : ''}`}>EXPERIENCE</span>
                            </button>
                            <button
                                onClick={() => scrollToSection(projectsRef, 'projects')}
                                className="group flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 transition-colors relative px-4 py-1 -ml-4"
                            >
                                <div
                                    className={`absolute inset-0 bg-gray-800 ${activeSection === 'projects' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} rounded transition-opacity`}/>
                                <div className={`h-[1px] transition-all z-10 ${
                                    activeSection === 'projects'
                                        ? 'w-12 bg-gray-100'
                                        : 'w-8 bg-gray-400 group-hover:w-12 group-hover:bg-gray-100'
                                }`}/>
                                <span
                                    className={`z-10 ${activeSection === 'projects' ? 'text-gray-100' : ''}`}>PROJECTS</span>
                            </button>
                        </nav>

                        {/* Mobile-only social links below navigation */}
                        <div className="flex gap-4 mt-4 lg:hidden">
                            <a href="https://github.com/Nazarii-Voitkiv"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/github.svg" alt="GitHub" width={22} height={22}
                                       className="text-white invert"/>
                            </a>
                            <a href="https://www.linkedin.com/in/nazarii-voitkiv-106167341/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={22} height={22}
                                       className="text-white invert"/>
                            </a>
                        </div>
                    </div>

                    {/* Desktop-only Social Links */}
                    <div className="space-y-6 hidden lg:block mt-8 lg:mt-0">
                        <div className="flex gap-4 -mb-10">
                            <a href="https://github.com/Nazarii-Voitkiv"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/github.svg" alt="GitHub" width={24} height={24}
                                       className="text-white invert"/>
                            </a>
                            <a href="https://www.linkedin.com/in/nazarii-voitkiv-106167341/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24}
                                       className="text-white invert"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content - With improved mobile styling and centering */}
            <div className="w-full lg:w-1/2 lg:ml-[50%] bg-[#0a192f] overflow-y-auto relative">
                <div className="relative">
                    {/* About Section */}
                    <div className="px-5 sm:px-8 md:px-12 lg:pr-20 pt-8 pb-8 lg:py-20" ref={aboutRef} id="about-section"
                         data-section="about">
                        <div className="max-w-[600px] space-y-8 text-gray-400 text-left">
                            {aboutContent}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="px-5 sm:px-8 md:px-12 lg:pr-20 py-8 lg:py-20 border-t border-gray-800/30"
                         ref={experienceRef} id="experience-section" data-section="experience">
                        <div className="max-w-[600px] space-y-8 text-gray-400 text-left">
                            {experienceContent}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="px-5 sm:px-8 md:px-12 lg:pr-20 py-8 lg:py-20 border-t border-gray-800/30"
                         ref={projectsRef} id="projects-section" data-section="projects">
                        <div className="max-w-[600px] space-y-6 sm:space-y-8 text-gray-400 group/projects text-left">
                            {projectsContent}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
