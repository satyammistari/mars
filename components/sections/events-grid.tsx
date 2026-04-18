import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ClubEvent } from "@/types/mars"

interface EventsGridProps {
  events: ClubEvent[]
  limit?: number
  showBrowseAllLink?: boolean
}

export function EventsGrid({ events, limit, showBrowseAllLink = false }: EventsGridProps) {
  const visibleEvents = typeof limit === "number" ? events.slice(0, limit) : events

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleEvents.map((event, index) => (
          <Reveal key={event.slug} delay={index * 0.06}>
            <Card className="group h-full overflow-hidden">
              {/* Image with zoom + glow border on hover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Category tag overlay */}
                <div className="absolute left-4 top-4 rounded-full border border-cyan-200/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-sm">
                  {event.category}
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] border border-transparent transition-all duration-500 group-hover:border-cyan-400/20 group-hover:shadow-[inset_0_0_20px_rgba(56,189,248,0.06)]" />

              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.formattedDate}
                  </span>
                </div>
                <CardTitle className="text-lg text-slate-100">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description - revealed smoothly on hover */}
                <p className="text-sm leading-relaxed text-slate-300">{event.summary}</p>
                <p className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </p>

                {/* Highlights - smooth reveal on hover */}
                <div className="grid gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {event.highlights.slice(0, 2).map((h) => (
                    <div key={h} className="rounded-lg border border-slate-700/40 bg-slate-900/40 px-3 py-1.5 text-xs text-slate-400">
                      {h}
                    </div>
                  ))}
                </div>

                <Link href={`/events/${event.slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                  View Details
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {showBrowseAllLink ? (
        <div className="mt-8 flex justify-center">
          <Link href="/events" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            Browse All Events
          </Link>
        </div>
      ) : null}
    </>
  )
}
