import {
  HeroAction,
  HeroContent,
  HeroFocus,
  HeroStat,
  MarqueeItem,
} from "@/modules/heroComponents/common/hero.types";


export const HERO_CONTENT: HeroContent = {
  status: "Available · Software Developer",

  title: {
    line1: "Building Modern",
    highlight: "Applications",
    line2: "with Java &",
    line3: "Spring Boot",
  },

  description:
    "Software Developer focused on FullStack Development, enterprise application modernization and scalable web systems.",
};


export const HERO_STATS: HeroStat[] = [
  {
    id: 1,
    value: "1+",
    label: "Year in Industry",
  },
  {
    id: 2,
    value: "5+",
    label: "Tech Stacks",
  },
  {
    id: 3,
    value: "1",
    label: "Projects Built",
  },
];


export const HERO_ACTIONS: HeroAction[] = [
  {
    id: 1,
    label: "View My Work",
    href: "#projects",
    variant: "primary",
  },
  {
    id: 2,
    label: "Download Resume",
    href: "/resume.pdf",
    variant: "secondary",
  },
];


export const HERO_FOCUS: HeroFocus[] = [
  {
    id: 1,
    title: "Java 21",
  },
  {
    id: 2,
    title: "Spring Boot",
  },
  {
    id: 3,
    title: "Next.js",
  },
  {
    id: 4,
    title: "TypeScript",
  },
  {
    id: 5,
    title: "PostgreSQL",
  },
  {
    id: 6,
    title: "Japanese Learning",
  },
];

export const HERO_MARQUEE_ITEMS: MarqueeItem[] = [
  {
    id: 1,
    label: "Java",
  },
  {
    id: 2,
    label: "Spring Boot",
  },
  {
    id: 3,
    label: "Next.js",
  },
  {
    id: 4,
    label: "TypeScript",
  },
  {
    id: 5,
    label: "React",
  },
  {
    id: 6,
    label: "PostgreSQL",
  },
  {
    id: 7,
    label: "MySQL",
  },
  {
    id: 8,
    label: "Prisma",
  },
  {
    id: 9,
    label: "Git",
  },
  {
    id: 10,
    label: "REST API",
  },
];