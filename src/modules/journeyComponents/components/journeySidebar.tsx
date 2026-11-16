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
                description="A few milestones that shaped my path into software and backend engineering."
            />
            <PathsTag data={data} />
        </div>
    );
};

const PathsTag = ({ data }: Props) => {
    return (
        <div className="mt-8 flex flex-col gap-3">
            {data && Object.entries(data).map(([key, c]) => (
                <div key={key} className="flex items-center gap-3">
                  <div className={cn("w-2 h-2 rounded-full ring-2 ring-offset-2 ring-offset-[#FAFAFA]", c.dot)} />
                  <span className="text-sm text-zinc-500">{c.label}</span>
                </div>
            ))}
        </div>
    );
};
