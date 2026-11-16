import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type typeConfig = {
    dot: string;
    pill: string;
    pillText: string;
    label: string;
};

type timeLineItem = {
    year: string;
    type: string;
    title: string;
    desc: string;
};

type dataProps = {
    TYPE_CONFIG: Record<string, typeConfig>;
    TIMELINE: timeLineItem[];
};

type JourneyTimeLineProps = {
    data: dataProps;
}

export const JourneyTimeLine = ({ data }: JourneyTimeLineProps) => {

    const { ref, inView } = useInView({ threshold: 0.05 });

    return (
        <div ref={ref} className="pt-1" aria-label="Career and education timeline">
            {data.TIMELINE.map((item, i) => {
              const c = data.TYPE_CONFIG[item.type] ?? data.TYPE_CONFIG.career;
              const isActive = i === data.TIMELINE.length - 1;
              return (
                <div
                  key={i}
                  className="group flex gap-4 sm:gap-6 md:gap-8"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.45s ${i * 70}ms, transform 0.45s ${i * 70}ms`,
                  }}
                >
                    <div className="flex flex-col items-center">
                        <div className={cn("relative mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-white ring-2 transition-transform duration-200 group-hover:scale-110", c.dot, isActive && "ring-4 ring-offset-2 ring-offset-[#FAFAFA]")} />
                        {i < data.TIMELINE.length - 1 && (
                            <div className="w-px flex-1 mt-2.5 bg-zinc-200 min-h-[36px]" />
                        )}
                    </div>
                    <div className="min-w-0 flex-1 pb-8 sm:pb-9">
                        <div className="mb-2.5 flex flex-wrap items-center gap-2">
                            <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-500">{item.year}</span>
                            <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", c.pill, c.pillText)}>{c.label}</span>
                        </div>
                        <h3 className="mb-1.5 text-base font-semibold text-zinc-900 transition-colors group-hover:text-[#5145FF] sm:text-[17px]">{item.title}</h3>
                        <p className="max-w-2xl text-sm leading-6 text-zinc-500">{item.desc}</p>
                    </div>
                </div>
              );
            })}
        </div>
    );
};
