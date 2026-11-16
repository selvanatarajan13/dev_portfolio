import { LucideIcon } from 'lucide-react';

export type SkillCardProps = {
    index?: number;
    title: string;
    desc: string;
    icon: LucideIcon;
    skills?: string[];
    iconBg: string;
    iconColor: string;
    animated?: boolean;
    inView?: boolean;
};
