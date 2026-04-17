import Link from "next/link"
import { ArrowRight, BookOpen, CalendarDays, Cpu, ShieldCheck, Sparkles, Wrench } from "lucide-react"

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
                      <div key={stage.step} className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/90">{stage.step}</span>
                          <Icon className="h-4 w-4 text-cyan-200" />
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
                    <div key={fact.label} className="flex items-end justify-between gap-4 border-b border-slate-800/80 pb-3 last:border-0 last:pb-0">
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

      <SectionWrapper
        kicker="What Is Next"
        title="Featured Events"
        description="A more editorial view of the competitions and workshops shaping this semester."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Card className="h-full overflow-hidden">
              <div className="relative h-72">
                <img src={leadEvent.image} alt={leadEvent.title} className="h-full w-full object-cover" />
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
                    <div key={highlight} className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
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
                    <div className="relative min-h-40">
                      <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-transparent sm:bg-gradient-to-t" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        <span>{event.category}</span>
                        <span>{event.formattedDate}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-slate-50">{event.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{event.summary}</p>
                      <Link href={`/events/${event.slug}`} className="mt-4 inline-flex text-sm font-semibold text-cyan-100 hover:text-cyan-50">
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

      <SectionWrapper
        kicker="Skill Tracks"
        title="Learning Preview"
        description="Focused resources across robotics, embedded systems, design, and coding."
      >
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="relative h-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.1),transparent_30%)]" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/35 via-transparent to-transparent" />
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
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/75 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">4</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">tracks</p>
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/75 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">12+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">resources</p>
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/75 p-4">
                  <p className="text-2xl font-black tracking-[-0.05em] text-white">Hands-on</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">first</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {learningTracks.map((track, index) => (
                  <div key={track.title} className="rounded-xl border border-slate-700/80 bg-slate-900/68 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
                        0{index + 1}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
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
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Quick access</span>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-cyan-100 hover:text-cyan-50"
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
                <Card className="overflow-hidden">
                  <div className="relative h-52">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
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
    </main>
  )
}
