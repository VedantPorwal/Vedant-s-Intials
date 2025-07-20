"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
}

export const AnimatedButton = ({ children, onClick, href, className, disabled = false }: AnimatedButtonProps) => {
  const baseClasses =
    "relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group outline outline-1 disabled:opacity-50 disabled:cursor-not-allowed"

  const content = (
    <>
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center gap-2">
        {children}
      </span>
    </>
  )

  if (href && !disabled) {
    return (
      <a href={href} className={cn(baseClasses, className)} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled} className={cn(baseClasses, className)}>
      {content}
    </button>
  )
}
