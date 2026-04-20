"use client"

import { Target, Lightbulb, Pickaxe, Users, BookOpen, HeartHandshake, Laptop, Trophy, Briefcase, Rocket } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"
import { Reveal } from "./reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const objectives = [
  { text: "Provide hands-on exposure to robotics, automation, and Industry 4.0 technologies", icon: Pickaxe },
  { text: "Bridge academic curriculum with industry practices through projects and internships", icon: Target },
  { text: "Cultivate innovation, entrepreneurship, and problem-solving mindset", icon: Lightbulb },
  { text: "Promote interdisciplinary collaboration and research culture", icon: Users },
  { text: "Document learning outcomes for continuous improvement and NBA compliance", icon: BookOpen },
  { text: "Engage in social outreach through technology for community development", icon: HeartHandshake },
]

const initiatives = [
  {
    title: "Workshops & Training",
    examples: "IoT Systems, Autonomous Drones, ROS Basics, CAD/CAM, PCB Design, AR/VR Demo, PID Control.",
    icon: Laptop,
  },
  {
    title: "Competitions & Hackathons",
    examples: "Internal Robot Races, SIH Ideation Sprints, TIFAN Design Challenges, Inter-Collegiate Tech Fests.",
    icon: Trophy,
  },
  {
    title: "Industrial Exposure",
    examples: "Visits to robotics/automation companies, guest lectures by industry experts, live case studies.",
    icon: Briefcase,
  },
  {
    title: "Project Incubation",
    examples: "Mentorship for capstone projects, SIH/TIFAN teams, prototype development support, IP guidance.",
    icon: Rocket,
  },
]

export function ObjectivesInitiativesSection() {
  return (
    <SectionWrapper
      id="objectives"
      kicker="Vision & Action"
      title="Core Objectives & Initiatives"
      description="What drives MARS Club and how we execute our vision through concrete activities."
    >
      <div className="grid gap-10 md:grid-cols-2">
        {/* Core Objectives */}
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text-primary">Core Objectives</h3>
            <p className="mt-2 text-sm text-text-secondary">Our guiding principles and goals.</p>
          </div>
          <div className="grid gap-4">
            {objectives.map((obj, i) => {
              const Icon = obj.icon
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <Card className="group overflow-hidden border-border-color/50 bg-bg-secondary/50 transition-colors hover:border-accent-color/40 hover:bg-card-bg">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="rounded-lg bg-accent-color/10 p-2.5 text-accent-color group-hover:bg-accent-color/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-text-primary">{obj.text}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Key Activities */}
        <div className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text-primary">Key Activities</h3>
            <p className="mt-2 text-sm text-text-secondary">How we translate theory into practice.</p>
          </div>
          <div className="grid gap-4">
            {initiatives.map((init, i) => {
              const Icon = init.icon
              return (
                <Reveal key={i} delay={i * 0.05 + 0.1}>
                  <Card className="group relative overflow-hidden border border-border-color/80 bg-card-bg transition-all hover:border-accent-color/50 hover:shadow-[0_8px_30px_rgb(25,118,210,0.12)]">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-color/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-accent-color" />
                        <CardTitle className="text-lg text-text-primary">{init.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-text-secondary">{init.examples}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
