export type TeamSection = "faculty" | "core" | "members"

export interface TeamMember {
  id: string
  name: string
  role: string
  section: TeamSection
  image: string
  linkedin?: string
}

export interface ClubEvent {
  slug: string
  title: string
  date: string
  formattedDate: string
  location: string
  category: "Competition" | "Workshop" | "Event"
  image: string
  summary: string
  description: string
  highlights: string[]
  report?: string
}

export type ResourceCategory =
  | "Robotics Basics"
  | "Arduino / Embedded"
  | "Mechanical Design"
  | "Coding / ML"

export interface LearningResource {
  id: string
  title: string
  category: ResourceCategory
  type: "Video" | "PDF"
  description: string
  link: string
}

export type GalleryCategory = "Events" | "Workshops" | "Competitions"

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  image: string
}

export type AchievementType = "Win" | "Certificate" | "Milestone"

export interface Achievement {
  id: string
  type: AchievementType
  title: string
  year: string
  description: string
}
