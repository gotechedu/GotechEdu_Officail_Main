"use client";

import React, { useState } from "react";

const valueProps = [
  {
    id: "roi",
    category: "Engineering",
    number: "01",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 3a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
    tag: "ROI Focused",
    metricBadge: "+340% Avg. ROI",
    title: "Business-Centric Engineering",
    description:
      "We build technology with clear ROI metrics—focusing on revenue growth, operational efficiency, and user retention.",
    highlights: ["Revenue-Driven Architecture", "KPI Dashboards", "Cost Optimization"],
    color: "from-blue-500 to-cyan-500",
    bgSoft: "bg-blue-50",
    textCol: "text-blue-600",
    borderCol: "border-blue-100",
    glowCol: "from-blue-400/30 to-cyan-400/30",
  },
  {
    id: "speed",
    category: "Engineering",
    number: "02",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tag: "Speed to Market",
    metricBadge: "2x Faster Release",
    title: "Rapid Deployment & Agile Cadence",
    description:
      "Accelerated development cycles with continuous integration, production-ready code, and weekly sprint demos.",
    highlights: ["CI/CD Automation", "Weekly Demos", "Zero-Downtime Releases"],
    color: "from-amber-500 to-orange-500",
    bgSoft: "bg-amber-50",
    textCol: "text-amber-600",
    borderCol: "border-amber-100",
    glowCol: "from-amber-400/30 to-orange-400/30",
  },
  {
    id: "security",
    category: "Security & AI",
    number: "03",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    tag: "Enterprise Security",
    metricBadge: "ISO 27001 & SOC2",
    title: "Bank-Grade Security & Compliance",
    description:
      "Security-first design with SOC2, ISO27001 standards, encrypted data pipelines, and strict GDPR adherence.",
    highlights: ["Data Encryption at Rest", "Compliance Auditing", "Zero-Trust Architecture"],
    color: "from-emerald-500 to-teal-500",
    bgSoft: "bg-emerald-50",
    textCol: "text-emerald-600",
    borderCol: "border-emerald-100",
    glowCol: "from-emerald-400/30 to-teal-400/30",
  },
  {
    id: "ai",
    category: "Security & AI",
    number: "04",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.693L4.2 13.9" />
      </svg>
    ),
    tag: "AI First",
    metricBadge: "Custom LLM & RAG",
    title: "Next-Gen AI Capabilities",
    description:
      "Direct integration of advanced AI models, autonomous agents, and RAG architectures tailored to your proprietary datasets.",
    highlights: ["Autonomous AI Agents", "RAG Vector Pipelines", "Predictive Analytics"],
    color: "from-purple-500 to-indigo-500",
    bgSoft: "bg-purple-50",
    textCol: "text-purple-600",
    borderCol: "border-purple-100",
    glowCol: "from-purple-400/30 to-indigo-400/30",
  },
  {
    id: "talent",
    category: "Talent & Scale",
    number: "05",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tag: "Expert Talent",
    metricBadge: "Senior Architects",
    title: "Dedicated Senior Engineering Team",
    description:
      "Direct access to principal architects, lead AI engineers, DevOps specialists, and dedicated project managers.",
    highlights: ["Principal Architects", "DevOps Specialists", "Dedicated Leads"],
    color: "from-sky-500 to-blue-600",
    bgSoft: "bg-sky-50",
    textCol: "text-sky-600",
    borderCol: "border-sky-100",
    glowCol: "from-sky-400/30 to-blue-400/30",
  },
  {
    id: "partnership",
    category: "Talent & Scale",
    number: "06",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: "End-to-End Partnership",
    metricBadge: "24/7 SLA Guarantee",
    title: "Full Ecosystem Support & Upskilling",
    description:
      "Post-launch maintenance, 24/7 SLA support, and complete workforce upskilling through GotechEdu tech education.",
    highlights: ["24/7 SLA Monitoring", "Workforce Training", "Continuous Optimization"],
    color: "from-rose-500 to-pink-500",
    bgSoft: "bg-rose-50",
    textCol: "text-rose-600",
    borderCol: "border-rose-100",
    glowCol: "from-rose-400/30 to-pink-400/30",
  },
];

const categories = ["All", "Engineering", "Security & AI", "Talent & Scale"];

function WhyChooseUs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProps =
    activeCategory === "All"
      ? valueProps
      : valueProps.filter((item) => item.category === activeCategory);

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 py-20 lg:py-28 border-t border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute left-[5%] top-1/4 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[5%] bottom-1/4 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 backdrop-blur-sm shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Why GotechEdu
            </span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Empowering Your Digital Transformation.
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-medium">
            We combine deep technical expertise with strategic execution to help enterprises outpace competitors and innovate faster.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProps.map((prop) => (
            <div
              key={prop.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2.5 hover:border-blue-300 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${prop.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Watermark Step Number in Background */}
              <span className="absolute right-6 top-5 font-heading text-5xl font-black text-slate-100/90 select-none pointer-events-none transition-colors group-hover:text-blue-50">
                {prop.number}
              </span>

              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div
                      className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${prop.glowCol} blur-sm opacity-30 transition-all duration-300 group-hover:opacity-80 group-hover:scale-105`}
                    />
                    <div
                      className={`relative flex h-13 w-13 items-center justify-center rounded-2xl ${prop.bgSoft} ${prop.textCol} border ${prop.borderCol} shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2`}
                    >
                      {prop.icon}
                    </div>
                  </div>

                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[11px] font-extrabold text-slate-700 border border-slate-200/80">
                    {prop.tag}
                  </span>
                </div>

                {/* Metric Highlight Pill */}
                <div className="mt-5">
                  <span className={`inline-flex items-center gap-1.5 rounded-lg ${prop.bgSoft} px-2.5 py-1 text-[11px] font-mono font-bold ${prop.textCol} border ${prop.borderCol}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {prop.metricBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3.5 font-heading text-xl font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">
                  {prop.description}
                </p>
              </div>

              {/* Highlights Feature Chips */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {prop.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200/70 transition-colors group-hover:bg-blue-50/50 group-hover:border-blue-200/70 group-hover:text-blue-700"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
