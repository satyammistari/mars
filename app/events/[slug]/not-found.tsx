import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { SectionWrapper } from "@/components/sections/section-wrapper"
import { buttonVariants } from "@/components/ui/button"

export default function EventNotFoundPage() {
  return (
    <main>
      <SectionWrapper>
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-700/50 bg-slate-900/30 p-10 text-center backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">404</p>
          <h1 className="font-['Orbitron'] text-2xl font-semibold text-slate-100">Event Not Found</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            The event you are looking for isn't available. Please check the events page for active listings.
          </p>
          <Link href="/events" className={`${buttonVariants()} mt-6 inline-flex items-center gap-2`}>
            <ArrowLeft className="h-4 w-4" />
            View All Events
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
