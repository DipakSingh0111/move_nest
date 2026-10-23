"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Ship,
  Truck,
  Home,
  Briefcase,
  Package,
} from "lucide-react";
import type { ServicesData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

const iconMap: Record<string, any> = {
  FaHome: Home,
  FaBuilding: Briefcase,
  FaMapMarkerAlt: Globe,
  FaGlobe: Globe,
  FaBoxOpen: Package,
  FaTruck: Truck,
};

export default function ServicesSection({ data }: { data?: ServicesData }) {
  const content = data ?? getMoveNestSection("Services")?.variants?.MoveNestServices1;

  if (!content) return null;

  const badge = content.badge || (content as any).subtitle || "OUR SERVICES";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "Professional Moving";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Services";
  const description = content.description || "";
  const readMoreText = content.readMore || "Read More";
  const servicesList = content.list || (content as any).services || [];

  return (
    <section className="bg-[#f9fafa] py-10 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
<Reveal className="mb-8 sm:mb-10 flex flex-col items-center text-center">
          <div className="mb-2.5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#ff4a17]" />
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff4a17]">
              {badge}
            </span>
          </div>

          <h2 className="mb-3 text-3xl font-extrabold leading-[1.2] text-[#062c3d] sm:text-4xl lg:text-5xl">
            {titlePart1}{" "}
            <span className="text-[#ff4a17]">{titleHighlight}</span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            {description}
          </p>
        </Reveal>
<Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <StaggerItem key={index} hoverLift>
                <Link
                  href={`/service/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_15px_50px_rgba(255,74,23,0.1)] cursor-pointer"
                >
<div className="relative h-[220px] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
<div className="absolute bottom-[-1px] left-0 w-full text-white">
                      <svg
                        viewBox="0 0 400 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[50px] w-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 50L400 50V40C340 40 300 38 270 24C245 12 225 0 200 0C175 0 155 12 130 24C100 38 60 40 0 40V50Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  <div className="absolute bottom-2 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center text-[#e8212b]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-3 pt-4">
                    <h3 className="mb-2 text-xl font-bold text-[#062c3d]">
                      {service.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500 sm:text-base">
                      {service.description}
                    </p>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f57c00] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 group-hover:bg-[#e06d00]">
                      {readMoreText}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
