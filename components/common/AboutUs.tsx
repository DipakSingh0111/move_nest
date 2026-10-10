import Image from "next/image";
import {
  FiUsers,
  FiBox,
  FiCheckCircle,
  FiMapPin,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";

import data from "../../data/move-nest.json";
import { Float, Reveal, Stagger, StaggerItem } from "./Motion";

export default function AboutUsSection() {
  const { about } = data;
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center">
          {/* LEFT SIDE: Images */}
          <Reveal direction="left" className="relative w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none pt-8 pl-8">
            {/* Decorative Dot Matrix in Bottom-Left Background */}
            <div className="absolute -bottom-8 -left-2 grid grid-cols-5 gap-2.5 opacity-60 pointer-events-none z-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#f97316]"
                ></div>
              ))}
            </div>

            {/* Main Background Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm bg-white p-2 border border-gray-100 z-10 w-[90%]">
              <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={about.mainImage}
                  alt={about.mainImageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Top Right Orange Ribbon: 29+ Years Of Experience */}
            <Reveal direction="right" delay={0.4} className="absolute top-12 right-0 sm:-right-4 z-20">
              <div className="relative bg-[#f97316] text-white pl-5 pr-8 py-3.5 rounded-l-xl rounded-tr-xl shadow-lg flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
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
                <span className="font-semibold text-[15px] sm:text-[17px] tracking-wide whitespace-nowrap">
                  {about.experienceYears} {about.experienceText}
                </span>

                {/* Ribbon Fold Triangle */}
                <div className="absolute -bottom-3 right-0 w-0 h-0 border-t-[12px] border-t-[#c2410c] border-r-[12px] border-r-transparent"></div>
              </div>
            </Reveal>

            {/* Overlapping Bottom-Right Floating Image */}
            <Float className="absolute -bottom-12 right-0 sm:-right-8 z-30">
            <Reveal direction="zoom" delay={0.6} className="bg-white p-2.5 rounded-2xl shadow-xl border border-gray-100 w-64 sm:w-80">
              <div className="relative rounded-xl overflow-hidden h-36 sm:h-48 bg-gray-100">
                <Image
                  src={about.previewImage}
                  alt={about.previewImageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#f97316] flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                    <FiPlay className="w-5 h-5 ml-1 fill-current" />
                  </div>
                </div>
              </div>
            </Reveal>
            </Float>
          </Reveal>

          {/* RIGHT SIDE: Content & Features */}
          <Reveal direction="right" className="pt-10 lg:pt-0 lg:pl-6">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#f97316] inline-block"></span>
              <span className="text-[13px] font-bold tracking-widest text-[#0c4040] uppercase">
                {about.subtitle}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[42px] font-extrabold text-[#0c4040] tracking-tight leading-[1.2] mb-6">
              <span className="inline-block whitespace-nowrap">
                {about.titlePart1}
              </span>{" "}
              <br />
              {about.titleConnector} <span className="text-[#f97316]">{about.titleHighlight}</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-4">
              {about.description1}
            </p>

            {/* 4 Feature Boxes Grid */}
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
              {about.features.map((feature, idx) => (
                <StaggerItem key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fff7ed] text-[#f97316] flex items-center justify-center shrink-0">
                    {feature.icon === "FiUsers" && <FiUsers className="w-6 h-6" />}
                    {feature.icon === "FiBox" && <FiBox className="w-6 h-6" />}
                    {feature.icon === "FiCheckCircle" && <FiCheckCircle className="w-6 h-6" />}
                    {feature.icon === "FiMapPin" && <FiMapPin className="w-6 h-6" />}
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

            {/* CTA Button */}
            <div>
              <a
                href={about.buttonUrl}
                className="inline-flex items-center gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-[15px] pl-7 pr-2 py-2 rounded-full shadow-md transition-all duration-300"
              >
                {about.button}
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#f97316]">
                  <FiArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
