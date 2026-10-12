import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaHome, FaBuilding, FaMapMarkerAlt, FaGlobe, FaBoxOpen, FaTruck, FaPlane, FaShip } from "react-icons/fa";
import Link from "next/link";
import data from "../data/move-nest.json";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

const iconMap: Record<string, React.ReactNode> = {
  FaHome: <FaHome className="w-5 h-5 text-red-600" />,
  FaBuilding: <FaBuilding className="w-5 h-5 text-red-600" />,
  FaMapMarkerAlt: <FaMapMarkerAlt className="w-5 h-5 text-red-600" />,
  FaGlobe: <FaGlobe className="w-5 h-5 text-red-600" />,
  FaBoxOpen: <FaBoxOpen className="w-5 h-5 text-red-600" />,
  FaTruck: <FaTruck className="w-5 h-5 text-red-600" />,
  FaPlane: <FaPlane className="w-5 h-5 text-red-600" />,
  FaShip: <FaShip className="w-5 h-5 text-red-600" />,
};

export default function OurServicesSection() {
  const { ourServices } = data;

  return (
    <section className="w-full py-10 sm:py-14 bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-1.5 bg-[#f97316] rounded-full inline-block"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0c4040] uppercase">
              {ourServices.subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-[#0c4040] tracking-tight mb-3 lg:whitespace-nowrap">
            {ourServices.titlePart1}{" "}
            <span className="text-[#f97316]">{ourServices.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {ourServices.description}
          </p>
        </Reveal>

        {/* Services Grid (3 Cards) */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.services.slice(0, 3).map((service, index) => (
            <StaggerItem key={index} hoverLift>
            <Link
              href={`/service-details/${service.slug}`}
              className="group h-full bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Image Container with Bottom Curve Cutout */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-8 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom Curved Wave Shape Overlay matching Card's White Background */}
                <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none">
                  <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full h-full text-white fill-current"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>

                {/* Overlapping Circular Icon Badge right at the bottom curve center */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-red-50 z-10">
                  {iconMap[service.icon]}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0B2525] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Read More Button */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-[#f57c00] group-hover:bg-[#e06d00] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all duration-300">
                    {ourServices.readMore}
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
