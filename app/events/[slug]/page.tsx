import Link from "next/link"
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

import eventsData from "@/data/events.json"
import { Reveal } from "@/components/sections/reveal"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ClubEvent } from "@/types/mars"

const events = eventsData as ClubEvent[]

interface EventDetailPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = events.find((entry) => entry.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <main>
      <SectionWrapper>
        <Reveal>
          <article className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/70">
              <img src={event.image} alt={event.title} className="h-[260px] w-full object-cover sm:h-[360px]" />
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{event.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.formattedDate}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>

                <h1 className="font-['Orbitron'] text-3xl font-semibold text-slate-100 sm:text-4xl">{event.title}</h1>
                <p className="text-slate-300">{event.description}</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">Event Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-300">
                  {event.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-lg border border-slate-800/70 bg-slate-900/70 px-3 py-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Link href="/events" className={buttonVariants({ variant: "secondary" })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </article>
        </Reveal>
      </SectionWrapper>
    </main>
  )
}
