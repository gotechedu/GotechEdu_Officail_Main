"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

/* ---------------------------------------------------------
   Brand SVG Icons (No external dependencies, 100% reliable)
--------------------------------------------------------- */
const LinkedinIcon = ({ size = 17, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const FacebookIcon = ({ size = 17, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 17, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = ({ size = 17, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const YouTubeIcon = ({ size = 17, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ---------------------------------------------------------
   Navigation Links Data Sets
--------------------------------------------------------- */

// 1. Technology Solutions
const solutionLinks = [
  { name: "Enterprise Software & ERP", href: "/solution#software" },
  { name: "AI & Agentic Systems", href: "/solution#ai" },
  { name: "Cloud DevOps & AWS", href: "/solution#cloud" },
  { name: "Cybersecurity & SOC Defense", href: "/solution#cybersecurity" },
  { name: "Digital Modernization", href: "/solution#transformation" },
  { name: "Web & Mobile Applications", href: "/solution#software" },
];

// 2. Learning Academy Tracks
const learningLinks = [
  { name: "Full-Stack Next.js 16", href: "/learninghub" },
  { name: "Generative AI & LLMs", href: "/learninghub" },
  { name: "Cloud & Kubernetes DevOps", href: "/learninghub" },
  { name: "Cybersecurity Analyst Track", href: "/learninghub" },
  { name: "MERN Stack Engineering", href: "/learninghub" },
  { name: "Corporate Upskilling Programs", href: "/learninghub" },
];

// 3. Quick Links (Company & Portal)
const quickLinks = [
  { name: "About GoTechEdu", href: "/about" },
  { name: "Career Openings", href: "/career", badge: "Hiring" },
  { name: "Technical Blog & Publications", href: "/blog" },
  { name: "Commercial Quotations", href: "/quotation" },
  { name: "Enterprise Solutions", href: "/solution" },
  { name: "Contact & Consultation", href: "/contact" },
];

// Social Links
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gotechedu",
    Icon: LinkedinIcon,
    hoverClass: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gotechedu",
    Icon: FacebookIcon,
    hoverClass: "hover:text-[#1877f2] hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gotecheduofficial",
    Icon: InstagramIcon,
    hoverClass: "hover:text-[#e4405f] hover:border-[#e4405f]/30 hover:bg-[#e4405f]/5",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919608094837",
    Icon: WhatsAppIcon,
    hoverClass: "hover:text-[#25d366] hover:border-[#25d366]/30 hover:bg-[#25d366]/5",
  }
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("gotecheduofficial@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-700 selection:bg-blue-600 selection:text-white">
      {/* Brand Top Gradient Accent Line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-16 lg:pb-14">
        {/* =====================================================================
            MAIN 5-SECTION FOOTER GRID (Info, Solutions, Quick Links, Learning, Contact)
        ====================================================================== */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-slate-200">

          {/* -------------------------------------------------------------
              1. SECTION: INFO & BRAND (Span 4 columns on lg)
          -------------------------------------------------------------- */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4 pr-0 lg:pr-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="GoTechEdu Home"
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-blue-200/80 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400">
                <Image
                  src="/icons.png"
                  alt="GoTechEdu Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain rounded-xl"
                  priority
                />
              </div>

              <div>
                <span className="block font-heading text-xl font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
                  GOTECH<span className="text-blue-600">EDU</span>
                </span>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                  IT Solutions &amp; EdTech
                </span>
              </div>
            </Link>

            {/* Mission / Value proposition */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 max-w-sm">
              Empowering global enterprises and technology learners with custom
              enterprise software, autonomous AI systems, secure cloud
              architectures, and industry-grade engineering training.
            </p>

            {/* Social Media Link Badges */}
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map(({ name, href, Icon, hoverClass }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GoTechEdu on ${name}`}
                    title={name}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs ${hoverClass}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>


          </div>

          {/* -------------------------------------------------------------
              2. SECTION: SOLUTIONS (Span 2 columns on lg)
          -------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-150"
                  >
                    <ChevronRight className="h-3 w-3 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-blue-600 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------------------------------------
              3. SECTION: QUICK LINKS (Span 2 columns on lg)
          -------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-150"
                  >
                    <ChevronRight className="h-3 w-3 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-blue-600 shrink-0" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-1 rounded-md bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------------------------------------
              4. SECTION: LEARNING (Span 2 columns on lg)
          -------------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
              Learning
            </h3>
            <ul className="space-y-2.5">
              {learningLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-150"
                  >
                    <ChevronRight className="h-3 w-3 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-blue-600 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------------------------------------------------
              5. SECTION: CONTACT (Span 2 columns on lg)
          -------------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 mb-4">
              Contact
            </h3>

            {/* Contact Channels */}
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Email */}
              <div className="group flex items-start gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:gotecheduofficial@gmail.com"
                    className="block text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all"
                  >
                    gotecheduofficial@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100 mt-0.5">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Direct Line
                  </span>
                  <a
                    href="tel:+919608094837"
                    className="block text-xs font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    +91 9608094837
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 border border-slate-200 mt-0.5">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Business Hours
                  </span>
                  <span className="block text-xs text-slate-600 font-medium">
                    Mon – Sat, 9:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:brightness-105 active:scale-95 transition cursor-pointer"
              >
                <span>Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================================
            BOTTOM BAR (Copyright, Legal Nav & Operational Status)
        ====================================================================== */}
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <p>© 2022 GoTechEdu Technologies. All rights reserved.</p>
          </div>

          {/* Operational Status */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] text-slate-600 self-start sm:self-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-slate-600">
              All Systems Operational
            </span>
          </div>

          {/* Legal Links */}
          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"
          >
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/solution#cybersecurity"
              className="inline-flex items-center gap-0.5 text-slate-500 hover:text-blue-600 transition-colors"
            >
              Security
              <ArrowUpRight className="h-3 w-3" />
            </Link>
            <Link
              href="/contact"
              className="text-slate-500 hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
