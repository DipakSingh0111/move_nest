"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBox,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCommentDots,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { ContactPageData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function ContactSection({ data }: { data?: ContactPageData }) {
  const content = data ?? getMoveNestSection("ContactPage")?.variants?.MoveNestContactPage1;
  const topbar = getMoveNestSection("Topbar")?.variants?.MoveNestTopbar1;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    movingService: "",
    movingFrom: "",
    movingTo: "",
    preferredDate: "",
    additionalDetails: "",
    recaptcha: false,
  });

  if (!content) return null;

  const form = (content.form || {}) as any;
  const info = (content.info || {}) as any;
  const map = (content.map || {}) as any;

  const placeholders = form.placeholders || {};
  const serviceOptions = form.serviceOptions || [];

  const phones: string[] =
    info.phones ||
    (topbar?.phone ? [topbar.phone] : ["+1 00000 00000"]);
  const emails: string[] =
    info.emails ||
    (topbar?.email ? [topbar.email] : ["info@xyz.com"]);
  const address =
    info.address || topbar?.address || "123 Market St, San Francisco, CA 94105, USA";
  const socials = topbar?.socials || [];

  const formSubtitle = form.badge || "CONTACT US";
  const formTitlePart1 = form.heading?.main || "Get in";
  const formTitleHighlight = form.heading?.highlight || "Touch";
  const formDescription = form.description || "";

  const infoSubtitle = info.badge || "OUR CONTACT DETAIL";
  const infoTitlePart1 = info.heading?.main || "Need Any";
  const infoTitleHighlight = info.heading?.highlight || "Assistance?";
  const infoDescription = info.description || "";

  const contactLabels = info.labels || {
    call: "Call Us",
    email: "Email Us",
    location: "Our Location",
  };

  const socialTitle = info.socialTitle || "Follow Us :";
  const bgImage = content.backgroundImage || "/images/move-next_12.jpg";

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-[#f7f8fa] py-3.5 pl-11 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-[#ff5100] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5100]";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recaptcha) {
      alert(form.recaptchaAlert || "Please verify that you are not a robot.");
      return;
    }
    alert(form.successMessage || "Message Sent Successfully!");
  };

  return (
    <section className="bg-white px-4 py-12 font-sans sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[85rem] space-y-12">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <Reveal
            direction="left"
            className="space-y-6 rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_16px_50px_rgba(11,37,37,0.08)] sm:p-8 lg:col-span-7 lg:p-10"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff5100]">
                <span className="h-[2px] w-6 bg-[#ff5100]" />
                <span>{formSubtitle}</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2525] sm:text-4xl">
                {formTitlePart1}{" "}
                <span className="text-[#ff5100]">{formTitleHighlight}</span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                {formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={placeholders.name || "Your Name *"}
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={placeholders.email || "Your Email *"}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={placeholders.phone || "Your Phone *"}
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FaBox className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <select
                    name="movingService"
                    required
                    value={formData.movingService}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer appearance-none`}
                  >
                    <option value="">{placeholders.movingService || "Moving Service *"}</option>
                    {serviceOptions.map((option: string) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="movingFrom"
                    required
                    placeholder={placeholders.movingFrom || "Moving From *"}
                    value={formData.movingFrom}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="movingTo"
                    required
                    placeholder={placeholders.movingTo || "Moving To *"}
                    value={formData.movingTo}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="date"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 h-4 w-4 text-slate-400" />
                <textarea
                  name="additionalDetails"
                  rows={4}
                  placeholder={placeholders.additionalDetails || "Additional Details (Optional)"}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className={`${inputClass} resize-none pt-3.5`}
                />
              </div>

              <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-[#f7f8fa] px-4 py-2.5 sm:w-auto">
                  <input
                    type="checkbox"
                    name="recaptcha"
                    id="recaptcha"
                    checked={formData.recaptcha}
                    onChange={handleChange}
                    className="h-5 w-5 cursor-pointer rounded accent-orange-600"
                  />
                  <label
                    htmlFor="recaptcha"
                    className="cursor-pointer select-none text-xs font-medium text-slate-700"
                  >
                    {form.recaptchaLabel || "I'm not a robot"}
                  </label>
                  <div className="ml-auto pl-3 text-center">
                    <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                      ↻
                    </div>
                    <span className="mt-0.5 block text-[9px] text-slate-400">
                      {form.recaptchaBrand || "reCAPTCHA"}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#ff5100] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,81,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e04700] sm:w-auto"
                >
                  <span>{form.submitButton || "Send Message"}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                    <FaArrowRight className="h-3 w-3 text-[#ff5100]" />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="h-full lg:col-span-5">
            <div
              className="relative flex h-full min-h-[580px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#0c2340] p-8 text-white shadow-xl sm:p-10"
              style={{
                backgroundImage: `linear-gradient(105deg, rgba(12,35,64,0.97) 0%, rgba(12,35,64,0.88) 48%, rgba(12,35,64,0.35) 100%), url('${bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="relative z-10 space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff5100]">
                    <span className="h-[2px] w-6 bg-[#ff5100]" />
                    <span>{infoSubtitle}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {infoTitlePart1}{" "}
                    <span className="text-[#ff5100]">{infoTitleHighlight}</span>
                  </h3>
                  {infoDescription ? (
                    <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                      {infoDescription}
                    </p>
                  ) : null}
                </div>

                <Stagger className="space-y-8" delay={0.25}>
                  <StaggerItem direction="right" className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff5100] shadow-md">
                      <FaPhoneAlt className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{contactLabels.call}</h4>
                      {phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s+/g, "")}`}
                          className="mt-1 block text-sm text-slate-200 transition-colors hover:text-[#ff5100]"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </StaggerItem>

                  <StaggerItem direction="right" className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff5100] shadow-md">
                      <FaEnvelope className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{contactLabels.email}</h4>
                      {emails.map((mail) => (
                        <a
                          key={mail}
                          href={`mailto:${mail}`}
                          className="mt-1 block text-sm text-slate-200 transition-colors hover:text-[#ff5100]"
                        >
                          {mail}
                        </a>
                      ))}
                    </div>
                  </StaggerItem>

                  <StaggerItem direction="right" className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff5100] shadow-md">
                      <FaMapMarkerAlt className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{contactLabels.location}</h4>
                      <p className="mt-1 max-w-[260px] text-sm leading-relaxed text-slate-200">
                        {address}
                      </p>
                    </div>
                  </StaggerItem>
                </Stagger>
              </div>

              <div className="relative z-10 mt-12 flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-white">{socialTitle}</span>
                <div className="flex items-center gap-2.5">
                  {socials.map((social) => {
                    const Icon = socialIcons[social.platform];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:border-[#ff5100] hover:bg-[#ff5100]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative h-[400px] w-full overflow-hidden rounded-[28px] border border-slate-200 shadow-xl sm:h-[460px]">
          <iframe
            title={map.title || "MoveNest Location Map"}
            src={
              map.embedUrl ||
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715165640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            }
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />

          <div className="absolute left-5 top-5 max-w-xs rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:left-6 sm:top-6 sm:max-w-sm sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#ff5100]">
                <FaMapMarkerAlt className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {map.cardTitle || address}
                </h4>
                <p className="mt-0.5 text-xs leading-snug text-slate-500">{address}</p>
                <a
                  href={map.linkUrl || "https://maps.google.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#ff5100] hover:underline"
                >
                  <span>{map.linkText || "View on Google Maps"}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
