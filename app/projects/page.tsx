"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Portföy Sitesi',
    description:
      'Next.js ve React ile geliştirdiğim bu kişisel portföy web sitesi, yazılım alanındaki yeteneklerimi ve projelerimi sergilemek için tasarlandı. Hızlı, SEO uyumlu ve modern bir arayüze sahip olup, projelerimi ve yazılarımı paylaşabileceğim dinamik bir yapıya sahip. Karanlık ve aydınlık mod desteği sunarak kullanıcı deneyimini artırıyor ve API entegrasyonu ile içerikler dinamik olarak yönetiliyor. Gelecekte yeni özellikler ekleyerek daha interaktif hale getirmeyi planlıyorum.',
    image: '/portföy.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Next.js', 'React', 'TailwindCSS'],
  },
  {
    title: 'Wallpaper Edinme Sitesi',
    description:
      'Bootstrap ile geliştirdiğim bu web sitesi, modern ve duyarlı bir tasarıma sahip olup, kullanıcı dostu bir arayüz sunuyor. Esnek ızgara yapısı ve bileşenleri sayesinde tüm cihazlara uyumlu bir deneyim sağlıyor. Hızlı ve etkili bir şekilde tasarlanan site, projelerimi ve içeriklerimi kolayca yönetmeme olanak tanıyor. Görsel ve işlevsellik açısından optimize edilmiş olup, ilerleyen süreçte yeni özellikler ekleyerek geliştirmeyi planlıyorum.',
    image: '/bootstrap.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Bootstrap', 'Responsive', 'UI/UX'],
  },
  {
    title: 'Arduino İlişkili Site (Walltopia)',
    description:
      'Arduino projem için geliştirdiğim bu web sitesi, projenin detaylarını tanıtmak ve çalışma prensibini açıklamak amacıyla tasarlandı. Kullanıcı dostu ve duyarlı bir arayüze sahip olup, proje bileşenleri, devre şemaları ve kod örnekleri gibi bilgileri içerecek şekilde düzenlendi. Hızlı ve erişilebilir bir yapıya sahip olan site, projenin anlaşılmasını kolaylaştırırken görselliğiyle de destekleniyor. Gelecekte yeni içerikler ekleyerek daha kapsamlı hale getirmeyi planlıyorum.',
    image: '/arduino.png',
    link: 'https://github.com/Mertgencc',
    badges: ['Arduino', 'Web Design', 'Documentation'],
  },
  {
    title: 'Hediyelik Eşya Sitesi (NeolaGift)',
    description:
      'ASP.NET 8.0 MVC ve SQL kullanarak geliştirdiğim bu hediyelik eşya satış sitesi, kullanıcıların çeşitli ürünleri inceleyip kolayca satın alabilmesini sağlamak için tasarlandı. Modern ve duyarlı bir arayüze sahip olan site, ürün yönetimi, sipariş takibi ve güvenli ödeme gibi temel e-ticaret özelliklerini içeriyor. SQL veritabanı ile ürün ve kullanıcı bilgileri güvenli bir şekilde saklanırken, MVC mimarisi sayesinde ölçeklenebilir ve yönetilebilir bir yapı sunuyor. Gelecekte yeni özellikler ekleyerek kullanıcı deneyimini daha da geliştirmeyi hedefliyorum.',
    image: '/neolagift.png',
    link: 'https://github.com/Mertgencc',
    badges: ['ASP.NET', 'SQL', 'MVC'],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 md:p-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projelerim
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} // İlk proje için öncelikli yükleme
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">{project.title}</h2>
              <p className="text-gray-300 text-sm mb-4 line-clamp-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                GitHub&apos;da Görüntüle
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-xl"
              whileHover={{ borderColor: 'rgba(236, 72, 153, 0.5)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;