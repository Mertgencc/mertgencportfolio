"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

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
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="designs-loader"
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
                Designs Loading
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designs.map((design) => (
            <div key={design.id} className="group relative p-[1px] rounded-2xl overflow-hidden flex flex-col">
              
              {/* --- DÖNEN KENARLIK IŞIĞI --- */}
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030303_0%,#030303_70%,#06b6d4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* --- KART İÇERİĞİ --- */}
              <div className="relative h-full bg-[#080808] rounded-2xl p-5 transition-all duration-500 group-hover:bg-[#0a0a0a]/90 backdrop-blur-xl flex flex-col">
                
                <div className="flex justify-start items-center mb-5">
                  <span className="text-[9px] font-mono text-cyan-500/70 font-bold uppercase tracking-widest bg-cyan-500/5 px-2 py-1 rounded">
                    {design.tag}
                  </span>
                </div>

                {/* grayscale kaldırıldı, direkt renkli görüntü */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 border border-white/5 transition-all duration-700">
                  <Image 
                    src={design.src} 
                    alt={design.alt} 
                    fill 
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                <div className="space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors uppercase line-clamp-1">
                      {design.alt}
                    </h2>
                    
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      <span className="px-2 py-0.5 border border-white/10 text-[7px] font-mono text-gray-400 uppercase tracking-tighter rounded group-hover:border-cyan-500/30 group-hover:text-cyan-500 transition-colors">
                        {design.width}x{design.height}
                      </span>
                      <span className="px-2 py-0.5 border border-white/10 text-[7px] font-mono text-gray-400 uppercase tracking-tighter rounded group-hover:border-cyan-500/30 group-hover:text-cyan-500 transition-colors">
                        HQ RENDER
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Link 
                      href={design.src} 
                      target="_blank" 
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/[0.03] hover:bg-white/10 border border-white/5 rounded-xl transition-all duration-300 group/btn"
                    >
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">İNCELE</span>
                      <svg className="w-3 h-3 text-cyan-500 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="max-w-7xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 py-12">
          <span className="text-[9px] font-mono text-white/20 tracking-[0.5em] uppercase">
            MERT GENÇ &bull; PORTFOLIO
          </span>
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

export default DesignsPage;