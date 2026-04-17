import { Award, Flag, Trophy } from "lucide-react"

import { Reveal } from "@/components/sections/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Achievement, AchievementType } from "@/types/mars"

interface AchievementsGridProps {
  achievements: Achievement[]
}

const iconByType: Record<AchievementType, typeof Trophy> = {
  Win: Trophy,
  Certificate: Award,
  Milestone: Flag,
}

export function AchievementsGrid({ achievements }: AchievementsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {achievements.map((item, index) => {
        const Icon = iconByType[item.type]

        return (
          <Reveal key={item.id} delay={index * 0.06}>
            <Card className="h-full">
              <CardHeader className="space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Badge>{item.type}</Badge>
                  <span className="text-xs text-slate-500">{item.year}</span>
                </div>
                <CardTitle className="text-lg text-slate-100">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        )
      })}
    </div>
  )
}
