"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Users2, Target, Briefcase } from "lucide-react";

export default function AboutSection() {
  const benefits = [
    {
      title: "Government & Globally Certified",
      desc: "Accredited credentials aligned with industry benchmarks and enterprise standards.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Real Skills, Real Enterprise Projects",
      desc: "Zero outdated theory. Build production-grade software, AI agents & cloud pipelines.",
      icon: <Target className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: "Affordable Fees with Maximum Value",
      desc: "Flexible installment options, merit-based grants, and world-class ROI.",
      icon: <Award className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: "Placement Support & Career Guidance",
      desc: "Dedicated resume reviews, technical mock interviews, and hiring drives with 150+ partners.",
      icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Experienced & Industry-Smart Faculty",
      desc: "Direct 1-on-1 mentorship by principal architects and senior developers.",
      icon: <Users2 className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-t border-slate-100"
    >
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Welcome Headline with Left Accent Bar (Signature Reference Style) */}
        <div className="flex items-start gap-4 sm:gap-6 max-w-4xl">
          {/* Vertical Accent Bar */}
          <div className="w-2 sm:w-2.5 self-stretch rounded-full bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 shrink-0 shadow-sm" />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[11px] font-mono font-extrabold uppercase tracking-wider text-blue-700">
              About GoTechEdu
            </div>
            <h2 className="mt-2.5 font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 leading-[1.2]">
              Welcome to GoTechEdu — Your Gateway to a{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Future-Ready Career!
              </span>
            </h2>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Staggered Imagery + Floating Trust Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Image */}
              <div className="relative z-10 overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-slate-300/60 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/assets/pillars/training.jpg"
                  alt="GoTechEdu Training and Technology Labs"
                  width={600}
                  height={450}
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600 text-[10px] font-bold uppercase tracking-wider">
                    Hands-on Lab Setup
                  </span>
                  <p className="mt-1 text-sm font-bold text-slate-100">
                    Real-world development environment & live servers
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image (Staggered Offset) */}
              <div className="hidden sm:block absolute -top-8 -right-6 z-0 w-48 h-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl rotate-3 transition-transform duration-500 hover:rotate-0">
                <Image
                  src="/assets/pillars/tech.jpg"
                  alt="Modern Coding Workspace"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tertiary Accent Image */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-0 w-40 h-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl -rotate-6 transition-transform duration-500 hover:rotate-0">
                <Image
                  src="/assets/pillars/talent.jpg"
                  alt="Mentorship & Team Collaboration"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Trust Badge matching Reference Page 2 */}
              <div className="absolute -bottom-6 right-2 sm:right-6 z-20 flex items-center gap-3.5 rounded-2xl border border-blue-100 bg-white/95 p-3.5 sm:p-4 shadow-xl shadow-blue-900/10 backdrop-blur-md transition-transform duration-300 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-xs">★</span>
                    ))}
                  </div>
                  <p className="font-heading text-sm font-black text-slate-900">
                    Trusted by
                  </p>
                  <p className="text-[11px] font-medium text-slate-500">
                    Students & Enterprise Clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose GoTechEdu & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We focus on job-oriented skills that the market demands. No theory overload –
                just pure practical knowledge that gets you hired. Every student gets hands-on
                practice in a modern lab setup, with individual attention and real-world tasks.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900">
                Why Choose GoTechEdu?
              </h3>

              {/* Feature Checklist matching Reference Page 2 */}
              <div className="mt-5 space-y-3.5">
                {benefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-3.5 rounded-xl p-2.5 transition-all hover:bg-slate-50"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button matching Reference */}
            <div className="pt-4">
              <Link
                href="/learninghub"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/35 active:scale-100"
              >
                <span>VIEW ALL COURSES & TRACKS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
