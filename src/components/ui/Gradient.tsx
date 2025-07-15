import React from "react";

type GradientProps = {
  gradientName: string // np. "hero", "footer", "blob1"
  className?: string
  width?: string
  height?: string
  position?: string // e.g. "top-0 left-0"
  zIndex?: string
  opacity?: string
  blur?: string
  rounded?: string
}

export function Gradient({
  gradientName,
  className = "",
  width = "w-[500px]",
  height = "h-[500px]",
  position = "top-0 left-0",
  opacity = "opacity-30",
  blur = "blur-[70px]",
  rounded = "rounded-full",
}: GradientProps) {

  const gradientBg = `var(--gradient-${gradientName})`

  return (
    <div
      className={`
        absolute z-1 ${position} ${width} ${height}
        ${opacity} ${blur} ${rounded} ${className}
      `}
      style={{ background: gradientBg }}
    />
  )
}

