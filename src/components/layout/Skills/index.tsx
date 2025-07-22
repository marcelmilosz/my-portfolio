import MyIcon, { IconNames, IconVariantProps } from "@/app/icons";
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import { FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
import { SectionSummaryText, Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import React from "react";

// type Props = {};

function Skills() {
  return (
    <LayoutWrapper className="w-full min-h-max" size="laptop" id="about-me">

      <div className="w-full h-full">
        <SectionTitle title="My Skillset" subtitle="Languages, Tools & Technologies" iconName="code" />
      </div>

      <div className="py-12 flex flex-col gap-24">
        <FramerTopBottomOpacity className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Web / Front-end </Text>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-full gap-4">

            <SkillBox iconName="p_nextjs" skillName="Next" tag="Advanced" />
            <SkillBox iconName="p_react" skillName="React" tag="Advanced" />
            <SkillBox iconName="p_js" skillName="JavaScript" tag="Advanced" />
            <SkillBox iconName="p_ts" iconFill={false} skillName="TypeScript" tag="Intermediate" />
            <SkillBox iconName="p_tailwind" skillName="Tailwind" tag="Advanced" />
            <SkillBox iconName="p_html" skillName="HTML" />
            <SkillBox iconName="p_css" skillName="CSS" />
            <SkillBox iconName="p_scss" skillName="SASS" />
            <SkillBox iconName="p_bootstrap" skillName="Bootstrap" />
            <SkillBox iconName="p_bulma" skillName="Bulma" />
            <SkillBox iconName="p_jest" skillName="Jest" />
          </div>
        </FramerTopBottomOpacity>


        <FramerTopBottomOpacity className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> UI/UX & Graphics </Text>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-full gap-4">
            <SkillBox iconName="s_figma" skillName="Figma" tag="Intermediate" />
            <SkillBox iconName="s_canva" skillName="Canva" tag="Intermediate" />
            <SkillBox iconName="s_ps" skillName="Adobe Photoshop" tag="Intermediate" />
            <SkillBox iconName="s_ai" skillName="Adobe Illustrator" tag="Intermediate" />
            <SkillBox iconName="s_xd" skillName="Adobe Xd" tag="Familiar" />
          </div>
        </FramerTopBottomOpacity>

        <FramerTopBottomOpacity className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Web / Back-end </Text>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-full gap-4">
            <SkillBox iconName="p_django" skillName="Django" tag="Advanced" />
            {/* <SkillBox iconName="p_django_rest" skillName="Django REST framework" /> */}
            <SkillBox iconName="p_flask" skillName="Flask (Python)" iconVariant="auto" />
            <SkillBox iconName="p_php" iconFill={false} skillName="Php" />
            <SkillBox iconName="p_google_cloud" skillName="Google Cloud" />
            <SkillBox iconName="p_firebase" skillName="Firebase" />
            <SkillBox iconName="p_heroku" skillName="Heroku" tag="Intermediate" />
            <SkillBox iconName="p_nodejs" skillName="Node.js" />
            <SkillBox iconName="p_postman" skillName="Postman" />
            <SkillBox iconName="p_sql" skillName="MySQL" tag="Intermediate" />
            <SkillBox iconName="p_postgres" skillName="PostgreSQL" tag="Intermediate" />
            <SkillBox iconName="p_mongo" skillName="Mongo" tag="Intermediate" />
            <SkillBox iconName="p_aws" skillName="AWS" />
            <SkillBox iconName="p_docker" skillName="Docker" />
          </div>
        </FramerTopBottomOpacity>

        <FramerTopBottomOpacity className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Data Science / Statistics </Text>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-full gap-4">
            <SkillBox iconName="ds_python" skillName="Python" tag="Advanced" />
            <SkillBox iconName="ds_numpy" skillName="Numpy" tag="Intermediate" />
            <SkillBox iconName="ds_pandas" skillName="Pandas" tag="Intermediate" />
            <SkillBox iconName="ds_R" skillName="R" tag="Intermediate" />
            <SkillBox iconName="ds_excel" skillName="Excel" tag="Intermediate" />
            <SkillBox iconName="ds_scikit" skillName="Scikit learn" />
            <SkillBox iconName="ds_selenium" skillName="Selenium" tag="Intermediate" />
            <SkillBox iconName="ds_jupyter" skillName="Jupyter" />
          </div>
        </FramerTopBottomOpacity>

        <FramerTopBottomOpacity className="flex flex-col gap-4">
          <Text size="2xl" weight="semibold" variant="auto"> Bare Metal & Beyond </Text>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-full gap-4">
            <SkillBox iconName="l_cpp" skillName="C++" tag="Intermediate" />
            <SkillBox iconName="l_c" skillName="C" tag="Learning" />
            <SkillBox iconName="l_asm" skillName="Assembly Language (Nasm)" tag="Learning" />
            <SkillBox iconName="l_arduino" skillName="Arduino" />
          </div>
        </FramerTopBottomOpacity>
      </div>



      <FramerTopBottomOpacity>
        <SectionSummaryText>
          Each skill listed here is either one I excel at, have used in commercial projects, or explored through personal projects—always with at least a solid grasp of the fundamentals.
        </SectionSummaryText>
      </FramerTopBottomOpacity>

    </LayoutWrapper>
  )
}

type SkillBoxProps = {
  skillName?: string
  iconName: IconNames
  iconFill?: boolean
  iconVariant?: IconVariantProps
  tag?: Tag
}

function SkillBox({ iconName, iconVariant = "auto", iconFill = true, skillName = "", tag = "" }: SkillBoxProps) {
  return (
    <div className={`bg-[var(--color-glass-box)] px-8 p-7 max-md:px-4 max-sm:px-2  relative overflow-hidden ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} flex flex-col gap-2 items-center group`}>

      {tag &&
        <SkillTag tag={tag} />
      }
      <div className="grayscale-[100%] group-hover:grayscale-0 transition-all duration-200">
        <MyIcon iconName={iconName} iconFill={iconFill} iconSize="skillset" iconVariant={iconVariant} />
      </div>

      <div className="hidden group-hover:flex absolute bottom-[10px] left-0 mx-auto w-full items-center justify-center px-4   transition-all duration-200">
        <Text size="xs" weight="semibold" variant="muted" className="group-hover:text-white transition-colors">{skillName}</Text>
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
    <div style={{ background: "var(--color-secondary)" }} className="rounded-full p-1 absolute top-2 left-2 px-2 flex gap-1 items-center shadow-[var(--color-tag-shadow)] z-10">
      <div className="w-1 h-1 rounded-full bg-[#FFF]"></div>
      <Text size="xxs" variant="white" weight="semibold">{tag}</Text>
    </div>
  )
}

export default Skills;
