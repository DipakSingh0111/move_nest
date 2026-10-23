import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Truck,
  Users,
  ShieldCheck,
  Star,
  User,
  Briefcase,
  Globe,
  Clock,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { TeamMemberDetails } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { ProgressBar, Reveal, Stagger, StaggerItem } from "../common/Motion";

interface TeamMember {
  name: string;
  role: string;
  slug: string;
  image: string;
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Truck,
  Users,
  ShieldCheck,
  Star,
  User,
  Briefcase,
  Globe,
  Clock,
};

const socialMap: Record<string, { icon: IconType; className: string }> = {
  facebook: { icon: FaFacebookF, className: "bg-[#1877f2] hover:bg-[#166fe5]" },
  instagram: { icon: FaInstagram, className: "bg-[#e4405f] hover:bg-[#d62957]" },
  linkedin: { icon: FaLinkedinIn, className: "bg-[#0a66c2] hover:bg-[#0958a8]" },
  youtube: { icon: FaYoutube, className: "bg-[#ff0000] hover:bg-[#e60000]" },
};

export default function TeamDetailsComponent({
  member,
  data,
}: {
  member: TeamMember;
  data?: TeamMemberDetails;
}) {
  const teamDetails = data ?? getMoveNestSection("Team")?.variants?.MoveNestTeam1?.details;

  if (!teamDetails) return null;

  const [firstName, ...rest] = member.name.split(" ");
  const lastName = rest.join(" ");
  const fill = (text: string) =>
    text
      .replaceAll("{name}", member.name)
      .replaceAll("{role}", member.role)
      .replaceAll("{firstName}", firstName);

  return (
    <section className="bg-white py-12 sm:py-16 font-sans">
      <div className="mx-auto max-w-[85rem] space-y-10 px-4 md:px-8">
        <Reveal className="overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_16px_50px_rgba(0,43,54,0.08)] sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)_300px] lg:gap-8 xl:grid-cols-[320px_minmax(0,1fr)_300px]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[22px] bg-slate-100 lg:mx-0 lg:max-w-none lg:self-stretch lg:min-h-[420px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 360px, 320px"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center space-y-5">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-[#002b36] sm:text-4xl lg:text-[42px]">
                  {firstName}
                  {lastName ? (
                    <>
                      {" "}
                      <span className="text-[#ff6333]">{lastName}</span>
                    </>
                  ) : null}
                </h1>
                <p className="mt-1.5 text-base font-medium text-slate-500 sm:text-lg">
                  {member.role}
                </p>
              </div>

              <p className="max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base">
                {fill(teamDetails.bio)}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4 sm:gap-4">
                {teamDetails.stats?.map((stat) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-[#ff6333]/35 bg-[#fffaf7] px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff6333]/30 bg-white">
                        {Icon && (
                          <Icon className="h-5 w-5 text-[#ff6333]" strokeWidth={1.8} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-tight text-[#002b36]">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col rounded-[22px] bg-[#f4f6f8] p-6 sm:p-7">
              <h3 className="mb-5 text-lg font-bold text-[#002b36]">
                {teamDetails.contactTitle}
              </h3>

              <div className="space-y-4">
                {teamDetails.contact?.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.value} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                        {Icon && (
                          <Icon className="h-4 w-4 text-[#ff6333]" strokeWidth={2} />
                        )}
                      </div>
                      <span className="break-words text-sm font-medium leading-6 text-slate-600">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-slate-200/80 pt-6">
                <h4 className="mb-4 text-base font-bold text-[#002b36]">
                  {teamDetails.followTitle}
                </h4>
                <div className="mb-6 flex flex-wrap items-center gap-2.5">
                  {teamDetails.socials?.map((social) => {
                    const entry = socialMap[social.platform];
                    if (!entry) return null;
                    const Icon = entry.icon;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-0.5 ${entry.className}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>

                <Link
                  href={teamDetails.button?.href || "/get-a-quote"}
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#ff6333] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(255,99,51,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e64f22]"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" strokeWidth={2.25} />
                  <span>{teamDetails.button?.label || "Get in Touch"}</span>
                  <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <StaggerItem className="rounded-[24px] bg-[#f4f6f8] p-7 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-[#002b36]">
              {teamDetails.personalInfoTitle}
            </h3>
            <ul className="space-y-0">
              {teamDetails.personalInfo?.map((info, i) => {
                const Icon = iconMap[info.icon];
                return (
                  <li key={info.label}>
                    {i > 0 && <div className="h-px w-full bg-slate-200/90" />}
                    <div className="flex items-center justify-between gap-4 py-3.5 text-sm">
                      <div className="flex min-w-0 items-center gap-3 font-medium text-slate-500">
                        {Icon && (
                          <Icon className="h-4 w-4 shrink-0 text-[#ff6333]" strokeWidth={2} />
                        )}
                        <span>{info.label}</span>
                      </div>
                      <span className="shrink-0 text-right font-semibold text-[#002b36]">
                        {fill(info.value)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>

          <StaggerItem className="rounded-[24px] border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgba(0,43,54,0.04)] sm:p-8">
            <h3 className="mb-7 text-xl font-bold text-[#002b36]">
              {teamDetails.skillsTitle}
            </h3>
            <div className="space-y-5">
              {teamDetails.skills?.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-bold text-[#002b36]">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <ProgressBar
                      value={skill.value}
                      className="h-full rounded-full bg-[#ff6333]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="rounded-[24px] bg-[#f4f6f8] p-7 sm:p-8 md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-xl font-bold text-[#002b36]">
              {teamDetails.certificationsTitle}
            </h3>
            <div className="space-y-5">
              {teamDetails.certifications?.map((cert) => {
                const Icon = iconMap[cert.icon];
                return (
                  <div key={cert.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      {Icon && (
                        <Icon className="h-5 w-5 text-[#ff6333]" strokeWidth={1.8} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="mb-1 text-sm font-bold text-[#002b36]">
                        {cert.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-500">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
