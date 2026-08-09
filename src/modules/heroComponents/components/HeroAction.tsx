import Link from "next/link";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { HeroActionsProps } from "@/modules/heroComponents/common/hero.types";

export default function HeroAction({
  actions,
}: HeroActionsProps) {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-4">
      {actions.map((action) => (
        <Link key={action.id} href={action.href}>
          {action.variant === "primary" ? (
            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-indigo-600
                px-7
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-indigo-700
                hover:shadow-xl
              "
            >
              {action.label}

              <ArrowForwardRoundedIcon fontSize="small" />
            </button>
          ) : (
            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-zinc-200
                bg-white
                px-7
                py-4
                font-semibold
                text-zinc-900
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-zinc-50
              "
            >
              <DownloadRoundedIcon fontSize="small" />

              {action.label}
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}