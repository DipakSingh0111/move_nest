"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  Truck,
  MapPin,
  Calendar,
  FileText,
  ArrowRight,
  PhoneCall,
  MapPin as LocationIcon,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import data from "../data/move-nest.json";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function ContactSection() {
  const { topbar, contactSection } = data;
  const { placeholders } = contactSection;
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
      alert(contactSection.recaptchaAlert);
      return;
    }
    console.log("Contact Form Submitted:", formData);
    alert(contactSection.successMessage);
  };

  return (
    <section className="bg-[#faf8f6] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[85rem] mx-auto space-y-12">
        {/* Main Grid: Left Form & Right Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Form */}
          <Reveal direction="left" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff5100] tracking-widest uppercase">
                <span className="w-6 h-[2px] bg-[#ff5100]"></span>
                <span>{contactSection.formSubtitle}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {contactSection.formTitlePart1} <span className="text-[#ff5100]">{contactSection.formTitleHighlight}</span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                {contactSection.formDescription}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={placeholders.name}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={placeholders.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Moving Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={placeholders.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                  />
                </div>

                <div className="relative">
                  <Truck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="movingService"
                    required
                    value={formData.movingService}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{placeholders.movingService}</option>
                    {contactSection.serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Moving From & Moving To */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="movingFrom"
                    required
                    placeholder={placeholders.movingFrom}
                    value={formData.movingFrom}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                  />
                </div>

                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="movingTo"
                    required
                    placeholder={placeholders.movingTo}
                    value={formData.movingTo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              {/* Preferred Moving Date */}
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                />
              </div>

              {/* Additional Details */}
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  name="additionalDetails"
                  rows={3}
                  placeholder={placeholders.additionalDetails}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] transition-colors"
                />
              </div>

              {/* reCAPTCHA & Submit Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                {/* Simulated reCAPTCHA box */}
                <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl w-full sm:w-auto">
                  <input
                    type="checkbox"
                    name="recaptcha"
                    id="recaptcha"
                    checked={formData.recaptcha}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-600 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="recaptcha"
                    className="text-xs font-medium text-slate-700 cursor-pointer select-none"
                  >
                    {contactSection.recaptchaLabel}
                  </label>
                  <div className="ml-auto pl-4 text-center">
                    <div className="w-6 h-6 mx-auto bg-blue-500 rounded-full animate-spin flex items-center justify-center text-white text-[10px]">
                      ↻
                    </div>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {contactSection.recaptchaBrand}
                    </span>
                  </div>
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#ff5100] hover:bg-[#e04700] text-white py-3.5 px-8 rounded-full font-bold text-sm flex items-center justify-center space-x-3 shadow-lg shadow-orange-500/20 transition-all duration-300"
                >
                  <span>{contactSection.submitButton}</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff5100]" />
                  </div>
                </button>
              </div>
            </form>
          </Reveal>

          {/* Right Column: Dark Assistance Card */}
          <Reveal direction="right" delay={0.15} className="lg:col-span-5 h-full">
          <div className="h-full bg-[#0c2340] rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to right, rgba(12, 35, 64, 1) 0%, rgba(12, 35, 64, 0.85) 50%, rgba(12, 35, 64, 0.1) 100%), url('${contactSection.backgroundImage}')` }}>
            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff5100] tracking-widest uppercase">
                  <span className="w-6 h-[2px] bg-[#ff5100]"></span>
                  <span>{contactSection.infoSubtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {contactSection.infoTitlePart1} <br />
                  <span className="text-[#ff5100]">{contactSection.infoTitleHighlight}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {contactSection.infoDescription}
                </p>
              </div>

              {/* Contact Info Items */}
              <Stagger className="space-y-5 pt-2" delay={0.3}>
                {/* Call Us */}
                <StaggerItem direction="right" className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-md">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      {contactSection.contactLabels.call}
                    </h4>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {topbar.phone}
                    </p>
                  </div>
                </StaggerItem>

                {/* Email Us */}
                <StaggerItem direction="right" className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      {contactSection.contactLabels.email}
                    </h4>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {topbar.email}
                    </p>
                  </div>
                </StaggerItem>

                {/* Our Location */}
                <StaggerItem direction="right" className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ff5100] text-white flex items-center justify-center shrink-0 shadow-md">
                    <LocationIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                      {contactSection.contactLabels.location}
                    </h4>
                    <p className="text-sm font-bold text-white mt-0.5 leading-snug">
                      {topbar.address}
                    </p>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>

            {/* Social Media Footer */}
            <div className="pt-8 mt-8 flex items-center space-x-4 relative z-10">
              <span className="text-sm font-medium text-white">
                {contactSection.socialTitle}
              </span>
              <div className="flex items-center space-x-3">
                {topbar.socials.map((social) => {
                  const Icon = socialIcons[social.platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      aria-label={social.platform}
                      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#ff5100] hover:border-[#ff5100] transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-white group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Bottom Google Map Section with Floating Location Box */}
        <Reveal className="relative w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          {/* Embedded Google Map iframe */}
          <iframe
            title={contactSection.map.title}
            src={contactSection.map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[105%]"
          ></iframe>

          {/* Floating Location Card Overlay on Map */}
          <Reveal direction="down" delay={0.4} className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-xs sm:max-w-sm space-y-2">
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ff5100] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {contactSection.map.cardTitle}
                </h4>
                <p className="text-xs text-slate-500 leading-snug mt-0.5">
                  {topbar.address}
                </p>
              </div>
            </div>
            <div className="pt-1">
              <a
                href={contactSection.map.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#ff5100] hover:underline inline-flex items-center space-x-1"
              >
                <span>{contactSection.map.linkText}</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
