"use client";

import React from "react";
import { Book } from "@/lib/books-data";
import { X, Star, Clock, BookOpen, Bookmark, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export function BookCoverVisual({ book }: { book: Book }) {
  switch (book.coverStyle) {
    case "yellow-teapot":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-3 flex flex-col justify-between text-[#3D2B1F]`}>
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-sans uppercase tracking-widest font-bold opacity-70">REVISED</span>
            {book.badge && <span className="text-[8px] font-bold px-1.5 py-0.5 bg-[#3D2B1F] text-[#FAF8F3] rounded">{book.badge}</span>}
          </div>
          <div className="my-auto">
            <h3 className="font-editorial text-sm sm:text-base font-bold leading-tight drop-shadow-sm">
              {book.title}
            </h3>
            <div className="w-7 h-7 sm:w-9 sm:h-9 my-2 rounded-full bg-[#3D2B1F]/10 border border-[#3D2B1F]/20 flex items-center justify-center">
              <span className="text-xs">🫖</span>
            </div>
          </div>
          <p className="font-editorial italic text-xs font-semibold">{book.author}</p>
        </div>
      );

    case "oreilly-bird":
      return (
        <div className="absolute inset-0 bg-[#FAF8F3] border-4 border-white p-3 flex flex-col justify-between text-[#2D3136]">
          <div className="flex items-center justify-between border-b border-[#2D3136]/20 pb-1">
            <span className="text-[8px] font-bold tracking-wider text-[#C55636]">O'REILLY</span>
          </div>
          <div className="my-auto text-center py-2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 opacity-80 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🦅</span>
            </div>
            <h3 className="font-sans text-xs sm:text-sm font-black leading-tight text-[#2D3136] tracking-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] text-center text-[#2D3136]/70 border-t border-[#2D3136]/20 pt-1">
            {book.author}
          </p>
        </div>
      );

    case "lotr-ring":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-3 flex flex-col justify-between text-[#FAF8F3]`}>
          <span className="text-[8px] font-sans uppercase tracking-widest text-[#DDA15E]">HARPERCOLLINS</span>
          <div className="my-auto text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto my-1.5 rounded-full border-2 border-[#DDA15E] shadow-[0_0_12px_rgba(221,161,94,0.4)] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border border-[#DDA15E]/50"></div>
            </div>
            <h3 className="font-editorial text-xs sm:text-sm font-bold text-[#DDA15E] tracking-wide uppercase leading-snug">
              {book.title}
            </h3>
          </div>
          <p className="font-editorial italic text-xs text-center text-white/80">{book.author}</p>
        </div>
      );

    case "eagle-sky":
      return (
        <div className={`absolute inset-0 bg-gradient-to-b ${book.coverBgGradient} p-3 flex flex-col justify-between text-[#FAF8F3]`}>
          <div className="text-[8px] tracking-widest uppercase opacity-80">LIETUVA</div>
          <div className="my-auto text-center">
            <span className="text-2xl sm:text-3xl block my-1">🦅</span>
            <h3 className="font-editorial text-xs sm:text-sm font-bold leading-tight drop-shadow">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] opacity-75">{book.author}</p>
        </div>
      );

    case "steve-jobs":
      return (
        <div className="absolute inset-0 bg-white p-3 flex flex-col justify-between text-black">
          <span className="text-[8px] font-mono tracking-widest text-black/50">BIOGRAPHY</span>
          <div className="my-auto text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xl sm:text-2xl mb-1">
              👨‍💼
            </div>
            <h3 className="font-editorial text-sm sm:text-base font-black tracking-tight leading-tight">
              STEVE JOBS
            </h3>
          </div>
          <p className="font-sans text-[10px] text-center text-slate-500">{book.author}</p>
        </div>
      );

    case "switzerland":
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-3 flex flex-col justify-between text-white`}>
          <span className="text-[8px] font-bold bg-red-600 px-1.5 py-0.5 rounded self-start">SWISS</span>
          <div className="my-auto text-center">
            <span className="text-2xl sm:text-3xl block my-1">🏔️</span>
            <h3 className="font-editorial text-xs sm:text-sm font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] opacity-80">{book.author}</p>
        </div>
      );

    case "mountain-bike":
      return (
        <div className={`absolute inset-0 bg-gradient-to-b ${book.coverBgGradient} p-3 flex flex-col justify-between text-white`}>
          <span className="text-[8px] font-sans tracking-widest uppercase opacity-75">GESTALTEN</span>
          <div className="my-auto text-center">
            <span className="text-2xl sm:text-3xl block my-1">🚴‍♂️</span>
            <h3 className="font-editorial text-xs sm:text-sm font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] text-white/80">{book.author}</p>
        </div>
      );

    case "hobbit-oriental":
      return (
        <div className="absolute inset-0 bg-[#F7F2E4] border border-[#D8C7A4] p-3 flex flex-col justify-between text-[#3D2B1F]">
          <span className="text-[8px] font-editorial text-[#C55636]">CLASSIC EDITION</span>
          <div className="my-auto text-center">
            <div className="w-10 h-10 mx-auto my-1 rounded-full bg-[#E2D4B5] flex items-center justify-center text-xl">
              🐉
            </div>
            <h3 className="font-editorial text-xs sm:text-sm font-bold text-[#C55636]">
              {book.title}
            </h3>
          </div>
          <p className="font-editorial italic text-[10px] text-[#3D2B1F]/70">{book.author}</p>
        </div>
      );

    case "logo-love":
      return (
        <div className="absolute inset-0 bg-[#121212] p-3 flex flex-col justify-between text-white border-l-2 border-red-500">
          <span className="text-[8px] font-sans text-red-500 font-bold uppercase">PEACHPIT PRESS</span>
          <div className="my-auto text-left">
            <span className="text-xl text-red-500 block mb-1">❤️</span>
            <h3 className="font-sans text-xs sm:text-sm font-black tracking-tight leading-tight uppercase">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] text-white/60">{book.author}</p>
        </div>
      );

    default:
      return (
        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverBgGradient} p-3 flex flex-col justify-between text-white`}>
          <span className="text-[8px] font-sans uppercase opacity-75">{book.category}</span>
          <div className="my-auto">
            <h3 className="font-editorial text-xs sm:text-sm font-bold leading-tight">
              {book.title}
            </h3>
          </div>
          <p className="font-sans text-[10px] opacity-80">{book.author}</p>
        </div>
      );
  }
}

export function BookDetailModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-[#FAF8F3] border border-[#E7DFD0] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-[#3D2B1F]"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE7D8]/60 hover:bg-[#EFE7D8] text-[#3D2B1F]/70 hover:text-[#3D2B1F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-36 h-52 shrink-0 rounded-r-md rounded-l-sm relative overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.25)] border-l-4 border-[#3D2B1F]/20">
            <BookCoverVisual book={book} />
          </div>

          <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="px-3 py-1 rounded-full bg-[#EFE7D8] text-[#3D2B1F] text-xs font-editorial font-semibold mb-2">
              {book.category}
            </span>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold leading-tight mb-1 text-[#3D2B1F]">
              {book.title}
            </h2>
            <p className="font-editorial italic text-base text-[#3D2B1F]/70 mb-4">
              Oleh {book.author}
            </p>

            <div className="flex items-center gap-4 mb-4 text-xs font-sans text-[#3D2B1F]/80">
              <div className="flex items-center gap-1 text-[#DDA15E]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-[#3D2B1F]">{book.rating || 4.8}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-[#3D2B1F]/70">
                <Clock className="w-3.5 h-3.5" />
                <span>{book.totalPages || 320} halaman</span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#3D2B1F]/80 leading-relaxed mb-6">
              {book.synopsis}
            </p>

            <div className="w-full flex items-center gap-3">
              <button 
                onClick={onClose}
                className="flex-1 py-3 px-5 rounded-full bg-[#3D2B1F] text-[#FAF8F3] font-editorial font-semibold text-sm hover:bg-book-rust transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Mulai Membaca
              </button>

              <button 
                className="p-3 rounded-full border border-[#3D2B1F]/20 text-[#3D2B1F]/80 hover:bg-[#EFE7D8] transition-colors"
                title="Simpan Ke Rak"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button 
                className="p-3 rounded-full border border-[#3D2B1F]/20 text-[#3D2B1F]/80 hover:bg-[#EFE7D8] transition-colors"
                title="Bagikan"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
