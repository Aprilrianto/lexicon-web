"use client";

import { useEffect } from "react";
import { Play, ArrowRight, Mail } from "lucide-react";

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
          <div className="w-full md:w-5/12 aspect-[4/5] bg-book-terracotta/20 rounded-xl relative overflow-hidden shadow-sm flex items-center justify-center">
            {/* Elegant Placeholder for Image */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply"></div>
            <div className="w-3/4 h-3/4 border border-[#3D2B1F]/20 rounded-lg absolute"></div>
            <span className="font-editorial text-[#3D2B1F]/50 text-xl italic relative z-10">Potret Penulis</span>
          </div>
          <div className="w-full md:w-7/12 flex flex-col items-start text-left">
            <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 text-[#3D2B1F]">Di Balik Halaman</h2>
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

      {/* 2. Buku yang Populer */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 bg-[#3D2B1F]/[0.02] rounded-3xl mb-24">
        <div className="text-center mb-16">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-4 text-[#3D2B1F]">Buku Populer</h2>
          <p className="font-sans text-[#3D2B1F]/70 text-lg">Karya-karya yang paling banyak dibaca dan diperbincangkan minggu ini.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Book Card 1 */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[2/3] bg-book-slate rounded-r-lg rounded-l-sm shadow-[8px_8px_16px_rgba(45,25,10,0.15),inset_4px_0_12px_rgba(255,255,255,0.15)] relative mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_24px_rgba(45,25,10,0.2)] flex items-center justify-center p-6 text-center">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20"></div>
              <h3 className="font-editorial text-[#FAF8F3] text-2xl font-bold leading-tight">Gema<br/>Waktu</h3>
            </div>
            <h4 className="font-editorial font-bold text-xl text-[#3D2B1F] mb-1">Gema Waktu</h4>
            <span className="font-sans text-sm text-[#3D2B1F]/60">Fiksi Ilmiah</span>
          </div>

          {/* Book Card 2 */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[2/3] bg-book-terracotta rounded-r-lg rounded-l-sm shadow-[8px_8px_16px_rgba(45,25,10,0.15),inset_4px_0_12px_rgba(255,255,255,0.15)] relative mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_24px_rgba(45,25,10,0.2)] flex items-center justify-center p-6 text-center">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20"></div>
              <h3 className="font-editorial text-[#FAF8F3] text-2xl font-bold leading-tight">Jingga di<br/>Ujung Senja</h3>
            </div>
            <h4 className="font-editorial font-bold text-xl text-[#3D2B1F] mb-1">Jingga di Ujung Senja</h4>
            <span className="font-sans text-sm text-[#3D2B1F]/60">Romansa</span>
          </div>

          {/* Book Card 3 */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[2/3] bg-book-ochre rounded-r-lg rounded-l-sm shadow-[8px_8px_16px_rgba(45,25,10,0.15),inset_4px_0_12px_rgba(255,255,255,0.15)] relative mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_24px_rgba(45,25,10,0.2)] flex items-center justify-center p-6 text-center">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20"></div>
              <h3 className="font-editorial text-[#FAF8F3] text-2xl font-bold leading-tight">Filosofi<br/>Kopi</h3>
            </div>
            <h4 className="font-editorial font-bold text-xl text-[#3D2B1F] mb-1">Filosofi Kopi</h4>
            <span className="font-sans text-sm text-[#3D2B1F]/60">Esai & Filsafat</span>
          </div>

          {/* Book Card 4 */}
          <div className="group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-[2/3] bg-book-teal rounded-r-lg rounded-l-sm shadow-[8px_8px_16px_rgba(45,25,10,0.15),inset_4px_0_12px_rgba(255,255,255,0.15)] relative mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_24px_rgba(45,25,10,0.2)] flex items-center justify-center p-6 text-center">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20"></div>
              <h3 className="font-editorial text-[#FAF8F3] text-2xl font-bold leading-tight">Jejak<br/>Langkah</h3>
            </div>
            <h4 className="font-editorial font-bold text-xl text-[#3D2B1F] mb-1">Jejak Langkah</h4>
            <span className="font-sans text-sm text-[#3D2B1F]/60">Koleksi Klasik</span>
          </div>
        </div>
      </section>

      {/* 3. Video Pengenalan */}
      <section className="w-full max-w-5xl mx-auto px-6 mb-32">
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
              <li><a href="/rak buku" className="hover:text-book-rust transition-colors">Rak Buku Pribadi</a></li>
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
