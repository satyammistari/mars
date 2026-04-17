import teamData from "@/data/team.json"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { TeamGrid } from "@/components/sections/team-grid"
import type { TeamMember } from "@/types/mars"

const members = teamData as TeamMember[]

export default function TeamPage() {
  return (
    <main>
      <SectionWrapper
        title="Team"
        description="Meet the mentors, leaders, and members behind MARS CLUB's projects, events, and technical initiatives."
      >
        <TeamGrid members={members} />
      </SectionWrapper>
    </main>
  )
}
