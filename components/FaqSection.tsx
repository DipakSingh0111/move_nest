"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
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
  const imageSrc = typeof content.image === "string" ? content.image : content.image?.src || "/images/move-next_10.jpg";
  const imageAlt = typeof content.image === "string" ? "FAQ Help" : content.image?.alt || "FAQ Help";
  const helpTitle = content.help?.title || (content as any).helpTitle || "Need Immediate Help?";
  const helpDescription = content.help?.description || (content as any).helpDescription || "Our relocation specialists are available 24/7.";
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
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="absolute -top-4 -left-4 w-44 h-44 bg-[#ff5100] rounded-3xl -z-0 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#0c2340] rounded-3xl -z-0 hidden sm:block" />

            <div className="relative w-full max-w-md h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 z-10">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-4 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-md">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  {helpTitle}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                  {helpDescription}
                </p>
              </div>
            </motion.div>
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
                  className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-emerald-50/40 border-emerald-100 shadow-sm"
                      : "bg-white border-slate-100 hover:border-orange-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#ff5100] text-white shadow-sm"
                          : "bg-orange-50 text-slate-600 hover:bg-orange-100"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </motion.div>
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
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-emerald-100/60 pt-3">
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
