"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Cloud,
  Workflow,
  Zap,
  Server,
  Brain,
  Network,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Check,
  Sparkles,
  Layers,
  ArrowUpRight,
  Phone,
  Mail,
  HelpCircle,
  Clock,
  Shield,
  FileCheck2,
} from "lucide-react";
import {
  getSolutionBySlug,
  getRelatedSolutions,
  solutionsData,
} from "@/lib/solutionsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cloud,
  Workflow,
  Zap,
  Server,
  Brain,
  Network,
  ShieldCheck,
};

export default function SolutionDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const solution = getSolutionBySlug(slug);
  const relatedSolutions = getRelatedSolutions(slug, 3);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // If slug is not found
  if (!solution) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
            <Layers className="h-7 w-7" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Solution Domain Not Found
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The requested technology service does not exist or may have been
            re-architected.
          </p>
          <div className="mt-6">
            <Link
              href="/solution"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const IconComponent = iconMap[solution.iconName] || Layers;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* =====================================================================
          1. HEADER & HERO SECTION
      ====================================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
        {/* Subtle Ambient Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-500 mb-6 sm:mb-8"
          >
            <Link
              href="/solution"
              className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Solutions</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />
            <span className="font-semibold text-slate-700 truncate max-w-xs sm:max-w-md">
              {solution.name}
            </span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Details & CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
                <IconComponent className="h-3.5 w-3.5 text-blue-600" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                {solution.name}
              </h1>

              <p className="text-base sm:text-lg font-medium text-blue-700 leading-snug">
                {solution.tagline}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {solution.desc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/contact?solution=${encodeURIComponent(solution.name)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:brightness-105 active:scale-95 transition cursor-pointer"
                >
                  <span>Discuss This Solution</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
                >
                  <span>View Deliverables</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Cover Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <Image
                  src={solution.coverImage}
                  alt={solution.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="font-bold uppercase tracking-wider text-cyan-300">
                    Enterprise Tier
                  </span>
                  <span>SLA Backed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. BUSINESS IMPACT METRICS STRIP
      ====================================================================== */}
      <section className="py-10 bg-slate-100/70 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {solution.businessImpact.map((impact, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs text-center sm:text-left flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl sm:text-3xl font-black text-blue-600">
                    {impact.metric}
                  </span>
                  <h3 className="mt-1 font-heading text-sm font-bold text-slate-900">
                    {impact.label}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {impact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ARCHITECTURAL OVERVIEW & VISUAL DETAIL
      ====================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-video lg:aspect-4/3 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                <Image
                  src={solution.secondaryImage}
                  alt={`${solution.name} Architecture`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 550px"
                />
              </div>
            </div>

            {/* Architectural Overview Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                Engineering Blueprint
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Architectural Approach &amp; Capabilities
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {solution.longOverview}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Modular Code Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Comprehensive API Docs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Automated Security Scanning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Zero-Downtime Releases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CORE CAPABILITIES (Section Anchor)
      ====================================================================== */}
      <section
        id="capabilities"
        className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
              Service Modules
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Core Deliverables &amp; Capabilities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Targeted modules engineered to resolve operational bottlenecks in
              this domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Deliverables List */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck2 className="h-5 w-5 text-blue-600" />
              <h3 className="font-heading text-base font-bold text-slate-900">
                What Your Organization Receives
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              {solution.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. TECH STACK SPECIFICATION
      ====================================================================== */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Technology Stack
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Frameworks, Tools &amp; Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.techStack.map((techGroup, tIdx) => (
              <div
                key={tIdx}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-2xs"
              >
                <h3 className="font-heading text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-2">
                  {techGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {techGroup.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SOLUTION SPECIFIC FAQS
      ====================================================================== */}
      {solution.faqs && solution.faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Got Questions About {solution.name}?
              </h2>
            </div>

            <div className="space-y-3">
              {solution.faqs.map((faq, fIdx) => {
                const isOpen = activeFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                      className="w-full flex items-center justify-between p-5 text-left font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          7. RELATED SOLUTIONS NAVIGATION
      ====================================================================== */}
      {relatedSolutions.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Cross-Domain Architecture
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Explore Other Enterprise Solutions
                </h2>
              </div>
              <Link
                href="/solution"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View All 8 Solutions</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSolutions.map((item) => {
                const ItemIcon = iconMap[item.iconName] || Layers;
                return (
                  <Link
                    key={item.slug}
                    href={`/solution/${item.slug}`}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all hover:-translate-y-1"
                  >
                    <div>
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-4">
                        <Image
                          src={item.coverImage}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="inline-block rounded-md bg-blue-50 border border-blue-200/60 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 mb-2">
                        {item.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                      <span>Explore Domain</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          8. CONSULTATION CTA
      ====================================================================== */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950 p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-xs">
                <Sparkles className="h-3 w-3 text-cyan-300" />
                <span>Ready to Implement {solution.name}?</span>
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
                Architect Your Solution With GoTechEdu
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl mx-auto">
                Connect directly with our engineering architects to audit your
                technical requirements and scope a custom deployment plan.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={`/contact?solution=${encodeURIComponent(solution.name)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 shadow-md hover:bg-blue-50 active:scale-95 transition cursor-pointer"
                >
                  <span>Book Technical Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/solution"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition cursor-pointer"
                >
                  <span>All Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
