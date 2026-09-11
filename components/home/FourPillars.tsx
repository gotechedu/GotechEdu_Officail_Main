"use client";

import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Users,
  GraduationCap,
  TrendingUp,
  BookOpen,
  Code2,
  Rocket,
  Cloud,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  colorName: string;
  primaryColor: string;
  glowColor: string;
  accentBadgeBg: string;
  borderColor: string;
  icon: React.ReactNode;
  floatingBadges: Array<{
    label: string;
    icon?: React.ReactNode;
    position: string;
    delay: string;
  }>;
  route: string;
  stats: string;
}

const pillars: Pillar[] = [
  {
    id: "tech",
    number: "01",
    name: "Tech",
    tagline: "BUILDING SOLUTIONS",
    description:
      "IT solutions and technology-based services to solve real-world business challenges.",
    image: "/assets/pillars/tech.jpg",
    colorName: "blue",
    primaryColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.45)",
    accentBadgeBg: "bg-blue-500",
    borderColor: "border-blue-200 hover:border-blue-400",
    icon: <Cpu className="w-6 h-6 text-white" strokeWidth={2.2} />,
    floatingBadges: [
      {
        label: "Cloud Sync",
        icon: <Cloud className="w-3.5 h-3.5 text-sky-400" />,
        position: "top-4 left-4",
        delay: "0s",
      },
      {
        label: "</> Code",
        icon: <Code2 className="w-3.5 h-3.5 text-blue-400" />,
        position: "bottom-6 right-4",
        delay: "1.2s",
      },
    ],
    route: "/solution",
    stats: "Next-Gen IT",
  },
  {
    id: "talent",
    number: "02",
    name: "Talent",
    tagline: "CONNECTING EXPERTS",
    description:
      "Consulting and expert talent solutions to help businesses find the right people.",
    image: "/assets/pillars/talent.jpg",
    colorName: "purple",
    primaryColor: "#7c3aed",
    glowColor: "rgba(124, 58, 237, 0.45)",
    accentBadgeBg: "bg-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
    icon: <Users className="w-6 h-6 text-white" strokeWidth={2.2} />,
    floatingBadges: [
      {
        label: "Top 1% Experts",
        icon: <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />,
        position: "top-4 right-4",
        delay: "0.6s",
      },
      {
        label: "Vetted Teams",
        icon: <Users className="w-3.5 h-3.5 text-indigo-400" />,
        position: "bottom-6 left-4",
        delay: "1.8s",
      },
    ],
    route: "/career",
    stats: "Global Network",
  },
  {
    id: "training",
    number: "03",
    name: "Training",
    tagline: "DEVELOPING SKILLS",
    description:
      "Learning, teaching and skill development to create future-ready individuals and teams.",
    image: "/assets/pillars/training.jpg",
    colorName: "green",
    primaryColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.45)",
    accentBadgeBg: "bg-emerald-600",
    borderColor: "border-emerald-200 hover:border-emerald-400",
    icon: <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.2} />,
    floatingBadges: [
      {
        label: "Learn",
        icon: <BookOpen className="w-3.5 h-3.5 text-emerald-400" />,
        position: "top-6 right-5",
        delay: "0.3s",
      },
      {
        label: "Practice",
        icon: <Code2 className="w-3.5 h-3.5 text-teal-400" />,
        position: "top-16 right-4",
        delay: "1.1s",
      },
      {
        label: "Grow",
        icon: <Rocket className="w-3.5 h-3.5 text-green-400" />,
        position: "top-26 right-5",
        delay: "1.9s",
      },
    ],
    route: "/learninghub",
    stats: "Hands-on Labs",
  },
  {
    id: "transformation",
    number: "04",
    name: "Transformation",
    tagline: "FUELING GROWTH",
    description:
      "Marketing, branding and business growth strategies to help businesses evolve, expand and succeed.",
    image: "/assets/pillars/transformation.jpg",
    colorName: "orange",
    primaryColor: "#ea580c",
    glowColor: "rgba(234, 88, 12, 0.45)",
    accentBadgeBg: "bg-amber-500",
    borderColor: "border-amber-200 hover:border-amber-400",
    icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.2} />,
    floatingBadges: [
      {
        label: "+240% Growth",
        icon: <TrendingUp className="w-3.5 h-3.5 text-amber-500" />,
        position: "top-4 left-4",
        delay: "0.5s",
      },
      {
        label: "Scale Ready",
        icon: <Sparkles className="w-3.5 h-3.5 text-orange-400" />,
        position: "bottom-6 right-4",
        delay: "1.5s",
      },
    ],
    route: "/contact",
    stats: "ROI Driven",
  },
];

export default function FourPillars() {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [tiltStates, setTiltStates] = useState<{
    [key: string]: { rotateX: number; rotateY: number; isHovered: boolean };
  }>({});

  const handleMouseMove = (id: string, e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;

    setTiltStates((prev) => ({
      ...prev,
      [id]: { rotateX, rotateY, isHovered: true },
    }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltStates((prev) => ({
      ...prev,
      [id]: { rotateX: 0, rotateY: 0, isHovered: false },
    }));
    setActivePillar(null);
  };

  return (
    <section
      id="our-foundation"
      aria-label="Our Foundation - Four Pillars"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/90 py-20 sm:py-10 lg:py-12"
    >
      {/* Background Architectural Grid & Subtle Radial Ambient Lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Soft Colored Atmospheric Lighting matching the 4 Pillars */}
        <div className="absolute -top-24 left-[10%] h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />
        <div className="absolute -top-24 left-[35%] h-96 w-96 rounded-full bg-purple-400/10 blur-[100px]" />
        <div className="absolute -top-24 left-[60%] h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />
        <div className="absolute -top-24 right-[5%] h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />

        {/* Central Foundation Glow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-blue-300/15 via-purple-300/15 to-amber-300/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-700">
              OUR FOUNDATION
            </span>
          </div>

          <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.9rem] leading-[1.15]">
            Four Pillars.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
              A Brighter Tomorrow.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-slate-600 font-normal">
            At Gotechedu, we combine technology, talent, training, and
            transformation to create real solutions for businesses and
            communities.
          </p>
        </div>

        {/* 3D Pillar Cards Stage - 2 cards per row on mobile & md view */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 perspective-[1400px]">
          {pillars.map((pillar) => {
            const tilt = tiltStates[pillar.id] || {
              rotateX: 0,
              rotateY: 0,
              isHovered: false,
            };
            const isTargeted = activePillar === pillar.id;

            return (
              <Link
                key={pillar.id}
                href={pillar.route}
                id={`pillar-${pillar.id}`}
                onMouseMove={(e) => handleMouseMove(pillar.id, e)}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => handleMouseLeave(pillar.id)}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-white/95 border transition-all duration-300 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.07)] backdrop-blur-xl cursor-pointer block no-underline overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${tilt.isHovered
                      ? "scale3d(1.02, 1.02, 1.02) translateY(-4px)"
                      : "scale3d(1, 1, 1)"
                    }`,
                  transformStyle: "preserve-3d",
                  borderColor: isTargeted ? pillar.primaryColor : undefined,
                  boxShadow: isTargeted
                    ? `0 20px 45px -12px ${pillar.glowColor}, 0 0 0 1px ${pillar.primaryColor}`
                    : undefined,
                  transition: tilt.isHovered
                    ? "box-shadow 0.25s ease-out, border-color 0.25s ease-out"
                    : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease",
                }}
              >
                {/* 3D Floating Top Anchor Node (connects visual line) */}
                <div
                  className="relative px-3 sm:px-5 lg:px-6 pt-5 sm:pt-6 pb-2 sm:pb-3 flex flex-col items-center text-center"
                  style={{ transform: "translateZ(25px)" }}
                >
                  {/* Circular 3D Icon Badge */}
                  <div className="relative mb-2.5 sm:mb-3 flex items-center justify-center">
                    {/* Glowing Aura Ring */}
                    <div
                      className="absolute -inset-2 rounded-full opacity-0 blur-md transition-opacity duration-400 group-hover:opacity-100"
                      style={{ backgroundColor: pillar.glowColor }}
                    />

                    {/* Gradient Sphere Icon Container */}
                    <div
                      className={`relative flex h-11 w-11 sm:h-13 sm:w-13 lg:h-16 lg:w-16 items-center justify-center rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110 ${pillar.accentBadgeBg}`}
                      style={{
                        background:
                          pillar.id === "tech"
                            ? "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)"
                            : pillar.id === "talent"
                              ? "linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)"
                              : pillar.id === "training"
                                ? "linear-gradient(135deg, #4ade80 0%, #059669 100%)"
                                : "linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)",
                      }}
                    >
                      {/* Inner 3D Specular Highlight Ring */}
                      <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
                      <div className="relative z-10 scale-90 sm:scale-100">{pillar.icon}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-xl lg:text-2xl font-black tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                    {pillar.name}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <p
                    className="mt-0.5 sm:mt-1 font-mono text-[8.5px] sm:text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
                    style={{ color: pillar.primaryColor }}
                  >
                    {pillar.tagline}
                  </p>

                  {/* Description Paragraph */}
                  <p className="mt-2 text-[11px] sm:text-xs lg:text-[13px] leading-snug sm:leading-relaxed text-slate-500 font-normal line-clamp-3 sm:line-clamp-none min-h-[44px] sm:min-h-[52px]">
                    {pillar.description}
                  </p>
                </div>

                {/* 3D Visual Stage Graphic with Parallax Layers */}
                <div
                  className="relative mt-auto w-full px-2.5 sm:px-4 pb-2 sm:pb-3 pt-1 overflow-hidden"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100/70 border border-slate-200/60 shadow-inner group/img">
                    {/* Realistic 3D Visual Asset */}
                    <Image
                      src={pillar.image}
                      alt={`${pillar.name} - ${pillar.tagline}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay for integrated contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />

                    {/* Floating 3D Micro Badges with staggered floats */}
                    {pillar.floatingBadges.map((badge, idx) => (
                      <div
                        key={idx}
                        className={`absolute ${badge.position} z-20 flex items-center gap-1 rounded-full border border-white/80 bg-white/90 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-extrabold text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 pointer-events-none`}
                        style={{
                          transform: "translateZ(45px)",
                          animation: `float 4s ease-in-out infinite`,
                          animationDelay: badge.delay,
                        }}
                      >
                        <span className="scale-75 sm:scale-100">{badge.icon}</span>
                        <span className="truncate max-w-[65px] sm:max-w-none">{badge.label}</span>
                      </div>
                    ))}

                    {/* Quick Metric Badge Bottom Corner */}
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 z-10">
                      <span className="inline-flex items-center rounded-md bg-slate-950/70 px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-bold tracking-wide text-white backdrop-blur-md">
                        {pillar.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Click Indicator CTA */}
                <div
                  className="px-3 sm:px-4 lg:px-5 pt-1.5 pb-3 sm:pb-4 flex items-center justify-between"
                  style={{ transform: "translateZ(25px)" }}
                >
                  <span
                    className="inline-flex items-center gap-0.5 sm:gap-1 text-[10.5px] sm:text-xs font-bold transition-all group-hover:gap-1.5"
                    style={{ color: pillar.primaryColor }}
                  >
                    <span className="truncate">
                      {pillar.id === "tech"
                        ? "Explore Solutions"
                        : pillar.id === "talent"
                          ? "Explore Careers"
                          : pillar.id === "training"
                            ? "Learning Hub"
                            : "Connect"}
                    </span>
                    <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
                  </span>
                  <span
                    className="flex h-5 w-5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 shadow-2xs"
                    style={{
                      backgroundColor: `${pillar.primaryColor}18`,
                      color: pillar.primaryColor,
                    }}
                  >
                    <ArrowRight size={11} strokeWidth={2.5} className="sm:scale-110" />
                  </span>
                </div>

                {/* Base Anchor Point with Optical Fiber Port */}
                <div className="relative mx-auto -mb-2.5 z-20">
                  <div
                    className="relative flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full border-2 border-white bg-white shadow-md transition-transform duration-300 group-hover:scale-125"
                    style={{
                      borderColor: isTargeted ? pillar.primaryColor : "#cbd5e1",
                    }}
                  >
                    <div
                      className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: isTargeted
                          ? pillar.primaryColor
                          : "#94a3b8",
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 3D Fiber-Optic Energy Conduit Network & Central Foundation Hub */}
        <div className="relative mt-2 flex flex-col items-center">
          {/* Desktop SVG Circuit Beams (Hidden on mobile for performance and clarity) */}
          <div className="hidden lg:block w-full max-w-6xl h-24 relative pointer-events-none -mb-12">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1152 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Tech Beam Gradient */}
                <linearGradient
                  id="techBeam"
                  x1="144"
                  y1="0"
                  x2="576"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#38bdf8" stopOpacity="0.9" />
                </linearGradient>

                {/* Talent Beam Gradient */}
                <linearGradient
                  id="talentBeam"
                  x1="432"
                  y1="0"
                  x2="576"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7c3aed" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#c084fc" stopOpacity="0.9" />
                </linearGradient>

                {/* Training Beam Gradient */}
                <linearGradient
                  id="trainingBeam"
                  x1="720"
                  y1="0"
                  x2="576"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#059669" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#4ade80" stopOpacity="0.9" />
                </linearGradient>

                {/* Transformation Beam Gradient */}
                <linearGradient
                  id="transformationBeam"
                  x1="1008"
                  y1="0"
                  x2="576"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ea580c" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#fbbf24" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Background Guide Paths */}
              <path
                d="M 144,0 C 144,60 480,88 535,92"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 432,0 C 432,45 510,80 550,92"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 720,0 C 720,45 642,80 602,92"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 1008,0 C 1008,60 672,88 617,92"
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />

              {/* Active / Animated Energy Flow Beams */}
              {/* Tech (Blue) */}
              <path
                d="M 144,0 C 144,60 480,88 535,92"
                stroke="url(#techBeam)"
                strokeWidth={activePillar === "tech" ? "4.5" : "2.5"}
                strokeDasharray="8 12"
                className="transition-all duration-300"
                style={{
                  strokeDashoffset: 0,
                  animation: "conduitFlow 2.5s linear infinite",
                  filter:
                    activePillar === "tech"
                      ? "drop-shadow(0 0 8px #0284c7)"
                      : "none",
                }}
              />

              {/* Talent (Purple) */}
              <path
                d="M 432,0 C 432,45 510,80 550,92"
                stroke="url(#talentBeam)"
                strokeWidth={activePillar === "talent" ? "4.5" : "2.5"}
                strokeDasharray="8 12"
                className="transition-all duration-300"
                style={{
                  strokeDashoffset: 0,
                  animation: "conduitFlow 2.2s linear infinite reverse",
                  filter:
                    activePillar === "talent"
                      ? "drop-shadow(0 0 8px #7c3aed)"
                      : "none",
                }}
              />

              {/* Training (Green) */}
              <path
                d="M 720,0 C 720,45 642,80 602,92"
                stroke="url(#trainingBeam)"
                strokeWidth={activePillar === "training" ? "4.5" : "2.5"}
                strokeDasharray="8 12"
                className="transition-all duration-300"
                style={{
                  strokeDashoffset: 0,
                  animation: "conduitFlow 2.2s linear infinite",
                  filter:
                    activePillar === "training"
                      ? "drop-shadow(0 0 8px #059669)"
                      : "none",
                }}
              />

              {/* Transformation (Orange) */}
              <path
                d="M 1008,0 C 1008,60 672,88 617,92"
                stroke="url(#transformationBeam)"
                strokeWidth={activePillar === "transformation" ? "4.5" : "2.5"}
                strokeDasharray="8 12"
                className="transition-all duration-300"
                style={{
                  strokeDashoffset: 0,
                  animation: "conduitFlow 2.5s linear infinite reverse",
                  filter:
                    activePillar === "transformation"
                      ? "drop-shadow(0 0 8px #ea580c)"
                      : "none",
                }}
              />
            </svg>
          </div>

          {/* Central 3D Convergence Hub (Pedestal with Concentric Waves) */}
          <div className="relative mt-8 sm:mt-10 flex flex-col items-center justify-center">
            {/* Concentric Architectural Radar Ripples */}
            <div className="pointer-events-none absolute -inset-16 sm:-inset-24 flex items-center justify-center">
              <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-blue-200/40 animate-ping opacity-25" />
              <div className="absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-purple-200/50" />
              <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-slate-200/60 opacity-60" />
            </div>

            {/* 3D Elevated Circular Core Disc */}
            <div className="relative z-10 flex flex-col items-center justify-center rounded-full bg-white/95 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(226,232,240,0.9)] backdrop-blur-2xl transition-all duration-500 hover:scale-105">
              {/* Outer Specular Ring */}
              <div className="absolute inset-1 rounded-full border border-slate-100/90 pointer-events-none" />

              {/* Lotus Brand Emblem (Cyan, Violet, Orange Petals) */}
              <div className="relative mb-2 flex items-center justify-center">
                {/* Dynamic Petals SVG */}
              </div>

              {/* Gotechedu Typography */}
              <div className="text-center">
                <span className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                  Gotech<span className="text-blue-600">edu</span>
                </span>
                <div className="mt-1 flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[10.5px] font-mono font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  <span
                    className={
                      activePillar === "talent"
                        ? "text-purple-600 font-black"
                        : ""
                    }
                  >
                    PEOPLE
                  </span>
                  <span className="text-slate-300">|</span>
                  <span
                    className={
                      activePillar === "training"
                        ? "text-emerald-600 font-black"
                        : ""
                    }
                  >
                    SKILLS
                  </span>
                  <span className="text-slate-300">|</span>
                  <span
                    className={
                      activePillar === "tech" ? "text-blue-600 font-black" : ""
                    }
                  >
                    SOLUTIONS
                  </span>
                  <span className="text-slate-300">|</span>
                  <span
                    className={
                      activePillar === "transformation"
                        ? "text-amber-600 font-black"
                        : ""
                    }
                  >
                    GROWTH
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Floating Architecture Ribbon */}
          <div className="relative mt-12 sm:mt-14 w-full max-w-3xl px-4">
            <div className="relative flex flex-col sm:flex-row items-center justify-around gap-2.5 sm:gap-4 rounded-full border border-slate-200/90 bg-white/80 px-6 py-3.5 sm:py-4 text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:shadow-[0_12px_35px_-8px_rgba(59,130,246,0.15)]">
              <div className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors">
                EMPOWERING BUSINESSES
              </div>
              <span className="hidden sm:inline-block text-slate-300 font-bold">
                |
              </span>
              <div className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-600 hover:text-purple-600 transition-colors">
                ENABLING PEOPLE
              </div>
              <span className="hidden sm:inline-block text-slate-300 font-bold">
                |
              </span>
              <div className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-600 hover:text-emerald-600 transition-colors">
                SHAPING A BETTER TOMORROW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
