import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Motion";
import type { PageBannersData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";

type Crumb = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  data?: PageBannersData;
  title: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  overlay?: number;
  className?: string;
};

export default function PageBanner({
  data,
  title,
  image,
  imageAlt = "",
  breadcrumbs,
  overlay = 0.85,
  className = "",
}: PageBannerProps) {
  const content = data ?? getMoveNestSection("PageBanners")?.variants?.MoveNestPageBanners1;
  const homeLabel = content?.homeLabel || "Home";
  const breadcrumbLabel = content?.breadcrumbLabel || "Breadcrumb";
  const candidate = image || content?.defaultImage;
  const bannerImage =
    candidate && !candidate.startsWith("/images/banners/")
      ? candidate
      : "/images/Hero.png";

  const crumbs: Crumb[] = breadcrumbs?.length
    ? breadcrumbs
    : [{ label: homeLabel, href: "/" }, { label: title }];

  return (
    <section
      className={`relative flex min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] items-center overflow-hidden bg-[#0f2f35] text-white ${className}`}
    >
      {bannerImage && (
        <Image
          src={bannerImage}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
<div
        aria-hidden="true"
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-r from-[#0a262c] via-[#0a262c]/80 to-[#0a262c]/40"
      />

      <div className="relative z-10 mx-auto w-full max-w-[85rem] px-4 md:px-8 py-12 sm:py-16">
        <Reveal>
          <h1 className="mb-3.5 text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <nav aria-label={breadcrumbLabel}>
            <ol className="flex flex-wrap items-center text-[0.95rem] font-semibold">
              {crumbs.map((c, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <li
                    key={`${c.label}-${i}`}
                    className="inline-flex items-center"
                  >
                    {isLast || !c.href ? (
                      <span
                        className="text-white/70"
                        aria-current={isLast ? "page" : undefined}
                      >
                        {c.label}
                      </span>
                    ) : (
                      <Link
                        href={c.href}
                        className="text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {c.label}
                      </Link>
                    )}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="mx-3.5 inline-block h-0.5 w-4 bg-red-500"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
