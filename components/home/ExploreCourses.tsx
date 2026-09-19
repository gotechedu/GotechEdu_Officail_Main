"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Cloud,
  Cpu,
  Calculator,
  ShieldAlert,
  ArrowRight,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "development" | "cloud-ai" | "diploma";
  duration: string;
  level: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconBg: string;
  highlights: string[];
  slug: string;
}

const COURSES: CourseItem[] = [
  {
    id: "o-level",
    title: "O Level (NIELIT) & ADCA",
    subtitle: "Advanced Diploma in Computer Applications & Govt. Accredited IT Track",
    category: "diploma",
    duration: "12 Months",
    level: "Beginner to Pro",
    badge: "Govt. Certified",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "from-emerald-500 to-teal-600",
    icon: <Terminal className="w-8 h-8 text-white" />,
    highlights: [
      "NIELIT O Level M1-M4 modules & practicals",
      "Office Automation, Web Design & Python",
      "Ideal for govt. exams & enterprise office jobs",
    ],
    slug: "fullstack-nextjs",
  },
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    subtitle: "Modern Next.js, React 19, TypeScript, Node.js & Microservices",
    category: "development",
    duration: "16 Weeks",
    level: "Intermediate",
    badge: "Most Popular",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "from-blue-600 to-indigo-600",
    icon: <Code2 className="w-8 h-8 text-white" />,
    highlights: [
      "Production-ready Next.js & Tailwind CSS apps",
      "REST & GraphQL APIs with PostgreSQL / MongoDB",
      "Full CI/CD deployment on Vercel & Docker",
    ],
    slug: "fullstack-nextjs",
  },
  {
    id: "tally-prime",
    title: "Tally Prime & E-Taxation",
    subtitle: "Complete Corporate Accounting, GST Filing, TDS & Payroll Management",
    category: "diploma",
    duration: "3 Months",
    level: "All Levels",
    badge: "Job Guaranteed",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "from-amber-500 to-orange-600",
    icon: <Calculator className="w-8 h-8 text-white" />,
    highlights: [
      "Live GST, TDS, and Balance Sheet finalization",
      "Inventory management & voucher auditing",
      "Direct placement in corporate finance teams",
    ],
    slug: "mern-stack",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    subtitle: "AWS Cloud, Kubernetes, Terraform, Docker & CI/CD Pipelines",
    category: "cloud-ai",
    duration: "14 Weeks",
    level: "Intermediate",
    badge: "Enterprise SLA",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "from-sky-500 to-blue-600",
    icon: <Cloud className="w-8 h-8 text-white" />,
    highlights: [
      "Multi-cloud deployment on AWS & Google Cloud",
      "Automated infrastructure as code (IaC)",
      "Red Hat RHCSA preparation & container security",
    ],
    slug: "cloud-devops",
  },
  {
    id: "gen-ai",
    title: "Generative AI & Agentic Systems",
    subtitle: "Fine-Tuning LLMs, RAG Pipelines, LangChain & Autonomous AI Agents",
    category: "cloud-ai",
    duration: "12 Weeks",
    level: "Advanced",
    badge: "Next-Gen AI",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    iconBg: "from-purple-600 to-indigo-700",
    icon: <Cpu className="w-8 h-8 text-white" />,
    highlights: [
      "Build production RAG with Vector DBs",
      "Autonomous tool-calling multi-agent systems",
      "Model deployment on high-performance GPUs",
    ],
    slug: "gen-ai-agentic",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & SOC Defense",
    subtitle: "Zero-Trust Architecture, Penetration Testing & SIEM Incident Response",
    category: "development",
    duration: "16 Weeks",
    level: "Intermediate",
    badge: "High Demand",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "from-rose-500 to-red-600",
    icon: <ShieldAlert className="w-8 h-8 text-white" />,
    highlights: [
      "Defensive blue teaming & threat hunting",
      "Network penetration testing & bug bounty",
      "SOC analyst certification preparation",
    ],
    slug: "cybersecurity-soc",
  },
];

export default function ExploreCourses() {
  const [activeTab, setActiveTab] = useState<"all" | "development" | "cloud-ai" | "diploma">("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES
      : COURSES.filter((c) => c.category === activeTab);

  return (
    <section
      id="explore-courses"
      className="relative overflow-hidden bg-slate-50/70 py-18 sm:py-24 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Reference Page 2 */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Curated Career Tracks
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Courses & Programs
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hands-on training, industry certifications, and real software projects designed to
            take you from foundational concepts to production-grade mastery.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { label: "All Programs", val: "all" },
              { label: "Software & Web", val: "development" },
              { label: "Cloud & AI", val: "cloud-ai" },
              { label: "Diplomas & Certifications", val: "diploma" },
            ].map((tab) => (
              <button
                key={tab.val}
                type="button"
                onClick={() => setActiveTab(tab.val as any)}
                className={`cursor-pointer rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.val
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Modern Grid Matching Reference Page 2 */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr ${course.iconBg} shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    {course.icon}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${course.badgeColor}`}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Meta Row: Duration & Level */}
                <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {course.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-indigo-600" />
                    {course.level}
                  </span>
                </div>

                {/* Course Title & Description */}
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.subtitle}
                </p>

                {/* Highlights List */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-7 pt-4 border-t border-slate-100">
                <Link
                  href={`/learninghub/${course.slug}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/25 active:scale-98"
                >
                  <span>Enroll Now & View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/learninghub"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
          >
            <span>Browse Complete Learning Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
