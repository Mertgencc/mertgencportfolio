"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperiencePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      company: "MONILAS YAZILIM",
      location: "Trabzon Teknokent",
      period: "2024 - 2025",
      title: "Software Intern",
      tags: ["C#", "Enterprise Architecture", "ASP.NET"],
      desc: "Üniversite 3. sınıf kapsamında kurumsal yazılım mimarileri ve backend süreçleri üzerine yoğunlaşan staj programı."
    },
    {
      company: "ELSASOFT YAZILIM",
      location: "Trabzon Teknokent",
      period: "2023 - 2024",
      title: "Software Intern",
      tags: ["React", "JavaScript", "Web Tech"],
      desc: "Üniversite 2. sınıf kapsamında modern web teknolojileri ve dinamik arayüz geliştirme üzerine saha tecrübesi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- EXPERIENCE LOADER --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="exp-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.05,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[2000] bg-[#030303] flex items-center justify-center"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col items-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="absolute w-full h-full rotate-[-90deg]">
                  <motion.circle
                    cx="50%" cy="50%" r="45%"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="40 160"
                    strokeLinecap="round"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <circle cx="50%" cy="50%" r="45%" stroke="white" strokeWidth="1" fill="none" opacity="0.05" />
                </svg>

                {/* MERKEZDEKİ "EXPERIENCE" YAZISI */}
                <div className="flex flex-col items-center z-10">
                  <div className="flex gap-1 md:gap-1.5">
                    {"EXPERIENCE".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          color: ["#1f2937", "#22d3ee", "#1f2937"] 
                        }}
                        transition={{ 
                          delay: i * 0.12, // Harf sayısı fazla olduğu için delay'i biraz kıstım (0.12)
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-xl md:text-2xl font-black tracking-widest uppercase"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-[1px] bg-cyan-500/50 mt-2" 
                  />
                  <span className="mt-2 text-[7px] font-mono tracking-[0.4em] text-white/20 uppercase">
                    2022 - 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ASIL İÇERİK --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto py-24 px-6"
      >
        {/* ÜST BAŞLIK */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[9px] font-black tracking-[0.3em] uppercase"
          >
            2022-2026
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase text-white leading-none">
            Deneyimler
          </h1>
        </div>

        {/* ÜNİVERSİTE KARTI */}
        <motion.div className="relative mb-16 group">
          <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-cyan-500/50" />
          <div className="bg-[#080808] border border-white/10 p-1 shadow-xl">
            <div className="border border-white/5 p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
                <div className="flex-1 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      Üniversite Bilgilerim
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                      Bilişim Sistemleri ve Teknolojileri
                    </h3>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                      Uygulamalı Bilimler Fakültesi
                    </p>
                  </div>
                  <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white leading-tight italic border-l-4 border-cyan-500 pl-4">
                      ATATÜRK<br />ÜNİVERSİTESİ
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start lg:items-end">
                  <div className="text-right hidden lg:block">
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.3em] block mb-1">Status</span>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest bg-cyan-500/20 px-2 py-0.5 border border-cyan-500/30">
                      Student
                    </span>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <div className="bg-white px-6 py-4 text-black min-w-[150px]">
                      <div className="text-2xl font-black tracking-tighter italic leading-none">
                        2022 - 2026
                      </div>
                      <div className="mt-3 h-[2px] w-full bg-black/10 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 3.2, ease: "easeOut" }}
                          className="absolute h-full bg-cyan-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ARA BÖLÜCÜ */}
        <div className="flex items-center gap-4 mb-10 px-2">
          <span className="text-[9px] font-mono text-gray-400 font-black tracking-[0.4em] uppercase">
            Work_History
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* STAJLAR */}
        <div className="grid grid-cols-1 gap-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-[#050505] border border-white/10 p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-white group-hover:text-cyan-500 transition-colors">
                      {exp.company}
                    </h3>
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-50" />
                    <span className="text-[9px] font-mono text-gray-400 tracking-[0.1em] uppercase">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed max-w-2xl">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[8px] font-mono font-bold border border-white/10 px-2 py-0.5 uppercase text-gray-400 group-hover:text-cyan-500 group-hover:border-cyan-500/30 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:items-end justify-center shrink-0">
                  <span className="text-[10px] font-black uppercase text-white tracking-widest leading-none">
                    {exp.title}
                  </span>
                  <span className="text-xs font-mono text-cyan-500 font-black mt-1.5 underline decoration-cyan-500/30 underline-offset-4">
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="mt-24 text-center">
          <div className="h-px w-20 bg-cyan-500/20 mx-auto mb-4" />
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.5em]">
            Mert Genc // System_Verified_Log
          </span>
        </footer>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;