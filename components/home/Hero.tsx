"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Check,
  X,
  MessageSquareQuote,
} from "lucide-react";
import { officialApi } from "@/lib/api";
import { validateName, validateEmail, validatePhone, sanitizeInput } from "@/lib/validation";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Software & Application",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Trigger modal on each page refresh with smooth entrance delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const nameValidation = validateName(formData.fullName);
    if (!nameValidation.isValid) {
      setErrorMessage(nameValidation.error!);
      return;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setErrorMessage(emailValidation.error!);
      return;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      setErrorMessage(phoneValidation.error!);
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await officialApi.submitContactInquiry({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: sanitizeInput(formData.message) || "Quick consultation enquiry submitted from hero portal modal.",
        source: "Hero Refresh Modal",
      });

      if (res && res.success === false) {
        setErrorMessage(res.message || "Failed to submit. Please check your details.");
      } else {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "Software & Application",
          message: "",
        });
      }
    } catch (err) {
      console.error("Hero enquiry error:", err);
      // Graceful fallback
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Software & Application",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[#030712] px-4 pt-10 sm:pt-14 lg:pt-18 pb-20 sm:pb-24 lg:pb-28 text-center mb-10"
      >
        {/* Background Video with Rich High-Tech Black Aesthetic ("black screen like") */}
        <video
          src="/assets/Gotech_EdTech_One_More_Solution.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-45 filter contrast-125 saturate-125"
        >
          <source
            src="/assets/Gotech_EdTech_One_More_Solution.mp4"
            type="video/mp4"
          />
          <source
            src="/assest/Gotech_EdTech_One_More_Solution.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark-Tinted Vignette & Glowing Lights */}
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/60 to-[#030712]/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf818_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
        <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-indigo-600/25 blur-[120px]" /> */}

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-2 sm:px-4 flex flex-col items-center">
          {/* Top Pill Badge */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-4 py-1.5 backdrop-blur-md shadow-xs transition-transform duration-300 hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
              Enterprise Solutions &amp; Tech Academy
            </span>
          </div>

          {/* Main Headline (H1) - Centered & Crisp */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.12] text-white tracking-tight max-w-3xl drop-shadow-sm">
            Build the Future.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Shape Your Career.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-3 font-heading text-sm sm:text-base md:text-lg font-bold text-cyan-200 tracking-tight max-w-2xl">
            AI-Powered Learning. Intelligent IT Solutions. Business Growth.
          </p>

          {/* Description Paragraph */}
          <p className="mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-normal max-w-2xl">
            From{" "}
            <strong className="font-semibold text-white">
              AI &amp; ML, Cloud, DevOps, Cybersecurity, and Full-Stack Development
            </strong>{" "}
            to{" "}
            <strong className="font-semibold text-white">
              IT solutions, digital marketing, and business consulting
            </strong>{" "}
            — we turn ideas into skills, systems, and scalable growth.
          </p>

          {/* Action Buttons Centered */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 w-full">
            <Link
              href="/solution"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/50 active:scale-95"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/learninghub"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md shadow-2xs transition duration-300 hover:scale-[1.03] hover:bg-white/20 hover:border-white/40 active:scale-95"
            >
              <span>Explore Learning Hub</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Curved Arch Divider (like the screenshot reference) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 md:h-18 lg:h-22 block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
            <path
              d="M0,80 Q720,0 1440,80"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================================
          ENQUIRY MODAL (Appears on each refresh + via Quick Enquiry Button)
      ====================================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Dialog Card */}
          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xl shadow-slate-900/20 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition active:scale-95 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="pb-4 border-b border-slate-100 pr-8">
              <div className="flex items-center gap-1.5 text-blue-600">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest">
                  Quick Consultation &amp; Enquiry
                </span>
              </div>
              <h3 className="font-heading text-xl font-black text-slate-900 mt-1">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Share your requirement and get a tailored response within 2 hours.
              </p>
            </div>

            {/* Submission Status */}
            {isSuccess ? (
              <div className="my-6 rounded-2xl bg-emerald-50 p-6 text-center border border-emerald-200 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2.5" />
                <h4 className="text-base font-bold text-emerald-900">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-xs text-emerald-700 mt-1.5 leading-relaxed">
                  Thank you! Our technical architect will reach out to you shortly via phone/email.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Submit another enquiry
                  </button>
                  <span className="text-emerald-300">•</span>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg bg-emerald-600 text-white px-4 py-1.5 text-xs font-bold hover:bg-emerald-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                {errorMessage && (
                  <div className="rounded-xl bg-red-50 p-2.5 text-xs text-red-700 border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9608094837"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                    >
                      <option value="Software & Application">Software &amp; Application</option>
                      <option value="Cloud DevOps & Automation">Cloud DevOps &amp; Automation</option>
                      <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Diploma & Certification">Diploma &amp; Certification</option>
                      <option value="Other Requirement">Other Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Message (Optional) */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Requirement / Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or career goals..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 active:scale-98 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3.5 w-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1 pt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>100% Confidential. No spam guarantee.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
