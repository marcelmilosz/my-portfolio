import { Gradient } from "@/components/ui/Gradient";
import { GlassBox, LayoutWrapper } from "@/components/wrappers";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Text } from "@/components/ui/Text";
import meImage from "../../../../public/assets/images/me.jpg"
import Image from "next/image";
import MyIcon from "@/app/icons";

// type Props = {};

function LandingPage() {
  return (
    <main className="w-full h-screen relative">
      <Gradient gradientName="hero" position="left-1/3 top-[-100px]" width="w-[1500px]" />
      <Navbar />

      <LayoutWrapper className={`h-(--landing-height)`}>

        <div className="w-full flex flex-col items-center justify-center pt-24 max-md:pt-12 text-center">

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
              <Text size="2xl">👋</Text>
            </div>
          </GlassBox>


          <div className="flex flex-col pt-12 gap-4">
            <Text className="custom-gradient-text" size="hero" weight="bold">
              Full-Stack Software Engineer
            </Text>
            <Text weight="light" size="base">Web, Data Science & Low-Level Programming Enthusiast</Text>
          </div>

          {/* <div className="flex w-full px-24 items-center justify-center">

            <div className="max-w-[400px]">
              <Text weight="light" size="sm" variant="muted">
                I build full-stack applications with a strong focus on clean architecture and performance. I&apos;m also passionate about Data Science, algorithms, and low-level programming.
                Constant learning and curiosity drive my work — backed by a growing GitHub portfolio and years of real-world experience.
              </Text>
            </div>
          </div> */}
        </div>

        {/* <div className="w-full flex items-center justify-center pt-12">
          <LanguageBall iconName="p_nextjs" />
          <Gradient gradientName="hero2" position="bottom-[50px] left-[300px]" width="w-[500px]" />
        </div> */}

        <div className="w-full h-max absolute left-0 bottom-0 py-2 flex flex-col gap-2 items-center justify-center">
          <Text size="xs" weight="light"> Let me introduce myself </Text>
          <MyIcon iconName="arrow_down" />
        </div>

      </LayoutWrapper >


      <Gradient gradientName="hero2" position="bottom-[-200px] left-12" width="w-[500px]" />
    </main >
  );
}

export default LandingPage;
