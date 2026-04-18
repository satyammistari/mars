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
      {/* Top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-8 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-violet-500/8 blur-[160px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8">
        {/* ─── LEFT: Text Content ─── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-500/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            College Technical Club
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="gradient-text">MARS</span>{" "}
              <span className="text-white">CLUB</span>
            </h1>

            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-slate-300/90">
              Mechanical{" "}
              <span className="text-cyan-300">•</span>{" "}
              Automation{" "}
              <span className="text-cyan-300">•</span>{" "}
              Robotics
            </p>

            <p className="text-lg font-semibold tracking-tight text-slate-100 sm:text-xl">
              Building intelligent machines and future-ready engineers
            </p>

            <p className="max-w-xl text-base leading-7 text-slate-400">
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
                "group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(56,189,248,0.4)]",
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
                "border-cyan-300/25 text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
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
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-2xl font-black tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
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
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-cyan-500/8 via-blue-500/6 to-violet-500/8 blur-3xl" />

          {/* 3D Scene container */}
          <div className="relative overflow-hidden rounded-[1.4rem] border border-slate-700/60 bg-[linear-gradient(180deg,rgba(9,14,24,0.98),rgba(4,7,16,0.96))] shadow-[0_30px_80px_-40px_rgba(56,189,248,0.35)]">
            {/* Inner glow effects */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.06),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[url('/noise-texture.png')] bg-[length:320px_320px] opacity-[0.04] mix-blend-overlay" />

            {/* Top highlight line */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

            {/* Label overlays */}
            <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/20 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">
              Interactive 3D Model
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
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
                className="rounded-xl border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-center text-[10px] uppercase tracking-[0.22em] text-slate-400 backdrop-blur-sm"
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
