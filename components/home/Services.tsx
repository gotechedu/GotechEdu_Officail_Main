"use client";

import Link from "next/link";
import React, { useState } from "react";

const services = [
  {
    id: "software",
    category: "Development",
    number: "01",
    icon: "💻",
    title: "Enterprise Software Solutions",
    description:
      "Full-cycle custom software engineering, ERP, CRM, HRMS, POS, and high-performance web & mobile applications tailored to business logic.",
    href: "/solution",
    items: [
      "Custom ERP & CRM",
      "SaaS Platforms",
      "Mobile Apps",
      "API Integration",
    ],
    badge: "Popular",
  },
  {
    id: "ai",
    category: "Artificial Intelligence",
    number: "02",
    icon: "🤖",
    title: "AI & Intelligent Automation",
    description:
      "Accelerate workflows with custom LLM agents, retrieval-augmented generation (RAG), predictive analytics, and automated decision engines.",
    href: "/solution",
    items: [
      "AI Autonomous Agents",
      "Custom LLMs",
      "RAG Search",
      "Process Automation",
    ],
    badge: "High Growth",
  },
  {
    id: "cloud",
    category: "Infrastructure",
    number: "03",
    icon: "☁️",
    title: "Cloud Services & DevOps",
    description:
      "Build resilient cloud architecture, automated CI/CD pipelines, Kubernetes orchestration, and 24/7 security monitoring on AWS, Azure, & GCP.",
    href: "/solution",
    items: [
      "AWS & Azure",
      "DevOps Pipelines",
      "Kubernetes",
      "Disaster Recovery",
    ],
    badge: "Enterprise",
  },
  {
    id: "marketing",
    category: "Growth",
    number: "04",
    icon: "📈",
    title: "Data-Driven Digital Marketing",
    description:
      "Scale brand reach and acquisition through SEO, conversion rate optimization (CRO), performance marketing, and target audience engagement.",
    href: "/solution",
    items: [
      "Search Engine Optimization",
      "Performance Ads",
      "Growth Analytics",
      "Brand Strategy",
    ],
    badge: "ROI Focused",
  },
  {
    id: "education",
    category: "Education",
    number: "05",
    icon: "🎓",
    title: "Technology Education & Upskilling",
    description:
      "Industry-aligned technology courses, corporate training bootcamps, AI engineering certifications, and hands-on developer mentorship.",
    href: "/solution",
    items: [
      "Corporate Training",
      "Full-Stack Bootcamps",
      "AI Certifications",
      "Hands-on Projects",
    ],
    badge: "Career Impact",
  },
  {
    id: "consulting",
    category: "Strategy",
    number: "06",
    icon: "💡",
    title: "Technology & Product Consulting",
    description:
      "Strategic technical advisory, legacy system modernization, security audit, microservices refactoring, and digital transformation roadmaps.",
    href: "/solution",
    items: [
      "System Architecture",
      "Tech Audit",
      "Digital Roadmap",
      "CTO-as-a-Service",
    ],
    badge: "Strategic",
  },
];

const categories = [
  "All",
  "Development",
  "Artificial Intelligence",
  "Infrastructure",
  "Growth",
  "Education",
  "Strategy",
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="bg-slate-50/60 py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Core Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              End-to-End Technology Solutions Designed for Scale.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              From building custom enterprise software and deployable AI engines
              to cloud infrastructure, growth marketing, and tech
              training—GotechEdu is your full-spectrum technology partner.
            </p>
          </div>

          <Link
            href="/solution"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition"
          >
            Explore All Solutions & Services
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div>
                {/* Top Info Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 border border-blue-100">
                      {service.icon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Link Action */}
              <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <span className="text-xs text-slate-400">Enterprise Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
