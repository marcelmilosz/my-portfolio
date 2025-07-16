import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  className?: string;
};

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "hero";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextVariant = "primary" | "muted";

const sizeMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base max-md:text-sm",
  lg: "text-lg max-md:text-base",
  xl: "text-xl max-md:text-lg",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  hero: "text-[50px] leading-16 max-md:text-[36px] max-md:leading-11"
};

const weightMap: Record<TextWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const variantMap: Record<TextVariant, string> = {
  primary: "text-[var(--color-white)]",
  muted: "text-[var(--color-text-muted)]",
};

export function Text({
  children,
  size = "base",
  weight = "normal",
  variant = "primary",
  className = "",
}: TextProps) {
  const styles = `
    ${sizeMap[size]} 
    ${weightMap[weight]} 
    ${variantMap[variant]} 
    ${className}
  `;

  return <p className={styles}>{children}</p>;
}
