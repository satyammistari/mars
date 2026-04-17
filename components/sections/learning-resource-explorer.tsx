"use client"

import { useMemo, useState } from "react"
import { ExternalLink, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import type { LearningResource, ResourceCategory } from "@/types/mars"

interface LearningResourceExplorerProps {
  resources: LearningResource[]
}

type FilterCategory = "All" | ResourceCategory

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
      <div className="rounded-2xl border border-slate-800/90 bg-slate-900/60 p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics, guides, or tools..."
            className="pl-9"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "rounded-full border border-blue-300/40 bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-100"
                  : "rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800/80"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="h-full">
            <CardHeader>
              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge>{resource.type}</Badge>
                <span className="text-xs text-slate-400">{resource.category}</span>
              </div>
              <CardTitle className="text-lg text-slate-100">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Open Resource
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 ? (
        <p className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-400">
          No resources match your search. Try a different keyword or category.
        </p>
      ) : null}
    </div>
  )
}
