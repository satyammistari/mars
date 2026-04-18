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
                ? "rounded-full border border-accent-color/30 bg-accent-color/10 px-5 py-2 text-sm font-bold text-accent-color shadow-sm transition-all"
                : "rounded-full border border-border-color bg-bg-primary px-5 py-2 text-sm font-medium text-text-secondary shadow-sm transition-all duration-300 hover:border-accent-hover/30 hover:bg-bg-secondary hover:text-text-primary"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-all duration-500" />

                    {/* Hover overlay with title reveal */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="p-5">
                        <div className="mb-2 inline-flex rounded-full border border-blue-200/50 bg-blue-500/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          {item.category}
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      </div>
                    </div>

                    {/* Glow border on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] border border-transparent transition-all duration-500 group-hover:border-blue-300/40 group-hover:shadow-[inset_0_0_24px_rgba(25,118,210,0.15)]" />
                  </div>
                </Card>
              </div>
            </Reveal>
          )
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="rounded-2xl border border-border-color bg-bg-secondary p-8 text-center shadow-sm">
          <p className="text-sm font-medium text-text-secondary">No gallery items match the selected filter.</p>
        </div>
      )}
    </div>
  )
}
