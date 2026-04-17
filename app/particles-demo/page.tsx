import Link from "next/link"

import ParticlesComponent from "@/components/ui/particles-bg"
import { buttonVariants } from "@/components/ui/button"

export default function DemoOne() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <ParticlesComponent />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">Background demo</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Particles layer</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            This demo is isolated from the main site, so you can verify the effect without changing the existing MARS
            pages.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}