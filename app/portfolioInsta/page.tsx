"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const designs = [
  { id: 1, src: '/ESSENCE.png', alt: 'Minimalist Composition', width: 1080, height: 1350, tag: 'SOCIAL_MEDIA' },
  { id: 2, src: '/NOIR VIOLET.png', alt: 'Visual Identity Study', width: 1080, height: 1350, tag: 'BRANDING' },
  { id: 3, src: '/NIGHT VELVET.png', alt: 'Typographic Layout', width: 1080, height: 1350, tag: 'POSTER' },
  { id: 4, src: '/AZURE.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 5, src: '/BEYOND.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 6, src: '/Mystery (2).png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 7, src: '/Paragraf metniniz (9).png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 8, src: '/Zarafet - 1.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 9, src: '/ÇARPICI MAKYAJLARI SİZLERLE BULUŞTURUYORUZ - 1.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 10, src: '/Göster - 1.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 11, src: '/LOVE - 1.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 12, src: '/Paragraf metniniz (8).png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 13, src: '/Paragraf metniniz (7).png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
  { id: 14, src: '/YENİ FORMÜL.png', alt: 'Abstract Digital Art', width: 1080, height: 1350, tag: 'CONCEPT' },
];

const DesignsPage: React.FC = () => {
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
            Prototype Product Design
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          DESIGN<span className="text-white/10"></span>
        </motion.h1>
        
        <p className="mt-6 text-gray-500 font-medium max-w-xl text-[12px] leading-relaxed uppercase tracking-wider">
          Yaratıcı süreçlerin dijital çıktısı; estetik ve fonksiyonun 
          <span className="text-white font-bold px-1"> 1080x1350 </span> 
          tuvalindeki yansıması.
        </p>
      </header>

      {/* Grid Yapısı */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {designs.map((design, index) => (
          <motion.div
            key={`${design.id}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1 }}
            className="group relative bg-[#050505] overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src={design.src}
                alt={design.alt}
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={90}
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[8px] font-mono text-cyan-400 tracking-[0.2em]">
                  {design.tag}
                </span>
              </div>
            </div>

            <div className="p-5 border-t border-white/5 space-y-2 relative z-10">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-black text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase truncate pr-4">
                  {design.alt}
                </p>
                <span className="text-[9px] font-mono text-white/10 shrink-0">
                  ID_{design.id.toString().padStart(3, '0')}
                </span>
              </div>
              <div className="flex gap-1 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1 w-8 bg-cyan-500/50" />
                <div className="h-1 w-2 bg-white/20" />
                <div className="h-1 w-1 bg-white/20" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <footer className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
        <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase">
          Rendered in 2026.sys &bull; Mert Genc
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

export default DesignsPage;