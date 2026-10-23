"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Truck, Headphones, Shield, DollarSign, Clock } from "lucide-react";
import type { WhyChooseUsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

export default function WhyChooseUs({ data }: { data?: WhyChooseUsData }) {
  const content = data ?? getMoveNestSection("WhyChooseUs")?.variants?.MoveNestWhyChooseUs1;

  if (!content) return null;

  const iconMap: Record<string, React.ReactNode> = {
    FiShield: <Shield className="w-6 h-6 text-orange-600" />,
    FiDollarSign: <DollarSign className="w-6 h-6 text-orange-600" />,
    FiClock: <Clock className="w-6 h-6 text-orange-600" />,
    Home: <Home className="w-6 h-6 text-orange-600" />,
    Truck: <Truck className="w-6 h-6 text-orange-600" />,
    Headphones: <Headphones className="w-6 h-6 text-orange-600" />,
  };

  const badge = content.badge || (content as any).subtitle || "WHY CHOOSE US";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "We Are The Best";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Moving Company";
  const description = content.description || "";
  const imgSrc = typeof content.image === "string" ? content.image : content.image?.src || "/images/move-next_12.jpg";
  const imgAlt = typeof content.image === "string" ? "Why choose us" : content.image?.alt || "Why choose us";
  const badgeSubtitle = content.badgeCard?.subtitle || (content as any).badgeSubtitle || "BEST PACKERS & MOVERS";
  const badgeLine1 = content.badgeCard?.line1 || (content as any).badgeLine1 || "Safe Moving";
  const badgeLine2 = content.badgeCard?.line2 || (content as any).badgeLine2 || "Everyday";
  const featuresList = content.list || (content as any).features || [];

  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8"
        >
<div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-1 h-4 bg-orange-600 rounded-full inline-block" />
              <span className="text-orange-600 font-semibold tracking-wider text-xs sm:text-sm uppercase">
                {badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {titlePart1} <br />
              <span className="text-orange-600">{titleHighlight}</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
              {description}
            </p>
          </div>
<div className="space-y-6">
            {featuresList.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex items-start space-x-4 group"
              >
<div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  {iconMap[item.icon] ? (
                    React.cloneElement(iconMap[item.icon] as React.ReactElement<{ className?: string }>, {
                      className:
                        "w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300",
                    })
                  ) : (
                    <Home className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
<div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
<motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
<div className="relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
<motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-6 left-4 sm:-left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl max-w-xs border-4 border-[#faf8f6]"
          >
            <p className="text-xs uppercase tracking-wider font-medium text-orange-100 mb-1">
              {badgeSubtitle}
            </p>
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
              {badgeLine1} <br />
              {badgeLine2}
            </h4>
            <div className="w-12 h-1 bg-white/40 rounded-full mt-3" />
          </motion.div>
<div className="absolute top-4 right-4 hidden sm:grid grid-cols-4 gap-1.5 opacity-40 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
