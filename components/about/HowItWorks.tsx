"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Package,
  Truck,
  House,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import type { WorkingProcessData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Package,
  Truck,
  House,
  ShieldCheck,
  Headphones,
};

export default function HowItWorks({ data }: { data?: WorkingProcessData }) {
  const content = data ?? getMoveNestSection("WorkingProcess")?.variants?.MoveNestWorkingProcess1;
  const [activeStep, setActiveStep] = useState(0);

  if (!content) return null;

  const badge = content.badge || "HOW IT WORKS";
  const titlePart1 = content.heading?.main || "Simple Process For";
  const titleHighlight = content.heading?.highlight || "A Smooth Move";
  const description = content.description || "";
  const imgSrc =
    typeof content.image === "string"
      ? content.image
      : content.image?.src || "/images/relocation_photo.png";
  const imgAlt =
    typeof content.image === "string"
      ? "Couple carrying moving boxes"
      : content.image?.alt || "Couple carrying moving boxes";
  const stepsList = content.list || [];
  const featuresList = content.features || [];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-28 top-24 h-[380px] w-[380px] rounded-full bg-[#f8efe6]/80" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[300px] w-[300px] rounded-full bg-[#fff3ea]" />
      <div className="pointer-events-none absolute right-8 top-10 hidden grid-cols-6 gap-2.5 opacity-80 sm:grid">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f4511e]" />
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-8 left-8 hidden gap-2 sm:flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#f4511e]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[85rem] px-4 md:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <Reveal direction="left" className="flex h-full min-w-0 w-full flex-col">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[4px] w-12 rounded-full bg-[#f4511e] sm:w-14" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f4511e] sm:text-sm">
                {badge}
              </span>
            </div>

            <h2 className="text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#0b2a3c] sm:text-4xl lg:text-[44px]">
              {titlePart1}
              <br />
              <span className="text-[#f4511e]">{titleHighlight}</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-slate-500 sm:text-base">
              {description}
            </p>

            <div className="mt-7 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_12px_40px_rgba(11,42,60,0.08)]">
              <div className="relative min-h-[220px] w-full flex-1 overflow-hidden sm:min-h-[260px]">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>

              <div className="grid grid-cols-1 divide-y divide-slate-200/80 bg-[#faf6f1] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {featuresList.map((feature) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={`${feature.title}-${feature.subtitle}`}
                      className="flex min-w-0 items-center gap-3 px-3 py-4 sm:justify-center sm:px-4 sm:py-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        {Icon && (
                          <Icon size={24} strokeWidth={1.8} className="text-[#f4511e]" />
                        )}
                      </div>
                      <p className="min-w-0 text-[13px] font-semibold leading-5 text-[#0b2a3c] sm:text-sm">
                        {feature.title}
                        <br />
                        {feature.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative flex h-full min-w-0 w-full flex-col pt-1">
            <div className="absolute bottom-[52px] left-[27px] top-[52px] hidden w-px border-l-[1.5px] border-dashed border-slate-300 sm:block" />

            <Stagger
              className="flex h-full flex-1 flex-col justify-between gap-4 sm:gap-5"
              stagger={0.12}
            >
              {stepsList.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isActive = activeStep === index;

                return (
                  <StaggerItem key={step.stepNumber} direction="right" className="w-full">
                    <div
                      onMouseEnter={() => setActiveStep(index)}
                      className="relative flex w-full items-center gap-4 sm:gap-5"
                    >
                      <div
                        className={`relative z-10 hidden h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full text-base font-bold transition-all duration-300 sm:flex ${
                          isActive
                            ? "bg-[#f4511e] text-white shadow-[0_10px_24px_rgba(244,81,30,0.35)]"
                            : "border border-slate-300 bg-white text-[#0b2a3c]"
                        }`}
                      >
                        {step.stepNumber}
                      </div>

                      <div
                        className={`flex min-h-[108px] w-full min-w-0 flex-1 items-center gap-4 rounded-[18px] px-4 py-4 transition-all duration-300 sm:gap-5 sm:px-5 sm:py-5 ${
                          isActive ? "bg-[#f8efe6]" : "bg-[#faf5f0]"
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          {Icon && (
                            <Icon size={24} strokeWidth={1.8} className="text-[#f4511e]" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-bold text-[#0b2a3c] sm:text-lg">
                            <span className="mr-1.5 text-[#f4511e] sm:hidden">
                              {step.stepNumber}.
                            </span>
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
