import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Grotesk } from "next/font/google"

import { SiteFooter } from "@/components/sections/site-footer"
import { SiteNavbar } from "@/components/sections/site-navbar"
import { ClientShell } from "@/components/sections/client-shell"
import { EtheralShadow } from "@/components/ui/etheral-shadow"

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
    "Official website of MARS CLUB - Mechanical Automation Robotics Society. Building intelligent machines and future-ready engineers through robotics, automation, and hands-on innovation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} font-sans text-foreground antialiased`}>
        <ClientShell>
          <div className="relative min-h-screen overflow-x-clip bg-[#020617]">
            {/* Etheral Shadow Background */}
            <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
              <EtheralShadow
                color="rgba(56, 189, 248, 0.35)"
                animation={{ scale: 75, speed: 60 }}
                noise={{ opacity: 0.6, scale: 1 }}
                sizing="fill"
              />
            </div>

            <div className="relative z-20">
              <SiteNavbar />
              <div className="relative z-10">{children}</div>
              <SiteFooter />
            </div>
          </div>
        </ClientShell>
      </body>
    </html>
  )
}
