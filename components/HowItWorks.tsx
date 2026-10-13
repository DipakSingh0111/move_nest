"use client";

import { useState } from "react";
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
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

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

  const badge = content.badge || (content as any).subtitle || "HOW IT WORKS";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Simple & Smooth";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Moving Process";
  const description = content.description || "";
  const imgSrc = typeof content.image === "string" ? content.image : content.image?.src || "/images/howitwork.png";
  const imgAlt = typeof content.image === "string" ? "Working process illustration" : content.image?.alt || "Working process illustration";
  const stepsList = content.list || (content as any).steps || [];
  const featuresList = content.features || [];

  return (
    <section className="relative overflow-hidden bg-[#fdfbf9] py-10 sm:py-14">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full border-[60px] border-orange-100/50" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[320px] w-[320px] rounded-full bg-orange-50/70" />
      <Truck
        aria-hidden
        strokeWidth={1}
        className="pointer-events-none absolute right-4 top-24 hidden h-24 w-24 text-orange-100 lg:block"
      />
      <div className="pointer-events-none absolute bottom-6 left-6 hidden gap-1.5 sm:flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-orange-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[85rem] px-4 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* LEFT */}
          <Reveal direction="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[5px] w-14 rounded-full bg-[#f4511e]" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#f4511e]">
                {badge}
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b2a3c] sm:text-5xl lg:text-[54px]">
              {titlePart1}
              <br />
              <span className="text-[#f4511e]">{titleHighlight}</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              {description}
            </p>

            <div className="mt-6 overflow-hidden rounded-[24px] bg-white shadow-[0_15px_45px_rgba(11,42,60,0.08)]">
              <div className="group overflow-hidden">
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px] lg:h-[340px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3">
                {featuresList.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={feature.title}
                      className={`flex items-center gap-3 px-5 py-5 ${
                        index !== 0
                          ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                          : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdf3ec]">
                        {Icon && (
                          <Icon size={24} strokeWidth={1.8} className="text-[#f4511e]" />
                        )}
                      </div>
                      <p className="text-sm font-medium leading-5 text-slate-700">
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

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute bottom-[60px] left-[28px] top-[60px] hidden border-l-2 border-dashed border-slate-300 sm:block" />

            <Stagger className="space-y-5" stagger={0.15}>
              {stepsList.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isActive = activeStep === index;

                return (
                  <StaggerItem key={step.stepNumber} direction="right">
                    <div
                      onMouseEnter={() => setActiveStep(index)}
                      className="relative flex items-center gap-4 sm:gap-8"
                    >
                      <div
                        className={`relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 sm:flex ${
                          isActive
                            ? "bg-[#f4511e] text-white shadow-[0_10px_25px_rgba(244,81,30,0.35)]"
                            : "border border-slate-300 bg-white text-[#0b2a3c]"
                        }`}
                      >
                        {step.stepNumber}
                      </div>

                      <div
                        className={`flex min-h-[120px] flex-1 items-center gap-5 rounded-[18px] px-5 py-5 transition-all duration-300 sm:px-7 ${
                          isActive
                            ? "bg-[#f8efe6] shadow-[0_12px_35px_rgba(11,42,60,0.06)]"
                            : "bg-[#faf5f0]"
                        }`}
                      >
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          {Icon && (
                            <Icon size={40} strokeWidth={1.7} className="text-[#f4511e]" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-[#0b2a3c] sm:text-xl">
                            <span className="mr-2 text-[#f4511e] sm:hidden">
                              {step.stepNumber}.
                            </span>
                            {step.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-6 text-slate-500 sm:text-[15px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
