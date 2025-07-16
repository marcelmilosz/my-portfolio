'use client'
import MyIcon from "@/app/icons";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import Link from "next/link";
import React, { useState } from "react";
import { NAVBAR_ITEMS } from "./Navbar";
import { useThemeStore } from "@/store/useThemeStore";
import { motion } from "framer-motion";
import { LayoutWrapper } from "@/components/wrappers";

// type Props = {};

function NavbarMenuView() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setNavbarOpen(!navbarOpen)} shape="circle" rounded="full" variant="glass" p="sm" className="min-h-[40px] min-w-[40px] md:hidden">
        <MyIcon iconName={"menu"} iconSize="md" />
      </Button>

      {(navbarOpen) &&
        <NavbarMobile closeNavbar={() => setNavbarOpen(false)} />
      }
    </>
  )
}

function NavbarMobile({ closeNavbar }: { closeNavbar: () => void }) {
  const toggleTheme = useThemeStore((s) => s.toggleTheme)
  const theme = useThemeStore((s) => s.theme)

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute bottom-0 left-0 min-h-screen overflow-auto w-full bg-[var(--color-navbar-mobile-glass-box)] z-50 backdrop-blur-2xl"
    >
      <LayoutWrapper>

        {/* Action buttons  */}
        <div className="w-full h-[var(--navbar-height-mobile)] flex  items-center justify-end gap-4">
          <Button onClick={() => toggleTheme()} shape="circle" rounded="full" variant="glass" p="sm" className="min-h-[40px] min-w-[40px]">
            <MyIcon iconName={theme === "dark" ? "moon" : "sun"} iconSize="md" />
          </Button>
          <Button onClick={() => closeNavbar()} shape="circle" rounded="full" variant="glass" p="sm" className="min-h-[40px] min-w-[40px]">
            <MyIcon iconName={"x"} iconSize="md" />
          </Button>
        </div>

        {/* Menu Itmes  */}
        <div className="flex flex-col gap-2">
          {NAVBAR_ITEMS.map((item) => (
            <NavbarMobileLink key={item.key} href={item.href}>
              {item.text}
            </NavbarMobileLink>
          ))}
          <Button rounded="full" variant="glass" p="md">Contact me</Button>
        </div>

      </LayoutWrapper>
    </motion.div>
  )
}

type NavbarMobileLinkProps = {
  children: React.ReactNode
  href: string
}

function NavbarMobileLink({ children, href = "" }: NavbarMobileLinkProps) {
  return (
    <Link href={href}>
      <Text weight="normal" size="lg" className="whitespace-nowrap select-none p-3 rounded-lg hover:bg-[var(--color-glass-box-hover)] cursor-pointer duration-100 transition-all">{children}</Text>
    </Link>
  )
}

export default NavbarMenuView;
