import React from "react";
import { QASection } from "@/components/ui/qa-section";

export const metadata = {
  title: "Q&A & Pusat Bantuan - Lexicon Novel",
  description: "Pertanyaan umum seputar akses buku digital, keanggotaan mahasiswa, audiobook, dan royalti penulis.",
};

export default function QAPage() {
  return (
    <main className="w-full flex-grow pt-0">
      <QASection />
    </main>
  );
}
