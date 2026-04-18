"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

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
            ? "border-border-color bg-bg-primary/95 shadow-[0_4px_24px_-8px_rgba(25,118,210,0.18)] backdrop-blur-2xl"
            : "border-border-color/40 bg-bg-primary/80 shadow-[0_4px_18px_-6px_rgba(25,118,210,0.08)] backdrop-blur-xl",
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3 text-text-primary group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200/60 bg-gradient-to-br from-blue-600 to-sky-500 text-[13px] font-black tracking-[0.08em] text-white shadow-[0_2px_8px_rgba(25,118,210,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(25,118,210,0.4)]">
              M
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-[0.12em] text-text-primary sm:text-[16px]">MARS CLUB</span>
              <span className="mt-1 hidden text-[10px] uppercase tracking-[0.22em] text-text-secondary sm:block">Mechanical Automation Robotics Society</span>
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
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-accent-color"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-blue-50 shadow-[inset_0_0_0_1px_rgba(25,118,210,0.2)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "bg-accent-color text-white hover:bg-accent-hover border-accent-color")}>
              Join MARS
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-color text-text-secondary transition hover:bg-bg-secondary md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="border-t border-border-color bg-bg-primary/98 px-4 py-4 backdrop-blur-xl md:hidden"
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
                        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive ? "bg-bg-secondary text-accent-color" : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="mt-2 flex w-full gap-2">
                  <ThemeToggle />
                  <Link href="/contact" className={buttonVariants({ className: "w-full bg-accent-color text-white hover:bg-accent-hover" })}>
                    Join MARS
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
