import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import data from "../data/move-nest.json";
import { Reveal } from "./common/Motion";

export default function TestimonialsSection() {
  const { testimonialsBlock } = data;
  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-2xl">
          <Reveal direction="left" className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[400px]">
            <Image
              src={testimonialsBlock.image}
              alt={testimonialsBlock.imageAlt}
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 right-0 bg-[#ff5e14] text-white p-6 md:p-8 rounded-tl-3xl z-20 w-[60%] max-w-[280px]">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">
                {testimonialsBlock.yearsExperience.replace("+", "")}<span className="text-3xl">+</span>
              </h3>
              <p className="text-white/90 text-base md:text-lg border-t border-white/30 pt-2 mt-2">
                {testimonialsBlock.experienceText}
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="w-full lg:w-1/2 bg-[#021d26] text-white p-8 lg:p-12 relative flex flex-col justify-center">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/world-map-bg.png')] bg-cover bg-center"></div>
            <FaQuoteRight className="absolute top-16 right-8 text-[#132c35] w-20 h-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-[#ff5e14] inline-block"></span>
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  {testimonialsBlock.subtitle}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-semibold leading-[1.2] mb-6 whitespace-nowrap">
                {testimonialsBlock.titlePart1} <br />
                <span className="text-[#ff5e14]">{testimonialsBlock.titleHighlight}</span> {testimonialsBlock.titlePart2}
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-[#ffb400]">
                {Array.from({ length: testimonialsBlock.rating }).map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 font-light">
                {testimonialsBlock.review}
              </p>
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              <div className="flex items-center justify-between">
                {/* Author Profile */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={testimonialsBlock.authorImage}
                      alt={testimonialsBlock.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white">
                      {testimonialsBlock.authorName}
                    </h4>
                    <p className="text-xs text-gray-400">{testimonialsBlock.authorLocation}</p>
                  </div>
                </div>

                {/* Pagination Dots Indicator */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#ff5e14] inline-block cursor-pointer"></span>
                  <span className="w-2.5 h-2.5 bg-white/20 inline-block hover:bg-white/40 transition-colors cursor-pointer"></span>
                  <span className="w-2.5 h-2.5 bg-white/20 inline-block hover:bg-white/40 transition-colors cursor-pointer"></span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
