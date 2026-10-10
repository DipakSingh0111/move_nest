import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import data from "../data/move-nest.json";
import { Reveal } from "./common/Motion";

export default function HeroSection() {
  const { hero } = data;
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[600px] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
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
          {/* Badge: SAFE . SECURE . STRESS-FREE */}
          <Reveal direction="left" className="flex items-center gap-2 mb-4">
            <span className="w-6 h-1.5 bg-[#f59e0b] rounded-full inline-block"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-800 uppercase">
              {hero.badge}
            </span>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={0.15}>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2525] tracking-tight leading-[1.15] mb-6">
              {hero.titlePart1} <br />
              <span className="text-[#f59e0b]">{hero.titleHighlight}</span> <br />
              {hero.titlePart2}
            </h1>
          </Reveal>

          {/* Subtitle / Paragraph */}
          <Reveal delay={0.3}>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              {hero.description}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.45} className="flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href={hero.primaryButtonUrl}
              className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#d9822b] text-gray-900 font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-300"
            >
              {hero.primaryButton}
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
            </a>

            {/* Secondary Button */}
            <a
              href={hero.secondaryButtonUrl}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100/60 border border-gray-700 text-gray-900 font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              {hero.secondaryButton}
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
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
