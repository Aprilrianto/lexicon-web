"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BerandaPage() {
  useEffect(() => {
    const books = document.querySelectorAll<HTMLElement>('.book-spine');
    
    const handleMouseDown = (e: Event) => {
      const book = e.currentTarget as HTMLElement;
      const parentTransform = book.parentElement?.style.transform;
      book.style.transform = parentTransform 
        ? `${parentTransform} scale(0.96)` 
        : 'scale(0.96)';
    };
    
    const handleMouseUp = (e: Event) => {
      const book = e.currentTarget as HTMLElement;
      book.style.transform = '';
    };
    
    const handleMouseLeave = (e: Event) => {
      const book = e.currentTarget as HTMLElement;
      book.style.transform = '';
    };

    books.forEach(book => {
      book.addEventListener('mousedown', handleMouseDown);
      book.addEventListener('mouseup', handleMouseUp);
      book.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      books.forEach(book => {
        book.removeEventListener('mousedown', handleMouseDown);
        book.removeEventListener('mouseup', handleMouseUp);
        book.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-warm-paper flex flex-col items-center justify-between font-sans text-[#3D2B1F] py-8">
      
      {/* Navigation Header */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-center items-center relative z-20">
        <nav className="flex space-x-10 md:space-x-16 text-[#3D2B1F] font-editorial text-lg tracking-wide">
          <Link href="/beranda" className="hover:opacity-60 transition-opacity active:scale-95 origin-center">Beranda</Link>
          
          <div className="relative group flex items-center">
            <Link href="/jelajah" className="hover:opacity-60 transition-opacity flex items-center gap-1.5 active:scale-95 origin-center">
              Jelajah
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </Link>
          </div>
          
          <Link href="/rak%20buku" className="hover:opacity-60 transition-opacity active:scale-95 origin-center">Rak Buku</Link>
          <Link href="/q&a" className="hover:opacity-60 transition-opacity active:scale-95 origin-center">Q&A</Link>
          <Link href="/kontak" className="hover:opacity-60 transition-opacity active:scale-95 origin-center">Kontak</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center flex-grow mt-4 relative z-10">
        
        {/* Editorial Typography Header Block */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-editorial text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-[#3D2B1F]">
            Lexicon Novel
          </h1>
          <p className="font-editorial italic text-xl md:text-2xl text-[#3D2B1F]/80 max-w-xl mx-auto font-normal">
            Platform membaca novel dan cerita pendek untuk mahasiswa dan umum.
          </p>
        </div>

        {/* Skeuomorphic Bookshelf Container */}
        <div className="w-full max-w-4xl shelf-container flex flex-col gap-28 pb-24">
          
          {/* ================= TIER 1 (TOP SHELF) ================= */}
          <div className="shelf-unit relative w-full h-52 flex items-end justify-center px-4">
            
            {/* Full-width Wooden Board under all books */}
            <div className="shelf-board"></div>
            
            {/* Books container */}
            <div className="relative flex items-end h-full z-10 pb-4 gap-px">
              
              {/* Book 1 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md">
                  Fiksi Ilmiah
                </div>
                <div className="book-spine w-8 h-40 bg-book-terracotta rounded-t-sm">
                  <div className="spine-band top-6 h-3"></div>
                </div>
              </div>

              {/* Book 2 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-10 h-44 bg-book-rust rounded-t-sm"></div>
              </div>

              {/* Book 3 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-7 h-38 bg-book-teal rounded-t-sm"></div>
              </div>

              {/* Book 4 (Leaning Left) */}
              <div className="book-wrapper relative flex items-end transform -rotate-12 translate-x-1 translate-y-1">
                <div className="book-spine w-8 h-42 bg-book-gold rounded-t-sm"></div>
              </div>

              {/* Book 5 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-9 h-44 bg-book-slate rounded-t-sm">
                  <div className="spine-band top-10 h-4"></div>
                </div>
              </div>

              {/* Book 6 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-11 h-40 bg-book-ochre rounded-t-sm"></div>
              </div>

              {/* Book 7 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-6 h-36 bg-book-rose rounded-t-sm"></div>
              </div>

              {/* Book 8 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                <div className="floating-tag absolute -top-14 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md" style={{ animationDelay: "1.5s" }}>
                  Jurnal Teknologi
                </div>
                <div className="book-spine w-12 h-44 bg-book-terracotta rounded-t-sm">
                  <div className="spine-band top-8 h-2"></div>
                </div>
              </div>

              {/* Book 9 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-9 h-38 bg-book-green rounded-t-sm"></div>
              </div>

              {/* Book 10 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-7 h-42 bg-book-gold rounded-t-sm"></div>
              </div>

              {/* Book 11 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-10 h-40 bg-book-teal rounded-t-sm"></div>
              </div>

              {/* Book 12 (Leaning Right) */}
              <div className="book-wrapper relative flex items-end transform rotate-6 -translate-x-1">
                <div className="book-spine w-8 h-36 bg-book-brown rounded-t-sm"></div>
              </div>

              {/* Book 13 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                <div className="floating-tag absolute -top-12 right-0 translate-x-2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md" style={{ animationDelay: "3s" }}>
                  Koleksi Puisi
                </div>
                <div className="book-spine w-12 h-44 bg-book-gold rounded-t-sm">
                  <div className="spine-band top-12 h-3"></div>
                </div>
              </div>

              {/* Book 14 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-9 h-40 bg-book-slate rounded-t-sm"></div>
              </div>

            </div>
          </div>

          {/* ================= TIER 2 (BOTTOM SHELF - DISTINCT COMPOSITION) ================= */}
          <div className="shelf-unit relative w-full h-52 flex items-end justify-center px-4">
            
            {/* Full-width Wooden Board under all books */}
            <div className="shelf-board"></div>
            
            {/* Books container with distinct grouped layout */}
            <div className="relative flex items-end h-full z-10 pb-4 gap-6">
              
              {/* SECTION A: Left Cluster (Upright books + 1 heavily leaning book) */}
              <div className="flex items-end gap-px">
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-11 h-44 bg-book-slate rounded-t-sm">
                    <div className="spine-band top-8 h-3"></div>
                  </div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-40 bg-book-ochre rounded-t-sm"></div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-42 bg-book-teal rounded-t-sm"></div>
                </div>
                {/* Leaning Book */}
                <div className="book-wrapper relative flex items-end transform -rotate-15 translate-x-1.5 translate-y-1">
                  <div className="book-spine w-8 h-38 bg-book-rose rounded-t-sm"></div>
                </div>
              </div>

              {/* SECTION B: Center-Left (Stack of Horizontal books with diagonal book on top) */}
              <div className="relative flex flex-col justify-end items-center pb-0">
                {/* Diagonal Book resting on top of stack */}
                <div className="book-wrapper relative z-20 transform -rotate-6 translate-y-1">
                  <div className="book-spine w-28 h-6 bg-book-gold rounded-sm shadow-md">
                    <div className="spine-band top-1.5 h-1.5"></div>
                  </div>
                </div>
                {/* Horizontal Stack */}
                <div className="book-wrapper relative flex flex-col gap-px z-10">
                  <div className="book-spine w-32 h-6 bg-book-rust rounded-sm"></div>
                  <div className="book-spine w-32 h-7 bg-book-brown rounded-sm"></div>
                  <div className="book-spine w-32 h-8 bg-book-teal rounded-sm"></div>
                </div>
              </div>

              {/* SECTION C: Center-Right (Mixed height cluster + Floating Tag) */}
              <div className="flex items-end gap-px">
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-7 h-36 bg-book-green rounded-t-sm"></div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  {/* Floating Tag */}
                  <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md" style={{ animationDelay: "1s" }}>
                    Cerita Pendek
                  </div>
                  <div className="book-spine w-11 h-44 bg-book-terracotta rounded-t-sm">
                    <div className="spine-band top-6 h-3"></div>
                  </div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-40 bg-book-gold rounded-t-sm"></div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-10 h-38 bg-book-slate rounded-t-sm"></div>
                </div>
              </div>

              {/* SECTION D: Far Right (Thick volumes + Leaning + Floating Tag) */}
              <div className="flex items-end gap-px">
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-12 h-46 bg-book-ochre rounded-t-sm">
                    <div className="spine-band top-10 h-4"></div>
                  </div>
                </div>
                <div className="book-wrapper relative flex items-end transform rotate-12 -translate-x-1 translate-y-1">
                  {/* Floating Tag */}
                  <div className="floating-tag absolute -top-12 right-0 translate-x-2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md" style={{ animationDelay: "2.5s" }}>
                    Novel Romansa
                  </div>
                  <div className="book-spine w-9 h-42 bg-book-teal rounded-t-sm"></div>
                </div>
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-40 bg-book-rust rounded-t-sm"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
