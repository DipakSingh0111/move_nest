import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./common/Motion";
import type { HeroBannerData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

export default function HeroSection({ data }: { data?: HeroBannerData }) {
  const content = data ?? getMoveNestSection("HeroBanner")?.variants?.MoveNestHeroBanner1;

  if (!content) return null;

  const imageSrc = typeof content.image === "string" ? content.image : content.image?.src || "/images/Hero.png";
  const imageAlt = typeof content.image === "string" ? "MoveNest Packers & Movers" : content.image?.alt || "MoveNest Packers & Movers";

  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Your Trusted";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Packers & Movers";
  const titlePart2 = content.heading?.end || (content as any).titlePart2 || "for a Better Tomorrow";

  const primaryButtonLabel = content.primaryButton?.label || (content as any).primaryButton || "Get a Quote";
  const primaryButtonHref = content.primaryButton?.href || (content as any).primaryButtonUrl || "/get-a-quote";

  const secondaryButtonLabel = content.secondaryButton?.label || (content as any).secondaryButton || "Our Services";
  const secondaryButtonHref = content.secondaryButton?.href || (content as any).secondaryButtonUrl || "/service";

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[600px] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.90) 35%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-[85rem] mx-auto px-4 md:px-8 w-full py-10">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <Reveal direction="left" className="flex items-center gap-2 mb-4">
            <span className="w-6 h-1.5 bg-[#f59e0b] rounded-full inline-block"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-800 uppercase">
              {content.badge}
            </span>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={0.15}>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2525] tracking-tight leading-[1.15] mb-6">
              {titlePart1} <br />
              <span className="text-[#f59e0b]">{titleHighlight}</span> <br />
              {titlePart2}
            </h1>
          </Reveal>

          {/* Subtitle / Paragraph */}
          <Reveal delay={0.3}>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              {content.description}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.45} className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#d9822b] text-gray-900 font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-300"
            >
              {primaryButtonLabel}
              <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100/60 border border-gray-700 text-gray-900 font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              {secondaryButtonLabel}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
