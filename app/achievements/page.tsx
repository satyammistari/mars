import achievementsData from "@/data/achievements.json"
import { AchievementsGrid } from "@/components/sections/achievements-grid"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { Achievement } from "@/types/mars"

const achievements = achievementsData as Achievement[]

export default function AchievementsPage() {
  return (
    <main>
      <SectionWrapper
        title="Achievements"
        description="Milestones, awards, and recognition earned through consistent technical excellence."
      >
        <AchievementsGrid achievements={achievements} />
      </SectionWrapper>
    </main>
  )
}
