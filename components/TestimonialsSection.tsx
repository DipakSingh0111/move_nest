"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { TestimonialsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function TestimonialsSection({ data }: { data?: TestimonialsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const content = data ?? getMoveNestSection("Testimonials")?.variants?.MoveNestTestimonials1;

  if (!content) return null;

  const page = content.page || {
    badge: "TESTIMONIALS",
    heading: { main: "What Our Clients Say About", highlight: "Our Services" },
    description: "Read authentic reviews and real moving stories from our happy customers across various locations.",
    itemsPerPage: 6,
    labels: { previous: "Previous", next: "Next" },
    list: [],
  };

  const allTestimonials = page.list || [];
  const itemsPerPage = page.itemsPerPage || 6;
  const totalPages = Math.max(1, Math.ceil(allTestimonials.length / itemsPerPage));

  const badge = page.badge || (page as any).subtitle || "TESTIMONIALS";
  const titlePart1 = page.heading?.main || (page as any).titlePart1 || "What Our Clients Say About";
  const titleHighlight = page.heading?.highlight || (page as any).titleHighlight || "Our Services";
  const description = page.description || "";
  const prevLabel = page.labels?.previous || "Previous";
  const nextLabel = page.labels?.next || "Next";

  // Get current page slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = allTestimonials.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto space-y-10 relative z-10">
        {/* Header Section */}
        <Reveal className="text-center space-y-3">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center bg-orange-100/80 text-[#ff5100] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            <span>{badge}</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {titlePart1}{" "}
            <span className="text-[#ff5100]">{titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>

        {/* Cards Grid */}
        <Stagger
          key={currentPage}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {currentTestimonials.map((item, index) => (
            <StaggerItem
              key={index}
              hoverLift
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(255,81,0,0.08)] hover:border-orange-200 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & Ratings */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#ff5100] rotate-180 fill-[#ff5100]/10" />
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ff5100] text-[#ff5100]"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Paragraph */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.review}
                </p>
              </div>

              {/* Bottom Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center space-x-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#ff5100]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Service Tag */}
                <span className="bg-orange-50 text-[#ff5100] border border-orange-100 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide shrink-0">
                  {item.tag}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Working Pagination Bar */}
        <div className="flex items-center justify-center space-x-2 pt-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={prevLabel}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
              currentPage === 1
                ? "border-slate-200 text-slate-300 cursor-not-allowed bg-white"
                : "border-slate-200 text-slate-600 hover:bg-orange-50 hover:text-[#ff5100] hover:border-orange-300 bg-white"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-9 h-9 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#ff5100] text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-orange-50 hover:text-[#ff5100] hover:border-orange-300"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={nextLabel}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
              currentPage === totalPages
                ? "border-slate-200 text-slate-300 cursor-not-allowed bg-white"
                : "border-slate-200 text-slate-600 hover:bg-orange-50 hover:text-[#ff5100] hover:border-orange-300 bg-white"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
