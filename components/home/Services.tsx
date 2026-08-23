"use client";

import Link from "next/link";
import React from "react";

const services = [
  {
    id: "tech-solutions",
    title: "Tech Solutions",
    description:
      "Custom web, mobile & enterprise ERP/CRM systems built for performance, scale and reliability.",
    href: "/solution#software",
    badge: "Full-Cycle",
    color: "from-blue-500 to-indigo-600",
    bgSoft: "bg-blue-50",
    textCol: "text-blue-600",
    borderCol: "border-blue-100",
    glowCol: "from-blue-400/30 to-indigo-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-2 2 2 2m8-4l2 2-2 2" />
      </svg>
    ),
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Autonomous AI agents, enterprise RAG search pipelines, and custom fine-tuned LLMs.",
    href: "/solution#ai",
    badge: "Next-Gen",
    color: "from-purple-500 to-indigo-600",
    bgSoft: "bg-purple-50",
    textCol: "text-purple-600",
    borderCol: "border-purple-100",
    glowCol: "from-purple-400/30 to-indigo-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: "cloud-services",
    title: "Cloud & DevOps",
    description:
      "Scalable multi-cloud architecture (AWS/Azure/GCP) with Kubernetes & 99.99% uptime SLA.",
    href: "/solution#cloud",
    badge: "99.99% SLA",
    color: "from-sky-500 to-blue-600",
    bgSoft: "bg-sky-50",
    textCol: "text-sky-600",
    borderCol: "border-sky-100",
    glowCol: "from-sky-400/30 to-blue-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Zero-Trust security architecture, SOC 2 compliance, penetration testing & 24/7 SIEM monitoring.",
    href: "/solution#cybersecurity",
    badge: "Zero-Trust",
    color: "from-emerald-500 to-teal-600",
    bgSoft: "bg-emerald-50",
    textCol: "text-emerald-600",
    borderCol: "border-emerald-100",
    glowCol: "from-emerald-400/30 to-teal-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "digital-marketing",
    title: "Digital Growth",
    description:
      "Data-driven SEO, performance marketing funnels, CRO, and B2B growth acquisition.",
    href: "/solution#marketing",
    badge: "Growth",
    color: "from-fuchsia-500 to-pink-600",
    bgSoft: "bg-fuchsia-50",
    textCol: "text-fuchsia-600",
    borderCol: "border-fuchsia-100",
    glowCol: "from-fuchsia-400/30 to-pink-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    id: "tech-education",
    title: "Tech Academy",
    description:
      "Industry-aligned bootcamps, corporate engineering upskilling, and 1-on-1 career mentorship.",
    href: "/learninghub",
    badge: "Upskilling",
    color: "from-amber-500 to-orange-600",
    bgSoft: "bg-amber-50",
    textCol: "text-amber-600",
    borderCol: "border-amber-100",
    glowCol: "from-amber-400/30 to-orange-400/30",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-slate-50/60 py-12 lg:py-16 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[10%] bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            WHAT WE DO
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            End-to-End Solutions for Every Growth Stage
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
            From software engineering and AI automation to multi-cloud infrastructure, cybersecurity defense, and tech training—we are your full-spectrum technology partner.
          </p>
        </div>

        {/* 6 Services Cards in Single Responsive Grid Row */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between items-center text-center overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-6 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
            >
              {/* Subtle Top Hover Gradient Line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Main Card Content */}
              <div className="flex flex-col items-center w-full">
                {/* Circular Icon with Radiant Soft Glow */}
                <div className="relative mt-2">
                  <div
                    className={`absolute -inset-1.5 rounded-full bg-gradient-to-r ${service.glowCol} blur-md opacity-40 transition-all duration-300 group-hover:opacity-90 group-hover:scale-110`}
                  />
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full ${service.bgSoft} ${service.textCol} border ${service.borderCol} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 font-heading text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>

              {/* Bottom "Learn More →" Link */}
              <div className="mt-6 pt-4 border-t border-slate-100/90 w-full">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 transition-all duration-200 group-hover:text-blue-700 group-hover:gap-2"
                >
                  <span>Learn More</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
