import type { LucideIcon } from "lucide-react";

type Color =
  | "indigo"
  | "green"
  | "blue"
  | "orange"
  | "pink"
  | "amber";

type Props = {
  label: string;
  desc: string;
  icon: LucideIcon;
  color: Color;
  index: number;
  inView: boolean;
};

const colorStyles: Record<
  Color,
  {
    icon: string;
    iconBg: string;
    iconBorder: string;
  }
> = {
  indigo: {
    icon: "text-indigo-600",
    iconBg: "bg-indigo-50",
    iconBorder: "border-indigo-100",
  },

  green: {
    icon: "text-emerald-600",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
  },

  blue: {
    icon: "text-blue-600",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
  },

  orange: {
    icon: "text-orange-600",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-100",
  },

  pink: {
    icon: "text-pink-600",
    iconBg: "bg-pink-50",
    iconBorder: "border-pink-100",
  },

  amber: {
    icon: "text-amber-600",
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
  },
};

export const ContributionCard = ({
  label,
  desc,
  icon: Icon,
  color,
  index,
  inView,
}: Props) => {
  const styles = colorStyles[color];

  return (
    <div
      className="
        w-full
        flex
        gap-4
        p-5
        bg-zinc-50
        rounded-2xl
        border
        border-zinc-100
        hover:border-zinc-200
        hover:bg-white
        transition-all
        duration-200
        group
      "
      style={{
        ...(inView
          ? {
              animation: "fadeUp 0.5s ease forwards",
              animationDelay: `${350 + index * 70}ms`,
            }
          : {
              opacity: 0,
            }),
      }}
    >
      <div
        className={`
          w-10
          h-10
          rounded-xl
          flex
          items-center
          justify-center
          shrink-0
          border
          ${styles.iconBg}
          ${styles.iconBorder}
        `}
      >
        <Icon
          size={17}
          className={styles.icon}
        />
      </div>

      <div>
        <p className="font-bold text-zinc-900 text-[14px] mb-1">
          {label}
        </p>

        <p className="text-zinc-500 text-[13px] leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
};