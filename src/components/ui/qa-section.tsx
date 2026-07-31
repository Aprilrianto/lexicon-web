"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Headphones,
  GraduationCap,
  Sparkles,
  PenTool,
  ShieldCheck,
  Check,
  Lock,
  Search,
  X,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export interface QAItem {
  id: string;
  icon: React.ElementType;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: "umum" | "mahasiswa" | "penulis" | "fitur";
  rotation?: string; // CSS rotation value like '-rotate-2'
}

const QA_ITEMS: QAItem[] = [
  {
    id: "qa-1",
    icon: BookOpen,
    category: "umum",
    question: "Bagaimana cara mulai membaca?",
    shortAnswer: "Cukup daftar akun gratis, jelajahi ribuan novel & cerpen, dan mulai membaca secara gratis langsung dari peramban.",
    fullAnswer: "Anda dapat mendaftar menggunakan email atau Google. Setelah masuk, Anda dapat langsung menjelajahi katalog fiksi, non-fiksi, cerpen, hingga karya independen. Nikmati pengalaman membaca nyaman tanpa iklan pengganggu di semua perangkat desktop maupun ponsel.",
    rotation: "-rotate-2"
  },
  {
    id: "qa-2",
    icon: Headphones,
    category: "fitur",
    question: "Apakah ada fitur Audiobook?",
    shortAnswer: "Tersedia! Ribuan judul pilihan sudah dilengkapi narasi suara jernih berkualitas studio untuk didengarkan saat beraktivitas.",
    fullAnswer: "Setiap buku berlabel 'Audiobook' memiliki opsi narasi suara definisi tinggi. Anda bisa mendengarkan sambil mengemudi, berolahraga, atau bersantai. Dilengkapi pengatur kecepatan putar (0.75x hingga 2.0x) dan pengatur waktu tidur otomatis.",
    rotation: "rotate-1"
  },
  {
    id: "qa-3",
    icon: GraduationCap,
    category: "mahasiswa",
    question: "Diskon khusus mahasiswa",
    shortAnswer: "Mahasiswa mendapat potongan harga hingga 30% untuk langganan premium dengan verifikasi email kampus (ac.id).",
    fullAnswer: "Kami mendukung kegiatan akademis dan literasi mahasiswa. Cukup gunakan email kampus resmi saat pendaftaran atau ajukan verifikasi kartu tanda mahasiswa (KTM) aktif di halaman profil untuk membuka akses diskon spesial 30% seumur hidup perkuliahan.",
    rotation: "-rotate-1"
  },
  {
    id: "qa-4",
    icon: Sparkles,
    category: "fitur",
    question: "Rekomendasi AI pintar",
    shortAnswer: "Sistem cerdas kami mempelajari preferensi genre dan gaya baca Anda untuk merekomendasikan judul yang paling pas.",
    fullAnswer: "Algoritma ramah pengguna Lexicon menganalisis kebiasaan membaca Anda tanpa melanggar privasi. Semakin banyak buku yang Anda tandai atau selesaikan, semakin akurat saran cerita menarik berikutnya yang akan muncul di beranda Anda.",
    rotation: "rotate-2"
  },
  {
    id: "qa-5",
    icon: PenTool,
    category: "penulis",
    question: "Royalti transparan penulis",
    shortAnswer: "Dapatkan bagi hasil royalti transparan hingga 70% untuk setiap penjualan karya dengan laporan finansial real-time.",
    fullAnswer: "Lexicon memberikan panggung bagi penulis muda dan profesional. Anda mempertahankan hak cipta penuh atas karya Anda dan mendapatkan dasbor analisis untuk memantau jumlah pembaca, ulasan, serta pendapatan bulanan secara otomatis dan transparan.",
    rotation: "-rotate-1"
  },
  {
    id: "qa-6",
    icon: ShieldCheck,
    category: "umum",
    question: "Perlindungan naskah & DRM",
    shortAnswer: "Semua naskah dilindungi enkripsi digital canggih dan pencegahan penggandaan tanpa izin untuk keamanan penulis.",
    fullAnswer: "Kami mengutamakan keamanan karya literasi. Sistem Lexicon menggunakan enkripsi DRM modern dan watermark digital berpemilik untuk mencegah pengunduhan ilegal dan redistribusi tanpa izin dari pihak yang tidak bertanggung jawab.",
    rotation: "rotate-1"
  }
];

export function QASection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeQA, setActiveQA] = useState<QAItem | null>(null);

  const filteredItems = QA_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "semua" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-[#F6F3EC] text-[#3D2B1F] pt-6 md:pt-8 pb-20 px-4 md:px-8 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Filter & Search Bar Option */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-none">
            {[
              { id: "semua", label: "Semua Jawaban" },
              { id: "umum", label: "Umum" },
              { id: "mahasiswa", label: "Mahasiswa" },
              { id: "penulis", label: "Penulis" },
              { id: "fitur", label: "Fitur AI" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-editorial font-semibold tracking-wide transition-all duration-200 shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-[#3D2B1F] text-[#FAF8F3] shadow-md"
                    : "bg-[#FAF8F3] text-[#3D2B1F]/80 hover:bg-[#EFE9DC] border border-[#3D2B1F]/15"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full bg-[#FAF8F3] border border-[#3D2B1F]/15 rounded-full py-2 pl-9 pr-4 text-xs font-sans text-[#3D2B1F] placeholder:text-[#3D2B1F]/40 focus:outline-none focus:border-[#DDA15E] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40 hover:text-[#3D2B1F]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* MAIN LAYOUT: Reference layout with 3 columns on LG screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT COLUMN: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {filteredItems.slice(0, 3).map((item, idx) => (
              <QACard
                key={item.id}
                item={item}
                delay={idx * 0.1}
                onClick={() => setActiveQA(item)}
              />
            ))}
            {filteredItems.length === 0 && (
              <div className="bg-[#FAF8F3] p-6 rounded-2xl border border-[#3D2B1F]/10 text-center text-[#3D2B1F]/60 text-xs font-sans">
                Tidak ada pertanyaan yang sesuai pencarian.
              </div>
            )}
          </div>

          {/* CENTER HERO BLOCK */}
          <div className="lg:col-span-4 flex flex-col items-center text-center py-6 lg:py-0 order-1 lg:order-2 px-2">
            
            {/* Top Brand / Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#EFE9DC] border border-[#3D2B1F]/15 px-3.5 py-1.5 rounded-full mb-6 text-[#3D2B1F] font-bold text-xs shadow-sm"
            >
              <div className="w-5 h-5 rounded-md bg-[#3D2B1F] text-[#FAF8F3] flex items-center justify-center">
                <HelpCircle className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wider font-editorial uppercase text-[11px] font-bold text-[#3D2B1F]">
                Lexicon Q&A
              </span>
            </motion.div>

            {/* Main Headline (Solid colors matching Lexicon site theme, NO gradient) */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-editorial text-4xl md:text-5xl lg:text-5xl font-bold text-[#3D2B1F] leading-[1.15] tracking-tight mb-5"
            >
              Jawaban serba <br />
              lengkap <span className="text-[#C55636]">terjawab.</span>
            </motion.h2>

            {/* Subtitle text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-[#3D2B1F]/80 text-sm md:text-base max-w-sm mx-auto leading-relaxed mb-8 font-normal"
            >
              Informasi lengkap seputar keanggotaan mahasiswa, koleksi buku digital, fitur audiobook, hingga royalti penulis.
            </motion.p>

            {/* Checkmark sub-badges at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#3D2B1F]/80 font-editorial font-medium"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C55636] stroke-[3]" />
                <span>Akses gratis awal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#3D2B1F]/60" />
                <span>Bebas iklan & spam</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3 lg:order-3">
            {filteredItems.slice(3, 6).map((item, idx) => (
              <QACard
                key={item.id}
                item={item}
                delay={(idx + 3) * 0.1}
                onClick={() => setActiveQA(item)}
              />
            ))}
          </div>

        </div>

      </div>

      {/* DETAILED MODAL / DIALOG ON CARD CLICK */}
      <AnimatePresence>
        {activeQA && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D2B1F]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-[#3D2B1F]/15"
            >
              {/* Top Row inside Modal */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EFE9DC] text-[#3D2B1F] border border-[#3D2B1F]/15 flex items-center justify-center">
                  <activeQA.icon className="w-6 h-6 text-[#C55636]" />
                </div>
                <button
                  onClick={() => setActiveQA(null)}
                  className="p-2 rounded-full text-[#3D2B1F]/50 hover:text-[#3D2B1F] hover:bg-[#EFE9DC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="font-editorial text-xl font-bold text-[#3D2B1F] mb-3 leading-snug">
                {activeQA.question}
              </h3>

              <p className="font-sans text-sm text-[#3D2B1F]/80 leading-relaxed mb-6">
                {activeQA.fullAnswer}
              </p>

              <div className="pt-4 border-t border-[#3D2B1F]/10 flex items-center justify-between">
                <span className="font-editorial text-xs font-semibold uppercase tracking-wider text-[#C55636] bg-[#C55636]/10 px-3 py-1 rounded-full border border-[#C55636]/20">
                  Kategori: {activeQA.category}
                </span>
                <button
                  onClick={() => setActiveQA(null)}
                  className="px-5 py-2 rounded-full bg-[#3D2B1F] text-[#FAF8F3] font-editorial font-semibold text-xs hover:bg-[#C55636] transition-colors shadow-sm"
                >
                  Paham, Terima Kasih
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

{/* Individual Q&A Floating Card Component (Solid colors, no gradient, matches website theme) */}
interface QACardProps {
  item: QAItem;
  delay: number;
  onClick: () => void;
}

function QACard({ item, delay, onClick }: QACardProps) {
  const IconComponent = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className={`group relative bg-[#FAF8F3] rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(61,43,31,0.06)] border border-[#3D2B1F]/10 hover:border-[#DDA15E] hover:shadow-[0_12px_30px_rgba(61,43,31,0.12)] transition-all duration-300 cursor-pointer transform ${item.rotation || ""} hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* Top Right Status Dot (Solid warm gold #DDA15E, NO gradient) */}
      <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-[#DDA15E]" />

      {/* Top Left Icon Container (Warm beige badge) */}
      <div className="w-11 h-11 rounded-xl bg-[#EFE9DC] text-[#3D2B1F] border border-[#3D2B1F]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#DDA15E]/20">
        <IconComponent className="w-5.5 h-5.5 text-[#C55636]" />
      </div>

      {/* Card Title (Question) */}
      <h3 className="font-editorial font-bold text-[#3D2B1F] text-base md:text-[17px] mb-2 leading-snug group-hover:text-[#C55636] transition-colors">
        {item.question}
      </h3>

      {/* Card Short Snippet (Answer) */}
      <p className="font-sans text-[#3D2B1F]/70 text-xs md:text-sm leading-relaxed font-normal">
        {item.shortAnswer}
      </p>

      {/* Bottom Link Cue */}
      <div className="mt-4 flex items-center gap-1 text-[11px] font-editorial font-semibold text-[#C55636] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Baca rincian selengkapnya</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}
