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
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 transition-colors duration-500 overflow-x-hidden">
      
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.div 
          className={`w-full flex items-center justify-between px-6 md:px-10 py-4 pointer-events-auto transition-all duration-500 border-b ${
            isScrolled 
              ? "bg-black/90 backdrop-blur-3xl border-white/10 shadow-2xl" 
              : "bg-[#030303] border-transparent"
          }`}
          animate={{ 
            height: isScrolled ? "70px" : "90px"
          }}
        >
          <Personal />
          
          <nav className="block">
            <NavLinks />
          </nav>

          {/* Sadece bu kısmı düzelttim: Navlink yüksekliğinde ama daha dar CV butonu */}
          <div className="hidden sm:block">
            <a 
              href="/mert-genc-cv.pdf" 
              download="Mert Genç CV.pdf"
              className="flex items-center gap-2 px-3 py-2.5 bg-white/[0.03] border border-white/10 group transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.05] cursor-pointer active:scale-95"
            >
              <div className="w-1 h-1 bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-[0.2em] flex items-center gap-2">
                CV
                <svg className="w-3 h-3 text-cyan-500 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </header>

      <div className="relative pt-24 md:pt-32">
        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}
        >
          <Header />
        </motion.div>

        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
          <Hero />
          <main className="mt-8">
            {children}
          </main>
        </div>
      </div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/[0.03] blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}