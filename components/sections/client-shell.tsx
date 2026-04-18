"use client"

import { useState, useCallback, type ReactNode } from "react"
import { IntroLoader } from "@/components/sections/intro-loader"

export function ClientShell({ children }: { children: ReactNode }) {
  const [showIntro, setShowIntro] = useState(true)

  const handleComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleComplete} />}
      <div
        style={{
          opacity: showIntro ? 0 : 1,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  )
}
