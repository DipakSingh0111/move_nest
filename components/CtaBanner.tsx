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
          relative mx-auto min-h-[370px] max-w-[85rem]
          overflow-hidden rounded-[26px]
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
        <Reveal direction="left" delay={0.2} className="relative z-10 flex min-h-[370px] flex-col justify-center px-8 py-12 sm:px-12 lg:px-[84px]">
          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-2">
            <Zap size={21} fill="#ff6333" className="text-[#ff6333]" />

            <span
              className="
                text-sm font-bold uppercase tracking-[1.5px]
                text-[#ff6333] underline decoration-1
                underline-offset-4
                sm:text-base
              "
            >
              {ctaBanner.subtitle}
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="
              max-w-[760px]
              text-3xl font-bold leading-[1.25]
              tracking-tight text-white
              sm:text-4xl
              lg:text-[48px]
            "
          >
            {ctaBanner.titleLine1}
            <br />
            {ctaBanner.titleLine2}
          </h2>

          {/* Button */}
          <button
            className="
              mt-8 w-fit rounded-md
              bg-[#ff6333]
              px-8 py-4
              text-sm font-semibold uppercase
              text-white
              shadow-[0_8px_25px_rgba(255,99,51,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#ff6333]
              hover:shadow-[0_12px_30px_rgba(255,255,255,0.18)]
              sm:px-9 sm:py-5 sm:text-base
            "
          >
            {ctaBanner.button}
          </button>
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
        ${mobile ? "gap-4 px-5 py-4" : "gap-5 px-6 py-4"}
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex shrink-0 items-center justify-center
          rounded-full text-[#ff6333]
          transition-transform duration-300
          group-hover:scale-110
          ${mobile ? "h-12 w-12" : "h-12 w-12"}
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
