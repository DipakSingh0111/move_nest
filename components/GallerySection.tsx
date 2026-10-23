"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function GallerySection({ data }: { data?: GalleryData }) {
  const content = data ?? getMoveNestSection("Gallery")?.variants?.MoveNestGallery1;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!content) return null;

  const galleryImages = content.list || (content as any).images || [];
  const badge = content.badge || (content as any).subtitle || "OUR GALLERY";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Explore Our Moving";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Memories & Moments";
  const description = content.description || "";

  const closeLabel = content.labels?.close || (content as any).closeLabel || "Close preview";
  const previousLabel = content.labels?.previous || (content as any).previousLabel || "Previous image";
  const nextLabel = content.labels?.next || (content as any).nextLabel || "Next image";
  const counterSeparator = content.labels?.counterSeparator || (content as any).counterSeparator || "/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? galleryImages.length - 1 : prev! - 1,
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === galleryImages.length - 1 ? 0 : prev! + 1,
    );
  };

  return (
    <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[85rem] mx-auto space-y-10">
<Reveal className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff5100] tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#ff5100]"></span>
            <span>{badge}</span>
            <span className="w-6 h-[2px] bg-[#ff5100]"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {titlePart1} <span className="text-[#ff5100]">{titleHighlight}</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>
<Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" stagger={0.08}>
          {galleryImages.map((img: any, index: number) => (
            <StaggerItem key={img.id || index} direction="zoom">
              <div
                onClick={() => setSelectedIndex(index)}
                className="group relative h-[210px] sm:h-[220px] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#ff5100] flex items-center justify-center mb-2 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <p className="text-white text-xs font-bold tracking-wide">
                    {img.title}
                  </p>
                  <span className="text-orange-200 text-[10px] font-medium">
                    {img.category}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
<AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
<button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
              aria-label={closeLabel}
            >
              <X className="w-6 h-6" />
            </button>
<button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label={previousLabel}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
<div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
<div className="mt-4 text-center text-white space-y-1">
                <h3 className="text-lg font-bold">
                  {galleryImages[selectedIndex].title}
                </h3>
                <p className="text-xs text-orange-400 font-medium">
                  {galleryImages[selectedIndex].category} ({selectedIndex + 1} {counterSeparator}{" "}
                  {galleryImages.length})
                </p>
              </div>
            </div>
<button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label={nextLabel}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
