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
      <body className="min-h-screen bg-warm-paper flex flex-col items-center font-sans text-[#3D2B1F]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
