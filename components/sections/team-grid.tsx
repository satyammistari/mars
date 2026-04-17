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
    title: "Faculty",
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
    <div className="space-y-14">
      {(Object.keys(sectionMeta) as TeamSection[]).map((section) => {
        const sectionMembers = members.filter((member) => member.section === section)
        if (sectionMembers.length === 0) {
          return null
        }

        return (
          <div key={section} className="space-y-6">
            <div>
              <h3 className="font-['Orbitron'] text-2xl font-semibold text-slate-100">{sectionMeta[section].title}</h3>
              <p className="mt-2 text-sm text-slate-400">{sectionMeta[section].description}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sectionMembers.map((member, index) => (
                <Reveal key={member.id} delay={index * 0.04}>
                  <Card className="h-full">
                    <CardHeader className="space-y-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-56 w-full rounded-xl border border-slate-800/90 object-cover"
                      />
                      <div className="space-y-2">
                        <CardTitle className="text-base text-slate-100">{member.name}</CardTitle>
                        <p className="text-sm text-slate-400">{member.role}</p>
                        <Badge variant="outline" className="capitalize text-slate-200">
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
                          className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
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
