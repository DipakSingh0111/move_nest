import Link from "next/link";

type BrandLogoProps = {
  text?: string;
  highlight?: string;
  subtext?: string;
  href?: string;
  className?: string;
};

export default function BrandLogo({
  text = "Move",
  highlight = "Nest",
  subtext = "PACKERS & MOVERS",
  href = "/",
  className = "",
}: BrandLogoProps) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 56"
        className="h-10 w-11 shrink-0 sm:h-11 sm:w-12"
        aria-hidden="true"
      >
        <path
          d="M10 26 L32 8 L38 8 L38 14 L54 26 L54 30 L10 30 Z"
          fill="#f97316"
        />
        <path
          d="M14 30 H50 V42 H54 V48 H48 C48 50.2 46.2 52 44 52 C41.8 52 40 50.2 40 48 H28 C28 50.2 26.2 52 24 52 C21.8 52 20 50.2 20 48 H14 V30 Z"
          fill="#0c4040"
        />
        <circle cx="24" cy="48" r="3.2" fill="#0c4040" stroke="#fff" strokeWidth="1.5" />
        <circle cx="44" cy="48" r="3.2" fill="#0c4040" stroke="#fff" strokeWidth="1.5" />
        <circle cx="48" cy="36" r="2.2" fill="#f97316" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="text-[1.35rem] font-extrabold tracking-tight sm:text-[1.55rem]">
          <span className="text-[#0c4040]">{text}</span>
          <span className="text-[#f97316]">{highlight}</span>
        </span>
        {subtext ? (
          <span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#0c4040] sm:text-[0.65rem]">
            {subtext}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
