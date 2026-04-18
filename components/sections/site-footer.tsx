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
    <footer className="relative mt-8 border-t border-border-color/70 bg-bg-secondary/80 py-10 sm:py-12">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl border border-border-color/60 bg-bg-primary/80 px-4 py-8 shadow-[0_4px_32px_-12px_rgba(25,118,210,0.10)] backdrop-blur-xl sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 text-xs font-black text-white shadow-[0_2px_8px_rgba(25,118,210,0.3)]">
              M
            </span>
            <p className="font-serif text-lg font-bold tracking-[0.06em] text-text-primary">MARS CLUB</p>
          </div>
          <p className="mt-2 text-sm text-text-secondary">Mechanical Automation Robotics Society</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary/70">
            Building future-ready engineers through practical robotics, automation, and design experiences.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors duration-200 hover:text-accent-color">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">Connect</p>
          <div className="mt-3 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-color bg-bg-primary text-xs font-bold uppercase text-text-secondary transition-all duration-300 hover:border-border-hover hover:text-accent-color hover:shadow-[0_0_12px_rgba(25,118,210,0.12)]"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-secondary/70">marsclub@college.edu</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-border-color to-transparent" />
        <p className="text-xs text-text-secondary/70">© {new Date().getFullYear()} MARS CLUB. All rights reserved.</p>
      </div>
    </footer>
  )
}
