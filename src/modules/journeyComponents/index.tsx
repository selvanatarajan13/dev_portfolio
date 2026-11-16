"use client";

import AppSection from "@/components/layouts/AppSection";
import { JourneySideBar } from "@/modules/journeyComponents/components/journeySidebar";
import { JourneyTimeLine } from "./components/journeyTimeLine";
import { useMemo } from "react";

export const JourneyComponent = () => {
    const data = useMemo(() => {
        
        const TIMELINE = [
            {
                year: '2020 - 2024',
                type: 'education',
                title: 'Bachelor of Engineering (ECE)',
                desc: 'Earned a Bachelor of Engineering in Electronics and Communication, building a strong foundation in analytical thinking and problem solving.',
            },
            {
                year: '2024 - 2025',
                type: 'skill_learning',
                title: 'Focused on Java & Backend Development',
                desc: 'Built a foundation in Java, Spring Boot, REST APIs, JPA, SQL, and Oracle through focused study and hands-on practice.',
            },
            {
                year: '2025',
                type: 'career',
                title: 'Software Developer at Sathi System',
                desc: 'Joined as a Software Developer, delivering features, debugging issues, and supporting enterprise applications.',
            },
            {
                year: '2025 - 2026',
                type: 'career',
                title: 'Enterprise Application Modernization',
                desc: 'Modernized Struts and JSP modules with Next.js and built Java and Spring Boot APIs using React, TypeScript, and SQL.',
            },
            {
                year: "2026",
                type: "enterprise_skill",
                title: "Production Debugging & Database Engineering",
                desc: "Investigated production issues, traced backend workflows, analyzed logs, and resolved complex SQL problems in Oracle.",
            }
        ];


        const TYPE_CONFIG: Record<
            string,
            {
                dot: string;
                pill: string;
                pillText: string;
                label: string;
            }
        > = {
            education: {
                dot: "bg-[#A855F7] ring-[#E9D5FF]",
                pill: "bg-[#FAF5FF] border-[#E9D5FF]",
                pillText: "text-[#9333EA]",
                label: "Education",
            },

            skill_learning: {
                dot: "bg-[#818CF8] ring-[#DDE3FF]",
                pill: "bg-[#F5F6FF] border-[#DDE3FF]",
                pillText: "text-[#6366D9]",
                label: "Skill Learning",
            },

            career: {
                dot: "bg-[#4F46FF] ring-[#DCD9FF]",
                pill: "bg-[#F5F4FF] border-[#DCD9FF]",
                pillText: "text-[#5145FF]",
                label: "Career",
            },
            enterprise_skill: {
                dot: "bg-[#5145FF] ring-[#DCD9FF]",
                pill: "bg-[#F5F4FF] border-[#DCD9FF]",
                pillText: "text-[#5145FF]",
                label: "Engineering",
            },
        };

        return {
            TIMELINE,
            TYPE_CONFIG,
        };
    }, []);

    return (
        <AppSection
            id="journey"
            bg="bg-[#FAFAFA]"
        >
            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    px-6
                    lg:px-8
                    grid
                    lg:grid-cols-[360px_1fr]
                    gap-12
                    lg:gap-16
                    xl:gap-20
                "
            >
                {/* Journey Header / Sidebar */}
                <div
                    className="
                        lg:sticky
                        lg:top-24
                        lg:self-start
                    "
                >
                    <JourneySideBar data={data.TYPE_CONFIG} />
                </div>

                {/* Timeline */}
                <div>
                    <JourneyTimeLine data={data} />
                </div>
            </div>
        </AppSection>
    );
};
