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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Client Success
            </span>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Trusted by Engineering & Executive Leaders.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              See how our software solutions, AI automation, and training
              programs drive real enterprise impact.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Smooth Moving Marquee (Left to Right) */}
      <div
        ref={scrollContainerRef}
        className="relative mt-12 w-full overflow-x-hidden py-4"
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
              className="group relative flex w-[340px] sm:w-[400px] shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-slate-50/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl"
            >
              {/* Top Accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* 5 Stars Rating & Metric Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400 tracking-tight">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-base">
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100 shadow-2xs">
                    {t.metrics}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm leading-relaxed text-slate-700 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-7 flex items-center gap-3.5 border-t border-slate-200/70 pt-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-extrabold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105 ${t.avatarBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
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
