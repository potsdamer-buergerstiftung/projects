import { useScroll } from "framer-motion";
import { FC } from "react";

const ScrollProgressIndicator: FC = () => {
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="group flex flex-row items-center space-x-4 opacity-100 transition duration-500"
      onClick={scrollToTop}
    >
      <div className="relative h-[2px] w-14 rotate-180 bg-black bg-opacity-10">
        <div
          className="absolute h-full bg-slate-900 transition group-hover:bg-emerald-500"
          style={{
            width: scrollYProgress + "%",
          }}
        />
      </div>
      <p className="text-sm font-bold transition group-hover:text-emerald-500">
        Zurück nach oben
      </p>
    </button>
  );
};

export default ScrollProgressIndicator;
