"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";

import { cn } from "@/lib/utils";
import { Home, Compass, Library, MessageCircleQuestion, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  separator?: boolean;
}

export interface DockProps {
  items: DockItem[];
  magnification?: number;
  distance?: number;
  iconSize?: number;
  gap?: number;
  borderRadius?: number;
  alwaysShowLabels?: boolean;
  springOptions?: SpringOptions;
  className?: string;
  direction?: "horizontal" | "vertical";
}

const DEFAULT_SPRING: SpringOptions = {
  stiffness: 400,
  damping: 25,
  mass: 0.4,
};

function DockSeparator({ direction = "horizontal" }: { direction?: "horizontal" | "vertical" }) {
  return (
    <div className={cn("flex items-center self-stretch", direction === "vertical" ? "my-1" : "mx-1")}>
      <div className={cn("bg-[#3D2B1F]/10", direction === "vertical" ? "w-6 h-px" : "h-6 w-px")} />
    </div>
  );
}

function DockIcon({
  item,
  mousePosition,
  magnification,
  distance,
  iconSize,
  borderRadius,
  alwaysShowLabels,
  springOptions,
  onHover,
  direction,
  iconRef: externalIconRef,
}: {
  item: DockItem;
  mousePosition: ReturnType<typeof useMotionValue<number>>;
  magnification: number;
  distance: number;
  iconSize: number;
  borderRadius: number;
  alwaysShowLabels: boolean;
  springOptions: SpringOptions;
  onHover: (ref: React.RefObject<HTMLDivElement | null> | null) => void;
  direction: "horizontal" | "vertical";
  iconRef: React.RefObject<HTMLDivElement | null>;
}) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const distanceFromMouse = useTransform(mousePosition, (val) => {
    const el = wrapperRef.current;
    if (!el) return distance * 100;
    const rect = el.getBoundingClientRect();
    return Math.abs(
      val - (direction === "vertical" ? rect.top + rect.height / 2 : rect.left + rect.width / 2)
    );
  });

  const gaussian = (d: number) =>
    (magnification - 1) * Math.exp(-(d * d) / (2 * distance * distance)) + 1;

  const sizeRaw = useTransform(distanceFromMouse, (d) => iconSize * gaussian(d));
  const size = useSpring(sizeRaw, springOptions);

  const Tag = item.href ? "a" : "button";

  return (
    <motion.div
      ref={wrapperRef}
      className={cn("relative flex justify-center", direction === "vertical" ? "items-center" : "items-end")}
      style={direction === "vertical" ? { width: iconSize, height: size } : { width: size, height: iconSize }}
    >
      <motion.div
        ref={externalIconRef}
        style={direction === "vertical" ? { width: size, height: size, right: 0 } : { width: size, height: size, bottom: 0 }}
        className="absolute"
      >
        <Tag
          href={item.href}
          onClick={item.onClick}
          onMouseEnter={() => onHover(externalIconRef)}
          onMouseLeave={() => onHover(null)}
          aria-label={item.label}
          style={{ borderRadius }}
          className={cn(
            "flex h-full w-full items-center justify-center",
            "text-[#3D2B1F]/70 transition-colors duration-150",
            "hover:bg-[#3D2B1F]/10 hover:text-[#3D2B1F]",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3D2B1F]/20",
            "[&_svg]:size-[55%]"
          )}
        >
          {item.icon}
        </Tag>
      </motion.div>

      {alwaysShowLabels && (
        <span className={cn("font-medium tracking-tight text-[#3D2B1F]/40 whitespace-nowrap pointer-events-none select-none leading-none", direction === "vertical" ? "absolute left-full ml-2 text-[10px]" : "mt-0.5 text-[10px]")}>
          {item.label}
        </span>
      )}
    </motion.div>
  );
}

export function Dock({
  items,
  magnification = 1.8,
  distance = 120,
  iconSize = 40,
  gap = 4,
  borderRadius = 16,
  alwaysShowLabels = false,
  springOptions = DEFAULT_SPRING,
  direction = "horizontal",
  className,
}: DockProps) {
  const mousePosition = useMotionValue(Infinity);
  const dockRef = React.useRef<HTMLDivElement>(null);

  const iconRefs = React.useRef<React.RefObject<HTMLDivElement | null>[]>(
    items.map(() => React.createRef<HTMLDivElement>())
  );

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = React.useState(0);
  const [tooltipOffset, setTooltipOffset] = React.useState(0);

  React.useEffect(() => {
    if (hoveredIndex === null) return;

    let raf: number;
    const update = () => {
      const iconEl = iconRefs.current[hoveredIndex]?.current;
      const dockEl = dockRef.current;
      if (iconEl && dockEl) {
        const iconRect = iconEl.getBoundingClientRect();
        const dockRect = dockEl.getBoundingClientRect();
        if (direction === "vertical") {
          setTooltipPos(iconRect.top - dockRect.top + iconRect.height / 2);
          setTooltipOffset(dockRect.right - iconRect.left);
        } else {
          setTooltipPos(iconRect.left - dockRect.left + iconRect.width / 2);
          setTooltipOffset(dockRect.bottom - iconRect.top);
        }
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [hoveredIndex, direction]);

  const handleHover = React.useCallback(
    (ref: React.RefObject<HTMLDivElement | null> | null) => {
      if (ref === null) {
        setHoveredIndex(null);
        return;
      }
      const idx = iconRefs.current.findIndex((r) => r === ref);
      setHoveredIndex(idx >= 0 ? idx : null);
    },
    []
  );

  return (
    <motion.div
      ref={dockRef}
      className={cn(
        "relative flex overflow-visible border border-[#3D2B1F]/10 bg-[#FAF8F3]/80 px-2 py-2 shadow-none hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-200 backdrop-blur-xl",
        direction === "vertical" ? "flex-col items-center" : "flex-row items-end",
        className
      )}
      style={{ gap, borderRadius }}
      onMouseMove={(e) => mousePosition.set(direction === "vertical" ? e.clientY : e.clientX)}
      onMouseLeave={() => mousePosition.set(Infinity)}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <DockIcon
            item={item}
            mousePosition={mousePosition}
            magnification={magnification}
            distance={distance}
            iconSize={iconSize}
            borderRadius={borderRadius}
            alwaysShowLabels={alwaysShowLabels}
            springOptions={springOptions}
            onHover={handleHover}
            direction={direction}
            iconRef={iconRefs.current[i]}
          />
          {item.separator && <DockSeparator direction={direction} />}
        </React.Fragment>
      ))}

      {!alwaysShowLabels && (
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="dock-tooltip"
              layoutId="dock-tooltip"
              className={cn("pointer-events-none absolute flex items-center z-50", direction === "vertical" ? "flex-row" : "flex-col")}
              style={
                direction === "vertical"
                  ? { top: tooltipPos, left: "100%", marginLeft: 12, y: "-50%" }
                  : { left: tooltipPos, bottom: tooltipOffset + 8, x: "-50%" }
              }
              initial={{ opacity: 0, y: direction === "vertical" ? "-50%" : 6, x: direction === "vertical" ? -6 : "-50%", scale: 0.94 }}
              animate={{ opacity: 1, y: direction === "vertical" ? "-50%" : 0, x: direction === "vertical" ? 0 : "-50%", scale: 1 }}
              exit={{ opacity: 0, y: direction === "vertical" ? "-50%" : 6, x: direction === "vertical" ? -6 : "-50%", scale: 0.94 }}
              transition={{ duration: 0.13, ease: "easeOut" }}
            >
              {direction === "vertical" && (
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  className="-rotate-90 -mr-px text-[#FAF8F3]"
                  aria-hidden
                >
                  <path d="M0 0L4 4L8 0" fill="currentColor" />
                </svg>
              )}
              <span className="rounded-md border border-[#3D2B1F]/10 bg-[#FAF8F3] px-2 py-1 text-sm font-medium text-[#3D2B1F] shadow-sm whitespace-nowrap">
                {items[hoveredIndex].label}
              </span>
              {direction === "horizontal" && (
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  className="-mt-px text-[#FAF8F3]"
                  aria-hidden
                >
                  <path d="M0 0L4 4L8 0" fill="currentColor" />
                </svg>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  
  const items: DockItem[] = [
    { icon: <Home className={pathname === "/beranda" ? "text-secondary" : ""} />, label: "Beranda", href: "/beranda" },
    { icon: <Compass className={pathname === "/jelajah" ? "text-secondary" : ""} />, label: "Jelajah", href: "/jelajah" },
    { icon: <Library className={pathname === "/rak buku" ? "text-secondary" : ""} />, label: "Rak Buku", href: "/rak buku" },
    { icon: <MessageCircleQuestion className={pathname === "/q&a" ? "text-secondary" : ""} />, label: "Q&A", href: "/q&a" },
    { icon: <Mail className={pathname === "/kontak" ? "text-secondary" : ""} />, label: "Kontak", href: "/kontak" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <Dock items={items} direction="vertical" className="bg-[#FAF8F3]/90 text-[#3D2B1F]" />
    </div>
  );
}
