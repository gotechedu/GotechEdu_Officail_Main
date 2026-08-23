"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, use } from "react";

const articlesDatabase: Record<string, any> = {
  "how-ai-is-transforming-modern-businesses": {
    title: "How Autonomous AI Agents Are Transforming Enterprise Operations in 2026",
    category: "Artificial Intelligence",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Vikram Sharma",
      role: "Head of AI Research & Solutions",
      initials: "VS",
      avatarBg: "bg-blue-600",
      bio: "Dr. Vikram Sharma leads AI architecture and agentic workflow engineering at GotechEdu, specializing in enterprise RAG vector retrieval and foundation model fine-tuning.",
    },
    intro:
      "Artificial intelligence has evolved past single-prompt chatbot interfaces. In 2026, enterprise transformation is driven by autonomous, multi-agent systems that autonomously plan, execute APIs, and resolve complex workflows with minimal human friction.",
    keyTakeaways: [
      "Multi-agent architectures can reduce operational triage resolution time by up to 75%.",
      "Enterprise RAG combined with deterministic guardrails delivers <150ms semantic search with 99.8% precision.",
      "Fine-tuning open-source models with LoRA provides enterprise data sovereignty while reducing inference cloud compute by 60%.",
    ],
    sections: [
      {
        heading: "1. The Shift from Passive LLMs to Autonomous Agent Swarms",
        content: `Early iterations of generative AI relied heavily on passive question-answering. Today, autonomous agents leverage tool-calling frameworks to interact with databases, REST APIs, and legacy ERP systems.

A modern enterprise workflow involves specialized agent teams:
• Orchestrator Agent: Decomposes complex executive requests into executable sub-tasks.
• Retrieval Agent: Fetches proprietary data vectors from ChromaDB/Pinecone.
• Validation Agent: Verifies schema compliance, privacy policies, and security guardrails before committing database transactions.`,
      },
      {
        heading: "2. Solving Hallucination with Enterprise RAG & Hybrid Vector Search",
        content: `Data hallucination is unacceptable in finance, healthcare, and enterprise software. To achieve deterministic reliability, GotechEdu implements Hybrid Dense-Sparse Vector Search:

Combining BM25 keyword matching with OpenAI/Cohere dense vector embeddings ensures that exact entity identifiers (e.g., invoice numbers, customer IDs) are matched alongside conceptual semantic context.`,
      },
      {
        heading: "3. Measurable Enterprise ROI & Real-World Deployments",
        content: `Organizations deploying agentic automation have documented dramatic operational leaps:
1. Customer Support: 90% of routine tier-1 support tickets resolved autonomously in under 30 seconds.
2. Financial Reconciliation: Multi-currency invoice matching reduced from 5 business days to 4 minutes.
3. Code Migration: Automated microservices refactoring from legacy monoliths with automated unit test generation.`,
      },
    ],
  },
  "why-cloud-computing-matters-for-growing-businesses": {
    title: "Multi-Cloud vs Hybrid Cloud: Choosing the Right Architecture for Scale",
    category: "Cloud & DevOps",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Sarah Jenkins",
      role: "Principal Cloud Architect",
      initials: "SJ",
      avatarBg: "bg-indigo-600",
      bio: "Sarah Jenkins has architected high-availability cloud infrastructure for Fortune 500 enterprises across AWS, Google Cloud, and Microsoft Azure.",
    },
    intro:
      "As digital businesses scale, cloud lock-in and unexpected egress costs become significant hurdles. Selecting the optimal multi-cloud vs. hybrid architecture determines reliability, compliance, and developer agility.",
    keyTakeaways: [
      "Multi-cloud architectures provide 99.99% high-availability SLA guarantees against single-provider outages.",
      "Infrastructure as Code (IaC) with Terraform and Kubernetes enables portable, vendor-agnostic deployments.",
      "Automated CI/CD pipelines cut time-to-market in half while eliminating manual configuration drift.",
    ],
    sections: [
      {
        heading: "1. Eliminating Single Point of Failure (SPOF)",
        content: `Relying on a single cloud region or provider exposes businesses to catastrophic downtime during global provider incidents. By engineering Kubernetes clusters across AWS and Azure with active-passive or active-active global load balancers, businesses maintain uninterrupted operations.`,
      },
      {
        heading: "2. Cost Optimization with Spot Instances & FinOps",
        content: `Cloud sprawl accounts for millions in wasted compute. Modern FinOps engineering leverages spot instances, automated scale-to-zero workloads, and reserved instance hedging to slash cloud bills by 35-50%.`,
      },
    ],
  },
  "nextjs-vs-react-which-one-should-you-choose": {
    title: "Next.js 16 App Router vs Traditional Single Page Apps: Production Benchmarks",
    category: "Technology",
    date: "Aug 10, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Aditya Verma",
      role: "Lead Frontend Architect",
      initials: "AV",
      avatarBg: "bg-cyan-600",
      bio: "Aditya specializes in modern frontend engineering, Core Web Vitals optimization, and building accessible, high-performance web applications in Next.js.",
    },
    intro:
      "With Next.js 16 introducing enhanced Turbopack compilation and Partial Prerendering (PPR), the landscape of web architecture has fundamentally shifted away from client-heavy single page applications.",
    keyTakeaways: [
      "Server-side rendering (SSR) and streaming deliver sub-second Largest Contentful Paint (LCP) for enterprise dashboards.",
      "Next.js App Router reduces client-side JavaScript bundle sizes by offloading heavy dependencies to the server.",
      "Built-in SEO metadata management and automated font/image optimization ensure top search rankings.",
    ],
    sections: [
      {
        heading: "1. The Performance Benchmark Comparison",
        content: `Traditional SPAs require browsers to download large JavaScript bundles before rendering any HTML, leading to poor Core Web Vitals on mobile devices. Next.js 16 renders critical HTML on the edge, streaming interactive components progressively.`,
      },
      {
        heading: "2. Server Actions & Zero-API Boilerplate",
        content: `Server Actions allow developers to mutate database state directly from components with full TypeScript type-safety, eliminating hundreds of lines of boilerplate REST endpoint controllers.`,
      },
    ],
  },
  "zero-trust-cybersecurity-guide": {
    title: "Zero-Trust Architecture: Safeguarding Enterprise Cloud Workloads Against Modern Threats",
    category: "Cybersecurity",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Rohan Mehra",
      role: "Chief Information Security Officer",
      initials: "RM",
      avatarBg: "bg-emerald-600",
      bio: "Rohan leads enterprise security defense, zero-trust posture management, and compliance auditing at GotechEdu.",
    },
    intro:
      "Traditional perimeter firewalls are insufficient for distributed remote engineering teams. Zero-Trust enforces continuous verification of identity, device health, and context on every network packet.",
    keyTakeaways: [
      "Zero-Trust eliminates lateral network movement during credential compromises.",
      "Automated SIEM telemetry ingests 100,000+ events per second with AI anomaly detection.",
      "Enforces continuous SOC 2 and ISO 27001 audit compliance trails.",
    ],
    sections: [
      {
        heading: "1. The Principles of Never Trust, Always Verify",
        content: `Every transaction, API call, and database query must be authenticated and authorized. Multi-factor authentication, device posture checks, and micro-segmentation form the core foundation.`,
      },
      {
        heading: "2. Continuous VAPT & Vulnerability Remediation",
        content: `Automated vulnerability scanning in CI/CD ensures container images and external dependencies are free of critical CVEs prior to production deployment.`,
      },
    ],
  },
};

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [copied, setCopied] = useState(false);

  // Fallback to default post if slug is not explicitly keyed
  const post =
    articlesDatabase[slug] ||
    articlesDatabase["how-ai-is-transforming-modern-businesses"];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Header */}
      <section className="bg-[#070e1b] pt-24 pb-14 lg:pt-32 lg:pb-16 text-white relative overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Links */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-300 transition">
              Blog
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="mt-4 font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
            {post.title}
          </h1>

          {/* Author Metadata Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-xs text-white ${post.author.avatarBg}`}
              >
                {post.author.initials}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-[11px] text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Cover Image Banner */}
      {post.coverImage && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-900 shadow-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Intro Callout */}
          <div className="rounded-2xl sm:rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-xs">
            <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium italic">
              "{post.intro}"
            </p>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && (
            <div className="mt-8 rounded-2xl bg-blue-50/70 p-6 border border-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <h3 className="font-heading text-sm font-bold text-blue-900 uppercase tracking-wider">
                  Executive Key Takeaways
                </h3>
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                {post.keyTakeaways.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Sections */}
          <div className="mt-8 space-y-6">
            {post.sections.map((section: any, idx: number) => (
              <div key={idx} className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {section.heading}
                </h2>
                <div className="mt-3 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-slate-700">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Social Share & Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-100 p-4 sm:p-5 border border-slate-200">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
              Share publication:
            </span>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs hover:bg-slate-50 transition"
              >
                <span>{copied ? "✓ Copied!" : "🔗 Copy Link"}</span>
              </button>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-blue-700 transition"
              >
                <span>← All Articles</span>
              </Link>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="mt-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-extrabold text-sm text-white shadow-xs ${post.author.avatarBg}`}
              >
                {post.author.initials}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                  Written by
                </span>
                <h3 className="text-base font-bold text-slate-900">{post.author.name}</h3>
                <p className="text-xs text-slate-500">{post.author.role}</p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="mt-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950 p-6 sm:p-10 text-center text-white shadow-lg">
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold">
              Need Help Implementing This in Your Enterprise?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-blue-100 leading-relaxed">
              Connect directly with our engineering architects to audit your existing stack and deploy custom enterprise solutions.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-md hover:bg-slate-50 transition"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
