import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group/card relative overflow-hidden rounded-2xl border border-slate-700/50 bg-[linear-gradient(180deg,rgba(10,16,31,0.95),rgba(5,10,20,0.92))] text-slate-100 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-400 before:pointer-events-none before:absolute before:inset-0 before:bg-[url('/noise-texture.png')] before:bg-[length:280px_280px] before:opacity-[0.04] before:mix-blend-overlay before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400/60 after:via-blue-400/50 after:to-violet-400/60 after:opacity-80 after:content-[''] hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_20px_50px_-24px_rgba(56,189,248,0.25)]",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-xl font-semibold tracking-tight", className)} {...props} />,
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm leading-relaxed text-slate-400", className)} {...props} />,
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
