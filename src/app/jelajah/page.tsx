"use client";

import React, { useState, useMemo } from "react";
import { BOOKS_DATA, Book } from "@/lib/books-data";
import { BookCoverVisual, BookDetailModal } from "@/components/book-components";
import { 
  Search, 
  Compass, 
  Star, 
  SlidersHorizontal, 
  X, 
  Bookmark, 
  Sparkles, 
  BookOpen,
  TrendingUp,
  ArrowUpDown,
  Filter,
  Check
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function JelajahPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortBy, setSortBy] = useState<"popular" | "rating" | "newest" | "title">("popular");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(["cr-1", "nu-2"]);

  const categories = ["Semua", "Desain & UX", "Fiksi & Fantasy", "Petualangan", "Klasik", "Biografi", "Pengembangan Diri"];

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter & Sort books
  const filteredAndSortedBooks = useMemo(() => {
    let result = BOOKS_DATA.filter((book) => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "Semua" || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "newest") {
      result.sort((a, b) => (b.publishedYear || 0) - (a.publishedYear || 0));
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: Bestseller / Popular
      result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredBook = BOOKS_DATA.find(b => b.isBestseller) || BOOKS_DATA[0];

  return (
    <div className="w-full min-h-screen pt-12 pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* EDITORIAL HEADER */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DB] text-[#3D2B1F]/80 text-xs font-editorial font-medium mb-3 border border-[#3D2B1F]/10">
          <Compass className="w-3.5 h-3.5 text-[#417D84]" />
          Katalog & Eksplorasi Buku
        </span>
        <h1 className="font-editorial text-[48px] font-bold text-[#3D2B1F] tracking-tight mb-2">
          Jelajah Koleksi
        </h1>
        <p className="font-sans text-sm md:text-base text-[#3D2B1F]/70 max-w-xl mx-auto leading-relaxed">
          Temukan ratusan novel, buku ilmu pengetahuan, biografi, dan karya populer pilihan penulis hebat.
        </p>
      </div>

      {/* FEATURED BESTSELLER BANNER */}
      <div className="w-full mb-10 bg-gradient-to-r from-[#3D2B1F] via-[#4A372A] to-[#2D1F16] rounded-3xl p-6 sm:p-8 text-[#FAF8F3] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-[#DDA15E]/20 text-[#DDA15E] text-xs font-editorial font-semibold uppercase tracking-wider mb-3 inline-block border border-[#DDA15E]/30">
            ★ Rekomendasi Teratas
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl font-bold mb-2 leading-tight">
            {featuredBook.title}
          </h2>
          <p className="font-editorial italic text-sm text-[#DDA15E] mb-3">
            Oleh {featuredBook.author}
          </p>
          <p className="font-sans text-xs sm:text-sm text-white/80 line-clamp-2 mb-6 leading-relaxed">
            {featuredBook.synopsis}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => setSelectedBook(featuredBook)}
              className="px-6 py-2.5 rounded-full bg-[#DDA15E] text-[#3D2B1F] font-editorial font-bold text-sm hover:bg-white transition-colors shadow-md flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Lihat Detail Novel
            </button>
            <Link
              href="/rak-buku"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-editorial text-sm transition-colors flex items-center gap-2 border border-white/15"
            >
              <Bookmark className="w-4 h-4 text-[#DDA15E]" />
              Buka Rak Buku Saya
            </Link>
          </div>
        </div>

        {/* Decorative 3D Book Banner Cover */}
        <div 
          onClick={() => setSelectedBook(featuredBook)}
          className="relative z-10 w-32 sm:w-40 h-44 sm:h-56 shrink-0 rounded-r-lg rounded-l-sm overflow-hidden shadow-[12px_16px_30px_rgba(0,0,0,0.5)] border-l-4 border-white/20 cursor-pointer transform hover:scale-105 transition-transform"
        >
          <BookCoverVisual book={featuredBook} />
        </div>
      </div>

      {/* MAIN EXPLORE CATALOG CONTAINER */}
      <div className="w-full bg-[#FAF7F2] border border-[#E7DFD0] rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_12px_40px_-10px_rgba(61,43,31,0.08)]">
        
        {/* SEARCH & FILTERS BAR */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari semua judul, penulis, atau genre novel..."
              className="w-full bg-[#FAF8F3] border border-[#3D2B1F]/15 rounded-full py-3 pl-11 pr-10 text-sm font-sans text-[#3D2B1F] placeholder:text-[#3D2B1F]/40 outline-none shadow-sm focus:border-[#DDA15E] focus:ring-2 focus:ring-[#DDA15E]/20 transition-all"
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

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-editorial text-[#3D2B1F]/60 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Urutkan:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF8F3] border border-[#3D2B1F]/15 rounded-xl py-2 px-3 text-xs font-editorial text-[#3D2B1F] outline-none cursor-pointer focus:border-[#DDA15E]"
            >
              <option value="popular">Terpopuler & Bestseller</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="newest">Tahun Terbit Terbaru</option>
              <option value="title">Judul (A-Z)</option>
            </select>
          </div>

        </div>

        {/* CATEGORY CHIPS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#3D2B1F]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-editorial whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#3D2B1F] text-[#FAF8F3] shadow-sm font-semibold"
                  : "bg-[#EFE7D8]/60 text-[#3D2B1F]/70 hover:bg-[#EFE7D8] border border-[#3D2B1F]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESULT COUNT & STATUS */}
        <div className="flex items-center justify-between mb-6 text-xs font-sans text-[#3D2B1F]/60">
          <span>Menampilkan <strong className="text-[#3D2B1F]">{filteredAndSortedBooks.length}</strong> buku</span>
          {selectedCategory !== "Semua" && (
            <button 
              onClick={() => setSelectedCategory("Semua")}
              className="text-book-rust hover:underline flex items-center gap-1"
            >
              Hapus Filter ({selectedCategory})
            </button>
          )}
        </div>

        {/* CATALOG BOOKS GRID */}
        {filteredAndSortedBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredAndSortedBooks.map((book) => {
              const isBookmarked = bookmarkedIds.includes(book.id);
              return (
                <div 
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group flex flex-col cursor-pointer bg-[#FAF8F3] p-3 rounded-2xl border border-[#3D2B1F]/10 hover:border-[#3D2B1F]/25 hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => toggleBookmark(e, book.id)}
                    title={isBookmarked ? "Tersimpan di Rak Buku" : "Simpan ke Rak Buku"}
                    className={`absolute top-5 right-5 z-20 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                      isBookmarked
                        ? "bg-[#DDA15E] text-[#3D2B1F] shadow"
                        : "bg-black/30 text-white hover:bg-black/50"
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>

                  {/* Book Cover Container */}
                  <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-sm mb-3 group-hover:-translate-y-1 transition-transform">
                    <BookCoverVisual book={book} />
                  </div>

                  {/* Book Metadata */}
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] line-clamp-1 group-hover:text-book-rust transition-colors">
                    {book.title}
                  </h4>
                  <p className="font-sans text-xs text-[#3D2B1F]/60 line-clamp-1 mb-2">
                    {book.author}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#3D2B1F]/5">
                    <span className="text-[10px] font-medium text-[#3D2B1F]/60 px-2 py-0.5 bg-[#EFE7D8] rounded-full">
                      {book.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#DDA15E]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-bold text-[#3D2B1F]">{book.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-[#FAF8F3]/60 rounded-3xl border border-dashed border-[#3D2B1F]/15">
            <Compass className="w-10 h-10 mx-auto text-[#3D2B1F]/30 mb-3" />
            <h3 className="font-editorial text-xl font-bold text-[#3D2B1F] mb-1">
              Buku Tidak Ditemukan
            </h3>
            <p className="font-sans text-sm text-[#3D2B1F]/60 max-w-sm mx-auto mb-4">
              Tidak ada buku yang cocok dengan pencarian "{searchQuery}". Coba gunakan kata kunci lain.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua"); }}
              className="px-5 py-2 rounded-full bg-[#3D2B1F] text-[#FAF8F3] font-editorial text-xs"
            >
              Reset Filter
            </button>
          </div>
        )}

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
