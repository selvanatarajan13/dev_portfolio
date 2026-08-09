import {
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Wrench,
} from "lucide-react";

export const EXPERIENCE_SUMMARY = [
  {
    label: "Challenge",
    value: "Legacy Struts Apps",
  },
  {
    label: "Solution",
    value: "Next.js + Spring Boot",
  },
  {
    label: "Role",
    value: "Software Engineer",
  },
];

export const CONTRIBUTIONS = [
  {
    label: "Frontend Modernization",
    desc: "Migrated legacy JSP and Struts interfaces to modern Next.js applications.",
    icon: Layout,
    color: "indigo" as const,
  },
  {
    label: "Backend Development",
    desc: "Developed REST APIs and business logic using Java and Spring Boot.",
    icon: Server,
    color: "green" as const,
  },
  {
    label: "Database Integration",
    desc: "Worked with complex SQL queries and enterprise database operations.",
    icon: Database,
    color: "blue" as const,
  },
  {
    label: "API Integration",
    desc: "Connected frontend applications with backend services and external APIs.",
    icon: Code2,
    color: "orange" as const,
  },
  {
    label: "Version Control",
    desc: "Used Git and GitHub for collaborative development and pull requests.",
    icon: GitBranch,
    color: "pink" as const,
  },
  {
    label: "Legacy System Analysis",
    desc: "Investigated existing application flows and reproduced legacy behavior in modern systems.",
    icon: Wrench,
    color: "amber" as const,
  },
];