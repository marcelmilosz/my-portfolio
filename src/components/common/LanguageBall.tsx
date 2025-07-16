import MyIcon, { IconNames } from "@/app/icons";
import React from "react";

type Props = {
  iconName: IconNames
};

function LanguageBall({ iconName }: Props) {

  const sizeConstraints = `min-w-[var(--language-ball-h)] min-h-[var(--language-ball-h)] w-[var(--language-ball-h)] h-[var(--language-ball-h)]`
  const gradientBg = `var(--language-ball-bg)`
  const shadow = `shadow-[var(--language-ball-shadow)]`


  return (
    <div className={`${sizeConstraints} ${shadow} bg-[var(--language-ball-bg)] backdrop-blur-2xl flex items-center justify-center rounded-full`} style={{ background: gradientBg }}>
      <MyIcon iconName={iconName} iconSize="xl" iconVariant="auto" iconFill />
    </div>
  );
}

export default LanguageBall;
