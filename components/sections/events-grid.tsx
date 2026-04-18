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
                <div className="absolute left-4 top-4 rounded-full border border-border-color/40 bg-bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent-color shadow-sm backdrop-blur-sm">
                  {event.category}
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] border border-border-color transition-all duration-500 group-hover:border-accent-hover group-hover:shadow-[0_4px_20px_rgba(30,50,100,0.08)]" />

              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.formattedDate}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-text-primary">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description - revealed smoothly on hover */}
                <p className="text-sm font-medium leading-relaxed text-text-secondary">{event.summary}</p>
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </p>

                {/* Highlights - smooth reveal on hover */}
                <div className="grid gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {event.highlights.slice(0, 2).map((h) => (
                    <div key={h} className="rounded-lg border border-border-color bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary">
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
