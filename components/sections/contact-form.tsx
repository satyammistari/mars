"use client"

import { useState } from "react"
import { Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Form */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 backdrop-blur-sm sm:p-8">
        <div className="mb-6">
          <h3 className="font-['Orbitron'] text-xl font-semibold text-slate-100">Send a Message</h3>
          <p className="mt-2 text-sm text-slate-400">We typically respond within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <Input id="contact-name" name="name" required placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <Input id="contact-email" name="email" type="email" required placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <Textarea id="contact-message" name="message" required placeholder="Tell us what you want to build with MARS CLUB" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="group relative w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(56,189,248,0.35)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message
              <Send className="h-4 w-4" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Button>

          {submitted ? (
            <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/8 p-3 text-center text-sm text-emerald-300">
              Thanks for reaching out! We&apos;ll get back to you soon.
            </div>
          ) : null}
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-6 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 backdrop-blur-sm sm:p-8">
        <div>
          <h3 className="font-['Orbitron'] text-xl font-semibold text-slate-100">Contact Information</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Reach out for collaborations, project mentorship, workshop requests, and membership inquiries.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-xl border border-slate-700/40 bg-slate-900/40 p-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-500/8 text-cyan-300">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">marsclub@college.edu</p>
              <p className="mt-1 text-xs text-slate-500">Official Club Email</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-700/40 bg-slate-900/40 p-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-500/8 text-violet-300">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">Room 304, Innovation & Research Block</p>
              <p className="mt-1 text-xs text-slate-500">College Campus</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Connect With Us</p>
          <div className="flex gap-3">
            {[
              { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/40 text-slate-400 transition-all duration-300 hover:border-cyan-300/30 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(56,189,248,0.15)]"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
