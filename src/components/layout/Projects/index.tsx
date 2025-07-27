import SectionTitle from "@/components/common/SectionTitle";
import { LayoutWrapper } from "@/components/wrappers";
import Image from "next/image";
import React from "react";
import annualtyImg from "../../../../public/assets/images/p-annualty.png"
import myshopImg from "../../../../public/assets/images/p-myshop.png"
import myblogImg from "../../../../public/assets/images/p-blog.png"
import chatImg from "../../../../public/assets/images/p-chat.png"
import pacmanImg from "../../../../public/assets/images/p-pacman.png"
import colorpickerImg from "../../../../public/assets/images/p-colorpicker.png"
import weatherImg from "../../../../public/assets/images/p-weather.png"
import yahooImg from "../../../../public/assets/images/p-yahoo.png"
import oscarImg from "../../../../public/assets/images/p-oscar.png"
import frndImg from "../../../../public/assets/images/p-frnd.png"
import { SectionSummaryText, Text } from "@/components/ui/Text";
import MyLink from "@/components/ui/Link";
import MyIcon from "@/app/icons";
import Link from "next/link";
import { useStickyState } from "@/hooks/useStickyObserver";
import { FramerTopBottomOpacity } from "@/components/common/FramerWrappers";
import { SECTION_IDS } from "@/components/common/FloatingNavbar";

// 🔠 Typ i obiekt obrazów
const ProjectList = {
  Annualty: {
    img: annualtyImg,
    title: "Annualty",
    description:
      "Full-stack SaaS platform inspired by Booksy, designed to manage clients, appointments, and business operations for service providers.",

    skills: ["Next.js", "React", "Scss", "Stripe Payments", "SQL", "Heroku", "Django"],
    app_url: "https://annualty.app",
    app_detail: "Feel free to explore the app using this demo credentials: owner1@gmail.com / test1234",
    nerd_stats: {
      commits: "250+",
      type: "Commercial / Personal",
      time_spent: "Built over 6 months of evening sessions",
    }
  },
  MyShop: {
    img: myshopImg,
    title: "Loop",
    description:
      "Complete full-stack e-commerce solution built from scratch, featuring product listings, user reviews, shopping system, favourites, recently viewed items, and a powerful admin dashboard.",

    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind", "Django"],
    app_url: "https://my-shop-one-vert.vercel.app", // ← zmień jeśli nie masz hostingu
    app_detail: "Demo site here (currently in Polish language)",
    nerd_stats: {
      commits: "150+",
      type: "Commercial / Personal",
      time_spent: "Built over 3 months of evening sessions"
    }
  },
  Blog: {
    img: myblogImg,
    title: "My Blog",
    description:
      "A simple full-stack blog built to deepen my understanding of content-driven applications, Markdown parsing, and modern web publishing platforms. Focused on clean structure, SEO, and performance.",
    skills: ["Next.js", "React", "TypeScript", "Sass", "Django", "Mongo"],
    app_url: "https://my-blog-seven-gamma.vercel.app/",
    app_detail: "Created as a learning project to explore blog architecture and Markdown rendering.",
    nerd_stats: {
      commits: "20+",
      type: "Personal - Learning Purpose",
      time_spent: "1 week"
    }
  },
  Messenger: {
    img: chatImg,
    title: "Messenger (Simplified)",
    description:
      "A real-time chat application built to explore how Facebook Messenger works under the hood. This project helped me understand WebSocket communication, message synchronization, and user presence in modern chat systems.",
    skills: ["React", "Firebase", "Firestore", "WebSockets"],
    app_url: "https://github.com/marcelmilosz/React-LiveChat-Firebase",
    app_detail: "Learning project focused on mastering WebSockets and building a Messenger-like real-time experience from scratch.",
    nerd_stats: {
      commits: "30+",
      type: "Personal - Learning Purpose",
      time_spent: "2 weeks"
    }
  },

  Colorpicker: {
    img: colorpickerImg,
    title: "Color Picker (Course)",
    description:
      "A sleek color-picking tool developed during a React course to grasp component structure, state management, and local storage handling. Practical, reusable, and a solid intro to design systems.",
    skills: ["React", "Local Storage", "CSS"],
    app_url: "https://github.com/marcelmilosz/React-ColorPicker", // zmień jeśli zły link
    app_detail: "Built while learning React fundamentals — turns out choosing colors is harder than writing the code.",
    nerd_stats: {
      commits: "20+",
      type: "Personal - Udemy Course",
      time_spent: "1 month of learning"
    }
  },
  WeatherApp: {
    img: weatherImg,
    title: "Weather App",
    description:
      "A minimal weather-tracking application built to explore external APIs and real-time data fetching. Developed as a lightweight personal tool for checking forecasts and practicing clean API consumption.",
    skills: ["JavaScript", "REST API", "Fetch"],
    app_url: "https://github.com/marcelmilosz/React-WeatherApp",
    app_detail: "Originally built to teach myself how to work with real-world weather APIs — and maybe decide whether to bring an umbrella.",
    nerd_stats: {
      commits: "10+",
      type: "Personal - Just for Fun",
      time_spent: "3 days"
    }
  },
  Frnd: {
    img: frndImg,
    title: "Frnd (Tinder Clone)",
    description:
      "A dating app experiment built to understand how Tinder-like platforms handle swiping logic, real-time matches, and user interaction flows. No roses, just algorithms.",
    skills: ["Node.js", "JavaScript", "MongoDB"],
    app_url: "",
    app_detail: "Created as a fun technical deep dive into matchmaking mechanics and user-based recommendation systems.",
    nerd_stats: {
      commits: "25+",
      type: "Personal -  Built to reverse-engineer the logic behind Tinder",
      time_spent: "7 days"
    }
  },
  YahooCharts: {
    img: yahooImg,
    title: "Yahoo Charts Scraper",
    description:
      "A Python-powered tool that scrapes financial data from Yahoo Finance, logs it into Excel sheets, and visualizes key trends using interactive charts. ",
    skills: ["Python", "REST API", "Flask", "Excel"],
    app_url: "https://github.com/marcelmilosz/YahooChartsScraper",
    app_detail: "Created out of curiosity for how finance apps fetch and present real-time stock data.",
    nerd_stats: {
      commits: "5+",
      type: "Personal - Built out of passion for finance",
      time_spent: "3 days"
    }
  },
  Oscar: {
    img: oscarImg,
    title: "Massage Therapist Website",
    description:
      "A fully responsive, modern landing page designed for a massage therapist client. Built to showcase services, establish online presence, and provide essential contact and location details.",
    skills: ["Next.js", "React"],
    app_url: "https://oskar-kubiak-marcelmiloszs-projects.vercel.app/",
    app_detail: "Individually crafted project for a client in the wellness industry.",
    nerd_stats: {
      commits: "20+",
      type: "Freelance - Client work",
      time_spent: "7 days"
    }
  },
  Pacman: {
    img: pacmanImg,
    title: "Pac-Man (Vanilla JS Edition)",
    description:
      "Built as a break from frameworks, this pure JavaScript rendition of Pac-Man was my way of saying 'I still remember how the DOM works'. No React, no build tools — just ghosts, dots, and good old-fashioned fun.",
    skills: ["HTML", "CSS", "JavaScript"],
    app_url: "https://pac-man-psi.vercel.app/",
    app_detail: "Go ahead and play — I'll wait.",
    nerd_stats: {
      commits: "10+",
      type: "Personal - Just for Fun",
      time_spent: "3 days"
    }
  },
} as const

type ProjectName = keyof typeof ProjectList

const projectNames: ProjectName[] = [
  "MyShop",
  "Annualty",
  "Messenger",
  "Frnd",
  "Blog",
  "Colorpicker",
  "WeatherApp",
  "Oscar",
  "YahooCharts",
  "Pacman",
]


function Projects() {
  return (
    <LayoutWrapper className="w-full min-h-max relative" size="laptop" id={SECTION_IDS.projects}>

      <div className="w-full h-full">
        <SectionTitle title="Projects That Shaped Me" subtitle="Both Commercial and Personal" iconName="folder" />
      </div>

      {/* <Gradient gradientName="hero" position="top-0 right-4" width="w-[500px]" /> */}

      <div className="py-12 flex flex-col h-full relative min-h-max gap-8">
        {projectNames.map((name, index) => {
          const stickyTop = 16 + index * 16 // each next by 1rem (16px)

          return (
            <ProjectBox
              key={name}
              name={name}
              stickyTop={stickyTop}
              index={index}
              className={`sticky z-[${index + 1}]`}

            />
          )
        })}
      </div>

      <FramerTopBottomOpacity>
        <SectionSummaryText>
          These are just a few of the many projects I&apos;ve built — both commercial and personal. Some were developed for real clients, others were born out of curiosity or completed as part of deep-dive courses on platforms like Udemy or Coursera. Many more sit quietly in my GitHub, waiting for their moment to shine.
        </SectionSummaryText>
        <br /><br />
        <SectionSummaryText >You can find more projects on my github: <Link target="_blank" href="https://github.com/marcelmilosz?tab=repositories" className="text-[var(--color-black-auto)]">https://github.com/marcelmilosz?tab=repositories </Link></SectionSummaryText>
      </FramerTopBottomOpacity>

    </LayoutWrapper>
  );
}

type ProjectBoxProps = {
  name: ProjectName
  className?: string
  stickyTop: number
  index: number
}

function ProjectBox({ name, className = "", stickyTop, index }: ProjectBoxProps) {

  const { ref, isSticky } = useStickyState(stickyTop) // 20px margines górny

  const image = ProjectList[name].img
  const title = ProjectList[name].title
  const desc = ProjectList[name].description
  const skills = ProjectList[name].skills

  const app_url = ProjectList[name].app_url ?? ""
  const app_detail = ProjectList[name].app_detail ?? ""

  const nerd_stats = ProjectList[name].nerd_stats ?? ""

  const scaleFactor = isSticky ? 1 - (projectNames.length - index) * 0.02 : 1

  // const scaleClass = isSticky ? `scale-[${1 - (projectNames.length - index) * 0.02}]` : "scale-100"

  return (
    <div
      ref={ref}
      className={`sticky ${className}`}
      style={{ top: `${1 + index}rem` }}
    >
      <div
        className="backdrop-blur-xl w-full min-h-[250px] rounded-3xl p-8 max-md:p-6 shadow-[var(--color-project-box-shadow)] flex gap-8 items-center"
        style={{
          background: "var(--color-project-box-gradient)",
          transform: `scale(${scaleFactor})`,
          transition: "transform 0.3s ease-in-out",
          willChange: "transform",
        }}
      >
        <div className="overflow-hidden min-w-[350px] max-w-[350px] h-[250px] max-md:hidden">
          <Image
            src={image}
            alt={name}
            width={350}
            height={250} // Dopasuj do wysokości kontenera!
            className="w-[350px] h-[250px] object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full py-4 opacity-50 overflow-x-auto whitespace-nowrap no-scrollbar flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 rounded-full border border-[var(--color-white-auto)]"
                >
                  <Text size="xs" weight="medium" variant="auto">{skill}</Text>
                </div>
              ))}
            </div>

            <div className="opacity-50 hover:opacity-100 relative group">
              <MyIcon iconName="info" iconSize="lg" iconStroke="1.5" />
              <div className="w-[200px] hidden group-hover:flex min-h-max p-3 bg-[var(--color-black-auto)] absolute top-[-10px] right-[30px] rounded-md rounded-tr-none flex-col gap-2">
                <Text variant="auto" size="xs"><b>Type:</b> {nerd_stats.type}</Text>
                <Text variant="auto" size="xs"><b>Commits:</b> {nerd_stats.commits}</Text>
                <Text variant="auto" size="xs"><b>Time spent:</b> {nerd_stats.time_spent}</Text>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Text weight="bold" size="3xl" className="mb-2">{title}</Text>
            <Text weight="normal" size="sm" variant="auto">{desc}</Text>

            <div className="flex flex-col gap-1 pt-2 mt-8 items-end">
              {app_detail && (
                <Text variant="muted" size="xs" className="text-right">{app_detail}</Text>
              )}
              {app_url && <MyLink href={app_url} target="_blank" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
