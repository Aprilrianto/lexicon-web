"use client";

import { useEffect } from "react";

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
    <div className="w-full flex flex-col items-center justify-between pb-8">

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center flex-grow mt-8 md:mt-14 relative z-10">
        
        {/* Editorial Typography Header Block */}
        <div className="text-center mb-20 md:mb-24">
          <h1 className="font-editorial text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[#3D2B1F]">
            Lexicon Novel
          </h1>
          <p className="font-editorial italic text-lg md:text-xl text-[#3D2B1F]/80 max-w-xl mx-auto font-normal leading-relaxed">
            Platform membaca novel dan cerita pendek untuk mahasiswa dan umum.
          </p>
        </div>

        {/* Skeuomorphic Bookshelf Container - Expansive Row of Books */}
        <div className="w-full max-w-6xl shelf-container flex flex-col items-center gap-24 pb-20">
          
          {/* ================= TIER 1 (TOP SHELF - EXPANDED MANY BOOKS) ================= */}
          <div className="w-full flex justify-center z-10">
            {/* Wrapper adapting board width to exact book row width + padding overhang */}
            <div className="relative inline-flex items-end px-5">
              
              {/* Wooden Shelf Board - adapts to exact width of books wrapper */}
              <div className="shelf-board"></div>
              
              {/* Books Container - 22 Books stretch across left to right */}
              <div className="relative flex items-end h-full z-10 pb-4 gap-px books-shadow-filter">
                
                {/* Book 1 with Floating Tag */}
                <div className="book-wrapper relative flex items-end">
                  <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap">
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
                  <div className="book-spine w-7 h-36 bg-book-teal rounded-t-sm"></div>
                </div>

                {/* Book 4 (Leaning Left) */}
                <div className="book-wrapper relative flex items-end transform -rotate-12 translate-x-1 translate-y-1">
                  <div className="book-spine w-8 h-40 bg-book-gold rounded-t-sm"></div>
                </div>

                {/* Book 5 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-44 bg-book-slate rounded-t-sm">
                    <div className="spine-band top-9 h-3.5"></div>
                  </div>
                </div>

                {/* Book 6 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-11 h-38 bg-book-ochre rounded-t-sm"></div>
                </div>

                {/* Book 7 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-6 h-34 bg-book-rose rounded-t-sm"></div>
                </div>

                {/* Book 8 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-40 bg-book-cream rounded-t-sm"></div>
                </div>

                {/* Book 9 with Floating Tag */}
                <div className="book-wrapper relative flex items-end">
                  <div className="floating-tag absolute -top-14 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "1.2s" }}>
                    Jurnal Teknologi
                  </div>
                  <div className="book-spine w-12 h-44 bg-book-terracotta rounded-t-sm">
                    <div className="spine-band top-7 h-2.5"></div>
                  </div>
                </div>

                {/* Book 10 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-38 bg-book-green rounded-t-sm"></div>
                </div>

                {/* Book 11 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-7 h-40 bg-book-gold rounded-t-sm"></div>
                </div>

                {/* Book 12 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-10 h-38 bg-book-teal rounded-t-sm"></div>
                </div>

                {/* Book 13 (Leaning Right) */}
                <div className="book-wrapper relative flex items-end transform rotate-6 -translate-x-1">
                  <div className="book-spine w-8 h-34 bg-book-brown rounded-t-sm"></div>
                </div>

                {/* Book 14 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-42 bg-book-rust rounded-t-sm"></div>
                </div>

                {/* Book 15 with Floating Tag */}
                <div className="book-wrapper relative flex items-end">
                  <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "2.4s" }}>
                    Koleksi Puisi
                  </div>
                  <div className="book-spine w-12 h-44 bg-book-gold rounded-t-sm">
                    <div className="spine-band top-10 h-3"></div>
                  </div>
                </div>

                {/* Book 16 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-38 bg-book-slate rounded-t-sm"></div>
                </div>

                {/* Book 17 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-42 bg-book-cream rounded-t-sm"></div>
                </div>

                {/* Book 18 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-10 h-38 bg-book-terracotta rounded-t-sm"></div>
                </div>

                {/* Book 19 (Leaning Left) */}
                <div className="book-wrapper relative flex items-end transform -rotate-10 translate-x-1 translate-y-1">
                  <div className="book-spine w-7 h-40 bg-book-teal rounded-t-sm"></div>
                </div>

                {/* Book 20 with Floating Tag */}
                <div className="book-wrapper relative flex items-end">
                  <div className="floating-tag absolute -top-14 right-0 translate-x-2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "3.2s" }}>
                    Esai & Filsafat
                  </div>
                  <div className="book-spine w-11 h-44 bg-book-ochre rounded-t-sm">
                    <div className="spine-band top-8 h-3"></div>
                  </div>
                </div>

                {/* Book 21 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-8 h-38 bg-book-green rounded-t-sm"></div>
                </div>

                {/* Book 22 */}
                <div className="book-wrapper relative flex items-end">
                  <div className="book-spine w-9 h-42 bg-book-rose rounded-t-sm"></div>
                </div>

              </div>

            </div>
          </div>

          {/* ================= TIER 2 (BOTTOM SHELF - EXPANDED RICH SECTIONS) ================= */}
          <div className="w-full flex justify-center z-10">
            {/* Wrapper adapting board width to exact book row width + padding overhang */}
            <div className="relative inline-flex items-end px-5">
              
              {/* Wooden Shelf Board */}
              <div className="shelf-board"></div>
              
              {/* Books Container with 5 distinct sections stretching wide */}
              <div className="relative flex items-end h-full z-10 pb-4 gap-5 books-shadow-filter">
                
                {/* SECTION 1: Far Left (Upright cluster + 1 leaning book) */}
                <div className="flex items-end gap-px">
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-11 h-44 bg-book-slate rounded-t-sm">
                      <div className="spine-band top-8 h-3"></div>
                    </div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-8 h-38 bg-book-ochre rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-9 h-40 bg-book-teal rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-10 h-42 bg-book-gold rounded-t-sm"></div>
                  </div>
                  {/* Leaning Book */}
                  <div className="book-wrapper relative flex items-end transform -rotate-15 translate-x-1.5 translate-y-1">
                    <div className="book-spine w-8 h-36 bg-book-rose rounded-t-sm"></div>
                  </div>
                </div>

                {/* SECTION 2: Center-Left (Stack of Horizontal books with diagonal book on top) */}
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

                {/* SECTION 3: Center (Mixed height cluster + Floating Tag) */}
                <div className="flex items-end gap-px">
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-7 h-34 bg-book-green rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    {/* Floating Tag */}
                    <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "1s" }}>
                      Cerita Pendek
                    </div>
                    <div className="book-spine w-11 h-44 bg-book-terracotta rounded-t-sm">
                      <div className="spine-band top-6 h-3"></div>
                    </div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-8 h-38 bg-book-gold rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-10 h-36 bg-book-slate rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-9 h-42 bg-book-cream rounded-t-sm"></div>
                  </div>
                </div>

                {/* SECTION 4: Center-Right (Horizontal Stack + Leaning Books + Floating Tag) */}
                <div className="flex items-end gap-3">
                  {/* Stack */}
                  <div className="book-wrapper relative flex flex-col gap-px mb-1">
                    <div className="book-spine w-28 h-6 bg-book-rose rounded-r-sm"></div>
                    <div className="book-spine w-28 h-7 bg-book-ochre rounded-r-sm"></div>
                    <div className="book-spine w-28 h-7 bg-book-slate rounded-r-sm"></div>
                  </div>
                  {/* Leaning books resting on stack */}
                  <div className="flex items-end gap-px">
                    <div className="book-wrapper relative flex items-end">
                      <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "2s" }}>
                        Koleksi Klasik
                      </div>
                      <div className="book-spine w-8 h-40 bg-book-teal rounded-t-sm"></div>
                    </div>
                    <div className="book-wrapper relative flex items-end transform rotate-10 -translate-x-1">
                      <div className="book-spine w-9 h-38 bg-book-gold rounded-t-sm"></div>
                    </div>
                  </div>
                </div>

                {/* SECTION 5: Far Right (Thick volumes + Leaning + Floating Tag) */}
                <div className="flex items-end gap-px">
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-12 h-44 bg-book-ochre rounded-t-sm">
                      <div className="spine-band top-9 h-3.5"></div>
                    </div>
                  </div>
                  <div className="book-wrapper relative flex items-end transform rotate-12 -translate-x-1 translate-y-1">
                    {/* Floating Tag */}
                    <div className="floating-tag absolute -top-12 right-0 translate-x-2 bg-[#FAF8F3] px-4 py-1.5 rounded-full text-xs font-editorial tracking-wide z-30 pointer-events-none animate-float shadow-md whitespace-nowrap" style={{ animationDelay: "3s" }}>
                      Novel Romansa
                    </div>
                    <div className="book-spine w-9 h-40 bg-book-teal rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-8 h-38 bg-book-rust rounded-t-sm"></div>
                  </div>
                  <div className="book-wrapper relative flex items-end">
                    <div className="book-spine w-10 h-42 bg-book-brown rounded-t-sm"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
