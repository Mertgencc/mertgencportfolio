"use client";

import React, { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Floating Header Container */}
      <header className="fixed top-0 left-0 right-0 z-[100] p-6 flex justify-center pointer-events-none">
        <motion.div 
          className={`w-full max-w-7xl flex items-center justify-between px-8 py-4 rounded-[2rem] pointer-events-auto transition-all duration-500 border ${
            isScrolled 
              ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
              : "bg-transparent border-transparent"
          }`}
          animate={{ y: isScrolled ? 0 : 4 }}
        >
          <Personal />
          
          <nav className="hidden lg:block">
            <NavLinks />
          </nav>


          <div className="hidden sm:block">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">LİSANS</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Content */}
      <div className="relative pt-32">
        <motion.div
          style={{ opacity: useTransform(scrollY, [0, 200], [1, 0.5]) }}
        >
          <Header />
        </motion.div>

        <div className="px-6 sm:px-12">
          <Hero />
          <main className="mt-8">{children}</main>
        </div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-cyan-600/5 blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}