import { BORDER_RADIUSES, BORDER_RADIUSES_PROPS, DEFAULT_BORDER_RADIUS, PADDINGS, PADDINGS_PROPS } from "./_shared";

type LayoutWrapperProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function LayoutWrapper({ children, className = "", style }: LayoutWrapperProps) {
  return (
    <div className={`w-full px-4 max-sm:px-2`}>
      <div className={`mx-auto max-w-[1280px] ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
}

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return <section className={`w-full py-4 ${className}`}>{children}</section>;
}

type GlassBoxProps = {
  children: React.ReactNode;
  className?: string;
  rounded?: BORDER_RADIUSES_PROPS
  p?: PADDINGS_PROPS
};

export function GlassBox({ children, className = "", rounded = DEFAULT_BORDER_RADIUS, p = "md" }: GlassBoxProps) {
  const glassBase = "relative bg-[var(--color-glass-box)]"
  const glassBorder = "border border-[var(--color-glass-border)]"
  const glassBlur = "backdrop-blur-[16px]"
  const glassShadow = "shadow-[var(--color-glass-shadow)]"

  return (
    <div
      className={`${glassBase} ${glassBorder} ${glassShadow} ${glassBlur} ${BORDER_RADIUSES[rounded]} ${PADDINGS[p]} ${className}`}
    >
      {children}
    </div>
  )
}
