"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";

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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gotechedu",
    hoverStyle: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gotecheduofficial",
    hoverStyle: "hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gotechedu",
    hoverStyle: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919608094837",
    hoverStyle: "hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:gotecheduoffical@gmail.com",
    hoverStyle: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600",
    icon: (
      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-50/95 text-slate-700 pt-16 sm:pt-20 pb-10 border-t border-slate-200/90">
      {/* Background Focus with Technology Architecture Photo & Light Soft Glows */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <Image
          src="/assets/pillars/tech.jpg"
          alt="Technology Infrastructure Background"
          fill
          className="object-cover object-center opacity-[0.07] filter contrast-125 saturate-150 transition-transform duration-1000 scale-105"
        />
        {/* Soft light gradient overlay for maximum readability & high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-white/85 to-slate-100/95 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/50 via-indigo-500/50 to-transparent" />
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-purple-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200/90">
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-transform active:scale-95"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white p-1 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-md">
                <Image
                  src="/icons.png"
                  alt="GoTechEdu"
                  width={140}
                  height={140}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                  GOTECH
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    EDU
                  </span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-blue-600">
                  Enterprise Solutions &amp; EdTech
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 max-w-sm">
              Empowering global enterprises, startups, and learners through
              custom software engineering, autonomous AI systems, multi-cloud
              architecture, cybersecurity defense, and industry-aligned tech
              education.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-xs transition-all duration-300 hover:scale-110 hover:shadow-md ${item.hoverStyle}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Technology Solutions Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-slate-950 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Technology Solutions
            </h3>
            <ul className="space-y-2.5 pt-1">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 transition-colors duration-200 hover:text-blue-600"
                  >
                    <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600">
                      ›
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Academy Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-slate-950 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Learning Academy
            </h3>
            <ul className="space-y-2.5 pt-1">
              {learningLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 transition-colors duration-200 hover:text-blue-600"
                  >
                    <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600">
                      ›
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Consultation Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-slate-950 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-600" />
              Enterprise Consultation
            </h3>

            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Have a technology requirement or need an architectural audit?
              </p>

              <div className="border-t border-slate-100 pt-2 space-y-2">
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Consultation Line
                  </span>
                  <a
                    href="mailto:gotecheduoffical@gmail.com"
                    className="block text-xs font-bold text-slate-900 hover:text-blue-600 transition truncate mt-0.5"
                  >
                    gotecheduoffical@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Direct Hotline
                  </span>
                  <a
                    href="tel:+919608094837"
                    className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition mt-0.5"
                  >
                    +91 9608094837
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-100"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2022 GotechEdu. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-slate-500 text-xs">
            <Link href="/" className="transition hover:text-blue-600">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/" className="transition hover:text-blue-600">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/solution#cybersecurity" className="transition hover:text-blue-600">
              Security &amp; Compliance
            </Link>
            <span>•</span>
            <Link href="/contact" className="transition hover:text-blue-600">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
