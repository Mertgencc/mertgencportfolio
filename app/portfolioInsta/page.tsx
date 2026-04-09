"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- DESIGNS LOADER (SADELEŞTİRİLMİŞ) --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="minimal-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[2000] bg-[#030303] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[10px] font-mono text-white/80 tracking-[0.5em] uppercase"
              >
                Loading Designs
              </motion.span>
              
              <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white"
                />
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
        className="py-20 px-4"
      >
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-20 border-l-2 border-cyan-500 pl-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] font-bold uppercase">
              Prototype Product Design
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">DESIGN</h1>
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
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
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
      </motion.div>
    </div>
  );
};

export default DesignsPage;