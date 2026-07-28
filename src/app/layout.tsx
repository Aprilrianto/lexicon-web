import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  title: "Lexicon Novel - Platform Membaca Buku",
  description: "Platform membaca novel dan cerita pendek untuk mahasiswa dan umum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-warm-paper flex flex-col items-center font-merriweather text-[#3D2B1F]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
