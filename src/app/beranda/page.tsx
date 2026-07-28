"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BerandaPage() {
  useEffect(() => {
    const books = document.querySelectorAll<HTMLElement>('.book-spine');
    
    const handleMouseDown = (e: Event) => {
      const book = e.currentTarget as HTMLElement;
      const parentTransform = book.parentElement?.style.transform;
      book.style.transform = parentTransform 
        ? `${parentTransform} scale(0.95)` 
        : 'scale(0.95)';
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
    <>
      {/* Navigation Header */}
      <header className="w-full max-w-5xl mx-auto px-6 py-12 flex justify-center items-center relative z-20">
        <nav className="flex space-x-8 md:space-x-12 text-primary font-medium tracking-wide">
          <Link href="/beranda" className="hover:opacity-70 transition-opacity active:scale-95 origin-center">Beranda</Link>
          
          {/* Jelajah with Search inline */}
          <div className="relative group flex items-center">
            <Link href="/jelajah" className="hover:opacity-70 transition-opacity flex items-center gap-1 active:scale-95 origin-center">
              Jelajah
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </Link>
          </div>
          
          <Link href="/rak%20buku" className="hover:opacity-70 transition-opacity active:scale-95 origin-center">Rak Buku</Link>
          <Link href="/q&a" className="hover:opacity-70 transition-opacity active:scale-95 origin-center">Q&A</Link>
          <Link href="/kontak" className="hover:opacity-70 transition-opacity active:scale-95 origin-center">Kontak</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center flex-grow mt-12 relative z-10">
        
        {/* Editorial Typography Block */}
        <div className="text-center mb-24">
          <h1 className="font-editorial text-6xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
            Lexicon Novel
          </h1>
          <p className="font-sans text-lg md:text-xl text-primary/80 max-w-xl mx-auto font-light">
            Platform membaca novel dan cerita pendek untuk mahasiswa dan umum.
          </p>
        </div>

        {/* Skeuomorphic Bookshelf Area */}
        <div className="w-full max-w-3xl shelf-container flex flex-col gap-24 pb-32">
          
          {/* Tier 1 (Top Shelf) */}
          <div className="relative w-full h-48 flex items-end justify-center px-8 z-20">
            {/* The Wooden Board */}
            <div className="absolute bottom-0 left-0 w-full h-4 shelf-board"></div>
            
            {/* Books container */}
            <div className="relative flex items-end h-full z-10 gap-px">
              {/* Book 1 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-8 h-40 bg-book-blue rounded-t-sm"></div>
              </div>
              {/* Book 2 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-10 h-36 bg-book-terracotta rounded-t-sm"></div>
              </div>
              {/* Book 3 (Leaning left) */}
              <div className="book-wrapper relative flex items-end transform -rotate-12 translate-x-2 translate-y-1">
                <div className="book-spine w-7 h-42 bg-book-gold rounded-t-sm"></div>
              </div>
              {/* Spacer */}
              <div className="w-6"></div>
              
              {/* Book 4 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                {/* Floating Tag */}
                <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-surface px-3 py-1.5 rounded-md shadow-sm border border-black/5 whitespace-nowrap text-sm font-medium z-30 pointer-events-none animate-float">
                  Fiksi Ilmiah
                </div>
                <div className="book-spine w-12 h-44 bg-book-blue rounded-t-sm"></div>
              </div>
              
              {/* Book 5 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-9 h-38 bg-book-green rounded-t-sm"></div>
              </div>
              {/* Book 6 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-6 h-40 bg-book-terracotta rounded-t-sm"></div>
              </div>
              
              {/* Spacer */}
              <div className="w-12"></div>
              
              {/* Stacked books (Horizontal) */}
              <div className="book-wrapper relative flex flex-col justify-end gap-px mb-1">
                {/* Book 7 */}
                <div className="book-spine w-28 h-6 bg-book-gold rounded-r-sm"></div>
                {/* Book 8 */}
                <div className="book-spine w-28 h-8 bg-book-blue rounded-r-sm"></div>
                {/* Book 9 */}
                <div className="book-spine w-28 h-7 bg-book-terracotta rounded-r-sm"></div>
              </div>
              
              {/* Spacer */}
              <div className="w-4"></div>
              
              {/* Book 10 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-8 h-40 bg-book-green rounded-t-sm"></div>
              </div>
              {/* Book 11 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                {/* Floating Tag */}
                <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-surface px-3 py-1.5 rounded-md shadow-sm border border-black/5 whitespace-nowrap text-sm font-medium z-30 pointer-events-none animate-float" style={{ animationDelay: "1s" }}>
                  Koleksi Puisi
                </div>
                <div className="book-spine w-14 h-36 bg-book-gold rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Tier 2 (Bottom Shelf) */}
          <div className="relative w-full h-48 flex items-end justify-center px-12 z-10">
            {/* The Wooden Board */}
            <div className="absolute bottom-0 left-0 w-full h-4 shelf-board"></div>
            
            {/* Books container */}
            <div className="relative flex items-end h-full z-10 gap-px">
              
              {/* Book 1 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-11 h-40 bg-book-terracotta rounded-t-sm"></div>
              </div>
              {/* Book 2 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-8 h-44 bg-book-gold rounded-t-sm"></div>
              </div>
              
              {/* Spacer */}
              <div className="w-8"></div>
              
              {/* Book 3 (Leaning right) */}
              <div className="book-wrapper relative flex items-end transform rotate-6 -translate-x-1">
                <div className="book-spine w-10 h-38 bg-book-blue rounded-t-sm"></div>
              </div>
              
              {/* Book 4 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-9 h-38 bg-book-green rounded-t-sm"></div>
              </div>
              
              {/* Spacer */}
              <div className="w-20"></div>
              
              {/* Book 5 with Floating Tag */}
              <div className="book-wrapper relative flex items-end">
                 {/* Floating Tag */}
                 <div className="floating-tag absolute -top-12 left-1/2 -translate-x-1/2 bg-surface px-3 py-1.5 rounded-md shadow-sm border border-black/5 whitespace-nowrap text-sm font-medium z-30 pointer-events-none animate-float" style={{ animationDelay: "2s" }}>
                  Novel Romansa
                </div>
                <div className="book-spine w-12 h-46 bg-book-terracotta rounded-t-sm"></div>
              </div>
              {/* Book 6 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-8 h-42 bg-book-gold rounded-t-sm"></div>
              </div>
              {/* Book 7 */}
              <div className="book-wrapper relative flex items-end">
                <div className="book-spine w-7 h-40 bg-book-blue rounded-t-sm"></div>
              </div>
              
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
