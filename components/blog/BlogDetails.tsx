import Image from "next/image";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaQuoteRight, FaCheck } from "react-icons/fa";
import type { BlogDetailsData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal } from "../common/Motion";

interface BlogProps {
  title: string;
  image: string;
  date: string;
  month: string;
}

export default function BlogDetailsComponent({
  blog,
  data,
}: {
  blog: BlogProps;
  data?: BlogDetailsData;
}) {
  const blogDetails = data ?? getMoveNestSection("BlogNews")?.variants?.MoveNestBlogNews1?.details;

  if (!blogDetails) return null;

  const paragraphs = blogDetails.paragraphs || [];
  const listItems = blogDetails.list || (blogDetails as any).listItems || [];
  const sideImg = typeof blogDetails.sideImage === "string" ? blogDetails.sideImage : blogDetails.sideImage?.src || "/images/move-next_21.jpg";
  const sideAlt = typeof blogDetails.sideImage === "string" ? "Transportation team" : blogDetails.sideImage?.alt || "Transportation team";

  return (
    <section className="bg-white py-10 sm:py-14 font-sans">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
<Reveal direction="zoom" className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-10 overflow-hidden bg-slate-100">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </Reveal>

        <Reveal>
<div className="flex items-center gap-6 mb-6 text-sm font-semibold text-[#002b36]">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-[#ff6333] w-4 h-4" />
              <span>{blog.date} {blog.month}</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <FiUser className="text-[#ff6333] w-4 h-4" />
              <span>{blogDetails.authorLabel}</span>
            </div>
          </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b36] tracking-tight mb-8 leading-tight">
            {blog.title}
          </h1>
<div className="prose prose-lg max-w-none text-gray-500 leading-relaxed space-y-6">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </Reveal>
{blogDetails.quote && (
          <Reveal direction="left" className="my-12 bg-gray-50 p-8 sm:p-12 border-l-4 border-transparent relative">
            <p className="text-xl sm:text-2xl font-bold text-[#002b36] leading-relaxed mb-6">
              {blogDetails.quote.text}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-4 h-px bg-[#002b36]"></span>
                <span className="text-sm font-semibold text-gray-500">{blogDetails.quote.author}</span>
              </div>
              <FaQuoteRight className="h-6 w-6 text-[#ff6333] opacity-80" />
            </div>
          </Reveal>
        )}
<Reveal>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b36] tracking-tight mb-8">
            {blogDetails.subheading}
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<ul className="space-y-4">
            {listItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-gray-400">
                  <FaCheck className="w-4 h-4" />
                </div>
                <span className="text-gray-500">{text}</span>
              </li>
            ))}
          </ul>
<div className="relative w-full h-[250px] sm:h-[300px] bg-slate-100 rounded-lg overflow-hidden">
            <Image
              src={sideImg}
              alt={sideAlt}
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
