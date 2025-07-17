"use client"

import AboutMe from "@/components/layout/AboutMe"
import LandingPage from "@/components/layout/landing-page"
import { Gradient } from "@/components/ui/Gradient"

export default function Home() {

  return (
    <div className="flex flex-col gap-16 pb-6 relative overflow-hidden min-h-max">
      <Gradient gradientName="hero" position="left-1/3 top-[-100px]" width="w-[1500px]" />
      <Gradient gradientName="hero2" position="top-[700px] left-4" width="w-[500px]" />

      <LandingPage />

      <Gradient gradientName="hero3" position="top-[1600px] left-[200px]" width="w-[700px]" className="rotate-90" />

      <AboutMe />
    </div>
  )
}
