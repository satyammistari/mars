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
      <div className="rounded-2xl border border-border-color bg-bg-primary p-6 shadow-sm sm:p-8 dark:bg-bg-secondary">
        <div className="mb-6">
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-text-primary">Send a Message</h3>
          <p className="mt-2 text-sm text-text-secondary">We typically respond within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-text-primary">
              Full Name
            </label>
            <Input id="contact-name" name="name" required placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-text-primary">
              Email
            </label>
            <Input id="contact-email" name="email" type="email" required placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-text-primary">
              Message
            </label>
            <Textarea id="contact-message" name="message" required placeholder="Tell us what you want to build with MARS CLUB" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_4px_16px_rgba(25,118,210,0.2)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(25,118,210,0.35)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message
              <Send className="h-4 w-4" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Button>

          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-800">
              Thanks for reaching out! We&apos;ll get back to you soon.
            </div>
          ) : null}
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-6 rounded-2xl border border-border-color bg-bg-primary p-6 shadow-sm sm:p-8 dark:bg-bg-secondary">
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold text-text-primary">Contact Information</h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-text-secondary">
            Reach out for collaborations, project mentorship, workshop requests, and membership inquiries.
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-3">
          <div className="flex items-start gap-4 rounded-xl border border-border-color bg-bg-secondary p-4 transition-colors hover:border-accent-color/30 hover:bg-accent-color/5">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-color/20 bg-accent-color/10 text-accent-color">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">marsclub@college.edu</p>
              <p className="mt-1 text-xs font-semibold text-text-secondary">Official Club Email</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border-color bg-bg-secondary p-4 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/5">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary">Room 304, Innovation & Research Block</p>
              <p className="mt-1 text-xs font-semibold text-text-secondary">College Campus</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary/70">Connect With Us</p>
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
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border-color bg-bg-secondary text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent-color/40 hover:bg-accent-color/10 hover:text-accent-color hover:shadow-md"
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
