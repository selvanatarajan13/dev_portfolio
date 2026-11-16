import { HeroHeadingProps } from "@/modules/heroComponents/common/hero.types";

export default function HeroHeading({
  content,
}: HeroHeadingProps) {
  return (
    <div>
      {/* Heading */}
      <h1 className="mx-auto mb-5 max-w-[1100px] text-center text-[38px] font-black leading-[1.04] tracking-[-1.8px] text-zinc-950 sm:text-5xl sm:tracking-[-2px] md:text-6xl md:tracking-[-2.5px] xl:text-[68px]">
        {content.title.line1}{" "}
        <span className="relative inline-block bg-linear-to-r from-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">
          {content.title.highlight}
        </span>
        <br />
        {content.title.line2} {content.title.line3}
      </h1>

      {/* Description */}
      <p
        className="
          mx-auto
          max-w-[760px]
          text-[16px]
          leading-7
          text-zinc-500
          mb-8

          sm:text-[17px]
          sm:leading-[1.7]

          md:text-[19px]
          md:leading-[1.7]
          md:mb-8
        "
      >
        {content.description}
      </p>
    </div>
  );
}
