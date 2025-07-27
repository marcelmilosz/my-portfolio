import { motion } from "framer-motion";



// Simple animation with opacity top to bottom 
// Used in All About us or skill boxes
export function FramerTopBottomOpacity({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.35 }}
      className={className ?? ""}
      style={style ?? {}}
    >
      {children}

    </motion.div>
  )
}

// Used in Boxes that slide from left to right 
export function FramerBoxSlideIn({ children, className, idx, style }: { children: React.ReactNode, className?: string, idx: number, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      viewport={{ once: true, amount: 0.35 }}
      className={className ?? ""}
      style={style ?? {}}
    >
      {children}

    </motion.div>
  )
}