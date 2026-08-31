"use client";

import Link from "next/link";
import React, { useState } from "react";

const solutionCategories = [
  { id: "all", name: "All Solutions", icon: "⚡" },
  { id: "software", name: "Enterprise Software", icon: "🏢" },
  { id: "ai", name: "AI & Automation", icon: "🤖" },
  { id: "cloud", name: "Cloud & DevOps", icon: "☁️" },
  { id: "cybersecurity", name: "Cybersecurity & Defense", icon: "🛡️" },
  { id: "industries", name: "Industry Solutions", icon: "🌐" },
];

const enterpriseSoftware = [
  {
    id: "crm",
    title: "Customer Relationship Management (CRM)",
    category: "software",
    badge: "Revenue Growth",
    icon: "📈",
    color: "from-blue-500 to-cyan-500",
    description:
      "Omnichannel lead scoring, automated sales pipelines, customer lifecycle tracking, and seamless communication intelligence.",
    features: [
      "Pipeline & Deal Stage Automation",
      "Omnichannel Communication Hub",
      "AI Predictive Lead Scoring",
      "Custom Reporting & KPI Dashboards",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    category: "software",
    badge: "Core Operations",
    icon: "⚙️",
    color: "from-indigo-500 to-blue-600",
    description:
      "Unify financial ledgers, human capital, procurement, inventory logistics, and production planning in one cohesive single pane of glass.",
    features: [
      "Multi-Currency Financial Ledger",
      "Automated Supply Chain Sync",
      "Role-Based Access & Audit Trails",
      "ISO27001 & SOC2 Compliant",
    ],
    techStack: ["Microservices", "Docker", "PostgreSQL", "Kafka"],
  },
  {
    id: "hrms",
    title: "Human Resource Management (HRMS)",
    category: "software",
    badge: "Talent Lifecycle",
    icon: "👥",
    color: "from-purple-500 to-indigo-600",
    description:
      "Complete employee lifecycle suite including biometric attendance, dynamic payroll processing, performance OKRs, and talent onboarding.",
    features: [
      "Automated Payroll & Tax Engine",
      "Self-Service Employee Portal",
      "Leave & Attendance Tracking",
      "Talent Performance & Review OKRs",
    ],
    techStack: ["React", "NestJS", "MongoDB", "AWS S3"],
  },
  {
    id: "pos",
    title: "Omnichannel Point-of-Sale (POS)",
    category: "software",
    badge: "Retail & Commerce",
    icon: "💳",
    color: "from-emerald-500 to-teal-600",
    description:
      "High-speed retail billing, barcode scanning, offline mode sync, inventory reservation, and multi-store payment terminal integrations.",
    features: [
      "Offline-First SQLite Cache Sync",
      "Multi-Store Inventory Management",
      "Universal Payment Gateways",
      "Loyalty & Customer Rewards Engine",
    ],
    techStack: ["Electron", "React Native", "Go", "GraphQL"],
  },
  {
    id: "lms",
    title: "Intelligent Learning Platform (LMS)",
    category: "software",
    badge: "EdTech Flagship",
    icon: "🎓",
    color: "from-amber-500 to-orange-600",
    description:
      "Interactive course authoring, automated assessments, live virtual classrooms, proctored examinations, and blockchain-verified certificates.",
    features: [
      "AI Adaptive Learning Paths",
      "Live Video Classrooms (WebRTC)",
      "Automated Grading & Analytics",
      "Verified Certificate Generation",
    ],
    techStack: ["WebRTC", "Next.js", "Python", "Kubernetes"],
  },
  {
    id: "inventory",
    title: "Smart Inventory & Warehouse Management",
    category: "software",
    badge: "Logistics",
    icon: "📦",
    color: "from-cyan-500 to-blue-500",
    description:
      "Real-time stock level monitoring across global warehouses, batch barcode tracking, automated purchase orders, and supplier reconciliation.",
    features: [
      "Barcode & RFID Tag Scanning",
      "Predictive Stock Replenishment",
      "Multi-Warehouse Transfer Routing",
      "Supplier Performance Auditing",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: "ecommerce",
    title: "B2B / B2C E-Commerce Platforms",
    category: "software",
    badge: "Scalable Commerce",
    icon: "🛍️",
    color: "from-rose-500 to-pink-600",
    description:
      "High-throughput digital storefronts, custom marketplaces, multi-vendor management, automated shipping APIs, and dynamic pricing engines.",
    features: [
      "Headless E-Commerce Architecture",
      "Global Stripe & PayPal Integrations",
      "Multi-Vendor Marketplace Split",
      "High-Volume Concurrency Support",
    ],
    techStack: ["Next.js", "Shopify Plus / Custom", "Node.js", "Redis"],
  },
  {
    id: "project-mgmt",
    title: "Agile Project & Workflow Management",
    category: "software",
    badge: "Productivity",
    icon: "📋",
    color: "from-teal-500 to-emerald-600",
    description:
      "Centralized task boards, Gantt timeline tracking, sprint milestones, resource allocation, and automated team productivity analytics.",
    features: [
      "Kanban, Scrum & Gantt Views",
      "Resource Utilization Heatmaps",
      "Automated Milestone Slack/Email Alerts",
      "Time Tracking & Billing Export",
    ],
    techStack: ["React", "Node.js", "WebSockets", "MongoDB"],
  },
];

const aiCapabilities = [
  {
    title: "Autonomous AI Agents",
    icon: "🤖",
    tag: "Agentic AI",
    description:
      "Multi-agent collaborative systems capable of autonomous decision-making, API execution, multi-step research, and customer workflow resolution.",
    metrics: "90% Triage Automated",
  },
  {
    title: "Enterprise RAG Pipelines",
    icon: "🧠",
    tag: "Search & Retrieval",
    description:
      "Retrieval-augmented generation connecting custom LLMs directly to your internal documents, SQL databases, and knowledge bases with zero hallucination.",
    metrics: "<150ms Vector Query",
  },
  {
    title: "Fine-Tuned Proprietary LLMs",
    icon: "⚡",
    tag: "Custom Models",
    description:
      "Custom domain-adapted LLMs fine-tuned on your organization's specific technical, legal, or medical datasets for maximum precision.",
    metrics: "99.2% Task Accuracy",
  },
  {
    title: "Computer Vision & Visual Intelligence",
    icon: "👁️",
    tag: "Visual AI",
    description:
      "Automated defect detection, facial verification, document OCR parsing, and real-time surveillance video analytics pipelines.",
    metrics: "Sub-Second Processing",
  },
  {
    title: "Predictive Analytics & Forecasting",
    icon: "📊",
    tag: "Data Science",
    description:
      "Machine learning models for customer churn anticipation, demand forecasting, algorithmic dynamic pricing, and risk prevention.",
    metrics: "+35% Forecast Precision",
  },
  {
    title: "Intelligent Process Automation (IPA)",
    icon: "🔄",
    tag: "RPA + AI",
    description:
      "End-to-end extraction of complex unstructured PDFs, invoice approvals, email routing, and legacy system form filling without human intervention.",
    metrics: "5x Speed Increase",
  },
];

const cloudServices = [
  {
    title: "Multi-Cloud Architecture & Migration",
    desc: "Seamless lift-and-shift or cloud-native re-architecting across AWS, Microsoft Azure, and Google Cloud Platform with zero downtime.",
    icon: "☁️",
  },
  {
    title: "DevOps & Continuous CI/CD Pipelines",
    desc: "Automated test suites, GitHub Actions / GitLab CI workflows, preview environments, and blue-green production zero-downtime rollouts.",
    icon: "🚀",
  },
  {
    title: "Kubernetes & Microservices Orchestration",
    desc: "Containerized application scaling with automated horizontal pod autoscaling (HPA), Istio service mesh, and self-healing clusters.",
    icon: "☸️",
  },
  {
    title: "Cloud Security, Compliance & Disaster Recovery",
    desc: "Multi-region failover, geo-replicated backups, DDoS mitigation via Cloudflare, and automated SOC2 / HIPAA compliance telemetry.",
    icon: "🔒",
  },
];

const cybersecuritySolutions = [
  {
    title: "Zero-Trust Architecture & IAM Governance",
    desc: "Least-privilege access enforcement, multi-factor authentication (MFA), biometric SSO, and encrypted identity boundaries across all corporate assets.",
    icon: "🛡️",
    badge: "Zero-Trust",
    metric: "100% Identity Verified",
  },
  {
    title: "VAPT & Penetration Testing",
    desc: "Simulated adversary red-teaming, OWASP Top 10 web/mobile exploitation, API fuzz testing, and actionable remediation audit blueprints.",
    icon: "🎯",
    badge: "Red Team",
    metric: "OWASP Compliant",
  },
  {
    title: "24/7 Managed SOC & SIEM Telemetry",
    desc: "Continuous threat detection, automated Splunk / Sentinel log ingestion, AI anomaly triage, and sub-15-minute critical incident containment.",
    icon: "👁️",
    badge: "24/7 Monitoring",
    metric: "<15 Min Response",
  },
  {
    title: "SOC 2 Type II, ISO 27001 & GDPR Compliance",
    desc: "End-to-end compliance readiness auditing, data encryption key management (KMS), privacy impact assessments, and continuous audit trails.",
    icon: "📋",
    badge: "Audited",
    metric: "ISO 27001 Ready",
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    desc: "Real-time misconfiguration discovery across AWS/Azure/GCP, automated IAM role pruning, and zero-trust cloud network segmentation.",
    icon: "☁️",
    badge: "Cloud Defense",
    metric: "Zero Drift",
  },
  {
    title: "DevSecOps & Automated Code Audits",
    desc: "Static and dynamic AST security analysis (SAST/DAST), container image CVE scanning, and automated dependency vulnerability patch bots in CI/CD.",
    icon: "⚙️",
    badge: "Automated",
    metric: "CI/CD Integrated",
  },
];

const industrySolutions = [
  {
    name: "Education & EdTech",
    icon: "🎓",
    desc: "AI learning paths, virtual proctoring, student information systems, and corporate bootcamps.",
  },
  {
    name: "FinTech & Banking",
    icon: "🏦",
    desc: "High-frequency trading engines, fraud detection algorithms, KYC automation, and secure payment APIs.",
  },
  {
    name: "Healthcare & MedTech",
    icon: "🏥",
    desc: "HIPAA-compliant patient portals, telemedicine WebRTC streams, EHR integration, and medical AI diagnostic support.",
  },
  {
    name: "Retail & E-Commerce",
    icon: "🛍️",
    desc: "Headless storefronts, personalized AI recommendation carousels, omnichannel POS, and warehouse logistics.",
  },
  {
    name: "Real Estate & PropTech",
    icon: "🏢",
    desc: "Virtual 3D property tours, automated tenant lease agreements, CRM portals, and smart building IoT integration.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: "🚚",
    desc: "Real-time GPS fleet tracking, warehouse RFID inventory management, route optimization, and supplier dispatch portals.",
  },
];

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSolution, setSelectedSolution] = useState<any>(null);

  const filteredSoftware = enterpriseSoftware.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          2. ENTERPRISE SOFTWARE SUITE
      ====================================================== */}
      <section id="software" className="lg:py-10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
                Core Systems
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Enterprise Application Suite
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Robust, custom-engineered software architectures designed to
                streamline operations, drive revenue, and scale with zero
                technical friction.
              </p>
            </div>

            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              8 Enterprise Platforms Available
            </span>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredSoftware.map((solution) => (
              <div
                key={solution.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${solution.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-2xl shadow-2xs border border-slate-100 group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">
                      {solution.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {solution.description}
                  </p>

                  {/* Key Feature Checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {solution.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition group-hover:text-blue-700"
                  >
                    <span>View Specs</span>
                    <span>→</span>
                  </button>

                  <span className="text-[10px] font-mono font-medium text-slate-400">
                    Enterprise Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          3. ARTIFICIAL INTELLIGENCE & AGENTIC AUTOMATION
      ====================================================== */}
      <section
        id="ai"
        className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 text-white"
      >
        {/* Background glow orbs */}
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
              Next-Gen Intelligence
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Autonomous AI Systems Built for Deep Precision.
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Empower your enterprise with autonomous agent workflows,
              enterprise RAG vector search, custom fine-tuned LLMs, and
              real-time computer vision.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((ai, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-slate-900"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{ai.icon}</span>
                    <span className="rounded-full bg-purple-950/80 px-3 py-1 text-[11px] font-mono font-semibold text-purple-300 border border-purple-800">
                      {ai.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {ai.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {ai.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    ⚡ {ai.metrics}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-slate-300 hover:text-white transition"
                  >
                    Deploy Agent →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. CLOUD & DEVOPS INFRASTRUCTURE
      ====================================================== */}
      <section
        id="cloud"
        className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-600">
                High-Availability DevOps
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Multi-Cloud Architecture & 99.99% Uptime Engineering.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We design and orchestrate cloud infrastructure capable of
                handling high concurrency, multi-region failovers, automated
                disaster recovery, and 24/7 security auditing.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-extrabold text-slate-900">
                    99.99%
                  </p>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Uptime SLA Guarantee
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-extrabold text-slate-900">Zero</p>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Downtime Deployments
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                >
                  Schedule Infrastructure Review
                </Link>
              </div>
            </div>

            {/* Right Cards Column */}
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {cloudServices.map((cloud, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                >
                  <span className="text-3xl">{cloud.icon}</span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                    {cloud.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {cloud.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          5. CYBERSECURITY & THREAT DEFENSE SECTION
      ====================================================== */}
      <section
        id="cybersecurity"
        className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
              Enterprise Defense & Compliance
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Zero-Trust Cybersecurity & Threat Intelligence.
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg leading-relaxed">
              Protect your applications, cloud infrastructure, and proprietary data pipelines with bank-grade defense architectures, red-team penetration audits, and 24/7 SOC monitoring.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cybersecuritySolutions.map((sec, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-950"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{sec.icon}</span>
                    <span className="rounded-full bg-emerald-950 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-300 border border-emerald-800">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-white transition group-hover:text-emerald-300">
                    {sec.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    🛡️ {sec.metric}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-slate-300 hover:text-emerald-300 transition"
                  >
                    Request Audit →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. INDUSTRY-SPECIFIC SOLUTIONS
      ====================================================== */}
      <section id="industries" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Domain Expertise
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Solutions Built Around Your Industry Workflows.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Technology accelerates fastest when built with deep context of
              compliance, customer touchpoints, and domain operational models.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((ind) => (
              <div
                key={ind.name}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{ind.icon}</span>
                    <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                      Explore Sector →
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {ind.name}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-mono text-slate-400">
                    Tailored Compliance & SLAs
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          7. ENTERPRISE CONSULTATION CTA
      ====================================================== */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950 p-8 sm:p-14 lg:p-20 text-white shadow-2xl text-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-cyan-300 border border-white/20 backdrop-blur-md">
                Let's Build Together
              </span>
              <h2 className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to Accelerate Your Enterprise Technology?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
                Connect with our principal architects and AI engineers to map
                out your digital roadmap, calculate ROI, and deploy modern
                solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-blue-700 shadow-xl transition-all duration-200 hover:scale-105 hover:bg-slate-50 active:scale-100"
                >
                  Schedule Executive Consultation
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-black/30 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-white/15"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE SOLUTION DETAIL MODAL
      ====================================================== */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl animate-float">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedSolution.icon}</span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {selectedSolution.title}
                  </h3>
                  <span className="text-xs font-mono text-blue-600 font-semibold">
                    {selectedSolution.badge}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
              >
                ✕
              </button>
            </div>

            <div className="mt-5">
              <p className="text-sm leading-relaxed text-slate-600">
                {selectedSolution.description}
              </p>

              <h4 className="mt-6 font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">
                Key Technical Capabilities
              </h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {selectedSolution.features.map((f: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs font-medium text-slate-700 border border-slate-200/70"
                  >
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h4 className="mt-6 font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">
                Production Tech Stack
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedSolution.techStack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-mono font-semibold text-blue-700 border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}