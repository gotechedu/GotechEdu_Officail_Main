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
  { name: "Full-Stack Next.js & React", href: "/learninghub/fullstack-nextjs" },
  { name: "Generative AI & LLM Systems", href: "/learninghub/gen-ai-agentic" },
  { name: "AWS & Azure Cloud DevOps", href: "/learninghub/cloud-devops" },
  { name: "Cybersecurity & SOC Analyst", href: "/learninghub/cybersecurity-soc" },
  { name: "Enterprise MERN Masterclass", href: "/learninghub/mern-stack" },
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
                  alt="GoTechEdu - IT Solutions & EdTech Learning Platform"
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
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/gotechedu",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/gotecheduofficial",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61593275925756",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "Email",
                  href: "mailto:gotecheduofficial@gmail.com",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.name}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-950/60 hover:text-cyan-300 hover:scale-105"
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
                  href="mailto:gotecheduofficial@gmail.com"
                  className="font-bold text-white hover:text-cyan-300 transition"
                >
                  gotecheduofficial@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-slate-500 uppercase">Direct Hotline</span>
                <a
                  href="tel:+919876543210"
                  className="font-bold text-white hover:text-cyan-300 transition"
                >
                  +91 9608094827
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/35 active:scale-100"
                >
                  <span>Schedule Consultation</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance Badges Banner */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 backdrop-blur-md shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-extrabold">
              Enterprise Compliance & Standards:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-300 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                ✓ SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                ✓ ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                ✓ GDPR & HIPAA Ready
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                ⚡ 99.99% Cloud SLA
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
