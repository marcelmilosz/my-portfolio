import React, { SVGProps } from "react"
// icons
import sunIcon from "../../public/assets/icons/sun.svg"
import moonIcon from "../../public/assets/icons/moon.svg"
import menuIcon from "../../public/assets/icons/menu.svg"
import xIcon from "../../public/assets/icons/x.svg"
import hashIcon from "../../public/assets/icons/hash.svg"
import codeIcon from "../../public/assets/icons/code.svg"
import arrowDownIcon from "../../public/assets/icons/arrow-down.svg"
import userIcon from "../../public/assets/icons/user.svg"
import folderIcon from "../../public/assets/icons/folder.svg"
import infoIcon from "../../public/assets/icons/info.svg"

// Front 
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
import pTs from "../../public/assets/icons/p_ts.svg"

// Backend 
import pDjangoRest from "../../public/assets/icons/p_django_rest.svg"
import pDjango from "../../public/assets/icons/p_django.svg"
import pFlask from "../../public/assets/icons/p_flask.svg"
import pGoogleCloud from "../../public/assets/icons/p_googlecloud.svg"
import pHeroku from "../../public/assets/icons/p_heroku.svg"
import pNodejs from "../../public/assets/icons/p_nodejs.svg"
import pPostman from "../../public/assets/icons/p_postman.svg"
import pSql from "../../public/assets/icons/p_sql.svg"
import pPostgres from "../../public/assets/icons/p_postgresql.svg"
import pMongo from "../../public/assets/icons/p_mongo.svg"
import pAws from "../../public/assets/icons/p_aws.svg"
import pDocker from "../../public/assets/icons/p_docker.svg"
import pFirebase from "../../public/assets/icons/p_firebase.svg"

// DS
import dsJupyter from "../../public/assets/icons/ds_jupyter.svg"
import dsNumpy from "../../public/assets/icons/ds_numpy.svg"
import dsPandas from "../../public/assets/icons/ds_pandas.svg"
import dsPython from "../../public/assets/icons/ds_python.svg"
import dsR from "../../public/assets/icons/ds_R.svg"
import dsScikit from "../../public/assets/icons/ds_scikit.svg"
import dsSelenium from "../../public/assets/icons/ds_selenium.svg"
import dsExcel from "../../public/assets/icons/ds_excel.svg"

// Design
import sAi from "../../public/assets/icons/s_ai.svg"
import sPs from "../../public/assets/icons/s_ps.svg"
import sFigma from "../../public/assets/icons/s_figma.svg"
import sCanva from "../../public/assets/icons/s_canva.svg"
import sXd from "../../public/assets/icons/s_xd.svg"

// Low level
import lArduino from "../../public/assets/icons/l_arduino.svg"
import lC from "../../public/assets/icons/l_c.svg"
import lCpp from "../../public/assets/icons/l_cpp.svg"
import lAsm from "../../public/assets/icons/l_asm.svg"

import socialLinkedInIcon from "../../public/assets/icons/social_linkedin.svg"
import socialGithubIcon from "../../public/assets/icons/social_github.svg"


export type IconNames =
  | "sun"
  | "moon"
  | "menu"
  | "x"
  | "arrow_down"
  | "hash"
  | "code"
  | "social_linkedin"
  | "social_github"
  | "user"
  | "folder"
  | "info"

  // Frontend 
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
  | "p_ts"

  // Backend
  | "p_django"
  | "p_django_rest"
  | "p_flask"
  | "p_google_cloud"
  | "p_heroku"
  | "p_nodejs"
  | "p_postman"
  | "p_sql"
  | "p_postgres"
  | "p_mongo"
  | "p_aws"
  | "p_docker"
  | "p_firebase"

  // DS
  | "ds_jupyter"
  | "ds_numpy"
  | "ds_pandas"
  | "ds_python"
  | "ds_R"
  | "ds_scikit"
  | "ds_selenium"
  | "ds_excel"

  // Design
  | "s_ai"
  | "s_ps"
  | "s_figma"
  | "s_canva"
  | "s_xd"


  // Low level
  | "l_arduino"
  | "l_asm"
  | "l_c"
  | "l_cpp"




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
  skillset: "w-[64px] h-[64px]"
}

// Map of icon components
const ICONS_MAP: Record<IconNames, React.FC<SVGProps<SVGSVGElement>>> = {
  sun: sunIcon,
  moon: moonIcon,
  menu: menuIcon,
  arrow_down: arrowDownIcon,
  x: xIcon,
  hash: hashIcon,
  code: codeIcon,
  social_github: socialGithubIcon,
  social_linkedin: socialLinkedInIcon,
  user: userIcon,
  folder: folderIcon,
  info: infoIcon,

  // Front 
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
  p_ts: pTs,

  // Backend 
  p_django: pDjango,
  p_django_rest: pDjangoRest,
  p_flask: pFlask,
  p_google_cloud: pGoogleCloud,
  p_heroku: pHeroku,
  p_nodejs: pNodejs,
  p_postman: pPostman,
  p_sql: pSql,
  p_mongo: pMongo,
  p_postgres: pPostgres,
  p_aws: pAws,
  p_docker: pDocker,
  p_firebase: pFirebase,

  // DS
  ds_jupyter: dsJupyter,
  ds_numpy: dsNumpy,
  ds_pandas: dsPandas,
  ds_python: dsPython,
  ds_R: dsR,
  ds_scikit: dsScikit,
  ds_selenium: dsSelenium,
  ds_excel: dsExcel,


  // design
  s_ai: sAi,
  s_ps: sPs,
  s_figma: sFigma,
  s_canva: sCanva,
  s_xd: sXd,

  // Low level
  l_arduino: lArduino,
  l_asm: lAsm,
  l_c: lC,
  l_cpp: lCpp,



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