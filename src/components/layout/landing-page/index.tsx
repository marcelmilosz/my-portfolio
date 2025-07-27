
import { GlassBox, LayoutWrapper } from "@/components/wrappers";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Text } from "@/components/ui/Text";
import meImage from "../../../../public/assets/images/me.jpg"
import Image from "next/image";
import MyIcon from "@/app/icons";
import Link from "next/link";
import { Gradient } from "@/components/ui/Gradient";
import { motion } from "framer-motion";
import { SECTION_IDS } from "@/components/common/FloatingNavbar";
import { Button } from "@/components/ui/Button";
import { FramerTopBottomOpacity } from "@/components/common/FramerWrappers";

// type Props = {};

function LandingPage() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden pb-6" id={SECTION_IDS.landing}>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}

      >
        <Navbar />
      </motion.div>
      <Gradient gradientName="hero" position="left-1/3 top-[-100px]" width="w-[1500px]" />
      <Gradient gradientName="hero2" position="top-[400px] left-4" width="w-[500px]" />
      <Gradient gradientName="hero2" position="bottom-0 right-12" width="w-[100px]" />

      <LayoutWrapper className={`min-h-(--landing-height) pt-24 max-md:pt-12 max-sm:pt-8`}>

        <div className="w-full h-full flex flex-col items-center justify-start text-center gap-12 max-sm:gap-8">

          {/* Image Box  */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}

          >
            <GlassBox className="flex gap-2 items-center p-2" rounded="full" p="none">
              <div className="overflow-hidden w-[64px] h-[64px] min-w-[64px] min-h-[64px]" >
                <Image
                  src={meImage}
                  alt="Marcel Miłosz - Author Image"
                  className="w-full h-full object-cover  rounded-full"
                />
              </div>

              <div className="flex items-center gap-2 px-2">
                <div className="flex flex-col items-start overflow-hidden">
                  <Text size="2xl" weight="semibold" className="whitespace-nowrap">Hello There</Text>
                  <Text size="lg" weight="normal">I&apos;m Marcel.</Text>
                </div>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 15, -10, 15, -10, 0] }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                >
                  <Text size="3xl">👋</Text>
                </motion.span>
              </div>
            </GlassBox>
          </motion.div>

          {/* Title and subtitle  */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              <Text className="custom-gradient-text" size="hero" weight="bold">
                Full-Stack Software Engineer
              </Text>
              <Text weight="light" size="base">Web, Data Science & Low-Level Programming Enthusiast</Text>
            </div>
          </motion.div>

          {/* Socials  */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex gap-4">
              <Link href="https://github.com/marcelmilosz" target="_blank"><MyIcon iconName="social_github" /></Link>
              <Link href="https://www.linkedin.com/in/marcelmilosz/" target="_blank"><MyIcon iconName="social_linkedin" /></Link>
            </div>
          </motion.div>

          <FramerTopBottomOpacity className="w-full px-4 sm:px-0 pt-12">
            <Console />
          </FramerTopBottomOpacity>
        </div>
      </LayoutWrapper >
    </main >
  );
}

function Console() {
  const [typedCommand, setTypedCommand] = useState("")
  const [step, setStep] = useState<"typing" | "executing" | "done">("typing")

  const fullCommand = "npm run dev"
  const consolePath = "~/desktop/personal-projects/my-portfolio"

  useEffect(() => {
    if (step !== "typing") return

    let i = 0
    const typing = setInterval(() => {
      if (i <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, i))
        i++
      } else {
        clearInterval(typing)
        setTimeout(() => setStep("executing"), 500) // po "enter"
      }
    }, 100)

    return () => clearInterval(typing)
  }, [step])

  useEffect(() => {
    if (step === "executing") {
      const timer = setTimeout(() => setStep("done"), 1500)
      return () => clearTimeout(timer)
    }
  }, [step])

  return (
    <div className="w-full max-w-3xl mx-auto 
      backdrop-blur-lg bg-[var(--color-console-bg)] text-white rounded-lg
      shadow-[var(--color-console-shadow)] border border-[var(--color-console-border)]
      overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-[var(--color-console-upper)] border-[var(--color-console-border)]">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      {/* Console Content */}
      <div className="px-6 py-4 font-mono text-sm min-h-[180px] text-left flex flex-col gap-2 items-start">
        <Text size="sm" className="text-green-400 max-sm:text-xs">{consolePath} $</Text>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline whitespace-pre-wrap"
        >
          {typedCommand}
          {step === "typing" && <span className="animate-pulse">|</span>}
        </motion.p>

        {step !== "typing" && (
          <>
            <Text size="sm" className="text-green-400 max-sm:text-xs">{consolePath} $</Text>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400"
            >
              Starting dev server...
            </motion.p>
          </>
        )}

        {step === "done" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("about-me")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm"
            >
              🚀 Start Here
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default LandingPage;
