"use client";

import React, { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "GotechEdu transformed our legacy ERP into a high-speed microservices architecture. Their team delivered on time with zero downtime during migration.",
    author: "Vikram Sharma",
    role: "CTO, FinTech Global Enterprise",
    rating: 5,
    metrics: "3.5x Performance Boost",
    initials: "VS",
    avatarBg: "bg-blue-600 text-white",
  },
  {
    id: 2,
    quote:
      "The custom AI agent pipeline built by GotechEdu reduced our customer support triage time by 75%. Their AI expertise is world-class.",
    author: "Elena Rostova",
    role: "VP of Product, HealthTech Solutions",
    rating: 5,
    metrics: "75% Faster Resolution",
    initials: "ER",
    avatarBg: "bg-indigo-600 text-white",
  },
  {
    id: 3,
    quote:
      "Our team completed GotechEdu's corporate Cloud & DevOps bootcamp. The practical skills learned directly empowered our internal dev teams.",
    author: "Rajesh Kumar",
    role: "Head of Engineering, EduCorp",
    rating: 5,
    metrics: "120 Developers Upskilled",
    initials: "RK",
    avatarBg: "bg-cyan-600 text-white",
  },
  {
    id: 4,
    quote:
      "Their multi-cloud migration and Kubernetes setup enabled us to achieve 99.99% uptime during peak holiday traffic with zero performance bottlenecks.",
    author: "Sarah Jenkins",
    role: "Chief Digital Officer, Global Commerce",
    rating: 5,
    metrics: "99.99% Cloud SLA",
    initials: "SJ",
    avatarBg: "bg-emerald-600 text-white",
  },
  {
    id: 5,
    quote:
      "The predictive analytics and LLM workflows engineered by GotechEdu accelerated our research pipeline by 4x. Outstanding execution from start to finish.",
    author: "David Chen",
    role: "Co-Founder & CEO, ScaleAI Labs",
    rating: 5,
    metrics: "4x Faster Time-to-Market",
    initials: "DC",
    avatarBg: "bg-purple-600 text-white",
  },
  {
    id: 6,
    quote:
      "GotechEdu's hands-on technology curriculum and mentorship produced job-ready full-stack developers who integrated seamlessly into our production squads.",
    author: "Ananya Iyer",
    role: "Director of Tech Talent, Apex Systems",
    rating: 5,
    metrics: "98% Placement Success",
    initials: "AI",
    avatarBg: "bg-amber-600 text-white",
  },
];

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 backdrop-blur-sm shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                Client Success
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Trusted by Engineering & Executive Leaders.
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              See how our custom software solutions, autonomous AI systems, and workforce training programs drive measurable impact.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Smooth Moving Marquee */}
      <div
        ref={scrollContainerRef}
        className="relative mt-14 w-full overflow-x-hidden py-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className={`animate-marquee-ltr flex gap-6 px-4 ${isPaused ? "[animation-play-state:paused]" : ""
            }`}
        >
          {/* Render cards doubled for seamless continuous left-to-right looping */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="group relative flex w-[340px] sm:w-[410px] shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-slate-50/60 p-7 shadow-xs transition-all duration-300 hover:-translate-y-2.5 hover:border-blue-300 hover:bg-white hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
            >
              {/* Top Accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* 5 Stars Rating & Metric Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400 tracking-tight drop-shadow-xs">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-base">
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="rounded-full bg-blue-50/90 px-3 py-1 text-[11px] font-extrabold text-blue-700 border border-blue-200/60 shadow-2xs">
                    {t.metrics}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-700 italic font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-7 flex items-center gap-3.5 border-t border-slate-200/80 pt-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black text-sm shadow-md transition-transform duration-300 group-hover:scale-105 ${t.avatarBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t.author}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
