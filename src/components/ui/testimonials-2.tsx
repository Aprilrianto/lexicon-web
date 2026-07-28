import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface TestimonialItem {
  id: number;
  highlightedName: string;
  quoteBefore: string;
  quoteAfter: string;
  author: string;
  role: string;
  avatarSrc: string;
  avatarFallback: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quoteBefore: "",
    highlightedName: "Lexicon Novel",
    quoteAfter: " adalah tempat terbaik bagi saya menemukan fiksi ilmiah berkualitas. Tampilannya begitu menenangkan.",
    author: "Aisha Rahma",
    role: "Mahasiswi & Pembaca Setia",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
    avatarFallback: "AR",
  },
  {
    id: 2,
    quoteBefore: "Fitur rak buku 3D di ",
    highlightedName: "Lexicon",
    quoteAfter: " sangat membantu saya mengorganisir cerita pendek dan mendapat umpan balik dari sesama pecinta literatur.",
    author: "Dimas Anggara",
    role: "Penulis Cerita Pendek",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    avatarFallback: "DA",
  },
  {
    id: 3,
    quoteBefore: "Pengalaman membaca di sini luar biasa. ",
    highlightedName: "Desain editorialnya",
    quoteAfter: " terasa mewah seperti memiliki perpustakaan pribadi di dalam genggaman.",
    author: "Siti Nurhaliza",
    role: "Pecinta Novel Romansa",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    avatarFallback: "SN",
  },
];

export function TestimonialsCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="mx-auto flex w-full flex-col items-center justify-between bg-[#FAF8F3] border border-[#3D2B1F]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full">
      <div className="relative mb-6 mt-2">
        {/* Vertical lines */}
        <MaskLine className="left-0" orientation="vertical" />
        <MaskLine className="right-0" orientation="vertical" />
        {/* Horizontal lines */}
        <MaskLine className="top-0" orientation="horizontal" />
        <MaskLine className="bottom-0" orientation="horizontal" />

        <Avatar className="size-20 rounded-none *:rounded-none md:size-24 border border-[#3D2B1F]/15">
          <AvatarImage
            alt={`${item.author}'s profile picture`}
            src={item.avatarSrc}
            className="object-cover"
          />
          <AvatarFallback>{item.avatarFallback}</AvatarFallback>
        </Avatar>
      </div>

      <figcaption className="space-y-4 text-center flex-1 flex flex-col justify-between w-full">
        <blockquote className="text-sm font-editorial text-[#3D2B1F]/80 leading-relaxed tracking-tight">
          &quot;{item.quoteBefore}
          <span className="font-bold text-[#3D2B1F]">
            {item.highlightedName}
          </span>
          {item.quoteAfter}&quot;
        </blockquote>

        <div className="pt-4 border-t border-[#3D2B1F]/10 w-full">
          <cite className="font-bold font-editorial text-[#3D2B1F] text-sm not-italic block">
            {item.author}
          </cite>
          <div className="text-xs font-sans text-[#3D2B1F]/60">
            {item.role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-4 text-[#3D2B1F]">
          Ulasan Pembaca
        </h2>
        <p className="font-sans text-[#3D2B1F]/70 text-lg max-w-xl mx-auto">
          Pendapat jujur dari komunitas pembaca dan penulis mengenai platform Lexicon Novel.
        </p>
      </div>

      {/* 3 Review Cards Side-by-side horizontally */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
        {testimonialsData.map((item) => (
          <TestimonialsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function MaskLine({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute bg-[#3D2B1F]/20",
        orientation === "vertical" &&
          "-inset-y-1/2 w-px",
        orientation === "horizontal" &&
          "-inset-x-1/2 h-px",
        className
      )}
      {...props}
    />
  );
}

export default TestimonialsSection;
