import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  className?: string;
};

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type TextVariant = "primary";

const sizeMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

const weightMap: Record<TextWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const variantMap: Record<TextVariant, string> = {
  primary: "text-current",
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
