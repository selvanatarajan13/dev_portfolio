import { EXPERIENCE_SUMMARY } from "./experienceData";

export const ExperienceHero = () => {
    return (
        <div
            className="
                relative
                overflow-hidden
                p-5
                sm:p-8
                lg:p-14
            "
            style={{
                background:
                    "linear-gradient(135deg,#312E81 0%,#4F46E5 55%,#6366F1 100%)",
            }}
        >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-2 border-white/[0.06]" />

            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-white/[0.08]" />

            <div className="relative">
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        gap-5
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                        lg:gap-8
                    "
                >
                    {/* ================================
                        Main Content
                    ================================= */}
                    <div
                        className="
                            max-w-[520px]
                            text-center
                            lg:text-left
                        "
                    >
                        {/* Current Role */}
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                bg-white/15
                                backdrop-blur-sm
                                text-white
                                text-[11px]
                                font-bold
                                px-3
                                py-1.5
                                rounded-full
                                mb-4
                                lg:mb-6
                                border
                                border-white/20
                            "
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(110,231,183,0.8)]" />

                            Active · Current Role
                        </div>

                        {/* Title */}
                        <h3
                            className="
                                text-[30px]
                                sm:text-[36px]
                                lg:text-[40px]
                                font-black
                                text-white
                                leading-[1.02]
                                tracking-[-1px]
                                mb-3
                                lg:mb-4
                            "
                        >
                            Legacy to Modern
                            <br className="hidden sm:block" />
                            {" "}Architecture
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                text-white/70
                                text-[13px]
                                sm:text-[15px]
                                leading-[1.6]
                                max-w-[520px]
                            "
                        >
                            Modernizing legacy Struts enterprise applications —
                            delivering scalable, maintainable systems with Next.js
                            and Spring Boot.
                        </p>
                    </div>

                    {/* ================================
                        Experience Summary
                    ================================= */}
                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-2.5
                            w-full
                            lg:w-auto
                            lg:min-w-[180px]
                            lg:flex
                            lg:flex-col
                            lg:gap-3
                        "
                    >
                        {EXPERIENCE_SUMMARY.map((item, index) => (
                            <div
                                key={item.label}
                                className={`
                                    bg-white/10
                                    backdrop-blur-sm
                                    rounded-2xl
                                    p-3
                                    sm:p-4
                                    border
                                    border-white/10
                                    text-center
                                    lg:text-left

                                    ${
                                        index === 2
                                            ? "col-span-2 lg:col-span-1"
                                            : ""
                                    }
                                `}
                            >
                                <p
                                    className="
                                        text-white/45
                                        text-[9px]
                                        sm:text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-widest
                                        mb-1
                                    "
                                >
                                    {item.label}
                                </p>

                                <p
                                    className="
                                        text-white
                                        font-bold
                                        text-[12px]
                                        sm:text-[14px]
                                        leading-snug
                                    "
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};