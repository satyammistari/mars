import { Atom, Cpu, Wrench } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    title: "Mechanical Design",
    description: "Design mechanisms and structures that are practical, robust, and manufacturable.",
    icon: Wrench,
  },
  {
    title: "Automation Systems",
    description: "Build control-driven systems using sensors, actuators, and embedded logic.",
    icon: Cpu,
  },
  {
    title: "Robotics Innovation",
    description: "Create intelligent robotic solutions for real-world engineering problems.",
    icon: Atom,
  },
]

export default function AboutPage() {
  return (
    <main>
      <SectionWrapper
        title="About MARS CLUB"
        description="Mechanical Automation Robotics Society is a technical community where students transform engineering fundamentals into working prototypes, research ideas, and competition-grade systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-slate-100">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">{pillar.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Our Mission"
        description="To build a culture of practical engineering through collaborative projects, competitions, and industry-relevant technical learning."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-100">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              <p>Host hands-on workshops in robotics, electronics, CAD, and control systems.</p>
              <p>Prepare teams for regional and national technical competitions.</p>
              <p>Mentor students to move from foundational concepts to prototype delivery.</p>
              <p>Promote collaborative and interdisciplinary engineering problem-solving.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-100">Why Join MARS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              <p>Work on meaningful projects with peers who care about building things.</p>
              <p>Get access to mentorship, resources, and practical technical pathways.</p>
              <p>Develop confidence for internships, research, and product development roles.</p>
              <p>Become part of a community that values execution, curiosity, and innovation.</p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </main>
  )
}
