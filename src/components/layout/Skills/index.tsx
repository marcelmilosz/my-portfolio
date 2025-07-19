import MyIcon, { IconNames } from "@/app/icons";
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import SectionTitle from "@/components/common/SectionTitle";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import React from "react";

// type Props = {};

function Skills() {
  return (
    <LayoutWrapper className="w-full min-h-screen" size="laptop" id="about-me">

      <div className="w-full h-full">
        <SectionTitle title="My Skillset" subtitle="Languages, Tools & Technologies" iconName="code" />
      </div>

      <div className="py-12 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Web / Front-end </Text>

          <div className="flex flex-wrap gap-4">
            <SkillBox iconName="p_nextjs" skillName="Next" tag="Advanced" />
            <SkillBox iconName="p_react" skillName="React" tag="Advanced" />
            <SkillBox iconName="p_js" skillName="JavaScript" tag="Advanced" />
            <SkillBox iconName="p_php" iconFill={false} skillName="Php" tag="Familiar" />
            <SkillBox iconName="p_tailwind" skillName="Tailwind" tag="Advanced" />
            <SkillBox iconName="p_html" skillName="HTML" />
            <SkillBox iconName="p_css" skillName="CSS" />
            <SkillBox iconName="p_scss" skillName="SASS" />
            <SkillBox iconName="p_bootstrap" skillName="Bootstrap" />
            <SkillBox iconName="p_bulma" skillName="Bulma" />
            <SkillBox iconName="p_jest" skillName="Jest" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Web / Back-end </Text>

          <div className="flex flex-wrap gap-4">
            <SkillBox iconName="p_nextjs" skillName="Next" tag="Advanced" />
            <SkillBox iconName="p_react" skillName="React" tag="Advanced" />
            <SkillBox iconName="p_js" skillName="JavaScript" tag="Advanced" />
            <SkillBox iconName="p_php" iconFill={false} skillName="Php" tag="Familiar" />
            <SkillBox iconName="p_tailwind" skillName="Tailwind" tag="Advanced" />
            <SkillBox iconName="p_html" skillName="HTML" />
            <SkillBox iconName="p_css" skillName="CSS" />
            <SkillBox iconName="p_scss" skillName="SASS" />
            <SkillBox iconName="p_bootstrap" skillName="Bootstrap" />
            <SkillBox iconName="p_bulma" skillName="Bulma" />
            <SkillBox iconName="p_jest" skillName="Jest" />
          </div>
        </div>
      </div>

    </LayoutWrapper>
  )
}

type SkillBoxProps = {
  skillName?: string
  iconName: IconNames
  iconFill?: boolean
  tag?: Tag
}

function SkillBox({ iconName, iconFill = true, skillName = "", tag = "" }: SkillBoxProps) {
  return (
    <div className={`bg-[var(--color-glass-box)] flex-1 min-w-max max-md:min-w-[100px] relative overflow-hidden ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} flex flex-col gap-2 items-center group  transition-all duration-200`}>

      {tag &&
        <SkillTag tag={tag} />
      }
      <div className="px-8 p-4 max-md:px-4 max-sm:px-2 grayscale-[50%] group-hover:grayscale-0 ">
        <MyIcon iconName={iconName} iconFill={iconFill} iconSize="skillset" />
      </div>

      <div className="bg-[var(--color-glass-box)] p-4 w-full">
        {skillName &&
          <Text size="xs" weight="semibold" variant="muted" className="group-hover:text-white transition-colors">{skillName}</Text>
        }
      </div>
    </div>
  )
}

type Tag = "Expert" | "Advanced" | "Intermediate" | "Familiar" | "Learning" | ""

type SkillTagProps = {
  tag: Tag
}

function SkillTag({ tag = "" }: SkillTagProps) {
  return (
    <div style={{ background: "var(--color-primary-secondary-gradient)" }} className="rounded-full p-1 absolute top-2 left-2 px-2 flex gap-1 items-center shadow-[var(--color-tag-shadow)] z-10">
      <div className="w-1 h-1 rounded-full bg-[#FFF]"></div>
      <Text size="xxs" variant="white" weight="semibold">{tag}</Text>
    </div>
  )
}

export default Skills;
