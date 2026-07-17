import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: {
    default: "Kibet Brian | Full-Stack Software Engineer",
    template: "%s | Kibet Brian",
  },
  description: "Kibet Brian — full-stack software engineer building production-ready web and mobile applications for startups and businesses.",
  keywords: [
    "Kibet Brian",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Development",
    "Mobile Development",
    "Next.js",
    "React",
    "Node.js",
    "System Architecture",
    "Nogeybix Labs",
  ],
  authors: [
    {
      name: "Kibet Brian",
      url: "https://github.com/itskibetbrian",
    },
  ],
  creator: "Kibet Brian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kibetbrian.com",
    title: "Kibet Brian | Full-Stack Software Engineer",
    description: "Kibet Brian — full-stack software engineer building production-ready web and mobile applications for startups and businesses.",
    siteName: "Kibet Brian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kibet Brian | Full-Stack Software Engineer",
    description: "Building scalable, production-ready web and mobile applications for startups and businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
