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
    videoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7285680752933920769/',
    badges: ['Arduino Core', 'Circuit Design', 'IoT'],
  },
  {
    title: 'TASK MANAGEMENT SYSTEM',
    category: 'WEB APPLICATION',
    description: 'Dinamik veri yönetimi ve interaktif kullanıcı deneyimi sunan, iş akışını optimize eden görev yönetim platformu.',
    image: '/task.jpeg',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  },
  {
    title: 'MINIMAL NOTES APP',
    category: 'UI/UX DESIGN',
    description: 'Minimalist estetik anlayışıyla geliştirilmiş, kullanıcı odaklı ve yüksek okunabilirlik sunan not alma arayüzü.',
    image: '/notess.png',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  },
  {
    title: 'EXPENSE TRACKER',
    category: 'DATA ANALYSIS',
    description: 'Finansal verilerin anlık takibi, gelir-gider analizi ve bütçe yönetimi sağlayan teknik çözüm.',
    image: '/expense.png',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  },
  {
    title: 'SHOPPING TRACKER',
    category: 'E-COMMERCE UTILITY',
    description: 'Alışveriş listelerini optimize eden, kategori bazlı veri filtreleme özelliğine sahip yardımcı uygulama.',
    image: '/shop.png',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  },
  {
    title: 'BUDGET PLANNER',
    category: 'FINANCIAL ARCHITECTURE',
    description: 'Kapsamlı bütçe planlama ve tasarruf hedefleri belirleme imkanı sunan yüksek etkileşimli dashboard.',
    image: '/budget.jpeg',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  },
  {
    title: 'HABIT TRACKER',
    category: 'PRODUCTIVITY TOOL',
    description: 'Kişisel gelişim süreçlerini görselleştiren, alışkanlık takibi ve motivasyon odaklı dijital asistan.',
    image: '/image.png',
    link: 'https://github.com/Mertgencc',
    badges: ['HTML', 'CSS', 'JavaScript', 'Web'],
  }
];

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="projects-loader"
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
                Projects Loading
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
        initial={{ opacity: 0, y: 40 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pt-20 px-4 pb-20"
      >
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-[1px] rounded-2xl overflow-hidden">
              
              {/* --- DÖNEN KENARLIK IŞIĞI --- */}
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030303_0%,#030303_70%,#06b6d4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* --- KART İÇERİĞİ --- */}
              <div className="relative h-full bg-[#080808] rounded-2xl p-6 transition-all duration-500 group-hover:bg-[#0a0a0a]/90 backdrop-blur-xl">
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-mono text-cyan-500/70 font-bold uppercase tracking-widest bg-cyan-500/5 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  {/* Numaralandırma buradan kaldırıldı */}
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/5">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors uppercase">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.badges.map((badge, i) => (
                      <span key={i} className="px-2 py-0.5 border border-white/10 text-[7px] font-mono text-gray-400 uppercase tracking-tighter rounded group-hover:border-cyan-500/30 group-hover:text-cyan-500 transition-colors">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/[0.03] hover:bg-white/10 border border-white/5 rounded-xl transition-all duration-300 group/btn"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">GitHub</span>
                    <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  {project.videoLink && (
                    <Link 
                      href={project.videoLink} 
                      target="_blank" 
                      className="p-3 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all duration-300"
                    >
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 py-12">
          <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase">End of Archive &bull; Mert Genc Portfolio</span>
          <div className="flex gap-4 opacity-50">
            <div className="w-2 h-2 bg-white/5" />
            <div className="w-2 h-2 bg-white/10" />
            <div className="w-2 h-2 bg-cyan-500/40 animate-pulse" />
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;