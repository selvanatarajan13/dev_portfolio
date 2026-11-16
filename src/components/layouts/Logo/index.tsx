'use client';

import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
    href?: string;
    label?: string;
};

export const Logo = ({
    href = '#',
    label
}: LogoProps) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-2.5 group"
        >
            <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#5145FF]/15 transition-transform duration-200 group-hover:scale-105">
                <Image
                    src="/selva.png"
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover object-[center_32%]"
                />
            </div>

            <span className="font-semibold text-[15px] tracking-tight text-zinc-900">
                {label}
            </span>
        </Link>
    );
};
