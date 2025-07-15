import React, { SVGProps } from "react"
// icons
import sunIcon from "../../public/assets/icons/sun.svg"
import moonIcon from "../../public/assets/icons/moon.svg"


export type IconNames =
  | "sun"
  | "moon"

export type IconsSizeProps = "xxs" | "xs" | "sm" | "md" | "lg" | "xl"

export type IconVariantProps =
  | "white"
  | "black"
  | "auto"

const iconVariants = {
  black: {
    base: `text-black `,
    fill: `fill-black`,
  },
  white: {
    base: `text-white `,
    fill: `fill-white`,
  },

  auto: {
    base: "text-black dark:text-white",
    fill: "fill-black dark:fill-white",
  },
}

const IconsSize = {
  xxs: "w-[14px] h-[14px]",
  xs: "w-4 h-4",          // 16px
  sm: "w-[18px] h-[18px]",
  md: "w-5 h-5",          // 20px
  lg: "w-6 h-6",          // 24px
  xl: "w-8 h-8",          // 32px
}

// Map of icon components
const ICONS_MAP: Record<IconNames, React.FC<SVGProps<SVGSVGElement>>> = {
  sun: sunIcon,
  moon: moonIcon,
}

type MyIconProps = {
  iconName: IconNames
  iconSize?: IconsSizeProps
  iconClickable?: boolean
  iconRotateHorizontally?: boolean
  iconRotateVertically?: boolean
  iconVariant?: IconVariantProps
  iconFill?: boolean
  iconStroke?: "1" | "1.5" | "2" | "2.5" | "3"
}

// Component that renders SVG with dynamic color
export default function MyIcon({
  iconName,
  iconSize = "md",
  iconRotateHorizontally = false,
  iconRotateVertically = false,
  iconVariant = "auto",
  iconFill = false,
  iconStroke = "1",
}: MyIconProps) {
  const IconComponent = iconName && ICONS_MAP[iconName] // Access the icon from the map
  const iconSizeClass = IconsSize[iconSize] || "w-6 h-6" // Get the size class

  // Render the imported SVG with a dynamic color class and size

  return (
    <IconComponent
      style={{ strokeWidth: iconStroke }}
      className={`${iconVariants[iconVariant].base} ${iconFill ? iconVariants[iconVariant].fill : ""} ${iconSizeClass} ${iconRotateHorizontally ? "rotate-180" : ""} ${iconRotateVertically ? "rotate-180" : ""}`}
    />
  )

}