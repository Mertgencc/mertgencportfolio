"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperiencePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      company: "MONILAS YAZILIM",
      location: "Trabzon Teknokent",
      period: "2024 - 2025",
      title: "Software Intern",
      tags: ["C#", "Enterprise Architecture", "ASP.NET"],
      desc: "Üniversite 3. sınıf kapsamında kurumsal yazılım mimarileri ve backend süreçleri üzerine yoğunlaşan staj programı.",
      details: [
        "SQL veritabanı temellerini öğrendim ve temel sorgular geliştirdim.",
        "Java programlama dili ile temel uygulamalar geliştirdim.",
        "Java ve SQL kullanarak kitap otomasyon sistemi tasarladım ve geliştirdim."
      ]
    },
    {
      company: "ELSASOFT YAZILIM",
      location: "Trabzon Teknokent",
      period: "2023 - 2024",
      title: "Software Intern",
      tags: ["React", "JavaScript", "Web Tech"],
      desc: "Üniversite 2. sınıf kapsamında modern web teknolojileri ve dinamik arayüz geliştirme üzerine saha tecrübesi.",
      details: [
        "ASP.NET 8.0 kullanarak dinamik ve ölçeklenebilir bir web uygulaması geliştirdim.",
        "Dapper ORM ile SQL veritabanı entegrasyonu sağlayarak veri işlemlerini optimize ettim.",
        "RESTful API mimarisi ile frontend–backend arasında veri akışı sağlayan bir sistem tasarladım."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="minimal-exp-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[2000] bg-[#030303] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] uppercase font-bold"
              >
                Loading Experience
              </motion.span>
              <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cyan-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto py-24 px-6"
      >
        <header className="max-w-7xl mx-auto mb-20 border-l-2 border-cyan-500 pl-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] font-bold uppercase">
              Professional Timeline 2022-2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">DENEYİMLER</h1>
        </header>

        {/* ÜNİVERSİTE KARTI */}
        <motion.div className="relative mb-16 group p-[1px] rounded-2xl overflow-hidden bg-white/5">
           <div className="relative bg-[#080808] p-8 md:p-10 rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5">
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
                          transition={{ duration: 1.5, delay: 2.7, ease: "easeOut" }}
                          className="absolute h-full bg-cyan-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>

        <div className="flex items-center gap-4 mb-10 px-2">
          <span className="text-[9px] font-mono text-gray-400 font-black tracking-[0.4em] uppercase">
            Work_History
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* STAJLAR (ANIMASYONLU IŞIK EFEKTİ İLE) */}
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group relative p-[1px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* --- DÖNEN KENARLIK IŞIĞI --- */}
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030303_0%,#030303_70%,#06b6d4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-[#080808] border border-white/5 p-8 transition-all duration-500 group-hover:bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-white group-hover:text-cyan-500 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-50" />
                      <span className="text-[9px] font-mono text-gray-400 tracking-[0.1em] uppercase">
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-400 text-[13px] leading-relaxed max-w-2xl font-medium">
                      {exp.desc}
                    </p>

                    {/* YAPILANLAR LİSTESİ */}
                    <div className="space-y-2 py-2">
                      {exp.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 group/item">
                           <span className="text-cyan-500 mt-0.5 text-xs">✔</span>
                           <p className="text-[11px] text-gray-500 group-hover/item:text-gray-300 transition-colors leading-relaxed uppercase tracking-wide">
                             {detail}
                           </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[8px] font-mono font-bold border border-white/10 px-2 py-1 uppercase text-gray-400 group-hover:text-cyan-500 group-hover:border-cyan-500/30 transition-colors rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end justify-start shrink-0">
                    <span className="text-[10px] font-black uppercase text-white tracking-widest leading-none bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      {exp.title}
                    </span>
                    <span className="text-xs font-mono text-cyan-500 font-black mt-4 underline decoration-cyan-500/30 underline-offset-8">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-24 text-center">
          <div className="h-px w-20 bg-cyan-500/20 mx-auto mb-4" />
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.5em]">
            Mert Genc | EXPERIENCE
          </span>
        </footer>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;