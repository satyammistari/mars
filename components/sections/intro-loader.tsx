"use client"

import { useEffect, useRef, useState } from "react"

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  // phase 0 = mounting/invisible
  // phase 1 = fade+scale in
  // phase 2 = glow pulse
  // phase 3 = fade out

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 50)    // start fade-in
    const t1 = setTimeout(() => setPhase(2), 800)   // glow pulse
    const t2 = setTimeout(() => setPhase(3), 1500)  // begin fade-out
    const t3 = setTimeout(() => onComplete(), 1900)  // done
    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#faf8f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? "opacity 0.6s ease-in-out" : "none",
        pointerEvents: phase === 3 ? "none" : "auto",
        willChange: "opacity",
      }}
    >
      {/* Radial glow behind text - simplified */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(59,130,246,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Scan line sweeping top to bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)",
          top: 0,
          animation: "scanLine 1.8s ease-in-out forwards",
          pointerEvents: "none",
        }}
      />

      {/* Boot label */}
      <div
        style={{
          fontSize: "10px",
          fontFamily: "monospace",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(59,130,246,0.6)",
          opacity: phase >= 1 && phase < 3 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        [ SYSTEM INITIALIZING ]
      </div>

      {/* MARS CLUB main text */}
      <div style={{ position: "relative" }}>
        {/* Glow layer behind - reduced blur */}
        <h1
          style={{
            position: "absolute",
            inset: 0,
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "blur(6px)",
            opacity: phase === 2 ? 0.3 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
            userSelect: "none",
            willChange: "opacity",
          }}
          aria-hidden="true"
        >
          MARS CLUB
        </h1>

        {/* Main crisp text */}
        <h1
          style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1e293b",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            position: "relative",
            zIndex: 1,
            willChange: "opacity, transform",
          }}
        >
          MARS CLUB
        </h1>
      </div>

      {/* Subtitle */}
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(71,85,105,0.8)",
          opacity: phase >= 1 && phase < 3 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
          willChange: "opacity, transform",
        }}
      >
        Mechanical • Automation • Robotics
      </p>

      {/* Loading progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "180px",
          height: "2px",
          background: "rgba(226,232,240,0.8)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
            borderRadius: "999px",
            animation: "loadBar 1.8s ease-in-out forwards",
            willChange: "width",
          }}
        />
      </div>

      {/* Keyframe styles injected inline */}
      <style>{`
        @keyframes scanLine {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes loadBar {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
