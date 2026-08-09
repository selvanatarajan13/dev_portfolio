import { HeroStatsProps } from "@/modules/heroComponents/common/hero.types";

export default function HeroStats({
  stats,
}: HeroStatsProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-8
        border-t
        border-black/[0.06]
        pt-8

        sm:gap-10
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            min-w-[100px]
          "
        >
          {/* Value */}
          <div
            className="
              text-[28px]
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
              text-[12px]
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