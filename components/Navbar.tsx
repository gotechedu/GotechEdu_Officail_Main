"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Sparkles,
  BookOpen,
  Terminal,
  Award,
  Layers,
  ArrowRight,
  Headphones,
  GraduationCap,
  Network,
  Wrench,
  Zap,
  Briefcase,
  Users2,
  Calendar,
  Laptop,
} from "lucide-react";

// 8 Specific Solutions Categories
const solutionItems = [
  {
    name: "Software & Application",
    desc: "Custom ERP, CRM, enterprise software & scalable web/mobile apps",
    href: "/solution#software",
    icon: <Code2 className="w-4 h-4 text-blue-600" />,
  },
  {
    name: "Cloud DevOps & Automation",
    desc: "Multi-cloud AWS/Azure/GCP, Kubernetes clusters & CI/CD automation",
    href: "/solution#cloud",
    icon: <Cloud className="w-4 h-4 text-sky-600" />,
  },
  {
    name: "Digital Transformation",
    desc: "Legacy modernization, automated business workflows & analytics",
    href: "/solution#marketing",
    icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
  },
  {
    name: "Emerging Technology",
    desc: "Autonomous systems, edge computing, smart IoT & Web3 architectures",
    href: "/solution#ai",
    icon: <Zap className="w-4 h-4 text-amber-600" />,
  },
  {
    name: "IT & Managed Services",
    desc: "24/7 infrastructure support, SLA guarantees & system maintenance",
    href: "/solution#software",
    icon: <Wrench className="w-4 h-4 text-indigo-600" />,
  },
  {
    name: "AI & Machine Learning",
    desc: "Enterprise RAG pipelines, fine-tuned LLMs & autonomous AI agents",
    href: "/solution#ai",
    icon: <Cpu className="w-4 h-4 text-rose-600" />,
  },
  {
    name: "Networking & Infrastructure",
    desc: "Secure enterprise routing, software-defined networks & data centers",
    href: "/solution#cloud",
    icon: <Network className="w-4 h-4 text-teal-600" />,
  },
  {
    name: "Cybersecurity",
    desc: "Zero-Trust defense, SOC 2 compliance, pen testing & 24/7 SIEM",
    href: "/solution#cybersecurity",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
  },
];

// Organized 30 Learning Hub Offerings grouped into 4 logical pillars
const learningCategories = [
  {
    title: "Courses & Programs",
    icon: <BookOpen className="w-3.5 h-3.5 text-green-600" />,
    badgeBg: "bg-green-50 text-green-700",
    items: [
      "Programming Courses",
      "Web Development Courses",
      "Data Science & AI Courses",
      "Cloud Computing Courses",
      "Cybersecurity Courses",
      "DevOps & Automation Courses",
      "Networking & Infrastructure Courses",
      "Database Management Courses",
      "Mobile App Development Courses",

      "Software Testing Courses",
    ],
  },
  {
    title: "Certifications & Diplomas",
    icon: <Award className="w-3.5 h-3.5 text-blue-600" />,
    badgeBg: "bg-blue-50 text-blue-700",
    items: [
      "Courses",
      "Certification Programs",
      "Diploma Programs",
      "Certification Exams",
      "Assessment & Skill Tests",
      "Skill Development Programs",
      "Self-Paced Learning",
    ],
  },

  {
    title: "Workshops & Events",
    icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
    badgeBg: "bg-purple-50 text-purple-700",
    items: [
      "Workshops",
      "Seminars",
      "Webinars",
      "Hackathons",
      "Tech Meetups",
      "Tech Talks",
      "Conferences",
      "Guest Lectures",
    ],
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [learningHubOpen, setLearningHubOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileLearningHubOpen, setMobileLearningHubOpen] = useState(false);

  const pathname = usePathname();
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const learningHubTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setLearningHubOpen(false);
  }, [pathname]);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsOpen(true);
    setLearningHubOpen(false);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 160);
  };

  const handleLearningHubEnter = () => {
    if (learningHubTimeoutRef.current)
      clearTimeout(learningHubTimeoutRef.current);
    setLearningHubOpen(true);
    setSolutionsOpen(false);
  };

  const handleLearningHubLeave = () => {
    learningHubTimeoutRef.current = setTimeout(() => {
      setLearningHubOpen(false);
    }, 160);
  };

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Top Quick Info Bar */}
      <div className="hidden sm:block border-b border-slate-200/90 bg-slate-50 text-slate-600 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-bold">Call Us:</span>
              <a
                href="tel:+919608094837"
                className="text-slate-800 hover:text-blue-600 transition font-semibold"
              >
                +91-9608094837
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1.5 border-l border-slate-200 pl-4">
              <span className="text-blue-600 font-bold">E-mail:</span>
              <a
                href="mailto:gotecheduoffical@gmail.com"
                className="text-slate-800 hover:text-blue-600 transition font-semibold"
              >
                gotecheduoffical@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/learninghub"
              className="text-blue-600 hover:text-blue-700 transition font-bold flex items-center gap-1"
            >
              <span>🎓 Admissions Open</span>
            </Link>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-2.5 text-slate-500">
              <a
                href="https://www.linkedin.com/in/gotechedu"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gotechedu"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gotecheduofficial"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919608094837"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-emerald-600 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@gotechedu"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <span className="text-slate-300">|</span>
            <Link
              href="https://portal.gotechedu.com/"
              className="text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition shadow-xs active:scale-95"
            >
              Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-lg shadow-xs">
        <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 transition-all duration-300 active:scale-95"
            aria-label="GotechEdu Home"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600/30 via-indigo-500/30 to-cyan-400/30 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-blue-200/80 bg-white p-1 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400 group-hover:shadow-lg">
              <Image
                src="/icons.png"
                alt="GoTechEdu - IT Solutions & EdTech Learning Platform"
                width={140}
                height={140}
                className="h-full w-full object-contain rounded-full transition-transform duration-300 group-hover:rotate-6"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-heading text-lg sm:text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  GOTECH
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    EDU
                  </span>
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors group-hover:text-blue-600">
                IT Solutions &amp; EdTech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean & Premium without block borders/fills) */}
          <nav className="hidden items-center gap-1 lg:gap-1.5 md:flex">
            {/* 1. Home */}
            <Link
              href="/"
              className={`relative px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                pathname === "/"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              <span>Home</span>
              {pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
              )}
            </Link>

            {/* 2. Solutions with 8 Requested Categories */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <Link
                href="/solution"
                onClick={(e) => {
                  if (window.innerWidth < 1024) {
                    e.preventDefault();
                    setSolutionsOpen(!solutionsOpen);
                  }
                }}
                className={`group inline-flex items-center gap-1 px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                  pathname.startsWith("/solution") || solutionsOpen
                    ? "text-blue-600 font-extrabold"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    solutionsOpen
                      ? "rotate-180 text-blue-600"
                      : "text-slate-400 group-hover:text-blue-600"
                  }`}
                />
                {(pathname.startsWith("/solution") || solutionsOpen) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
                )}
              </Link>

              {/* Solutions Mega-Menu Panel */}
              {solutionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 w-[640px] lg:w-[700px] animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative rounded-2xl border border-slate-200/90 bg-white/98 p-5 shadow-2xl backdrop-blur-xl ring-1 ring-slate-950/5">
                    {/* Header Label */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-500">
                          Enterprise Technology Solutions
                        </span>
                      </div>
                      <Link
                        href="/solution"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/all"
                      >
                        <span>View All Solutions</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/all:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* 2-Column Grid of the 8 Exact Categories */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {solutionItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group/item flex items-start gap-3 rounded-xl p-2.5 border border-transparent hover:border-slate-200/80 hover:bg-slate-50/80 hover:shadow-xs transition-all duration-200 active:scale-[0.98]"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/70 bg-slate-50 group-hover/item:bg-blue-50 group-hover/item:border-blue-200 transition-colors">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors truncate block">
                              {item.name}
                            </span>
                            <p className="mt-0.5 text-[11px] text-slate-500 leading-tight line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Callout Strip */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between rounded-xl bg-slate-50/80 px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <Headphones className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-slate-600">
                          Need an architectural audit or custom enterprise
                          requirement?
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="text-xs font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Learning Hub with 30 Organized Offerings in 4 Pillars */}
            <div
              className="relative"
              onMouseEnter={handleLearningHubEnter}
              onMouseLeave={handleLearningHubLeave}
            >
              <Link
                href="/learninghub"
                onClick={(e) => {
                  if (window.innerWidth < 1024) {
                    e.preventDefault();
                    setLearningHubOpen(!learningHubOpen);
                  }
                }}
                className={`group inline-flex items-center gap-1 px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                  pathname.startsWith("/learninghub") || learningHubOpen
                    ? "text-blue-600 font-extrabold"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <span>Learning Hub</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    learningHubOpen
                      ? "rotate-180 text-blue-600"
                      : "text-slate-400 group-hover:text-blue-600"
                  }`}
                />
                {(pathname.startsWith("/learninghub") || learningHubOpen) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
                )}
              </Link>

              {/* Learning Hub Organized 4-Column Mega Panel */}
              {learningHubOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 z-50 w-[840px] lg:w-[940px] animate-in fade-in zoom-in-95 duration-200">
                  <div className="relative rounded-2xl border border-slate-200/90 bg-white/98 p-5 sm:p-6 shadow-2xl backdrop-blur-xl ring-1 ring-slate-950/5">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-500">
                          Complete Learning Ecosystem &amp; Training Programs
                        </span>
                      </div>
                      <Link
                        href="/learninghub"
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/all"
                      >
                        <span>Explore All Tracks</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/all:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* 4 Organized Pillars with All 30 Items */}
                    <div className="grid grid-cols-4 gap-4">
                      {learningCategories.map((cat) => (
                        <div
                          key={cat.title}
                          className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 space-y-2.5"
                        >
                          <div className="flex items-center gap-1.5 pb-1 border-b border-slate-200/60">
                            {cat.icon}
                            <h4 className="text-xs font-black text-slate-900 tracking-tight truncate">
                              {cat.title}
                            </h4>
                          </div>

                          <ul className="space-y-1">
                            {cat.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href="/learninghub"
                                  className="group/item flex items-center gap-1.5 py-1 px-1.5 rounded-md text-[11px] font-medium text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-2xs transition-all"
                                >
                                  <span className="text-slate-300 group-hover/item:text-blue-500 group-hover/item:translate-x-0.5 transition-transform">
                                    ›
                                  </span>
                                  <span className="truncate">{item}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Career */}
            <Link
              href="/career"
              className={`relative px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                pathname === "/career"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              <span>Career</span>
              {pathname === "/career" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
              )}
            </Link>

            {/* 5. Blog */}
            <Link
              href="/blog"
              className={`relative px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                pathname === "/blog"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              <span>Blog</span>
              {pathname === "/blog" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
              )}
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 active:translate-y-0 active:scale-95"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none transition active:scale-95"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-5 py-5 md:hidden shadow-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                pathname === "/"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    mobileSolutionsOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {mobileSolutionsOpen && (
                <div className="ml-3 pl-3 border-l-2 border-blue-100 my-1 space-y-1">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-2 px-2 text-xs font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition"
                    >
                      <div className="shrink-0">{item.icon}</div>
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/solution"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-1.5 py-2 px-2 text-xs font-bold text-blue-600"
                  >
                    <span>All Solutions →</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Learning Hub Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileLearningHubOpen(!mobileLearningHubOpen)}
                className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition"
              >
                <span>Learning Hub</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    mobileLearningHubOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {mobileLearningHubOpen && (
                <div className="ml-3 pl-3 border-l-2 border-indigo-100 my-1 space-y-3">
                  {learningCategories.map((cat) => (
                    <div key={cat.title} className="space-y-1">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900">
                        {cat.icon}
                        <span>{cat.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item}
                            href="/learninghub"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md hover:bg-blue-50 hover:text-blue-600"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/learninghub"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block pt-2 text-xs font-bold text-indigo-600"
                  >
                    <span>All Learning Programs →</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Career */}
            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                pathname === "/career"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Career
            </Link>

            {/* Mobile Blog */}
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                pathname === "/blog"
                  ? "text-blue-600 font-extrabold"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            {/* Mobile Quick CTA */}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 active:scale-95 transition"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
