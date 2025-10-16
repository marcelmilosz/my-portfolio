"use client";
import { useEffect, useState } from "react";
import { Text } from "../ui/Text";
import { FramerTopBottomOpacity } from "./FramerWrappers";

export const SECTION_IDS = {
  landing: "landing",
  "about-me": "about-me",
  experience: "experience",
  mystats: "mystats",
  diplomas: "diplomas",
  projects: "projects",
  skills: "skills",
  hobbies: "hobbies",
} as const;

export const SECTION_LABELS: Record<keyof typeof SECTION_IDS, string> = {
  landing: "Home",
  "about-me": "About Me",
  experience: "Experience",
  mystats: "My Stats",
  diplomas: "Certificates",
  projects: "Projects",
  skills: "Skills",
  hobbies: "Hobbies"
};

export function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.landing);

  const sectionEntries = Object.entries(SECTION_IDS) as [keyof typeof SECTION_IDS, string][];

  useEffect(() => {
    const handleScroll = () => {
      for (const [, id] of sectionEntries) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionEntries]);

  return (
    <FramerTopBottomOpacity className="fixed max-md:hidden right-6 max-xl:right-3 top-1/2 -translate-y-1/2 flex flex-col items-center z-50 rounded-full">
      {sectionEntries.map(([key, id]) => (
        <div key={id} className="relative group">
          {/* Tooltip z tekstem */}
          <div className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-[var(--color-glass-box)] shadow-[var(--color-fn-shadow)] opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
            <Text variant="auto" weight="normal" size="xs">{SECTION_LABELS[key]}</Text>
          </div>

          {/* Kropka-button */}
          <button
            onClick={() => {
              const el = document.getElementById(id)
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer
                ${activeSection === id
                ? "bg-[var(--color-fn-active)] scale-150 shadow-[var(--color-fn-shadow)]"
                : "bg-[var(--color-fn-not-active)] opacity-50 hover:opacity-80  hover:scale-125"}
    `}
            aria-label={`Scroll to ${SECTION_LABELS[key]}`}
          />
        </div>
      ))}
    </FramerTopBottomOpacity>
  );
}
