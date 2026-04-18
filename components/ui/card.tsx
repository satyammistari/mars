import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group/card relative overflow-hidden rounded-2xl border border-border-color bg-card-bg text-text-primary shadow-[0_4px_24px_-8px_rgba(30,50,100,0.10)] dark:shadow-none transition-all duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400/70 after:via-sky-400/60 after:to-orange-300/60 after:opacity-80 after:content-[''] hover-tilt transform-gpu hover:border-border-hover hover:shadow-[0_16px_40px_-8px_rgba(25,118,210,0.18)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:z-10",
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
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-xl font-bold tracking-tight text-text-primary", className)} {...props} />,
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm font-medium leading-relaxed text-text-secondary", className)} {...props} />,
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
