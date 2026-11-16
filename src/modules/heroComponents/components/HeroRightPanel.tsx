"use client";

import { heroAnimations } from "@/modules/heroComponents/common/hero.animation";

import TerminalMock from "@/modules/heroComponents/components/TerminalMock";

export default function HeroRightPanel() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        gap-6

        lg:w-auto
        lg:items-center
      "
    >
      <div className="w-full max-w-[720px]">
        <h2 className="mb-4 flex items-center justify-center gap-4 text-sm font-semibold text-zinc-500">
          <span className="h-px w-8 bg-[#5145FF]" />
          TECH STACK
          <span className="h-px w-8 bg-[#5145FF]" />
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {["Java 17", "Spring Boot", "Next.js", "SQL", "TypeScript", "React.js"].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[390px]" style={heroAnimations.floatingTerminal}>
        <TerminalMock />
      </div>
    </div>
  );
}
