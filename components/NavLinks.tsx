import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// TypeScript interface for links
interface NavLink {
  label: string;
  href: string;
  isExternal: boolean;
}

const links: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/gencmerttr", isExternal: true },
  {
    label: "YouTube",
    href: "https://www.youtube.com/playlist?list=PLOhpmfpRm_QkIMr8jH6SP-Vyzn6p3YHU5",
    isExternal: true,
  },
  { label: "GitHub", href: "https://github.com/Mertgencc", isExternal: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mert-gen%C3%A7-08b507299/", isExternal: true },
  { label: "Projeler", href: "/projects", isExternal: false },
  { label: "Tasarımlar", href: "/portfolioInsta", isExternal: false },
];

const NavLinks: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#111] bg-opacity-80 backdrop-blur-xl py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-8">
          {links.map(({ label, href, isExternal }, index) => {
            const commonProps = {
              className:
                "relative flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-gray-300 transition-shadow hover:text-white",
              onMouseEnter: () => setHoveredIndex(index),
              onMouseLeave: () => setHoveredIndex(null),
            };

            const content = (
              <>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className={`absolute inset-0 rounded-lg ${
                        label === "Tasarımlar" ? "bg-[#444444]" : "bg-cyan-500/20"
                      }`}
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{label}</span>
                {renderIcon(label)}
              </>
            );

            return isExternal ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                {...commonProps}
                aria-label={`${label} sayfasına git`}
              >
                {content}
              </a>
            ) : (
              <Link key={label} href={href} {...commonProps} aria-label={`${label} sayfasına git`}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 bg-[#222] text-white rounded-lg text-base font-medium flex items-center justify-between"
            aria-expanded={isOpen}
            aria-label="Navigasyon menüsünü aç/kapat"
          >
            Menü
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </motion.svg>
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
                  onClick={() => setIsOpen(false)}
                  aria-hidden="true"
                />

                {/* Dropdown Menu */}
                <motion.div
                  className="absolute left-4 right-4 mt-2 bg-[#111] bg-opacity-80 backdrop-blur-xl rounded-lg shadow-lg z-50 p-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {links.map(({ label, href, isExternal }) => {
                    const content = (
                      <div className="flex items-center gap-2">
                        {renderIcon(label)}
                        <span>{label}</span>
                      </div>
                    );

                    return isExternal ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-4 py-3 text-base font-medium text-gray-300 hover:bg-[#444444] hover:text-white rounded-lg transition-shadow"
                        onClick={() => setIsOpen(false)}
                        aria-label={`${label} sayfasına git`}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={label}
                        href={href}
                        className="flex items-center justify-center px-4 py-3 text-base font-medium text-gray-300 hover:bg-[#444444] hover:text-white rounded-lg transition-shadow"
                        onClick={() => setIsOpen(false)}
                        aria-label={`${label} sayfasına git`}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

// Helper function to render icons based on link label
const renderIcon = (label: string) => {
  const iconProps = { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" };

  switch (label) {
    case "Instagram":
      return (
        <svg {...iconProps}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...iconProps}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...iconProps}>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.769.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...iconProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.136 1.447-2.136 2.941v5.665H9.352V9.004h3.414v1.561h.048c.477-.9 1.638-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.282zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.004h3.564v11.448zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Projeler":
      return (
        <svg {...iconProps}>
          <path d="M7 7h10v10H7V7zm2 2H5v10h14V9h-4V5H5v2h4v2zm6 2h2v2h-2v-2zm0 4h2v2h-2v-2z" />
        </svg>
      );
    case "Tasarımlar":
      return (
        <svg {...iconProps}>
          <path d="M19.708 2.292a1 1 0 0 0-1.414 0L12 8.586 5.706 2.292a1 1 0 0 0-1.414 1.414L10.586 10l-6.294 6.294a1 1 0 1 0 1.414 1.414L12 11.414l6.294 6.294a1 1 0 0 0 1.414-1.414L13.414 10l6.294-6.294a1 1 0 0 0 0-1.414z" />
        </svg>
      );
    default:
      return null;
  }
};

export default NavLinks;


