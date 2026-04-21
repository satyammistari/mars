"use client"

import { MessageSquareQuote } from "lucide-react"

const testimonials = [
  {
    quote: "Building a drone from scratch at MARS taught me more than any core course.",
    name: "Rahul S.",
    role: "Automation Track",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rahul",
  },
  {
    quote: "The mentorship during SIH was phenomenal. Our team reached the finals because of it!",
    name: "Neha K.",
    role: "Software Team",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Neha",
  },
  {
    quote: "MARS is the only place where you can break a 3D printer and be praised for trying to upgrade it.",
    name: "Amit P.",
    role: "Mechanical Design",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Amit",
  },
  {
    quote: "The industrial tie-ups gave me an internship at a top robotics firm. Highly recommend!",
    name: "Sneha T.",
    role: "Core Team Alumni",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sneha",
  },
  {
    quote: "From blinking an LED to PID control, my journey here has been incredible.",
    name: "Vikrant M.",
    role: "Embedded Systems",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Vikrant",
  },
]

// Duplicate to create seamless scrolling loop
const scrollingTestimonials = [...testimonials, ...testimonials]

export function StudentFeedbackMarquee() {
  return (
    <div className="w-full overflow-hidden py-20 group relative border-y border-border-color/30 bg-bg-secondary/20">
      <div className="mb-10 flex flex-col items-center justify-center space-y-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <MessageSquareQuote className="h-5 w-5 text-accent-color" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-color">
            Member Feedback
          </h3>
        </div>
        <h2 className="text-3xl font-black tracking-[-0.02em] text-text-primary sm:text-4xl">
          What Students Say
        </h2>
      </div>
      
      {/* Container for Infinite Scroll */}
      <div className="relative flex w-full overflow-hidden">
        {/* Gradients on the edges to blend into background */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent md:w-32"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent md:w-32"></div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes infinite-scroll-testimonials {
            0% { transform: translateX(0); }
            /* Shift left by 50% (one set of items) + half gap (12px = 0.75rem half of 1.5rem) */
            100% { transform: translateX(calc(-50% - 0.75rem)); }
          }
          .animate-infinite-scroll-testimonials {
            animation: infinite-scroll-testimonials 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .group:hover .animate-infinite-scroll-testimonials {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="animate-infinite-scroll-testimonials gap-6 px-6 pb-4">
          {scrollingTestimonials.map((item, i) => (
            <div
              key={i}
              className="flex w-[280px] flex-none flex-col justify-between rounded-2xl border border-border-color/60 bg-card-bg p-6 shadow-sm transition-all duration-300 hover:border-accent-color/40 hover:shadow-md sm:w-[320px] md:w-[380px]"
            >
              <p className="text-sm leading-relaxed text-text-primary sm:text-base">
                "{item.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border-color/30 pt-4">
                <div className="flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-border-color/50 bg-bg-primary">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-text-secondary">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
