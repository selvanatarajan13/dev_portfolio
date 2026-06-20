import SectionTitle from "@/components/common/SectionTitle";
import { cn } from "@/lib/utils";

type typeConfig = {
    dot: string;
    pill: string;
    pillText: string;
    label: string;
};

type Props = {
    data: Record<string, typeConfig>;
}

export const JourneySideBar = ({ data }: Props) => {
    return (
        <div className="lg:sticky lg:top-28 self-start">
            <SectionTitle 
                label="My Journey"
                title="From Graduate to Engineer"
                description="Key milestones across education, projects, and career that shaped me as a backend engineer."
            />
            <PathsTag data={data} />
        </div>
    );
};

const PathsTag = ({ data }: Props) => {
    return (
        <div className="mt-10 flex flex-col gap-2.5">
            {data && Object.entries(data).map(([key, c]) => (
                <div key={key} className="flex items-center gap-3">
                  <div className={cn("w-2.5 h-2.5 rounded-full ring-4", c.dot)} />
                  <span className="text-[13px] text-zinc-500 font-medium">{c.label}</span>
                </div>
            ))}
        </div>
    );
};