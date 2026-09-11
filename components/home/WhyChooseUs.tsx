"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

// ==========================================
// 3D-STYLE ILLUSTRATION COMPONENTS (PIXEL-PERFECT VECTOR ART)
// ==========================================

/**
 * 01: 3D Rising Bar Chart with Growth Arrow
 */
const BarChartIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="barFront1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="barFront2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="barFront3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="barTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#bfdbfe" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
      <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <filter id="arrowShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#1e3a8a" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Bar 1 (Short) */}
    <path d="M18 55 L28 50 L28 82 L18 87 Z" fill="url(#barFront1)" />
    <path d="M28 50 L36 54 L36 86 L28 82 Z" fill="#1d4ed8" opacity="0.6" />
    <path d="M18 55 L26 51 L36 54 L28 50 Z" fill="url(#barTop)" />

    {/* Bar 2 (Medium) */}
    <path d="M38 42 L48 37 L48 80 L38 85 Z" fill="url(#barFront2)" />
    <path d="M48 37 L56 41 L56 84 L48 80 Z" fill="#1e40af" opacity="0.6" />
    <path d="M38 42 L46 38 L56 41 L48 37 Z" fill="url(#barTop)" />

    {/* Bar 3 (Tall) */}
    <path d="M58 28 L68 23 L68 78 L58 83 Z" fill="url(#barFront3)" />
    <path d="M68 23 L76 27 L76 82 L68 78 Z" fill="#172554" opacity="0.6" />
    <path d="M58 28 L66 24 L76 27 L68 23 Z" fill="url(#barTop)" />

    {/* Rising Growth Arrow */}
    <g filter="url(#arrowShadow)">
      <path
        d="M20 62 C34 50, 52 35, 78 17"
        stroke="url(#arrowGrad)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <polygon points="75,10 90,14 83,27" fill="#2563eb" />
      <polygon points="76,12 87,15 82,24" fill="#60a5fa" />
    </g>
  </svg>
);

/**
 * 02: 3D Rapid Rocket Blasting Off
 */
const RocketIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="rocketNose" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="rocketFin" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="rocketWindow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="1" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="60%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>

    {/* Exhaust flame smoke */}
    <path
      d="M32 68 C24 74, 18 80, 16 88 C24 86, 30 80, 36 72 Z"
      fill="url(#flameGrad)"
      opacity="0.9"
    />
    <path
      d="M30 66 C26 70, 22 75, 20 80 C25 78, 28 75, 32 68 Z"
      fill="#fef08a"
    />

    {/* Rocket Engine Nozzle */}
    <polygon points="31,64 39,72 35,76 27,68" fill="#475569" />

    {/* Left & Right Wings */}
    <path d="M40 50 L26 62 L33 70 L47 58 Z" fill="url(#rocketFin)" />
    <path d="M54 36 L66 50 L58 57 L46 43 Z" fill="url(#rocketFin)" />

    {/* Rocket Center Dorsal Fin */}
    <path d="M44 46 L38 52 L43 57 L49 51 Z" fill="#047857" />

    {/* Rocket Main Fuselage */}
    <path
      d="M36 60 C38 48, 54 32, 68 18 C78 28, 64 46, 50 64 C42 63, 38 61, 36 60 Z"
      fill="url(#rocketBody)"
    />

    {/* Rocket Nose Cone */}
    <path
      d="M60 26 C66 20, 72 14, 76 10 C72 14, 66 20, 52 34 L60 26 Z"
      fill="url(#rocketNose)"
    />
    <path
      d="M60 26 C68 18, 76 10, 76 10 C76 10, 68 18, 52 34 C55 31, 57 28, 60 26 Z"
      fill="#10b981"
    />

    {/* Porthole Window */}
    <circle cx="53" cy="38" r="7" fill="#64748b" />
    <circle cx="53" cy="38" r="5" fill="url(#rocketWindow)" />
    <ellipse cx="51.5" cy="36.5" rx="1.8" ry="1.2" fill="#ffffff" opacity="0.8" />
  </svg>
);

/**
 * 03: 3D Purple Security Shield with Padlock
 */
const SecurityShieldIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shieldBorder" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="shieldInner" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#581c87" />
      </linearGradient>
      <linearGradient id="lockShackle" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <linearGradient id="lockBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>

    {/* Shield Outer 3D Bevel */}
    <path
      d="M50 12 L78 24 C78 52, 65 74, 50 86 C35 74, 22 52, 22 24 L50 12 Z"
      fill="url(#shieldBorder)"
    />

    {/* Shield Inner Surface */}
    <path
      d="M50 17 L73 27 C73 50, 62 70, 50 80 C38 70, 27 50, 27 27 L50 17 Z"
      fill="url(#shieldInner)"
    />

    {/* Shield Left Highlight Reflection */}
    <path
      d="M50 17 L50 80 C38 70, 27 50, 27 27 L50 17 Z"
      fill="#ffffff"
      opacity="0.12"
    />

    {/* Padlock Shackle */}
    <path
      d="M42 46 V38 C42 33, 58 33, 58 38 V46"
      stroke="url(#lockShackle)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Padlock Body */}
    <rect
      x="37"
      y="45"
      width="26"
      height="21"
      rx="4.5"
      fill="url(#lockBody)"
      stroke="#c084fc"
      strokeWidth="1"
    />

    {/* Padlock Keyhole */}
    <circle cx="50" cy="53" r="2.5" fill="#581c87" />
    <polygon points="48.5,53 51.5,53 52,60 48,60" fill="#581c87" />
  </svg>
);

/**
 * 04: 3D Warm Orange AI Chip Processor
 */
const AIChipIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
      <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="innerPlate" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff7ed" />
        <stop offset="100%" stopColor="#ffedd5" />
      </linearGradient>
    </defs>

    {/* Top Pins */}
    <rect x="36" y="15" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />
    <rect x="48" y="15" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />
    <rect x="60" y="15" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />

    {/* Bottom Pins */}
    <rect x="36" y="75" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />
    <rect x="48" y="75" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />
    <rect x="60" y="75" width="4.5" height="10" rx="2" fill="url(#pinGrad)" />

    {/* Left Pins */}
    <rect x="15" y="36" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />
    <rect x="15" y="48" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />
    <rect x="15" y="60" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />

    {/* Right Pins */}
    <rect x="75" y="36" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />
    <rect x="75" y="48" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />
    <rect x="75" y="60" width="10" height="4.5" rx="2" fill="url(#pinGrad)" />

    {/* Main Chip Body Base */}
    <rect
      x="23"
      y="23"
      width="54"
      height="54"
      rx="12"
      fill="url(#chipGrad)"
      stroke="#c2410c"
      strokeWidth="1.5"
    />

    {/* Center Core Plate */}
    <rect
      x="29"
      y="29"
      width="42"
      height="42"
      rx="8"
      fill="url(#innerPlate)"
      stroke="#fdba74"
      strokeWidth="1"
    />

    {/* Embossed Text "AI" */}
    <text
      x="50"
      y="57"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="20"
      fontWeight="900"
      fill="#ea580c"
      textAnchor="middle"
      letterSpacing="1"
    >
      AI
    </text>
  </svg>
);

/**
 * 05: 3D Blue Senior Architects / Team Avatars
 */
const TeamAvatarsIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="avatarPrimary" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="avatarBackLeft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="avatarBackRight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    {/* Left Flanking Avatar (Background) */}
    <circle cx="32" cy="38" r="9" fill="url(#avatarBackLeft)" />
    <path
      d="M17 64 C17 53, 23 48, 32 48 C41 48, 47 53, 47 64 Z"
      fill="url(#avatarBackLeft)"
      opacity="0.85"
    />

    {/* Right Flanking Avatar (Background) */}
    <circle cx="68" cy="38" r="9" fill="url(#avatarBackRight)" />
    <path
      d="M53 64 C53 53, 59 48, 68 48 C77 48, 83 53, 83 64 Z"
      fill="url(#avatarBackRight)"
      opacity="0.85"
    />

    {/* Center Lead Avatar (Foreground) */}
    <circle cx="50" cy="32" r="11" fill="url(#avatarPrimary)" />
    <ellipse cx="47" cy="28" rx="3.5" ry="2" fill="#ffffff" opacity="0.4" />
    <path
      d="M31 72 C31 58, 39 52, 50 52 C61 52, 69 58, 69 72 Z"
      fill="url(#avatarPrimary)"
    />
  </svg>
);

/**
 * 06: 3D Mint/Teal 24/7 Clock Support Dial
 */
const SupportClockIllustration = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="clockDial" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
      <linearGradient id="pillGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0d9488" />
        <stop offset="100%" stopColor="#042f2e" />
      </linearGradient>
    </defs>

    {/* Clock Face Circle with Depth */}
    <circle cx="48" cy="46" r="30" fill="url(#clockDial)" stroke="#14b8a6" strokeWidth="2.5" />
    <ellipse cx="44" cy="24" rx="14" ry="4" fill="#ffffff" opacity="0.3" />

    {/* Hour Markers */}
    <circle cx="48" cy="21" r="2" fill="#ffffff" />
    <circle cx="73" cy="46" r="2" fill="#ffffff" />
    <circle cx="48" cy="71" r="2" fill="#ffffff" />
    <circle cx="23" cy="46" r="2" fill="#ffffff" />

    {/* Clock Hands (Pointing ~10:10) */}
    <line x1="48" y1="46" x2="35" y2="33" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    <line x1="48" y1="46" x2="48" y2="28" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="48" cy="46" r="3.5" fill="#ffffff" />

    {/* 24/7 Pill Badge at Bottom-Right */}
    <rect
      x="52"
      y="58"
      width="38"
      height="18"
      rx="9"
      fill="url(#pillGrad)"
      stroke="#5eead4"
      strokeWidth="1.5"
    />
    <text
      x="71"
      y="71"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="10"
      fontWeight="900"
      fill="#ffffff"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      24/7
    </text>
  </svg>
);

// ==========================================
// DATA MATRIX MATCHING THE USER REFERENCE DESIGN
// ==========================================
const CARDS_DATA = [
  {
    id: "01",
    number: "01",
    badgeStyle: "border border-blue-200 bg-blue-50/70 text-blue-600",
    tag: "ROI FOCUSED",
    tagColor: "text-blue-600",
    metricNumber: "+340%",
    metricColor: "text-blue-600",
    metricSub: "Avg. ROI",
    sphereBg: "bg-gradient-to-tr from-blue-100/90 via-sky-50 to-blue-50/50",
    illustration: <BarChartIllustration />,
    title: "Business-Centric Engineering",
    description:
      "We build technology with clear ROI metrics—focusing on revenue growth, operational efficiency, and user retention.",
    highlights: [
      "Revenue-Driven Architecture",
      "KPI Dashboards",
      "Cost Optimization",
    ],
    checkBadgeBg: "bg-blue-100",
    checkColor: "text-blue-600",
    learnMoreColor: "text-blue-600 hover:text-blue-700",
    arrowBtnBg: "bg-blue-50",
    arrowBtnText: "text-blue-600",
    arrowBtnHover: "hover:bg-blue-600 hover:text-white",
    linkHref: "/solution",
  },
  {
    id: "02",
    number: "02",
    badgeStyle: "border border-emerald-200 bg-emerald-50/70 text-emerald-600",
    tag: "SPEED TO MARKET",
    tagColor: "text-emerald-600",
    metricNumber: "2x",
    metricColor: "text-emerald-600",
    metricSub: "Faster Release",
    sphereBg: "bg-gradient-to-tr from-emerald-100/90 via-teal-50 to-emerald-50/50",
    illustration: <RocketIllustration />,
    title: "Rapid Deployment & Agile Cadence",
    description:
      "Accelerated development cycles with continuous integration, production-ready code, and weekly sprint demos.",
    highlights: [
      "CI/CD Automation",
      "Weekly Demos",
      "Zero-Downtime Releases",
    ],
    checkBadgeBg: "bg-emerald-100",
    checkColor: "text-emerald-600",
    learnMoreColor: "text-emerald-600 hover:text-emerald-700",
    arrowBtnBg: "bg-emerald-50",
    arrowBtnText: "text-emerald-600",
    arrowBtnHover: "hover:bg-emerald-600 hover:text-white",
    linkHref: "/solution",
  },
  {
    id: "03",
    number: "03",
    badgeStyle: "border border-purple-200 bg-purple-50/70 text-purple-600",
    tag: "ENTERPRISE SECURITY",
    tagColor: "text-purple-600",
    metricNumber: "ISO 27001",
    metricColor: "text-slate-900",
    metricSub: "& SOC2",
    sphereBg: "bg-gradient-to-tr from-purple-100/90 via-indigo-50 to-purple-50/50",
    illustration: <SecurityShieldIllustration />,
    title: "Bank-Grade Security & Compliance",
    description:
      "Security-first design with SOC2, ISO27001 standards, encrypted data pipelines, and strict GDPR adherence.",
    highlights: [
      "Data Encryption at Rest",
      "Compliance Auditing",
      "Zero-Trust Architecture",
    ],
    checkBadgeBg: "bg-purple-100",
    checkColor: "text-purple-600",
    learnMoreColor: "text-purple-600 hover:text-purple-700",
    arrowBtnBg: "bg-purple-50",
    arrowBtnText: "text-purple-600",
    arrowBtnHover: "hover:bg-purple-600 hover:text-white",
    linkHref: "/solution",
  },
  {
    id: "04",
    number: "04",
    badgeStyle: "border border-amber-200 bg-amber-50/70 text-amber-600",
    tag: "AI FIRST",
    tagColor: "text-amber-600",
    metricNumber: "Custom",
    metricColor: "text-amber-600",
    metricSub: "LLM & RAG",
    sphereBg: "bg-gradient-to-tr from-amber-100/90 via-orange-50 to-amber-50/50",
    illustration: <AIChipIllustration />,
    title: "Next-Gen AI Capabilities",
    description:
      "Direct integration of advanced AI models, autonomous agents, and RAG architectures tailored to your proprietary datasets.",
    highlights: [
      "Autonomous AI Agents",
      "RAG Vector Pipelines",
      "Predictive Analytics",
    ],
    checkBadgeBg: "bg-amber-100",
    checkColor: "text-amber-600",
    learnMoreColor: "text-amber-600 hover:text-amber-700",
    arrowBtnBg: "bg-amber-50",
    arrowBtnText: "text-amber-600",
    arrowBtnHover: "hover:bg-amber-600 hover:text-white",
    linkHref: "/solution",
  },
  {
    id: "05",
    number: "05",
    badgeStyle: "border border-blue-200 bg-blue-50/70 text-blue-600",
    tag: "EXPERT TALENT",
    tagColor: "text-blue-600",
    metricNumber: "Senior",
    metricColor: "text-slate-900",
    metricSub: "Architects",
    sphereBg: "bg-gradient-to-tr from-blue-100/90 via-sky-50 to-blue-50/50",
    illustration: <TeamAvatarsIllustration />,
    title: "Dedicated Senior Engineering Team",
    description:
      "Direct access to principal architects, lead AI engineers, DevOps specialists, and dedicated project managers.",
    highlights: [
      "Principal Architects",
      "DevOps Specialists",
      "Dedicated Leads",
    ],
    checkBadgeBg: "bg-blue-100",
    checkColor: "text-blue-600",
    learnMoreColor: "text-blue-600 hover:text-blue-700",
    arrowBtnBg: "bg-blue-50",
    arrowBtnText: "text-blue-600",
    arrowBtnHover: "hover:bg-blue-600 hover:text-white",
    linkHref: "/career",
  },
  {
    id: "06",
    number: "06",
    badgeStyle: "border border-emerald-200 bg-emerald-50/70 text-emerald-600",
    tag: "END-TO-END PARTNERSHIP",
    tagColor: "text-emerald-600",
    metricNumber: "24/7",
    metricColor: "text-emerald-600",
    metricSub: "SLA Guarantee",
    sphereBg: "bg-gradient-to-tr from-teal-100/90 via-emerald-50 to-teal-50/50",
    illustration: <SupportClockIllustration />,
    title: "Full Ecosystem Support & Upskilling",
    description:
      "Post-launch maintenance, 24/7 SLA support, and complete workforce upskilling through GotechEdu tech education.",
    highlights: [
      "24/7 SLA Monitoring",
      "Workforce Training",
      "Continuous Optimization",
    ],
    checkBadgeBg: "bg-emerald-100",
    checkColor: "text-emerald-600",
    learnMoreColor: "text-emerald-600 hover:text-emerald-700",
    arrowBtnBg: "bg-emerald-50",
    arrowBtnText: "text-emerald-600",
    arrowBtnHover: "hover:bg-emerald-600 hover:text-white",
    linkHref: "/learninghub",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/80 py-16 sm:py-20 lg:py-24 border-t border-slate-200/80"
    >
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute left-[10%] top-1/4 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-1/4 h-96 w-96 rounded-full bg-indigo-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==========================================
            HEADER WITH HAND-DRAWN ANNOTATIONS
           ========================================== */}
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Left Hand-Drawn Annotation: "Your Growth Partner" */}
          <div className="hidden lg:block absolute -left-28 top-2 -rotate-6 select-none pointer-events-none text-slate-400">
            <span className="font-serif italic text-sm sm:text-base font-semibold tracking-wide block">
              Your
            </span>
            <span className="font-serif italic text-sm sm:text-base font-semibold tracking-wide block">
              Growth Partner
            </span>
            {/* Curved Arrow Pointing Down-Right */}
            <svg
              className="w-14 h-7 text-slate-400 mt-0.5 ml-3"
              viewBox="0 0 60 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8 C22 4, 42 10, 48 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M40 22 L48 24 L50 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Hand-Drawn Annotation: "Ideas into Impact" */}
          <div className="hidden lg:block absolute -right-28 top-2 rotate-6 select-none pointer-events-none text-slate-400 text-right">
            <span className="font-serif italic text-sm sm:text-base font-semibold tracking-wide block">
              Ideas
            </span>
            <span className="font-serif italic text-sm sm:text-base font-semibold tracking-wide block">
              into Impact
            </span>
            {/* Curved Arrow Pointing Down-Left */}
            <svg
              className="w-14 h-7 text-slate-400 mt-0.5 mr-3 ml-auto"
              viewBox="0 0 60 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 8 C38 4, 18 10, 12 24"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M20 22 L12 24 L10 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-xs font-mono font-bold tracking-[0.18em] uppercase text-indigo-700 shadow-2xs backdrop-blur-xs">
            <Zap size={13} className="text-indigo-600 fill-indigo-600" />
            WHY CHOOSE GOTECHEDU
          </div>

          {/* Title */}
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Empowering Your{" "}
            <span className="text-blue-600">
              Digital Transformation.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-normal max-w-2xl mx-auto">
            We combine deep technical expertise with strategic execution to help
            enterprises outpace competitors and innovate faster.
          </p>
        </div>

        {/* ==========================================
            6 CARDS IN 3x2 GRID
           ========================================== */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS_DATA.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:border-slate-300"
            >
              <div>
                {/* Top Section: Number, Tag, Metric + 3D Illustration */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {/* Number Badge */}
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-lg text-xs font-bold font-mono ${card.badgeStyle}`}
                    >
                      {card.number}
                    </span>

                    {/* Subcategory Label */}
                    <span
                      className={`block mt-3 text-[11px] font-bold font-mono tracking-wider uppercase ${card.tagColor}`}
                    >
                      {card.tag}
                    </span>

                    {/* Big Metric & Subtext */}
                    <div className="mt-1.5">
                      <span
                        className={`block text-2xl sm:text-3xl font-extrabold tracking-tight ${card.metricColor}`}
                      >
                        {card.metricNumber}
                      </span>
                      <span className="block text-sm font-bold text-slate-800 -mt-0.5">
                        {card.metricSub}
                      </span>
                    </div>
                  </div>

                  {/* 3D Illustration on Soft Radial Sphere */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${card.sphereBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                    >
                      {card.illustration}
                    </div>
                  </div>
                </div>

                {/* Card Title & Description */}
                <div className="mt-5">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Highlights Feature List */}
                <div className="mt-5 space-y-2.5">
                  {card.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${card.checkBadgeBg} ${card.checkColor}`}
                      >
                        <svg
                          className="h-3 w-3 stroke-[3]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Learn More Link & Arrow Button */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={card.linkHref}
                  className={`inline-flex items-center gap-1 text-xs sm:text-sm font-bold ${card.learnMoreColor} transition-all`}
                >
                  <span>Learn More</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href={card.linkHref}
                  aria-label={`Learn more about ${card.title}`}
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${card.arrowBtnBg} ${card.arrowBtnText} ${card.arrowBtnHover} transition-all duration-200 group-hover:scale-105 shadow-2xs`}
                >
                  <svg
                    className="h-4 w-4 stroke-[2.5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
