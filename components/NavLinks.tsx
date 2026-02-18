"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  isExternal: boolean;
}

const links: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/gencmerttr", isExternal: true },
  { label: "YouTube", href: "https://www.youtube.com/playlist?list=PLOhpmfpRm_QkIMr8jH6SP-Vyzn6p3YHU5", isExternal: true },
  { label: "GitHub", href: "https://github.com/Mertgencc", isExternal: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mert-gen%C3%A7-08b507299/", isExternal: true },
  { label: "Projeler", href: "/projects", isExternal: false },
  { label: "Tasarımlar", href: "/portfolioInsta", isExternal: false },
];

const NavLinks: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
      {links.map((link, index) => {
        const isInternal = !link.isExternal;
        const Component = isInternal ? Link : "a";
        const extraProps = link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

        return (
          <Component
            key={link.label}
            href={link.href}
            {...extraProps}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              {/* SVG İkonları */}
              <div className={`transition-transform duration-300 ${hoveredIndex === index ? 'scale-110 text-cyan-400' : 'text-gray-400'}`}>
                {renderIcon(link.label)}
              </div>
              <span className={hoveredIndex === index ? 'text-white' : 'text-gray-400'}>
                {link.label}
              </span>
            </span>
            
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navHoverBlock"
                  className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-xl border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </Component>
        );
      })}
    </div>
  );
};

// İkonları doğrudan içine gömdük (Hata riskini sıfırladık)
const renderIcon = (label: string) => {
  const props = { className: "w-4 h-4" };
  switch (label) {
    case "Instagram": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
    case "YouTube": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;
    case "GitHub": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
    case "LinkedIn": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
    case "Projeler": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
    case "Tasarımlar": return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7.63 7.63L22 22"></path></svg>;
    default: return null;
  }
};

export default NavLinks;