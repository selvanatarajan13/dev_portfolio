"use client";

import { MarqueeProps } from "@/modules/heroComponents/common/hero.types";

export default function Marquee({
  items,
}: MarqueeProps) {
  const marqueeItems = [...items, ...items];

  return (
    <div
      className="
        relative
        mt-20
        overflow-hidden
        border-y
        border-zinc-200
        bg-white/60
        backdrop-blur
      "
    >
      {/* Left Fade */}

      <div
        className="
          absolute
          left-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-r
          from-white
          to-transparent
        "
      />

      {/* Right Fade */}

      <div
        className="
          absolute
          right-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-l
          from-white
          to-transparent
        "
      />

      {/* Marquee */}

      <div
        className="
          flex
          w-max
          animate-marquee
          gap-10
          py-5
        "
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="
              flex
              items-center
              gap-3
              whitespace-nowrap
            "
          >
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-indigo-600
              "
            />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-600
              "
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}