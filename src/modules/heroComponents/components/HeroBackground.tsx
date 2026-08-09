"use client";

import {
  HERO_GLOW,
  HERO_GRID,
} from "@/modules/heroComponents/common/hero.constant";

export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: `${HERO_GRID.size} ${HERO_GRID.size}`,
        }}
      />

      <div
        className="absolute -top-40 -right-40 -z-10 rounded-full"
        style={{
          width: HERO_GLOW.primary.width,
          height: HERO_GLOW.primary.height,
          filter: `blur(${HERO_GLOW.primary.blur}px)`,
          background:
            "radial-gradient(circle, rgba(79,70,229,.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 -z-10 rounded-full"
        style={{
          width: HERO_GLOW.secondary.width,
          height: HERO_GLOW.secondary.height,
          filter: `blur(${HERO_GLOW.secondary.blur}px)`,
          background:
            "radial-gradient(circle, rgba(139,92,246,.05) 0%, transparent 70%)",
        }}
      />
    </>
  );
}