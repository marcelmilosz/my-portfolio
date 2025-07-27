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
      <>Automated repetitive graphic design tasks using Python and PyAutoGUI, reducing manual creation time from 2 hours to under 5 minutes per asset, significantly improving team efficiency and consistency.</>,

      <>Developed a custom full-stack application using React, Next.js, and PostgreSQL to manage billboard assets and coordinate customer-facing campaigns.</>,

      <>Maintained and optimized the company website (vixonmedia.pl) by implementing CMS updates and UX improvements, which increased customer engagement and improved SEO performance.</>,

      <>Managed a product database of over 15,000 SKUs in Subiekt GT, writing complex SQL queries to support marketing analysis, logistics coordination, and automated reporting.</>,

      <>Built Python-based scraping tools with BeautifulSoup and Selenium to automate product data extraction from supplier websites, reducing upload time by over 70%.</>,

      <>Oversaw e-commerce operations including Allegro store management, Allegro Ads optimization, product listings, and customer service — resulting in a 60% increase in sales and a higher average order value.</>,

      <>Created Excel automation templates and VBA macros to streamline catalog generation, financial reporting, and logistics planning.</>
    ]



  },
  Fotovix: {
    company: "Fotovix",
    position: "Founder & Owner",
    work_time: "10.03.2021 - 01.06.2023",
    where: "Poland, Ostrow Wielkopolski",
    job_description: [
      <>Founded and led a commercial photography business — Fotovix — specializing in product photography, 360° animations, graphic design, and portrait work, producing high-quality visuals for marketing and e-commerce.</>,

      <>Built and maintained long-term relationships with dozens of clients — including local industry leaders like Litex Promo, 3mk, and Olejnik — consistently delivering tailored creative solutions on time and within budget.</>,

      <>Developed hands-on expertise in digital product photography, studio lighting setups, and post-processing workflows, mastering tools such as Adobe Photoshop, Illustrator, and Canva to create high-impact visual content.</>,

      <>Gained cross-disciplinary experience in UI/UX, creative direction, and brand identity by designing intuitive visual assets that increased product appeal across digital platforms.</>,

      <>Strengthened soft skills through regular client collaboration, improving communication, project coordination, and the ability to translate business needs into effective visual narratives.</>
    ]

  },
  Enso: {
    company: "Enso Group",
    position: "Interships",
    work_time: "09.2017 - 10.2017",
    where: "Great Britain, Clevedon",
    job_description: [
      <>Contributed to a full-stack WordPress website for Enso as part of a UK-based internship, working in a multicultural team. Took part in front-end styling and back-end CMS configuration while strengthening remote collaboration and cross-cultural communication skills.</>
    ]

  }
}

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
                <Text size="base" weight="normal" variant="auto">- {item}</Text>
              </div>
            ))}
          </div>
        </FramerTopBottomOpacity>
      ))}
    </div>
  )
}

export default Experience;
