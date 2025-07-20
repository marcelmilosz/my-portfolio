// hooks/useStickyState.ts
import { useEffect, useRef, useState } from "react"

export function useStickyState(stickyTop: number = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setIsSticky(rect.top <= stickyTop)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Run on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [stickyTop])

  return { ref, isSticky }
}
