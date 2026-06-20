'use client';

import { NAV_LINKS } from "@/constants";
import { useMediaQueryHook } from "@/hooks/useMediaQueryHook";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavLinksProps = {
    onClick?: () => void;
};

export const NavLinks = ({ onClick }: NavLinksProps) => {

    const isMobile = useMediaQueryHook();
    console.log('isMobile: ', isMobile)

    return (
        <>
            {NAV_LINKS.map((item, index) => (
                <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    onClick={onClick}
                    className={cn(
                        isMobile
                            ? "px-4 py-3 text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 rounded-xl"
                            : "px-4 py-2 text-[14px] text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl"
                    )}
                >
                    {item}
                </Link>
            ))}
        </>
    );
}