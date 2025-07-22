import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  className?: string;
};

type TextSize = "xxs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "hero";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextVariant = "auto" | "muted" | "primary" | "secondary" | "white";

const sizeMap: Record<TextSize, string> = {
  xxs: "text-[8px]",
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
  auto: "text-[var(--color-white-auto)]",
  white: "text-[var(--color-static-white)]",
  muted: "text-[var(--color-text-muted)]",
  primary: "text-[var(--color-primary)]",
  secondary: "text-[var(--color-secondary)]",
};

export function Text({
  children,
  size = "base",
  weight = "normal",
  variant = "auto",
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

export function SectionSummaryText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm text-[var(--color-text-muted)] font-light italic">
      {children}
    </span>
  )
}
