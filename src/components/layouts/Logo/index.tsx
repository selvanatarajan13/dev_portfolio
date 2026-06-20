'use client';

import Link from 'next/link';

type LogoProps = {
    href?: string;
    profile?: string;
    label?: string;
};

export const Logo = ({
    href = '#',
    profile,
    label
}: LogoProps) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-2.5 group"
        >
            <div className="w-8 h-8 rounded-xl bg-[#4F46E5] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <span className="text-white font-bold text-[13px]">
                    {profile}
                </span>
            </div>

            <span className="font-semibold text-[15px] tracking-tight text-zinc-900">
                {label}
            </span>
        </Link>
    );
};