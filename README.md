Nazarii Voitkiv — Full‑Stack Developer Portfolio

Modern portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Focused on clean architecture, smooth UX, performance, and clear presentation of projects and experience.

Tech Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics

Key Features
- Smooth section navigation with IntersectionObserver
- Responsive, mobile-first layout
- CSS-variable powered gradient (no React re-renders on mouse move)
- Accessible links and semantic structure

Getting Started
- Install dependencies: `npm i` or `yarn` or `pnpm i`
- Run dev server: `npm run dev`
- Open: `http://localhost:3000`

Project Structure
- `src/app/layout.tsx` — global metadata, fonts, analytics
- `src/app/page.tsx` — main page (About, Experience, Projects)
- `src/app/projects/*/page.tsx` — project detail pages
- `src/app/globals.css` — Tailwind and global styles

Deploy
- Optimized for Vercel, but works on any Next.js-compatible host.
