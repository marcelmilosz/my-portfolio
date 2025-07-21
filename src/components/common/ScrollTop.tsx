"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MyIcon from "@/app/icons"
import { Button } from "../ui/Button"

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            variant="glass"
            shape="circle"
            rounded="xl"
            className="backdrop-blur-md"
            shapeSize="w-14 h-14"
          >
            <MyIcon iconName="arrow_down" iconRotateVertically iconSize="xl" iconStroke="2" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
