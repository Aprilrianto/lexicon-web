"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Play, ArrowRight, Mail, Search, Star, Bookmark, ShoppingBag, Headphones, Sparkles } from "lucide-react";
import { AnimatedRoadmap } from "@/components/ui/animated-roadmap";
import TestimonialsSection from "@/components/ui/testimonials-2";
import Book from "@/components/smoothui/components/book";

const milestonesData = [
  {
    id: 1,
    name: "1. Temukan Cerita",
    status: "complete" as const,
    position: { top: "70%", left: "5%" },
  },
  {
    id: 2,
    name: "2. Simpan di Rak Buku",
    status: "complete" as const,
    position: { top: "15%", left: "20%" },
  },
  {
    id: 3,
    name: "3. Nikmati Pembacaan",
    status: "in-progress" as const,
    position: { top: "45%", left: "50%" },
  },
  {
    id: 4,
    name: "4. Tulis & Bagikan Karya",
    status: "pending" as const,
    position: { top: "10%", right: "8%" },
  },
];

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

      {/* 1. Tentang Saya (About) */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 border-t border-[#3D2B1F]/10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-5/12 aspect-[4/5] bg-book-terracotta/20 rounded-2xl relative overflow-hidden shadow-md group">
            <Image 
              src="/aset/penulis.png" 
              alt="Potret Penulis" 
              fill 
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle vintage border overlay */}
            <div className="absolute inset-0 border-4 border-[#FAF8F3]/30 rounded-2xl pointer-events-none"></div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col items-start text-left">
            <h2 className="font-editorial text-4xl font-bold mb-6 text-[#3D2B1F]">Di Balik Halaman</h2>
            <p className="font-sans text-[#3D2B1F]/80 text-lg leading-relaxed mb-6">
              Lexicon Novel bermula dari sebuah kecintaan mendalam terhadap susunan kata dan narasi. Kami percaya bahwa setiap cerita, baik fiksi ilmiah yang membawa kita ke galaksi lain, maupun romansa yang menghangatkan hati, memiliki kekuatan untuk mengubah sudut pandang.
            </p>
            <p className="font-sans text-[#3D2B1F]/80 text-lg leading-relaxed mb-8">
              Ruang ini didedikasikan bagi mereka yang mencari pelarian dalam kata-kata, tempat bertemunya imajinasi dan realita. Mari telusuri setiap halamannya.
            </p>
            <button className="flex items-center gap-2 font-editorial text-lg text-book-rust hover:text-book-rust/70 transition-colors group">
              Kenali Lebih Lanjut
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 1.5 Section Iklan Koleksi Eksklusif (Memakai Book smoothui) */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-24">
        <div className="w-full bg-gradient-to-br from-[#2D1F16] via-[#3D2B1F] to-[#1E140D] rounded-3xl p-8 md:p-12 text-[#FAF8F3] shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          
          {/* Subtle Background Glow Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DDA15E]/15 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Promo Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DDA15E]/20 text-[#DDA15E] text-xs font-editorial font-semibold mb-4 border border-[#DDA15E]/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#DDA15E]" />
            PROMO SPESIAL PERPUSTAKAAN DIGITAL
          </span>

          {/* Heading */}
          <h2 className="font-editorial text-4xl font-bold mb-3 leading-tight text-[#FAF8F3] max-w-2xl">
            Seri Literatur Eksklusif Desain & Teknologi Modern
          </h2>

          <p className="font-sans text-sm md:text-base text-white/80 max-w-xl mb-10 leading-relaxed">
            Dapatkan akses penuh ke koleksi buku teknikal terbaik mengenai arsitektur antarmuka digital, desain sistem, dan rekayasa web modern.
          </p>

          {/* SmoothUI Book Demo Showcase */}
          <div className="w-full flex min-h-[380px] flex-wrap items-center justify-center gap-8 md:gap-12 mb-10 relative z-10">
            {/* Default stripe variant */}
            <Book width={235} title="The art of smooth interfaces" />

            {/* Simple variant with custom color */}
            <Book
              width={235}
              color="#7DC1C1"
              textColor="white"
              title="Design Engineering Handbook"
              variant="simple"
            />

            {/* Custom color stripe variant */}
            <Book width={235} color="#9D2127" title="Building for the modern web" />
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href="/jelajah"
              className="px-8 py-3.5 rounded-full bg-[#DDA15E] text-[#3D2B1F] font-editorial font-bold text-sm hover:bg-white transition-colors shadow-lg flex items-center gap-2"
            >
              Jelajah Seri Eksklusif
              <ArrowRight className="w-4 h-4" />
            </a>

            <span className="text-xs font-sans text-[#DDA15E] bg-[#DDA15E]/10 border border-[#DDA15E]/30 px-4 py-3 rounded-full font-medium">
              🏷️ Diskon Mahasiswa 30% Terbatas
            </span>
          </div>

        </div>
      </section>

      {/* 2. Buku yang Populer (Didesain ulang persis seperti Referensi UI) */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 mb-24">
        {/* Main Card Wrapper with Warm Beige Background */}
        <div className="w-full bg-[#FAF7F0] border border-[#3D2B1F]/10 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          
          {/* TOP BAR / NAVIGATION INSIDE CARD */}
          <div className="w-full flex flex-wrap justify-between items-center gap-4 mb-12">
            {/* Logo / Tag inside card */}
            <div className="font-editorial text-2xl font-bold tracking-wider text-[#3D2B1F]">
              BooKS
            </div>

            {/* Middle Pills */}
            <div className="flex items-center gap-3 bg-[#EFE9DC]/60 p-1.5 rounded-full border border-[#3D2B1F]/5">
              <button className="px-5 py-2 rounded-full bg-[#DDA15E] text-[#FAF8F3] font-editorial text-sm font-medium shadow-sm flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Buku
              </button>
              <button className="px-5 py-2 rounded-full text-[#3D2B1F]/70 hover:text-[#3D2B1F] font-sans text-sm font-medium transition-colors flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                AudioBook
              </button>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-[#3D2B1F]/70">
              <button className="p-2 hover:text-[#3D2B1F] transition-colors"><Bookmark className="w-5 h-5" /></button>
              <button className="p-2 hover:text-[#3D2B1F] transition-colors"><ShoppingBag className="w-5 h-5" /></button>
              <div className="w-9 h-9 rounded-full bg-book-terracotta/30 border border-[#3D2B1F]/20 flex items-center justify-center font-editorial font-bold text-sm text-[#3D2B1F]">
                LX
              </div>
            </div>
          </div>

          {/* TOP HERO SHOWCASE (NEW & TRENDING) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-2 relative z-10">
            
            {/* LEFT: Heading & Search */}
            <div className="lg:col-span-4 flex flex-col items-start text-left pb-6 md:pb-8">
              <h2 className="font-editorial text-4xl font-bold text-[#3D2B1F] leading-tight mb-4">
                Baru & <br />Populer
              </h2>
              <p className="font-sans text-[#3D2B1F]/70 text-base mb-8">
                Jelajahi dunia baru karya penulis terkemuka dari seluruh penjuru negeri.
              </p>
              
              {/* Search Bar */}
              <div className="w-full relative max-w-sm">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#3D2B1F]/40" />
                <input 
                  type="text" 
                  placeholder="Judul, penulis, atau topik..."
                  className="w-full bg-[#FAF8F3] border border-[#3D2B1F]/15 rounded-full py-3 pl-11 pr-4 text-sm font-sans text-[#3D2B1F] placeholder:text-[#3D2B1F]/40 outline-none shadow-sm focus:border-[#DDA15E]"
                />
              </div>
            </div>

            {/* CENTER: Big 3D Featured Book */}
            <div className="lg:col-span-4 flex justify-center py-2">
              <div className="relative group cursor-pointer perspective-1000">
                {/* 3D Book Cover standing upright on shelf */}
                <div className="w-56 h-80 rounded-r-md rounded-l-sm bg-gradient-to-br from-[#2F4B54] via-[#417D84] to-[#2F4B54] p-5 flex flex-col justify-between text-[#FAF8F3] relative shadow-[15px_15px_30px_rgba(45,25,10,0.35)] transition-transform duration-500 group-hover:rotate-y-[-6deg] group-hover:scale-105">
                  {/* Badge */}
                  <span className="text-[10px] font-sans tracking-widest uppercase opacity-80 border-b border-white/20 pb-1">
                    #1 New York Times Bestseller
                  </span>
                  
                  {/* Cover Title */}
                  <div className="my-auto">
                    <h3 className="font-editorial text-3xl font-bold leading-tight drop-shadow-md">
                      The Last<br />Thing He<br />Told Me
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#DDA15E] my-3 flex items-center justify-center text-[10px] font-bold text-[#3D2B1F] shadow-sm">
                      REESE'S
                    </div>
                  </div>

                  {/* Author */}
                  <p className="font-editorial italic text-lg font-medium">Laura Dave</p>

                  {/* Spine Highlight 3D effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 via-transparent to-white/10 rounded-l-sm"></div>
                  {/* Right side 3D page thickness */}
                  <div className="absolute right-0 top-1 bottom-1 w-3 bg-[#EFE4D1] translate-x-3 rotate-y-90 origin-left border-l border-black/10"></div>
                </div>
              </div>
            </div>

            {/* RIGHT: Cards (Author of Week & Audio Player) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center pb-6 md:pb-8">
              
              {/* Card 1: Author of the Week */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-[#3D2B1F]/50 uppercase [writing-mode:vertical-lr] rotate-180">
                  Penulis Minggu Ini
                </span>
                <div className="flex-1 bg-[#FAF8F3] border border-[#3D2B1F]/10 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center">
                  <div className="w-full bg-[#DDA15E]/30 rounded-xl p-3 mb-3 flex flex-col items-center">
                    <h4 className="font-editorial font-bold text-base text-[#3D2B1F]">Koleksi Tere Liye</h4>
                    <span className="font-sans text-xs text-[#3D2B1F]/60">42 Buku Pilihan</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-book-terracotta/20 border-2 border-[#FAF8F3] overflow-hidden shadow-sm flex items-center justify-center text-xl font-editorial font-bold text-[#3D2B1F]">
                    TL
                  </div>
                </div>
              </div>

              {/* Card 2: Last listened / Audiobook */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-semibold tracking-widest text-[#3D2B1F]/50 uppercase [writing-mode:vertical-lr] rotate-180">
                  Terakhir Didengar
                </span>
                <div className="flex-1 bg-[#FAF8F3] border border-[#3D2B1F]/10 rounded-2xl p-4 shadow-sm flex flex-col items-center text-center">
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] leading-snug mb-0.5">
                    False Witness: A Novel
                  </h4>
                  <span className="font-sans text-xs text-[#3D2B1F]/60 mb-3">Karin Slaughter</span>
                  
                  {/* Rotating CD Player Widget */}
                  <div className="relative w-14 h-14 mb-3">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#3D2B1F] to-[#73533E] animate-spin-slow flex items-center justify-center p-1 shadow-md">
                      <div className="w-5 h-5 rounded-full bg-[#FAF8F3] border-2 border-[#3D2B1F]"></div>
                    </div>
                  </div>

                  {/* Progress & Controls */}
                  <div className="w-full flex items-center justify-between gap-2 px-2">
                    <span className="text-[10px] font-sans text-[#3D2B1F]/50">12:40</span>
                    <div className="flex-1 h-1 bg-[#3D2B1F]/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[#DDA15E]"></div>
                    </div>
                    <button className="w-7 h-7 rounded-full bg-[#3D2B1F] text-[#FAF8F3] flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* REALISTIC 3D CREAM WALL SHELF BOARD */}
          <div className="relative w-full -mt-2 md:-mt-3 mb-8 z-20">
            {/* Shelf Board Top & Front Lip */}
            <div className="w-full h-5 bg-[#E8E2D3] border-t border-white/80 border-b border-[#3D2B1F]/15 rounded-sm relative shadow-[0_8px_20px_-3px_rgba(61,43,31,0.12),inset_0_1.5px_3px_rgba(255,255,255,0.9)]">
              {/* Top Surface Highlight */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#F6F2E7] opacity-90 rounded-t-sm"></div>
              {/* Bottom Lip Accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D8CEB7]/60"></div>
            </div>
            {/* Smooth Soft Linear Gradient Wall Shadow */}
            <div className="w-full h-12 bg-gradient-to-b from-[#3D2B1F]/10 via-[#3D2B1F]/03 to-transparent blur-[2px] opacity-75 pointer-events-none -mt-0.5"></div>
          </div>

          {/* BOTTOM ROW: RECENT BESTSELLERS */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 pt-4">
            
            {/* Vertical Label */}
            <div className="font-editorial font-bold text-xs tracking-widest text-[#3D2B1F]/60 uppercase [writing-mode:vertical-lr] md:rotate-180 shrink-0 hidden md:block">
              Buku Terpopuler
            </div>
            
            {/* Title for Mobile */}
            <h3 className="font-editorial font-bold text-xl text-[#3D2B1F] md:hidden">
              Buku Terpopuler
            </h3>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              
              {/* Card 1 */}
              <div className="bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] p-3 rounded-2xl border border-[#3D2B1F]/5 hover:border-[#3D2B1F]/15 transition-all duration-300 flex items-center gap-4 group cursor-pointer shadow-none hover:shadow-md">
                {/* 3D Book Cover Mini */}
                <div className="w-16 h-24 rounded-r bg-[#C55636] shrink-0 shadow-[4px_6px_12px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-transform p-2 flex flex-col justify-between text-[#FAF8F3] relative overflow-hidden">
                  <span className="text-[7px] font-bold uppercase tracking-wider">Bestseller</span>
                  <p className="font-editorial font-bold text-xs leading-tight">LEFT TO FEAR</p>
                </div>
                {/* Book Details */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-1 text-[#DDA15E] mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 text-[#3D2B1F]/20" />
                  </div>
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] leading-tight mb-0.5 line-clamp-1">
                    False Witness
                  </h4>
                  <span className="font-sans text-xs text-[#3D2B1F]/60 mb-2">Karin Slaughter</span>
                  <button className="px-3 py-1 rounded-full border border-[#DDA15E]/60 text-[11px] font-medium text-[#3D2B1F] hover:bg-[#DDA15E] hover:text-[#FAF8F3] transition-colors">
                    Baca Sekarang
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] p-3 rounded-2xl border border-[#3D2B1F]/5 hover:border-[#3D2B1F]/15 transition-all duration-300 flex items-center gap-4 group cursor-pointer shadow-none hover:shadow-md">
                {/* 3D Book Cover Mini */}
                <div className="w-16 h-24 rounded-r bg-[#417D84] shrink-0 shadow-[4px_6px_12px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-transform p-2 flex flex-col justify-between text-[#FAF8F3] relative overflow-hidden">
                  <span className="text-[7px] font-bold uppercase tracking-wider">Popular</span>
                  <p className="font-editorial font-bold text-xs leading-tight">MALIBU RISING</p>
                </div>
                {/* Book Details */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-1 text-[#DDA15E] mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] leading-tight mb-0.5 line-clamp-1">
                    Malibu Rising
                  </h4>
                  <span className="font-sans text-xs text-[#3D2B1F]/60 mb-2">Taylor Jenkins</span>
                  <button className="px-3 py-1 rounded-full border border-[#DDA15E]/60 text-[11px] font-medium text-[#3D2B1F] hover:bg-[#DDA15E] hover:text-[#FAF8F3] transition-colors">
                    Baca Sekarang
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] p-3 rounded-2xl border border-[#3D2B1F]/5 hover:border-[#3D2B1F]/15 transition-all duration-300 flex items-center gap-4 group cursor-pointer shadow-none hover:shadow-md">
                {/* 3D Book Cover Mini */}
                <div className="w-16 h-24 rounded-r bg-[#2F4B54] shrink-0 shadow-[4px_6px_12px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-transform p-2 flex flex-col justify-between text-[#FAF8F3] relative overflow-hidden">
                  <span className="text-[7px] font-bold uppercase tracking-wider">Top Rated</span>
                  <p className="font-editorial font-bold text-xs leading-tight">BLACK ICE</p>
                </div>
                {/* Book Details */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-1 text-[#DDA15E] mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 text-[#3D2B1F]/20" />
                    <Star className="w-3 h-3 text-[#3D2B1F]/20" />
                  </div>
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] leading-tight mb-0.5 line-clamp-1">
                    Black Ice
                  </h4>
                  <span className="font-sans text-xs text-[#3D2B1F]/60 mb-2">Brad Thor</span>
                  <button className="px-3 py-1 rounded-full border border-[#DDA15E]/60 text-[11px] font-medium text-[#3D2B1F] hover:bg-[#DDA15E] hover:text-[#FAF8F3] transition-colors">
                    Baca Sekarang
                  </button>
                </div>
              </div>

              {/* Card 4 (Tilted like reference image) */}
              <div className="bg-[#FAF8F3]/60 hover:bg-[#FAF8F3] p-3 rounded-2xl border border-[#3D2B1F]/5 hover:border-[#3D2B1F]/15 transition-all duration-300 flex items-center gap-4 group cursor-pointer shadow-none hover:shadow-md transform md:rotate-3 hover:rotate-0">
                {/* 3D Book Cover Mini */}
                <div className="w-16 h-24 rounded-r bg-[#C88D46] shrink-0 shadow-[6px_8px_16px_rgba(0,0,0,0.22)] group-hover:-translate-y-1 transition-transform p-2 flex flex-col justify-between text-[#FAF8F3] relative overflow-hidden">
                  <span className="text-[7px] font-bold uppercase tracking-wider">New</span>
                  <p className="font-editorial font-bold text-xs leading-tight">BLIND TIGER</p>
                </div>
                {/* Book Details */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center gap-1 text-[#DDA15E] mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 text-[#3D2B1F]/20" />
                  </div>
                  <h4 className="font-editorial font-bold text-sm text-[#3D2B1F] leading-tight mb-0.5 line-clamp-1">
                    Blind Tiger
                  </h4>
                  <span className="font-sans text-xs text-[#3D2B1F]/60 mb-2">Sandra Brown</span>
                  <button className="px-3 py-1 rounded-full border border-[#DDA15E]/60 text-[11px] font-medium text-[#3D2B1F] hover:bg-[#DDA15E] hover:text-[#FAF8F3] transition-colors">
                    Baca Sekarang
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Video Pengenalan */}
      <section className="w-full max-w-5xl mx-auto px-6 mb-24">
        <div className="w-full aspect-video rounded-3xl bg-[#2F4B54] relative overflow-hidden flex items-center justify-center shadow-2xl group cursor-pointer">
          {/* Fake Video Thumbnail / Background effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3D2B1F]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#FAF8F3]/10 backdrop-blur-md rounded-full flex items-center justify-center border border-[#FAF8F3]/20 text-[#FAF8F3] group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
            <h3 className="font-editorial text-2xl text-[#FAF8F3] mt-6 font-medium tracking-wide">Tonton Pengalaman Membaca</h3>
          </div>
        </div>
      </section>

      {/* 3.5 Peta Perjalanan Membaca (Animated Roadmap Map) */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-24 text-center">
        <div className="mb-4">
          <h2 className="font-editorial text-4xl font-bold mb-4 text-[#3D2B1F]">
            Peta Perjalanan Membaca
          </h2>
          <p className="font-sans text-[#3D2B1F]/70 text-lg max-w-xl mx-auto">
            Pantau setiap alur dan pencapaian Anda dari pertama memilih buku hingga menerbitkan karya.
          </p>
        </div>

        <AnimatedRoadmap
          milestones={milestonesData}
          mapImageSrc="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png&w=320&q=75"
          aria-label="Peta animasi alur membaca dan menulis di platform Lexicon Novel"
        />
      </section>

      {/* 3.8 Seksi Ulasan Pembaca (Testimonials Section - 3 Orang) */}
      <section className="w-full mb-20">
        <TestimonialsSection />
      </section>

      {/* 4. Kontak / Footer */}
      <footer className="w-full border-t border-[#3D2B1F]/10 pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-editorial text-4xl font-bold mb-6 text-[#3D2B1F]">Mari Berbincang</h2>
            <p className="font-sans text-[#3D2B1F]/70 text-lg mb-8 max-w-md">
              Punya cerita yang ingin dibagikan atau pertanyaan seputar platform kami? Jangan ragu untuk menyapa.
            </p>
            <form className="flex items-end gap-4 w-full max-w-md">
              <div className="flex-grow border-b border-[#3D2B1F]/30 pb-2 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3D2B1F]/50" />
                <input 
                  type="email" 
                  placeholder="Alamat email Anda" 
                  className="w-full bg-transparent outline-none text-[#3D2B1F] placeholder:text-[#3D2B1F]/40 font-sans"
                />
              </div>
              <button type="button" className="font-editorial font-medium text-lg px-6 py-2 bg-[#3D2B1F] text-[#FAF8F3] rounded-full hover:bg-book-rust transition-colors">
                Kirim
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/4 flex flex-col gap-6">
            <h3 className="font-editorial font-bold text-xl text-[#3D2B1F]">Navigasi</h3>
            <ul className="flex flex-col gap-3 font-sans text-[#3D2B1F]/70">
              <li><a href="/jelajah" className="hover:text-book-rust transition-colors">Jelajah Koleksi</a></li>
              <li><a href="/rak-buku" className="hover:text-book-rust transition-colors">Rak Buku Pribadi</a></li>
              <li><a href="/q&a" className="hover:text-book-rust transition-colors">Pertanyaan Umum</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 flex flex-col gap-6">
            <h3 className="font-editorial font-bold text-xl text-[#3D2B1F]">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#3D2B1F]/20 flex items-center justify-center hover:bg-[#3D2B1F] hover:text-[#FAF8F3] transition-colors text-[#3D2B1F]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#3D2B1F]/20 flex items-center justify-center hover:bg-[#3D2B1F] hover:text-[#FAF8F3] transition-colors text-[#3D2B1F]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="font-sans text-sm text-[#3D2B1F]/50 mt-4">
              © 2026 Lexicon Novel.<br/>Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
