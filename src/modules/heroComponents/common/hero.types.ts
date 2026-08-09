export interface HeroStat {
  id: number;
  value: string;
  label: string;
}

export interface HeroStatsProps {
  stats: HeroStat[];
}

export interface HeroStatusProps {
  status: {
    text: string;
    online: boolean;
  };
}

export interface HeroStatusProps1 {
  status: string;
}

export interface HeroAction {
  id: number;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
}

export interface HeroActionsProps {
  actions: HeroAction[];
}

export interface HeroFocus {
  id: number;
  title: string;
  description?: string;
}

export interface HeroContent {
  status: string;
  title: {
    line1: string;
    highlight: string;
    line2: string;
    line3: string;
  };
  description: string;
}

export interface HeroProps {
  className?: string;
}

export interface HeroTitle {
  line1: string;
  highlight: string;
  line2: string;
  line3: string;
}

export interface HeroContent {
  status: string;
  title: HeroTitle;
  description: string;
}

export interface HeroHeadingProps {
  content: HeroContent;
}

export interface MarqueeItem {
  id: number;
  label: string;
}

export interface MarqueeProps {
  items: MarqueeItem[];
}