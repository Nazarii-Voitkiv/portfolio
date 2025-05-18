import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Nazarii Voitkiv | Full-Stack Developer",
  description: "A passionate developer focused on creating elegant, efficient, and user-friendly applications using React, Next.js, Node.js, Angular and Spring Boot.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
            rel="stylesheet"/>
      </head>
      <body className="font-[ubuntu] antialiased">
      {children}
      <Analytics/>
      </body>
      </html>
  );
}