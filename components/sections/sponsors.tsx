"use client"

import { HandshakeIcon } from "lucide-react"

const sponsors = [
  {
    name: "Tech Mahindra",
    role: "Industry Partner",
    description: "Supporting our annual hackathons and providing internship opportunities.",
    logo: "https://logo.clearbit.com/techmahindra.com",
  },
  {
    name: "Bosch",
    role: "Hardware Sponsor",
    description: "Equipping our labs with state-of-the-art sensors and automation toolkits.",
    logo: "https://logo.clearbit.com/bosch.com",
  },
  {
    name: "Tata Motors",
    role: "Incubation Partner",
    description: "Mentoring capstone projects in autonomous navigation and EV systems.",
    logo: "https://logo.clearbit.com/tatamotors.com",
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

        <div className="grid gap-6 md:grid-cols-3">
          {sponsors.map((sponsor, i) => {
            return (
              <div 
                key={i} 
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border-color/80 bg-bg-secondary p-8 text-center transition-all duration-300 hover:border-accent-color/50 hover:bg-card-bg hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-color/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-color transition-transform duration-300 group-hover:scale-110 group-hover:ring-accent-color/50">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-full w-full object-contain" />
                </div>
                
                <h4 className="text-xl font-bold tracking-tight text-text-primary">{sponsor.name}</h4>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-color">
                  {sponsor.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {sponsor.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
