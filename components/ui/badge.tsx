import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
  {
  variants: {
    variant: {
        default: "border-cyan-300/30 bg-cyan-500/15 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
        secondary: "border-slate-700/80 bg-slate-900/80 text-slate-200",
        outline: "border-violet-300/35 bg-violet-500/10 text-violet-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
