"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiArrowRight } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import type { BlogNewsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

export default function LatestBlogSection({
  data,
  limit = 3,
  paginate = false,
  itemsPerPage = 6,
}: {
  data?: BlogNewsData;
  limit?: number;
  paginate?: boolean;
  itemsPerPage?: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const content = data ?? getMoveNestSection("BlogNews")?.variants?.MoveNestBlogNews1;

  if (!content) return null;

  const badge = content.badge || "OUR LATEST BLOG";
  const titlePart1 = content.heading?.main || "Latest News &";
  const titleHighlight = content.heading?.highlight || "Helpful Tips";
  const description = content.description || "";
  const authorLabel = content.authorLabel || "Admin";
  const readMore = content.readMore || "Read More";
  const prevLabel = content.pagination?.previous || "Previous";
  const nextLabel = content.pagination?.next || "Next";
  const perPage = content.pagination?.itemsPerPage || itemsPerPage;

  const totalPages = Math.max(1, Math.ceil(blogs.length / perPage));
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const displayedBlogs = paginate
    ? blogs.slice(indexOfFirstItem, indexOfLastItem)
    : blogs.slice(0, limit);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 pb-10 sm:pt-8 sm:pb-14">
      <div className="mx-auto max-w-[85rem] px-4 md:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-[#f57c00]" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-800 sm:text-sm">
              {badge}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#0B2525] sm:text-4xl lg:text-5xl">
            {titlePart1} <span className="text-[#f57c00]">{titleHighlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{description}</p>
        </Reveal>

        <Stagger
          key={paginate ? currentPage : "home"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedBlogs.map((blog, index) => (
            <StaggerItem
              key={blog.slug || index}
              hoverLift
              className="group flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              <div>
                <div className="relative mb-5 h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-3.5 py-2 text-center text-gray-900 shadow-md backdrop-blur-sm">
                    <span className="mb-0.5 block text-xl font-extrabold leading-none text-[#0B2525]">
                      {blog.date}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {blog.month}
                    </span>
                  </div>
                </div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#f57c00]">
                  <FiUser className="h-3.5 w-3.5" />
                  <span>{authorLabel}</span>
                </div>
                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-[#0B2525] transition-colors group-hover:text-[#f57c00]">
                  {blog.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {blog.description}
                </p>
              </div>
              <div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group/btn inline-flex items-center gap-2 text-sm font-bold text-[#0B2525] transition-colors hover:text-[#f57c00]"
                >
                  <span>{readMore}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f57c00] text-white transition-transform group-hover/btn:translate-x-1">
                    <FiArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {paginate && totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-12">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label={prevLabel}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                currentPage === 1
                  ? "cursor-not-allowed border-slate-200 bg-white text-slate-300"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#f57c00]"
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
                      ? "bg-[#f57c00] text-white shadow-md shadow-orange-500/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#f57c00]"
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
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-[#f57c00]"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
