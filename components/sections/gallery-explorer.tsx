"use client"

import { useMemo, useState } from "react"

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
    <div className="space-y-7">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-100"
                : "rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Card
            key={item.id}
            className={index % 4 === 0 ? "group relative overflow-hidden sm:col-span-2" : "group relative overflow-hidden"}
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-sm text-blue-200">{item.category}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
