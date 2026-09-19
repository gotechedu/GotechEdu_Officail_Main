"use client";

import React from "react";
import { Users2, BookOpenCheck, GraduationCap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionStats() {
  const stats = [
    {
      number: "100+",
      label: "Pro Teachers & Mentors",
      desc: "Top industry architects, senior developers, and certified trainers.",
      icon: <Users2 className="w-8 h-8 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-100",
      numberColor: "from-blue-600 via-blue-700 to-indigo-700",
      borderHover: "hover:border-blue-400 hover:shadow-blue-500/10",
    },
    {
      number: "1,000+",
      label: "Skill Courses & Practical Labs",
      desc: "Job-aligned technical curriculums and production repository modules.",
      icon: <BookOpenCheck className="w-8 h-8 text-indigo-600" />,
      iconBg: "bg-indigo-50 border-indigo-100",
      numberColor: "from-indigo-600 via-purple-600 to-blue-600",
      borderHover: "hover:border-indigo-400 hover:shadow-indigo-500/10",
    },
    {
      number: "10,000+",
      label: "Students Enrolled & Placed",
      desc: "Empowered across engineering bootcamps and corporate academies.",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      iconBg: "bg-purple-50 border-purple-100",
      numberColor: "from-purple-600 via-indigo-600 to-pink-600",
      borderHover: "hover:border-purple-400 hover:shadow-purple-500/10",
    },
  ];

  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-white py-18 sm:py-24 border-t border-slate-100"
    >
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Mission Statement Header matching Reference Page 3 */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            Core Mission &amp; Purpose
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Our Mission: Empowering Every Student for a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Digital Tomorrow
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We aim to equip every student with real, job-ready computer and software engineering
            skills through affordable, practical, and high-quality training.
            <span className="block mt-2 font-semibold text-blue-600">
              At GoTechEdu, we don&apos;t just teach — we prepare you for success.
            </span>
          </p>
        </div>

        {/* 3 Modern Light Stat Cards Matching Reference Page 3 */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col items-center text-center rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl ${stat.borderHover}`}
            >
              {/* Icon Container */}
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border ${stat.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-110`}
              >
                {stat.icon}
              </div>

              {/* Stat Number */}
              <div
                className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r ${stat.numberColor} bg-clip-text text-transparent`}
              >
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {stat.label}
              </h3>

              {/* Subtext */}
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Learn more about GoTechEdu enterprise technology solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
