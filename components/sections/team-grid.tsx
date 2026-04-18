import { Linkedin } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TeamMember, TeamSection } from "@/types/mars"

interface TeamGridProps {
  members: TeamMember[]
}

const sectionMeta: Record<TeamSection, { title: string; description: string }> = {
  faculty: {
    title: "Faculty Coordinators",
    description: "Guidance from mentors shaping our technical direction.",
  },
  core: {
    title: "Core Team",
    description: "Student leaders driving strategy, projects, and events.",
  },
  members: {
    title: "Members",
    description: "Enthusiastic contributors building hands-on engineering skills.",
  },
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="space-y-16">
      {(Object.keys(sectionMeta) as TeamSection[]).map((section) => {
        const sectionMembers = members.filter((member) => member.section === section)
        if (sectionMembers.length === 0) {
          return null
        }

        return (
          <div key={section} className="space-y-8">
            <Reveal>
              <div className="flex items-end gap-4">
                <div>
                  <div className="mb-3 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
                    <span className="h-px w-6 bg-gradient-to-r from-cyan-300 to-transparent" />
                    {section}
                  </div>
                  <h3 className="font-['Orbitron'] text-2xl font-semibold text-slate-100">{sectionMeta[section].title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{sectionMeta[section].description}</p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sectionMembers.map((member, index) => (
                <Reveal key={member.id} delay={index * 0.04}>
                  <Card className="group h-full overflow-hidden">
                    <CardHeader className="space-y-4">
                      {/* Photo with hover zoom */}
                      <div className="relative h-56 overflow-hidden rounded-xl border border-slate-800/60">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-base text-slate-100">{member.name}</CardTitle>
                        <p className="text-sm text-slate-400">{member.role}</p>
                        <Badge variant="outline" className="capitalize text-slate-300">
                          {section}
                        </Badge>
                      </div>
                    </CardHeader>

                    {member.linkedin ? (
                      <CardContent>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-700/40 bg-slate-900/40 px-3 py-1.5 text-sm text-blue-300 transition-all duration-300 hover:border-blue-400/30 hover:text-blue-200 hover:shadow-[0_0_12px_rgba(96,165,250,0.15)]"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </CardContent>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
