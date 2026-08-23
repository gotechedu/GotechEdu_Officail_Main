"use client";

import React from "react";

const stats = [
  {
    value: "500+",
    label: "Enterprise Solutions Deployed",
    subtext: "Custom ERP, CRM, AI agents & cloud systems",
    badge: "Global Scale",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    bgSoft: "bg-blue-50",
    borderSoft: "border-blue-100",
    textCol: "text-blue-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    value: "99.99%",
    label: "Infrastructure Uptime SLA",
    subtext: "High-availability multi-region architecture",
    badge: "Enterprise SLA",
    gradient: "from-indigo-600 via-blue-500 to-cyan-400",
    bgSoft: "bg-indigo-50",
    borderSoft: "border-indigo-100",
    textCol: "text-indigo-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: "50,000+",
    label: "Learners & Professionals",
    subtext: "Upskilled in software, AI & DevOps",
    badge: "Talent Impact",
    gradient: "from-amber-500 via-orange-500 to-rose-400",
    bgSoft: "bg-amber-50",
    borderSoft: "border-amber-100",
    textCol: "text-amber-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Global Tech Partnerships",
    subtext: "AWS, Microsoft, Google Cloud & OpenAI ecosystem",
    badge: "Ecosystem",
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    bgSoft: "bg-emerald-50",
    borderSoft: "border-emerald-100",
    textCol: "text-emerald-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const partners = [
  { name: "AWS Premier", category: "Cloud Infrastructure", icon: "☁️" },
  { name: "Google Cloud Partner", category: "AI & BigQuery", icon: "🌐" },
  { name: "Microsoft Solutions", category: "Azure & Enterprise", icon: "🏢" },
  { name: "OpenAI Tech Stack", category: "Generative AI", icon: "🤖" },
  { name: "Kubernetes Ecosystem", category: "DevOps & Scaling", icon: "☸️" },
  { name: "Docker Certified", category: "Containers", icon: "🐳" },
];

function Stats() {
  return (
    <section className="relative overflow-hidden bg-white py-4 border-b border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/8 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Partner Logos / Trust Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
            Strategic Partner Ecosystem
          </div>

          <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
            Trusted by Leaders Across Enterprise, Startup & Education Sectors
          </h3>


        </div>

        {/* 4 High-Impact Metric Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bgSoft} ${stat.textCol} border ${stat.borderSoft} shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                  >
                    {stat.icon}
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 border border-slate-200/70">
                    {stat.badge}
                  </span>
                </div>

                {/* Big Metric Value with Gradient Accent */}
                <div className="mt-6">
                  <p
                    className={`font-heading text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </p>
                </div>

                {/* Label Title */}
                <h4 className="mt-3 font-heading text-base font-bold text-slate-900 transition group-hover:text-blue-600">
                  {stat.label}
                </h4>

                {/* Subtext Description */}
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom live indicator */}
              <div className="mt-6 flex items-center gap-1.5 border-t border-slate-100 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-mono text-slate-400">
                  Verified Metric
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
