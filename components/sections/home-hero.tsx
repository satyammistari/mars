"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, Cpu, ShieldCheck, Wrench } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

const heroStats = [
  { value: "25+", label: "live builds" },
  { value: "150+", label: "active members" },
  { value: "6", label: "technical tracks" },
]

const heroCalls = [
  {
    title: "Prototype first",
    description: "Students move from sketch to mechanism before polishing the presentation layer.",
    icon: Wrench,
  },
  {
    title: "Systems thinking",
    description: "Mechanical, embedded, and software work are treated as one stack.",
    icon: Cpu,
  },
  {
    title: "Competition ready",
    description: "We train teams to build for deadlines, pressure, and real judging.",
    icon: ShieldCheck,
  },
]

export function HomeHero({ splineScene }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-18 sm:pt-14 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-8 h-[24rem] w-[24rem] rounded-full bg-cyan-500/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8 rounded-[1.6rem] border border-slate-700/50 bg-[linear-gradient(180deg,rgba(7,11,21,0.84),rgba(2,6,18,0.72))] p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-7 lg:p-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            College Technical Club
          </div>

          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Mechanical Automation Robotics Society
            </p>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
              MARS CLUB
              <span className="mt-4 block max-w-2xl text-[0.32em] font-semibold uppercase tracking-[0.24em] text-slate-300 sm:text-[0.28em]">
                Build. Automate. Compete.
              </span>
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg sm:leading-8">
              Mechanical Automation Robotics Society is a student-led technical club that turns ideas into working
              systems through design, electronics, control, and intelligent software. We ship prototypes, mentor new
              builders, and compete with work that holds up under real scrutiny.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-700/80 bg-slate-900/75 px-4 py-3">
                <p className="text-2xl font-black tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/events" className={buttonVariants({ size: "lg" })}>
              Explore Events
              <CalendarDays className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Join Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              Recruitment for builders, coders, and mechanical tinkerers is open.
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {heroCalls.map((callout) => {
              const Icon = callout.icon

              return (
                <div key={callout.title} className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-500/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-50">{callout.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{callout.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/10 via-blue-500/8 to-violet-500/10 blur-2xl" />
          <div className="mb-3 flex items-center justify-between rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-slate-300">
            <span>Spline rig / kinematics</span>
            <span>live prototype view</span>
          </div>
          <div className="relative overflow-hidden rounded-[1.4rem] border border-slate-700/80 bg-[linear-gradient(180deg,rgba(9,14,24,0.98),rgba(4,7,16,0.96))] p-3 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.1),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[url('/noise-texture.png')] bg-[length:320px_320px] opacity-[0.06] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute left-[16%] top-[14%] h-16 w-24 rounded-[1.25rem] border border-cyan-300/20 bg-slate-950/60" />
              <div className="absolute left-[34%] top-[30%] h-16 w-24 rotate-[12deg] rounded-[1.25rem] border border-cyan-300/18 bg-slate-950/60" />
              <div className="absolute left-[53%] top-[48%] h-20 w-28 -rotate-[20deg] rounded-[1.25rem] border border-violet-300/18 bg-slate-950/60" />
              <div className="absolute right-[12%] top-[22%] h-20 w-20 rounded-full border border-slate-600/70 bg-slate-950/60" />
              <div className="absolute left-[27%] top-[27%] h-[2px] w-[12%] origin-left rotate-[15deg] bg-gradient-to-r from-cyan-300/70 to-transparent" />
              <div className="absolute left-[44%] top-[42%] h-[2px] w-[16%] origin-left rotate-[18deg] bg-gradient-to-r from-violet-300/70 to-transparent" />
              <div className="absolute left-[68%] top-[58%] h-[2px] w-[16%] origin-left -rotate-[24deg] bg-gradient-to-r from-blue-300/70 to-transparent" />
              <div className="absolute bottom-[18%] left-[46%] h-20 w-20 rounded-full border border-cyan-300/20 bg-cyan-500/10 blur-[0.5px]" />
            </div>
            <div className="absolute left-4 top-4 z-10 rounded-full border border-cyan-300/25 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-50 backdrop-blur">
              Spline rig / kinematics
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-200 backdrop-blur">
              Lazy loaded scene
            </div>
            <div className="absolute bottom-4 left-4 z-10 max-w-[18rem] rounded-2xl border border-cyan-300/20 bg-slate-950/88 p-4 shadow-[0_18px_50px_-30px_rgba(56,189,248,0.45)] backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/90">Robot arm stack</p>
              <p className="mt-2 text-xl font-black tracking-[-0.05em] text-white">Spline scene + lab pipeline</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The 3D arm sits alongside workshops, firmware, and fabrication so the hero feels like a live engineering desk.
              </p>
            </div>
            <div className="relative z-10">{splineScene}</div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              "Manipulator rig",
              "Autonomy stack",
              "Fabrication loop",
            ].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-center text-[11px] uppercase tracking-[0.22em] text-slate-300"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Current focus</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">Mechanical arm calibration and control tuning</p>
              </div>
              <div className="rounded-lg border border-cyan-300/20 bg-cyan-500/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100">
                Live Lab
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
