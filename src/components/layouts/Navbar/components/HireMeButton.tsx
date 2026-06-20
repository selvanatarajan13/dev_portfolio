import { Button } from "@/components/common/button";
import { useMediaQueryHook } from "@/hooks/useMediaQueryHook";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonProp = {
    onClick?: () => void;
};

export const HireMeButton = ({ onClick }: ButtonProp) => {

    const isMobile = useMediaQueryHook();

    return (
        <Button 
            label="Hire Me"
            onClick={onClick}
            variantType="navbar"
            className={cn(
                isMobile 
                    ? "px-4 py-3 text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                    : "px-4 py-2 text-[14px] text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all duration-150"
            )}
            endIcon={<ArrowRight size={14} />}
        />
    );
};