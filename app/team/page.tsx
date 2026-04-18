import teamData from "@/data/team.json"
import { Reveal } from "@/components/sections/reveal"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { TeamGrid } from "@/components/sections/team-grid"
import type { TeamMember } from "@/types/mars"

const members = teamData as TeamMember[]

export default function TeamPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative overflow-hidden pb-4 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute -left-32 top-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-violet-400" />
                Our People
              </div>
              <h1 className="text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                The <span className="gradient-text">Team</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/90">
                Meet the mentors, leaders, and members behind MARS CLUB&apos;s projects, events, and technical initiatives.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionWrapper>
        <TeamGrid members={members} />
      </SectionWrapper>
    </main>
  )
}
