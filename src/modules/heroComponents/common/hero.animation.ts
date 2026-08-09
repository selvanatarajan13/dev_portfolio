import { CSSProperties } from "react";

export const heroAnimations: Record<string, CSSProperties> = {
  fadeUp: {
    animation: "fadeUp 0.7s ease forwards",
  },
  rightPanel: {
    animation: "fadeUp 0.9s ease 0.15s both",
  },
  floatingCard: {
    animation: "float 6s ease-in-out infinite",
  },
  floatingTerminal: {
    animation: "float 8s ease-in-out 0.5s infinite",
  },
  floatingChip: {
    animation: "float 7s ease-in-out 1s infinite",
  },
};