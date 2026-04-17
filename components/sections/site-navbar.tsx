"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/learning", label: "Learning" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-slate-700/50 bg-slate-950/80 shadow-[0_18px_60px_-35px_rgba(59,130,246,0.55)] backdrop-blur-2xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/25 bg-[linear-gradient(180deg,rgba(12,19,34,0.95),rgba(7,11,21,0.95))] text-[13px] font-black tracking-[0.08em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              M
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-[0.16em] text-slate-50 sm:text-[16px]">MARS CLUB</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-500">Mechanical Automation Robotics Society</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-all",
                    isActive
                      ? "bg-[linear-gradient(110deg,rgba(56,189,248,0.14),rgba(139,92,246,0.16))] text-cyan-100 shadow-[inset_0_0_0_1px_rgba(165,243,252,0.28)]"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className={buttonVariants({ size: "sm" })}>
              Join MARS
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700/80 text-slate-200 transition hover:bg-slate-800/80 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="border-t border-slate-800/70 bg-slate-950/90 px-4 py-4 md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm transition-colors",
                        isActive ? "bg-blue-500/15 text-blue-200" : "text-slate-300 hover:bg-slate-800/80 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link href="/contact" className={buttonVariants({ className: "mt-2 w-full" })}>
                  Join MARS
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
