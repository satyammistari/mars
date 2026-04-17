import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Grotesk } from "next/font/google"

import { SiteFooter } from "@/components/sections/site-footer"
import { SiteNavbar } from "@/components/sections/site-navbar"

import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MARS CLUB | Mechanical Automation Robotics Society",
  description:
    "Official website of MARS CLUB - Mechanical Automation Robotics Society. Explore team, events, resources, achievements, and contact information.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} font-sans text-foreground antialiased`}>
        <div className="relative min-h-screen overflow-x-clip bg-[#020617]">
          <div className="pointer-events-none absolute inset-0 futuristic-grid opacity-[0.12] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] animate-grid-pan" />
          <div className="pointer-events-none absolute -left-20 top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[120px] animate-float-slow" />
          <div className="pointer-events-none absolute -right-24 top-[18rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/15 blur-[130px] animate-pulse-soft" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-500/14 via-indigo-500/5 to-transparent" />

          <div className="relative z-20">
            <SiteNavbar />
            <div className="relative z-10">{children}</div>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
