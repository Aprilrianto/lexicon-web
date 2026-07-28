export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  shelf: "currently-reading" | "next-up" | "finished";
  coverColor: string;
  coverBgGradient: string;
  badge?: string;
  rating?: number;
  progress?: number;
  pagesRead?: number;
  totalPages?: number;
  finishedDate?: string;
  synopsis: string;
  coverStyle: "yellow-teapot" | "oreilly-bird" | "lotr-ring" | "eagle-sky" | "mountain-bike" | "steve-jobs" | "switzerland" | "hobbit-oriental" | "logo-love" | "calligraphy" | "orwell-1984" | "desert-journey";
  isBestseller?: boolean;
  publishedYear?: number;
}

export const BOOKS_DATA: Book[] = [
  // --- CURRENTLY READING (3 Books) ---
  {
    id: "cr-1",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "Desain & UX",
    shelf: "currently-reading",
    coverColor: "#E2C338",
    coverBgGradient: "from-[#F1D752] via-[#E2B72E] to-[#C9981A]",
    progress: 78,
    pagesRead: 270,
    totalPages: 348,
    synopsis: "Prinsip-prinsip psikologi dan panduan mendalam tentang bagaimana objek sehari-hari harus dirancang agar intuitif dan mudah digunakan oleh manusia.",
    coverStyle: "yellow-teapot",
    rating: 4.9,
    isBestseller: true,
    publishedYear: 2013
  },
  {
    id: "cr-2",
    title: "Strategic Writing for UX",
    author: "Torrey Podmajersky",
    category: "Desain & UX",
    shelf: "currently-reading",
    coverColor: "#2D3136",
    coverBgGradient: "from-[#FAFAFA] via-[#F0F0F0] to-[#E2E2E2]",
    badge: "O'REILLY",
    progress: 45,
    pagesRead: 110,
    totalPages: 240,
    synopsis: "Panduan praktis menyusun mikro-teks, pesan UX, dan antarmuka kata yang mendorong pengalaman pengguna menjadi lebih efisien dan menyenangkan.",
    coverStyle: "oreilly-bird",
    rating: 4.8,
    publishedYear: 2019
  },
  {
    id: "cr-3",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fiksi & Fantasy",
    shelf: "currently-reading",
    coverColor: "#1E293B",
    coverBgGradient: "from-[#0F172A] via-[#1E293B] to-[#334155]",
    badge: "Bestseller",
    progress: 92,
    pagesRead: 980,
    totalPages: 1077,
    synopsis: "Kisah epik perjuangan Frodo Baggins dan Cincin Utama dalam perjalanan berbahaya menuju Gunung Takdir untuk menyelamatkan Middle-earth.",
    coverStyle: "lotr-ring",
    rating: 5.0,
    isBestseller: true,
    publishedYear: 1954
  },

  // --- NEXT UP (6 Books) ---
  {
    id: "nu-1",
    title: "Lietuvos Paukščiai",
    author: "Tadas Ivanauskas",
    category: "Petualangan",
    shelf: "next-up",
    coverColor: "#89AEC6",
    coverBgGradient: "from-[#9BBECF] via-[#7B9FB7] to-[#5C8098]",
    synopsis: "Eksplorasi keanekaragaman flora dan fauna pegunungan utara, menyajikan ilustrasi burung dan lanskap alam yang memukau.",
    coverStyle: "eagle-sky",
    rating: 4.7,
    publishedYear: 2021
  },
  {
    id: "nu-2",
    title: "The Lord of the Rings: Fellowship",
    author: "J.R.R. Tolkien",
    category: "Fiksi & Fantasy",
    shelf: "next-up",
    coverColor: "#1B3B2B",
    coverBgGradient: "from-[#143022] via-[#1E4330] to-[#0D2117]",
    synopsis: "Awal perjalanan Sembilan Pembawa Cincin melintasi wilayah perbatasan Middle-earth yang dipenuhi misteri dan ancaman musuh.",
    coverStyle: "lotr-ring",
    rating: 4.9,
    isBestseller: true,
    publishedYear: 1954
  },
  {
    id: "nu-3",
    title: "Eric Rides the World",
    author: "Eric Van De Wetering",
    category: "Petualangan",
    shelf: "next-up",
    coverColor: "#4B989D",
    coverBgGradient: "from-[#52A5AB] via-[#3D858A] to-[#2B6468]",
    badge: "Popular",
    synopsis: "Kisah perjalanan solo mengelilingi 40 negara menggunakan sepeda motor tua, melintasi gurun, salju, dan lembah sunyi.",
    coverStyle: "desert-journey",
    rating: 4.8,
    publishedYear: 2018
  },
  {
    id: "nu-4",
    title: "Art & Fear",
    author: "David Bayles & Ted Orland",
    category: "Pengembangan Diri",
    shelf: "next-up",
    coverColor: "#EAE3D2",
    coverBgGradient: "from-[#FAF6ED] via-[#EFE7D5] to-[#E3D9C3]",
    synopsis: "Pengamatan mendalam tentang hambatan mental dan rasa takut yang dihadapi setiap seniman dan kreator dalam berkarya.",
    coverStyle: "calligraphy",
    rating: 4.9,
    publishedYear: 2001
  },
  {
    id: "nu-5",
    title: "1984",
    author: "George Orwell",
    category: "Klasik",
    shelf: "next-up",
    coverColor: "#22252A",
    coverBgGradient: "from-[#2C3036] via-[#1D2024] to-[#121417]",
    badge: "Klasik",
    synopsis: "Novel distopia legendaris tentang totalitarianisme, pengawasan masif Big Brother, dan perjuangan Winston Smith mempertanyakan kebenaran.",
    coverStyle: "orwell-1984",
    rating: 5.0,
    isBestseller: true,
    publishedYear: 1949
  },
  {
    id: "nu-6",
    title: "The Design of Everyday Things (Red)",
    author: "Don Norman",
    category: "Desain & UX",
    shelf: "next-up",
    coverColor: "#ECC82F",
    coverBgGradient: "from-[#F5D73E] via-[#ECC427] to-[#D4A91B]",
    synopsis: "Edisi perayaan khusus dengan analisis kegagalan desain modern dalam perangkat lunak dan arsitektur fisik.",
    coverStyle: "yellow-teapot",
    rating: 4.8,
    publishedYear: 2015
  },

  // --- FINISHED (6 Books) ---
  {
    id: "fn-1",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biografi",
    shelf: "finished",
    coverColor: "#F4F4F5",
    coverBgGradient: "from-[#FFFFFF] via-[#F4F4F6] to-[#E4E4E7]",
    finishedDate: "12 Mar 2026",
    synopsis: "Biografi eksklusif tentang visi, ambisi, dan kepemimpinan visioner Steve Jobs dalam membangun revolusi Apple.",
    coverStyle: "steve-jobs",
    rating: 5.0,
    isBestseller: true,
    publishedYear: 2011
  },
  {
    id: "fn-2",
    title: "Professionals in Calligraphy",
    author: "Martina Flor",
    category: "Desain & UX",
    shelf: "finished",
    coverColor: "#E8A39A",
    coverBgGradient: "from-[#F7B6AD] via-[#E8A39A] to-[#D48980]",
    finishedDate: "02 Feb 2026",
    synopsis: "Seni menggambar huruf, struktur tipografi tangan, dan teknik menciptakan bentuk huruf bermakna indah.",
    coverStyle: "calligraphy",
    rating: 4.8,
    publishedYear: 2017
  },
  {
    id: "fn-3",
    title: "One Year on a Bike",
    author: "Martijn Doolaard",
    category: "Petualangan",
    shelf: "finished",
    coverColor: "#678A9C",
    coverBgGradient: "from-[#799DB0] via-[#638496] to-[#496778]",
    finishedDate: "28 Jan 2026",
    badge: "Pilihan Editor",
    synopsis: "Perjalanan dari Amsterdam menuju Singapura dengan sepeda. Dokumentasi visual dan jurnal perjalanan tak terlupakan.",
    coverStyle: "mountain-bike",
    rating: 4.9,
    publishedYear: 2017
  },
  {
    id: "fn-4",
    title: "101 Amazing Switzerland",
    author: "Swiss Travel Press",
    category: "Petualangan",
    shelf: "finished",
    coverColor: "#3BB2C7",
    coverBgGradient: "from-[#4CC3D8] via-[#35A5B9] to-[#24889B]",
    finishedDate: "15 Jan 2026",
    synopsis: "Panduan fotografi dan lokasi terbaik menjelajahi keindahan Danau Lucerne, Pegunungan Alps, dan desa kuno di Swiss.",
    coverStyle: "switzerland",
    rating: 4.7,
    publishedYear: 2020
  },
  {
    id: "fn-5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fiksi & Fantasy",
    shelf: "finished",
    coverColor: "#FAF7EF",
    coverBgGradient: "from-[#FFFDF7] via-[#F5EFE0] to-[#E8DCB8]",
    finishedDate: "04 Des 2025",
    synopsis: "Petualangan Bilbo Baggins bersama para kurcaci untuk merebut kembali harta kekayaan Erebor dari naga Smaug.",
    coverStyle: "hobbit-oriental",
    rating: 5.0,
    isBestseller: true,
    publishedYear: 1937
  },
  {
    id: "fn-6",
    title: "Logo Design Love",
    author: "David Airey",
    category: "Desain & UX",
    shelf: "finished",
    coverColor: "#18181B",
    coverBgGradient: "from-[#27272A] via-[#18181B] to-[#09090B]",
    finishedDate: "20 Nov 2025",
    synopsis: "Panduan esensial untuk mendesain identitas merek yang ikonis, efektif, dan bertahan sepanjang masa.",
    coverStyle: "logo-love",
    rating: 4.9,
    publishedYear: 2014
  }
];
