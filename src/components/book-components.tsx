"use client";

import React from "react";
import { Book } from "@/lib/books-data";
import { 
  X, 
  Star, 
  Clock, 
  BookOpen, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  Globe, 
  Building2, 
  Hash, 
  Calendar,
  Sparkles,
  Quote,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

export function BookCoverVisual({ book }: { book: Book }) {
  switch (book.coverStyle) {
    case "yellow-teapot":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-4 flex flex-col justify-between text-[#3D2B1F]`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-sans uppercase tracking-widest font-bold opacity-75">REVISED EDITION</span>
            {book.badge && <span className="text-[9px] font-bold px-2 py-0.5 bg-[#3D2B1F] text-[#FAF8F3] rounded-md">{book.badge}</span>}
          </div>
          <div className="my-auto py-2">
            <h3 className="font-editorial text-base sm:text-xl font-bold leading-tight drop-shadow-sm">
              {book.title}
            </h3>
            <div className="w-9 h-9 sm:w-12 sm:h-12 my-3 rounded-full bg-[#3D2B1F]/10 border border-[#3D2B1F]/20 flex items-center justify-center shadow-inner">
              <span className="text-base sm:text-xl">🫖</span>
            </div>
          </div>
          <p className="font-editorial italic text-xs sm:text-sm font-semibold">{book.author}</p>
        </div>
      );

    case "oreilly-bird":
      return (
        <div className="absolute inset-0 bg-[#FAF8F3] border-4 border-white p-4 flex flex-col justify-between text-[#2D3136]">
          <div className="flex items-center justify-between border-b border-[#2D3136]/20 pb-1.5">
            <span className="text-[10px] font-bold tracking-wider text-[#C55636]">O'REILLY MEDIA</span>
          </div>
          <div className="my-auto text-center py-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 opacity-85 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl">🦅</span>
            </div>
            <h3 className="font-sans text-sm sm:text-base font-black leading-tight text-[#2D3136] tracking-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs text-center text-[#2D3136]/70 border-t border-[#2D3136]/20 pt-1.5">
            {book.author}
          </p>
        </div>
      );

    case "lotr-ring":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-4 flex flex-col justify-between text-[#FAF8F3]`}>
          <span className="text-[9px] font-sans uppercase tracking-widest text-[#DDA15E]">HARPERCOLLINS PUBLISHERS</span>
          <div className="my-auto text-center py-2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto my-2 rounded-full border-2 border-[#DDA15E] shadow-[0_0_16px_rgba(221,161,94,0.5)] flex items-center justify-center">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#DDA15E]/60"></div>
            </div>
            <h3 className="font-editorial text-sm sm:text-lg font-bold text-[#DDA15E] tracking-wide uppercase leading-snug">
              {book.title}
            </h3>
          </div>
          <p className="font-editorial italic text-xs sm:text-sm text-center text-white/80">{book.author}</p>
        </div>
      );

    case "eagle-sky":
      return (
        <div className={`absolute inset-0 bg-gradient-to-b ${book.coverBgGradient} p-4 flex flex-col justify-between text-[#FAF8F3]`}>
          <div className="text-[9px] tracking-widest uppercase opacity-85 font-bold">LIETUVOS GAMTA</div>
          <div className="my-auto text-center py-2">
            <span className="text-3xl sm:text-4xl block my-2">🦅</span>
            <h3 className="font-editorial text-sm sm:text-base font-bold leading-tight drop-shadow">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs opacity-80">{book.author}</p>
        </div>
      );

    case "steve-jobs":
      return (
        <div className="absolute inset-0 bg-white p-4 flex flex-col justify-between text-black">
          <span className="text-[9px] font-mono tracking-widest text-black/50 font-bold">BIOGRAPHY</span>
          <div className="my-auto text-center py-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-3xl sm:text-4xl mb-2 shadow-inner">
              👨‍💼
            </div>
            <h3 className="font-editorial text-base sm:text-xl font-black tracking-tight leading-tight">
              STEVE JOBS
            </h3>
          </div>
          <p className="font-sans text-xs text-center text-slate-500">{book.author}</p>
        </div>
      );

    case "switzerland":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-4 flex flex-col justify-between text-white`}>
          <span className="text-[9px] font-bold bg-red-600 px-2 py-0.5 rounded self-start tracking-wider">SWISS HERITAGE</span>
          <div className="my-auto text-center py-2">
            <span className="text-3xl sm:text-4xl block my-2">🏔️</span>
            <h3 className="font-editorial text-sm sm:text-base font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs opacity-85">{book.author}</p>
        </div>
      );

    case "mountain-bike":
      return (
        <div className={`absolute inset-0 bg-gradient-to-b ${book.coverBgGradient} p-4 flex flex-col justify-between text-white`}>
          <span className="text-[9px] font-sans tracking-widest uppercase opacity-80 font-bold">GESTALTEN PRESS</span>
          <div className="my-auto text-center py-2">
            <span className="text-3xl sm:text-4xl block my-2">🚴‍♂️</span>
            <h3 className="font-editorial text-sm sm:text-base font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs text-white/80">{book.author}</p>
        </div>
      );

    case "hobbit-oriental":
      return (
        <div className="absolute inset-0 bg-[#F7F2E4] border-2 border-[#D8C7A4] p-4 flex flex-col justify-between text-[#3D2B1F]">
          <span className="text-[9px] font-editorial text-[#C55636] font-bold">CLASSIC EDITION</span>
          <div className="my-auto text-center py-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto my-2 rounded-full bg-[#E2D4B5] flex items-center justify-center text-2xl shadow-inner">
              🐉
            </div>
            <h3 className="font-editorial text-sm sm:text-base font-bold text-[#C55636]">
              {book.title}
            </h3>
          </div>
          <p className="font-editorial italic text-xs text-[#3D2B1F]/70">{book.author}</p>
        </div>
      );

    case "logo-love":
      return (
        <div className="absolute inset-0 bg-[#121212] p-4 flex flex-col justify-between text-white border-l-4 border-red-500">
          <span className="text-[9px] font-sans text-red-500 font-bold uppercase tracking-wider">PEACHPIT PRESS</span>
          <div className="my-auto text-left py-2">
            <span className="text-2xl sm:text-3xl text-red-500 block mb-2">❤️</span>
            <h3 className="font-sans text-sm sm:text-base font-black tracking-tight leading-tight uppercase">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs text-white/60">{book.author}</p>
        </div>
      );

    default:
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-4 flex flex-col justify-between text-white`}>
          <span className="text-[9px] font-sans uppercase opacity-80">{book.category}</span>
          <div className="my-auto py-2">
            <h3 className="font-editorial text-sm sm:text-base font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-xs opacity-85">{book.author}</p>
        </div>
      );
  }
}

// ================= ENLARGED & COMPREHENSIVE BOOK DETAIL MODAL =================
export function BookDetailModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-[#FAF7F2] border border-[#E7DFD0] rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative my-auto max-h-[92vh] overflow-y-auto text-[#3D2B1F]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#EFE7D8] hover:bg-[#3D2B1F] text-[#3D2B1F] hover:text-[#FAF8F3] transition-colors z-20 shadow-sm"
          title="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Layout (Grid 2 Columns: Left Cover Showcase + Right Rich Details) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* LEFT COLUMN: ENLARGED 3D BOOK COVER & QUICK SPECS (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            
            {/* Enlarged 3D Book Cover Card */}
            <div className="relative group perspective-1000 mb-6">
              <div className="upright-book-card w-48 sm:w-56 md:w-60 h-68 sm:h-80 md:h-88 rounded-r-lg rounded-l-sm relative overflow-hidden shadow-[15px_20px_40px_rgba(0,0,0,0.3)] border-l-4 border-[#3D2B1F]/30 transform group-hover:rotate-y-[-6deg] group-hover:scale-105 transition-all duration-500">
                <BookCoverVisual book={book} />
              </div>
            </div>

            {/* Reading Progress Indicator if active */}
            {book.progress !== undefined && (
              <div className="w-full bg-[#EFE7D8]/80 p-3.5 rounded-2xl border border-[#3D2B1F]/10 mb-6 text-left">
                <div className="flex items-center justify-between text-xs font-editorial font-bold mb-1.5">
                  <span className="text-[#3D2B1F]/80">Progress Membaca Saya</span>
                  <span className="text-[#DDA15E]">{book.progress}%</span>
                </div>
                <div className="w-full h-2 bg-[#FAF8F3] rounded-full overflow-hidden border border-[#3D2B1F]/10 mb-1">
                  <div className="h-full bg-[#DDA15E] rounded-full" style={{ width: `${book.progress}%` }}></div>
                </div>
                <span className="text-[11px] font-sans text-[#3D2B1F]/60">
                  {book.pagesRead || 0} dari {book.totalPages || 320} halaman terbaca
                </span>
              </div>
            )}

            {/* Quick Specs Grid Pill Cards */}
            <div className="w-full grid grid-cols-2 gap-2.5 text-xs text-left">
              <div className="bg-[#FAF8F3] p-3 rounded-xl border border-[#3D2B1F]/10 flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#DDA15E] shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] text-[#3D2B1F]/50 font-sans">Penerbit</span>
                  <span className="font-bold truncate text-[#3D2B1F]">{book.publisher || "Lexicon Press"}</span>
                </div>
              </div>

              <div className="bg-[#FAF8F3] p-3 rounded-xl border border-[#3D2B1F]/10 flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#417D84] shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] text-[#3D2B1F]/50 font-sans">Bahasa</span>
                  <span className="font-bold truncate text-[#3D2B1F]">{book.language || "Bahasa Indonesia"}</span>
                </div>
              </div>

              <div className="bg-[#FAF8F3] p-3 rounded-xl border border-[#3D2B1F]/10 flex items-center gap-2.5">
                <Hash className="w-4 h-4 text-[#7E9665] shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] text-[#3D2B1F]/50 font-sans">ISBN</span>
                  <span className="font-bold truncate text-[#3D2B1F]">{book.isbn || "978-0141036"}</span>
                </div>
              </div>

              <div className="bg-[#FAF8F3] p-3 rounded-xl border border-[#3D2B1F]/10 flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#C55636] shrink-0" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] text-[#3D2B1F]/50 font-sans">Tahun Terbit</span>
                  <span className="font-bold truncate text-[#3D2B1F]">{book.publishedYear || "2021"}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: RICH DETAILS & COMPLETE DESCRIPTION (7 Cols) */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            
            {/* Category Pill & Bestseller Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-[#EFE7D8] text-[#3D2B1F] text-xs font-editorial font-bold border border-[#3D2B1F]/10">
                {book.category}
              </span>
              {book.isBestseller && (
                <span className="px-3 py-1 rounded-full bg-[#DDA15E]/20 text-[#3D2B1F] text-xs font-editorial font-bold border border-[#DDA15E]/40 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#DDA15E]" />
                  Bestseller
                </span>
              )}
            </div>

            {/* Main Title */}
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold leading-tight text-[#3D2B1F] mb-1">
              {book.title}
            </h2>

            {/* Author */}
            <p className="font-editorial italic text-lg text-[#3D2B1F]/70 mb-4">
              Karya {book.author}
            </p>

            {/* Rating & Reading Stats */}
            <div className="w-full flex flex-wrap items-center gap-4 py-3 px-4 rounded-2xl bg-[#EFE7D8]/60 border border-[#3D2B1F]/10 mb-6 text-xs text-[#3D2B1F]">
              <div className="flex items-center gap-1.5 text-[#DDA15E]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-sm text-[#3D2B1F]">{book.rating || 4.9}</span>
                <span className="text-[#3D2B1F]/50 font-sans">({book.reviewsCount || 1240} ulasan)</span>
              </div>
              <span className="text-[#3D2B1F]/30">•</span>
              <div className="flex items-center gap-1 text-[#3D2B1F]/80">
                <Clock className="w-4 h-4 text-[#417D84]" />
                <span className="font-semibold">{book.estimatedReadTime || "~5.5 Jam Baca"}</span>
              </div>
              <span className="text-[#3D2B1F]/30">•</span>
              <div className="flex items-center gap-1 text-[#3D2B1F]/80">
                <Layers className="w-4 h-4 text-[#7E9665]" />
                <span className="font-semibold">{book.totalPages || 340} Halaman ({book.chaptersCount || 8} Bab)</span>
              </div>
            </div>

            {/* Multi-Paragraph Full Description */}
            <div className="w-full space-y-3 mb-6 font-sans text-sm text-[#3D2B1F]/85 leading-relaxed">
              <h3 className="font-editorial font-bold text-lg text-[#3D2B1F] border-b border-[#3D2B1F]/10 pb-1 mb-2">
                Sinopsis & Ringkasan Cerita
              </h3>
              {book.fullDescription ? (
                book.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{book.synopsis}</p>
              )}
            </div>

            {/* Key Takeaways / Poin Penting */}
            {book.keyTakeaways && book.keyTakeaways.length > 0 && (
              <div className="w-full mb-6 bg-[#FAF8F3] p-4 rounded-2xl border border-[#3D2B1F]/10">
                <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7E9665]" />
                  Poin Penting & Pembelajaran Utama:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#3D2B1F]/80 font-sans pl-1">
                  {book.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DDA15E] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quote Block */}
            {book.quote && (
              <div className="w-full mb-6 bg-[#EFE7D8]/70 p-4 rounded-2xl border-l-4 border-[#DDA15E] italic text-xs text-[#3D2B1F]/90 font-editorial flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#DDA15E] shrink-0 mt-0.5" />
                <p>"{book.quote}"</p>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-[#3D2B1F]/10">
              <button 
                onClick={onClose}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#3D2B1F] text-[#FAF8F3] font-editorial font-bold text-sm hover:bg-book-rust transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#DDA15E]" />
                Mulai Membaca Sekarang
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button 
                  className="flex-1 sm:flex-initial p-3.5 rounded-full bg-[#FAF8F3] border border-[#3D2B1F]/20 text-[#3D2B1F] hover:bg-[#EFE7D8] transition-colors flex items-center justify-center gap-2 text-xs font-editorial font-semibold"
                  title="Simpan Ke Rak Buku"
                >
                  <Bookmark className="w-4 h-4 text-[#DDA15E]" />
                  <span className="sm:hidden">Simpan</span>
                </button>

                <button 
                  className="flex-1 sm:flex-initial p-3.5 rounded-full bg-[#FAF8F3] border border-[#3D2B1F]/20 text-[#3D2B1F] hover:bg-[#EFE7D8] transition-colors flex items-center justify-center gap-2 text-xs font-editorial font-semibold"
                  title="Bagikan"
                >
                  <Share2 className="w-4 h-4 text-[#417D84]" />
                  <span className="sm:hidden">Bagikan</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
