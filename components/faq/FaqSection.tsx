"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FaqData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

export default function FaqSection({ data }: { data?: FaqData }) {
  const content = data ?? getMoveNestSection("Faq")?.variants?.MoveNestFaq1;

  const [openIndex, setOpenIndex] = useState<number | null>(1);

  if (!content) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const badge = content.badge || (content as any).subtitle || "FREQUENTLY ASKED QUESTIONS";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Got Questions? We Have";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "The Answers";
  const description = content.description || "";
  const imageSrc =
    typeof content.image === "string"
      ? content.image
      : content.image?.src || "/images/move-next_06.jpg";
  const imageAlt =
    typeof content.image === "string"
      ? "FAQ Help"
      : content.image?.alt || "FAQ Help";
  const questionsList = content.list || (content as any).questions || [];

  return (
    <section className="bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto space-y-12 relative z-10">
<motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff5100] tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#ff5100]"></span>
            <span className="bg-orange-100/80 px-3 py-1 rounded-full text-[11px]">
              {badge}
            </span>
            <span className="w-6 h-[2px] bg-[#ff5100]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {titlePart1} <span className="text-[#ff5100]">{titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -left-3 -top-3 hidden sm:block h-[55%] w-[55%] rounded-[28px] bg-[#ff5100]" />
              <div className="absolute -bottom-3 -left-3 hidden sm:block h-[45%] w-[70%] rounded-[28px] bg-[#ff5100]" />

              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-slate-100 shadow-[0_18px_40px_rgba(11,37,37,0.12)] sm:aspect-[3/4]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
<motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3"
          >
            {questionsList.map((item: any, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#d7ecec] bg-[#f0f9f9] shadow-sm"
                      : "border-slate-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-orange-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full cursor-pointer items-center justify-between space-x-4 p-4 text-left focus:outline-none sm:p-5"
                  >
                    <span className="text-xs font-bold leading-snug text-slate-800 sm:text-sm">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#ff5100] text-white shadow-sm"
                          : "bg-[#ff5100] text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pt-1 text-xs leading-relaxed text-slate-600 sm:px-5 sm:text-sm">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
