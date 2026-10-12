import Link from "next/link";
import { Mail, Phone, Zap } from "lucide-react";
import data from "../data/move-nest.json";
import { Reveal } from "./common/Motion";

export default function TransportCTA() {
  const { topbar, ctaBanner } = data;
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-10">
      <Reveal
        direction="zoom"
        className="
          relative mx-auto min-h-[260px] sm:min-h-[280px] max-w-[85rem]
          overflow-hidden rounded-[24px]
          bg-[#003743]
          shadow-sm
        "
      >
        {/* Background Image */}
        <div
          className="
            absolute inset-0 bg-cover bg-center bg-no-repeat
          "
          style={{
            backgroundImage: `url('${ctaBanner.backgroundImage}')`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#003743]/35" />

        {/* Content */}
        <Reveal direction="left" delay={0.2} className="relative z-10 flex min-h-[260px] sm:min-h-[280px] flex-col justify-center px-6 py-8 sm:px-10 lg:px-14">
          {/* Small Heading */}
          <div className="mb-3 flex items-center gap-2">
            <Zap size={18} fill="#ff6333" className="text-[#ff6333]" />

            <span
              className="
                text-xs font-bold uppercase tracking-[1.5px]
                text-[#ff6333] underline decoration-1
                underline-offset-4
                sm:text-sm
              "
            >
              {ctaBanner.subtitle}
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="
              max-w-[700px]
              text-2xl font-bold leading-[1.2]
              tracking-tight text-white
              sm:text-3xl
              lg:text-[38px]
            "
          >
            {ctaBanner.titleLine1}
            <br />
            {ctaBanner.titleLine2}
          </h2>

          {/* Button */}
          <Link
            href={ctaBanner.buttonUrl || "/contactUs"}
            className="
              mt-5 w-fit rounded-md
              bg-[#ff6333]
              px-6 py-3
              text-xs font-semibold uppercase
              text-white
              shadow-[0_8px_25px_rgba(255,99,51,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#ff6333]
              hover:shadow-[0_12px_30px_rgba(255,255,255,0.18)]
              sm:px-7 sm:py-3.5 sm:text-sm
            "
          >
            {ctaBanner.button}
          </Link>
        </Reveal>

        {/* RIGHT CONTACT CARDS */}
        <div
          className="
            absolute right-8 top-1/2 z-20
            hidden w-[360px]
            -translate-y-1/2
            flex-col gap-5
            lg:flex
            xl:right-20
          "
        >
          {/* Phone */}
          <ContactCard
            icon={<Phone size={32} strokeWidth={1.8} />}
            title={ctaBanner.phoneTitle}
            value={topbar.phone}
          />

          {/* Email */}
          <ContactCard
            icon={<Mail size={32} strokeWidth={1.8} />}
            title={ctaBanner.emailTitle}
            value={topbar.email}
          />
        </div>

        {/* Mobile Contact Cards */}
        <div className="relative z-20 flex flex-col gap-4 px-6 pb-8 lg:hidden">
          <ContactCard
            icon={<Phone size={32} strokeWidth={1.8} />}
            title={ctaBanner.phoneTitle}
            value={topbar.phone}
            mobile
          />

          <ContactCard
            icon={<Mail size={32} strokeWidth={1.8} />}
            title={ctaBanner.emailTitle}
            value={topbar.email}
            mobile
          />
        </div>
      </Reveal>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  mobile = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`
        group flex items-center
        rounded-full
        border border-white/10
        bg-[#284e55]/80
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#ff6333]/40
        hover:bg-[#183f47]/90
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
        ${mobile ? "gap-3 px-4 py-2.5" : "gap-4 px-5 py-2.5"}
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex shrink-0 items-center justify-center
          rounded-full text-[#ff6333]
          transition-transform duration-300
          group-hover:scale-110
          ${mobile ? "h-10 w-10" : "h-10 w-10"}
        `}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p
          className={`
            font-semibold text-[#ff6333]
            ${mobile ? "text-xs" : "text-sm"}
          `}
        >
          {title}
        </p>

        <p
          className={`
            truncate font-semibold text-white
            ${mobile ? "text-sm" : "text-base"}
          `}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
