import resourcesData from "@/data/learning-resources.json"
import { LearningResourceExplorer } from "@/components/sections/learning-resource-explorer"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { LearningResource } from "@/types/mars"

const resources = resourcesData as LearningResource[]

export default function LearningPage() {
  return (
    <main>
      <SectionWrapper
        title="Learning Resources"
        description="Curated material across robotics, embedded systems, design engineering, and coding workflows."
      >
        <LearningResourceExplorer resources={resources} />
      </SectionWrapper>
    </main>
  )
}
