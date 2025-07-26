import { useScrollStore } from "@/store/useScrollStore"
import React from "react"

type ScrollToProps = {
  id: string
  offset?: number
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function ScrollTo({
  id,
  offset = 0,
  className = "",
  children,
  onClick,
}: ScrollToProps) {
  const scrollToAnchor = useScrollStore((s) => s.scrollToAnchor)


  function handleScrollTo() {
    if (onClick) onClick()

    scrollToAnchor(id, offset)
  }

  return (
    <div
      className={className}
      onClick={() => handleScrollTo()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") scrollToAnchor(id, offset)
      }}
    >
      {children}
    </div>
  )
}
