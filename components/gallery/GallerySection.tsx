"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

export default function GallerySection({
  data,
  itemsPerPage = 6,
}: {
  data?: GalleryData;
  itemsPerPage?: number;
}) {
  const content = data ?? getMoveNestSection("Gallery")?.variants?.MoveNestGallery1;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const galleryImages = useMemo(
    () => content?.list || (content as any)?.images || [],
    [content],
  );

  const perPage = content?.itemsPerPage || itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(galleryImages.length / perPage));
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentImages = galleryImages.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  }, [galleryImages.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  if (!content) return null;

  const badge = content.badge || (content as any).subtitle || "OUR GALLERY";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Explore Our Moving";
  const titleHighlight =
    content.heading?.highlight || (content as any).titleHighlight || "Memories & Moments";
  const description = content.description || "";

  const closeLabel = content.labels?.close || (content as any).closeLabel || "Close preview";
  const previousLabel = content.labels?.previous || (content as any).previousLabel || "Previous image";
  const nextLabel = content.labels?.next || (content as any).nextLabel || "Next image";
  const counterSeparator =
    content.labels?.counterSeparator || (content as any).counterSeparator || "/";

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white px-4 py-10 font-sans sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-[85rem] space-y-10">
        <Reveal className="space-y-3 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#ff5100]">
            <span className="h-[2px] w-6 bg-[#ff5100]" />
            <span>{badge}</span>
            <span className="h-[2px] w-6 bg-[#ff5100]" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {titlePart1} <span className="text-[#ff5100]">{titleHighlight}</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
            {description}
          </p>
        </Reveal>

        <Stagger
          key={currentPage}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          stagger={0.08}
        >
          {currentImages.map((img: any, index: number) => {
            const globalIndex = indexOfFirstItem + index;
            return (
              <StaggerItem key={img.id || globalIndex} direction="zoom">
                <div
                  onClick={() => setSelectedIndex(globalIndex)}
                  className="group relative h-[210px] cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-xl sm:h-[220px]"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="mb-2 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/90 text-[#ff5100] shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                      <Maximize2 className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-bold tracking-wide text-white">{img.title}</p>
                    <span className="text-[10px] font-medium text-orange-200">{img.category}</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-2">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={previousLabel}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                currentPage === 1
                  ? "cursor-not-allowed border-slate-200 bg-white text-slate-300"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#ff5100]"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-9 w-9 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#ff5100] text-white shadow-md shadow-orange-500/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#ff5100]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label={nextLabel}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                currentPage === totalPages
                  ? "cursor-not-allowed border-slate-200 bg-white text-slate-300"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#ff5100]"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && galleryImages[selectedIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-5 top-5 z-50 rounded-full bg-white/10 p-2.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              aria-label={closeLabel}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:left-8"
              aria-label={previousLabel}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="relative flex h-full max-h-[85vh] w-full max-w-5xl flex-col items-center justify-center">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[65vh] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[75vh]"
              >
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
              <div className="mt-4 space-y-1 text-center text-white">
                <h3 className="text-lg font-bold">{galleryImages[selectedIndex].title}</h3>
                <p className="text-xs font-medium text-orange-400">
                  {galleryImages[selectedIndex].category} ({selectedIndex + 1} {counterSeparator}{" "}
                  {galleryImages.length})
                </p>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:right-8"
              aria-label={nextLabel}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
