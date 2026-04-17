import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent text-sm font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "relative overflow-hidden border border-cyan-300/30 bg-[linear-gradient(180deg,rgba(32,84,120,0.98),rgba(41,66,143,0.98))] text-white shadow-[0_18px_40px_-24px_rgba(56,189,248,0.5)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-cyan-100/80 hover:border-cyan-200/50 hover:shadow-[0_20px_46px_-26px_rgba(96,165,250,0.65)]",
        secondary:
          "border border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-slate-500/70 hover:bg-slate-900/90",
        outline:
          "border border-cyan-300/35 bg-transparent text-cyan-100 hover:border-cyan-200/55 hover:bg-cyan-500/10",
        ghost: "text-slate-300 hover:bg-slate-800/80 hover:text-white",
        link: "text-blue-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
