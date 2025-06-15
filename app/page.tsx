import React from "react";
import Layout from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
        role="region"
        aria-label="Ana sayfa içeriği"
      >
        <h1 className="text-3xl font-bold text-white">Hoş Geldiniz!</h1>
        <p className="mt-4 text-gray-300">
          Ben Mert Genç, Full Stack Developer. Projelerimi ve tasarımlarımı keşfetmek için navigasyon menüsünü kullanabilirsiniz.
        </p>
      </section>
    </Layout>
  );
}