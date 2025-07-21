import React from "react";
import { Text } from "../ui/Text";
import MyIcon, { IconNames } from "@/app/icons";
import { GlassBox } from "../wrappers";
import { FramerTopBottomOpacity } from "./FramerWrappers";

type Props = {
  title: string,
  subtitle?: string,
  iconName?: IconNames | ""
  className?: string
};

function SectionTitle({ title, subtitle, iconName = "", className }: Props) {
  return (
    <FramerTopBottomOpacity className={`flex gap-4 items-center ${className ?? "pt-8 "}`}>
      {/* pt-4 is needed for scroll to better behaviour */}

      {iconName &&
        <GlassBox rounded="xl" className="min-w-[56px] min-h-[56px] flex items-center justify-center" p="none">
          <MyIcon iconName={iconName} iconVariant="auto" iconSize="xl" iconStroke="2" />
        </GlassBox>
      }

      <div className="flex flex-col">
        <Text size="3xl" weight="semibold">{title}</Text>
        {subtitle &&
          <Text size="base" weight="light" variant="auto">{subtitle}</Text>
        }
      </div>
    </FramerTopBottomOpacity>
  )
}

export default SectionTitle;
