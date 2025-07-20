import SectionTitle from "@/components/common/SectionTitle";
import { LayoutWrapper } from "@/components/wrappers";
import Image from "next/image";
import React from "react";
import annualtyImg from "../../../../public/assets/images/p-annualty.png"
import myshopImg from "../../../../public/assets/images/p-myshop.png"
import myblogImg from "../../../../public/assets/images/p-blog.png"
import chatImg from "../../../../public/assets/images/p-chat.png"
import { Text } from "@/components/ui/Text";
import MyLink from "@/components/ui/Link";
import MyIcon from "@/app/icons";

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
  }
} as const

type ProjectName = keyof typeof ProjectList

function Projects() {
  return (
    <LayoutWrapper className="w-full min-h-screen relative" size="laptop" id="about-me">

      <div className="w-full h-full">
        <SectionTitle title="Projects That Shaped Me" subtitle="Both Commercial and Personal" iconName="folder" />
      </div>

      {/* <Gradient gradientName="hero" position="top-0 right-4" width="w-[500px]" /> */}

      <div className="py-12 flex flex-col h-full relative min-h-[2000px] gap-8">
        <ProjectBox name="MyShop" className="sticky top-[1rem] z-[2]" />
        <ProjectBox name="Annualty" className="sticky top-[3rem] z-[3]" />
        <ProjectBox name="Messenger" className="sticky top-[5rem] z-[4]" />
        <ProjectBox name="Blog" className="sticky top-[7rem] z-[5]" />
      </div>

    </LayoutWrapper>
  );
}

type ProjectBoxProps = {
  name: ProjectName
  className?: string
}

function ProjectBox({ name, className = "" }: ProjectBoxProps) {
  const image = ProjectList[name].img
  const title = ProjectList[name].title
  const desc = ProjectList[name].description
  const skills = ProjectList[name].skills

  const app_url = ProjectList[name].app_url ?? ""
  const app_detail = ProjectList[name].app_detail ?? ""

  const nerd_stats = ProjectList[name].nerd_stats ?? ""

  return (
    <div style={{ background: "var(--color-project-box-gradient)" }} className={`backdrop-blur-xl w-full min-h-[250px] rounded-3xl p-12 max-md:p-6 shadow-[var(--color-project-box-shadow)] flex gap-8 items-center overflow-hidde ${className}`}>

      <div className="overflow-hidden min-w-[300px] h-[250px] max-md:hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col w-full">

        <div className="w-full flex items-center justify-between gap-4">
          <div className="w-full py-4 opacity-50 overflow-x-auto whitespace-nowrap no-scrollbar flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-glass-box)]  px-2 py-1 rounded-full border border-[var(--color-white)]"
              >
                <Text size="xs">{skill}</Text>
              </div>
            ))}
          </div>

          <div className="opacity-50 hover:opacity-100 relative group">
            <MyIcon iconName="info" iconSize="lg" iconStroke="1.5" />

            <div className="w-[200px] hidden group-hover:flex min-h-max p-3 bg-[var(--color-black)] absolute top-[-10px] right-[30px] rounded-md rounded-tr-none flex-col gap-2">
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

            {app_detail &&
              <Text variant="muted" size="xs">{app_detail}</Text>
            }

            {app_url &&
              <MyLink href={app_url} target="_blank" />
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects;
