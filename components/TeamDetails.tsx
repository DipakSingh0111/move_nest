import React from "react";
import Image from "next/image";
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
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { TeamMemberDetails } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { ProgressBar, Reveal, Stagger, StaggerItem } from "./common/Motion";

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
  facebook: { icon: FaFacebook, className: "bg-blue-600 hover:bg-blue-700" },
  instagram: { icon: FaInstagram, className: "bg-pink-600 hover:bg-pink-700" },
  linkedin: { icon: FaLinkedin, className: "bg-blue-500 hover:bg-blue-600" },
  youtube: { icon: FaYoutube, className: "bg-red-600 hover:bg-red-700" },
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
  const fill = (text: string) =>
    text
      .replaceAll("{name}", member.name)
      .replaceAll("{role}", member.role)
      .replaceAll("{firstName}", firstName);

  return (
    <section className="bg-white py-10 sm:py-14 font-sans">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 mb-16">
<Reveal direction="left" className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden bg-slate-100 shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </Reveal>
<Reveal delay={0.15} className="flex flex-col justify-center px-4 lg:px-8 space-y-6">
            <div>
              <span className="inline-block bg-orange-100 text-[#ff6333] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                {teamDetails.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b36] tracking-tight mb-2">
                {firstName} <span className="text-[#ff6333]">{rest.join(" ")}</span>
              </h1>
              <p className="text-lg text-gray-500 font-medium">{member.role}</p>
            </div>
            
            <p className="text-gray-500 leading-relaxed max-w-xl">
              {fill(teamDetails.bio)}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              {teamDetails.stats?.map((stat) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl bg-[#fff8f5] transition-transform hover:-translate-y-1">
                    {Icon && <Icon className="w-8 h-8 text-[#ff6333]" strokeWidth={1.5} />}
                    <div>
                      <h4 className="font-bold text-[#002b36]">{stat.value}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
<Reveal direction="right" delay={0.3} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col h-full">
            <h3 className="text-xl font-bold text-[#002b36] mb-6">{teamDetails.contactTitle}</h3>
            
            <div className="space-y-5 flex-1">
              {teamDetails.contact?.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.value} className="flex items-center gap-4 text-gray-600">
                    <div className="w-10 h-10 rounded-full bg-[#fff8f5] flex items-center justify-center shrink-0">
                      {Icon && <Icon className="w-4 h-4 text-[#ff6333]" />}
                    </div>
                    <span className="font-medium text-sm sm:text-base break-all">{item.value}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <h4 className="font-bold text-[#002b36] mb-4">{teamDetails.followTitle}</h4>
              <div className="flex items-center gap-3 mb-8">
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
                      className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors ${entry.className}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-[#ff6333] hover:bg-[#e64f22] text-white font-semibold py-4 px-6 rounded-full transition-all shadow-[0_8px_20px_rgba(255,99,51,0.25)] hover:shadow-none hover:translate-y-0.5">
                <MessageSquare className="w-5 h-5" />
                {teamDetails.button?.label || "Send Message"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </Reveal>
        </div>
<Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<StaggerItem className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#002b36] mb-6">{teamDetails.personalInfoTitle}</h3>
            <ul className="space-y-4">
              {teamDetails.personalInfo?.map((info, i) => {
                const Icon = iconMap[info.icon];
                return (
                  <React.Fragment key={info.label}>
                    {i > 0 && <li className="w-full h-px bg-gray-200"></li>}
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3 text-gray-500 font-medium">
                        {Icon && <Icon className="w-4 h-4 text-[#ff6333]" />}
                        {info.label}
                      </div>
                      <span className="font-semibold text-[#002b36]">{fill(info.value)}</span>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </StaggerItem>
<StaggerItem className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_5px_30px_rgba(0,0,0,0.03)]">
            <h3 className="text-xl font-bold text-[#002b36] mb-8">{teamDetails.skillsTitle}</h3>
            
            <div className="space-y-6">
              {teamDetails.skills?.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm font-bold text-[#002b36] mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <ProgressBar value={skill.value} className="h-full bg-[#ff6333] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
<StaggerItem className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#002b36] mb-6">{teamDetails.certificationsTitle}</h3>
            
            <div className="space-y-6">
              {teamDetails.certifications?.map((cert) => {
                const Icon = iconMap[cert.icon];
                return (
                  <div key={cert.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                      {Icon && <Icon className="w-6 h-6 text-[#ff6333]" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002b36] text-sm mb-1">{cert.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
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
