import resourcesData from "@/data/learning-resources.json"
import { Reveal } from "@/components/sections/reveal"
import { LearningResourceExplorer } from "@/components/sections/learning-resource-explorer"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { LearningResource } from "@/types/mars"

const resources = resourcesData as LearningResource[]

export default function LearningPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-4 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute -left-32 top-0 h-[24rem] w-[24rem] rounded-full bg-accent-color/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-10 h-[20rem] w-[20rem] rounded-full bg-accent-hover/10 blur-[100px]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-accent-color">
                <span className="h-px w-8 bg-gradient-to-r from-accent-color to-transparent" />
                Knowledge Hub
              </div>
              <h1 className="text-balance font-['Playfair_Display'] text-4xl font-black tracking-[-0.04em] text-text-primary sm:text-5xl">
                Learning <span className="text-accent-color">Resources</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-text-secondary">
                Curated material across robotics, embedded systems, design engineering, and coding workflows. 
                Your futuristic learning dashboard awaits.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionWrapper>
        <LearningResourceExplorer resources={resources} />
      </SectionWrapper>
    </main>
  )
}
