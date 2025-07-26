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
  job_description: string[]
}

type ExperienceData = Record<string, Experience>

const CurrentExperience: ExperienceData = {
  VixonMedia: {
    company: "Vixon Media",
    position: "Full-Stack Software Engineer",
    work_time: "12.2020 - Present",
    where: "Poland, Ostrow Wielkopolski",
    job_description: [
      "Automated repetitive graphic design tasks using Python and PyAutoGUI, reducing manual creation time from 2 hours per asset to under 5 minutes, significantly improving team efficiency and consistency.",
      "Developed a custom full-stack application using React, Next.js, and PostgreSQL for internal management of billboard assets and customer-facing campaigns. This streamlined data access and improved task coordination across departments.",
      "Maintained and optimized company website (vixonmedia.pl) by implementing CMS updates and UX improvements, increasing customer engagement and improving SEO metrics.",
      "Managed product databases in Subiekt GT, including writing complex SQL queries to support marketing insights, logistics coordination, and automated reporting.",
      "Built Python-based data scraping tools using BeautifulSoup and Selenium, which enabled fast extraction of product information from supplier websites, reducing product upload time by over 70%.",
      "Oversaw e-commerce operations including Allegro store management, Allegro Ads optimization, product listings, and customer service — resulting in measurable improvements in conversion rates and average order value.",
      "Created Excel-based automation templates and VBA macros to facilitate product catalog generation, financial reporting, and logistics planning."
    ]
  },
  Fotovix: {
    company: "Fotovix",
    position: "Founder & Owner",
    work_time: "10.03.2021 - 01.06.2023",
    where: "Poland, Ostrow Wielkopolski",
    job_description: [
      "Founded and led a commercial photography business — Fotovix — specializing in product photography, 360° animations, graphic design, and portrait work, delivering high-quality visuals for marketing and e-commerce.",
      "Built and maintained strong relationships with dozens of clients, including leading local companies such as Litex Promo, 3mk, olejnik, consistently delivering tailored creative solutions on time and within budget.",
      "Refined hands-on expertise in digital product photography, lighting setups, and post-processing workflows — mastering tools such as Adobe Photoshop, Illustrator, and Canva to deliver high-impact visual content.",
      "Gained valuable cross-disciplinary experience in UI/UX, creative direction, and brand identity — designing intuitive visual assets that enhanced product appeal across online platforms.",
      "Developed strong soft skills through regular client interactions — improving communication, project coordination, and the ability to translate client needs into effective visual solutions."
    ]
  },
  Enso: {
    company: "Enso Group",
    position: "Interships",
    work_time: "09.2017 - 10.2017",
    where: "Great Britain, Clevedon",
    job_description: [
      "Collaborated in a multicultural team on a full-stack WordPress website for Enso during a UK-based internship. Contributed to both front-end styling and back-end CMS configuration while enhancing cross-cultural communication and remote teamwork skills."
    ]
  }
}

function Experience() {
  return (
    <LayoutWrapper className="w-full min-h-screen" size="laptop" id="about-me">

      <div className="w-full h-full">
        <SectionTitle title="Experience" subtitle="Career.exe Successfully Running" iconName="briefcase" />

        <ExperienceList />

      </div>

    </LayoutWrapper>
  )
}

export function ExperienceList() {
  return (
    <div className="py-12 flex flex-col gap-12">
      {Object.entries(CurrentExperience).map(([key, exp]) => (
        <FramerTopBottomOpacity key={key} className="">

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <Text size="xl" weight="normal" variant="auto">{exp.company}</Text>
              <Text size="3xl" weight="bold" variant="auto">{exp.position}</Text>
            </div>

            <div className="flex flex-col">
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
