import { SECTION_IDS } from "@/components/common/FloatingNavbar";
import { FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import SectionTitle from "@/components/common/SectionTitle";
import { Text } from "@/components/ui/Text";
import { LayoutWrapper } from "@/components/wrappers";
import React from "react";

// type Props = {};

type Experience = {
  company: string
  position: string
  work_time: string
  where: string
  job_description: React.ReactNode[]
}

type ExperienceData = Record<string, Experience>

const CurrentExperience: ExperienceData = {
  VixonMedia: {
    company: "Vixon Media",
    position: "Full-Stack Software Engineer",
    work_time: "12.2020 - Present",
    where: "Poland, Ostrow Wielkopolski",
    job_description: [
      <>Automated repetitive graphic design tasks with Python (PyAutoGUI), cutting per-asset time from ~2 hours to less than 5 minutes and significantly boosting team throughput.</>,
      <>Rebuilt billboard asset & campaign management from Google Sheets into a React/Next.js + PostgreSQL app, reducing offer creation from 10+ minutes to a single button action.</>,
      <>Maintained vixonmedia.pl and coordinated with an external marketing partner to boost visibility across the city and region-achieving +10,000 Facebook visits and ~300 monthly site visits.</>,
      <>Managed a 15,000+ SKU product database in Subiekt GT; wrote advanced SQL for marketing analytics, logistics coordination, and automated reporting.</>,
      <>Built python scrapers (BeautifulSoup + Selenium) to pull supplier data, cutting product add time to our database from ~10 minutes to seconds.</>,
      <>Integrated Subiekt with BaseLinker and automated key sales workflows to reduce errors across order → shipping. Kept ~99.9% positive reviews and “Super Seller+” status on Allegro. Automated messages response time dropped from hours to minutes. Auto-published products from Subiekt → Allegro (no manual steps). Streamlined ops cut sales team size from 10 to 6.</>,
      <>Automated key spreadsheets with Google Apps Script, cutting manual steps in cataloging/finance/logistics and lowering error rates.</>
    ],
  },

  Fotovix: {
    company: "Fotovix",
    position: "Founder & Owner",
    work_time: "10.03.2021 - 01.06.2023",
    where: "Poland, Ostrow Wielkopolski",
    job_description: [
      <>Founded and ran a commercial photography studio specializing in product shots, 360° animations, and graphic design for e-commerce and marketing.</>,
      <>Built and retained client relationships (incl. Litex Promo, 3mk, Olejnik), delivering on time and within budget with repeat engagements.</>,
      <>Mastered studio workflows (lighting, staging) and post-processing (Photoshop/Illustrator/Canva) to produce consistent, high-impact visuals.</>,
      <>Applied a UX/brand lens to creative direction, increasing product appeal and improving presentation across digital channels.</>,
      <>Strengthened communication and project coordination skills, translating business goals into clear visual deliverables.</>,
    ],
  },

  Enso: {
    company: "Enso Group",
    position: "Internships",
    work_time: "09.2017 - 10.2017",
    where: "Great Britain, Clevedon",
    job_description: [
      <>Contributed to a full-stack WordPress site in a multicultural team-front-end styling and CMS configuration while practicing remote collaboration and cross-cultural communication.</>,
    ],
  },
};


function Experience() {
  return (
    <LayoutWrapper className="w-full min-h-screen" size="laptop" id={SECTION_IDS.experience}>

      <div className="w-full h-full">
        <SectionTitle title="Experience" subtitle="Career.exe Successfully Running" iconName="briefcase" />

        <div className="py-12 flex gap-8 max-md:gap-2 relative">

          {/* Ścieżka z kropek + kulka */}
          <div className="relative w-8 flex flex-col items-center ml-4 ">

            {/* Kulka jako sticky */}
            <FramerTopBottomOpacity className="w-6 h-6 bg-[var(--color-glass-box-hover)] rounded-full sticky top-[4rem] z-10 flex items-center justify-center animate-breathing">
              <div className="w-4 h-4 bg-[var(--color-secondary)] rounded-full shadow-[var(--color-tag-shadow)] animate-breathing"></div>
            </FramerTopBottomOpacity>


            {/* Kropkowana linia */}
            <div className="h-full w-[2px] border-l-2 border-dashed border-spacing-y-32 border-[var(--color-secondary)] z-0 opacity-25"></div>
          </div>

          {/* Twoja lista doświadczeń */}
          <ExperienceList />
        </div>

      </div>

    </LayoutWrapper>
  )
}

export function ExperienceList() {
  return (
    <div className="flex flex-col gap-12">
      {Object.entries(CurrentExperience).map(([key, exp]) => (
        <FramerTopBottomOpacity key={key} className="">

          <div className="flex md:items-center justify-between max-md:flex-col-reverse gap-4">
            <div className="flex flex-col gap-2">
              <Text size="xl" weight="normal" variant="auto">{exp.company}</Text>
              <Text size="3xl" weight="bold" variant="auto">{exp.position}</Text>
            </div>

            <div className="flex flex-col max-md:items-end">
              <Text size="sm" weight="light" variant="auto">{exp.work_time}</Text>
              <Text size="sm" weight="light" variant="auto">{exp.where}</Text>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8 px-4">
            {exp.job_description.map((item, idx) => (
              <div key={idx}>
                <Text size="base" weight="normal" variant="auto">• {item}</Text>
              </div>
            ))}
          </div>
        </FramerTopBottomOpacity>
      ))}
    </div>
  )
}

export default Experience;
