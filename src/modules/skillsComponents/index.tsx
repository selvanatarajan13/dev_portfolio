"use client";

import SectionTitle from "@/components/common/SectionTitle";
import AppSection from "@/components/layouts/AppSection";
import { useInView } from "@/hooks/useInView";
import { useRef, useState } from "react";

import { Box } from "@mui/material";

import { FEATURES } from "./components/skillCardData";
import { SkillCard } from "./components/skillCard";

type Props = {
  inView?: boolean;
};

export const SkillsComponents = ({ inView }: Props) => {
  const { ref, inView: sectionInView } = useInView({ threshold: 0.08 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = inView ?? sectionInView;

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideWidth = carousel.clientWidth + 16;
    setActiveIndex(Math.min(Math.round(carousel.scrollLeft / slideWidth), FEATURES.length - 1));
  };

  return (
    <AppSection
      id="skills"
      bg="bg-white"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <Box sx={{ marginBottom: { xs: 7, md: 10 } }}>
          <SectionTitle
            label="WHAT I DO"
            title="Where I Create Value"
            description="My technical expertise, programming knowledge, and development tools."
            textAlignCenter
          />
        </Box>

        {/* ====================================
            Desktop
        ==================================== */}

        <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {FEATURES.map((feature, index) => {
            const placement = index === 3
              ? "lg:col-start-2"
              : index === 4
                ? "md:col-span-2 md:w-[calc(50%-0.625rem)] md:justify-self-center lg:col-span-2 lg:col-start-4 lg:w-full"
                : "";

            return (
              <div key={feature.title} className={`md:col-span-1 lg:col-span-2 ${placement}`}>
                <SkillCard {...feature} index={index} inView={isVisible} />
              </div>
            );
          })}
        </div>

        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Skills categories"
          >
            {FEATURES.map((feature, index) => (
              <div key={feature.title} className="w-full shrink-0 snap-center">
                <SkillCard {...feature} index={index} inView={isVisible} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2" aria-label="Choose a skills category">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.title}
                type="button"
                aria-label={`Show ${feature.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => {
                  const carousel = carouselRef.current;
                  if (!carousel) return;

                  carousel.scrollTo({
                    left: index * (carousel.clientWidth + 16),
                    behavior: "smooth",
                  });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-[#5145FF]" : "w-2 bg-zinc-300"}`}
              />
            ))}
          </div>
        </div>

      </div>
    </AppSection>
  );
};
