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
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://github.com", label: "GitHub" },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-8 border-t border-slate-800/80 py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl border border-slate-800/85 bg-slate-950/65 px-4 py-8 shadow-[0_20px_90px_-48px_rgba(59,130,246,0.7)] backdrop-blur-xl sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-['Orbitron'] text-lg font-semibold tracking-[0.08em] text-slate-100">MARS CLUB</p>
          <p className="mt-2 text-sm text-slate-400">Mechanical Automation Robotics Society</p>
          <p className="mt-3 max-w-xs text-sm text-slate-500">
            Building future-ready engineers through practical robotics, automation, and design experiences.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-blue-300">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-500">Email: marsclub@college.edu</p>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} MARS CLUB. All rights reserved.</p>
    </footer>
  )
}
