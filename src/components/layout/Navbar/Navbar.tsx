'use client'
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import MyIcon from "@/app/icons";
import { Button } from "@/components/ui/Button";
import { Gradient } from "@/components/ui/Gradient";
import { Text } from "@/components/ui/Text";
import { GlassBox, LayoutWrapper } from "@/components/wrappers";
import { useThemeStore } from "@/store/useThemeStore";
import React from "react";

// type Props = {};

function Navbar() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme)
  const theme = useThemeStore((s) => s.theme)

  return (
    <LayoutWrapper
      className={`h-[var(--navbar-height)] ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]} z-10`}
    >

      <Gradient gradientName="hero" position="left-1/3 top-[-100px]" width="w-[1500px]" />

      <div className="h-full w-full flex gap-4 justify-between items-center">

        {/* Logo  */}
        <div>
          <Text size="3xl" weight="bold">
            Marcel
            <span className="">.</span>
          </Text>
        </div>

        {/* Menu  */}
        <nav>
          <GlassBox className="flex justify-between gap-6 overflow-hidden px-4 transition-all duration-200" rounded="full" p="sm">
            <NavbarLink>Home</NavbarLink>
            <NavbarLink>About Me</NavbarLink>
            <NavbarLink>Projects</NavbarLink>
          </GlassBox>
        </nav>

        {/* Actions  */}
        <div className="flex gap-4">
          <Button onClick={() => toggleTheme()} shape="circle" rounded="full" variant="glass" p="sm" className="min-h-[50px] min-w-[50px]">
            <MyIcon iconName={theme === "dark" ? "moon" : "sun"} iconSize="md" />
          </Button>
          <Button rounded="full" variant="glass" p="lg">Contact me</Button>
        </div>
      </div>
    </LayoutWrapper>
  );
}

type NavbarLinkProps = {
  children: React.ReactNode
}
function NavbarLink({ children }: NavbarLinkProps) {
  return (
    <Text weight="light" className="p-2 rounded-lg cursor-pointer duration-100 transition-all">{children}</Text>
  )
}

export default Navbar;
