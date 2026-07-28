import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
