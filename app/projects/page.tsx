import React from "react";
import Image from "next/image"; // next/image bileşenini ekliyoruz

const projects = [
  {
    title: "Portföy Sitesi",
    description:
      "Next.js ve React ile geliştirdiğim bu kişisel portföy web sitesi, yazılım alanındaki yeteneklerimi ve projelerimi sergilemek için tasarlandı. Hızlı, SEO uyumlu ve modern bir arayüze sahip olup, projelerimi ve yazılarımı paylaşabileceğim dinamik bir yapıya sahip. Karanlık ve aydınlık mod desteği sunarak kullanıcı deneyimini artırıyor ve API entegrasyonu ile içerikler dinamik olarak yönetiliyor. Gelecekte yeni özellikler ekleyerek daha interaktif hale getirmeyi planlıyorum.",
    image: "/portföy.png",
    link: "https://github.com/Mertgencc",
  },
  {
    title: "Wallpaper Edinme Sitesi",
    description:
      "Bootstrap ile geliştirdiğim bu web sitesi, modern ve duyarlı bir tasarıma sahip olup, kullanıcı dostu bir arayüz sunuyor. Esnek ızgara yapısı ve bileşenleri sayesinde tüm cihazlara uyumlu bir deneyim sağlıyor. Hızlı ve etkili bir şekilde tasarlanan site, projelerimi ve içeriklerimi kolayca yönetmeme olanak tanıyor. Görsel ve işlevsellik açısından optimize edilmiş olup, ilerleyen süreçte yeni özellikler ekleyerek geliştirmeyi planlıyorum.",
    image: "/bootstrap.png",
    link: "https://github.com/Mertgencc",
  },
  {
    title: "Arduino İlişkili Site (Walltopia)",
    description:
      "Arduino projem için geliştirdiğim bu web sitesi, projenin detaylarını tanıtmak ve çalışma prensibini açıklamak amacıyla tasarlandı. Kullanıcı dostu ve duyarlı bir arayüze sahip olup, proje bileşenleri, devre şemaları ve kod örnekleri gibi bilgileri içerecek şekilde düzenlendi. Hızlı ve erişilebilir bir yapıya sahip olan site, projenin anlaşılmasını kolaylaştırırken görselliğiyle de destekleniyor. Gelecekte yeni içerikler ekleyerek daha kapsamlı hale getirmeyi planlıyorum.",
    image: "/arduino.png",
    link: "https://github.com/Mertgencc",
  },
  {
    title: "Hediyelik Eşya Sitesi (NeolaGift)",
    description:
      "ASP.NET 8.0 MVC ve SQL kullanarak geliştirdiğim bu hediyelik eşya satış sitesi, kullanıcıların çeşitli ürünleri inceleyip kolayca satın alabilmesini sağlamak için tasarlandı. Modern ve duyarlı bir arayüze sahip olan site, ürün yönetimi, sipariş takibi ve güvenli ödeme gibi temel e-ticaret özelliklerini içeriyor. SQL veritabanı ile ürün ve kullanıcı bilgileri güvenli bir şekilde saklanırken, MVC mimarisi sayesinde ölçeklenebilir ve yönetilebilir bir yapı sunuyor. Gelecekte yeni özellikler ekleyerek kullanıcı deneyimini daha da geliştirmeyi hedefliyorum.",
    image: "/neolagift.png",
    link: "https://github.com/Mertgencc",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Projelerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 p-4 rounded-lg shadow-md"
          >
            <Image
              src={project.image}
              alt={project.title} // görselin alternatif metni
              width={500} // genişlik belirliyoruz
              height={300} // yükseklik belirliyoruz
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="mt-3 inline-block text-blue-500 hover:underline"
            >
              GitHub&apos;da Görüntüle
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
