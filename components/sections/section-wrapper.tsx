import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id?: string
  title?: string
  description?: string
  kicker?: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function SectionWrapper({ id, title, description, kicker, className, contentClassName, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="mb-10 flex max-w-5xl flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-color">
                <span className="h-px w-8 bg-gradient-to-r from-accent-color to-accent-hover" />
                {kicker ?? "MARS CLUB"}
              </div>
              {title ? (
                <h2 className="text-balance text-3xl font-black tracking-[-0.02em] text-text-primary sm:text-4xl">
                  {title}
                </h2>
              ) : null}
              {description ? <p className="mt-4 max-w-2xl text-text-secondary sm:text-lg sm:leading-relaxed">{description}</p> : null}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-secondary/70">Technical Club</span>
              <span className="h-px w-24 bg-gradient-to-r from-transparent via-accent-color/60 to-accent-hover/60" />
            </div>
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}
