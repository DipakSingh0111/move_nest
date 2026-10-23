"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroBannerData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

const ease = [0.22, 1, 0.36, 1] as const;

function HeroFade({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection({ data }: { data?: HeroBannerData }) {
  const content = data ?? getMoveNestSection("HeroBanner")?.variants?.MoveNestHeroBanner1;

  if (!content) return null;

  const imageSrc = "/images/Hero.png";
  const imageAlt =
    typeof content.image === "string"
      ? "MoveNest Packers & Movers"
      : content.image?.alt || "MoveNest Packers & Movers";

  const legacy = content as HeroBannerData & {
    titlePart1?: string;
    titleHighlight?: string;
    titlePart2?: string;
    primaryButton?: string;
    primaryButtonUrl?: string;
    secondaryButton?: string;
    secondaryButtonUrl?: string;
  };

  const titlePart1 = content.heading?.main || legacy.titlePart1 || "Your Trusted";
  const titleHighlight = content.heading?.highlight || legacy.titleHighlight || "Packers & Movers";
  const titlePart2 = content.heading?.end || legacy.titlePart2 || "for a Better Tomorrow";

  const primaryButtonLabel = content.primaryButton?.label || legacy.primaryButton || "Get a Quote";
  const primaryButtonHref = content.primaryButton?.href || legacy.primaryButtonUrl || "/get-a-quote";

  const secondaryButtonLabel = content.secondaryButton?.label || legacy.secondaryButton || "Our Services";
  const secondaryButtonHref = content.secondaryButton?.href || legacy.secondaryButtonUrl || "/service";

  return (
    <section className="hero-section">
      <div className="hero-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={100}
          sizes="100vw"
          unoptimized
          className="select-none object-cover object-[70%_center] lg:object-[75%_center]"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <HeroFade className="mb-3 flex items-center gap-2 sm:mb-4">
            <span className="inline-block h-1 w-5 shrink-0 rounded-full bg-[#f59e0b] sm:h-1.5 sm:w-6" />
            <span className="hero-badge font-bold uppercase tracking-widest text-gray-800">
              {content.badge}
            </span>
          </HeroFade>

          <HeroFade delay={0.1}>
            <h1 className="hero-title mb-3 font-extrabold tracking-tight text-[#0B2525] sm:mb-4">
              {titlePart1}
              <br />
              <span className="text-[#f59e0b]">{titleHighlight}</span>
              <br />
              {titlePart2}
            </h1>
          </HeroFade>

          <HeroFade delay={0.18}>
            <p className="hero-desc mb-5 max-w-xl font-medium leading-relaxed text-gray-700 sm:mb-6 md:mb-7">
              {content.description}
            </p>
          </HeroFade>

          <HeroFade delay={0.26} className="hero-actions">
            <Link
              href={primaryButtonHref}
              className="hero-btn inline-flex items-center gap-2 rounded-full bg-[#f59e0b] font-bold text-gray-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9822b] sm:gap-2.5"
            >
              {primaryButtonLabel}
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm sm:h-6 sm:w-6">
                <svg
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href={secondaryButtonHref}
              className="hero-btn inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-transparent font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100/60 sm:gap-2"
            >
              {secondaryButtonLabel}
              <svg
                className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </HeroFade>
        </div>
      </div>
    </section>
  );
}
