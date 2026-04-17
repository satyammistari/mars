import eventsData from "@/data/events.json"
import { EventsGrid } from "@/components/sections/events-grid"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { ClubEvent } from "@/types/mars"

const events = (eventsData as ClubEvent[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function EventsPage() {
  return (
    <main>
      <SectionWrapper
        title="Events"
        description="Explore competitions, workshops, and flagship sessions organized by MARS CLUB throughout the academic year."
      >
        <EventsGrid events={events} />
      </SectionWrapper>
    </main>
  )
}
