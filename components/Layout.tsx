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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 transition-colors duration-500 overflow-x-hidden font-sans">
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="quantum-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(20px)",
              transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-[1000] bg-[#030303] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" 
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                
                <svg className="absolute w-full h-full rotate-[-90deg]">
                  <motion.circle
                    cx="50%" cy="50%" r="45%"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-white/5"
                    strokeDasharray="4 8"
                  />
                  <motion.circle
                    cx="50%" cy="50%" r="45%"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="50 200"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                <motion.div 
                  animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-[80%] h-[80%] border border-cyan-500/20 rounded-full"
                />

                {/* MERKEZ YAZI GRUBU */}
                <div className="flex flex-col items-center translate-y-2">
                  <div className="flex gap-1 md:gap-2">
                    {"MERT GENÇ".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, color: "#1f2937" }} // Koyu gri başlar
                        animate={{ 
                          opacity: 1, 
                          color: ["#1f2937", "#22d3ee", "#1f2937"] // Gri -> Mavi -> Gri (Loop)
                        }}
                        transition={{ 
                          delay: 0.5 + (i * 0.15), // Harfler sırayla yanacak
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`text-xl md:text-2xl font-black tracking-widest relative ${char === " " ? "w-3" : ""}`}
                      >
                        {/* Harf arkasındaki parıltı (Sadece harf mavi olduğunda parlayacak şekilde senkron) */}
                        <motion.span
                          animate={{ opacity: [0, 0.8, 0] }}
                          transition={{ delay: 0.5 + (i * 0.15), duration: 2, repeat: Infinity }}
                          className="absolute inset-0 text-cyan-400 blur-md select-none"
                        >
                          {char}
                        </motion.span>
                        <span className="relative z-10">{char}</span>
                      </motion.span>
                    ))}
                  </div>

                  {/* UNVAN: Software Developer */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-2 text-[8px] md:text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase"
                  >
                    Software Developer
                  </motion.span>

                  <div className="mt-4 flex flex-col items-center gap-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: 60 }}
                      transition={{ delay: 1.5, duration: 1 }}
                      className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" 
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="text-[6px] font-mono tracking-[0.8em] text-cyan-500/50 uppercase"
                    >
                      2026
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 overflow-hidden hidden md:block">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-[8px] font-mono text-white/10 flex flex-col gap-1"
              >
                <span>LOC: 41.0082° N, 28.9784° E</span>
                <span>SYSTEM: STABLE</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.div 
          className={`w-full flex items-center justify-between px-6 md:px-10 py-4 pointer-events-auto transition-all duration-500 border-b ${
            isScrolled ? "bg-black/90 backdrop-blur-3xl border-white/10" : "bg-[#030303] border-transparent"
          }`}
          animate={{ height: isScrolled ? "70px" : "90px" }}
        >
          <Personal />
          <nav className="block"><NavLinks /></nav>
          
          <div className="hidden sm:block">
            <a 
              href="/mert-genc-cv.pdf" 
              download="Mert_Genc_CV.pdf"
              className="flex items-center gap-2 px-3 py-2.5 bg-white/[0.03] border border-white/10 group transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.05] cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0)] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              <div className="w-1 h-1 bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-[0.2em] flex items-center gap-2">
                CV
                <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative pt-24 md:pt-32"
      >
        <motion.div style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}>
          <Header />
        </motion.div>
        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
          <Hero />
          <main className="mt-8">{children}</main>
        </div>
      </motion.div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/[0.03] blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}