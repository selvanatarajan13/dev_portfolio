import { HeroHeadingProps } from "@/modules/heroComponents/common/hero.types";

export default function HeroHeading({
  content,
}: HeroHeadingProps) {
  return (
    <div>
      {/* Heading */}
      <h1
        className="
          text-[42px]
          font-black
          leading-[1.05]
          tracking-[-2px]
          text-zinc-950
          mb-6

          sm:text-[48px]
          sm:tracking-[-2.5px]

          md:text-[64px]
          md:leading-[1]
          md:tracking-[-3px]

          xl:text-[76px]
        "
      >
        {content.title.line1}

        <br />

        <span
          className="
            relative
            inline-block
            bg-linear-to-r
            from-[#4F46E5]
            to-[#818CF8]
            bg-clip-text
            text-transparent
          "
        >
          {content.title.highlight}
        </span>

        <br />

        {content.title.line2}

        <br />

        {content.title.line3}
      </h1>

      {/* Description */}
      <p
        className="
          max-w-[560px]
          text-[16px]
          leading-7
          text-zinc-500
          mb-10

          sm:text-[17px]
          sm:leading-[1.7]

          md:text-[19px]
          md:leading-[1.7]
          md:mb-12
        "
      >
        {content.description}
      </p>
    </div>
  );
}