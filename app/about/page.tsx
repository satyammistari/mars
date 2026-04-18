import Link from "next/link"
import { ArrowRight, Atom, Cpu, Target, Users, Wrench, Zap } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

const pillars = [
  {
    title: "Mechanical Design",
    description: "Design mechanisms and structures that are practical, robust, and manufacturable using industry-grade CAD workflows.",
    icon: Wrench,
    color: "border-blue-200 bg-blue-50 text-blue-600",
  },
  {
    title: "Automation Systems",
    description: "Build control-driven systems using sensors, actuators, and embedded logic for real-world automation challenges.",
    icon: Cpu,
    color: "border-indigo-200 bg-indigo-50 text-indigo-600",
  },
  {
    title: "Robotics Innovation",
    description: "Create intelligent robotic solutions through applied research, computer vision, and advanced control theory.",
    icon: Atom,
    color: "border-sky-200 bg-sky-50 text-sky-600",
  },
]

const values = [
  {
    icon: Target,
    title: "Execution Over Ideas",
    description: "We measure progress in prototypes shipped, not presentations made.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Peer mentorship and cross-functional teams drive growth at every level.",
  },
  {
    icon: Zap,
    title: "Real-World Impact",
    description: "Projects are designed for competition judging, industry demos, and practical use.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute -left-32 top-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-12 h-[28rem] w-[28rem] rounded-full bg-violet-500/6 blur-[140px]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-blue-700">
                <span className="h-px w-8 bg-gradient-to-r from-accent-color to-transparent" />
                About Us
              </div>
              <h1 className="text-balance font-['Playfair_Display'] text-4xl font-black tracking-[-0.04em] text-text-primary sm:text-5xl">
                About <span className="text-accent-color">MARS CLUB</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-text-secondary">
                Mechanical Automation Robotics Society is a technical community where students transform engineering
                fundamentals into working prototypes, research ideas, and competition-grade systems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <SectionWrapper kicker="Core Pillars" title="What We Stand For" description="Three disciplines converging to create complete engineering solutions.">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <Card className="group h-full">
                  <CardHeader className="space-y-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${pillar.color} transition-shadow duration-300 group-hover:shadow-md`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium leading-relaxed text-text-secondary/80">{pillar.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper kicker="Our Philosophy" title="Our Mission" description="To build a culture of practical engineering through collaborative projects, competitions, and industry-relevant technical learning.">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">What We Do</Badge>
                <CardTitle className="text-xl font-bold text-text-primary">Hands-On Engineering Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Host hands-on workshops in robotics, electronics, CAD, and control systems.",
                  "Prepare teams for regional and national technical competitions.",
                  "Mentor students to move from foundational concepts to prototype delivery.",
                  "Promote collaborative and interdisciplinary engineering problem-solving.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <p className="text-sm font-medium leading-relaxed text-text-secondary">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full">
              <CardHeader className="space-y-3">
                <Badge variant="outline" className="w-fit">Why Join</Badge>
                <CardTitle className="text-xl font-bold text-text-primary">Grow Your Engineering Career</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Work on meaningful projects with peers who care about building things.",
                  "Get access to mentorship, resources, and practical technical pathways.",
                  "Develop confidence for internships, research, and product development roles.",
                  "Become part of a community that values execution, curiosity, and innovation.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    <p className="text-sm font-medium leading-relaxed text-text-secondary">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper kicker="Culture" title="Our Values">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="group rounded-2xl border border-border-color bg-card-bg p-6 transition-all duration-300 hover:border-border-hover hover:shadow-md">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-hover/30 bg-accent-color/10 text-accent-color">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-text-secondary/80">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Join MARS Club
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
