import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";
import {ubuntu, titilliumWeb} from './fonts';

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
        <body className={`${ubuntu.className} ${ubuntu.variable} ${titilliumWeb.variable} antialiased`}>
        {children}
        <Analytics/>
        </body>
        </html>
    );
}