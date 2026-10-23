import Link from "next/link";
import { Mail, Phone, Zap } from "lucide-react";
import type { CtaBannerData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal } from "./Motion";

export default function TransportCTA({ data }: { data?: CtaBannerData }) {
  const content = data ?? getMoveNestSection("CtaBanner")?.variants?.MoveNestCtaBanner1;
  const topbar = getMoveNestSection("Topbar")?.variants?.MoveNestTopbar1;

  if (!content) return null;

  const bgImage = content.backgroundImage || "/images/move-next_14.jpg";
  const badge = content.badge || (content as any).subtitle || "AFFORDABLE & RELIABLE";
  const titleLine1 = content.heading?.main || (content as any).titleLine1 || "Ready to Experience Hassle-Free";
  const titleLine2 = content.heading?.highlight || (content as any).titleLine2 || "Packing & Moving?";
  const buttonLabel = content.button?.label || (content as any).button || "Get a Free Quote";
  const buttonHref = content.button?.href || (content as any).buttonUrl || "/get-a-quote";
  const phoneTitle = content.phoneTitle || "Call For Any Query";
  const emailTitle = content.emailTitle || "Email For Any Query";
  const phone = topbar?.phone || "+1 00000 00000";
  const email = topbar?.email || "info@xyz.com";

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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(0, 55, 67, 0.92) 0%,
                rgba(0, 55, 67, 0.78) 28%,
                rgba(0, 55, 67, 0.45) 55%,
                rgba(0, 55, 67, 0.3) 100%
              ),
              linear-gradient(
                180deg,
                rgba(0, 30, 36, 0.35) 0%,
                transparent 40%,
                rgba(0, 30, 36, 0.4) 100%
              )
            `,
          }}
          aria-hidden="true"
        />
        <Reveal
          direction="left"
          delay={0.2}
          className="relative z-10 flex min-h-[260px] sm:min-h-[280px] flex-col justify-center px-6 py-8 sm:px-10 lg:px-14"
        >
<div className="mb-3 flex items-center gap-2">
            <Zap size={24} fill="#ff6333" className="text-[#ff6333]" />

            <span
              className="
                text-xs font-bold uppercase tracking-[1.5px]
                text-[#ff6333] underline decoration-1
                underline-offset-4
                sm:text-sm
              "
            >
              {badge}
            </span>
          </div>
<h2
            className="
              max-w-[700px]
              text-2xl font-bold leading-[1.2]
              tracking-tight text-white
              sm:text-3xl
              lg:text-[38px]
            "
          >
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
<Link
            href={buttonHref}
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
            {buttonLabel}
          </Link>
        </Reveal>
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
<ContactCard
            icon={<Phone size={24} strokeWidth={1.8} />}
            title={phoneTitle}
            value={phone}
          />
          <ContactCard
            icon={<Mail size={24} strokeWidth={1.8} />}
            title={emailTitle}
            value={email}
          />
        </div>
        <div className="relative z-20 flex flex-col gap-4 px-6 pb-8 lg:hidden">
          <ContactCard
            icon={<Phone size={24} strokeWidth={1.8} />}
            title={phoneTitle}
            value={phone}
            mobile
          />

          <ContactCard
            icon={<Mail size={24} strokeWidth={1.8} />}
            title={emailTitle}
            value={email}
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
