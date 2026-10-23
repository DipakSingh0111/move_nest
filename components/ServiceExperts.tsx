"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link2, ChevronRight } from "lucide-react";
import { experts } from "@/data/experts";
import type { TeamData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function ServiceExperts({ data, limit }: { data?: TeamData; limit?: number }) {
  const content = data ?? getMoveNestSection("Team")?.variants?.MoveNestTeam1;
  const displayedExperts = limit ? experts.slice(0, limit) : experts;

  if (!content) return null;

  const badge = content.badge || (content as any).subtitle || "SERVICE EXPERTS";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Meet Our Professional";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Moving Team";
  const viewProfileLabel = content.viewProfileLabel || "View profile";

  return (
    <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[85rem] mx-auto space-y-12">
<Reveal className="text-center space-y-3">
<div className="inline-flex items-center space-x-1.5 bg-orange-100/70 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer hover:bg-orange-200 transition-colors">
            <span>{badge}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {titlePart1} <span className="text-[#ff5100]">{titleHighlight}</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedExperts.map((expert, index) => (
            <StaggerItem key={index} hoverLift>
              <Link
                href={`/team-details/${expert.slug}`}
                className="group h-full bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(255,81,0,0.12)] hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
<div className="relative w-full h-[300px] sm:h-[340px] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
<div className="pt-4 px-2 pb-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#ff5100] tracking-wide uppercase">
                      {expert.role}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                      {expert.name}
                    </h3>
                  </div>
<span
                    aria-label={`${viewProfileLabel} ${expert.name}`}
                    className="w-11 h-11 rounded-full bg-[#0c2340] text-white flex items-center justify-center shrink-0 group-hover:bg-[#ff5100] transition-colors duration-300 shadow-sm"
                  >
                    <Link2 className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
