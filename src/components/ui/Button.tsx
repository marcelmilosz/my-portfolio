import React from "react"
import { BORDER_RADIUSES, BORDER_RADIUSES_PROPS, DEFAULT_BORDER_RADIUS, PADDINGS, PADDINGS_PROPS } from "../_shared"
import { Text } from "./Text"



type ButtonProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
  rounded?: BORDER_RADIUSES_PROPS
  p?: PADDINGS_PROPS,
  shape?: "default" | "circle"
  shapeSize?: string
}

type ButtonVariant = "primary" | "glass"

type ButtonVariantStyle = {
  base: string
  hover?: string
  border?: string
  shadow?: string
}

export const ButtonVariants: Record<ButtonVariant, ButtonVariantStyle> = {
  primary: {
    base: "bg-[var(--color-glass-box)] text-white",
    hover: "hover:bg-[var(--color-glass-box-hover)]"
  },

  glass: {
    base: "bg-[var(--color-glass-box)] text-white",
    hover: "hover:bg-[var(--color-glass-box-hover)]",
    border: "border border-[var(--color-glass-border)]",
    shadow: "shadow-[var(--color-glass-shadow)]"
  }
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
  rounded = DEFAULT_BORDER_RADIUS,
  p = "md",
  shape = "default",
  shapeSize = "w-10 h-10"
}: ButtonProps) {

  const size = shape === "circle" ? shapeSize : "max-w-max "

  const btnBase = `${size} whitespace-nowrap select-none transition-all duration-200 font-inherit cursor-pointer inline-flex items-center justify-center ${BORDER_RADIUSES[rounded]} ${PADDINGS[p]}`

  const variantBase = ButtonVariants[variant].base
  const variantHover = ButtonVariants[variant].hover
  const variantBorder = ButtonVariants[variant].border
  const variantShadow = ButtonVariants[variant].shadow

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : ""

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${btnBase} ${variantBase} ${variantHover} ${variantShadow} ${disabledStyles} ${variantBorder} ${className}`}
    >
      <Text size="base" weight="normal">{children}</Text>
    </button>
  )
}
