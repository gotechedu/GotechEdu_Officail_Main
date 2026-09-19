"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PARTNERS = [
  {
    name: "NIELIT",
    subtext: "Ministry of Electronics & IT",
    badge: "O Level & CCC Accredited",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Digital India",
    subtext: "Power To Empower",
    badge: "National Initiative",
    color: "from-amber-600 to-orange-600",
  },
  {
    name: "PMKVY",
    subtext: "Skill Development & Ent.",
    badge: "Govt. Recognized",
    color: "from-emerald-600 to-teal-600",
  },
  {
    name: "Red Hat",
    subtext: "RHCSA & OpenShift Partner",
    badge: "Certified Enterprise Linux",
    color: "from-red-600 to-rose-700",
  },
  {
    name: "AWS Cloud",
    subtext: "Amazon Web Services",
    badge: "Cloud Architecture",
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "Microsoft Azure",
    subtext: "Enterprise Solutions",
    badge: "Cloud & DevOps",
    color: "from-blue-500 to-sky-600",
  },
  {
    name: "Google Cloud",
    subtext: "GCP & AI Ecosystem",
    badge: "Cloud & BigQuery",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Docker & K8s",
    subtext: "Container Ecosystem",
    badge: "DevOps & Scaling",
    color: "from-sky-600 to-blue-700",
  },
];

export default function PartnersCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching Reference Page 4 */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-slate-500">
            WHO WILL YOU LEARN WITH?
          </p>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Accreditations, Certifications &amp; Hiring Ecosystem
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Our curriculum and training standards are aligned with national bodies and top enterprise cloud ecosystems.
          </p>
        </div>

        {/* Partners Showcase Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div
                className={`mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${partner.color} text-white shadow-sm font-black text-sm`}
              >
                {partner.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {partner.subtext}
              </p>
              <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-0.5 text-[9px] font-bold text-blue-700 border border-slate-200/80 shadow-2xs">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Pre-Footer Action Banner Matching Reference Page 4 (Luminous Light & Vibrant Style) */}
        <div className="mt-14 sm:mt-18 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/70 to-purple-50 p-6 sm:p-10 text-slate-900 shadow-md border border-blue-200/80">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purple-400/15 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-blue-200 shadow-sm">
                <Image
                  src="/icons.png"
                  alt="GoTechEdu"
                  width={44}
                  height={44}
                  className="rounded-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-2xl font-black text-slate-950">
                  Start learning from our experts and enhance your skills
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Join 10,000+ students and professionals advancing their technical careers with GoTechEdu.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/learninghub"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/25 active:scale-100"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600 hover:scale-105 active:scale-100"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
