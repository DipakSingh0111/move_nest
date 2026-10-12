"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import type { FooterData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Stagger, StaggerItem } from "./Motion";

export default function Footer({ data }: { data?: FooterData }) {
  const footer = data ?? getMoveNestSection("Footer")?.variants?.MoveNestFooter1;
  const topbar = getMoveNestSection("Topbar")?.variants?.MoveNestTopbar1;

  if (!footer) return null;

  const logoSrc = typeof footer.logo === "string" ? footer.logo : footer.logo?.src || "/images/white-logo.png";
  const logoAlt = typeof footer.logo === "string" ? "MoveNest Packers & Movers" : footer.logo?.alt || "MoveNest Packers & Movers";
  const quickLinksTitle = footer.titles?.quickLinks || "Quick Links";
  const servicesTitle = footer.titles?.services || "Our Services";
  const contactTitle = footer.titles?.contact || "Contact Information";
  const phone = topbar?.phone || "+1 00000 00000";
  const email = topbar?.email || "info@xyz.com";
  const address = topbar?.address || "123 Market St, San Francisco, CA 94105, USA";
  const socials = topbar?.socials || [
    { platform: "facebook", url: "https://www.facebook.com/" },
    { platform: "instagram", url: "https://www.instagram.com/" },
    { platform: "linkedin", url: "https://www.linkedin.com/" },
    { platform: "youtube", url: "https://www.youtube.com/" },
  ];

  // Quick Links exactly matching the screenshot
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/service" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contactUs" },
  ];

  // Services list exactly matching the screenshot
  const servicesList = footer.services && footer.services.length > 0 ? footer.services : [
    "Home Shifting",
    "Office Relocation",
    "Local Moving",
    "Intercity Moving",
    "Packing & Unpacking",
    "Furniture Handling",
    "Loading & Unloading",
  ];

  // Split address into two lines if contains comma
  const addressParts = address.split(", ");
  const addressLine1 = addressParts[0] ? `${addressParts[0]},` : address;
  const addressLine2 = addressParts.slice(1).join(", ") || "";

  return (
    <footer className="relative overflow-hidden bg-[#071d24] text-white">
      {/* Background Image with smooth gradient overlay revealing the truck & boxes on the right */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${footer.backgroundImage || "/images/move-next_14.jpg"}')`,
        }}
      />

      {/* Dark Teal / Navy Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(7, 26, 33, 0.98) 0%, rgba(7, 26, 33, 0.95) 52%, rgba(7, 26, 33, 0.76) 78%, rgba(7, 26, 33, 0.42) 100%)",
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-[85rem] px-4 md:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.3fr] gap-10 lg:gap-8 items-start"
        >
          {/* Column 1: Brand Info & Socials */}
          <StaggerItem className="space-y-6">
            {/* Logo */}
            <div>
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-auto w-[210px] md:w-[245px] max-w-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-white/80 max-w-[340px]">
              {footer.description}
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((social, idx) => {
                const platform = (social.platform || "").toLowerCase();
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ff5100] text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    {platform.includes("facebook") && <FaFacebookF className="w-4 h-4" />}
                    {platform.includes("instagram") && <FaInstagram className="w-4 h-4" />}
                    {platform.includes("linkedin") && <FaLinkedinIn className="w-4 h-4" />}
                    {platform.includes("youtube") && <FaYoutube className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {quickLinksTitle}
            </h3>
            <div className="h-[3px] w-8 rounded-full bg-[#ff5100] mt-2 mb-6" />

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-[15px] text-white/85 transition-colors duration-200 hover:text-[#ff5100]"
                  >
                    <ChevronRight
                      size={15}
                      strokeWidth={2.6}
                      className="text-[#ff5100] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Column 3: Our Services */}
          <StaggerItem>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {servicesTitle}
            </h3>
            <div className="h-[3px] w-8 rounded-full bg-[#ff5100] mt-2 mb-6" />

            <ul className="space-y-3.5">
              {servicesList.map((service: string) => {
                const slug = service.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
                return (
                  <li key={service}>
                    <Link
                      href={`/service-details/${slug}`}
                      className="group inline-flex items-center gap-2.5 text-[15px] text-white/85 transition-colors duration-200 hover:text-[#ff5100]"
                    >
                      <ChevronRight
                        size={15}
                        strokeWidth={2.6}
                        className="text-[#ff5100] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      />
                      <span>{service}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>

          {/* Column 4: Contact Information */}
          <StaggerItem>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {contactTitle}
            </h3>
            <div className="h-[3px] w-8 rounded-full bg-[#ff5100] mt-2 mb-6" />

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(255,81,0,0.3)]">
                  <Phone size={19} className="fill-current text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium mb-0.5">
                    {footer.contactLabels?.call || "Call Us"}
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-base font-bold text-white hover:text-[#ff5100] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(255,81,0,0.3)]">
                  <Mail size={19} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium mb-0.5">
                    {footer.contactLabels?.email || "Email Us"}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-bold text-white hover:text-[#ff5100] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(255,81,0,0.3)]">
                  <MapPin size={19} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium mb-0.5">
                    {footer.contactLabels?.location || "Our Location"}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-white leading-snug">
                    {addressLine1}
                    {addressLine2 && (
                      <>
                        <br />
                        {addressLine2}
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(255,81,0,0.3)]">
                  <Clock3 size={19} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium mb-0.5">
                    {footer.contactLabels?.hours || "Working Hours"}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-white leading-snug">
                    {footer.workingHours?.weekdays || "Mon - Sat: 9:00 AM - 7:00 PM"}
                    <br />
                    {footer.workingHours?.weekend || "Sunday: Closed"}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[85rem] px-4 md:px-8 py-5">
          <p className="text-sm text-white/75 text-left">
            {footer.copyright || "© 2025 MoveNest Packers & Movers. All Rights Reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
