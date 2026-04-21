"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const stickers = [
  { src: "/stickers/stick1.jpg", top: "12%", left: "4%", rotate: -14 },
  { src: "/stickers/stick2.jpg", top: "65%", left: "82%", rotate: 12 },
  { src: "/stickers/stick3.jpg", top: "18%", left: "86%", rotate: -8 },
  { src: "/stickers/stick4.jpg", top: "70%", left: "8%", rotate: 22 },
  { src: "/stickers/stick5.jpg", top: "82%", left: "48%", rotate: -15 },
]

export function FloatingStickers() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    // Only render on client to avoid hydration mismatches with random/dynamic CSS features
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible max-w-full">
      {stickers.map((st, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing w-36 h-36 md:w-48 md:h-48 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
          style={{ top: st.top, left: st.left }}
          initial={{ opacity: 0, scale: 0.2, rotate: st.rotate - 60 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: st.rotate,
            y: [0, -20, 0]
          }}
          transition={{ 
            opacity: { duration: 0.5, delay: i * 0.15 },
            scale: { type: "spring", damping: 10, stiffness: 80, delay: i * 0.15 },
            rotate: { type: "spring", damping: 12, stiffness: 80, delay: i * 0.15 },
            y: {
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          drag
          dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
          dragElastic={0.2}
          whileHover={{ scale: 1.15, zIndex: 50, rotate: 0 }}
          whileDrag={{ scale: 1.25, rotate: 0, zIndex: 60, cursor: "grabbing" }}
        >
          {/* Aesthetic sticker rendering with thick white borders like physical laptop stickers */}
          <div className="w-full h-full p-2 bg-white rounded-2xl shadow-inner border-4 border-white/90 overflow-hidden group">
            <img 
              src={st.src} 
              alt="Engineering Fun Sticker" 
              className="w-full h-full object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
