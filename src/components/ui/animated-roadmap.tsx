"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  id: number;
  name: string;
  status: "complete" | "in-progress" | "pending";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

interface AnimatedRoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: Milestone[];
  mapImageSrc: string;
}

const MilestoneMarker = ({ milestone }: { milestone: Milestone }) => {
  const statusClasses = {
    complete: "bg-emerald-500 border-emerald-700 shadow-emerald-500/50",
    "in-progress": "bg-[#D86B4B] border-[#C55636] animate-pulse shadow-orange-500/50",
    pending: "bg-gray-300 border-gray-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: milestone.id * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="absolute flex items-center gap-4 z-30"
      style={milestone.position}
    >
      <motion.div 
        animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: milestone.id * 0.35 }}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="relative flex h-9 w-9 items-center justify-center">
          <div
            className={cn(
              "absolute h-4 w-4 rounded-full border-2 shadow-md z-10 transition-transform group-hover:scale-125",
              statusClasses[milestone.status]
            )}
          />
          <div className="absolute h-full w-full rounded-full bg-[#DDA15E]/40 animate-ping opacity-80" />
        </div>
        <div className="rounded-full border border-[#3D2B1F]/20 bg-[#FAF8F3]/95 px-5 py-2.5 text-sm md:text-base font-editorial font-bold text-[#3D2B1F] shadow-xl backdrop-blur-md whitespace-nowrap group-hover:scale-108 group-hover:bg-[#3D2B1F] group-hover:text-[#FAF8F3] transition-all duration-300">
          {milestone.name}
        </div>
      </motion.div>
    </motion.div>
  );
};

const AnimatedRoadmap = React.forwardRef<HTMLDivElement, AnimatedRoadmapProps>(
  ({ className, milestones, mapImageSrc, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);

    return (
      <div
        ref={targetRef}
        className={cn("relative w-full max-w-4xl mx-auto py-6 px-4 flex flex-col items-center justify-center", className)}
        {...props}
      >
        {/* Balanced Size 3D Map Container */}
        <div className="relative w-full max-w-3xl flex justify-center items-center py-4 min-h-[420px] md:min-h-[480px]">
          
          {/* Floating & Hoverable Map Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            animate={{
              y: [-8, 8, -8],
              rotateZ: [-0.8, 0.8, -0.8],
            }}
            // @ts-ignore
            transition={{
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, translateY: -6 }}
            className="relative cursor-pointer group flex flex-col items-center justify-center w-full"
          >
            {/* Map Image - Medium Balanced Size */}
            <img
              src={mapImageSrc}
              alt="Peta 3D Perjalanan Membaca"
              className="w-full max-w-3xl max-h-[460px] md:max-h-[520px] object-contain filter drop-shadow-[0_20px_30px_rgba(45,25,10,0.28)] group-hover:drop-shadow-[0_30px_40px_rgba(45,25,10,0.4)] transition-all duration-500"
            />
            {/* Pulsating shadow under map */}
            <motion.div 
              animate={{ opacity: [0.3, 0.65, 0.3], scale: [0.9, 1.06, 0.9] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-4/5 h-10 bg-black/45 rounded-full blur-2xl mx-auto -mt-8 pointer-events-none"
            />
          </motion.div>

          {/* Render Milestone Markers over the map */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="pointer-events-auto">
                <MilestoneMarker milestone={milestone} />
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
);

AnimatedRoadmap.displayName = "AnimatedRoadmap";

export { AnimatedRoadmap };
