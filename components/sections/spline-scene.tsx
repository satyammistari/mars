import type { ComponentType } from "react"

import type { SplineProps } from "@splinetool/react-spline"
import SplineNext from "@splinetool/react-spline/next"

const Spline = SplineNext as unknown as ComponentType<SplineProps>

export function SplineScene() {
  return (
    <div className="h-[320px] w-full sm:h-[420px] lg:h-[520px]">
      <Spline scene="https://prod.spline.design/kLESpil9AqxW4Z7k/scene.splinecode" />
    </div>
  )
}
