
import { FramerBoxSlideIn, FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
// import { Gradient } from "@/components/ui/Gradient";
import { SectionSummaryText, Text } from "@/components/ui/Text";
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

      {/* <Gradient gradientName="hero3" position="top-[400px] right-0" width="w-[700px]" className="rotate-90" /> */}

      <div className="w-full h-full">
        <SectionTitle title="About Me" subtitle="A Quick Dive Into My Journey" iconName="user" />


        <FramerTopBottomOpacity className="py-8">
          <Text size="base" className="leading-8">
            Hey, I&apos;m Marcel — a Full-Stack Developer by day, <BT>Data Science grad by degree</BT>, and code enthusiast since 2016.

            With nearly <BT>five years of commercial experience</BT>, I&apos;ve built everything from sleek web apps to rock-solid backend systems. I handle both frontend and backend — and occasionally question my sanity while debugging both simultaneously. <BT>I aim for software that doesn&apos;t just work; it works beautifully. </BT>

            During my <BT>3-year journey in Data Science</BT>, I built a strong foundation in algorithms, data analysis, and machine learning — and developed a deep appreciation for clean data and even cleaner logic.
            <br /><br />
            Here&apos;s a secret: when I&apos;m not wrangling APIs or CSS, I&apos;m probably writing x64 Assembly (NASM) or tinkering in C++ — just to remind myself how close to the metal I can get… and how far modern languages have drifted.
            <br /><br />
            I&apos;m driven by clean code, continuous learning, and crafting applications that are stable, scalable, and just a bit smarter every time.
          </Text>

          <div className="flex gap-4 flex-wrap py-8">
            {HIGHLIGHTS.map((item, idx) => (
              <StatsBox key={item.label} label={item.label} value={item.value} idx={idx} />
            ))}
          </div>

          <SectionSummaryText>
            Additional note: <br />
            I ran a product photography studio for two years — which means I&apos;ve spent more time in Photoshop than I&apos;d like to admit. From setting up lights to handling clients, it taught me a lot about visual storytelling, teamwork, and making pixels look pretty.
          </SectionSummaryText>
        </FramerTopBottomOpacity>






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
      className="backdrop-blur-md rounded-xl p-6 flex-1 shadow-[var(--color-project-box-shadow)] flex flex-col gap-2 min-w-[150px]"
      style={{
        background: "var(--color-project-box-gradient)",
      }}
    >

      <Text size="3xl" weight="medium">{value}</Text>
      <Text size="sm" variant="muted">{label}</Text>
    </FramerBoxSlideIn>
  )
}

export function BT({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-[var(--color-secondary)]">{children}</span>
  )
}

export default AboutMe;
