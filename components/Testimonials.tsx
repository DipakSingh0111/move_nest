"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "../data/move-nest.json";
import { Reveal } from "./common/Motion";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TestimonialsSection() {
  const { testimonialsBlock } = data;
  const reviews = testimonialsBlock.reviews;
  const total = reviews.length;

  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number, dir?: number) => {
      setSlide(([current]) => {
        const target = (next + total) % total;
        return [target, dir ?? (target > current ? 1 : -1)];
      });
    },
    [total]
  );

  const next = useCallback(() => setSlide(([i]) => [(i + 1) % total, 1]), [total]);
  const prev = useCallback(() => setSlide(([i]) => [(i - 1 + total) % total, -1]), [total]);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(next, testimonialsBlock.autoplayInterval);
    return () => clearInterval(id);
  }, [paused, next, total, testimonialsBlock.autoplayInterval]);

  const active = reviews[index];

  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-2xl">
          {/* LEFT – fixed image */}
          <Reveal direction="left" className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[400px]">
            <Image
              src={testimonialsBlock.image}
              alt={testimonialsBlock.imageAlt}
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 right-0 bg-[#ff5e14] text-white p-6 md:p-8 rounded-tl-3xl z-20 w-[60%] max-w-[280px]">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">
                {testimonialsBlock.yearsExperience.replace("+", "")}
                <span className="text-3xl">+</span>
              </h3>
              <p className="text-white/90 text-base md:text-lg border-t border-white/30 pt-2 mt-2">
                {testimonialsBlock.experienceText}
              </p>
            </div>
          </Reveal>

          {/* RIGHT – review slider */}
          <Reveal
            direction="right"
            className="w-full lg:w-1/2 bg-[#021d26] text-white p-8 lg:p-12 relative flex flex-col justify-center"
          >
            <FaQuoteRight className="absolute top-16 right-8 text-[#132c35] w-20 h-20 pointer-events-none" />

            <div
              className="relative z-10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[#ff5e14] inline-block"></span>
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  {testimonialsBlock.subtitle}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold leading-[1.2] mb-6">
                {testimonialsBlock.titlePart1} <br />
                <span className="text-[#ff5e14]">{testimonialsBlock.titleHighlight}</span>{" "}
                {testimonialsBlock.titlePart2}
              </h2>

              {/* Sliding content */}
              <div className="relative overflow-hidden min-h-[260px] sm:min-h-[230px]">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) next();
                      else if (info.offset.x > 60) prev();
                    }}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-center gap-1 mb-4 text-[#ffb400]">
                      {Array.from({ length: active.rating }).map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 font-light select-none">
                      {active.review}
                    </p>
                    <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                    <div className="flex items-center gap-4">
                      <div className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7a3d] to-[#ff5e14] text-sm font-bold text-white shadow-[0_6px_18px_rgba(255,94,20,0.35)]">
                        {getInitials(active.authorName)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-base text-white">{active.authorName}</h4>
                        <p className="text-xs text-gray-400">{active.authorLocation}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {reviews.map((r, i) => (
                    <button
                      key={r.authorName}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to review ${i + 1}`}
                      aria-current={i === index}
                      className={`h-2.5 transition-all duration-300 ${
                        i === index ? "w-7 bg-[#ff5e14]" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label={testimonialsBlock.prevLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#ff5e14] hover:bg-[#ff5e14]"
                  >
                    <FaChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label={testimonialsBlock.nextLabel}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#ff5e14] hover:bg-[#ff5e14]"
                  >
                    <FaChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
