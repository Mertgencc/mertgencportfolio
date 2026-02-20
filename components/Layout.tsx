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
    /* Arka planı koyu renge sabitledik, yazı rengini varsayılan beyaz yaptık */
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 transition-colors duration-500 overflow-x-hidden">
      
      {/* HEADER: Sayfa başında da artık transparan değil, sabit koyu renkte */}
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
          {/* Sol Kısım: İsim (Personal bileşeninde text-white olmalı) */}
          <Personal />
          
          {/* Orta Kısım: Navigasyon */}
          <nav className="block">
            <NavLinks />
          </nav>

          {/* Sağ Kısım: Lisans Rozeti (Sadece masaüstü) */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-none group hover:bg-white/[0.05] transition-all cursor-default">
              <div className="w-1 h-1 bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 group-hover:text-white uppercase tracking-[0.3em]">
                LİSANS
              </span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ANA İÇERIK: Header yüksekliği kadar boşluk bırakıldı */}
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
      
      {/* ARKA PLAN EFEKTİ (Ambient Light) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/[0.03] blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}