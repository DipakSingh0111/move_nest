"use client";

import React from "react";
import { getMoveNestSection } from "@/lib/movenest";
import type { HeroFeature } from "@/types/movenest.types";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

interface HeroFeaturesProps {
  data?: HeroFeature[];
}

export default function HeroFeatures({ data }: HeroFeaturesProps) {
  const heroData =
    getMoveNestSection("HeroBanner")?.variants?.MoveNestHeroBanner1;
  const features: HeroFeature[] = data ||
    heroData?.features || [
      { icon: "truck", title: "On-Time Delivery" },
      { icon: "shield", title: "Safe & Secure Handling" },
      { icon: "team", title: "Professional Team" },
      { icon: "rupee", title: "Affordable Pricing" },
    ];

  return (
    <section className="relative z-30 w-full bg-white px-4 mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6">
      <div className="max-w-[85rem] mx-auto">
        <Reveal direction="up" delay={0.1}>
          <div className="bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_12px_45px_-10px_rgba(0,0,0,0.12),0_4px_16px_-4px_rgba(0,0,0,0.06)] border border-gray-100/90 px-4 py-4 sm:px-8 sm:py-5">
            <Stagger
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center"
            >
              {features.map((item, index) => {
                const isLast = index === features.length - 1;

                return (
                  <StaggerItem
                    key={index}
                    className={`flex flex-col items-center justify-center text-center px-4 py-2 sm:py-1 transition-transform duration-300 hover:-translate-y-1 ${
                      !isLast ? "lg:border-r lg:border-gray-200/80" : ""
                    } ${
                      index % 2 === 0
                        ? "sm:max-lg:border-r sm:max-lg:border-gray-200/80"
                        : ""
                    } ${
                      index < 2
                        ? "sm:max-lg:border-b sm:max-lg:border-gray-200/80"
                        : ""
                    }`}
                  >
                    <div className="h-20 flex items-center justify-center mb-1">
                      {renderIcon(item.icon)}
                    </div>

                    {/* Title */}
                    <h3 className="text-[#071d24] font-bold text-[17px] sm:text-[18px] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function renderIcon(type: string) {
  switch (type.toLowerCase()) {
    case "truck":
    case "delivery":
      return (
        <svg
          className="w-20 h-20"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 18H20M4 25H16M6 32H18"
            stroke="#ff5e14"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          <rect
            x="20"
            y="14"
            width="24"
            height="26"
            rx="3"
            fill="#ff5e14"
            stroke="#0a2228"
            strokeWidth="3"
          />

          <path
            d="M44 23H53C54.6 23 56.1 24.2 56.6 25.8L59 34V40H44V23Z"
            fill="#0a2228"
          />

          <path d="M47 26.5H52.5L54.5 32H47V26.5Z" fill="#ffffff" />

          <rect x="57" y="35" width="3" height="4" rx="1" fill="#ff5e14" />

          {/* Rear Wheel */}
          <circle cx="27" cy="42" r="6" fill="#0a2228" />
          <circle cx="27" cy="42" r="3" fill="#ffffff" />
          {/* Front Wheel */}
          <circle cx="51" cy="42" r="6" fill="#0a2228" />
          <circle cx="51" cy="42" r="3" fill="#ffffff" />
        </svg>
      );

    case "shield":
    case "safe":
    case "security":
      return (
        <svg
          className="w-20 h-20"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield base */}
          <path
            d="M32 7L48 13.5V28C48 39.8 41.2 50.5 32 55C22.8 50.5 16 39.8 16 28V13.5L32 7Z"
            fill="#ff5e14"
            stroke="#0a2228"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* White checkmark */}
          <path
            d="M25 29L30 34L39 23"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "team":
    case "users":
    case "people":
      return (
        <svg
          className="w-20 h-20"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="22" r="5" fill="#0a2228" />
          <path
            d="M13 38C13 32.5 17 29 22 29C24 29 25.8 29.6 27.2 30.6C26.5 32.4 26 34.4 26 36.5V38H13Z"
            fill="#0a2228"
          />

          <circle cx="43" cy="22" r="5" fill="#0a2228" />
          <path
            d="M51 38C51 32.5 47 29 42 29C40 29 38.2 29.6 36.8 30.6C37.5 32.4 38 34.4 38 36.5V38H51Z"
            fill="#0a2228"
          />
          <circle cx="32" cy="18" r="6.5" fill="#ff5e14" />
          <path
            d="M21 40C21 33.5 26 30 32 30C38 30 43 33.5 43 40H21Z"
            fill="#ff5e14"
          />
        </svg>
      );

    case "rupee":
    case "price":
    case "pricing":
    case "money":
    default:
      return (
        <svg
          className="w-20 h-20"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dark blue outer ring */}
          <circle
            cx="32"
            cy="32"
            r="23"
            stroke="#0a2228"
            strokeWidth="3.5"
            fill="none"
          />

          <circle cx="32" cy="32" r="19" fill="#ff5e14" />

          <path
            d="M26 24H38"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          <path
            d="M26 29H36"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          <path
            d="M30 24V32C32.8 32 35 30.8 35 28C35 25.2 32.8 24 30 24Z"
            fill="#ffffff"
          />
          <path
            d="M29 24V35"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          <path
            d="M29.5 32.5L37.5 42"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
