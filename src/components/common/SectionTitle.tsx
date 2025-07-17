import React from "react";
import { Text } from "../ui/Text";
import MyIcon from "@/app/icons";
import { GlassBox } from "../wrappers";

type Props = {
  title: string,
  subtitle?: string,
};

function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="flex gap-4 items-center pt-4">
      {/* pt-4 is needed for scroll to better behaviour */}

      <GlassBox rounded="full" className="w-[56px] h-[56px] flex items-center justify-center" p="none">
        <MyIcon iconName="hash" iconVariant="auto" iconSize="xl" iconStroke="2" />
      </GlassBox>

      <div className="flex flex-col">
        <Text size="3xl" weight="semibold">{title}</Text>
        {subtitle &&
          <Text size="base" weight="light" variant="primary">{subtitle}</Text>
        }
      </div>
    </div>
  )
}

export default SectionTitle;
