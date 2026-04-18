import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors",
  {
  variants: {
    variant: {
        default: "border-accent-hover/30 bg-accent-color/10 text-accent-color",
        secondary: "border-border-color bg-bg-secondary text-text-secondary",
        outline: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
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
