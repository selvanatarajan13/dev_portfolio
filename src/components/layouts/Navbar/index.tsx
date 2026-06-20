'use client';

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { NavLinks } from "./components/navLinks";
import { HireMeButton } from "./components/HireMeButton";
import { Button } from "@/components/common/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    scrolled 
                    ? 'bg-white/[0.92] backdrop-blur-2xl border-b border-black/[0.06]'
                    : 'bg-transparent'
                )}
            >
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
                    <Logo 
                        label="Selvanatarajan"
                        profile="S"
                    />
                    <div className="hidden md:flex items-center gap-1">
                        <NavLinks />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            <HireMeButton />
                        </div>
                        <div className="md:hidden">
                            <Button
                                onClick={() => setOpen(!open)}
                                className="w-10 h-10 rounded-xl border border-black/[0.08] flex items-center justify-center text-zinc-600" 
                            >
                                {open ? <X size={18} /> : <Menu size={18} />}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className={cn(
                    "fixed inset-x-0 top-[68px] z-40 bg-white border-b border-black/[0.06] shadow-xl transition-all duration-300 md:hidden",
                    open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="flex flex-col p-4 gap-1">
                    <NavLinks onClick={() => setOpen(false)} />

                    <HireMeButton onClick={() => setOpen(false)} />
                </div>
            </div>
        </>
    );
};