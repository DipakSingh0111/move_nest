"use client";

import Link from "next/link";
import { ChevronRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import data from "../../data/move-nest.json";
import { Stagger, StaggerItem } from "./Motion";

export default function Footer() {
  const { topbar, footer, navbar } = data;
  return (
    <footer className="relative overflow-hidden bg-[#002b36] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${footer.backgroundImage}')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00232c]/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[85rem] px-4 md:px-8">
        <Stagger
          className="
            grid
            grid-cols-2
            gap-x-4
            gap-y-10
            pt-14
            pb-8
            sm:grid-cols-2
            sm:gap-10
            lg:grid-cols-[1.35fr_0.85fr_0.9fr_1.2fr]
            lg:gap-0
            lg:pt-[72px]
            lg:pb-10
          "
        >
          <StaggerItem
            className="
              col-span-2 lg:col-span-1
              lg:pr-12
              lg:border-r lg:border-white/10
            "
          >
            {/* Logo */}
            <div className="mb-7">
              <img
                src={footer.logo}
                alt={footer.logoAlt}
                className="h-auto w-[200px] md:w-[250px] max-w-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-[420px] text-[15px] leading-[1.8] text-white/80 sm:text-base">
              {footer.description}
            </p>
          </StaggerItem>
          <StaggerItem
            className="
              col-span-1
              lg:px-12
              lg:border-r lg:border-white/10
            "
          >
            <FooterHeading title={footer.quickLinksTitle} />

            <ul className="space-y-4">
              {navbar.links.slice(0, 7).map((link: any) => (
                <FooterLink key={link.label} text={link.label} href={link.url} />
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem
            className="
              col-span-1
              lg:px-12
              lg:border-r lg:border-white/10
            "
          >
            <FooterHeading title={footer.servicesTitle} />

            <ul className="space-y-4">
              {footer.services.map((service: any) => (
                <FooterLink 
                  key={service} 
                  text={service} 
                  href={`/service-details/${service.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                />
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="col-span-2 lg:col-span-1 lg:pl-12">
            <FooterHeading title={footer.contactTitle} />

            <div className="space-y-5">
              {/* Phone */}
              <ContactItem
                icon={<Phone size={23} />}
                title={footer.contactLabels.call}
                content={
                  <>
                    <a
                      href={`tel:${topbar.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-white transition-colors hover:text-[#ff6500]"
                    >
                      {topbar.phone.replace('+91 ', '91 ')}
                    </a>
                  </>
                }
              />

              {/* Email */}
              <ContactItem
                icon={<Mail size={23} />}
                title={footer.contactLabels.email}
                content={
                  <a
                    href={`mailto:${topbar.email}`}
                    className="font-semibold text-white transition-colors hover:text-[#ff6500]"
                  >
                    {topbar.email}
                  </a>
                }
              />

              {/* Location */}
              <ContactItem
                icon={<MapPin size={23} />}
                title={footer.contactLabels.location}
                content={
                  <>
                    <span>{topbar.address.split(', ')[0]},</span>
                    <br />
                    <span>{topbar.address.split(', ').slice(1).join(', ')}</span>
                  </>
                }
              />
              <ContactItem
                icon={<Clock3 size={23} />}
                title={footer.contactLabels.hours}
                content={
                  <>
                    <span>{footer.workingHours.weekdays}</span>
                    <br />
                    <span>{footer.workingHours.weekend}</span>
                  </>
                }
              />
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[85rem] px-4 md:px-8">
          <div className="py-7 text-center">
            <p className="text-sm text-white/90 sm:text-base">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="mb-7">
      <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>

      <div className="mt-3 h-[4px] w-12 rounded-full bg-[#ff6500]" />
    </div>
  );
}

/* =====================================================
   FOOTER LINK
===================================================== */

function FooterLink({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <li>
      <Link
        href={href}
        className="
          group flex items-center gap-2
          text-[15px] text-white/85
          transition-all duration-300
          hover:translate-x-1
          hover:text-[#ff6500]
          sm:text-base
        "
      >
        <ChevronRight
          size={18}
          className="
            text-[#ff6500]
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />

        <span>{text}</span>
      </Link>
    </li>
  );
}

/* =====================================================
   CONTACT ITEM
===================================================== */

function ContactItem({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="group flex items-start gap-4">
      {/* Icon */}
      <div
        className="
          flex h-[58px] w-[58px] shrink-0
          items-center justify-center
          rounded-full
          bg-[#ff6500]
          text-white
          shadow-[0_5px_20px_rgba(255,101,0,0.15)]
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-[0_8px_25px_rgba(255,101,0,0.3)]
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div className="pt-0.5">
        <p className="mb-0.5 text-[15px] text-white/60">{title}</p>

        <div className="text-[15px] leading-6 text-white/90 sm:text-base">
          {content}
        </div>
      </div>
    </div>
  );
}
