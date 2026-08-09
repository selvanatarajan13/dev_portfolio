"use client";

import { useState } from "react";

import SectionTitle from "@/components/common/SectionTitle";
import AppSection from "@/components/layouts/AppSection";
import { useInView } from "@/hooks/useInView";

import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { ExperienceHero } from "./components/ExperienceHero";
import { ContributionCard } from "./components/ContributionCard";
import { CONTRIBUTIONS } from "./components/experienceData";

type Props = {
  inView?: boolean;
};

export const ExperienceComponent = ({ inView }: Props) => {
  const [showMore, setShowMore] = useState(false);

  const { ref, inView: sectionInView } = useInView({
    threshold: 0.15,
  });

  const isVisible = inView ?? sectionInView;

  return (
    <AppSection
      id="experience"
      bg="bg-[#FAFAFA]"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <Box sx={{ marginBottom: 12 }}>
          <SectionTitle
            label="Professional Experience"
            title="Enterprise Impact"
            textAlignCenter
          />
        </Box>

        {/* Experience Card */}
        <div
          ref={ref}
          className="
            bg-white
            border
            border-black/[0.07]
            rounded-[32px]
            overflow-hidden
            shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)]
          "
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(24px)",
            transition: "opacity 0.7s, transform 0.7s",
          }}
        >
          <ExperienceHero />

          {/* Contributions */}
          <Box
            sx={{
              p: {
                xs: 3,
                sm: 4,
                lg: 7,
              },
            }}
          >
            <p className="text-[12px] font-bold text-zinc-400 uppercase tracking-[0.15em] mb-7">
              My Contributions
            </p>

            {/* ================================
                Desktop / Tablet
            ================================= */}
            <div className="hidden sm:block">
              <Grid container spacing={2}>
                {CONTRIBUTIONS.map((contribution, index) => (
                  <Grid
                    key={contribution.label}
                    size={{
                      sm: 6,
                      lg: 4,
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    <ContributionCard
                      {...contribution}
                      index={index}
                      inView={isVisible}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>

            {/* ================================
                Mobile
            ================================= */}
            <div className="sm:hidden">

              {/* First 2 cards */}
              <div className="flex flex-col gap-3">
                {CONTRIBUTIONS.slice(0, 2).map(
                  (contribution, index) => (
                    <ContributionCard
                      key={contribution.label}
                      {...contribution}
                      index={index}
                      inView={isVisible}
                    />
                  )
                )}
              </div>

              {/* Show More */}
              <div className="flex justify-center mt-5">
                <Button
                  onClick={() => setShowMore(true)}
                  endIcon={<KeyboardArrowUpIcon className="rotate-180" />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    color: "#4F46E5",
                    borderRadius: "999px",
                    px: 2.5,
                    py: 1,
                  }}
                >
                  Show More
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </div>

      {/* ================================
          Mobile Bottom Drawer
      ================================= */}
      <Drawer
        anchor="bottom"
        open={showMore}
        onClose={() => setShowMore(false)}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          "& .MuiDrawer-paper": {
            borderRadius: "24px 24px 0 0",
            maxHeight: "85vh",
          },
        }}
      >
        <div className="p-6">

          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                Experience
              </p>

              <h3 className="text-xl font-black text-zinc-900 mt-1">
                My Contributions
              </h3>
            </div>

            <IconButton
              onClick={() => setShowMore(false)}
              aria-label="Close contributions"
            >
              <CloseIcon />
            </IconButton>
          </div>

          {/* All Contributions */}
          <div className="flex flex-col gap-3 pb-4">
            {CONTRIBUTIONS.map((contribution, index) => (
              <ContributionCard
                key={contribution.label}
                {...contribution}
                index={index}
                inView={true}
              />
            ))}
          </div>
        </div>
      </Drawer>
    </AppSection>
  );
};