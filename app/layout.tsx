import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"

import { SiteFooter } from "@/components/sections/site-footer"
import { SiteNavbar } from "@/components/sections/site-navbar"
import { ClientShell } from "@/components/sections/client-shell"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${lora.variable} font-serif antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientShell>
            <div className="relative min-h-screen overflow-x-clip bg-bg-primary transition-colors duration-300">
              <div className="relative z-20">
                <SiteNavbar />
                <div className="relative z-10">{children}</div>
                <SiteFooter />
              </div>
            </div>
          </ClientShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
