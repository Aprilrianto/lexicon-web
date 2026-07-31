"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, Headphones, Compass, Eye, X, Film } from "lucide-react";

export function StickyVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll animations linked to this section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Framer Motion transforms based on scroll position
  const videoScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [1.15, 1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0.3, 1, 1, 0.3]);

  // Content Phase 1 transforms (Headline & Primary Action Buttons)
  const contentY1 = useTransform(scrollYProgress, [0.12, 0.45], [60, 0]);
  const contentOpacity1 = useTransform(scrollYProgress, [0.12, 0.28, 0.52, 0.62], [0, 1, 1, 0]);
  const pointerEvents1 = useTransform(scrollYProgress, [0.15, 0.25, 0.52, 0.6], ["none", "auto", "auto", "none"]);

  // Content Phase 2 transforms (Feature Cards)
  const contentY2 = useTransform(scrollYProgress, [0.55, 0.85], [60, 0]);
  const contentOpacity2 = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
  const pointerEvents2 = useTransform(scrollYProgress, [0.58, 0.65, 0.85, 0.92], ["none", "auto", "auto", "none"]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => { });
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const openVideoModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(() => { });
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeVideoModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // AUTO MUTE & PAUSE AUDIO WHEN SCROLLING OUT OF SECTION
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // When scrolling past top (< 0.05) or past bottom (> 0.90)
      if (latest > 0.90 || latest < 0.05) {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // INTERSECTION OBSERVER: MUTE & PAUSE AUTOMATICALLY WHEN OUT OF VIEWPORT
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.pause();
              setIsMuted(true);
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[220vh] bg-[#120D0A] text-[#FAF8F3] -mt-12 mb-20 overflow-visible"
    >
      {/* Top transition gradient from warm light background */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FAF7F0] via-[#FAF7F0]/40 to-transparent z-20 pointer-events-none" />

      {/* STICKY CONTAINER FOR THE BACKGROUND VIDEO */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">

        {/* Background Video Wrapper with Scale & Fade Effect */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* HTML5 Background Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            poster="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
          >
            {/* Local video in public/aset & online fallback MP4 video sources */}
            <source
              src="/aset/scene1.mp4"
              type="video/mp4"
            />
            <source
              src="/aset/video-background.mp4"
              type="video/mp4"
            />
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>

          {/* Aesthetic Vintage Dark Overlay & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A] via-[#120D0A]/50 to-[#120D0A]/70 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#120D0A]/40 to-[#120D0A] pointer-events-none" />

          {/* Subtle Grain Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-15 mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* Video Control Buttons Floating Badge (Mute/Unmute & Play/Pause) */}
        <div className="absolute bottom-8 right-8 z-40 flex items-center gap-3 bg-[#120D0A]/85 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-2xl pointer-events-auto">
          <button
            type="button"
            onClick={togglePlay}
            className="p-2 rounded-full hover:bg-white/20 text-white/90 hover:text-white active:scale-95 transition-all cursor-pointer touch-manipulation"
            title={isPlaying ? "Jeda Video Latar" : "Putar Video Latar"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <div className="w-px h-4 bg-white/20" />

          <button
            type="button"
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-white/20 text-white/90 hover:text-white active:scale-95 transition-all cursor-pointer touch-manipulation"
            title={isMuted ? "Aktifkan Suara" : "Bisukan Suara"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#DDA15E]" />}
          </button>

          <span className="text-xs font-sans font-medium text-white/80 tracking-wide pr-1 select-none">
            {isMuted ? "Audio Muted" : "Audio On"}
          </span>
        </div>

        {/* Dynamic Center Overlay Content Phase 1 (Headline & Primary Action Buttons) */}
        <motion.div
          style={{ y: contentY1, opacity: contentOpacity1, pointerEvents: pointerEvents1 }}
          className="absolute max-w-4xl mx-auto px-6 text-center z-30 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDA15E]/20 text-[#DDA15E] text-xs font-editorial font-semibold tracking-wider uppercase mb-6 border border-[#DDA15E]/40 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            Pengalaman Sinematik Lexicon
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Di Mana Kata Bertemu <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#DDA15E]">Suasana Sinematik</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
            Nikmati petualangan membaca novel dengan visual latar belakang video sticky yang dramatis, menghadirkan atmosfer ruang baca privat langsung ke layar Anda.
          </p>

          {/* Action Buttons Box */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-40">

            {/* Action 1: Putar Video Fullscreen Modal */}
            <button
              type="button"
              onClick={openVideoModal}
              className="px-8 py-4 rounded-full bg-[#DDA15E] text-[#120D0A] font-editorial font-bold text-sm sm:text-base hover:bg-white active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 group cursor-pointer touch-manipulation select-none border-2 border-transparent hover:border-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#120D0A] text-[#DDA15E] flex items-center justify-center group-hover:bg-[#DDA15E] group-hover:text-[#120D0A] transition-colors shadow-sm">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>Putar Video Fullscreen</span>
            </button>

            {/* Action 2: Toggle Video Latar */}
            <button
              type="button"
              onClick={togglePlay}
              className="px-7 py-4 rounded-full bg-[#120D0A]/70 backdrop-blur-md border border-white/30 text-white font-editorial text-sm sm:text-base font-medium hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer touch-manipulation select-none"
            >
              <Eye className="w-4.5 h-4.5 text-[#DDA15E]" />
              <span>{isPlaying ? "Jeda Video Latar" : "Putar Video Latar"}</span>
            </button>

          </div>
        </motion.div>

        {/* Dynamic Floating Feature Cards Phase 2 (Appears on Scroll 45% - 95%) */}
        <motion.div
          style={{ y: contentY2, opacity: contentOpacity2, pointerEvents: pointerEvents2 }}
          className="absolute max-w-5xl mx-auto px-6 w-full z-30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div
              onClick={openVideoModal}
              className="bg-[#1C140E]/85 backdrop-blur-xl border border-[#DDA15E]/30 p-6 rounded-2xl shadow-2xl hover:border-[#DDA15E] transition-all duration-300 group cursor-pointer touch-manipulation select-none active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DDA15E]/20 border border-[#DDA15E]/40 flex items-center justify-center text-[#DDA15E] mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-white mb-2 flex items-center justify-between">
                Suara Narasi Imersif
                <span className="text-xs bg-[#DDA15E] text-[#120D0A] px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" /> Putar
                </span>
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Pengisi suara terbaik menghidupkan setiap intonasi karakter dan alur cerita dengan kehangatan audio profesional.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1C140E]/85 backdrop-blur-xl border border-[#DDA15E]/30 p-6 rounded-2xl shadow-2xl hover:border-[#DDA15E] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#DDA15E]/20 border border-[#DDA15E]/40 flex items-center justify-center text-[#DDA15E] mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-white mb-2">
                Suasana Latar Sticky
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Latar belakang video mengikuti guliran halaman (sticky background scroll), menjaga ketenangan suasana saat membaca.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1C140E]/85 backdrop-blur-xl border border-[#DDA15E]/30 p-6 rounded-2xl shadow-2xl hover:border-[#DDA15E] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#DDA15E]/20 border border-[#DDA15E]/40 flex items-center justify-center text-[#DDA15E] mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-white mb-2">
                Perpustakaan Kategori
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Ribuan novel pilihan dari fiksi ilmiah, klasik, romansa hingga horor dengan fitur rekomendasi personal.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* FULLSCREEN POPUP VIDEO MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#120D0A] border border-[#DDA15E]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="w-full px-6 py-4 bg-[#1C140E] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#DDA15E]">
                  <Film className="w-5 h-5" />
                  <span className="font-editorial font-bold text-base text-white">
                    Putar Video Pengalaman Membaca Lexicon
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeVideoModal}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Box */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  src="/aset/scene1.mp4"
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                >
                  <source src="/aset/video-background.mp4" type="video/mp4" />
                  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Modal Footer */}
              <div className="w-full px-6 py-4 bg-[#1C140E] border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>🎵 Video Pengalaman Membaca - Lexicon Digital</span>
                <button
                  type="button"
                  onClick={closeVideoModal}
                  className="px-5 py-2 rounded-full bg-[#DDA15E] text-[#120D0A] font-editorial font-bold text-xs hover:bg-white transition-colors cursor-pointer touch-manipulation"
                >
                  Tutup Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom transition gradient back to warm light theme */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAF7F0] via-[#FAF7F0]/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
