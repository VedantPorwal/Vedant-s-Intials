"use client"

import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

interface DynamicBorderCardProps {
  children: ReactNode
  className?: string
}

export const DynamicBorderCard = ({ children, className = "" }: DynamicBorderCardProps) => {
  const topRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000
      const speed = 0.5 // Animation speed

      // Calculate positions based on time
      const topX = Math.sin(now * speed) * 100
      const rightY = Math.cos(now * speed) * 100
      const bottomX = Math.sin(now * speed + Math.PI) * 100
      const leftY = Math.cos(now * speed + Math.PI) * 100

      // Apply positions to elements
      if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`
      if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`
      if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`
      if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`

      requestAnimationFrame(animateBorder)
    }

    const animationId = requestAnimationFrame(animateBorder)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      className={`relative w-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-purple-500/50 ${className}`}
    >
      {/* Animated border elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={topRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden">
        <div
          ref={rightRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-500/70 to-transparent"
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          ref={bottomRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden">
        <div
          ref={leftRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-500/70 to-transparent"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
