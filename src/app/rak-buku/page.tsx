"use client";

import React, { useState } from "react";
import { BOOKS_DATA, Book } from "@/lib/books-data";
import { BookCoverVisual, BookDetailModal } from "@/components/book-components";
import { 
  Search, 
  BookOpen, 
  Sparkles, 
  X,
  ArrowRight,
  Compass,
  BookmarkCheck
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function RakBukuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const categories = ["Semua", "Desain & UX", "Fiksi & Fantasy", "Petualangan", "Klasik", "Biografi", "Pengembangan Diri"];

  // Filter books stored in user's shelf
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "Semua" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const currentlyReadingBooks = filteredBooks.filter(b => b.shelf === "currently-reading");
  const nextUpBooks = filteredBooks.filter(b => b.shelf === "next-up");
  const finishedBooks = filteredBooks.filter(b => b.shelf === "finished");

  return (
    <div className="w-full min-h-screen pt-10 pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* HEADER TITLE */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DB] text-[#3D2B1F]/80 text-xs font-editorial font-medium mb-2 border border-[#3D2B1F]/10">
          <BookmarkCheck className="w-3.5 h-3.5 text-[#DDA15E]" />
          Koleksi & Perpustakaan Pribadi Saya
        </span>
        <h1 className="font-editorial text-[48px] font-bold text-[#3D2B1F] tracking-tight mb-2">
          Rak Buku Digital
        </h1>
        <p className="font-sans text-sm text-[#3D2B1F]/70 max-w-xl mx-auto leading-relaxed">
          Koleksi novel dan buku yang Anda simpan dari halaman Jelajah. Pantau progress membaca dan tata rak impian Anda.
        </p>
      </div>

      {/* MAIN CONTAINER CARD (Skeuomorphic Soft Cream Panel matching Reference UI) */}
      <div className="w-full bg-[#FAF7F2] border border-[#E7DFD0] rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_12px_40px_-10px_rgba(61,43,31,0.08)] relative overflow-hidden">
        
        {/* TOP BAR: SEARCH & EXPLORE MORE BUTTON */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          <div className="flex items-center gap-3">
            <span className="font-editorial text-xl font-bold text-[#3D2B1F] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#DDA15E]" />
              Rak Buku Saya ({filteredBooks.length} Simpanan)
            </span>
          </div>

          {/* Search Input in Library + Explore Link */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari di rak buku simpanan saya..."
                className="w-full bg-[#FAF8F3] border border-[#3D2B1F]/15 rounded-full py-2.5 pl-11 pr-10 text-sm font-sans text-[#3D2B1F] placeholder:text-[#3D2B1F]/40 outline-none shadow-sm focus:border-[#DDA15E] focus:ring-2 focus:ring-[#DDA15E]/20 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40 hover:text-[#3D2B1F]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <Link
              href="/jelajah"
              className="px-4 py-2.5 rounded-full bg-[#3D2B1F] text-[#FAF8F3] font-editorial text-xs font-semibold hover:bg-book-rust transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Compass className="w-3.5 h-3.5 text-[#DDA15E]" />
              Cari Buku di Jelajah
            </Link>
          </div>

        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#3D2B1F]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-editorial whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#3D2B1F] text-[#FAF8F3] shadow-sm font-semibold"
                  : "bg-[#EFE7D8]/60 text-[#3D2B1F]/70 hover:bg-[#EFE7D8] border border-[#3D2B1F]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D WOODEN SHELVES */}
        <div className="flex flex-col gap-12">
          
          {/* ================= SHELF 1: Currently reading ================= */}
          <section className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-editorial text-2xl font-bold text-[#3D2B1F]">
                Sedang Dibaca
              </h2>
              <span className="text-xs font-sans text-[#3D2B1F]/60">
                {currentlyReadingBooks.length} Buku
              </span>
            </div>

            {currentlyReadingBooks.length > 0 ? (
              <div className="light-shelf-container relative w-full pt-4 pb-2">
                {/* Row of Books standing directly on wood shelf */}
                <div className="relative z-10 flex items-end gap-6 sm:gap-8 overflow-x-auto pb-1 px-4 min-h-[210px] scrollbar-none">
                  {currentlyReadingBooks.map((book) => (
                    <UprightShelfBookCard
                      key={book.id}
                      book={book}
                      onClick={() => setSelectedBook(book)}
                      showProgressOnShelf={true}
                    />
                  ))}
                </div>
                {/* Light Beech Wood Shelf Board */}
                <div className="light-shelf-board"></div>
              </div>
            ) : (
              <div className="p-8 text-center bg-[#FAF8F3]/50 rounded-2xl border border-dashed border-[#3D2B1F]/15">
                <p className="font-sans text-sm text-[#3D2B1F]/60">Belum ada buku yang sedang dibaca.</p>
              </div>
            )}
          </section>

          {/* ================= SHELF 2: Next up ================= */}
          <section className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-editorial text-2xl font-bold text-[#3D2B1F]">
                Berikutnya
              </h2>
              <span className="text-xs font-sans text-[#3D2B1F]/60">
                {nextUpBooks.length} Buku
              </span>
            </div>

            {nextUpBooks.length > 0 ? (
              <div className="light-shelf-container relative w-full pt-4 pb-2">
                <div className="relative z-10 flex items-end gap-5 sm:gap-7 overflow-x-auto pb-1 px-4 min-h-[210px] scrollbar-none">
                  {nextUpBooks.map((book) => (
                    <UprightShelfBookCard
                      key={book.id}
                      book={book}
                      onClick={() => setSelectedBook(book)}
                    />
                  ))}
                </div>
                <div className="light-shelf-board"></div>
              </div>
            ) : (
              <div className="p-8 text-center bg-[#FAF8F3]/50 rounded-2xl border border-dashed border-[#3D2B1F]/15">
                <p className="font-sans text-sm text-[#3D2B1F]/60">Belum ada daftar buku berikutnya.</p>
              </div>
            )}
          </section>

          {/* ================= SHELF 3: Finished ================= */}
          <section className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-editorial text-2xl font-bold text-[#3D2B1F]">
                Selesai Dibaca
              </h2>
              <span className="text-xs font-sans text-[#3D2B1F]/60">
                {finishedBooks.length} Buku
              </span>
            </div>

            {finishedBooks.length > 0 ? (
              <div className="light-shelf-container relative w-full pt-4 pb-2">
                <div className="relative z-10 flex items-end gap-5 sm:gap-7 overflow-x-auto pb-1 px-4 min-h-[210px] scrollbar-none">
                  {finishedBooks.map((book) => (
                    <UprightShelfBookCard
                      key={book.id}
                      book={book}
                      onClick={() => setSelectedBook(book)}
                    />
                  ))}
                </div>
                <div className="light-shelf-board"></div>
              </div>
            ) : (
              <div className="p-8 text-center bg-[#FAF8F3]/50 rounded-2xl border border-dashed border-[#3D2B1F]/15">
                <p className="font-sans text-sm text-[#3D2B1F]/60">Belum ada buku yang diselesaikan.</p>
              </div>
            )}
          </section>

        </div>

      </div>

      {/* BOOK DETAIL MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <BookDetailModal 
            book={selectedBook} 
            onClose={() => setSelectedBook(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}

// ================= COMPONENT: Clean Upright Standing Book Cover on Wood Ledge =================
function UprightShelfBookCard({ 
  book, 
  onClick, 
  showProgressOnShelf = false
}: { 
  book: Book; 
  onClick: () => void; 
  showProgressOnShelf?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center group shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Floating Tooltip Card on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 6, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.94 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#3D2B1F] text-[#FAF8F3] px-3.5 py-1.5 rounded-xl text-xs font-editorial shadow-xl z-30 pointer-events-none whitespace-nowrap flex flex-col items-center gap-0.5 border border-white/10"
          >
            <span className="font-bold">{book.title}</span>
            <span className="text-[10px] font-sans text-white/70">{book.author}</span>
            {/* Arrow down */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#3D2B1F] rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upright Standing 3D Book Cover directly resting on shelf */}
      <div 
        onClick={onClick}
        className="upright-book-card w-28 sm:w-32 md:w-36 h-40 sm:h-48 md:h-52 rounded-r-md rounded-l-sm relative overflow-hidden flex flex-col justify-between p-3 sm:p-4 text-[#FAF8F3] z-10"
      >
        <BookCoverVisual book={book} />
      </div>

      {/* Subtle Progress Notch embedded directly on top of the shelf ledge under book */}
      {showProgressOnShelf && book.progress !== undefined && (
        <div className="w-12 h-1 bg-[#DDA15E] rounded-full my-0.5 shadow-sm opacity-90 z-20" title={`${book.progress}% Selesai`}></div>
      )}

    </div>
  );
}
