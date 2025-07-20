import React from "react";
import { Text } from "../ui/Text";
import MyIcon, { IconNames } from "@/app/icons";
import { GlassBox } from "../wrappers";

type Props = {
  title: string,
  subtitle?: string,
  iconName?: IconNames
};

function SectionTitle({ title, subtitle, iconName = "hash" }: Props) {
  return (
    <div className="flex gap-4 items-center pt-8">
      {/* pt-4 is needed for scroll to better behaviour */}

      <GlassBox rounded="xl" className="w-[56px] h-[56px] flex items-center justify-center" p="none">
        <MyIcon iconName={iconName} iconVariant="auto" iconSize="xl" iconStroke="2" />
      </GlassBox>

      <div className="flex flex-col">
        <Text size="3xl" weight="semibold">{title}</Text>
        {subtitle &&
          <Text size="base" weight="light" variant="auto">{subtitle}</Text>
        }
      </div>
    </div>
  )
}

export default SectionTitle;
