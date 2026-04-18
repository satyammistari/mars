import Link from "next/link"
import { ArrowRight, BookOpen, CalendarDays, Cpu, Rocket, ShieldCheck, Sparkles, Wrench } from "lucide-react"

import eventsData from "@/data/events.json"
import resourcesData from "@/data/learning-resources.json"
import teamData from "@/data/team.json"
import { HomeHero } from "@/components/sections/home-hero"
import { Reveal } from "@/components/sections/reveal"
import { SplineScene } from "@/components/sections/spline-scene"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ClubEvent, LearningResource, TeamMember } from "@/types/mars"

const events = (eventsData as ClubEvent[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
const resources = resourcesData as LearningResource[]
const members = teamData as TeamMember[]

const featuredEvents = events.slice(0, 3)
const featuredResources = resources.slice(0, 4)
const spotlightMembers = members.filter((member) => member.section === "core").slice(0, 4)

const clubFlow = [
  {
    step: "01",
    title: "Ideate",
    description: "Frame the problem, sketch the mechanism, and define the stack.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Build",
    description: "Move through CAD, fabrication, wiring, and firmware together.",
    icon: Wrench,
  },
  {
    step: "03",
    title: "Test",
    description: "Break things in the lab, fix them, and tighten the system.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Compete",
    description: "Package the work for demos, judging, and live showcases.",
    icon: ShieldCheck,
  },
]

const sideFacts = [
  { value: `${events.length}+`, label: "events hosted" },
  { value: `${members.length}+`, label: "club members" },
  { value: `${resources.length}+`, label: "learning resources" },
]

const learningTracks = [
  {
    title: "Robotics Basics",
    summary: "Kinematics, sensing, and control loops.",
  },
  {
    title: "Arduino / Embedded",
    summary: "Microcontrollers, firmware, and interfaces.",
  },
  {
    title: "Mechanical Design",
    summary: "CAD, structure, tolerances, and fabrication.",
  },
  {
    title: "Coding / ML",
    summary: "Automation scripts, vision, and applied ML.",
  },
]

export default function HomePage() {
  const leadEvent = featuredEvents[0]
  const secondaryEvents = featuredEvents.slice(1)

  return (
    <main>
      <HomeHero splineScene={<SplineScene />} />

      {/* ─── Stats Section ─── */}
      <SectionWrapper id="stats" kicker="By The Numbers" title="Club at a Glance" description="Real metrics from our work across events, mentoring, and hands-on innovation.">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { value: `${events.length}+`, label: "Events Conducted", icon: CalendarDays },
            { value: `${members.length}+`, label: "Active Members", icon: Rocket },
            { value: "5+", label: "Major Achievements", icon: ShieldCheck },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-500/8 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">{stat.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </SectionWrapper>

      {/* ─── How MARS Works ─── */}
      <SectionWrapper id="club-index" kicker="Club Index" title="How MARS Works" description="A practical loop that keeps members building all semester.">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="h-full">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">Build pipeline</Badge>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">2026 cycle</span>
                </div>
                <CardTitle className="text-2xl text-slate-50">From idea to working prototype</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  We keep the club around execution. Members join a build track, learn the stack, and ship something
                  tangible instead of collecting slide decks.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {clubFlow.map((stage) => {
                    const Icon = stage.icon

                    return (
                      <div key={stage.step} className="group/step rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 transition-all duration-300 hover:border-cyan-300/25 hover:bg-slate-900/70">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/90">{stage.step}</span>
                          <Icon className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover/step:scale-110" />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-slate-50">{stage.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{stage.description}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <Card>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-base text-slate-200">Club snapshot</CardTitle>
                    <CalendarDays className="h-4 w-4 text-cyan-200" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sideFacts.map((fact) => (
                    <div key={fact.label} className="flex items-end justify-between gap-4 border-b border-slate-800/60 pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="text-2xl font-black tracking-[-0.05em] text-white">{fact.value}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">{fact.label}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-base text-slate-200">Open tracks</CardTitle>
                    <BookOpen className="h-4 w-4 text-violet-200" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-300">
                  <p>Mechanical design, automation, embedded systems, and applied ML.</p>
                  <p>Hands-on labs, mentor review, and competition prep in one workflow.</p>
                  <Link href="/learning" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    Explore learning tracks
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Featured Events ─── */}
      <SectionWrapper
        kicker="What Is Next"
        title="Featured Events"
        description="A more editorial view of the competitions and workshops shaping this semester."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Card className="h-full overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <img src={leadEvent.image} alt={leadEvent.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-cyan-200/20 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
                  {leadEvent.category}
                </div>
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span>{leadEvent.formattedDate}</span>
                  <span>{leadEvent.location}</span>
                </div>
                <CardTitle className="text-2xl text-slate-50">{leadEvent.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-slate-300 sm:text-base">{leadEvent.summary}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {leadEvent.highlights.slice(0, 2).map((highlight) => (
                    <div key={highlight} className="rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2 text-sm text-slate-300">
                      {highlight}
                    </div>
                  ))}
                </div>
                <Link href={`/events/${leadEvent.slug}`} className={buttonVariants({ variant: "secondary" })}>
                  View details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5">
            {secondaryEvents.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.05 + 0.05}>
                <Card className="overflow-hidden">
                  <div className="grid gap-0 sm:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-40 overflow-hidden">
                      <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-transparent sm:bg-gradient-to-t" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        <span>{event.category}</span>
                        <span>{event.formattedDate}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-slate-50">{event.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{event.summary}</p>
                      <Link href={`/events/${event.slug}`} className="mt-4 inline-flex text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-50">
                        Open event page
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/events" className={buttonVariants({ variant: "secondary" })}>
            Browse all events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* ─── Learning Preview ─── */}
      <SectionWrapper
        kicker="Skill Tracks"
        title="Learning Preview"
        description="Focused resources across robotics, embedded systems, design, and coding."
      >
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="relative h-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.06),transparent_30%)]" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/25 via-transparent to-transparent" />
            <CardHeader className="relative space-y-4">
              <Badge variant="secondary" className="w-fit">
                Curriculum map
              </Badge>
              <CardTitle className="text-2xl text-slate-50 sm:text-[2rem]">Study the stack, then build the stack.</CardTitle>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                The learning hub is arranged like a training plan: foundational robotics, embedded control,
                mechanical design, then applied code and ML.
              </p>
            </CardHeader>
            <CardContent className="relative space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">4</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">tracks</p>
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">12+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">resources</p>
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">Hands-on</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">first</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {learningTracks.map((track, index) => (
                  <div key={track.title} className="group rounded-xl border border-slate-700/50 bg-slate-900/40 p-4 transition-all duration-300 hover:border-cyan-300/25">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
                        0{index + 1}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-cyan-300 transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-50">{track.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{track.summary}</p>
                  </div>
                ))}
              </div>

              <Link href="/learning" className={buttonVariants({ variant: "outline", size: "sm" })}>
                Open the full hub
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="h-full overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge>{resource.type}</Badge>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{resource.category}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight text-slate-50">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-slate-300">{resource.description}</p>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 px-3 py-2">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Quick access</span>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-cyan-100 transition-colors hover:text-cyan-50"
                    >
                      Open
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Team Preview ─── */}
      <SectionWrapper kicker="Leadership" title="Team Spotlight" description="Student leaders driving MARS CLUB initiatives.">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="h-full">
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">Core team</Badge>
                <CardTitle className="text-2xl text-slate-50">Built by students, for students who want to ship hardware.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-slate-300">
                <p>Team leads coordinate labs, competitions, mentoring, and outreach so the club stays active all semester.</p>
                <p>Every role supports a clear technical pipeline instead of a generic event-only club structure.</p>
                <Link href="/team" className={buttonVariants({ variant: "outline", size: "sm" })}>
                  View the full team
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {spotlightMembers.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.05}>
                <Card className="group overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-base text-slate-100">{member.name}</CardTitle>
                    <p className="text-sm text-slate-400">{member.role}</p>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Call to Action ─── */}
      <section className="relative py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_60%)]" />
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-slate-700/50 bg-slate-900/30 p-8 backdrop-blur-sm sm:p-12">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
              <h2 className="relative text-balance text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                Ready to build something{" "}
                <span className="gradient-text">extraordinary</span>?
              </h2>
              <p className="relative mt-4 text-slate-400 sm:text-lg">
                Join MARS CLUB and turn your ideas into real engineering systems.
                No prior robotics experience needed — just curiosity and drive.
              </p>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
                >
                  <span className="relative z-10">Join MARS Club</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
                <Link
                  href="/about"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
