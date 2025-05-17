import React from 'react';

const DesignsPage: React.FC = () => {
  // Görsel verileri: Verdiğin sırayla, benzersiz id'ler ve anlamlı alt metinler
  const designs = [
    { id: 1, src: '/Paragraf metniniz (8).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 2, src: '/Paragraf metniniz (7).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 3, src: '/YENİ FORMÜL.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 4, src: '/Adsız tasarım (25).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 5, src: '/Zarafet (1).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 6, src: '/ÇARPICI MAKYAJLARI SİZLERLE BULUŞTURUYORUZ (1).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 7, src: '/ÖZENLE SEÇİLDİ (1).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 8, src: '/Adsız tasarım (24).png', alt: 'Zarif Tasarım Koleksiyonu' },

    { id: 9, src: '/TA.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 10, src: '/Paragraf metniniz (6).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 11, src: '/Adsız tasarım (23).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 12, src: '/Adsız tasarım (22).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 13, src: '/Adsız tasarım (21).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 14, src: '/Paragraf metniniz (5).png', alt: 'Zarif Tasarım Koleksiyonu' },

    { id: 15, src: '/göster.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 16, src: '/Adsız tasarım (20).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 17, src: '/Sihirli Dokunuşlar (1).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 18, src: '/Adsız tasarım (19).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 19, src: '/özenle, sevgiyle.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 20, src: '/LOVE (2).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 21, src: '/senin için özenle seçildi.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 22, src: '/LOVE (1).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 23, src: '/AŞk.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 24, src: '/Zarif Anlar.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 25, src: '/Adsız tasarım (18).png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 26, src: '/Elegance Elegance Elegance Elegance.png', alt: 'Zarif Tasarım Koleksiyonu' },
    { id: 27, src: '/ELEGANCE.png', alt: 'Elegance Temalı Tasarım' },
    { id: 28, src: '/HORROR.png', alt: 'Korku Temalı Tasarım' },
    { id: 29, src: '/MYSTERY.png', alt: 'Gizemli Tasarım' },
    { id: 30, src: '/Embrace the Breeze of Freedom.png', alt: 'Özgürlük Esintisi' },
    { id: 31, src: '/@gencmerttr (2).png', alt: 'Kişisel Marka Tasarımı 2' },
    { id: 32, src: '/MAKE UP.png', alt: 'Makyaj Temalı Tasarım' },
    { id: 33, src: '/Adsız tasarım (11).png', alt: 'Özgün Tasarım 11' },
    { id: 34, src: '/@gencmerttr (1).png', alt: 'Kişisel Marka Tasarımı 1' },
    { id: 35, src: '/THE (1).png', alt: 'Vurgulu Tasarım' },
    { id: 36, src: '/Paragraf metniniz (1).png', alt: 'Metin Odaklı Tasarım 1' },
    { id: 37, src: '/Paragraf metniniz.png', alt: 'Metin Odaklı Tasarım 2' },
    { id: 38, src: '/Çileğin tadına var....png', alt: 'Çilek Temalı Tasarım' },
    { id: 39, src: '/EARTH.png', alt: 'Doğa Temalı Tasarım' },
    { id: 40, src: '/dazzle (1).png', alt: 'Parıltılı Tasarım' },
    { id: 41, src: '/BURGER (1).png', alt: 'Burger Temalı Tasarım' },
    { id: 42, src: '/Pure Elegance (1).png', alt: 'Saf Zarafet Tasarımı' },
    { id: 43, src: '/Content that (1).png', alt: 'İçerik Odaklı Tasarım' },
    { id: 44, src: '/Güzellik, detaylarda saklı (1).png', alt: 'Detaylarda Güzellik' },
    { id: 45, src: '/completion (1).png', alt: 'Tamamlayıcı Tasarım' },
    { id: 46, src: '/DOG (1).png', alt: 'Köpek Temalı Tasarım' },
    { id: 47, src: '/Adsız tasarım (10).png', alt: 'Minimalist Tasarım' },
    { id: 48, src: '/clicks (1).png', alt: 'Tıklama Odaklı Tasarım' },
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