
import { FramerBoxSlideIn, FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
import { Gradient } from "@/components/ui/Gradient";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import React from "react";

// type Props = {};

const HIGHLIGHTS = [
  // { label: "LeetCode problems solved", value: "120+" },
  { label: "Years of Programming", value: "7+" },
  { label: "Years of Professional Experience", value: "4+" },
  { label: "Shipped Commercial Projects", value: "3+" },
  { label: "Personal Projects", value: "15+" },
  // { label: "GitHub repositories", value: "40+" },
  { label: "Freelance projects", value: "5+" },
];

function AboutMe() {
  return (
    <LayoutWrapper className="w-full min-h-max relative" size="laptop" id="about-me">

      <Gradient gradientName="hero3" position="top-[400px] right-0" width="w-[700px]" className="rotate-90" />

      <div className="w-full h-full">
        <SectionTitle title="About Me" subtitle="A Quick Dive Into My Journey" iconName="user" />


        <FramerTopBottomOpacity className="py-8">
          <Text size="base" className="leading-8">
            Hey, I&apos;m Marcel — a Full-Stack Developer by day, Data Science grad by degree, and code enthusiast since 2016.

            With nearly <BT>five years of commercial experience</BT>, I&apos;ve built everything from sleek web apps to rock-solid backend systems. I handle both frontend and backend — and occasionally question my sanity while debugging both simultaneously. <BT>I aim for software that doesn&apos;t just work; it works beautifully. </BT>

            Through 3 years of Data Science studies, I built a strong foundation in algorithms, data analysis, and machine learning — and developed a deep appreciation for clean data and even cleaner logic.
            <br /><br />
            Here&apos;s a secret: when I&apos;m not wrangling APIs or CSS, you&apos;ll often find me in my free time tinkering with x64 Assembly (NASM) or tinkering in C++, just to remind myself how close to the metal I can go — and how far modern languages have drifted into more levels of abstraction.
            <br /><br />
            I&apos;m driven by clean code, continuous learning, and making the internet a bit more awesome — one commit at a time.
            <br /><br />
            <span className="text-sm text-[var(--color-text-muted)] font-light italic">
              Additional note <br /> I ran a product photography studio for two years — which means I&apos;ve spent more time in Photoshop than I&apos;d like to admit. From setting up lights to handling clients, it taught me a lot about visual storytelling, working with people, and making pixels look pretty.
            </span>
          </Text>
        </FramerTopBottomOpacity>

        <div className="flex gap-4 flex-wrap py-8">
          {HIGHLIGHTS.map((item, idx) => (
            <StatsBox key={item.label} label={item.label} value={item.value} idx={idx} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
}

function StatsBox({
  label,
  value,
  idx
}: { label: string, value: string, idx: number }) {
  return (
    <FramerBoxSlideIn
      idx={idx}
      className="backdrop-blur-md rounded-3xl p-6 flex-1 shadow-[var(--color-project-box-shadow)] flex flex-col gap-2 min-w-[150px]"
      style={{
        background: "var(--color-project-box-gradient)",
      }}
    >

      <Text size="3xl" weight="medium">{value}</Text>
      <Text size="sm" variant="muted">{label}</Text>
    </FramerBoxSlideIn>
  )
}

function BT({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-[var(--color-secondary)]">{children}</span>
  )
}

export default AboutMe;
