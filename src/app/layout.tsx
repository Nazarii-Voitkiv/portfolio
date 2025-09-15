import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ubuntu, titilliumWeb } from './fonts';

export const metadata: Metadata = {
  title: "Nazarii Voitkiv | Full-Stack Developer",
  description:
    "I build clean, reliable web and mobile apps with React, Next.js, Node.js, React Native, and TypeScript. Focused on clear architecture, performance, and real business impact.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Nazarii Voitkiv" }],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Nazarii Voitkiv | Full-Stack Developer",
    description:
      "Clean, reliable apps with React, Next.js, Node.js, React Native, and TypeScript.",
    url: "/",
    siteName: "Nazarii Voitkiv",
    images: [
      {
        url: "/favicon.svg",
        width: 256,
        height: 256,
        alt: "NV Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazarii Voitkiv | Full-Stack Developer",
    description:
      "Clean, reliable apps with React, Next.js, Node.js, React Native, and TypeScript.",
    images: ["/favicon.svg"],
  },
  themeColor: "#0a192f",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${ubuntu.className} ${ubuntu.variable} ${titilliumWeb.variable} antialiased`}>
        {children}
        <Analytics/>
        </body>
        </html>
    );
}
