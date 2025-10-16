"use client"

import AboutMe from "@/components/layout/AboutMe"
import Contact from "@/components/layout/Contact"
import Diplomas from "@/components/layout/Diplomas"
import Experience from "@/components/layout/Experience"
import Hobbies from "@/components/layout/Hobbies"
import LandingPage from "@/components/layout/landing-page"
import MyStats from "@/components/layout/MyStats"
import Projects from "@/components/layout/Projects"
import Skills from "@/components/layout/Skills"

export default function Home() {

  return (
    <div className="flex flex-col gap-32 relative min-h-max">

      <LandingPage />

      <AboutMe />

      <Experience />

      <MyStats />

      <Diplomas />

      <Projects />

      <Skills />

      <Hobbies />

      <div className="w-full bg-[var(--color-black-auto)] shadow-[var(--color-footer-shadow)]">
        <Contact />
      </div>

    </div>
  )
}