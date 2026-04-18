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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.div
        className={cn(
          "mx-auto w-full max-w-7xl rounded-2xl border transition-all duration-500",
          scrolled
            ? "border-slate-700/60 bg-slate-950/85 shadow-[0_8px_32px_-12px_rgba(56,189,248,0.25)] backdrop-blur-2xl"
            : "border-slate-700/30 bg-slate-950/40 shadow-[0_18px_60px_-35px_rgba(59,130,246,0.35)] backdrop-blur-xl",
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3 text-white group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/25 bg-[linear-gradient(180deg,rgba(12,19,34,0.95),rgba(7,11,21,0.95))] text-[13px] font-black tracking-[0.08em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              M
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-[0.16em] text-slate-50 sm:text-[16px]">MARS CLUB</span>
              <span className="mt-1 hidden text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:block">Mechanical Automation Robotics Society</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-all duration-300",
                    isActive
                      ? "text-cyan-100"
                      : "text-slate-400 hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-[linear-gradient(110deg,rgba(56,189,248,0.14),rgba(139,92,246,0.16))] shadow-[inset_0_0_0_1px_rgba(165,243,252,0.28)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "neon-border-glow")}>
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
              className="border-t border-slate-800/70 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive ? "bg-cyan-500/15 text-cyan-100" : "text-slate-300 hover:bg-slate-800/80 hover:text-white",
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
      </motion.div>
    </header>
  )
}
