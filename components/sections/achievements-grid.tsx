import { Award, Flag, Trophy } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { Badge } from "@/components/ui/badge"
import type { Achievement, AchievementType } from "@/types/mars"

interface AchievementsTimelineProps {
  achievements: Achievement[]
}

const iconByType: Record<AchievementType, typeof Trophy> = {
  Win: Trophy,
  Certificate: Award,
  Milestone: Flag,
}

const colorByType: Record<AchievementType, { border: string; bg: string; glow: string; text: string }> = {
  Win: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    glow: "shadow-[0_8px_24px_rgba(251,191,36,0.15)]",
    text: "text-amber-600",
  },
  Certificate: {
    border: "border-sky-200",
    bg: "bg-sky-50",
    glow: "shadow-[0_8px_24px_rgba(14,165,233,0.12)]",
    text: "text-sky-600",
  },
  Milestone: {
    border: "border-indigo-200",
    bg: "bg-indigo-50",
    glow: "shadow-[0_8px_24px_rgba(99,102,241,0.12)]",
    text: "text-indigo-600",
  },
}

export function AchievementsGrid({ achievements }: AchievementsTimelineProps) {
  // Group by year
  const years = Array.from(new Set(achievements.map((a) => a.year))).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="relative space-y-12">
      {/* Vertical timeline line */}
      <div className="pointer-events-none absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-blue-300/40 via-sky-300/30 to-transparent lg:block" />

      {years.map((year) => {
        const yearAchievements = achievements.filter((a) => a.year === year)

        return (
          <div key={year} className="relative">
            {/* Year marker */}
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white font-['Playfair_Display'] text-sm font-bold text-blue-700 shadow-sm backdrop-blur-sm">
                  {year.slice(2)}
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-slate-800">{year}</h3>
                  <p className="text-xs font-semibold text-slate-500">{yearAchievements.length} milestone{yearAchievements.length > 1 ? "s" : ""}</p>
                </div>
                <div className="flex-1 border-t border-dashed border-slate-200/80" />
              </div>
            </Reveal>

            {/* Achievement cards for this year */}
            <div className="grid gap-5 pl-0 md:grid-cols-2 xl:grid-cols-3 lg:pl-16">
              {yearAchievements.map((item, index) => {
                const Icon = iconByType[item.type]
                const colors = colorByType[item.type]

                return (
                  <Reveal key={item.id} delay={index * 0.06}>
                    <div className={`group relative rounded-2xl border ${colors.border} bg-white p-6 shadow-[0_4px_24px_-8px_rgba(30,50,100,0.06)] transition-all duration-300 hover:${colors.glow} hover:-translate-y-1`}>
                      {/* Top accent line */}
                      <div className={`absolute inset-x-0 top-0 h-[2px] rounded-full ${colors.bg}`} />

                      <div className="flex items-start gap-4">
                        <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${colors.border} ${colors.bg} ${colors.text}`}>
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant={item.type === "Win" ? "default" : item.type === "Certificate" ? "secondary" : "outline"}>
                              {item.type}
                            </Badge>
                          </div>
                          <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
                          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
