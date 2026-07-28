"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Bookmark } from "lucide-react";

export interface BookProps {
  title?: string;
  author?: string;
  color?: string;
  textColor?: string;
  variant?: "stripe" | "simple";
  className?: string;
}

export default function Book({
  title = "The art of smooth interfaces",
  author = "Lexicon Editorial",
  color = "#DDA15E",
  textColor = "#FAF8F3",
  variant = "stripe",
  className = ""
}: BookProps) {
  const isStripe = variant === "stripe";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        rotateY: -12, 
        rotateX: 4, 
        translateY: -10,
        scale: 1.04
      }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className={`relative cursor-pointer perspective-1000 group ${className}`}
    >
      {/* 3D Book Cover Container */}
      <div 
        className="w-48 sm:w-56 h-64 sm:h-76 rounded-r-lg rounded-l-sm relative overflow-hidden flex flex-col justify-between p-5 shadow-[12px_18px_35px_rgba(30,15,5,0.28)] border-l-4 border-black/20"
        style={{ 
          backgroundColor: color, 
          color: textColor 
        }}
      >
        {/* Background Grain & Texture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/20 pointer-events-none"></div>

        {/* Spine Fold Crease Shadow */}
        <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none"></div>

        {/* TOP BAR / VARIANT ACCENT */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest opacity-80 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            LEXICON EDITION
          </span>
          <Bookmark className="w-4 h-4 opacity-75" />
        </div>

        {/* STRIPE VARIANT ACCENT */}
        {isStripe && (
          <div className="relative z-10 w-full my-auto py-2 border-y border-white/25 flex flex-col items-center text-center my-2">
            <div className="w-full h-1 bg-white/30 my-1"></div>
            <h3 className="font-editorial text-base sm:text-lg font-bold leading-snug tracking-tight px-1 drop-shadow">
              {title}
            </h3>
            <div className="w-full h-1 bg-white/30 my-1"></div>
          </div>
        )}

        {/* SIMPLE VARIANT ACCENT */}
        {!isStripe && (
          <div className="relative z-10 my-auto text-left py-2">
            <h3 className="font-editorial text-lg sm:text-xl font-bold leading-tight drop-shadow-md">
              {title}
            </h3>
          </div>
        )}

        {/* BOTTOM AUTHOR */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-2 text-xs font-editorial italic opacity-90">
          <span>{author}</span>
          <span className="text-[10px] font-sans not-italic font-bold opacity-75">VOL. I</span>
        </div>

        {/* 3D Pages Thickness (Right Edge Pages) */}
        <div className="absolute top-1 bottom-1 right-0 w-4 bg-[#F5EFE0] translate-x-4 rotate-y-90 origin-left border-l border-black/15 bg-[repeating-linear-gradient(180deg,#F5EFE0,#F5EFE0_2px,rgba(0,0,0,0.06)_2px,rgba(0,0,0,0.06)_4px)] shadow-inner"></div>

        {/* Metallic Foil Reflection Line on Hover */}
        <div className="absolute -inset-full top-0 block w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
