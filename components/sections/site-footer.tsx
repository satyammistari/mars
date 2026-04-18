import Link from "next/link"

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/learning", label: "Learning" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const socials = [
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: "in" },
  { href: "https://www.instagram.com", label: "Instagram", icon: "ig" },
  { href: "https://github.com", label: "GitHub", icon: "gh" },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-8 border-t border-slate-800/50 py-10 sm:py-12">
      {/* Top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl border border-slate-800/50 bg-slate-950/40 px-4 py-8 shadow-[0_20px_90px_-48px_rgba(56,189,248,0.2)] backdrop-blur-xl sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-500/8 text-xs font-black text-cyan-200">
              M
            </span>
            <p className="font-['Orbitron'] text-lg font-semibold tracking-[0.08em] text-slate-100">MARS CLUB</p>
          </div>
          <p className="mt-2 text-sm text-slate-400">Mechanical Automation Robotics Society</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Building future-ready engineers through practical robotics, automation, and design experiences.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors duration-200 hover:text-cyan-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Connect</p>
          <div className="mt-3 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/40 text-xs font-bold uppercase text-slate-400 transition-all duration-300 hover:border-cyan-300/30 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">marsclub@college.edu</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} MARS CLUB. All rights reserved.</p>
      </div>
    </footer>
  )
}
