"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/move-nest.json";

import Image from "next/image";

export default function Navbar() {
  const { navbar } = data;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm font-sans relative z-50">
      <div className="max-w-[85rem] mx-auto py-3 px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={navbar.logo.image}
              alt={navbar.logo.alt}
              width={250}
              height={70}
              className="w-[200px] md:w-[250px] h-auto object-contain"
              priority
            />
          </Link>
        </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        {navbar.links.map((link, index) => {
          const isActive = pathname === link.url;
          return (
            <Link
              key={index}
              href={link.url}
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

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link
          href={navbar.cta.url}
          className="bg-[#F97316] hover:bg-[#ea580c] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-colors text-sm font-semibold shadow-md"
        >
          {navbar.cta.label}
          <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#F97316]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button 
          className="text-[#0c4040] p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden absolute w-full left-0 top-full shadow-lg"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
              {navbar.links.map((link, index) => {
                const isActive = pathname === link.url;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    onClick={() => setIsOpen(false)}
                    className={`text-[15px] font-medium py-3 px-4 rounded-xl transition-colors ${
                      isActive ? "bg-orange-50 text-[#F97316]" : "text-[#0c4040] hover:bg-slate-50 hover:text-[#F97316]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile CTA */}
              <div className="pt-4 px-2 md:hidden">
                <Link
                  href={navbar.cta.url}
                  onClick={() => setIsOpen(false)}
                  className="bg-[#F97316] hover:bg-[#ea580c] text-white rounded-full px-6 py-3 flex items-center justify-center gap-3 transition-colors text-sm font-semibold shadow-md w-full"
                >
                  {navbar.cta.label}
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#F97316]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
