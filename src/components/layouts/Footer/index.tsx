export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-6
          lg:px-10
          py-8
          flex
          items-center
          justify-center
          text-center
        "
      >
        <span className="text-[14px] text-zinc-400">
          © {currentYear} Selvanatarajan
        </span>
      </div>
    </footer>
  );
};