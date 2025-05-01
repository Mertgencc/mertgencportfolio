import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Menü açık/kapalı durumu

  const links = [
    ["Instagram", "https://www.instagram.com/gencmerttr"],
    ["Youtube", "https://www.youtube.com/playlist?list=PLOhpmfpRm_QkIMr8jH6SP-Vyzn6p3YHU5"],
    ["GitHub", "https://github.com/Mertgencc"],
    ["LinkedIn", "https://www.linkedin.com/in/mert-gen%C3%A7-08b507299/"],
    ["Projeler", "/projects"],
    ["Tasarımlar", "/portfolioInsta"],
  ];

  return (
    <div>
      {/* Masaüstü Görünüm */}
      <div className="hidden sm:flex justify-center gap-7">
        {links.map(([label, href], index) => (
          <Link
            key={label}
            href={href}
            className="relative rounded-lg px-3 py-2 text-sm text-gray-700 transition-shadow delay-150 hover:shadow-lg hover:text-gray-900"
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
        ))}
      </div>

      {/* Telefon Görünümü */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-left"
        >
          Menü
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)} // Menü dışına tıklayınca kapansın
              />

              {/* Dropdown Menü */}
              <motion.div
                className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 p-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center justify-center px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-center transition-shadow delay-150 hover:shadow-md"
                    onClick={() => setIsOpen(false)} // Menü kapansın
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
