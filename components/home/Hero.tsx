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
      <div className="relative z-10 mx-auto max-w-5xl px-2 sm:px-4">
        {/* Animated Top Pill Badge */}
        <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">
            Enterprise Solutions & Tech Academy
          </span>
        </div>

        {/* Main Headline (H1) */}
        <h1 className="mx-auto max-w-4xl font-heading text-[2.1rem] font-black leading-[1.14] text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)] sm:text-[2.85rem] md:text-[3.35rem] lg:text-[3.95rem] tracking-tight">
          Build the Future.{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
            Master the Technology.
          </span>
        </h1>

        {/* Sub-headline (H2) */}
        <h2 className="mx-auto mt-3 sm:mt-4 max-w-3xl font-heading text-[1.1rem] sm:text-[1.35rem] md:text-[1.55rem] font-bold text-cyan-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-tight">
          AI-Powered Learning. Intelligent IT Solutions. Business Growth.
        </h2>

        {/* Description Paragraph */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-[0.92rem] leading-6 sm:leading-7 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-[1.05rem] lg:text-[1.12rem] font-normal">
          From <strong className="font-semibold text-white">AI &amp; ML, Cloud, DevOps, Cybersecurity, and Full-Stack Development</strong> to <strong className="font-semibold text-white">IT solutions, digital marketing, and business consulting</strong> — we turn ideas into skills, systems, and scalable growth.
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-3 max-w-2xl font-mono text-[0.85rem] sm:text-[0.95rem] font-bold uppercase tracking-[0.18em] text-cyan-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Learn it. Build it. Deploy it. Grow it.
        </p>

        {/* Centered Action Buttons */}
        <div className="mt-8 sm:mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5 w-full">
          <Link
            href="/solution"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-3.5 sm:py-4 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_12px_35px_rgba(56,189,248,0.45)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_16px_45px_rgba(56,189,248,0.6)] active:scale-100"
          >
            <span>Explore Solutions</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/learninghub"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/60 px-8 py-3.5 sm:py-4 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.18em] text-white shadow-xl backdrop-blur-md transition duration-300 hover:scale-[1.04] hover:border-cyan-300 hover:bg-cyan-950/50 active:scale-100"
          >
            <span>Explore Learning Hub</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
