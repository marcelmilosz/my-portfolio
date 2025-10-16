'use client'
import { BORDER_RADIUSES, DEFAULT_BORDER_RADIUS } from "@/components/_shared";
import MyIcon from "@/app/icons";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { GlassBox, LayoutWrapper } from "@/components/wrappers";
import { useThemeStore } from "@/store/useThemeStore";
import React from "react";
import NavbarMenuView from "./NavbarMenuView";
import { SECTION_IDS, SECTION_LABELS } from "@/components/common/FloatingNavbar";
import { ScrollTo } from "@/components/common/ScrollTo";

// type Props = {};

export type NavbarItem = {
  key: keyof typeof SECTION_IDS
  text: string
}

export const NAVBAR_ITEMS: NavbarItem[] = (Object.entries(SECTION_IDS) as [keyof typeof SECTION_IDS, string][]).map(
  ([key]) => ({
    key,
    text: SECTION_LABELS[key],
  })
)


function Navbar() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme)
  const theme = useThemeStore((s) => s.theme)

  return (
    <LayoutWrapper
      className={`h-[var(--navbar-height)] max-lg:h-[var(--navbar-height-mobile)] ${BORDER_RADIUSES[DEFAULT_BORDER_RADIUS]}`}
    >

      <nav className="h-full w-full flex gap-4 justify-between items-center">

        {/* Logo  */}
        <div className="w-full max-w-[200px]">
          <Text size="3xl" weight="bold">
            Marcel
            <span className="">.</span>
          </Text>
        </div>

        {/* Menu  */}
        <GlassBox className="flex justify-between gap-1 overflow-hidden transition-all duration-200 w-max max-lg:hidden" rounded="full" p="none">
          {NAVBAR_ITEMS.map((item) => {
            if (item.key === "landing") return null
            if (item.key === "hobbies") return null
            if (item.key === "mystats") return null

            return (
              <NavbarLink key={item.key} id={item.key}>
                {item.text}
              </NavbarLink>
            )
          }
          )}
        </GlassBox>

        {/* Actions  */}
        <div className="flex gap-4 w-full max-w-[200px] items-center justify-end">
          <Button onClick={() => toggleTheme()} shape="circle" rounded="full" variant="glass" p="sm" className="min-h-[40px] min-w-[40px] max-lg:hidden">
            <MyIcon iconName={theme === "dark" ? "moon" : "sun"} iconSize="md" iconStroke="1.5" />
          </Button>
          <ScrollTo id="contact">
            <Button rounded="full" variant="glass" p="md" className="max-[350px]:hidden">Contact me</Button>
          </ScrollTo>
          <NavbarMenuView />
        </div>
      </nav>
    </LayoutWrapper>
  );
}

type NavbarLinkProps = {
  children: React.ReactNode
  id: string
}

function NavbarLink({ children, id = "" }: NavbarLinkProps) {
  return (
    <ScrollTo id={id}>
      <Text weight="normal" className="whitespace-nowrap select-none p-2 px-5 rounded-lg hover:bg-[var(--color-glass-box-hover)] cursor-pointer duration-100 transition-all">{children}</Text>
    </ScrollTo>
  )
}

export default Navbar;
