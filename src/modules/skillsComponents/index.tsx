"use client";

import { useState } from "react";

import SectionTitle from "@/components/common/SectionTitle";
import AppSection from "@/components/layouts/AppSection";

import { Box, Grid } from "@mui/material";

import { FEATURES } from "./components/skillCardData";
import { SkillCard } from "./components/skillCard";

type Props = {
  inView?: boolean;
};

export const SkillsComponents = ({ inView = true }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (
    event: React.UIEvent<HTMLDivElement>
  ) => {
    const container = event.currentTarget;

    const cardWidth = container.clientWidth * 0.86;

    const index = Math.round(
      container.scrollLeft / cardWidth
    );

    setActiveIndex(
      Math.min(index, FEATURES.length - 1)
    );
  };

  return (
    <AppSection
      id="skills"
      bg="bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <Box sx={{ marginBottom: 12 }}>
          <SectionTitle
            label="What I Do"
            title="Where I Create Value"
            description="Three disciplines — each a focused area of real contribution."
            textAlignCenter
          />
        </Box>

        {/* ====================================
            Desktop
        ==================================== */}

        <div className="hidden md:block">
          <Grid
            container
            spacing={3}
          >
            {FEATURES.map((feature, index) => (
              <Grid
                key={feature.title}
                size={{ md: 4 }}
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <SkillCard
                  {...feature}
                  index={index}
                  inView={inView}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        {/* ====================================
            Mobile Carousel
        ==================================== */}

        <div className="md:hidden">

          {/* Carousel */}
          <div
            onScroll={handleScroll}
            className="
              flex
              gap-4
              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth
              pb-4

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="
                  shrink-0
                  w-[86%]
                  snap-center
                "
              >
                <SkillCard
                  {...feature}
                  index={index}
                  inView={inView}
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.title}
                type="button"
                aria-label={`Go to ${feature.title}`}
                onClick={() => {
                  const container =
                    document.getElementById(
                      "skills-carousel"
                    );

                  if (!container) return;

                  const cardWidth =
                    container.clientWidth * 0.86;

                  container.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeIndex === index
                      ? "w-6 bg-[#4F46E5]"
                      : "w-2 bg-zinc-300"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </AppSection>
  );
};