import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2, PhoneCall, Play } from "lucide-react";
import type { ServiceDetailsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function ServiceDetails({
  data,
  currentSlug,
  title,
}: {
  data?: ServiceDetailsData;
  currentSlug?: string;
  title?: string;
}) {
  const serviceDetails = data ?? getMoveNestSection("Services")?.variants?.MoveNestServices1?.serviceDetails;

  if (!serviceDetails) return null;

  const effectiveSlug = currentSlug || serviceDetails.defaultSlug || "home-shifting";
  const effectiveTitle = title || serviceDetails.defaultTitle || "Home Shifting";
  const fill = (text: string) => text.replaceAll("{title}", effectiveTitle);

  const helpImageSrc = typeof serviceDetails.help?.image === "string" ? serviceDetails.help.image : serviceDetails.help?.image?.src || "/images/move-next_18.jpg";
  const helpImageAlt = typeof serviceDetails.help?.image === "string" ? "Need help" : serviceDetails.help?.image?.alt || "Need help";

  const mainImageSrc = typeof serviceDetails.mainImage === "string" ? serviceDetails.mainImage : serviceDetails.mainImage?.src || "/images/move-next_08.jpg";
  const mainImageAlt = typeof serviceDetails.mainImage === "string" ? effectiveTitle : serviceDetails.mainImage?.alt || effectiveTitle;

  const videoImageSrc = typeof serviceDetails.videoImage === "string" ? serviceDetails.videoImage : serviceDetails.videoImage?.src || "/images/move-next_12.jpg";
  const videoImageAlt = typeof serviceDetails.videoImage === "string" ? "Service Video" : serviceDetails.videoImage?.alt || "Service Video";

  return (
    <section className="bg-white py-10 sm:py-14 font-sans">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-10">
            {/* Services List Box */}
            <Reveal direction="left" className="bg-[#f8f9fa] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#002b36] mb-6">{serviceDetails.sidebarTitle}</h3>
              <div className="space-y-3">
                {serviceDetails.sidebarServices?.map((service, idx) => {
                  const isActive = service.slug === effectiveSlug;
                  return (
                    <Link
                      key={idx}
                      href={`/service-details/${service.slug}`}
                      className={`w-full flex items-center justify-between px-6 py-4 rounded-xl border bg-white transition-all duration-300 ${
                        isActive
                          ? "border-transparent shadow-md text-[#ff6333] font-semibold"
                          : "border-gray-100 text-gray-500 hover:border-gray-200 hover:shadow-sm"
                      }`}
                    >
                      <span>{service.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* Help CTA Box */}
            <Reveal direction="left" delay={0.15} className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-[#ff6333] to-[#e64f22] text-white text-center">
              <div className="relative h-48 w-full bg-slate-200">
                <Image
                  src={helpImageSrc}
                  alt={helpImageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#002b36]/20"></div>
                {/* Curved orange overlay at bottom of image */}
                <svg className="absolute -bottom-1 left-0 w-full h-12 text-[#ff6333]" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor">
                  <path d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,170.7C672,171,768,149,864,133.3C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
              <div className="p-8 pt-4 space-y-6">
                <h4 className="text-2xl font-bold leading-snug">
                  {serviceDetails.help?.title}
                </h4>
                
                <div className="bg-white rounded-full p-2 pr-6 flex items-center justify-between text-left">
                  <div className="w-12 h-12 rounded-full bg-[#002b36] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-0.5">{serviceDetails.help?.callText}</p>
                    <p className="text-[#ff6333] font-bold text-lg leading-none">{serviceDetails.help?.phone}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 space-y-8">
            <Reveal direction="zoom" className="relative w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src={mainImageSrc}
                alt={mainImageAlt}
                fill
                className="object-cover"
              />
            </Reveal>

            <Reveal className="space-y-5">
              <h2 className="text-3xl font-bold text-[#002b36]">
                {effectiveTitle}
              </h2>
              {serviceDetails.introParagraphs?.map((text, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">
                  {fill(text)}
                </p>
              ))}
            </Reveal>

            <Reveal className="space-y-5 pt-4">
              <h3 className="text-2xl font-bold text-[#002b36]">
                {serviceDetails.valuesTitle}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {serviceDetails.valuesDescription}
              </p>
              
              <ul className="space-y-4 pt-2">
                {serviceDetails.values?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6333] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {serviceDetails.galleryImages?.map((img, i) => (
                <StaggerItem key={i} direction="zoom" className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="space-y-5 pt-6">
              {serviceDetails.middleParagraphs?.map((text, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">
                  {fill(text)}
                </p>
              ))}
            </Reveal>

            <Reveal direction="zoom" className="relative w-full h-[400px] rounded-2xl overflow-hidden group cursor-pointer mt-8">
              <Image src={videoImageSrc} alt={videoImageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 bg-[#ff6333] rounded-full flex items-center justify-center shadow-lg shadow-[#ff6333]/40">
                    <Play className="w-6 h-6 text-white ml-1.5" />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="space-y-5 pt-6">
              {serviceDetails.closingParagraphs?.map((text, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">
                  {fill(text)}
                </p>
              ))}
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
