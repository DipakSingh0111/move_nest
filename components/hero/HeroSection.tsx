"use client";

import Image from "next/image";
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
  };

  const titlePart1 = content.heading?.main || legacy.titlePart1 || "Your Trusted";
  const titleHighlight = content.heading?.highlight || legacy.titleHighlight || "Packers & Movers";
  const titlePart2 = content.heading?.end || legacy.titlePart2 || "for a Better Tomorrow";

  return (
    <section className="relative isolate flex w-full min-h-[clamp(22rem,55vw,30rem)] items-center overflow-hidden bg-white sm:min-h-[clamp(22rem,48vh,30rem)] lg:h-[calc(100dvh-7.5rem)] lg:min-h-[calc(100dvh-7.5rem)]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={100}
          sizes="100vw"
          unoptimized
          className="select-none object-cover object-[70%_center] sm:object-[65%_center] md:object-[72%_center] lg:object-[82%_center] xl:object-[88%_center] min-[1440px]:object-[92%_center]"
        />
      </div>

      {/* Mobile overlay - stronger white wash so text is always legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_55%,rgba(255,255,255,0.85)_70%,rgba(255,255,255,0.3)_85%,transparent_100%)] sm:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_18%,rgba(255,255,255,0.92)_30%,rgba(255,255,255,0.55)_42%,rgba(255,255,255,0.12)_55%,transparent_68%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_20%,rgba(255,255,255,0.9)_32%,rgba(255,255,255,0.45)_44%,rgba(255,255,255,0.08)_56%,transparent_66%)]"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[85rem] px-4 sm:px-[clamp(1rem,2.5vw,2rem)] py-[clamp(1.75rem,3.5vw,3rem)]">
        <div className="w-full max-w-[90%] xs:max-w-[80%] sm:max-w-[34rem] text-[#0b2525] lg:max-w-[36rem] xl:max-w-[38rem]">
          <HeroFade className="mb-3 flex items-center gap-2 sm:mb-4">
            <span className="inline-block h-1 w-5 shrink-0 rounded-full bg-[#f59e0b] sm:h-1.5 sm:w-6" />
            <span className="text-[clamp(0.6875rem,0.75rem+0.25vw,0.875rem)] font-bold uppercase tracking-widest text-gray-800">
              {content.badge}
            </span>
          </HeroFade>

          <HeroFade delay={0.1}>
            <h1 className="mb-3 break-words text-[clamp(1.5rem,6vw,3rem)] font-extrabold leading-[1.14] tracking-tight text-[#0B2525] sm:mb-4 sm:text-[clamp(1.625rem,1.1rem+2.2vw,3rem)]">
              {titlePart1}
              <br />
              <span className="text-[#f59e0b]">{titleHighlight}</span>
              <br />
              {titlePart2}
            </h1>
          </HeroFade>
        </div>
      </div>
    </section>
  );
}
