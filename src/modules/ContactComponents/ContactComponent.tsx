"use client";

import { Box } from "@mui/material";

import SectionTitle from "@/components/common/SectionTitle";
import AppSection from "@/components/layouts/AppSection";
import { useInView } from "@/hooks/useInView";

import { CONTACT_LINKS } from "./components/contactData";
import { ContactCard } from "./components/ContactCard";

type Props = {
  inView?: boolean;
};

export const ContactComponent = ({
  inView,
}: Props) => {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0.15,
  });

  const isVisible = inView ?? sectionInView;

  return (
    <AppSection
      id="contact"
      bg="bg-[#FAFAFA]"
    >
      <div
        ref={ref}
        className="
          max-w-[1280px]
          mx-auto
          px-6
          lg:px-10
          text-center
        "
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0)"
            : "translateY(24px)",
          transition:
            "opacity 0.75s, transform 0.75s",
        }}
      >
        {/* Section Heading */}
        <Box sx={{ marginBottom: 8 }}>
          <SectionTitle
            label="Let's Connect"
            title="Interested in working together?"
            description="Open to Java Backend, Spring Boot and Full Stack opportunities. Remote or on-site — let's build something great."
            textAlignCenter
          />
        </Box>

        {/* Contact Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            max-w-[560px]
            mx-auto
          "
        >
          {CONTACT_LINKS.map((link, index) => (
            <ContactCard
              key={link.label}
              {...link}
              index={index}
              inView={isVisible}
            />
          ))}
        </div>
      </div>
    </AppSection>
  );
};