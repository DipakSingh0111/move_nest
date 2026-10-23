"use client";

import React from "react";
import Image from "next/image";
import { Truck, Target, Eye, Users } from "lucide-react";
import type { OurApproachData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Float, Reveal, Stagger, StaggerItem } from "../common/Motion";

export default function OurApproach({ data }: { data?: OurApproachData }) {
  const content = data ?? getMoveNestSection("OurApproach")?.variants?.MoveNestOurApproach1;

  if (!content) return null;

  const images = content.images || [];
  const img1 = images[0] || { src: "/images/move-next_18.jpg", alt: "Packing boxes" };
  const img2 = images[1] || { src: "/images/move-next_11.jpg", alt: "Delivery driver and moving truck" };

  const statsSubtitle = content.stats?.subtitle || (content as any).statsSubtitle || "SATISFIED CLIENTS";
  const statsValue = content.stats?.value || (content as any).statsValue || "25k+";
  const statsLabel = content.stats?.label || (content as any).statsLabel || "Reliable & Fast Moving";

  const badge = content.badge || (content as any).subtitle || "OUR APPROACH";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Committed To";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Quality Moving Services";
  const description = content.description || "";
  const cardsList = content.list || (content as any).cards || [];

  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-0 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        <Reveal direction="left" className="lg:col-span-6 relative pb-10 sm:pb-12 md:pb-14">
          <div className="grid grid-cols-12 gap-3 sm:gap-4 items-stretch">
            <div className="col-span-5 relative h-[200px] xs:h-[240px] sm:h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={img1.src}
                alt={img1.alt}
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="col-span-7 relative h-[200px] xs:h-[240px] sm:h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src={img2.src}
                alt={img2.alt}
                fill
                sizes="(max-width: 768px) 55vw, 30vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <Float className="absolute -bottom-6 left-4 sm:left-6">
            <Reveal direction="zoom" delay={0.4} className="bg-gradient-to-r from-[#ff5100] to-[#ff6a00] text-white py-3 px-4 sm:py-4 sm:px-6 md:px-8 rounded-2xl shadow-xl flex items-center space-x-3 sm:space-x-4 border-2 border-white">
              <div className="bg-white/20 p-2 sm:p-3 rounded-xl flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase opacity-90">
                  {statsSubtitle}
                </p>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight leading-none my-0.5">
                  {statsValue}
                </h4>
                <p className="text-xs font-medium opacity-90">{statsLabel}</p>
              </div>
            </Reveal>
          </Float>
<div className="absolute -bottom-8 -left-6 hidden sm:grid grid-cols-4 gap-2 opacity-30 -z-10">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-orange-500" />
            ))}
          </div>
        </Reveal>
<Reveal direction="right" className="lg:col-span-6 space-y-6 lg:pl-4 mt-8 lg:mt-0">
<div className="inline-flex items-center space-x-2 bg-orange-100/70 text-orange-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            <Truck className="h-6 w-6 text-orange-600" />
            <span>{badge}</span>
          </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {titlePart1} <br />
            <span className="text-[#ff5100]">{titleHighlight}</span>
          </h2>
<p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
<Stagger className="space-y-4 pt-2" delay={0.3}>
            {cardsList.map((card: any, idx: number) => (
              <StaggerItem key={idx} className="bg-orange-50/50 border border-orange-100/80 rounded-2xl p-5 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-white border border-orange-100 flex items-center justify-center shrink-0 shadow-sm">
                  {card.icon === "Target" && <Target className="w-6 h-6 text-[#ff5100]" />}
                  {card.icon === "Eye" && <Eye className="w-6 h-6 text-[#ff5100]" />}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
