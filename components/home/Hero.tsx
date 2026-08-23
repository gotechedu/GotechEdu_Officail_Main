"use client";

import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[320px] sm:min-h-[420px] lg:min-h-[420px] flex-col justify-center overflow-hidden bg-[#070e1b] px-4 pt-14 pb-20 text-center sm:px-6 sm:pt-16 sm:pb-28 lg:px-8 lg:pt-20 lg:pb-32"
    >
      {/* Full Background Video */}
      <video
        src="/assets/Gotech_EdTech_One_More_Solution.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
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

      {/* Ambient Lightened Overlay for Video Visibility & High Text Contrast */}
      <div className="absolute inset-0 bg-[#070e1b]/35 bg-gradient-to-b from-[#070e1b]/50 via-transparent to-[#070e1b]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b]/40 via-transparent to-[#070e1b]/40 pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

      {/* Centered Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-2 sm:px-4">
        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl font-heading text-[1.95rem] font-bold leading-[1.14] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] sm:text-[2.65rem] md:text-[3.15rem] lg:text-[3.75rem] tracking-tight">
          Next-Gen EdTech. Intelligent IT Solutions. Cloud & AI.
        </h1>

        {/* First Paragraph */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-[0.88rem] leading-6 sm:leading-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[1rem] lg:text-[1.05rem]">
          We help businesses and learners scale through intelligent EdTech
          platforms, custom IT solutions, multi-cloud architecture, and
          artificial intelligence.
        </p>

        {/* Second Sub-line Paragraph */}
        <p className="mx-auto mt-2.5 sm:mt-3 max-w-3xl text-[0.8rem] leading-5 sm:leading-6 text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-[0.88rem]">
          Integrated solutions across EdTech, Enterprise Software, Multi-Cloud
          DevOps, and Autonomous AI.
        </p>

        {/* Centered Action Buttons (Mobile-friendly responsive stack / row) */}
        <div className="mt-7 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 w-full">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#38bdf8] px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(56,189,248,0.35)] transition duration-300 hover:scale-[1.03] hover:bg-[#0ea5e9] active:scale-100"
          >
            Book a Consultation
          </Link>

          <Link
            href="/solution"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-black/40 px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md transition duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/20 active:scale-100"
          >
            Explore Solutions
          </Link>
        </div>
      </div>

      {/* Smooth Curved Arc Transition into Next Section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 sm:h-20 bg-gradient-to-t from-[#070e1b] to-transparent" />
      <div className="absolute -bottom-16 sm:-bottom-24 left-1/2 z-10 h-32 sm:h-44 w-[140%] sm:w-[122%] -translate-x-1/2 rounded-[100%] bg-white pointer-events-none" />
    </section>
  );
}

export default Hero;
