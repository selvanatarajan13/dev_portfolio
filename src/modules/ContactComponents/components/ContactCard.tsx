import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ContactLink } from "./contactData";

type Props = ContactLink & {
  index: number;
  inView: boolean;
};

export const ContactCard = ({
  href,
  icon: Icon,
  label,
  desc,
  color,
  download,
  index,
  inView,
}: Props) => {
  return (
    <Link
      href={href}
      {...(download ? { download: true } : {})}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className={`
        flex
        items-center
        gap-4
        p-5
        bg-white
        border
        border-black/[0.08]
        rounded-2xl
        hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.1)]
        hover:-translate-y-0.5
        transition-all
        duration-200
        group
        text-left
        ${color}
      `}
      style={{
        opacity: inView ? 1 : 0,
        animationName: inView ? "fadeUp" : "none",
        animationDuration: "0.5s",
        animationTimingFunction: "ease",
        animationFillMode: "forwards",
        animationDelay: `${200 + index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div
        className="
          w-11
          h-11
          rounded-xl
          bg-[#EEF2FF]
          border
          border-indigo-100
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <Icon
          size={18}
          className="text-[#4F46E5]"
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p className="font-bold text-zinc-950 text-[15px]">
          {label}
        </p>

        <p className="text-zinc-400 text-[13px] mt-0.5 truncate">
          {desc}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={16}
        className="
          ml-auto
          shrink-0
          text-zinc-300
          group-hover:text-zinc-600
          transition-colors
          duration-200
        "
      />
    </Link>
  );
};