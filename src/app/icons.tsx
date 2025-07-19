import React, { SVGProps } from "react"
// icons
import sunIcon from "../../public/assets/icons/sun.svg"
import moonIcon from "../../public/assets/icons/moon.svg"
import menuIcon from "../../public/assets/icons/menu.svg"
import xIcon from "../../public/assets/icons/x.svg"
import hashIcon from "../../public/assets/icons/hash.svg"
import codeIcon from "../../public/assets/icons/code.svg"
import arrowDownIcon from "../../public/assets/icons/arrow-down.svg"

import pNextjsIcon from "../../public/assets/icons/p_nextjs.svg"
import pBootstrapIcon from "../../public/assets/icons/p_bootstrap.svg"
import pBulmaIcon from "../../public/assets/icons/p_bulma.svg"
import pCssIcon from "../../public/assets/icons/p_css.svg"
import pHtmlIcon from "../../public/assets/icons/p_html.svg"
import pJsIcon from "../../public/assets/icons/p_js.svg"
import pPhpIcon from "../../public/assets/icons/p_php.svg"
import pReactIcon from "../../public/assets/icons/p_react.svg"
import pScssIcon from "../../public/assets/icons/p_scss.svg"
import pTailwindIcon from "../../public/assets/icons/p_tailwind.svg"
import pJestIcon from "../../public/assets/icons/p_jest.svg"

import socialLinkedInIcon from "../../public/assets/icons/social_linkedin.svg"
import socialGithubIcon from "../../public/assets/icons/social_github.svg"


export type IconNames =
  | "sun"
  | "moon"
  | "menu"
  | "x"
  | "p_nextjs"
  | "p_bootstrap"
  | "p_bulma"
  | "p_css"
  | "p_html"
  | "p_js"
  | "p_php"
  | "p_react"
  | "p_scss"
  | "p_tailwind"
  | "p_jest"


  | "arrow_down"
  | "hash"
  | "code"
  | "social_linkedin"
  | "social_github"


export type IconsSizeProps = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "skillset"

export type IconVariantProps =
  | "white"
  | "black"
  | "auto"

const iconVariants = {
  black: {
    base: `text-[var(--color-static-black)] `,
    fill: `fill-[var(--color-static-black)]`,
  },
  white: {
    base: `text-[var(--color-static-white)] `,
    fill: `fill-[var(--color-static-white)]`,
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
  skillset: "w-[76px] h-[76px]"
}

// Map of icon components
const ICONS_MAP: Record<IconNames, React.FC<SVGProps<SVGSVGElement>>> = {
  sun: sunIcon,
  moon: moonIcon,
  menu: menuIcon,
  x: xIcon,
  p_nextjs: pNextjsIcon,
  p_bootstrap: pBootstrapIcon,
  p_bulma: pBulmaIcon,
  p_css: pCssIcon,
  p_html: pHtmlIcon,
  p_js: pJsIcon,
  p_php: pPhpIcon,
  p_react: pReactIcon,
  p_scss: pScssIcon,
  p_tailwind: pTailwindIcon,
  p_jest: pJestIcon,
  arrow_down: arrowDownIcon,
  hash: hashIcon,
  code: codeIcon,
  social_github: socialGithubIcon,
  social_linkedin: socialLinkedInIcon
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