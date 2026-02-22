"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'PORTFOLİO WEB SITE',
    category: 'FULL-STACK DEVELOPMENT',
    description: 'Yüksek performanslı mimari ile tasarlanmış, Next.js tabanlı dijital ekosistem. SEO optimizasyonu ve düşük gecikmeli kullanıcı etkileşimi üzerine odaklanıldı.',
    image: '/1.jpg',
    link: 'https://github.com/Mertgencc',
    badges: ['Next.js 14', 'Tailwind', 'Framer'],
  },
  {
    title: 'WALLPAPER WEB SITE',
    category: 'UI/UX ARCHITECTURE',
    description: 'Bootstrap altyapısı üzerine inşa edilmiş, yüksek çözünürlüklü veri işleme ve responsive grid sistemi içeren görsel kütüphane platformu.',
    image: '/2.jpg',
    link: 'https://github.com/Mertgencc',
    badges: ['Bootstrap 5', 'Fluid Design', 'Optimization'],
  },
  {
    title: 'ARDUINO WEB SITE',
    category: 'HARDWARE INTEGRATION',
    description: 'IoT ve donanım bileşenlerinin web katmanında dokümantasyonu. Teknik devre şemaları ve sinyal işleme algoritmalarının web tabanlı görselleştirmesi.',
    image: '/arduino.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Arduino Core', 'Circuit Design', 'IoT'],
  },
];

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 saniye sonra projeleri göster
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- PROJECTS LOADER --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="projects-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.05,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[2000] bg-[#030303] flex items-center justify-center"
          >
            {/* Arka Plan Glow Efekti */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Dönen Orbital Halka */}
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

                {/* MERKEZDEKİ "PROJECTS" YAZISI */}
                <div className="flex flex-col items-center z-10">
                  <div className="flex gap-1.5 md:gap-2">
                    {"PROJECTS".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 1,
                          color: ["#1f2937", "#22d3ee", "#1f2937"] 
                        }}
                        transition={{ 
                          delay: i * 0.15,
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-2xl md:text-3xl font-black tracking-widest uppercase"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-[1px] bg-cyan-500/50 mt-2" 
                  />
                  <span className="mt-2 text-[8px] font-mono tracking-[0.5em] text-white/20 uppercase">
                    Loading Workplace
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ASIL İÇERİK --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pt-20 px-4"
      >
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-20 border-l-2 border-cyan-500 pl-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] font-bold uppercase">
              Project Archives 2022-2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">WORKPLACE</h1>
          <p className="mt-6 text-gray-500 font-medium max-w-xl text-[12px] leading-relaxed uppercase tracking-wider">
            Yüksek performanslı dijital çözümler; kodun ve mimarinin <span className="text-white font-bold px-1">full-stack</span> evrenindeki teknik yansıması.
          </p>
        </header>

        {/* Grid Yapısı */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#050505] overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-12 h-full flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[9px] font-mono text-gray-500 tracking-[0.3em] font-bold uppercase group-hover:text-cyan-500 transition-colors">
                    // {project.category}
                  </span>
                  <span className="text-[9px] font-mono text-white/10">[ 0{index + 1} ]</span>
                </div>

                <div className="relative aspect-video mb-8 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={project.image} alt={project.title} fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                <div className="space-y-4 flex-grow">
                  <h2 className="text-2xl font-black tracking-tighter text-white/90 group-hover:text-white transition-colors uppercase">{project.title}</h2>
                  <p className="text-gray-500 text-[12px] leading-relaxed font-medium line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.badges.map((badge, i) => (
                      <span key={i} className="px-2 py-1 bg-white/[0.02] border border-white/5 text-[8px] font-mono text-cyan-500/70 uppercase tracking-widest group-hover:text-cyan-400 transition-all">{badge}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link href={project.link} target="_blank" className="group/link inline-flex items-center gap-4 py-2 border-b border-white/5 hover:border-cyan-500 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Source</span>
                    <svg className="w-3 h-3 text-cyan-500 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 py-8">
          <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase">End of File &bull; Mert Genc Archive</span>
          <div className="flex gap-4"><div className="w-2 h-2 bg-white/5" /><div className="w-2 h-2 bg-white/10" /><div className="w-2 h-2 bg-cyan-500/40 animate-pulse" /></div>
        </footer>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;