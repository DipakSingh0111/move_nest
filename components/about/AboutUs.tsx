import Image from "next/image";
import Link from "next/link";
import {
  FiUsers,
  FiBox,
  FiCheckCircle,
  FiMapPin,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";
import type { AboutUsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Float, Reveal, Stagger, StaggerItem } from "../common/Motion";

type AboutUsProps = {
  data?: AboutUsData;
  showButton?: boolean;
};

export default function AboutUsSection({ data, showButton = true }: AboutUsProps) {
  const content = data ?? getMoveNestSection("AboutUs")?.variants?.MoveNestAboutUs1;

  if (!content) return null;

  const mainImageSrc = content.images?.main?.src || (content as any).mainImage || "/images/move-next_04.jpg";
  const mainImageAlt = content.images?.main?.alt || (content as any).mainImageAlt || "MoveNest Packers & Movers Team";
  const previewImageSrc = content.images?.preview?.src || (content as any).previewImage || "/images/move-next_13.jpg";
  const previewImageAlt = content.images?.preview?.alt || (content as any).previewImageAlt || "Moving process preview";

  const expValue = content.experience?.value || (content as any).experienceYears || "29+";
  const expLabel = content.experience?.label || (content as any).experienceText || "Years Of Experience";

  const badge = content.badge || (content as any).subtitle || "ABOUT US";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Your Trusted Packers & Movers";
  const titleConnector = content.heading?.middle || (content as any).titleConnector || "for a";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Better Tomorrow";

  const description = content.description || (content as any).description1 || "";
  const features = content.list || (content as any).features || [];

  const buttonHref = content.cta?.href || (content as any).buttonUrl || "/contactUs";
  const buttonLabel = content.cta?.label || (content as any).button || "Contact Us";

  return (
    <section className="relative w-full py-10 sm:py-14 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 items-center">
<Reveal direction="left" className="relative w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none pt-2 sm:pt-4 pl-4 sm:pl-8">
<div className="absolute -bottom-8 -left-2 grid grid-cols-5 gap-2.5 opacity-60 pointer-events-none z-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#f97316]"
                ></div>
              ))}
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm bg-white p-2 border border-gray-100 z-10 w-[90%]">
              <div className="relative w-full h-[300px] xs:h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={mainImageSrc}
                  alt={mainImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
            <Reveal direction="right" delay={0.4} className="absolute top-8 sm:top-12 right-0 sm:-right-4 z-20">
              <div className="relative bg-[#f97316] text-white pl-3 pr-5 py-2 sm:pl-5 sm:pr-8 sm:py-3.5 rounded-l-xl rounded-tr-xl shadow-lg flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full text-white"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className="font-semibold text-[12px] xs:text-[13px] sm:text-[15px] md:text-[17px] tracking-wide whitespace-nowrap">
                  {expValue} {expLabel}
                </span>
<div className="absolute -bottom-3 right-0 w-0 h-0 border-t-[12px] border-t-[#c2410c] border-r-[12px] border-r-transparent"></div>
              </div>
            </Reveal>
            {/* Floating video preview – hidden on small screens to prevent overflow */}
            <Float className="hidden md:block absolute -bottom-12 right-0 sm:-right-8 z-30">
              <Reveal direction="zoom" delay={0.6} className="bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 w-64 sm:w-80">
                <div className="relative rounded-xl overflow-hidden h-36 sm:h-48 bg-gray-100">
                  <Image
                    src={previewImageSrc}
                    alt={previewImageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#f97316] flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                      <FiPlay className="ml-1 h-6 w-6 fill-current" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </Float>
          </Reveal>

        <Reveal direction="right" className="pt-4 sm:pt-10 lg:pt-0 lg:pl-6">
<div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#f97316] inline-block"></span>
              <span className="text-[13px] font-bold tracking-widest text-[#0c4040] uppercase">
                {badge}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[42px] font-extrabold text-[#0c4040] tracking-tight leading-[1.2] mb-6">
              <span className="inline-block">
                {titlePart1}
              </span>{" "}
              <br />
              {titleConnector} <span className="text-[#f97316]">{titleHighlight}</span>
            </h2>
<p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-4">
              {description}
            </p>
<Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {features.map((feature: any, idx: number) => (
                <StaggerItem key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fff7ed] text-[#f97316] flex items-center justify-center shrink-0">
                    {feature.icon === "FiUsers" || feature.icon === "team" ? (
                      <FiUsers className="w-6 h-6" />
                    ) : feature.icon === "FiBox" || feature.icon === "equipment" ? (
                      <FiBox className="w-6 h-6" />
                    ) : feature.icon === "FiCheckCircle" ? (
                      <FiCheckCircle className="w-6 h-6" />
                    ) : (
                      <FiMapPin className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0c4040] text-[17px] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed pr-2">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
{showButton && (
              <div>
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-[15px] pl-7 pr-2 py-2 rounded-full shadow-md transition-all duration-300"
                >
                  {buttonLabel}
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#f97316]">
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
