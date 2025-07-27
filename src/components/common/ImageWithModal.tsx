"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import MyIcon from "@/app/icons"
import { Button } from "../ui/Button"

type Props = {
  src: StaticImageData | string
  alt?: string
  width?: number
  height?: number
  className?: string
  quality?: number
  unoptimized?: boolean
  fill?: boolean
}

export function ImageWithModal({
  src,
  alt = "",
  width = 128,
  height = 128,
  className = "",
  quality,
  unoptimized = false,
  fill = false,
}: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Opcjonalnie: pełne czyszczenie przy unmount
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Obrazek podglądu */}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`cursor-pointer ${className}`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        >
          {/* Zamknięcie */}
          <div className="absolute top-4 right-4 z-50">
            <Button
              variant="glass"
              shape="circle"
              rounded="xl"
              className="backdrop-blur-md"
              shapeSize="w-14 h-14"
              onClick={() => setOpen(false)}
            >
              <MyIcon iconName="x" iconSize="lg" iconVariant="white" />
            </Button>
          </div>

          {/* Animowany kontener */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[90vw] max-w-4xl h-[80vh]">
              <Image
                src={src}
                alt={alt}
                quality={quality}
                unoptimized={unoptimized}
                fill={fill}
                className="object-contain w-full h-full rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      )}

    </>
  )
}
