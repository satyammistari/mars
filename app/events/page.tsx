import eventsData from "@/data/events.json"
import { Reveal } from "@/components/sections/reveal"
import { EventsGrid } from "@/components/sections/events-grid"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { ClubEvent } from "@/types/mars"

const events = (eventsData as ClubEvent[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function EventsPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-4 pt-10 sm:pt-14">
        <div className="pointer-events-none absolute -right-32 top-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/8 blur-[120px]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-300 to-violet-400" />
                Calendar
              </div>
              <h1 className="text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                <span className="gradient-text">Events</span> & Workshops
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300/90">
                Explore competitions, workshops, and flagship sessions organized by MARS CLUB throughout the academic year.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionWrapper>
        <EventsGrid events={events} />
      </SectionWrapper>
    </main>
  )
}
