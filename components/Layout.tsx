"use client";

import React, { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-black dark:text-white selection:bg-cyan-500/30 transition-colors duration-500">
      
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.div 
          className={`w-full flex items-center justify-between px-6 md:px-10 py-4 pointer-events-auto transition-all duration-500 border-b ${
            isScrolled 
              ? "bg-white/80 dark:bg-black/80 backdrop-blur-3xl border-black/5 dark:border-white/10 shadow-2xl" 
              : "bg-transparent border-transparent"
          }`}
          animate={{ 
            height: isScrolled ? "70px" : "90px"
          }}
        >
          <Personal />
          
          {/* NAV: Mobilde de butonu göstermesi için 'hidden lg:block' kaldırıldı */}
          <nav className="block">
            <NavLinks />
          </nav>

          <div className="hidden sm:block">
            <div className="flex items-center gap-3 px-4 py-2 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-none group hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all">
              <div className="w-1 h-1 bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white uppercase tracking-[0.3em]">
                LİSANS
              </span>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="relative pt-32">
        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}
        >
          <Header />
        </motion.div>

        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
          <Hero />
          <main className="mt-8">{children}</main>
        </div>
      </div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/[0.05] dark:bg-cyan-600/[0.03] blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}