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
    border: "border-amber-400/30",
    bg: "bg-amber-500/10",
    glow: "shadow-[0_0_16px_rgba(251,191,36,0.1)]",
    text: "text-amber-300",
  },
  Certificate: {
    border: "border-cyan-400/30",
    bg: "bg-cyan-500/10",
    glow: "shadow-[0_0_16px_rgba(56,189,248,0.1)]",
    text: "text-cyan-300",
  },
  Milestone: {
    border: "border-violet-400/30",
    bg: "bg-violet-500/10",
    glow: "shadow-[0_0_16px_rgba(139,92,246,0.1)]",
    text: "text-violet-300",
  },
}

export function AchievementsGrid({ achievements }: AchievementsTimelineProps) {
  // Group by year
  const years = Array.from(new Set(achievements.map((a) => a.year))).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="relative space-y-12">
      {/* Vertical timeline line */}
      <div className="pointer-events-none absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400/30 via-violet-400/20 to-transparent lg:block" />

      {years.map((year) => {
        const yearAchievements = achievements.filter((a) => a.year === year)

        return (
          <div key={year} className="relative">
            {/* Year marker */}
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-slate-900/80 font-['Orbitron'] text-sm font-bold text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-sm">
                  {year.slice(2)}
                </div>
                <div>
                  <h3 className="font-['Orbitron'] text-xl font-semibold text-white">{year}</h3>
                  <p className="text-xs text-slate-500">{yearAchievements.length} milestone{yearAchievements.length > 1 ? "s" : ""}</p>
                </div>
                <div className="flex-1 border-t border-dashed border-slate-800/60" />
              </div>
            </Reveal>

            {/* Achievement cards for this year */}
            <div className="grid gap-5 pl-0 md:grid-cols-2 xl:grid-cols-3 lg:pl-16">
              {yearAchievements.map((item, index) => {
                const Icon = iconByType[item.type]
                const colors = colorByType[item.type]

                return (
                  <Reveal key={item.id} delay={index * 0.06}>
                    <div className={`group relative rounded-2xl border ${colors.border} bg-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:${colors.glow} hover:bg-slate-900/50`}>
                      {/* Top accent line */}
                      <div className={`absolute inset-x-0 top-0 h-[2px] rounded-full ${colors.bg.replace('/10', '/40')}`} />

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
                          <h4 className="text-base font-semibold text-slate-100">{item.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
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
