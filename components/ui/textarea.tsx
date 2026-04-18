import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full rounded-xl border border-border-color bg-bg-primary px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-secondary shadow-sm transition-all focus-visible:border-accent-color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
