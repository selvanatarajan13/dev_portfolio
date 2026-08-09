// import CircleIcon from "@mui/icons-material/Circle";
// import { HeroStatusProps1 } from "@/modules/heroComponents/common/hero.types";

// export default function HeroStatus({
//   status,
// }: HeroStatusProps1) {
//   return (
//     <div
//       className="
//         inline-flex
//         items-center
//         gap-2
//         rounded-full
//         border
//         border-black/10
//         bg-white
//         px-5
//         py-3
//         shadow-sm
//       "
//     >
//       <CircleIcon
//         sx={{
//           color: "#4ADE80",
//           fontSize: 10,
//         }}
//       />

//       <span className="text-sm font-semibold text-zinc-700">
//         {status}
//       </span>
//     </div>
//   );
// }


import CircleIcon from "@mui/icons-material/Circle";

import { HeroStatusProps1 } from "@/modules/heroComponents/common/hero.types";

export default function HeroStatus({
  status,
}: HeroStatusProps1) {
  return (
    <div
      className="
        inline-flex
        max-w-full
        items-center
        gap-2.5
        rounded-full
        border
        border-black/[0.08]
        bg-white
        px-4
        py-2
        text-zinc-600
        shadow-sm

        sm:px-4
        sm:py-2

        max-sm:gap-2
        max-sm:px-3
        max-sm:py-1.5
      "
    >
      <CircleIcon
        sx={{
          color: "#22C55E",
          fontSize: {
            xs: 8,
            sm: 10,
          },
          filter:
            "drop-shadow(0 0 6px rgba(52, 211, 153, 0.7))",
          flexShrink: 0,
        }}
      />

      <span
        className="
          text-[13px]
          font-semibold
          leading-5
          text-zinc-600

          sm:text-[15px]
        "
      >
        {status}
      </span>
    </div>
  );
}