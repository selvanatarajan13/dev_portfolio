"use client";
import { cn } from "@/lib/utils";

const FOCUSES = [
  { label: "Java 17", dot: "bg-orange-400", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
  { label: "Spring Boot", dot: "bg-green-500", bg: "bg-green-50", text: "text-green-700", border: "border-green-100" },
  { label: "Next.js", dot: "bg-zinc-800", bg: "bg-zinc-100", text: "text-zinc-700", border: "border-zinc-200" },
  { label: "SQL", dot: "bg-blue-500", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  { label: "Japanese 🇯🇵", dot: "bg-red-400", bg: "bg-red-50", text: "text-red-700", border: "border-red-100" },
];

export default function FocusCard() {
  return (
    <div
      className="
        relative
        bg-white
        rounded-3xl
        border
        border-black/8
        shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.08)]
        p-7
        w-68
      "
    >
     <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-[#4F46E5] via-violet-500 to-indigo-400" />
     <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" style={{ animation: "pulse 2s infinite" }} />
          <span className="text-[13px] font-bold text-zinc-900 tracking-tight">Current Focus</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded-lg border border-zinc-100">2026</div>
      </div>

      <div className="flex flex-col gap-2.5">
        {FOCUSES.map((f) => (
          <div
            key={f.label}
            className={cn("flex items-center gap-2.5 px-3 py-2 rounded-xl border", f.bg, f.border)}
          >
            <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", f.dot)} />
            <span className={cn("text-[13px] font-semibold", f.text)}>{f.label}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-[12px] text-zinc-400">Available for hire</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[12px] font-medium text-emerald-600">Open</span>
        </div>
      </div>
    </div>
  );
}