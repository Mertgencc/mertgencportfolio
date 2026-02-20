"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* ÜST BAŞLIK */}
      <div className="text-center mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[9px] font-black tracking-[0.3em] uppercase"
        >
          2022-2026
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase text-black dark:text-white leading-none">
          Deneyimler<span className="text-cyan-500"></span>
        </h1>
      </div>

      {/* ÜNİVERSİTE KARTI */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-16 group"
      >
        <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-cyan-500/50" />
        
        <div className="bg-[#080808] border border-white/10 p-1 shadow-xl">
          <div className="border border-white/5 p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            
            <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
              <div className="flex-1 space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      Üniversite Bilgilerim
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                    Bilişim Sistemleri ve Teknolojileri
                  </h3>
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                    Uygulamalı Bilimler Fakültesi
                  </p>
                </div>

                {/* ÜNİVERSİTE ADI */}
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white leading-tight italic border-l-4 border-cyan-500 pl-4">
                    ATATÜRK<br />
                    ÜNİVERSİTESİ
                  </h2>
                </div>
              </div>

              {/* Sağ Taraf - Zaman ve Durum */}
              <div className="flex flex-col justify-between items-start lg:items-end">
                <div className="text-right hidden lg:block">
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.3em] block mb-1">Status</span>
                  <span className="text-white text-[10px] font-black uppercase tracking-widest bg-cyan-500/20 px-2 py-0.5 border border-cyan-500/30">
                    Student
                  </span>
                </div>

                <div className="mt-6 lg:mt-0">
                  <div className="bg-white px-6 py-4 text-black min-w-[150px] relative">
                    <div className="text-2xl font-black tracking-tighter italic leading-none">
                      2022 - 2026
                    </div>
                    <div className="mt-3 h-[2px] w-full bg-black/10 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
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
        <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10" />
      </div>

      {/* STAJLAR */}
      <div className="grid grid-cols-1 gap-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  {/* DÜZELTME: Şirket isimleri artık her modda görünür */}
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-black dark:text-white group-hover:text-cyan-500 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-50" />
                  <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400 tracking-[0.1em] uppercase">
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[8px] font-mono font-bold border border-black/10 dark:border-white/10 px-2 py-0.5 uppercase text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 group-hover:border-cyan-500/30 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:items-end justify-center shrink-0">
                <span className="text-[10px] font-black uppercase text-black dark:text-white tracking-widest leading-none">
                  {exp.title}
                </span>
                <span className="text-xs font-mono text-cyan-500 font-black mt-1.5 underline decoration-cyan-500/30 underline-offset-4">
                  {exp.period}
                </span>
              </div>
            </div>
            {/* Hover Alt Çizgi Süslemesi */}
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
    </div>
  );
};

export default ExperiencePage;