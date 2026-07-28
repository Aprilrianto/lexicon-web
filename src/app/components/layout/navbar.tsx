import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-8 md:py-12 flex justify-center items-center relative z-20 mb-12 md:mb-20">
      <nav className="flex space-x-10 md:space-x-16 text-[#3D2B1F] font-editorial text-base md:text-lg tracking-wide">
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
  );
}
