
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
  { label: "Years of Professional Experience", value: "5+" },
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
            Hey, I&apos;m Marcel — a <BT>Full-Stack Software Engineer</BT> (Next.js / TypeScript / Django / React) with ~5 years of experience.
            <br /><br />
            <BT>Data Science graduate</BT> with hands-on analytics and ML foundations: Python (Pandas/NumPy), SQL, ETL/scrapers, basic modeling (regression/classification), and experiment-driven thinking (metrics, A/B).
            <br /><br />
            I ship scalable apps end-to-end—from clean DRF APIs and PostgreSQL to fast SSR UIs—focused on performance, reliability, and measurable impact.
            <br /><br />
            I also enjoy <BT>learning C++ and low-level internals</BT> (x64 basics) to better understand performance, memory, and how things work under the hood.
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
