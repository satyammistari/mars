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
  "Robotics Basics": { label: "Beginner", color: "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400" },
  "Arduino / Embedded": { label: "Intermediate", color: "border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400" },
  "Mechanical Design": { label: "Intermediate", color: "border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400" },
  "Coding / ML": { label: "Advanced", color: "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400" },
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
      <div className="rounded-2xl border border-border-color bg-bg-secondary p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics, guides, or tools..."
              className="h-12 pl-11 text-base shadow-none border-border-color bg-bg-primary"
            />
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-border-color bg-bg-primary px-3 py-2 sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary">Results</span>
            <span className="text-sm font-bold text-accent-color">{filteredResources.length}</span>
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
                  ? "rounded-full border border-accent-color/30 bg-accent-color/10 px-4 py-1.5 text-xs font-bold text-accent-color shadow-sm transition-all"
                  : "rounded-full border border-border-color bg-bg-primary px-4 py-1.5 text-xs font-medium text-text-secondary shadow-sm transition-all duration-300 hover:border-accent-color/30 hover:bg-bg-secondary hover:text-text-primary"
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
          const difficulty = difficultyMap[resource.category] ?? { label: "General", color: "border-border-color bg-bg-secondary text-text-secondary" }
          const TypeIcon = resource.type === "Video" ? Play : FileText

          return (
            <Reveal key={resource.id} delay={index * 0.04}>
              <Card className="group h-full shadow-[0_4px_24px_-8px_rgba(30,50,100,0.10)] dark:shadow-none">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-accent-color/20 bg-accent-color/10 text-accent-color">
                        <TypeIcon className="h-3.5 w-3.5" />
                      </div>
                      <Badge>{resource.type}</Badge>
                    </div>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${difficulty.color}`}>
                      {difficulty.label}
                    </span>
                  </div>

                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary/70">{resource.category}</div>
                    <CardTitle className="text-lg font-bold text-text-primary">{resource.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm font-medium leading-relaxed text-text-secondary">{resource.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border-color bg-bg-secondary px-4 py-2.5 text-sm font-bold text-accent-color transition-all duration-300 hover:border-accent-color/30 hover:bg-accent-color/10 hover:shadow-sm"
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
        <div className="rounded-2xl border border-border-color bg-bg-secondary p-8 text-center shadow-sm">
          <p className="text-sm font-medium text-text-secondary">No resources match your search. Try a different keyword or category.</p>
        </div>
      ) : null}
    </div>
  )
}
