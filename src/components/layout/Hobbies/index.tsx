'use client'
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import { SECTION_IDS } from "@/components/common/FloatingNavbar";
import { FramerBoxSlideIn } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";


const hobbies = [
  { emoji: "💪", label: "Calisthenics since 2018" },
  { emoji: "📚", label: "Reading Books" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🍎", label: "Healthy Lifestyle" },
  { emoji: "🏃‍♂️", label: "Running" },
  { emoji: "🎹", label: "Playing Piano" },
  { emoji: "🧠", label: "Math & Physics" },
]


function Hobbies() {
  return (
    <LayoutWrapper className="w-full min-h-max relative" size="laptop" id={SECTION_IDS.hobbies}>

      <div className="flex gap-8 items-center justify-between max-lg:flex-col max-lg:gap-2 max-lg:items-start">
        <SectionTitle title="Hobbies" subtitle="Things that keep me sharp & inspired" iconName="activity" className="min-w-max" />

        <HeartPulsLine />
      </div>

      {/* <BooksCarousel /> */}
      <div className="py-12 max-lg:py-4 flex flex-col gap-24 ">


        {/* 1. Hobby icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {hobbies.map((hobby, i) => (
            <FramerBoxSlideIn idx={i} key={hobby.label}>
              <HobbyBox hobbyName={hobby.label} hobbyEmoji={hobby.emoji} />
            </FramerBoxSlideIn>
          ))}
        </div>




      </div>
    </LayoutWrapper>

  )
}

type HobbyBoxProps = {
  hobbyName?: string
  hobbyEmoji?: string
}

function HobbyBox({ hobbyName, hobbyEmoji }: HobbyBoxProps) {
  return (
    <div className={`bg-[var(--color-skill-box)] px-8 p-5 max-md:px-4 max-sm:px-2  cursor-default relative overflow-hidden ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} flex flex-col gap-2 items-center group`}>

      <Text size="hero" weight="medium">{hobbyEmoji}</Text>

      <div className="flex w-full items-center justify-center px-4">
        <Text size="xs" weight="normal" variant="muted" className="transition-colors">{hobbyName}</Text>
      </div>
    </div>
  )
}

export function HeartPulsLine() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 0,
        transition: { duration: 3, ease: "easeInOut" }
      })
    }
  }, [inView, controls])

  return (
    <div ref={ref} className="w-full h-32 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 600 100"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 50 
             L 80 50 
             L 90 48 
             L 100 52 
             L 110 20 
             L 115 70 
             L 120 50 
             L 200 50 
             L 210 48 
             L 220 52 
             L 230 20 
             L 235 70 
             L 240 50 
             L 320 50 
             L 330 48 
             L 340 52 
             L 350 20 
             L 355 70 
             L 360 50 
             L 600 50"
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={controls}
        />
      </svg>
    </div>
  )
}




export default Hobbies;
