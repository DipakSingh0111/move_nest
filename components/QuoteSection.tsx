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
import data from "../data/move-nest.json";
import { Reveal, Stagger, StaggerItem } from "./common/Motion";

export default function QuoteSection() {
  const { quoteSection } = data;
  const { fields } = quoteSection;
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
    alert(quoteSection.successMessage);
  };

  return (
    <section className="bg-[#faf8f6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Image & Dark Feature Card */}
        <Reveal direction="left" className="lg:col-span-5 bg-[#0c2340] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
          {/* Top Image Container - Further Increased Height */}
          <div className="relative w-full h-[520px] sm:h-[580px] bg-slate-200">
            <Image
              src={quoteSection.image}
              alt={quoteSection.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Content Area - Reduced Padding & Spacing */}
          <div className="p-5 sm:p-6 space-y-3 text-white flex-1 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {quoteSection.titlePart1}{" "}
                <span className="text-[#ff5100]">{quoteSection.titleHighlight}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {quoteSection.description}
              </p>
            </div>

            {/* 4 Feature Badges Grid */}
            <Stagger className="grid grid-cols-4 gap-2 pt-2.5 border-t border-slate-700/60 text-center" delay={0.3}>
              {quoteSection.features.map((feature, idx) => (
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
              <span>{quoteSection.formSubtitle}</span>
              <span className="w-10 h-[2px] bg-[#ff5100]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {quoteSection.formTitlePart1} <span className="text-[#ff5100]">{quoteSection.formTitleHighlight}</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              {quoteSection.formDescription}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.fullName.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={fields.fullName.placeholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.phone.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={fields.phone.placeholder}
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
                  {fields.email.label} <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.movingDate.label} <span className="text-orange-600">*</span>
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
                {fields.movingFrom.label} <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="movingFrom"
                  required
                  placeholder={fields.movingFrom.placeholder}
                  value={formData.movingFrom}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {fields.movingTo.label} <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="movingTo"
                  required
                  placeholder={fields.movingTo.placeholder}
                  value={formData.movingTo}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.typeOfMove.label} <span className="text-orange-600">*</span>
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
                    <option value="">{fields.typeOfMove.placeholder}</option>
                    {quoteSection.moveTypes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  {fields.houseSize.label} <span className="text-orange-600">*</span>
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
                    <option value="">{fields.houseSize.placeholder}</option>
                    {quoteSection.houseSizes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                {fields.additionalDetails.label}{" "}
                <span className="text-slate-400 font-normal">{quoteSection.optionalText}</span>
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <textarea
                  name="additionalDetails"
                  rows={3}
                  placeholder={fields.additionalDetails.placeholder}
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
              <span>{quoteSection.buttonText}</span>
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
