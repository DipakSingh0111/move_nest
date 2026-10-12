"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Truck,
  Home,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import type { GetQuoteData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function QuoteSection({ data }: { data?: GetQuoteData }) {
  const content = data ?? getMoveNestSection("GetQuote")?.variants?.MoveNestGetQuote1;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    movingDate: "",
    movingFrom: "",
    movingTo: "",
    typeOfMove: "",
    houseSize: "",
    additionalDetails: "",
  });

  if (!content) return null;

  const imageSrc = typeof content.image === "string" ? content.image : content.image?.src || "/images/move-next_17.jpg";
  const imageAlt = typeof content.image === "string" ? "MoveNest reliable moving service" : content.image?.alt || "MoveNest reliable moving service";
  const titlePart1 = content.heading?.main || (content as any).titlePart1 || "MoveNest Reliable";
  const titleHighlight = content.heading?.highlight || (content as any).titleHighlight || "Moving & Logistics";
  const description = content.description || "";
  const featuresList = content.list || (content as any).features || [];

  const form = (content.form || {}) as any;
  const formSubtitle = form.badge || form.subtitle || "FREE ESTIMATE";
  const formTitlePart1 = form.heading?.main || form.titlePart1 || "Request a Free";
  const formTitleHighlight = form.heading?.highlight || form.titleHighlight || "Moving Quote";
  const formDescription = form.description || "Fill out the form below and our team will get back to you with an accurate estimate.";

  const fields = form.fields || {
    fullName: { label: "Full Name", placeholder: "Your full name" },
    phone: { label: "Phone Number", placeholder: "+1 00000 00000" },
    email: { label: "Email Address", placeholder: "info@xyz.com" },
    movingDate: { label: "Preferred Moving Date" },
    movingFrom: { label: "Current Location (Moving From)", placeholder: "Street, City, State, ZIP" },
    movingTo: { label: "Destination (Moving To)", placeholder: "Street, City, State, ZIP" },
    typeOfMove: { label: "Type of Move", placeholder: "Select moving service" },
    houseSize: { label: "Size of House / Office", placeholder: "Select size" },
    additionalDetails: { label: "Additional Requirements", placeholder: "List large furniture, packing needs, elevator info..." },
  };

  const moveTypes = form.moveTypes || [
    "Residential / Home Shifting",
    "Office / Commercial Relocation",
    "Local City Moving",
    "Interstate / Long Distance Moving",
    "Packing & Unpacking Only",
    "Storage Solutions",
  ];

  const houseSizes = form.houseSizes || [
    "Studio Apartment",
    "1 - 2 Bedroom Home",
    "3 - 4 Bedroom Home",
    "5+ Bedroom Villa",
    "Small Office (1 - 15 Desks)",
    "Medium/Large Corporate Facility",
  ];

  const optionalText = form.optionalText || "(Optional)";
  const buttonText = form.buttonText || "Calculate & Send Quote Request";
  const successMessage = form.successMessage || "Thank you! Your quote request has been received. Our team will contact you shortly.";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
    alert(successMessage);
  };

  return (
    <section className="bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Image & Dark Feature Card */}
        <Reveal direction="left" className="lg:col-span-5 bg-[#0c2340] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
          {/* Top Image Container */}
          <div className="relative w-full h-[520px] sm:h-[580px] bg-slate-200">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Content Area */}
          <div className="p-5 sm:p-6 space-y-3 text-white flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {titlePart1}{" "}
                <span className="text-[#ff5100]">{titleHighlight}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature Badges Grid */}
            <Stagger className="grid grid-cols-4 gap-2 pt-2.5 border-t border-slate-700/60 text-center" delay={0.3}>
              {featuresList.map((feature: any, idx: number) => (
                <StaggerItem key={idx} direction="zoom" className="flex flex-col items-center space-y-1">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#ff5100]">
                    {feature.icon === "Truck" && <Truck className="w-3.5 h-3.5" />}
                    {feature.icon === "ShieldCheck" && <ShieldCheck className="w-3.5 h-3.5" />}
                    {feature.icon === "Clock" && <Clock className="w-3.5 h-3.5" />}
                    {feature.icon === "Users" && <Users className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-[10px] font-semibold leading-tight text-slate-200">
                    {feature.title}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Right Column: Quote Form Card */}
        <Reveal direction="right" delay={0.15} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff5100] tracking-widest uppercase">
              <span>{formSubtitle}</span>
              <span className="w-10 h-[2px] bg-[#ff5100]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {formTitlePart1} <span className="text-[#ff5100]">{formTitleHighlight}</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              {formDescription}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.fullName?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={fields.fullName?.placeholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.phone?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={fields.phone?.placeholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.email?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={fields.email?.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.movingDate?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    name="movingDate"
                    required
                    value={formData.movingDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {fields.movingFrom?.label} <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="movingFrom"
                  required
                  placeholder={fields.movingFrom?.placeholder}
                  value={formData.movingFrom}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {fields.movingTo?.label} <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="movingTo"
                  required
                  placeholder={fields.movingTo?.placeholder}
                  value={formData.movingTo}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.typeOfMove?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Truck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="typeOfMove"
                    required
                    value={formData.typeOfMove}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{fields.typeOfMove?.placeholder}</option>
                    {moveTypes.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.houseSize?.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="houseSize"
                    required
                    value={formData.houseSize}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{fields.houseSize?.placeholder}</option>
                    {houseSizes.map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {fields.additionalDetails?.label}{" "}
                <span className="text-slate-400 font-normal">{optionalText}</span>
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <textarea
                  name="additionalDetails"
                  rows={3}
                  placeholder={fields.additionalDetails?.placeholder}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5100] hover:bg-[#e04700] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20 transition-all duration-300 transform active:scale-[0.99] mt-2"
            >
              <span>{buttonText}</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
