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

    console.log('data?.TIMELINE?.length: ', data?.TIMELINE?.length);
    console.log('data?.TYPE_CONFIG?.length: ', data?.TYPE_CONFIG?.length);
    console.log('data: ', data);

    

    return (
        <div ref={ref} className="pt-1">
            {data.TIMELINE.map((item, i) => {
              const c = data.TYPE_CONFIG[item.type];
              return (
                <div
                  key={i}
                  className="flex gap-5 md:gap-8"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.55s ${i * 90}ms, transform 0.55s ${i * 90}ms`,
                  }}
                >
                    <div className="flex flex-col items-center">
                        <div className={cn("w-4 h-4 rounded-full border-[3px] border-white shadow-md ring-[3px] mt-1.5 shrink-0", c.dot)} />
                        {i < data.TIMELINE.length - 1 && (
                            <div className="w-px flex-1 mt-2.5 bg-gradient-to-b from-zinc-200 to-transparent min-h-[36px]" />
                        )}
                    </div>
                    <div className="pb-10 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="font-mono text-[12px] font-bold text-zinc-400 bg-white border border-zinc-200 px-2 py-0.5 rounded-lg">{item.year}</span>
                            <span className={cn("text-[11px] font-bold px-2.5 py-0.5 rounded-full border", c.pill, c.pillText)}>{c.label}</span>
                        </div>
                        <h3 className="text-[17px] font-bold text-zinc-900 mb-1.5">{item.title}</h3>
                        <p className="text-[14px] text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              );
            })}
        </div>
    );
};