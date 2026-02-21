"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  return (
    <div className="min-h-screen bg-[#030303] text-white py-20 px-4 selection:bg-cyan-500/30">
      
      {/* Header - Mavi Çizgi ve Küçültülmüş Başlık */}
      <header className="max-w-7xl mx-auto mb-20 border-l-2 border-cyan-500 pl-8 transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] font-bold uppercase">
            Project Archives 2022-2026
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WORKPLACE<span className="text-white/10"></span>
        </motion.h1>
        
        <p className="mt-6 text-gray-500 font-medium max-w-xl text-[12px] leading-relaxed uppercase tracking-wider">
          Yüksek performanslı dijital çözümler; kodun ve mimarinin 
          <span className="text-white font-bold px-1"> full-stack </span> 
          evrenindeki teknik yansıması.
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
            transition={{ delay: (index % 2) * 0.1 }}
          >
            <div className="p-8 md:p-12 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[9px] font-mono text-gray-500 tracking-[0.3em] font-bold uppercase group-hover:text-cyan-500 transition-colors">
                  // {project.category}
                </span>
                <span className="text-[9px] font-mono text-white/10">
                  [ 0{index + 1} ]
                </span>
              </div>

              <div className="relative aspect-video mb-8 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              <div className="space-y-4 flex-grow">
                <h2 className="text-2xl font-black tracking-tighter text-white/90 group-hover:text-white transition-colors uppercase">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-[12px] leading-relaxed font-medium line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.badges.map((badge, i) => (
                    <span key={i} className="px-2 py-1 bg-white/[0.02] border border-white/5 text-[8px] font-mono text-cyan-500/70 uppercase tracking-widest group-hover:text-cyan-400 transition-all">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={project.link}
                  target="_blank"
                  className="group/link inline-flex items-center gap-4 py-2 border-b border-white/5 hover:border-cyan-500 transition-all duration-500"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Source</span>
                  <svg className="w-3 h-3 text-cyan-500 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <footer className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
        <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase">
          End of File &bull; Mert Genc Archive
        </span>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-white/5" />
          <div className="w-2 h-2 bg-white/10" />
          <div className="w-2 h-2 bg-cyan-500/40 animate-pulse" />
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;