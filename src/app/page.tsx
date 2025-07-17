"use client"

import AboutMe from "@/components/layout/AboutMe"
import LandingPage from "@/components/layout/landing-page"

export default function Home() {

  return (
    <div className="flex flex-col gap-16">
      <LandingPage />
      <AboutMe />
    </div>
  )
}
