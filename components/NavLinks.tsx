import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import GithubSVG from "@/public/github.svg";

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return [
    ["Instagram", "https://www.instagram.com/gencmerttr"],
    ["Youtube", "https://www.youtube.com/playlist?list=PLOhpmfpRm_QkIMr8jH6SP-Vyzn6p3YHU5"],
    ["GitHub", "https://github.com/Mertgencc"],
    ["LinkedIn", "https://www.linkedin.com/in/mert-gen%C3%A7-08b507299/"],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      //   @ts-ignore
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-[#333]"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 text-[#999]">{label}</span>
    </Link>
  ));
}
