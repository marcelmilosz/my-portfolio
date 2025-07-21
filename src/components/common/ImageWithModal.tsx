"use client"

import { useState } from "react"
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
}

export function ImageWithModal({
  src,
  alt = "",
  width = 128,
  height = 128,
  className = "",
  quality,
  unoptimized = false
}: Props) {
  const [open, setOpen] = useState(false)

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
          {/* Ikona zamknięcia */}
          <div className="absolute top-4 right-4 z-50">
            <Button
              variant="glass"
              shape="circle"
              rounded="xl"
              className="backdrop-blur-md"
              shapeSize="w-14 h-14"
              onClick={() => setOpen(false)}
            >
              <MyIcon iconName="x" iconSize="lg" />
            </Button>
          </div>

          {/* Animowany obraz */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // zapobiega zamykaniu na klik w obraz
          >
            <Image
              src={src}
              alt={alt}
              width={900}
              height={600}
              quality={quality}
              unoptimized={unoptimized}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      )}
    </>
  )
}
