"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HomeHeroProps = {
  splineScene: ReactNode
}

export function HomeHero({ splineScene }: HomeHeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
      {/* Top accent gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Ambient glows — light warm palette */}
      <div className="pointer-events-none absolute -left-32 top-8 h-[28rem] w-[28rem] rounded-full bg-accent-color/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-amber-500/10 blur-[160px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8">
        {/* ─── LEFT: Text Content ─── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            College Technical Club
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="gradient-text">MARS</span>{" "}
              <span className="text-text-primary">CLUB</span>
            </h1>

            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-text-secondary">
              Mechanical{" "}
              <span className="text-accent-color">•</span>{" "}
              Automation{" "}
              <span className="text-accent-color">•</span>{" "}
              Robotics
            </p>

            <p className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
              Building intelligent machines and future-ready engineers
            </p>

            <p className="max-w-xl text-base leading-7 text-text-secondary">
              A student-led technical club driving innovation through robotics, automation,
              embedded systems, and hands-on learning. We ship prototypes, mentor builders,
              and compete with work that holds up under real scrutiny.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/events"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_4px_20px_rgba(25,118,210,0.28)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(25,118,210,0.42)]",
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Events
                <CalendarDays className="h-4 w-4" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-border-color text-text-primary transition-all duration-300 hover:border-accent-hover hover:bg-bg-secondary hover:text-accent-color",
              )}
            >
              Join the Club
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { value: "25+", label: "Events Hosted" },
              { value: "150+", label: "Active Members" },
              { value: "6", label: "Technical Tracks" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border-color/80 bg-bg-primary/80 px-4 py-3 shadow-sm backdrop-blur-sm"
              >
                <p className="text-2xl font-black tracking-[-0.05em] text-text-primary">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-text-secondary/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── RIGHT: Spline 3D Scene ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Ambient glow behind the 3D scene */}
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-amber-50/30 blur-3xl" />

          {/* 3D Scene container */}
          <div className="relative overflow-hidden rounded-[1.4rem] border border-border-color/80 bg-bg-primary shadow-[0_20px_60px_-20px_rgba(25,118,210,0.18)]">
            {/* Inner top gradient */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(25,118,210,0.04),transparent_40%)]" />

            {/* Top highlight line */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

            {/* Label overlays */}
            <div className="absolute left-4 top-4 z-10 rounded-full border border-border-color/50 bg-bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-accent-color backdrop-blur">
              Interactive 3D Model
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full border border-border-color bg-bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-text-secondary backdrop-blur">
              Spline Scene
            </div>

            {/* Spline scene */}
            <div className="relative z-10">{splineScene}</div>
          </div>

          {/* Bottom tags */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Robotic Arm", "Kinematics", "Live View"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-border-color/80 bg-bg-primary/80 px-3 py-2 text-center text-[10px] uppercase tracking-[0.22em] text-text-secondary/70 backdrop-blur-sm shadow-sm"
              >
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
