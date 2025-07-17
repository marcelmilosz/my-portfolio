
import { GlassBox, LayoutWrapper } from "@/components/wrappers";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Text } from "@/components/ui/Text";
import meImage from "../../../../public/assets/images/me.jpg"
import Image from "next/image";
import MyIcon from "@/app/icons";
import Link from "next/link";
import { ScrollTo } from "@/components/common/ScrollTo";

// type Props = {};

function LandingPage() {
  return (
    <main className="w-full h-screen relative">
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

          <div className="flex pt-12 gap-4">
            <Link href="https://github.com/marcelmilosz" target="_blank"><MyIcon iconName="social_github" /></Link>
            <Link href="https://www.linkedin.com/in/marcelmilosz/" target="_blank"><MyIcon iconName="social_linkedin" /></Link>
          </div>

        </div>


        <ScrollTo id="about-me">
          <div className="w-full h-max absolute left-0 bottom-0 py-2 flex flex-col gap-2 items-center justify-center cursor-pointer">
            <Text size="xs" weight="normal">A bit about me</Text>
            <div className="animate-bounce"><MyIcon iconName="arrow_down" /></div>
          </div>
        </ScrollTo>

      </LayoutWrapper >
    </main >
  );
}

export default LandingPage;
