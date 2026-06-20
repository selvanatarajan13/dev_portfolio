import {
    Server,
    Globe,
    Layers,
} from 'lucide-react';

export const FEATURES = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Building production-grade REST APIs, business logic, and data layers with Java and Spring Boot.",
    skills: ["Java 17", "Spring Boot 3", "REST APIs", "JPA / Hibernate", "SQL / Oracle"],
    accent: "#4F46E5",
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#4F46E5]",
    border: "hover:border-[#4F46E5]/25",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(79,70,229,0.14)]",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Delivering modern, type-safe frontends with React, Next.js, and a sharp eye for UX.",
    skills: ["React 18", "Next.js 14", "TypeScript", "Redux", "React Query"],
    accent: "#7C3AED",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "hover:border-violet-200",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(124,58,237,0.12)]",
  },
  {
    icon: Layers,
    title: "Enterprise Modernization",
    desc: "Migrating and enhancing legacy systems — with discipline, analysis, and zero downtime mindset.",
    skills: ["Legacy Migration", "Bug Investigation", "Production Support", "System Enhancement"],
    accent: "#0EA5E9",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    border: "hover:border-sky-200",
    glow: "hover:shadow-[0_20px_60px_-12px_rgba(14,165,233,0.12)]",
  },
];