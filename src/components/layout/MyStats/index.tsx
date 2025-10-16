'use client'
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import { SECTION_IDS } from "@/components/common/FloatingNavbar";
import { FramerBoxSlideIn, FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";


// const hobbies = [
//   { emoji: "💪", label: "Calisthenics since 2018" },
//   { emoji: "📚", label: "Reading Books" },
//   { emoji: "🎮", label: "Gaming" },
//   { emoji: "🍎", label: "Healthy Lifestyle" },
//   { emoji: "🏃‍♂️", label: "Running" },
//   { emoji: "🎹", label: "Playing Piano" },
//   { emoji: "🧠", label: "Math & Physics" },
// ]

const stats = [
  { label: "LeetCode solved", value: "130+" },
  { label: "Github commits since 2024", value: "1,000+" },
  { label: "IT related courses", value: "30+" },
];


export default function MyStats() {
  return (
    <LayoutWrapper className="w-full min-h-max relative" size="laptop" id={SECTION_IDS.mystats}>

      <div className="flex gap-8 items-center justify-between max-lg:flex-col max-lg:gap-2 max-lg:items-start">
        <SectionTitle title="Stats" subtitle="I love numbers. Don't you?" iconName="bar_chart" className="min-w-max" />
      </div>

      {/* 1. Hobby icons */}
      <FramerTopBottomOpacity className="flex items-center max-md:flex-col max-md:gap-12 justify-evenly gap-8 text-center py-12 my-12 border-t border-b border-[#99999923]">
        {stats.map((stat, i) => (
          <FramerBoxSlideIn idx={i} key={stat.label}>
            <StatBox stat={stat} />
          </FramerBoxSlideIn>
        ))}
      </FramerTopBottomOpacity>
    </LayoutWrapper>

  )
}

type HobbyBoxProps = {
  stat?: { label: string, value: string }
}

function StatBox({ stat }: HobbyBoxProps) {
  if (!stat) return null

  return (
    <div className={`bg-transparent cursor-default relative overflow-hidden ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} flex flex-col gap-2 items-center group`}>

      <Text size="hero" weight="medium">{stat?.value}</Text>

      <div className="flex w-full items-center justify-center px-4">
        <Text size="xs" weight="normal" variant="muted" className="transition-colors">{stat.label}</Text>
      </div>
    </div>
  )
}
