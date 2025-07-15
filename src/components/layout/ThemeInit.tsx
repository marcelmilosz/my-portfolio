// src/components/ThemeInit.tsx
"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/store/useThemeStore"

export function ThemeInit() {
  const setTheme = useThemeStore((s) => s.setTheme)

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "dark" | "light" | null
    const theme = localTheme || "dark"
    setTheme(theme)
  }, [setTheme])

  return null
}
