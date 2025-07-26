"use client"

import AboutMe from "@/components/layout/AboutMe"
import Diplomas from "@/components/layout/Diplomas"
import Experience from "@/components/layout/Experience"
import LandingPage from "@/components/layout/landing-page"
import Projects from "@/components/layout/Projects"
import Skills from "@/components/layout/Skills"

export default function Home() {

  return (
    <div className="flex flex-col gap-32 pb-6 relative min-h-max">

      <LandingPage />

      <AboutMe />

      <Skills />

      <Projects />

      <Diplomas />

      <Experience />
    </div>
  )
}
