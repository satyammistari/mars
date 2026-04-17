"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"

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
      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800/90 bg-slate-900/70 p-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Full Name
          </label>
          <Input id="name" name="name" required placeholder="Enter your name" />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email
          </label>
          <Input id="email" name="email" type="email" required placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
            Message
          </label>
          <Textarea id="message" name="message" required placeholder="Tell us what you want to build with MARS CLUB" />
        </div>

        <Button type="submit" size="lg">
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </Button>

        {submitted ? <p className="text-sm text-emerald-300">Thanks for reaching out. We will get back to you soon.</p> : null}
      </form>

      <div className="space-y-4 rounded-2xl border border-slate-800/90 bg-slate-900/70 p-6">
        <h3 className="font-['Orbitron'] text-xl font-semibold text-slate-100">Contact Information</h3>
        <p className="text-sm text-slate-300">
          Reach out for collaborations, project mentorship, workshop requests, and membership inquiries.
        </p>

        <div className="rounded-xl border border-slate-800 bg-black/30 p-4">
          <p className="inline-flex items-center gap-2 text-sm text-slate-200">
            <Mail className="h-4 w-4 text-blue-300" />
            marsclub@college.edu
          </p>
          <p className="mt-2 text-sm text-slate-400">Room 304, Innovation & Research Block, College Campus</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Social</p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
            >
              Instagram
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
