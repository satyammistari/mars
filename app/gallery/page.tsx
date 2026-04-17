import galleryData from "@/data/gallery.json"
import { GalleryExplorer } from "@/components/sections/gallery-explorer"
import { SectionWrapper } from "@/components/sections/section-wrapper"
import type { GalleryItem } from "@/types/mars"

const items = galleryData as GalleryItem[]

export default function GalleryPage() {
  return (
    <main>
      <SectionWrapper
        title="Gallery"
        description="Snapshots from MARS CLUB events, workshops, competitions, and build sessions."
      >
        <GalleryExplorer items={items} />
      </SectionWrapper>
    </main>
  )
}
