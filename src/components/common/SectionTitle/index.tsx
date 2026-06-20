import { Stack } from "@mui/material";
import Typography from "../typography";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
    label?: string;
    title?: string;
    description?: string;
    textAlignCenter?: boolean;
};

export default function SectionTitle({ label, title, description, textAlignCenter }: SectionTitleProps) {
    return (
        <Stack spacing={2} className={cn(textAlignCenter && "items-center text-center")} >
            {label && (
                <Typography
                    className="text-[12px] font-bold text-[#4F46E5] uppercase tracking-[0.15em]"
                >
                    {label}
                </Typography>
            )}
            <Typography
                variant="h3"
                sx={{ fontWeight: 800 }}
            >
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="body1"
                    color="text.secondary"
                    className="text-zinc-500 text-[17px] max-w-[480px]"
                >
                    {description}
                </Typography>
            )}
        </Stack>
    );
};