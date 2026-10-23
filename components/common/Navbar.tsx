"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { HeaderData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

export default function Navbar({ data }: { data?: HeaderData }) {
  const content = data ?? getMoveNestSection("Header")?.variants?.MoveNestHeader1;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (!content) return null;

  const links = content.menu || [];
  const cta = content.cta;
  const logoSrc = content.logo?.image || "/images/logo.png";
  const logoAlt = content.logo?.alt || "MoveNest Logo";

  return (
    <nav className="bg-white shadow-sm font-sans relative z-50">
      <div className="max-w-[85rem] mx-auto py-3 px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0">
          <Link href="/" className="inline-flex items-center shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={280}
              height={66}
              className="h-12 w-auto object-contain object-left sm:h-14"
              priority
              unoptimized
            />
          </Link>
        </div>
<div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link, index) => {
            const href = link.href || (link as any).url || "/";
            const isActive = pathname === href;
            return (
              <Link
                key={index}
                href={href}
                className={`text-[15px] font-medium transition-colors relative pb-1 ${
                  isActive ? "text-[#F97316]" : "text-[#0c4040] hover:text-[#F97316]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F97316] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
{cta && (
          <div className="hidden md:block">
            <Link
              href={cta.href || (cta as any).url || "/get-a-quote"}
              className="inline-flex items-center justify-center bg-[#F97316] hover:bg-[#ea580c] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              {cta.label}
            </Link>
          </div>
        )}
<div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0c4040] hover:text-[#F97316] p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
<AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 flex flex-col gap-3 shadow-lg"
          >
            {links.map((link, index) => {
              const href = link.href || (link as any).url || "/";
              const isActive = pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-[15px] font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-orange-50 text-[#F97316]"
                      : "text-[#0c4040] hover:bg-gray-50 hover:text-[#F97316]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {cta && (
              <div className="pt-2">
                <Link
                  href={cta.href || (cta as any).url || "/get-a-quote"}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-[#F97316] hover:bg-[#ea580c] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm"
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
