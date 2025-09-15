'use client'

import Image from "next/image";
import Link from "next/link";
import {useState, useEffect, useRef} from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState('about');

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

        window.addEventListener('mousemove', onMove, {passive: true});
        return () => {
            window.removeEventListener('mousemove', onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, section: string) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(section);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        const useContainer = !!(container && container.scrollHeight > container.clientHeight + 1);

        const getScrollTop = () => (useContainer ? (container as HTMLDivElement).scrollTop : window.scrollY);

        const topRelativeToContainer = (el: HTMLElement | null) => {
            if (!el) return 0;
            if (useContainer && container) {
                return el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
            }
            return el.getBoundingClientRect().top + window.scrollY;
        };

        let raf = 0 as number | 0;
        const handle = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const topEdge = getScrollTop();
                const slack = 8;

                const experienceTop = topRelativeToContainer(experienceRef.current);
                const projectsTop = topRelativeToContainer(projectsRef.current);

                if (topEdge + slack >= projectsTop) {
                    setActiveSection('projects');
                } else if (topEdge + slack >= experienceTop) {
                    setActiveSection('experience');
                } else {
                    setActiveSection('about');
                }
            });
        };

        const target: EventTarget = (useContainer && container) ? container : window;
        target.addEventListener('scroll', handle as EventListener, { passive: true } as AddEventListenerOptions);
        window.addEventListener('resize', handle, { passive: true });
        handle();

        return () => {
            target.removeEventListener('scroll', handle as EventListener);
            window.removeEventListener('resize', handle as EventListener);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const aboutContent = (
        <div className="max-w-[600px] space-y-8 text-gray-400">
            <p className="text-lg leading-relaxed">
                I build <span className="text-white">clean</span>, <span className="text-white">reliable</span> apps end‑to‑end —
                <span className="text-white"> React/Next.js</span> for the web, <span className="text-white">React Native</span> for mobile,
                and <span className="text-white">Node.js/TypeScript</span> for APIs. I care about <span className="text-white">simple architecture</span>,
                strong typing, performance budgets, and a fast developer experience.
            </p>

            <p className="text-lg leading-relaxed">
                My work spans <span className="text-white">e‑commerce</span>, <span className="text-white">automation/bots</span>,
                <span className="text-white"> dashboards</span>, and <span className="text-white">high‑performance landing pages</span> with
                <span className="text-white"> CMS</span>. I ship auth, payments, real‑time chat, and map integrations, then automate delivery with
                <span className="text-white"> CI/CD</span> and monitoring.
            </p>

            <p className="text-lg leading-relaxed">
                I prefer <span className="text-white">practical solutions</span> over over‑engineering and write code that’s easy to read and extend.
                If you want to collaborate, ping me on <a href="https://t.me/nazarix13" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-[rgb(134,231,212)] transition-colors">Telegram</a>.
            </p>
        </div>
    );

    const experienceContent = (
        <div className="max-w-[600px] space-y-8 text-gray-400">
            <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-100 text-xl font-medium">JavaScript Developer</h3>
                        <p className="text-gray-400 mt-1">
                            <a href="https://meetmap.io" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-[rgb(134,231,212)] transition-colors">MeetMap</a>
                            
                            — Remote (Netherlands)
                        </p>
                    </div>
                    <span className="text-gray-400 text-sm">Sep 2024 — Present</span>
                </div>
                <p className="text-gray-400 mb-6">
                    Shipped a cross‑platform product: web app on Next.js and mobile app on Expo. Implemented secure auth (JWT, email/SMS verification),
                    real‑time features with NestJS WebSockets, and map integrations with Mapbox. Optimized performance with Redis caching and
                    decoupled heavy tasks via RabbitMQ. Deployed to AWS EKS with CI/CD and Sentry monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Next.js</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>React Native (Expo)</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>NestJS</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>PostgreSQL/Prisma</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Redis</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>RabbitMQ</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Stripe</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Mapbox</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>AWS EKS</span>
                </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-gray-100 text-xl font-medium">Full‑stack Developer (Freelance)</h3>
                        <p className="text-gray-400 mt-1">Self‑Employed — Remote</p>
                    </div>
                    <span className="text-gray-400 text-sm">Sep 2024 — Mar 2025</span>
                </div>
                <p className="text-gray-400 mb-6">
                    Delivered 6+ projects from spec to production: landing pages, admin panels, and bots. Implemented JWT/RBAC,
                    data validation, Stripe flows, and automated releases. Deployed to Vercel/Railway/AWS EC2 with Docker and CI/CD.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>React/Next.js</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Node.js/Express</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Prisma/PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>MongoDB</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Telegraf/Discord.js</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>Docker</span>
                    <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor:'rgba(134,231,212,0.1)',color:'rgb(134,231,212)'}}>GitHub Actions</span>
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
                                <h3 className="text-xl font-medium text-gray-100">E‑Commerce System</h3>
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
                            <p className="text-gray-400 mb-4">Production‑ready shop: catalog, cart, checkout, admin; secure payments and CI/CD.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Angular</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Spring Boot</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>PostgreSQL</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Stripe</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Docker</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

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
                                className="mb-6"
                            />
                            <span className="block text-[#0088cc] font-bold text-2xl absolute bottom-1">Bot</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <h3 className="text-xl font-medium text-gray-100">Telegram Raffle Platform</h3>
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
                            <p className="text-gray-400 mb-4">Giveaway platform with admin tools, scheduling, and Turnstile anti‑bot.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Next.js</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Prisma</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Turnstile</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

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
                                <h3 className="text-xl font-medium text-gray-100">Freight Services Landing</h3>
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
                            <p className="text-gray-400 mb-4">High‑performance SSR landing with animations and Telegram notifications.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Next.js 14</span>
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
                                <h3 className="text-xl font-medium text-gray-100">Bulk Messaging Bot (Telegram)</h3>
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
                            <p className="text-gray-400 mb-4">Mass messaging with scheduling, templates, and rate limiting; resilient to failures.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Telegraf</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Supabase</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Rate limiting</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

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
                                <h3 className="text-xl font-medium text-gray-100">Cybersecurity Course Page</h3>
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
                            <p className="text-gray-400 mb-4">Content site with CMS, optimized images, sitemap/metadata, and auto‑deploy.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Next.js (App Router)</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Supabase CMS</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>next/image</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

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
                                <h3 className="text-xl font-medium text-gray-100">Discord Forwarder</h3>
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
                            <p className="text-gray-400 mb-4">Forward messages across channels with scheduling and server‑specific configs.</p>
                            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>Discord.js</span>
                                <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: 'rgba(134, 231, 212, 0.1)', color: 'rgb(134, 231, 212)'}}>PM2</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row min-h-screen relative bg-[#0a192f]">
            <div
                className="pointer-events-none fixed inset-0 z-10 w-screen h-screen gradient-effect"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    mixBlendMode: 'normal'
                }}
            />
            <div
                className="w-full lg:w-1/2 lg:fixed lg:h-screen p-5 sm:p-6 md:p-8 lg:p-20 flex items-center bg-[#0a192f]">
                <div
                    className="flex flex-col justify-between min-h-[auto] lg:min-h-[700px] max-w-[600px] mx-auto text-left w-full lg:pl-24">
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 lg:-mt-10">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100 font-[titillium-web]">Nazarii
                                Voitkiv</h1>
                            <h2 className="text-lg sm:text-xl lg:text-xl text-gray-100 font-[titillium-web]">Full‑Stack Developer (React • Node.js • React Native)</h2>
                        </div>

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
                        <div className="flex gap-4 mt-4 lg:hidden">
                            <a href="https://github.com/Nazarii-Voitkiv"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/github.svg" alt="GitHub" width={22} height={22}
                                       className="text-white invert"/>
                            </a>
                            <a href="https://t.me/nazarix13"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/telegram.svg" alt="Telegram" width={22} height={22} className="text-white invert" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-6 hidden lg:block mt-8 lg:mt-0">
                        <div className="flex gap-4 -mb-10">
                            <a href="https://github.com/Nazarii-Voitkiv"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/github.svg" alt="GitHub" width={24} height={24}
                                       className="text-white invert"/>
                            </a>
                            <a href="https://t.me/nazarix13"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-2 hover:opacity-80 transition-opacity">
                                <Image src="/telegram.svg" alt="Telegram" width={24} height={24} className="text-white invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={scrollContainerRef} className="w-full lg:w-1/2 lg:ml-[50%] bg-[#0a192f] overflow-y-auto relative">
                <div className="relative">
                    <div className="px-5 sm:px-8 md:px-12 lg:pr-20 pt-8 pb-8 lg:py-20" ref={aboutRef} id="about-section"
                         data-section="about">
                        <div className="max-w-[600px] space-y-8 text-gray-400 text-left">
                            {aboutContent}
                        </div>
                    </div>
                    <div className="px-5 sm:px-8 md:px-12 lg:pr-20 py-8 lg:py-20 border-t border-gray-800/30"
                         ref={experienceRef} id="experience-section" data-section="experience">
                        <div className="max-w-[600px] space-y-8 text-gray-400 text-left">
                            {experienceContent}
                        </div>
                    </div>
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
