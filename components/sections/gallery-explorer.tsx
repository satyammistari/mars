"use client"

import { useMemo, useState } from "react"
import { Reveal } from "@/components/sections/reveal"

import { Card } from "@/components/ui/card"
import type { GalleryCategory, GalleryItem } from "@/types/mars"

interface GalleryExplorerProps {
  items: GalleryItem[]
}

type FilterCategory = "All" | GalleryCategory

export function GalleryExplorer({ items }: GalleryExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All")

  const categories = useMemo<FilterCategory[]>(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)))
    return ["All", ...unique]
  }, [items])

  const filteredItems = useMemo(
    () => items.filter((item) => activeCategory === "All" || item.category === activeCategory),
    [activeCategory, items],
  )

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "rounded-full border border-cyan-300/35 bg-cyan-500/15 px-5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_12px_rgba(56,189,248,0.1)] transition-all"
                : "rounded-full border border-slate-700/50 bg-slate-900/40 px-5 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/60 hover:text-slate-200"
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, index) => {
          // Vary heights for masonry feel
          const heightClass = index % 3 === 0 ? "h-72" : index % 3 === 1 ? "h-56" : "h-64"

          return (
            <Reveal key={item.id} delay={index * 0.04}>
              <div className="mb-4 break-inside-avoid">
                <Card className="group relative overflow-hidden">
                  <div className={`relative ${heightClass} overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Default subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent transition-all duration-500" />

                    {/* Hover overlay with title reveal */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="p-5">
                        <div className="mb-2 inline-flex rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-sm">
                          {item.category}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>

                    {/* Glow border on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] border-2 border-transparent transition-all duration-500 group-hover:border-cyan-400/25 group-hover:shadow-[inset_0_0_24px_rgba(56,189,248,0.08)]" />
                  </div>
                </Card>
              </div>
            </Reveal>
          )
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 text-center backdrop-blur-sm">
          <p className="text-sm text-slate-400">No gallery items match the selected filter.</p>
        </div>
      )}
    </div>
  )
}
