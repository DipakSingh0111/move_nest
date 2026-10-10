import Image from "next/image";
import Link from "next/link";
import { FiUser, FiArrowRight } from "react-icons/fi";
import { blogs } from "@/data/blogs";
import data from "../data/move-nest.json";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function LatestBlogSection() {
  const { latestBlog } = data;
  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
            <span className="w-2 h-2 bg-[#f57c00] rounded-full inline-block"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-800 uppercase">
              {latestBlog.subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2525] tracking-tight mb-4">
            {latestBlog.titlePart1} <span className="text-[#f57c00]">{latestBlog.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {latestBlog.description}
          </p>
        </Reveal>

        {/* Blog Cards Grid (3 Cards) */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <StaggerItem
              key={index}
              hoverLift
              className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl group"
            >
              <div>
                {/* Image Container with Absolute Date Badge */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Absolute Date Badge on Top Left */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl px-3.5 py-2 shadow-md text-center">
                    <span className="block text-xl font-extrabold text-[#0B2525] leading-none mb-0.5">
                      {blog.date}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      {blog.month}
                    </span>
                  </div>
                </div>

                {/* Metadata: Author */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#f57c00] mb-2 uppercase tracking-wide">
                  <FiUser className="w-3.5 h-3.5" />
                  <span>{latestBlog.authorLabel}</span>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold text-[#0B2525] mb-3 group-hover:text-[#f57c00] transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.description}
                </p>
              </div>

              {/* Read More Link Button */}
              <div>
                <Link
                  href={`/blog-details/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-[#0B2525] hover:text-[#f57c00] font-bold text-sm transition-colors group/btn"
                >
                  <span>{latestBlog.readMore}</span>
                  <span className="w-7 h-7 rounded-full bg-[#f57c00] text-white flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom CTA Button: View More Blogs */}
        <Reveal className="text-center">
          <a
            href={latestBlog.viewMoreUrl}
            className="inline-flex items-center gap-3 bg-[#f57c00] hover:bg-[#e06d00] text-white font-bold px-9 py-4 rounded-full shadow-lg transition-all duration-300 group"
          >
            <span>{latestBlog.viewMoreButton}</span>
            <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
              <FiArrowRight className="w-4 h-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
