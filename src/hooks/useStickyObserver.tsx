import { useEffect, useRef, useState } from "react"

export function useStickyState(stickyTop: number = 0, buffer = 1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    const checkSticky = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const shouldStick = rect.top <= stickyTop + buffer
      if (shouldStick !== isSticky) {
        setIsSticky(shouldStick)
      }
    }

    const onScroll = () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
      animationFrame.current = requestAnimationFrame(checkSticky)
    }

    window.addEventListener("scroll", onScroll)
    checkSticky()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
    }
  }, [stickyTop, buffer, isSticky])

  return { ref, isSticky }
}
