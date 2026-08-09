import { HeroStatsProps } from "@/modules/heroComponents/common/hero.types";

export default function HeroStats({
  stats,
}: HeroStatsProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        items-center
        gap-6
        border-t
        border-black/[0.06]
        pt-6

        sm:justify-start
        sm:gap-10
        sm:pt-8
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            min-w-[80px]
            text-center

            sm:min-w-[100px]
            sm:text-left
          "
        >
          {/* Value */}
          <div
            className="
              text-[24px]
              font-black
              leading-none
              tracking-tight
              text-zinc-950

              sm:text-[30px]

              md:text-[32px]
            "
          >
            {stat.value}
          </div>

          {/* Label */}
          <p
            className="
              mt-1.5
              text-[11px]
              font-medium
              leading-5
              text-zinc-400

              sm:text-[13px]
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}