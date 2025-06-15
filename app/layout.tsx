"use client";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mert Genç - Full Stack Developer</title>
        <meta name="description" content="Mert Genç'in kişisel portföy sitesi. Full Stack Developer projeleri ve tasarımları." />
      </head>
      <body className="bg-black ">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}