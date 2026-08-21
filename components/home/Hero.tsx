"use client";

import Link from "next/link";
import React, { useState } from "react";

function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "cloud" | "software" | "analytics">("ai");

  const tabDetails = {
    ai: {
      title: "AI & Automation Hub",
      status: "Active • 99.8% Accuracy",
      metric: "4.2M Requests/mo",
      tag: "LLM + RAG Pipeline",
      color: "from-blue-500 to-cyan-500",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    cloud: {
      title: "Multi-Cloud Infrastructure",
      status: "Operational • 99.99% Uptime",
      metric: "Multi-Region Failover",
      tag: "AWS & Kubernetes",
      color: "from-indigo-500 to-blue-600",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    software: {
      title: "Enterprise Application Suite",
      status: "Deployed • Secure ISO27001",
      metric: "ERP, CRM & Custom Apps",
      tag: "Microservices Architecture",
      color: "from-cyan-500 to-teal-500",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    analytics: {
      title: "Data & Growth Intelligence",
      status: "Live Stream • Real-time",
      metric: "+340% ROI Tracked",
      tag: "Predictive Analytics",
      color: "from-blue-600 to-indigo-600",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50 to-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Light Gradient Orbs */}
      <div className="pointer-events-none absolute -left-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md transition hover:border-blue-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 sm:text-sm">
                Official Enterprise & Tech Ecosystem
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
              Architecting the next generation of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Software, AI & Cloud Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              GotechEdu delivers enterprise-grade software development, artificial intelligence, multi-cloud engineering, and professional technology education to empower modern businesses and tech leaders.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/solution"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
              >
                Explore Enterprise Solutions
                <svg
                  className="ml-2.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-7 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                Schedule Executive Consultation
              </Link>
            </div>

            {/* Key Trust Highlights */}
            <div className="mt-10 border-t border-slate-200/80 pt-7">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    500+
                  </p>
                  <p className="text-xs font-medium text-slate-500 sm:text-sm">
                    Enterprises & Clients
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    99.99%
                  </p>
                  <p className="text-xs font-medium text-slate-500 sm:text-sm">
                    Uptime & SLA Guarantee
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    50K+
                  </p>
                  <p className="text-xs font-medium text-slate-500 sm:text-sm">
                    Tech Leaders Trained
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Interactive Light Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backing Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20 blur-xl" />

              {/* Light Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                {/* Header bar of visual */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-semibold text-slate-400">
                      gotechedu.control-plane
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
                    System Healthy
                  </span>
                </div>

                {/* Sub-tabs inside visual */}
                <div className="mt-5 grid grid-cols-4 gap-1.5 rounded-xl bg-slate-100/80 p-1.5 text-center text-xs font-medium text-slate-600">
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`rounded-lg py-2 transition ${activeTab === "ai"
                        ? "bg-white text-blue-600 shadow-sm font-semibold"
                        : "hover:text-slate-900"
                      }`}
                  >
                    AI
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`rounded-lg py-2 transition ${activeTab === "cloud"
                        ? "bg-white text-indigo-600 shadow-sm font-semibold"
                        : "hover:text-slate-900"
                      }`}
                  >
                    Cloud
                  </button>
                  <button
                    onClick={() => setActiveTab("software")}
                    className={`rounded-lg py-2 transition ${activeTab === "software"
                        ? "bg-white text-cyan-600 shadow-sm font-semibold"
                        : "hover:text-slate-900"
                      }`}
                  >
                    App
                  </button>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`rounded-lg py-2 transition ${activeTab === "analytics"
                        ? "bg-white text-blue-600 shadow-sm font-semibold"
                        : "hover:text-slate-900"
                      }`}
                  >
                    Data
                  </button>
                </div>

                {/* Tab Info Box */}
                <div className="mt-5 rounded-xl border border-slate-200/90 bg-slate-50/50 p-5">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-semibold ${tabDetails[activeTab].badgeBg}`}>
                      {tabDetails[activeTab].tag}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {tabDetails[activeTab].status}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {tabDetails[activeTab].title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-blue-600 sm:text-sm">
                    Performance Metric: {tabDetails[activeTab].metric}
                  </p>

                  {/* Progress / Performance Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-slate-500 font-medium mb-1">
                      <span>Efficiency Index</span>
                      <span className="text-slate-800 font-semibold">98.4%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${tabDetails[activeTab].color} transition-all duration-500`}
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Node Cards */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Automated Workflow Engine
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Zero-latency integration APIs
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs">
                        🔒
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Security & Compliance Shield
                        </p>
                        <p className="text-[11px] text-slate-500">
                          SOC2 Type II & GDPR Compliant
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Footer bar inside visual */}
                <div className="mt-5 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                  <span>GotechEdu Architecture v4.2</span>
                  <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
                    View Live Metrics →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
