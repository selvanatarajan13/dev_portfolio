"use client";

import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CircleIcon from "@mui/icons-material/Circle";

export default function TerminalMock() {
  return (
    <div
      className="
        w-[390px]
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-zinc-950
        shadow-[0_20px_60px_rgba(0,0,0,.25)]
      "
    >
      {/* Terminal Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-zinc-800
          px-5
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <CircleIcon sx={{ color: "#ef4444", fontSize: 12 }} />

          <CircleIcon sx={{ color: "#f59e0b", fontSize: 12 }} />

          <CircleIcon sx={{ color: "#22c55e", fontSize: 12 }} />
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <TerminalRoundedIcon fontSize="small" />

          <span className="text-sm font-medium">
            portfolio-terminal
          </span>
        </div>
      </div>

      {/* Terminal Body */}

      <div
        className="
          space-y-4
          px-6
          py-6
          font-mono
          text-sm
        "
      >
        <TerminalLine
          command="$ whoami"
          output="Selvanatarajan"
        />

        <TerminalLine
          command="$ role"
          output="Software Developer"
        />

        <TerminalLine
          command="$ YOE"
          output="1+ Yrs"
        />

        <TerminalLine
          command="$ Qualification"
          output="BE ECE"
        />

        <TerminalLine
          command="$ Location"
          output="Udangudi, Tuticorin, TamilNadu."
        />

        <TerminalLine
          command="$ status"
          output="Open to Work"
          success
        />

        {/* Cursor */}

        <div className="flex items-center gap-2">
          <span className="text-emerald-400">$</span>

          <span
            className="
              inline-block
              h-5
              w-2
              animate-pulse
              bg-white
            "
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Terminal Line                                   */
/* -------------------------------------------------------------------------- */

interface TerminalLineProps {
  command: string;
  output: string;
  success?: boolean;
}

function TerminalLine({
  command,
  output,
  success = false,
}: TerminalLineProps) {
  return (
    <div className="space-y-1">
      <div className="text-emerald-400">
        {command}
      </div>

      <div
        className={
          success
            ? "text-emerald-300"
            : "text-zinc-300"
        }
      >
        {output}
      </div>
    </div>
  );
}