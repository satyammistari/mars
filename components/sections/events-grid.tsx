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
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

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
                <p className="text-sm text-slate-300">{event.summary}</p>
                <p className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {event.location}
                </p>
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
