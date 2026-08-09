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
      <div className="relative flex min-h-screen items-center">
        <AppContainer>
          <div
            className="
              grid
              w-full
              items-center
              gap-12
              py-15
              lg:grid-cols-[1fr_auto]
              xl:gap-20
            "
          >
            {/* Left Content */}
            <div style={heroAnimations.fadeUp}>
              <HeroStatus status={HERO_CONTENT.status} />

              <div className="mt-10">
                <HeroHeading content={HERO_CONTENT} />
              </div>

              <div className="mt-10">
                <HeroActions actions={HERO_ACTIONS} />
              </div>

              <div className="mt-16">
                <HeroStats stats={HERO_STATS} />
              </div>
            </div>

            {/* Right Content */}
            <div
              className="lg:flex"
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