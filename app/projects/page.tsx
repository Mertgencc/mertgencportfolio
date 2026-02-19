"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'PORTFOLİO WEB SITE',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'Yüksek performanslı mimari ile tasarlanmış, Next.js tabanlı dijital ekosistem. SEO optimizasyonu ve düşük gecikmeli kullanıcı etkileşimi üzerine odaklanıldı.',
    image: '/portföy.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Next.js 14', 'Tailwind', 'Framer'],
  },
  {
    title: 'WALLPAPER WEB SITE',
    category: 'UI/UX ARCHITECTURE',
    description:
      'Bootstrap altyapısı üzerine inşa edilmiş, yüksek çözünürlüklü veri işleme ve responsive grid sistemi içeren görsel kütüphane platformu.',
    image: '/bootstrap.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Bootstrap 5', 'Fluid Design', 'Optimization'],
  },
  {
    title: 'ARDUINO WEB SITE',
    category: 'HARDWARE INTEGRATION',
    description:
      'IoT ve donanım bileşenlerinin web katmanında dokümantasyonu. Teknik devre şemaları ve sinyal işleme algoritmalarının web tabanlı görselleştirmesi.',
    image: '/arduino.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Arduino Core', 'Circuit Design', 'IoT'],
  },
  {
    title: 'NEOLAGIFT WEB SITE',
    category: 'ENTERPRISE SOLUTIONS',
    description:
      'ASP.NET 8.0 MVC mimarisi kullanılarak geliştirilmiş ölçeklenebilir satış motoru. SQL tabanlı ilişkisel veritabanı yönetimi ve güvenli transaction altyapısı.',
    image: '/neolagift.png',
    link: 'https://github.com/Mertgencc',
    badges: ['ASP.NET 8.0', 'MSSQL', 'MVC Architecture'],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white py-20 selection:bg-cyan-500/40">
      {/* Header - Engineering Style */}
      <div className="mb-24 border-l-2 border-cyan-500 pl-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-2"
        >
          <span className="text-[10px] font-mono text-cyan-500 tracking-[0.5em] font-bold uppercase">
            Project Archives 2022-2026
          </span>
        </motion.div>
        <motion.h1
          className="text-6xl md:text-6xl font-black tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          WORKPLACE<span className="text-white/10"> University Archive</span>
        </motion.h1>
      </div>

      {/* Grid - Professional Blueprint Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative border-r border-b border-white/10 p-0 overflow-hidden bg-[#050505]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Project Card Inner */}
            <div className="p-8 md:p-14 h-full flex flex-col justify-between group-hover:bg-white/[0.01] transition-colors duration-500">
              
              <div className="flex justify-between items-center mb-12">
                <span className="text-[9px] font-mono text-gray-500 tracking-[0.3em] font-bold uppercase group-hover:text-cyan-500 transition-colors">
                  // {project.category}
                </span>
                <span className="text-xs font-mono text-white/20">
                  [ 0{index + 1} ]
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-video mb-12 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 group-hover:border-cyan-500/30 transition-all duration-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-1 h-1 bg-white/20" />
                  <div className="w-1 h-1 bg-white/20" />
                </div>
              </div>

              {/* Textual Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tighter text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/[0.02] border border-white/5 text-[8px] font-mono text-cyan-500/70 uppercase tracking-widest group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Fixed Link Section */}
                <div className="pt-10">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-4 py-2 border-b-2 border-white/5 hover:border-cyan-500 transition-all duration-500"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Source</span>
                    <svg
                      className="w-4 h-4 text-cyan-500 transform group-hover/link:translate-x-2 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Glow Accent */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <span className="text-[10px] font-mono text-white/10 uppercase tracking-[1em]">
          End of File &bull; Mert Genc Archive
        </span>
      </div>
    </div>
  );
};

export default ProjectsPage;