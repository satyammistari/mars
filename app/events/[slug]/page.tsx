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
      {/* Hero image banner */}
      <section className="relative h-[320px] overflow-hidden sm:h-[420px]">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Back link over image */}
        <div className="absolute left-4 top-4 sm:left-8 sm:top-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/50 bg-black/50 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-300/30 hover:text-cyan-100"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>
        </div>

        {/* Category badge over image */}
        <div className="absolute right-4 top-4 sm:right-8 sm:top-6">
          <Badge>{event.category}</Badge>
        </div>

        {/* Title at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-cyan-400" />
                {event.formattedDate}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-violet-400" />
                {event.location}
              </span>
            </div>
            <h1 className="font-['Orbitron'] text-3xl font-black tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] sm:text-4xl">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <Reveal>
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-8 text-slate-300">{event.description}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-100">Event Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.highlights.map((highlight, i) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-3 text-sm text-slate-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-500/10 text-[10px] font-bold text-cyan-300">
                        {i + 1}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Back link */}
            <Link href="/events" className={buttonVariants({ variant: "secondary" })}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </div>
        </Reveal>
      </SectionWrapper>
    </main>
  )
}
