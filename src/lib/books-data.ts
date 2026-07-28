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
  publisher?: string;
  language?: string;
  isbn?: string;
  chaptersCount?: number;
  estimatedReadTime?: string;
  fullDescription?: string[];
  keyTakeaways?: string[];
  quote?: string;
  reviewsCount?: number;
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
    publisher: "Basic Books / Perseus",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-0465050659",
    chaptersCount: 7,
    estimatedReadTime: "~6.5 Jam Baca",
    rating: 4.9,
    reviewsCount: 3840,
    isBestseller: true,
    publishedYear: 2013,
    synopsis: "Prinsip-prinsip psikologi dan panduan mendalam tentang bagaimana objek sehari-hari harus dirancang agar intuitif dan mudah digunakan oleh manusia.",
    fullDescription: [
      "Buku legendaris karya Don Norman ini menjadi kitab suci bagi para desainer produk, arsitek UX, dan pencipta teknologi di seluruh dunia. Norman menjelaskan dengan gamblang mengapa beberapa objek—seperti pintu yang membingungkan atau tombol kontrol yang tidak intuitif—dapat membuat pengguna merasa frustrasi.",
      "Melalui pendekatan Psikologi Kognitif dan Desain Berpusat pada Manusia (Human-Centered Design), buku ini memberikan kerangka kerja universal mengenai Afordansi (Affordances), Penanda (Signifiers), Pemetaan (Mapping), dan Umpan Balik (Feedback). Anda akan belajar bagaimana menciptakan antarmuka fisik maupun digital yang dapat dipahami pengguna secara instan tanpa perlu membaca manual instruksi yang rumit.",
      "Revisi edisi ini telah disesuaikan dengan era digital, menyentuh topik antarmuka layar sentuh, kecerdasan buatan, dan kompleksitas sistem modern."
    ],
    keyTakeaways: [
      "7 Prinsip Utama Desain Berpusat pada Manusia (HCD)",
      "Cara memanfaatkan Afordansi dan Penanda visual agar navigasi intuitif",
      "Memahami Psikologi Kesalahan Pengguna dan desain toleran terhadap eror",
      "Siklus Tindakan 7 Tahap dalam Psikologi Kognitif"
    ],
    quote: "Desain yang baik sebenarnya jauh lebih sulit diperhatikan daripada desain yang buruk, karena desain yang baik sangat cocok dengan kebutuhan kita sehingga tidak terlihat.",
    coverStyle: "yellow-teapot"
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
    publisher: "O'Reilly Media",
    language: "Bahasa Inggris",
    isbn: "978-1492049395",
    chaptersCount: 9,
    estimatedReadTime: "~4.5 Jam Baca",
    rating: 4.8,
    reviewsCount: 1250,
    publishedYear: 2019,
    synopsis: "Panduan praktis menyusun mikro-teks, pesan UX, dan antarmuka kata yang mendorong pengalaman pengguna menjadi lebih efisien dan menyenangkan.",
    fullDescription: [
      "Teks pada layar antarmuka bukan sekadar pelengkap visual, melainkan navigasi utama yang membimbing pengguna mencapai tujuannya. Torrey Podmajersky menyajikan metode terstruktur untuk merancang UX Writing yang selaras dengan tujuan bisnis dan kebutuhan pengguna.",
      "Buku ini membahas cara membangun Suara & Nada Merek (Voice & Tone), mengukur efektivitas pesan antarmuka, serta menyusun komponen teks seperti tombol CTA, pesan kesalahan, dialog konfirmasi, dan onboarding secara konsisten."
    ],
    keyTakeaways: [
      "Menyusun Kompas Kata (Voice & Tone Framework)",
      "Desain Microcopy yang singkat, jelas, dan inklusif",
      "Pola penulisan Tombol, Pesan Eror, dan Notifikasi aplikasi",
      "Pengukuran dampak UX Writing terhadap konversi aplikasi"
    ],
    quote: "Kata-kata di dalam antarmuka adalah jembatan percakapan antara sistem dan manusia.",
    coverStyle: "oreilly-bird"
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
    publisher: "HarperCollins UK",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-0261103252",
    chaptersCount: 62,
    estimatedReadTime: "~24.0 Jam Baca",
    rating: 5.0,
    reviewsCount: 15420,
    isBestseller: true,
    publishedYear: 1954,
    synopsis: "Kisah epik perjuangan Frodo Baggins dan Cincin Utama dalam perjalanan berbahaya menuju Gunung Takdir untuk menyelamatkan Middle-earth.",
    fullDescription: [
      "Mahakarya fiksi fantasi terbesar sepanjang masa karya J.R.R. Tolkien. Berlatar di benua Middle-earth yang megah, buku ini mengisahkan perjalanan takdir seorang Hobbit sederhana bernama Frodo Baggins yang mengemban tugas membawa Cincin Utama menuju kawah Gunung Takdir.",
      "Didampingi oleh Sembilan Pembawa Cincin—penyihir Gandalf, prajurit Aragorn, Legolas si Peri, Gimli si Kurcaci, serta sahabat setia Samwise Gamgee—mereka harus menghadapi kegelapan Pangeran Kegelapan Sauron.",
      "Kisah ini mengeksplorasi tema persahabatan sejati, keabadian harapan di tengah kegelapan, pengorbanan, dan perjuangan melawan godaan kekuasaan mutlak."
    ],
    keyTakeaways: [
      "Mitologi dan pembangunan dunia (Worldbuilding) fantasi paling detail di dunia",
      "Pelajaran mendalam tentang kesetiaan, keberanian, dan pengorbanan",
      "Analogi filosofis mengenai bahaya kekuasaan dan keserakahan"
    ],
    quote: "Bahkan orang terkecil sekalipun dapat mengubah jalan masa depan.",
    coverStyle: "lotr-ring"
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
    publisher: "Vilnius Nature Press",
    language: "Bahasa Lituania & Inggris",
    isbn: "978-5420012901",
    chaptersCount: 12,
    estimatedReadTime: "~5.0 Jam Baca",
    rating: 4.7,
    reviewsCount: 410,
    publishedYear: 2021,
    synopsis: "Eksplorasi keanekaragaman flora dan fauna pegunungan utara, menyajikan ilustrasi burung dan lanskap alam yang memukau.",
    fullDescription: [
      "Buku ensiklopedia visual dan jurnal sains populer karya ornitolog ternama Tadas Ivanauskas. Buku ini merangkum pengamatan puluhan tahun mengenai spesies burung endemik di hutan dan danau Baltik.",
      "Dilengkapi dengan sketsa ilustrasi tangan yang indah, foto habitat asli, dan penjelasan ekologis tentang perilaku migrasi burung utara."
    ],
    keyTakeaways: [
      "Panduan identifikasi spesies burung hutan utara",
      "Metode observasi alam liar dan konservasi keanekaragaman hayati",
      "Ilustrasi visual lanskap alam Baltik yang memukau"
    ],
    quote: "Mendengarkan kepakan sayap burung di rimba sunyi adalah cara terbaik memahami alam.",
    coverStyle: "eagle-sky"
  },
  {
    id: "nu-2",
    title: "The Lord of the Rings: Fellowship",
    author: "J.R.R. Tolkien",
    category: "Fiksi & Fantasy",
    shelf: "next-up",
    coverColor: "#1B3B2B",
    coverBgGradient: "from-[#143022] via-[#1E4330] to-[#0D2117]",
    publisher: "HarperCollins",
    language: "Bahasa Indonesia",
    isbn: "978-0007525546",
    chaptersCount: 22,
    estimatedReadTime: "~8.5 Jam Baca",
    rating: 4.9,
    reviewsCount: 8900,
    isBestseller: true,
    publishedYear: 1954,
    synopsis: "Awal perjalanan Sembilan Pembawa Cincin melintasi wilayah perbatasan Middle-earth yang dipenuhi misteri dan ancaman musuh.",
    fullDescription: [
      "Buku pertama dari trilogi The Lord of the Rings. Dimulai dari suasana damai di Shire, Bilbo Baggins mewariskan cincin misterius kepada keponakannya, Frodo.",
      "Setelah menyadari marabahaya di balik Cincin Utama, Frodo melarikan diri bersama kawan-kawannya menuju Rivendell, di mana Dewan Elrond dibentuk untuk memutuskan nasib Middle-earth."
    ],
    keyTakeaways: [
      "Pembentukan persekutuan Sembilan Pembawa Cincin",
      "Perjalanan menegangkan melintasi Tambang Moria",
      "Awal pengujian ikatan persahabatan Frodo dan Sam"
    ],
    quote: "Tidak semua yang mengembara itu tersesat.",
    coverStyle: "lotr-ring"
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
    publisher: "Traveler Press",
    language: "Bahasa Inggris",
    isbn: "978-1786570253",
    chaptersCount: 15,
    estimatedReadTime: "~6.0 Jam Baca",
    rating: 4.8,
    reviewsCount: 650,
    publishedYear: 2018,
    synopsis: "Kisah perjalanan solo mengelilingi 40 negara menggunakan sepeda motor tua, melintasi gurun, salju, dan lembah sunyi.",
    fullDescription: [
      "Catatan perjalanan petualang solo Eric Van De Wetering yang menjelajahi benua melintasi gurun Sahara, dataran salju Siberia, hingga jalan setapak Andes.",
      "Kisah ini menyajikan refleksi mendalam mengenai kebebasan, keberanian melangkah dari zona nyaman, dan keramahan tak terduga dari masyarakat lokal di belahan dunia yang terisolasi."
    ],
    keyTakeaways: [
      "Seni melakukan perjalanan solo jangka panjang",
      "Tips bertahan hidup dan navigasi lintas budaya",
      "Filosofi ketenangan di tengah ketidakpastian petualangan"
    ],
    quote: "Dunia ini terlalu indah untuk hanya disaksikan melalui jendela kamar.",
    coverStyle: "desert-journey"
  },
  {
    id: "nu-4",
    title: "Art & Fear",
    author: "David Bayles & Ted Orland",
    category: "Pengembangan Diri",
    shelf: "next-up",
    coverColor: "#EAE3D2",
    coverBgGradient: "from-[#FAF6ED] via-[#EFE7D5] to-[#E3D9C3]",
    publisher: "Image Continuum Press",
    language: "Bahasa Inggris",
    isbn: "978-0961454739",
    chaptersCount: 8,
    estimatedReadTime: "~3.5 Jam Baca",
    rating: 4.9,
    reviewsCount: 2150,
    publishedYear: 2001,
    synopsis: "Pengamatan mendalam tentang hambatan mental dan rasa takut yang dihadapi setiap seniman dan kreator dalam berkarya.",
    fullDescription: [
      "Sebuah refleksi jujur dan mencerahkan mengenai proses kreatif. Buku ini mengupas rasa takut akan kegagalan, penilaian orang lain, ketidaksempurnaan, dan sindrom imposter yang sering menyergap penulis, desainer, dan pembuat karya.",
      "Penulis menekankan bahwa karya seni berkualitas tidak lahir dari bakat ajaib semata, melainkan dari ketekunan terus berkarya di tengah keraguan."
    ],
    keyTakeaways: [
      "Mengatasi rasa takut akan hasil karya yang tidak sempurna",
      "Pentingnya kuantitas latihan untuk mencapai kualitas karya",
      "Membangun rutinitas kreatif yang konsisten dan tahan lama"
    ],
    quote: "Untuk membuat seni berarti bersedia memperlihatkan diri Anda kepada dunia.",
    coverStyle: "calligraphy"
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
    publisher: "Penguin Books",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-0141036144",
    chaptersCount: 24,
    estimatedReadTime: "~7.0 Jam Baca",
    rating: 5.0,
    reviewsCount: 19800,
    isBestseller: true,
    publishedYear: 1949,
    synopsis: "Novel distopia legendaris tentang totalitarianisme, pengawasan masif Big Brother, dan perjuangan Winston Smith mempertanyakan kebenaran.",
    fullDescription: [
      "Masterpiece sastra politik dunia tulisan George Orwell. Berlatar di negara totalitarian Oceania di mana 'Big Brother' memantau setiap gerak-gerik warga melalui layar teleskrip dan Polisi Pikiran.",
      "Winston Smith, seorang pekerja di Kementerian Kebenaran yang bertugas merubah catatan sejarah, mulai meragukan dogma partai dan memberontak secara rahasia melalui kebebasan berpikir dan cinta."
    ],
    keyTakeaways: [
      "Kritik tajam terhadap propaganda politik dan sensor informasi (Newspeak)",
      "Pentingnya menjaga kebebasan pikiran dan ingatan sejarah murni",
      "Analisis psikologis kontrol massa melalui ketakutan"
    ],
    quote: "Siapa yang menguasai masa lalu menguasai masa depan. Siapa yang menguasai masa kini menguasai masa lalu.",
    coverStyle: "orwell-1984"
  },
  {
    id: "nu-6",
    title: "The Design of Everyday Things (Red)",
    author: "Don Norman",
    category: "Desain & UX",
    shelf: "next-up",
    coverColor: "#ECC82F",
    coverBgGradient: "from-[#F5D73E] via-[#ECC427] to-[#D4A91B]",
    publisher: "MIT Press",
    language: "Bahasa Inggris",
    isbn: "978-0262525671",
    chaptersCount: 7,
    estimatedReadTime: "~6.0 Jam Baca",
    rating: 4.8,
    reviewsCount: 1900,
    publishedYear: 2015,
    synopsis: "Edisi perayaan khusus dengan analisis kegagalan desain modern dalam perangkat lunak dan arsitektur fisik.",
    fullDescription: [
      "Versi peringatan edisi khusus dari mahakarya Don Norman. Berisi studi kasus tambahan mengenai kegagalan desain perangkat lunak modern, sistem navigasi mobil, dan antarmuka perangkat rumah pintar.",
      "Norman menyajikan perspektif baru bagaimana prinsip desain klasik berlaku di dunia berbasis IoT dan AI."
    ],
    keyTakeaways: [
      "Studi kasus kegagalan desain teknologi abad 21",
      "Pentingnya iterasi prototipe cepat berbasis riset pengguna",
      "Strategi menyelaraskan desainer, insinyur, dan manajemen bisnis"
    ],
    quote: "Jika pengguna melakukan kesalahan, itu adalah kesalahan sistem desainer.",
    coverStyle: "yellow-teapot"
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
    publisher: "Simon & Schuster",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-1451648539",
    chaptersCount: 42,
    estimatedReadTime: "~16.0 Jam Baca",
    rating: 5.0,
    reviewsCount: 11200,
    isBestseller: true,
    publishedYear: 2011,
    synopsis: "Biografi eksklusif tentang visi, ambisi, dan kepemimpinan visioner Steve Jobs dalam membangun revolusi Apple.",
    fullDescription: [
      "Berdasarkan lebih dari 40 wawancara mendalam selama dua tahun dengan Steve Jobs sendiri, serta ratusan wawancara dengan anggota keluarga, kawan, pesaing, dan rekan kerjanya.",
      "Walter Isaacson menuliskan kisah nyata tentang perjalanan hidup pendiri Apple yang visioner, penuh gejolak emosi, obsesi terhadap kesempurnaan produk, dan standar estetika tanpa kompromi.",
      "Buku ini mengurai bagaimana Jobs merevolusi enam industri sekaligus: komputer pribadi, film animasi (Pixar), musik (iTunes/iPod), telepon genggam (iPhone), komputer tablet (iPad), dan penerbitan digital."
    ],
    keyTakeaways: [
      "Bidang Distorsi Realitas (Reality Distortion Field) dan kepemimpinan Jobs",
      "Penyatuan seni dan teknologi dalam filosofi desain Apple",
      "Pelajaran manajemen: Fokus ekstrem dan keberanian menyederhanakan produk"
    ],
    quote: "Orang-orang yang cukup gila untuk berpikir bahwa mereka dapat mengubah dunia adalah orang-orang yang benar-benar melakukannya.",
    coverStyle: "steve-jobs"
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
    publisher: "Princeton Architectural Press",
    language: "Bahasa Inggris",
    isbn: "978-1616895747",
    chaptersCount: 10,
    estimatedReadTime: "~5.0 Jam Baca",
    rating: 4.8,
    reviewsCount: 780,
    publishedYear: 2017,
    synopsis: "Seni menggambar huruf, struktur tipografi tangan, dan teknik menciptakan bentuk huruf bermakna indah.",
    fullDescription: [
      "Panduan komprehensif bagi desainer grafis dan lettering artist karya Martina Flor. Mengupas langkah-langkah praktis menggambar bentuk huruf dari sketsa pensil awal hingga kurva vektor digital yang presisi.",
      "Dilengkapi diagram kontras huruf, anatomi tipe (ascender, descender, serif), dan rahasia menyusun komposisi teks bernilai seni tinggi."
    ],
    keyTakeaways: [
      "Anatomi huruf dan optik penyeimbangan bobot karakter",
      "Teknik vektorisasi bersih dari sketsa pensil ke Adobe Illustrator",
      "Strategi bisnis sebagai perancang huruf independen"
    ],
    quote: "Huruf yang indah tidak hanya dibaca, tetapi dirasakan emosinya oleh penglihat.",
    coverStyle: "calligraphy"
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
    publisher: "Gestalten",
    language: "Bahasa Inggris",
    isbn: "978-3899559064",
    chaptersCount: 14,
    estimatedReadTime: "~7.5 Jam Baca",
    rating: 4.9,
    reviewsCount: 1430,
    publishedYear: 2017,
    synopsis: "Perjalanan dari Amsterdam menuju Singapura dengan sepeda. Dokumentasi visual dan jurnal perjalanan tak terlupakan.",
    fullDescription: [
      "Martijn Doolaard meninggalkan kehidupan kantor di Amsterdam dan mengayuh sepedanya melintasi 17.000 kilometer menuju Singapura.",
      "Buku jurnal visual ini berisi ratusan foto lanskap megah, catatan perjalanan harian, serta refleksi keheningan saat berkemah di bawah bintang-bintang di Pegunungan Pamir dan gurun Iran."
    ],
    keyTakeaways: [
      "Seni hidup bertualang dengan perlengkapan minimalis (Bikepacking)",
      "Dokumentasi fotografi lanskap perjalanan profesional",
      "Pelajaran tentang ketahanan fisik dan kedamaian pikiran saat sendiri"
    ],
    quote: "Ketika Anda bergerak secepat laju kayuhan sepeda, Anda benar-benar merasakan setiap jengkal permukaan bumi.",
    coverStyle: "mountain-bike"
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
    publisher: "Swiss Heritage Guide",
    language: "Bahasa Inggris & Jerman",
    isbn: "978-3033071234",
    chaptersCount: 10,
    estimatedReadTime: "~4.0 Jam Baca",
    rating: 4.7,
    reviewsCount: 520,
    publishedYear: 2020,
    synopsis: "Panduan fotografi dan lokasi terbaik menjelajahi keindahan Danau Lucerne, Pegunungan Alps, dan desa kuno di Swiss.",
    fullDescription: [
      "Buku panduan eksklusif melintasi 101 lokasi paling tersembunyi dan menakjubkan di Swiss. Dari rute kereta panorama Glacier Express hingga jembatan gantung tebing di Titlis.",
      "Setiap halaman menyajikan titik foto terbaik, musim terbaik berkunjung, dan catatan sejarah singkat dari setiap desa kuno Alpen."
    ],
    keyTakeaways: [
      "101 Panduan lokasi foto dan petualangan di wilayah Pegunungan Alps",
      "Rute perjalanan efisien menggunakan Swiss Travel Pass",
      "Fakta sejarah unik kebudayaan unik masyarakat lembah Swiss"
    ],
    quote: "Swiss adalah lukisan alam yang diciptakan Tuhan dengan kemegahan tanpa batas.",
    coverStyle: "switzerland"
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
    publisher: "George Allen & Unwin",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-0261102217",
    chaptersCount: 19,
    estimatedReadTime: "~6.5 Jam Baca",
    rating: 5.0,
    reviewsCount: 16200,
    isBestseller: true,
    publishedYear: 1937,
    synopsis: "Petualangan Bilbo Baggins bersama para kurcaci untuk merebut kembali harta kekayaan Erebor dari naga Smaug.",
    fullDescription: [
      "Kisah klasik yang mendahului petualangan The Lord of the Rings. Bilbo Baggins, seorang Hobbit yang menyukai kenyamanan rumahnya di Bag End, tiba-tiba dikunjungi oleh penyihir Gandalf dan 13 Kurcaci yang dipimpin Thorin Oakenshield.",
      "Bilbo ditunjuk sebagai 'pencuri ahli' dalam misi berbahaya menuju Gunung Sunyi untuk merebut kembali kerajaan kurcaci Erebor yang dikuasai naga kejam Smaug. Di tengah perjalanan, Bilbo menemukan Cincin Ajaib yang akan mengubah sejarah Middle-earth."
    ],
    keyTakeaways: [
      "Kisah petualangan klasik penuh keajaiban dan teka-teki kuno (Riddles in the Dark)",
      "Transformasi Bilbo dari sosok penakut menjadi pahlawan pemberani",
      "Pengenalan awal sejarah Cincin Utama dan karakter Gollum"
    ],
    quote: "Jika lebih banyak dari kita menghargai makanan dan keceriaan di atas emas simpanan, dunia ini akan menjadi tempat yang jauh lebih bahagia.",
    coverStyle: "hobbit-oriental"
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
    publisher: "Peachpit Press",
    language: "Bahasa Indonesia & Inggris",
    isbn: "978-0321985200",
    chaptersCount: 11,
    estimatedReadTime: "~5.0 Jam Baca",
    rating: 4.9,
    reviewsCount: 3100,
    publishedYear: 2014,
    synopsis: "Panduan esensial untuk mendesain identitas merek yang ikonis, efektif, dan bertahan sepanjang masa.",
    fullDescription: [
      "David Airey, seorang desainer grafis ternama asal Irlandia Utara, membagikan rahasia di balik perancangan identitas visual dan logo yang tahan lama.",
      "Buku ini tidak hanya membahas aspek estetika visual logo, tetapi juga rahasia berkomunikasi dengan klien, menyusun Ringkasan Desain (Design Brief), menetapkan harga karya, serta menjaga hak cipta logo."
    ],
    keyTakeaways: [
      "7 Aturan Emas merancang logo yang ikonis dan serbaguna",
      "Proses riset, eksplorasi ide sketsa, hingga penyajian ke klien",
      "Panduan menyusun Manual Identitas Merek (Brand Guidelines)"
    ],
    quote: "Logo bukanlah merek itu sendiri, melainkan tanda pengenal yang mewakili cerita dan nilai di balik merek tersebut.",
    coverStyle: "logo-love"
  }
];
