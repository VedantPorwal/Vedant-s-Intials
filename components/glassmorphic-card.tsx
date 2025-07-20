"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { DynamicBorderCard } from "@/components/ui/dynamic-border-animations-card"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <DynamicBorderCard>{children}</DynamicBorderCard>
      </div>
    </motion.div>
  )
}
