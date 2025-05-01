import React from 'react';

const DesignsPage: React.FC = () => {
  // Görsel verileri: Verdiğin sırayla, benzersiz id'ler ve anlamlı alt metinler
  const designs = [
    { id: 1, src: '/Elegance Elegance Elegance Elegance.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 2, src: '/ELEGANCE.png', alt: 'Elegance Temalı Tasarım' },
    { id: 3, src: '/HORROR.png', alt: 'Korku Temalı Tasarım' },
    { id: 4, src: '/MYSTERY.png', alt: 'Gizemli Tasarım' },
    { id: 5, src: '/Embrace the Breeze of Freedom.png', alt: 'Özgürlük Esintisi' },
    { id: 6, src: '/@gencmerttr (2).png', alt: 'Kişisel Marka Tasarımı 2' },
    { id: 7, src: '/MAKE UP.png', alt: 'Makyaj Temalı Tasarım' },
    { id: 8, src: '/Adsız tasarım (11).png', alt: 'Özgün Tasarım 11' },
    { id: 9, src: '/@gencmerttr (1).png', alt: 'Kişisel Marka Tasarımı 1' },
    { id: 10, src: '/THE (1).png', alt: 'Vurgulu Tasarım' },
    { id: 11, src: '/Paragraf metniniz (1).png', alt: 'Metin Odaklı Tasarım 1' },
    { id: 12, src: '/Paragraf metniniz.png', alt: 'Metin Odaklı Tasarım 2' },
    { id: 13, src: '/Çileğin tadına var....png', alt: 'Çilek Temalı Tasarım' },
    { id: 14, src: '/EARTH.png', alt: 'Doğa Temalı Tasarım' },
    { id: 15, src: '/dazzle (1).png', alt: 'Parıltılı Tasarım' },
    { id: 16, src: '/BURGER (1).png', alt: 'Burger Temalı Tasarım' },
    { id: 17, src: '/Pure Elegance (1).png', alt: 'Saf Zarafet Tasarımı' },
    { id: 18, src: '/Content that (1).png', alt: 'İçerik Odaklı Tasarım' },
    { id: 19, src: '/Güzellik, detaylarda saklı (1).png', alt: 'Detaylarda Güzellik' },
    { id: 20, src: '/completion (1).png', alt: 'Tamamlayıcı Tasarım' },
    { id: 21, src: '/DOG (1).png', alt: 'Köpek Temalı Tasarım' },
    { id: 22, src: '/Adsız tasarım (10).png', alt: 'Minimalist Tasarım' },
    { id: 23, src: '/clicks (1).png', alt: 'Tıklama Odaklı Tasarım' },
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
            <div className="relative w-full" style={{ paddingBottom: '125%' /* 1350/1080 oranı */ }}>
              <img
                src={design.src}
                alt={design.alt}
                className="absolute top-0 left-0 w-full h-full object-cover"
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