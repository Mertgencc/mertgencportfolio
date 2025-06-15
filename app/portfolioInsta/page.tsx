import React from 'react';
import Image from 'next/image';

const DesignsPage: React.FC = () => {
  // Görsel verileri: Verdiğin sırayla, benzersiz id'ler ve anlamlı alt metinler
  const designs = [
    { id: 1, src: '/Paragraf metniniz (8).png', alt: 'Zarif Tasarım Koleksiyonu', width: 1080, height: 1350 },
    { id: 2, src: '/Paragraf metniniz (7).png', alt: 'Zarif Tasarım Koleksiyonu', width: 1080, height: 1350 },
    { id: 3, src: '/YENİ FORMÜL.png', alt: 'Zarif Tasarım Koleksiyonu', width: 1080, height: 1350 },
    { id: 4, src: '/Adsız tasarım (25).png', alt: 'Zarif Tasarım Koleksiyonu', width: 1080, height: 1350 },
    // Diğer tüm görseller için aynı şekilde width ve height ekleyin
    // ...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Tasarım Portföyüm
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Yaratıcı ve özgün tasarımlarımı keşfedin, her biri bir hikaye anlatıyor.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {designs.map((design) => (
          <div
            key={design.id}
            className="relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/5]"> {/* 1080/1350 oranı */}
              <Image
                src={design.src}
                alt={design.alt}
                width={design.width}
                height={design.height}
                className="absolute top-0 left-0 w-full h-full object-cover"
                quality={85}
                priority={design.id <= 12} // İlk 12 görsele öncelik ver
              />
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-gray-700 text-center font-medium">{design.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignsPage;