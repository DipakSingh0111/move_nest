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
} from "lucide-react";
import { FaTruck, FaShieldAlt, FaBoxOpen, FaUserFriends } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { GetQuoteData } from "@/types/movenest.types";
import { getMoveNestSection } from "@/lib/movenest";
import { Reveal, Stagger, StaggerItem } from "../common/Motion";

const featureIconMap: Record<string, IconType> = {
  Truck: FaTruck,
  ShieldCheck: FaShieldAlt,
  Package: FaBoxOpen,
  Clock: FaBoxOpen,
  Users: FaUserFriends,
};

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

  const imageSrc =
    typeof content.image === "string"
      ? content.image
      : content.image?.src || "/images/move-next_01.jpg";
  const imageAlt =
    typeof content.image === "string"
      ? "MoveNest reliable moving service"
      : content.image?.alt || "MoveNest reliable moving service";
  const titlePart1 = content.heading?.main || "Safe &";
  const titleHighlight = content.heading?.highlight || "Hassle-Free Moving";
  const description = content.description || "";
  const featuresList = content.list || [];

  const form = (content.form || {}) as any;
  const formTitlePart1 = form.heading?.main || "Request a";
  const formTitleHighlight = form.heading?.highlight || "Moving Quote";
  const formDescription =
    form.description ||
    "Fill out the form below and our team will get back to you with the best offer for your moving requirements.";

  const fields = form.fields || {};
  const moveTypes = form.moveTypes || [];
  const houseSizes = form.houseSizes || [];
  const optionalText = form.optionalText || "(Optional)";
  const buttonText = form.buttonText || "Get a Quote Now";
  const successMessage =
    form.successMessage || "Moving Quote Request Submitted Successfully!";

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-[#f8f9fb] py-3 pl-10 pr-4 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-[#ff5100] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#ff5100]";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(successMessage);
  };

  return (
    <section className="bg-white px-4 py-12 font-sans sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[85rem]">
        <Reveal className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(11,37,37,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col bg-[#0c2340] lg:col-span-5">
              <div className="relative h-[260px] w-full sm:h-[300px] lg:h-[320px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-8 bg-[#061627] p-6 text-white sm:gap-10 sm:p-8 lg:p-9">
                <div className="space-y-3">
                  <h3 className="text-[1.65rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2rem]">
                    {titlePart1}{" "}
                    <span className="text-[#ff6333]">{titleHighlight}</span>
                  </h3>
                  <p className="max-w-md text-[13px] leading-relaxed text-[#c5d0da] sm:text-sm">
                    {description}
                  </p>
                </div>

                <Stagger
                  className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4 sm:gap-x-2"
                  delay={0.15}
                >
                  {featuresList.map((feature: any, idx: number) => {
                    const lines: string[] =
                      feature.lines?.length > 0
                        ? feature.lines
                        : String(feature.title || "").split(" ");
                    return (
                      <StaggerItem
                        key={idx}
                        direction="zoom"
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <div
                          className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at center, rgba(255,99,51,0.32) 0%, rgba(255,99,51,0.1) 42%, #0a1c30 70%)",
                            boxShadow:
                              "0 0 0 1.5px #ff6333, 0 0 14px rgba(255,99,51,0.45)",
                          }}
                        >
                          {(() => {
                            const Icon = featureIconMap[feature.icon] || FaTruck;
                            return (
                              <Icon className="relative z-10 h-7 w-7 text-[#ff6333]" />
                            );
                          })()}
                        </div>
                        <span className="text-[12px] font-semibold leading-[1.2] text-white sm:text-[13px]">
                          {lines.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">
              <div className="mb-7 space-y-2">
                <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2525] sm:text-3xl lg:text-[34px]">
                  {formTitlePart1}{" "}
                  <span className="text-[#ff5100]">{formTitleHighlight}</span>
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                  {formDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.fullName?.label || "Full Name"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder={fields.fullName?.placeholder}
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.phone?.label || "Phone Number"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder={fields.phone?.placeholder}
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.email?.label || "Email Address"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={fields.email?.placeholder}
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.movingDate?.label || "Moving Date"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        name="movingDate"
                        required
                        value={formData.movingDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.movingFrom?.label || "Moving From"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="movingFrom"
                        required
                        placeholder={fields.movingFrom?.placeholder}
                        value={formData.movingFrom}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.movingTo?.label || "Moving To"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="movingTo"
                        required
                        placeholder={fields.movingTo?.placeholder}
                        value={formData.movingTo}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.typeOfMove?.label || "Type of Move"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <Truck className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <select
                        name="typeOfMove"
                        required
                        value={formData.typeOfMove}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">
                          {fields.typeOfMove?.placeholder || "Select move type"}
                        </option>
                        {moveTypes.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      {fields.houseSize?.label || "House Size"}{" "}
                      <span className="text-[#ff5100]">*</span>
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <select
                        name="houseSize"
                        required
                        value={formData.houseSize}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">
                          {fields.houseSize?.placeholder || "Select house size"}
                        </option>
                        {houseSizes.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    {fields.additionalDetails?.label || "Additional Details"}{" "}
                    <span className="font-normal text-slate-400">{optionalText}</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <textarea
                      name="additionalDetails"
                      rows={4}
                      placeholder={fields.additionalDetails?.placeholder}
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      className={`${inputClass} resize-none pt-3`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#ff5100] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,81,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e04700]"
                >
                  <span>{buttonText}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
