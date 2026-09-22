"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Users,
  TrendingUp,
  Sparkles,
  BookOpen,
  Cloud,
  Shield,
  Layers,
  ChevronRight,
  Compass,
  Clock,
  Lock,
} from "lucide-react";

interface SolutionCard {
  id: string;
  num: string;
  title: string;
  description: string;
  href: string;
  features: string[];
  image: string;
  accentColor: string;
  badgeBg: string;
  dotBg: string;
  arrowBg: string;
  orbitNode: string;
  orbitIcon: React.ReactNode;
  orbitLabel: string;
  glowColor: string;
}

const leftSolutions: SolutionCard[] = [
  {
    id: "tech-solutions",
    num: "01",
    title: "Tech Solutions",
    description:
      "Custom web, mobile & enterprise ERP/CRM systems built for performance, scale and reliability.",
    href: "/solution#software",
    features: [
      "Custom ERP & CRM",
      "Next.js & Mobile Apps",
      "High-Load Microservices",
    ],
    image: "/assets/solutions/tech-3d.jpg",
    accentColor: "text-blue-600",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    dotBg: "bg-blue-600 text-white",
    arrowBg: "bg-blue-600 text-white group-hover:bg-blue-700",
    orbitNode: "build",
    orbitIcon: <Users className="w-3.5 h-3.5" />,
    orbitLabel: "BUILD",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: "ai-solutions",
    num: "02",
    title: "AI Solutions",
    description:
      "Autonomous AI agents, enterprise RAG search pipelines, and custom fine-tuned LLMs.",
    href: "/solution#ai",
    features: ["Autonomous Agents", "Enterprise RAG", "Fine-Tuned LLMs"],
    image: "/assets/solutions/ai-3d.jpg",
    accentColor: "text-purple-600",
    badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
    dotBg: "bg-purple-600 text-white",
    arrowBg: "bg-purple-600 text-white group-hover:bg-purple-700",
    orbitNode: "grow",
    orbitIcon: <TrendingUp className="w-3.5 h-3.5" />,
    orbitLabel: "GROW",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "cloud-devops",
    num: "03",
    title: "Cloud & DevOps",
    description:
      "Scalable multi-cloud architecture (AWS/Azure/GCP) with Kubernetes & 99.99% uptime SLA.",
    href: "/solution#cloud",
    features: [
      "Multi-Cloud AWS/GCP",
      "Kubernetes Clusters",
      "Zero-Downtime CI/CD",
    ],
    image: "/assets/solutions/cloud-3d.jpg",
    accentColor: "text-amber-600",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-700",
    dotBg: "bg-amber-600 text-white",
    arrowBg: "bg-amber-600 text-white group-hover:bg-amber-700",
    orbitNode: "secure",
    orbitIcon: <Shield className="w-3.5 h-3.5" />,
    orbitLabel: "SECURE",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
];

const rightSolutions: SolutionCard[] = [
  {
    id: "cyber-security",
    num: "04",
    title: "Cyber Security",
    description:
      "Zero-Trust security architecture, SOC 2 compliance, penetration testing & 24/7 SIEM monitoring.",
    href: "/solution#cybersecurity",
    features: [
      "Zero-Trust Defense",
      "SOC 2 Compliance",
      "24/7 SIEM Monitoring",
    ],
    image: "/assets/solutions/security-3d.jpg",
    accentColor: "text-emerald-600",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dotBg: "bg-emerald-600 text-white",
    arrowBg: "bg-emerald-600 text-white group-hover:bg-emerald-700",
    orbitNode: "innovate",
    orbitIcon: <Sparkles className="w-3.5 h-3.5" />,
    orbitLabel: "INNOVATE",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "digital-growth",
    num: "05",
    title: "Digital Growth",
    description:
      "Data-driven SEO, performance marketing funnels, CRO, and B2B growth acquisition.",
    href: "/solution#marketing",
    features: [
      "Data-Driven SEO",
      "Conversion Rate (CRO)",
      "B2B Lead Acquisition",
    ],
    image: "/assets/solutions/growth-3d.jpg",
    accentColor: "text-rose-600",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
    dotBg: "bg-rose-600 text-white",
    arrowBg: "bg-rose-600 text-white group-hover:bg-rose-700",
    orbitNode: "scale",
    orbitIcon: <Cloud className="w-3.5 h-3.5" />,
    orbitLabel: "SCALE",
    glowColor: "rgba(244, 63, 94, 0.15)",
  },
  {
    id: "tech-academy",
    num: "06",
    title: "Tech Academy",
    description:
      "Industry-aligned bootcamps, corporate engineering upskilling, and 1-on-1 career mentorship.",
    href: "/learninghub",
    features: [
      "1-on-1 Mentorship",
      "Corporate Bootcamps",
      "Hands-on Production Code",
    ],
    image: "/assets/solutions/academy-3d.jpg",
    accentColor: "text-indigo-600",
    badgeBg: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dotBg: "bg-indigo-600 text-white",
    arrowBg: "bg-indigo-600 text-white group-hover:bg-indigo-700",
    orbitNode: "learn",
    orbitIcon: <BookOpen className="w-3.5 h-3.5" />,
    orbitLabel: "LEARN",
    glowColor: "rgba(99, 102, 241, 0.15)",
  },
];

const allSolutions = [...leftSolutions, ...rightSolutions];

export default function SolutionsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-24 border-t border-slate-100"
    >
      {/* Background Architectural Grid & Subtle Radial Glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b818_1px,transparent_1px)] [background-size:24px_24px] opacity-80" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-blue-100/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1 text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-blue-700 shadow-2xs">
            OUR SOLUTIONS
          </div>

          {/* Decorative Corner Note (Desktop) */}
          <div className="hidden lg:block absolute right-[-80px] top-[-10px] text-right">
            <span className="font-serif italic text-sm text-slate-400 font-medium rotate-6 inline-block">
              Technology <br />
              <span className="text-blue-500 font-semibold">
                for a better tomorrow
              </span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
            End-to-End Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Every Growth Stage
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From custom software engineering and AI automation to multi-cloud
            infrastructure, cyber security defense, and tech training—we are
            your full-spectrum technology partner.
          </p>

          {/* Micro Progression Text */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-serif italic text-slate-400">
            <span>Ideas</span>
            <span className="text-slate-300">→</span>
            <span>Build</span>
            <span className="text-slate-300">→</span>
            <span>Scale</span>
            <span className="text-slate-300">→</span>
            <span className="text-blue-600 font-medium">Impact</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Main Diagram & Solutions Showcase (Desktop 3-Column Nexus) */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Desktop Layout (xl and up): Left 3 Cards | Center Globe & Wires | Right 3 Cards */}
          <div className="hidden xl:grid xl:grid-cols-12 gap-6 items-center">
            {/* Left Column: Cards 01, 02, 03 */}
            <div className="col-span-4 space-y-6">
              {leftSolutions.map((card) => (
                <SolutionCardItem
                  key={card.id}
                  card={card}
                  isHovered={activeCard === card.id}
                  onHover={() => setActiveCard(card.id)}
                  onLeave={() => setActiveCard(null)}
                  align="left"
                />
              ))}
            </div>

            {/* Center Column: Interactive Globe & Orbit Nexus with SVG Bezier Connectors */}
            <div className="col-span-4 relative flex flex-col items-center justify-center h-full min-h-[580px]">
              {/* Dynamic SVG Connecting Curves to Left and Right Cards */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full -z-0 overflow-visible"
                viewBox="0 0 400 580"
                fill="none"
              >
                {/* Wires to Left Cards */}
                {/* Top-Left wire from BUILD node (150, 200) to Left 01 (0, 80) */}
                <path
                  d="M 140 230 C 70 210, 50 100, 0 85"
                  stroke={
                    activeCard === "tech-solutions" ? "#2563eb" : "#93c5fd"
                  }
                  strokeWidth={activeCard === "tech-solutions" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "tech-solutions" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="0"
                  cy="85"
                  r={activeCard === "tech-solutions" ? 5 : 3.5}
                  fill="#2563eb"
                  className="transition-all duration-300"
                />

                {/* Middle-Left wire from Center to Left 02 (0, 290) */}
                <path
                  d="M 110 290 C 60 290, 40 290, 0 290"
                  stroke={activeCard === "ai-solutions" ? "#9333ea" : "#d8b4fe"}
                  strokeWidth={activeCard === "ai-solutions" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "ai-solutions" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="0"
                  cy="290"
                  r={activeCard === "ai-solutions" ? 5 : 3.5}
                  fill="#9333ea"
                  className="transition-all duration-300"
                />

                {/* Bottom-Left wire from SECURE node (140, 370) to Left 03 (0, 495) */}
                <path
                  d="M 140 360 C 70 380, 50 480, 0 495"
                  stroke={activeCard === "cloud-devops" ? "#d97706" : "#fcd34d"}
                  strokeWidth={activeCard === "cloud-devops" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "cloud-devops" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="0"
                  cy="495"
                  r={activeCard === "cloud-devops" ? 5 : 3.5}
                  fill="#d97706"
                  className="transition-all duration-300"
                />

                {/* Wires to Right Cards */}
                {/* Top-Right wire from INNOVATE node (260, 230) to Right 04 (400, 85) */}
                <path
                  d="M 260 230 C 330 210, 350 100, 400 85"
                  stroke={
                    activeCard === "cyber-security" ? "#059669" : "#6ee7b7"
                  }
                  strokeWidth={activeCard === "cyber-security" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "cyber-security" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="400"
                  cy="85"
                  r={activeCard === "cyber-security" ? 5 : 3.5}
                  fill="#059669"
                  className="transition-all duration-300"
                />

                {/* Middle-Right wire from Center to Right 05 (400, 290) */}
                <path
                  d="M 290 290 C 340 290, 360 290, 400 290"
                  stroke={
                    activeCard === "digital-growth" ? "#e11d48" : "#fda4af"
                  }
                  strokeWidth={activeCard === "digital-growth" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "digital-growth" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="400"
                  cy="290"
                  r={activeCard === "digital-growth" ? 5 : 3.5}
                  fill="#e11d48"
                  className="transition-all duration-300"
                />

                {/* Bottom-Right wire from LEARN node (260, 360) to Right 06 (400, 495) */}
                <path
                  d="M 260 360 C 330 380, 350 480, 400 495"
                  stroke={activeCard === "tech-academy" ? "#4f46e5" : "#a5b4fc"}
                  strokeWidth={activeCard === "tech-academy" ? 2.5 : 1.5}
                  strokeDasharray={
                    activeCard === "tech-academy" ? "none" : "3 3"
                  }
                  className="transition-all duration-300"
                />
                <circle
                  cx="400"
                  cy="495"
                  r={activeCard === "tech-academy" ? 5 : 3.5}
                  fill="#4f46e5"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Central Globe Body */}
              <div className="relative flex items-center justify-center">
                {/* Pulsing Light Rings */}
                <div className="absolute h-72 w-72 rounded-full border border-blue-200/50 bg-blue-50/20 shadow-inner animate-pulse" />
                <div className="absolute h-84 w-84 rounded-full border border-indigo-100/40" />

                {/* Main Luminous Translucent Globe */}
                <div className="relative flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-100 shadow-[0_0_50px_rgba(59,130,246,0.18)] border-2 border-white/80 overflow-hidden">
                  {/* Subtle Wireframe Latitude/Longitude lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 w-full rounded-full border border-blue-300/30 opacity-70 rotate-12" />
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 w-full rounded-full border border-indigo-300/30 opacity-70 -rotate-12" />

                  {/* City Skyline & Clouds silhouette subtle bottom blend */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-blue-200/40 to-transparent" />

                  {/* Center Content */}
                  <div className="relative text-center px-4 z-10">
                    <span className="block font-heading text-lg font-bold text-slate-800 leading-tight">
                      Your
                    </span>
                    <span className="block font-heading text-xl font-extrabold tracking-tight text-slate-950">
                      Growth Partner
                    </span>
                    <div className="mt-2 h-0.5 w-10 mx-auto bg-slate-300" />
                    <span className="mt-2 block text-[9px] font-mono font-bold tracking-widest text-slate-600 uppercase">
                      PEOPLE | TECHNOLOGY | IMPACT
                    </span>
                  </div>
                </div>

                {/* 6 Orbiting Satellite Nodes */}
                {/* 1. TOP: GROW */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-500/30 transition-transform hover:scale-110">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    GROW
                  </span>
                </div>

                {/* 2. TOP RIGHT: INNOVATE */}
                <div className="absolute top-7 right-[-8px] z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-500/30 transition-transform hover:scale-110">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    INNOVATE
                  </span>
                </div>

                {/* 3. BOTTOM RIGHT: LEARN */}
                <div className="absolute bottom-7 right-[-8px] z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-500/30 transition-transform hover:scale-110">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    LEARN
                  </span>
                </div>

                {/* 4. BOTTOM: SCALE */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-md shadow-sky-500/30 transition-transform hover:scale-110">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    SCALE
                  </span>
                </div>

                {/* 5. BOTTOM LEFT: SECURE */}
                <div className="absolute bottom-7 left-[-8px] z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-md shadow-amber-500/30 transition-transform hover:scale-110">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    SECURE
                  </span>
                </div>

                {/* 6. TOP LEFT: BUILD */}
                <div className="absolute top-7 left-[-8px] z-20 flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-md shadow-blue-500/30 transition-transform hover:scale-110">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[9px] font-mono font-black tracking-wider text-slate-600">
                    BUILD
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Cards 04, 05, 06 */}
            <div className="col-span-4 space-y-6">
              {rightSolutions.map((card) => (
                <SolutionCardItem
                  key={card.id}
                  card={card}
                  isHovered={activeCard === card.id}
                  onHover={() => setActiveCard(card.id)}
                  onLeave={() => setActiveCard(null)}
                  align="right"
                />
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* Responsive Layout for Tablets & Mobile (< xl)             */}
          {/* ========================================================= */}
          <div className="xl:hidden space-y-8">
            {/* Center Growth Hub Summary Banner */}
            <div className="mx-auto max-w-md rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50 p-6 text-center shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-black text-slate-900">
                  Your Growth Partner
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                PEOPLE · TECHNOLOGY · IMPACT
              </p>

              {/* Mobile Orbit Nodes Row */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {[
                  { label: "BUILD", color: "bg-blue-100 text-blue-700" },
                  { label: "GROW", color: "bg-cyan-100 text-cyan-700" },
                  {
                    label: "INNOVATE",
                    color: "bg-emerald-100 text-emerald-700",
                  },
                  { label: "LEARN", color: "bg-indigo-100 text-indigo-700" },
                  { label: "SCALE", color: "bg-sky-100 text-sky-700" },
                  { label: "SECURE", color: "bg-amber-100 text-amber-700" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* 6 Responsive Cards (2 columns on md/lg, 1 column on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allSolutions.map((card) => (
                <SolutionCardItem
                  key={card.id}
                  card={card}
                  isHovered={activeCard === card.id}
                  onHover={() => setActiveCard(card.id)}
                  onLeave={() => setActiveCard(null)}
                  align="responsive"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Subcomponent for individual solution card matching the visual design
function SolutionCardItem({
  card,
  isHovered,
  onHover,
  onLeave,
  align,
}: {
  card: SolutionCard;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  align: "left" | "right" | "responsive";
}) {
  return (
    <Link
      href={card.href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isHovered
          ? "border-blue-400 shadow-lg shadow-blue-500/10 ring-1 ring-blue-400"
          : "border-slate-200/90 shadow-sm"
      }`}
    >
      {/* Top Card Row: Number badge, Title & Description */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Card Number & Title */}
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-xs sm:text-sm font-extrabold ${card.accentColor}`}
            >
              {card.num}
            </span>
            <h3 className="font-heading text-base sm:text-lg font-black text-slate-950 group-hover:text-blue-600 transition-colors">
              {card.title}
            </h3>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            {card.description}
          </p>

          {/* Feature Bullet List */}
          <ul className="mt-3.5 space-y-1.5">
            {card.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs font-medium text-slate-700"
              >
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${card.dotBg} text-[10px] shrink-0`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3D Illustration Thumbnail Preview */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center"
          />
          {/* Soft ambient tint */}
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity"
            style={{ backgroundColor: card.glowColor }}
          />
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold ${card.accentColor} group-hover:translate-x-0.5 transition-transform`}
        >
          <span>Learn More</span>
          <span>→</span>
        </span>

        {/* Circular Arrow Button */}
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${card.arrowBg}`}
        >
          <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
