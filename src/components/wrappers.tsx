type LayoutWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function LayoutWrapper({ children, className = "" }: LayoutWrapperProps) {
  return (
    <div className={`w-full px-4 max-sm:px-2 `}>
      <div className={`mx-auto max-w-[1440px] ${className}`}>
        {children}
      </div>
    </div>
  )
}


type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section className={`w-full py-4 ${className}`}>
      {children}
    </section>
  )
}