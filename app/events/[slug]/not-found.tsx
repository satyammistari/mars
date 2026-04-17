import Link from "next/link"

import { SectionWrapper } from "@/components/sections/section-wrapper"
import { buttonVariants } from "@/components/ui/button"

export default function EventNotFoundPage() {
  return (
    <main>
      <SectionWrapper>
        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/70 p-8 text-center">
          <h1 className="font-['Orbitron'] text-3xl font-semibold text-slate-100">Event Not Found</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            The event you are looking for is not available. Please check the events page for active listings.
          </p>
          <Link href="/events" className={buttonVariants({ className: "mt-6" })}>
            View Events
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
