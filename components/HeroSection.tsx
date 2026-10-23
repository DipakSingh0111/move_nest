import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./common/Motion";
import type { HeroBannerData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

export default function HeroSection({ data }: { data?: HeroBannerData }) {
  const content = data ?? getMoveNestSection("HeroBanner")?.variants?.MoveNestHeroBanner1;

  if (!content) return null;

  const imageSrc =
    typeof content.image === "string" ? content.image : content.image?.src || "/images/Hero.png";
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
    <section className="hero-section relative w-full flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] lg:object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 42%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.15) 88%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-[85rem] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-[calc(3.5rem*var(--hero-scale))]">
        <div className="hero-content max-w-xl lg:max-w-2xl">
          <Reveal direction="left" className="mb-2.5 flex items-center gap-2 sm:mb-3.5">
            <span className="inline-block h-1 w-5 rounded-full bg-[#f59e0b] sm:h-1.5 sm:w-6" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-800 sm:text-xs md:text-sm">
              {content.badge}
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="mb-3 text-2xl font-extrabold leading-[1.12] tracking-tight text-[#0B2525] sm:mb-4 sm:text-3xl sm:leading-[1.14] md:text-4xl lg:text-[46px] xl:text-[52px]">
              {titlePart1} <br />
              <span className="text-[#f59e0b]">{titleHighlight}</span> <br />
              {titlePart2}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mb-5 max-w-xl text-xs font-medium leading-relaxed text-gray-700 sm:mb-6 sm:text-sm md:mb-7 md:text-base lg:text-[17px]">
              {content.description}
            </p>
          </Reveal>

          <Reveal delay={0.45} className="flex flex-wrap items-center gap-2.5 pb-2 sm:gap-3.5">
            <Link
              href={primaryButtonHref}
              className="inline-flex transform items-center gap-2 rounded-full bg-[#f59e0b] px-4 py-2.5 text-xs font-bold text-gray-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9822b] active:translate-y-0 sm:gap-2.5 sm:px-6 sm:py-3 sm:text-sm md:text-base"
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
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-transparent px-4 py-2.5 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100/60 sm:gap-2 sm:px-6 sm:py-3 sm:text-sm md:text-base"
            >
              {secondaryButtonLabel}
              <svg
                className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
