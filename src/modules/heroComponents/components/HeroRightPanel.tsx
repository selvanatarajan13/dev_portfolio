"use client";

import { Terminal } from "lucide-react";

import { heroAnimations } from "@/modules/heroComponents/common/hero.animation";

import FocusCard from "@/modules/heroComponents/components/FocusCard";
import TerminalMock from "@/modules/heroComponents/components/TerminalMock";

export default function HeroRightPanel() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        gap-5

        lg:w-auto
        lg:items-end
      "
    >
      {/* Open To Work */}
      <div
        className="
          self-center
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-black/[0.08]
          bg-white
          px-4
          py-2.5
          text-[13px]
          font-semibold
          text-zinc-700
          shadow-lg

          lg:self-start
        "
        style={heroAnimations.floatingChip}
      >
        <Terminal
          size={14}
          className="text-[#4F46E5]"
        />

        Open to work
      </div>

      {/* Current Focus */}
      <div
        className="
          w-full
          max-w-[272px]
        "
        style={heroAnimations.floatingCard}
      >
        <FocusCard />
      </div>

      {/* Terminal */}
      <div
        className="
          w-full
          max-w-[340px]
        "
        style={heroAnimations.floatingTerminal}
      >
        <TerminalMock />
      </div>
    </div>
  );
}