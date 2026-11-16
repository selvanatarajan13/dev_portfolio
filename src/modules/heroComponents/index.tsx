"use client";

import {
  HERO_ACTIONS,
  HERO_CONTENT,
  HERO_STATS,
} from "@/modules/heroComponents/common/hero.data";

import {
  HERO_SECTION_ID,
} from "@/modules/heroComponents/common/hero.constant";

import { heroAnimations } from "@/modules/heroComponents/common/hero.animation";

import {
  HeroBackground,
  HeroHeading,
  HeroRightPanel,
  HeroStats,
  HeroStatus,
} from "@/modules/heroComponents/components";

import AppContainer from "@/components/layouts/AppContainer";
import HeroActions from "./components/HeroActions";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id={HERO_SECTION_ID}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        text-zinc-900
        px-8
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative flex min-h-screen items-center py-20">
        <AppContainer>
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-8
              py-8
              text-center
            "
          >
            <div className="flex w-full flex-col items-center" style={heroAnimations.fadeUp}>
              <div className="mb-5 h-36 w-36 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
                <Image
                  src="/selva.png"
                  alt="Selva at his development workspace"
                  width={144}
                  height={144}
                  priority
                  className="h-full w-full object-cover object-[center_32%]"
                />
              </div>

              <HeroStatus status={HERO_CONTENT.status} />

              <div className="mt-7 w-full">
                <HeroHeading content={HERO_CONTENT} />
              </div>

              <div className="mt-2">
                <HeroActions actions={HERO_ACTIONS} />
              </div>

              <div className="mt-8 w-full max-w-2xl">
                <HeroStats stats={HERO_STATS} />
              </div>
            </div>

            <div
              className="flex w-full justify-center"
              style={heroAnimations.fadeUpDelayed}
            >
              <HeroRightPanel />
            </div>
          </div>
        </AppContainer>
      </div>
    </section>
  );
}
