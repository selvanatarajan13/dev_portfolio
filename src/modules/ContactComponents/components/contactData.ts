import {
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export type ContactLink = {
  href: string;
  icon: React.ElementType;
  label: string;
  desc: string;
  color: string;
  download?: boolean;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    href: "https://github.com/selvanatarajan13",
    icon: FaGithub,
    label: "GitHub",
    desc: "Browse my repositories",
    color: "hover:border-zinc-400",
  },
  {
    href: "https://www.linkedin.com/in/selvanatarajan-s13",
    icon: FaLinkedin,
    label: "LinkedIn",
    desc: "Connect professionally",
    color: "hover:border-blue-400",
  },
  {
    href: "mailto:selvanatarajan13@gmail.com",
    icon: Mail,
    label: "Email",
    desc: "selvanatarajan13@gmail.com",
    color: "hover:border-[#4F46E5]/50",
  },
  {
    href: "/resume.pdf",
    icon: Download,
    label: "Resume",
    desc: "Download PDF · 2026",
    color: "hover:border-emerald-400",
    download: true,
  },
];