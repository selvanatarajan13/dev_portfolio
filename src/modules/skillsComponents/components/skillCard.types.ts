import { LucideIcon } from 'lucide-react';

export type SkillCardProps = {
    index?: number;
    title: string;
    desc: string;
    icon: LucideIcon;
    skills?: string[];
    accent: string;
    iconBg: string;
    iconColor: string;
    border: string;
    glow: string;
    animated?: boolean;
    inView?: boolean;
};