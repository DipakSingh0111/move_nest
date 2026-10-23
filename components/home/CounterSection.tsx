"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiUsers, FiTruck, FiHome, FiMapPin } from "react-icons/fi";
import type { StatsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Stagger, StaggerItem } from "../common/Motion";

function useCounter(end: number, duration = 2000, startAnimation = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, startAnimation]);

  return count;
}

export default function CounterSection({ data }: { data?: StatsData }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = data ?? getMoveNestSection("Stats")?.variants?.MoveNestStats1;

  if (!content) return null;

  const bgImage = typeof content.background === "string" ? content.background : content.background?.src || "/images/move-next_14.jpg";
  const bgAlt = typeof content.background === "string" ? "Stats background" : content.background?.alt || "Stats background";
  const statsList = content.list || (content as any).stats || [];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 sm:py-14 overflow-hidden bg-gray-900"
    >
<div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          className="object-cover object-center"
        />
<div className="absolute inset-0 bg-[#0B2525]/85 backdrop-brightness-75"></div>
      </div>
<div className="relative z-10 max-w-[85rem] mx-auto px-4 md:px-8">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 items-center">
          {statsList.map((item, index) => (
            <StaggerItem
              key={index}
              direction="zoom"
              className="flex flex-col items-center text-center relative group py-2"
            >
              <CounterItem
                end={item.end}
                suffix={item.suffix}
                label={item.label}
                icon={item.icon}
                start={isVisible}
              />
{index < statsList.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-white/30"></div>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FiUsers,
  FiTruck,
  FiHome,
  FiMapPin,
};

function CounterItem({
  end,
  suffix,
  label,
  icon,
  start,
}: {
  end: number;
  suffix: string;
  label: string;
  icon: string;
  start: boolean;
}) {
  const count = useCounter(end, 2000, start);
  const Icon = iconMap[icon] ?? FiUsers;

  return (
    <>
<div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-[#f57c00]" />
      </div>
<h3 className="text-4xl sm:text-5xl font-extrabold text-[#f57c00] tracking-tight mb-2">
        {count.toLocaleString()}
        {suffix}
      </h3>
<p className="text-white font-semibold text-base sm:text-lg tracking-wide">
        {label}
      </p>
    </>
  );
}
