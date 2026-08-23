"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const solutionLinks = [
  { name: "Enterprise Software (ERP/CRM)", href: "/solution#software" },
  { name: "Autonomous AI & LLM Agents", href: "/solution#ai" },
  { name: "Multi-Cloud & DevOps Infrastructure", href: "/solution#cloud" },
  { name: "Cybersecurity & Zero-Trust Defense", href: "/solution#cybersecurity" },
  { name: "Data-Driven Digital Marketing", href: "/solution#marketing" },
  { name: "Custom Web & Mobile Development", href: "/solution#software" },
];

const learningLinks = [
  { name: "Full-Stack Next.js & React", href: "/learninghub" },
  { name: "Generative AI & LLM Systems", href: "/learninghub" },
  { name: "AWS & Azure Cloud DevOps", href: "/learninghub" },
  { name: "Cybersecurity & SOC Analyst", href: "/learninghub" },
  { name: "Data Science & Machine Learning", href: "/learninghub" },
  { name: "Enterprise MERN Masterclass", href: "/learninghub" },
];

const companyLinks = [
  { name: "About GotechEdu", href: "/solution" },
  { name: "Careers & Open Positions", href: "/career" },
  { name: "Engineering & Tech Blog", href: "/blog" },
  { name: "Direct Technical Inquiries", href: "/contact" },
  { name: "Why Choose GotechEdu", href: "/#why-choose-us" },
  { name: "Client Testimonials", href: "/#testimonials" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070e1b] text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-slate-800">
      {/* Background ambient glow orbs */}
      <div className="absolute left-10 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="group inline-flex items-center gap-3 active:scale-95 transition-transform">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/40 bg-slate-900 p-1 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400">
                <Image
                  src="/icons.png"
                  alt="GotechEdu Logo"
                  width={140}
                  height={140}
                  className="h-full w-full object-contain rounded-full brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                  GOTECH<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EDU</span>
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  Enterprise Solutions & EdTech
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Empowering global enterprises, startups, and learners through custom software engineering, autonomous AI systems, multi-cloud architecture, cybersecurity defense, and industry-aligned tech education.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { name: "LinkedIn", icon: "IN", href: "#" },
                { name: "Twitter / X", icon: "X", href: "#" },
                { name: "GitHub", icon: "GH", href: "#" },
                { name: "YouTube", icon: "YT", href: "#" },
                { name: "Discord", icon: "DC", href: "#" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-[11px] font-mono font-bold text-slate-300 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-950/60 hover:text-cyan-300 hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Technology Solutions
            </h3>
            <ul className="mt-5 space-y-2.5">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 transition hover:text-cyan-300 hover:translate-x-0.5 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Academy Column */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Learning Academy
            </h3>
            <ul className="mt-5 space-y-2.5">
              {learningLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 transition hover:text-cyan-300 hover:translate-x-0.5 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Consultation Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Enterprise Consultation
            </h3>
            <div className="mt-5 space-y-3.5 text-xs text-slate-400">
              <p className="leading-relaxed">
                Have a technology requirement or need an architectural audit?
              </p>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Consultation Line</span>
                <a
                  href="mailto:hello@gotechedu.com"
                  className="font-bold text-white hover:text-cyan-300 transition"
                >
                  hello@gotechedu.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Direct Hotline</span>
                <a
                  href="tel:+919876543210"
                  className="font-bold text-white hover:text-cyan-300 transition"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:opacity-95"
                >
                  Schedule Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Badges Banner */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Enterprise Compliance & Standards:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-300 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                ✓ SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                ✓ ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                ✓ GDPR & HIPAA Ready
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                ✓ 99.99% Cloud SLA
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 border-t border-slate-800/80 pt-8 flex flex-col justify-between items-center gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} GotechEdu Technologies Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-5 text-slate-400">
            <Link href="/" className="transition hover:text-cyan-300">
              Privacy Policy
            </Link>
            <Link href="/" className="transition hover:text-cyan-300">
              Terms of Service
            </Link>
            <Link href="/solution#cybersecurity" className="transition hover:text-cyan-300">
              Security & Compliance
            </Link>
            <Link href="/contact" className="transition hover:text-cyan-300">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
