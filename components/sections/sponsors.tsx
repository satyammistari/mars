"use client"

import { HandshakeIcon } from "lucide-react"

const sponsors = [
  {
    name: "PHN Technology",
    role: "Technology Partner",
    description: "Empowering our club with cutting-edge technology solutions, mentorship, and industry-grade resources to fuel innovation.",
    logo: "/phn-technology-logo.png",
    link: "https://www.phntechnology.com/",
  },
]

export function SponsorsSection() {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(25,118,210,0.03),transparent_70%)]" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center space-y-3 px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <HandshakeIcon className="h-5 w-5 text-accent-color" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-color">
              Our Network
            </h3>
          </div>
          <h2 className="text-3xl font-black tracking-[-0.02em] text-text-primary sm:text-4xl">
            Sponsorships & Collaborations
          </h2>
          <p className="max-w-2xl text-text-secondary sm:text-lg mt-4">
            We partner with industry leaders to bring enterprise-grade hardware, mentorship, and opportunities to our members.
          </p>
        </div>

        <div className="flex justify-center">
          {sponsors.map((sponsor, i) => {
            return (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border-color/80 bg-bg-secondary p-10 text-center transition-all duration-300 hover:border-accent-color/50 hover:bg-card-bg hover:shadow-lg max-w-sm w-full no-underline"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-color/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border-color transition-transform duration-300 group-hover:scale-110 group-hover:ring-accent-color/50">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-full w-full object-contain" />
                </div>
                
                <h4 className="text-2xl font-bold tracking-tight text-text-primary">{sponsor.name}</h4>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-color">
                  {sponsor.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {sponsor.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent-color underline underline-offset-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Visit phntechnology.com ↗
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
