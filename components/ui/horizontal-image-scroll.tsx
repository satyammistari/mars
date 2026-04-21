"use client"

import { motion } from "framer-motion"

const baseImages = [
  "/images/real/img1.jpg",
  "/images/real/img2.jpg",
  "/images/real/img3.jpg",
  "/images/real/img4.jpg",
  "/images/real/img5.jpg",
  "/images/real/img6.jpg",
  "/images/real/img7.jpg",
  "/images/real/img8.jpg",
  "/images/real/img9.jpg",
  "/images/real/img10.jpg",
  "/images/real/img11.jpg",
  "/images/real/img12.jpeg",
  "/images/real/img13.jpg",
  "/images/real/img14.jpg",
  "/images/real/img15.jpg",
]

// Duplicate to create seamless scrolling loop
const images = [...baseImages, ...baseImages]

export function HorizontalImageScroll() {
  return (
    <div className="w-full overflow-hidden py-10 group relative">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h3 className="font-['Orbitron'] text-xl font-black text-accent-color drop-shadow-md">
          Action Shots
        </h3>
        <p className="text-sm font-medium text-text-secondary">Interactive memory stream</p>
      </div>
      
      {/* Container for Infinite Scroll */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradients on the edges to blend into background */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent"></div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            /* We shift left by exactly 50% (one set of images) + half the gap distance to align perfectly */
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .group:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="animate-infinite-scroll gap-6 px-6 pb-12 pt-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -2 : 2, zIndex: 20 }}
              whileTap={{ scale: 0.95 }}
              className="flex-none cursor-pointer transition-all duration-300"
            >
              <div className="relative h-64 w-72 overflow-hidden rounded-[2rem] border-4 border-bg-secondary bg-bg-secondary shadow-2xl md:h-80 md:w-96">
                <img
                  src={src}
                  alt={`Robotics Action ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Cute overlay for interactive glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] border-2 border-white/10 mix-blend-overlay shadow-[inset_0_0_30px_rgba(255,255,255,0.15)]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
