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
                desc: 'Graduated from VV College of Engineering with a degree in Electronics and Communication Engineering, developing a strong foundation in analytical thinking, problem-solving, and technical concepts.',
            },
            {
                year: '2024 - 2025',
                type: 'skill_Learning',
                title: 'Focused on Java & Backend Development',
                desc: 'Strengthened programming skills in Core Java, Spring Boot, REST API development, JPA/Hibernate, SQL, and Oracle databases while building practical software development knowledge.',
            },
            {
                year: '2025',
                type: 'career',
                title: 'Started Software Development Career at Sathi System Pvt. Ltd.',
                desc: 'Started my professional journey as a Software Developer, contributing to enterprise applications, implementing features, debugging issues, and working with real-world business requirements.',
            },
            {
                year: '2025 - 2026',
                type: 'career',
                title: 'Enterprise Application Modernization',
                desc: 'Contributed to modernizing legacy Struts and JSP applications by migrating frontend modules to Next.js and developing backend APIs using Java and Spring Boot. Worked with React, TypeScript, SQL, and enterprise database systems.',
            },
            {
                year: "2026",
                type: "enterprise_skill",
                title: "Production Debugging & Database Engineering",
                desc: "Gained practical experience investigating production issues, analyzing application logs, debugging backend workflows, troubleshooting complex SQL queries, and working with Oracle databases.",
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
                dot: "bg-violet-500 ring-violet-200",
                pill: "bg-violet-50 border-violet-100",
                pillText: "text-violet-600",
                label: "Education",
            },

            skill_Learning: {
                dot: "bg-indigo-400 ring-indigo-100",
                pill: "bg-indigo-50 border-indigo-100",
                pillText: "text-indigo-600",
                label: "Skill Learning",
            },

            project : {
                dot: "bg-sky-500 ring-sky-100",
                pill: "bg-sky-50 border-sky-100",
                pillText: "text-sky-600",
                label: "Project",
            },

            career: {
                dot: "bg-[#4F46E5] ring-[#4F46E5]/20",
                pill: "bg-[#EEF2FF] border-indigo-100",
                pillText: "text-[#4F46E5]",
                label: "Career",
            },
            enterprise_skill: {
                dot: "bg-indigo-400 ring-indigo-100",
                pill: "bg-indigo-50 border-indigo-100",
                pillText: "text-indigo-600",
                label: "Enterprise Skill Gaining",
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
                    gap-16
                    xl:gap-24
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