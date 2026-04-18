"use client"

import { useMemo, useState } from "react"
import { Download, ExternalLink, FileText, Play, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/sections/reveal"
import type { LearningResource, ResourceCategory } from "@/types/mars"

interface LearningResourceExplorerProps {
  resources: LearningResource[]
}

type FilterCategory = "All" | ResourceCategory

const difficultyMap: Record<string, { label: string; color: string }> = {
  "Robotics Basics": { label: "Beginner", color: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300" },
  "Arduino / Embedded": { label: "Intermediate", color: "border-amber-400/30 bg-amber-500/10 text-amber-300" },
  "Mechanical Design": { label: "Intermediate", color: "border-amber-400/30 bg-amber-500/10 text-amber-300" },
  "Coding / ML": { label: "Advanced", color: "border-rose-400/30 bg-rose-500/10 text-rose-300" },
}

export function LearningResourceExplorer({ resources }: LearningResourceExplorerProps) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All")

  const categories = useMemo<FilterCategory[]>(() => {
    const unique = Array.from(new Set(resources.map((resource) => resource.category)))
    return ["All", ...unique]
  }, [resources])

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return resources.filter((resource) => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory
      const matchesQuery =
        normalizedQuery.length === 0 ||
        resource.title.toLowerCase().includes(normalizedQuery) ||
        resource.description.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query, resources])

  return (
    <div className="space-y-8">
      {/* Search & Filters - Futuristic Dashboard Style */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics, guides, or tools..."
              className="h-12 pl-11 text-base"
            />
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-slate-700/40 bg-slate-900/50 px-3 py-2 sm:flex">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Results</span>
            <span className="text-sm font-bold text-cyan-200">{filteredResources.length}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full border border-cyan-300/35 bg-cyan-500/15 px-4 py-1.5 text-xs font-medium text-cyan-100 shadow-[0_0_12px_rgba(56,189,248,0.1)] transition-all"
                  : "rounded-full border border-slate-700/50 px-4 py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:text-slate-200"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource, index) => {
          const difficulty = difficultyMap[resource.category] ?? { label: "General", color: "border-slate-500/30 bg-slate-500/10 text-slate-300" }
          const TypeIcon = resource.type === "Video" ? Play : FileText

          return (
            <Reveal key={resource.id} delay={index * 0.04}>
              <Card className="group h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-500/8 text-cyan-300">
                        <TypeIcon className="h-3.5 w-3.5" />
                      </div>
                      <Badge>{resource.type}</Badge>
                    </div>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${difficulty.color}`}>
                      {difficulty.label}
                    </span>
                  </div>

                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">{resource.category}</div>
                    <CardTitle className="text-lg text-slate-100">{resource.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-500/8 hover:text-cyan-100 hover:shadow-[0_0_16px_rgba(56,189,248,0.1)]"
                  >
                    {resource.type === "Video" ? "Watch" : "Open"} Resource
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>

      {filteredResources.length === 0 ? (
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 text-center backdrop-blur-sm">
          <p className="text-sm text-slate-400">No resources match your search. Try a different keyword or category.</p>
        </div>
      ) : null}
    </div>
  )
}
