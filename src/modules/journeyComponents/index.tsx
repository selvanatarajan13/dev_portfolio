'use client';

import AppSection from "@/components/layouts/AppSection";
import { JourneySideBar } from "@/modules/journeyComponents/components/journeySidebar";
import { JourneyTimeLine } from "./components/journeyTimeLine";
import { useMemo } from "react";

export const JourneyComponent = () => {

    const data = useMemo(() => {
        const TIMELINE = [
            { year: "2024", type: "education", title: "Bachelor of Engineering (ECE)", desc: "Graduated with Electronics & Communication Engineering, building a foundation in systems thinking and problem solving." },
            { year: "2024", type: "project",   title: "Built Weather Dashboard", desc: "React-based weather app with real-time API integration, search, and responsive forecast UI." },
            { year: "2024", type: "project",   title: "Library Management System", desc: "Full-featured system with Django & Python — book cataloging, user management, and borrowing workflows." },
            { year: "2024", type: "skill",     title: "Mastered Java & Spring Boot", desc: "Deep dived into enterprise Java — Spring Boot, JPA/Hibernate, REST API design, and Oracle SQL." },
            { year: "2024", type: "career",    title: "Started Software Engineering Career", desc: "Joined an enterprise software team as a Software Engineer. Contributing to production systems from day one." },
            { year: "2025", type: "career",    title: "Enterprise Migration Projects", desc: "Assigned to complex modernization initiatives — migrating legacy applications to modern architecture." },
            { year: "2025", type: "career",    title: "Struts → Next.js & Spring Boot", desc: "Actively migrating Struts JSP screens to Next.js and building new Spring Boot APIs, end-to-end." },
        ];

        const TYPE_CONFIG: Record<string, { dot: string; pill: string; pillText: string; label: string }> = {
            education: { dot: "bg-violet-500 ring-violet-200", pill: "bg-violet-50 border-violet-100", pillText: "text-violet-600", label: "Education" },
            project:   { dot: "bg-indigo-400 ring-indigo-100", pill: "bg-indigo-50 border-indigo-100", pillText: "text-indigo-600", label: "Project" },
            skill:     { dot: "bg-sky-500 ring-sky-100",       pill: "bg-sky-50 border-sky-100",       pillText: "text-sky-600",    label: "Learning" },
            career:    { dot: "bg-[#4F46E5] ring-[#4F46E5]/20", pill: "bg-[#EEF2FF] border-indigo-100", pillText: "text-[#4F46E5]", label: "Career" },
        };

        return { TIMELINE, TYPE_CONFIG };
    }, []);

    return (
        <AppSection id="journey" bg="bg-[#FAFAFA]">
            <div className="grid lg:grid-cols-[360px_1fr] gap-16 xl:gap-24">
                <JourneySideBar data={data.TYPE_CONFIG} />
                <JourneyTimeLine data={data} />
            </div>
        </AppSection>
    );
};