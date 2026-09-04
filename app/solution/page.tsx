"use client";

import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Cloud,
  Database,
  Network,
  Server,
  Workflow,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Lock,
  Code2,
  Terminal,
  Search,
  Users,
  CreditCard,
  GraduationCap,
  Boxes,
  ShoppingBag,
  Kanban,
  Brain,
  Bot,
  Eye,
  Activity,
  FileText,
  Building2,
  Landmark,
  Stethoscope,
  Truck,
  X,
  ChevronRight,
  ShieldAlert,
  Zap,
  Radio,
  BarChart3,
} from "lucide-react";

// --- Types ---
interface EnterprisePlatform {
  id: string;
  title: string;
  category: "operations" | "revenue" | "commerce" | "edtech";
  badge: string;
  icon: React.ReactNode;
  gradient: string;
  borderCol: string;
  glowCol: string;
  description: string;
  features: string[];
  techStack: string[];
  sla: string;
}

interface AICapability {
  id: string;
  title: string;
  tag: string;
  icon: React.ReactNode;
  description: string;
  metric: string;
  metricLabel: string;
  gradient: string;
  glowCol: string;
}

// --- Data ---
const architecturePillars = [
  {
    id: "app-layer",
    name: "Application & UX Core",
    tagline: "HIGH-THROUGHPUT PLATFORMS",
    desc: "Next.js micro-frontends, reactive SPAs, and offline-first mobile systems engineered for sub-second responses.",
    color: "#0284c7",
    glow: "rgba(2, 132, 199, 0.4)",
    icon: <Code2 className="w-6 h-6 text-white" strokeWidth={2.2} />,
    gradient: "from-sky-400 to-blue-600",
    tags: ["React 19 / Next.js", "GraphQL", "WebSockets"],
  },
  {
    id: "agentic-ai",
    name: "Autonomous AI Engine",
    tagline: "DEEP INTELLIGENCE",
    desc: "Multi-agent workflows, enterprise RAG vector retrieval, and custom fine-tuned LLMs running with strict governance.",
    color: "#7c3aed",
    glow: "rgba(124, 58, 237, 0.4)",
    icon: <Bot className="w-6 h-6 text-white" strokeWidth={2.2} />,
    gradient: "from-purple-400 to-indigo-600",
    tags: ["Agentic AI", "Vector RAG", "Custom LLMs"],
  },
  {
    id: "cloud-mesh",
    name: "Distributed Cloud Mesh",
    tagline: "99.99% MULTI-REGION SLA",
    desc: "Kubernetes orchestration, automated horizontal scaling, multi-cloud redundancy, and zero-downtime CI/CD.",
    color: "#059669",
    glow: "rgba(5, 150, 105, 0.4)",
    icon: <Cloud className="w-6 h-6 text-white" strokeWidth={2.2} />,
    gradient: "from-emerald-400 to-teal-600",
    tags: ["Kubernetes", "Multi-Cloud", "Istio Mesh"],
  },
  {
    id: "zero-trust",
    name: "Zero-Trust Perimeter",
    tagline: "BANK-GRADE SECURITY",
    desc: "Least-privilege IAM, 24/7 SIEM threat telemetry, continuous VAPT audits, and ISO 27001 / SOC 2 compliance.",
    color: "#ea580c",
    glow: "rgba(234, 88, 12, 0.4)",
    icon: <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.2} />,
    gradient: "from-amber-400 to-orange-600",
    tags: ["SOC 2 Type II", "Zero-Trust", "24/7 SOC"],
  },
];

const enterpriseSoftware: EnterprisePlatform[] = [
  {
    id: "crm",
    title: "Customer Relationship Management (CRM)",
    category: "revenue",
    badge: "Revenue Growth",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" strokeWidth={2.2} />,
    gradient: "from-blue-500 to-cyan-500",
    borderCol: "border-blue-200 hover:border-blue-400",
    glowCol: "rgba(59, 130, 246, 0.35)",
    description:
      "Omnichannel lead scoring, automated sales pipelines, customer lifecycle tracking, and AI-assisted communication intelligence.",
    features: [
      "Pipeline & Deal Stage Automation",
      "Omnichannel Communication Hub (VoIP/Email)",
      "AI Predictive Lead Scoring Engine",
      "Executive Financial & KPI Dashboards",
    ],
    techStack: ["Next.js 15", "Node.js", "PostgreSQL", "Redis", "Kafka"],
    sla: "99.99% Uptime",
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    category: "operations",
    badge: "Core Operations",
    icon: <Layers className="w-6 h-6 text-indigo-500" strokeWidth={2.2} />,
    gradient: "from-indigo-500 to-blue-600",
    borderCol: "border-indigo-200 hover:border-indigo-400",
    glowCol: "rgba(99, 102, 241, 0.35)",
    description:
      "Unify multi-entity financial ledgers, global procurement, inventory logistics, and production planning in a single resilient console.",
    features: [
      "Multi-Currency Automated Financial Ledger",
      "Supply Chain Real-Time Synchronization",
      "Granular Role-Based Access Control (RBAC)",
      "Automated Regulatory & Tax Compliance Engine",
    ],
    techStack: ["Go / Microservices", "Docker", "PostgreSQL", "Kafka", "Redis"],
    sla: "SOC 2 Type II",
  },
  {
    id: "hrms",
    title: "Human Resource Management (HRMS)",
    category: "operations",
    badge: "Talent Lifecycle",
    icon: <Users className="w-6 h-6 text-purple-500" strokeWidth={2.2} />,
    gradient: "from-purple-500 to-indigo-600",
    borderCol: "border-purple-200 hover:border-purple-400",
    glowCol: "rgba(168, 85, 247, 0.35)",
    description:
      "Complete workforce lifecycle management with biometric attendance sync, automated multi-tier payroll, and OKR talent performance.",
    features: [
      "Automated Tax-Compliant Payroll Engine",
      "Self-Service Employee Mobile Portal",
      "Biometric Attendance & Leave Sync",
      "360° Review & Performance OKR Tracking",
    ],
    techStack: ["React", "NestJS", "MongoDB", "AWS S3", "Redis"],
    sla: "GDPR Compliant",
  },
  {
    id: "pos",
    title: "Omnichannel Point-of-Sale (POS)",
    category: "commerce",
    badge: "Retail & Commerce",
    icon: <CreditCard className="w-6 h-6 text-emerald-500" strokeWidth={2.2} />,
    gradient: "from-emerald-500 to-teal-600",
    borderCol: "border-emerald-200 hover:border-emerald-400",
    glowCol: "rgba(16, 185, 129, 0.35)",
    description:
      "High-speed retail checkout, offline-first barcode scanning, automated inventory reservation, and multi-terminal payment gateways.",
    features: [
      "Offline-First SQLite Cache Sync",
      "Multi-Store Real-Time Inventory Control",
      "Universal EMV / Stripe / UPI Gateway Hub",
      "Customer Loyalty & Tiered Rewards Engine",
    ],
    techStack: ["Electron", "React Native", "Go", "GraphQL", "SQLite"],
    sla: "PCI-DSS Level 1",
  },
  {
    id: "lms",
    title: "Intelligent Learning Platform (LMS)",
    category: "edtech",
    badge: "EdTech Flagship",
    icon: (
      <GraduationCap className="w-6 h-6 text-amber-500" strokeWidth={2.2} />
    ),
    gradient: "from-amber-500 to-orange-600",
    borderCol: "border-amber-200 hover:border-amber-400",
    glowCol: "rgba(245, 158, 11, 0.35)",
    description:
      "Interactive course authoring, automated coding sandboxes, live WebRTC classrooms, AI proctoring, and verifiable certificates.",
    features: [
      "AI Adaptive Curriculum & Skill Paths",
      "Ultra-Low Latency Video Classrooms",
      "Interactive Coding Sandbox Labs",
      "Cryptographically Verified Credential Minting",
    ],
    techStack: ["WebRTC", "Next.js", "Python", "Docker", "PostgreSQL"],
    sla: "ISO 27001",
  },
  {
    id: "inventory",
    title: "Smart Inventory & Warehouse Suite",
    category: "operations",
    badge: "Logistics",
    icon: <Boxes className="w-6 h-6 text-cyan-500" strokeWidth={2.2} />,
    gradient: "from-cyan-500 to-blue-500",
    borderCol: "border-cyan-200 hover:border-cyan-400",
    glowCol: "rgba(6, 182, 212, 0.35)",
    description:
      "Real-time stock level monitoring across global warehouses, batch barcode tracking, automated purchase orders, and supplier reconciliation.",
    features: [
      "RFID & High-Density Barcode Audits",
      "Predictive Stock Depletion Machine Learning",
      "Multi-Warehouse Cross-Docking Logistics",
      "Automated Supplier Re-Ordering Workflows",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Redis"],
    sla: "Zero Stock Drift",
  },
  {
    id: "ecommerce",
    title: "B2B / B2C High-Volume E-Commerce",
    category: "commerce",
    badge: "Scalable Commerce",
    icon: <ShoppingBag className="w-6 h-6 text-rose-500" strokeWidth={2.2} />,
    gradient: "from-rose-500 to-pink-600",
    borderCol: "border-rose-200 hover:border-rose-400",
    glowCol: "rgba(244, 63, 94, 0.35)",
    description:
      "Headless digital storefronts, custom multi-vendor marketplaces, dynamic pricing algorithms, and high-concurrency checkout pipelines.",
    features: [
      "Headless Microservice Storefront Architecture",
      "Multi-Currency Global Payment Routing",
      "Multi-Vendor Marketplace Automated Payouts",
      "100,000+ Concurrent Requests Handled",
    ],
    techStack: ["Next.js", "Node.js", "Tailwind CSS", "Redis", "PostgreSQL"],
    sla: "Sub-50ms TTFB",
  },
  {
    id: "project-mgmt",
    title: "Agile Project & Workflow Automation",
    category: "operations",
    badge: "Productivity",
    icon: <Kanban className="w-6 h-6 text-teal-500" strokeWidth={2.2} />,
    gradient: "from-teal-500 to-emerald-600",
    borderCol: "border-teal-200 hover:border-teal-400",
    glowCol: "rgba(20, 184, 166, 0.35)",
    description:
      "Centralized task boards, Gantt timeline tracking, sprint milestones, resource capacity heatmaps, and automated delivery analytics.",
    features: [
      "Dynamic Kanban, Gantt, and Sprint Boards",
      "Real-Time Team Workload & Heatmap Metrics",
      "Automated Slack / Microsoft Teams Bot Alerts",
      "Integrated Time-Tracking & Invoicing Export",
    ],
    techStack: ["React", "Node.js", "WebSockets", "MongoDB", "Tailwind CSS"],
    sla: "99.9% Uptime",
  },
];

const aiCapabilities: AICapability[] = [
  {
    id: "autonomous-agents",
    title: "Autonomous Multi-Agent Swarms",
    tag: "Agentic AI",
    icon: <Bot className="w-7 h-7 text-cyan-400" />,
    description:
      "Coordinated AI agents capable of autonomous research, external API execution, multi-step problem solving, and automated customer ticket resolution.",
    metric: "92%+",
    metricLabel: "Tasks Resolved Autonomously",
    gradient: "from-cyan-500 to-blue-600",
    glowCol: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: "enterprise-rag",
    title: "Enterprise RAG Vector Pipelines",
    tag: "Deep Search",
    icon: <Brain className="w-7 h-7 text-purple-400" />,
    description:
      "Retrieval-augmented generation connecting custom LLMs directly to your internal PDFs, databases, and code repositories with zero hallucination.",
    metric: "<110ms",
    metricLabel: "Vector Semantic Query Latency",
    gradient: "from-purple-500 to-indigo-600",
    glowCol: "rgba(168, 85, 247, 0.3)",
  },
  {
    id: "finetuned-llms",
    title: "Domain-Adapted Fine-Tuned LLMs",
    tag: "Custom Models",
    icon: <Sparkles className="w-7 h-7 text-amber-400" />,
    description:
      "Proprietary open-weight models fine-tuned on your organization's legal, financial, or technical domain vocabulary with full on-premise privacy.",
    metric: "99.4%",
    metricLabel: "Domain Nomenclature Accuracy",
    gradient: "from-amber-500 to-orange-600",
    glowCol: "rgba(245, 158, 11, 0.3)",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Visual Intelligence",
    tag: "Visual AI",
    icon: <Eye className="w-7 h-7 text-emerald-400" />,
    description:
      "Automated industrial defect detection, biometric authentication, document OCR parsing, and real-time CCTV anomaly recognition.",
    metric: "60 FPS",
    metricLabel: "Edge Video Stream Inference",
    gradient: "from-emerald-500 to-teal-600",
    glowCol: "rgba(16, 185, 129, 0.3)",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics & Forecasting",
    tag: "Data Science",
    icon: <BarChart3 className="w-7 h-7 text-sky-400" />,
    description:
      "Statistical ML models for real-time customer churn anticipation, algorithmic demand forecasting, dynamic pricing, and inventory optimization.",
    metric: "+38%",
    metricLabel: "Forecast Accuracy Improvement",
    gradient: "from-blue-500 to-cyan-500",
    glowCol: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Document Processing (IDP)",
    tag: "RPA + AI",
    icon: <Workflow className="w-7 h-7 text-rose-400" />,
    description:
      "End-to-end extraction of complex unstructured invoices, contracts, medical records, and automated cross-database validation with zero human touch.",
    metric: "6.5x",
    metricLabel: "Faster Processing Speed",
    gradient: "from-rose-500 to-red-600",
    glowCol: "rgba(244, 63, 94, 0.3)",
  },
];

const cloudDevOpsServices = [
  {
    title: "Multi-Cloud Architecture & Migration",
    desc: "Seamless lift-and-shift or cloud-native re-architecting across AWS, Microsoft Azure, and GCP with automated cost optimization.",
    icon: <Cloud className="w-6 h-6 text-sky-500" />,
    metric: "40% Cloud Cost Reduction",
  },
  {
    title: "DevOps & Zero-Downtime CI/CD",
    desc: "Automated test suites, preview environments, blue-green deployment rollouts, and GitHub Actions / GitLab CI orchestration.",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    metric: "Daily Production Releases",
  },
  {
    title: "Kubernetes & Istio Service Mesh",
    desc: "Production Kubernetes clusters with automated horizontal pod autoscaling (HPA), traffic splitting, and self-healing resilience.",
    icon: <Server className="w-6 h-6 text-indigo-500" />,
    metric: "Autoscale in Seconds",
  },
  {
    title: "Disaster Recovery & Multi-Region Backup",
    desc: "Geo-replicated database backups, active-passive automated failover, DDoS mitigation, and continuous SOC 2 telemetry.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    metric: "RPO < 1 min, RTO < 5 min",
  },
];

const cybersecuritySolutions = [
  {
    title: "Zero-Trust Architecture & IAM",
    desc: "Least-privilege policy enforcement, biometric MFA, SSO, and granular micro-segmented perimeter boundaries across all enterprise resources.",
    icon: <Lock className="w-6 h-6 text-emerald-400" />,
    badge: "Identity Defense",
    metric: "100% MFA Enforced",
  },
  {
    title: "VAPT & Red-Team Penetration Audits",
    desc: "Simulated adversary penetration attacks, OWASP Top 10 web/API fuzzing, source code static analysis, and remediation blueprints.",
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    badge: "Red Team",
    metric: "Zero Critical Vulnerabilities",
  },
  {
    title: "24/7 Managed SOC & SIEM Telemetry",
    desc: "Continuous SIEM log ingestion, Splunk / Microsoft Sentinel monitoring, automated AI alert triage, and rapid incident containment.",
    icon: <ShieldAlert className="w-6 h-6 text-purple-400" />,
    badge: "24/7 Monitoring",
    metric: "<12 Min Containment",
  },
  {
    title: "SOC 2 Type II & ISO 27001 Compliance",
    desc: "End-to-end compliance readiness auditing, encrypted key management (AWS KMS), privacy impact reports, and continuous audit trails.",
    icon: <FileText className="w-6 h-6 text-amber-400" />,
    badge: "Audit Certified",
    metric: "100% Audit Readiness",
  },
  {
    title: "Cloud Security Posture Management (CSPM)",
    desc: "Real-time misconfiguration detection across AWS/GCP/Azure, automated IAM role pruning, and zero-drift infrastructure compliance.",
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    badge: "Cloud Defense",
    metric: "Continuous Drift Detection",
  },
  {
    title: "DevSecOps & Automated Code Audits",
    desc: "SAST, DAST, container image CVE scanning, and automated dependency security patch bots embedded directly into CI/CD pipelines.",
    icon: <Code2 className="w-6 h-6 text-rose-400" />,
    badge: "CI/CD Guard",
    metric: "Pre-Commit CVE Scanning",
  },
];

const industryVerticals = [
  {
    name: "FinTech & Banking",
    icon: <Landmark className="w-6 h-6 text-blue-600" />,
    desc: "High-frequency transaction processing, algorithmic fraud detection, e-KYC automation, and secure payment APIs.",
    compliance: "PCI-DSS Level 1 / SOC 2",
    accent: "border-blue-200 hover:border-blue-400",
  },
  {
    name: "Education & EdTech",
    icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    desc: "Adaptive AI tutoring pathways, virtual proctoring, student information systems, and verifiable digital diplomas.",
    compliance: "FERPA / COPPA Compliant",
    accent: "border-amber-200 hover:border-amber-400",
  },
  {
    name: "Healthcare & MedTech",
    icon: <Stethoscope className="w-6 h-6 text-emerald-600" />,
    desc: "HIPAA-compliant patient portals, WebRTC telemedicine streams, EHR integrations, and clinical diagnostic AI pipelines.",
    compliance: "HIPAA / HITRUST Ready",
    accent: "border-emerald-200 hover:border-emerald-400",
  },
  {
    name: "Retail & E-Commerce",
    icon: <ShoppingBag className="w-6 h-6 text-purple-600" />,
    desc: "Omnichannel inventory synchronization, headless commerce frontends, dynamic recommendation engines, and POS.",
    compliance: "High-Concurrency Scalability",
    accent: "border-purple-200 hover:border-purple-400",
  },
  {
    name: "Real Estate & PropTech",
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    desc: "Interactive 3D virtual property tours, automated digital lease management, smart building IoT, and tenant portals.",
    compliance: "Cloud-Native Infrastructure",
    accent: "border-cyan-200 hover:border-cyan-400",
  },
  {
    name: "Logistics & Supply Chain",
    icon: <Truck className="w-6 h-6 text-orange-600" />,
    desc: "Real-time fleet GPS tracking, automated warehouse RFID sorting, dispatch routing, and supplier portal synchronization.",
    compliance: "Zero-Latency IoT Pipeline",
    accent: "border-orange-200 hover:border-orange-400",
  },
];

export default function SolutionPage() {
  const [selectedSoftwareCategory, setSelectedSoftwareCategory] =
    useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSolution, setSelectedSolution] =
    useState<EnterprisePlatform | null>(null);

  // 3D Parallax Tilt state
  const [tiltStates, setTiltStates] = useState<{
    [key: string]: { rotateX: number; rotateY: number; isHovered: boolean };
  }>({});

  const handleMouseMove = (id: string, e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

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
  };

  const filteredSoftware = enterpriseSoftware.filter((item) => {
    const matchesCategory =
      selectedSoftwareCategory === "all" ||
      item.category === selectedSoftwareCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =====================================================
          2. 3D ARCHITECTURAL FOUNDATION MATRIX (Matching Home Four Pillars Style)
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] bg-[size:36px_36px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-700">
                SYSTEM ARCHITECTURE
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Engineered with 4 Robust Layers.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Every GoTechEdu solution is architected according to four
              uncompromising foundational standards, guaranteeing seamless
              integration and zero technical debt.
            </p>
          </div>

          {/* 4 Architectural Cards with 3D Mouse Parallax Tilt */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1200px]">
            {architecturePillars.map((layer) => {
              const tilt = tiltStates[layer.id] || {
                rotateX: 0,
                rotateY: 0,
                isHovered: false,
              };

              return (
                <div
                  key={layer.id}
                  id={`arch-${layer.id}`}
                  onMouseMove={(e) => handleMouseMove(layer.id, e)}
                  onMouseLeave={() => handleMouseLeave(layer.id)}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-7 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-blue-400"
                  style={{
                    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${
                      tilt.isHovered
                        ? "scale3d(1.03, 1.03, 1.03) translateY(-6px)"
                        : "scale3d(1, 1, 1)"
                    }`,
                    transformStyle: "preserve-3d",
                    boxShadow: tilt.isHovered
                      ? `0 22px 45px -10px ${layer.glow}`
                      : undefined,
                  }}
                >
                  {/* Top Gradient accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl opacity-85 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, ${layer.color}, #38bdf8)`,
                    }}
                  />

                  <div>
                    {/* Icon container */}
                    <div
                      className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${layer.color} 0%, #0f172a 100%)`,
                      }}
                    >
                      <div className="relative z-10">{layer.icon}</div>
                    </div>

                    <span
                      className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em]"
                      style={{ color: layer.color }}
                    >
                      {layer.tagline}
                    </span>

                    <h3 className="mt-1 font-heading text-xl font-black text-slate-900">
                      {layer.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-500">
                      {layer.desc}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {layer.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-slate-100/90 px-2 py-0.5 text-[10px] font-bold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          3. ENTERPRISE APPLICATION SUITE (#software)
      ====================================================== */}
      <section id="software" className="relative py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
                Core Enterprise Systems
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Enterprise Application Suite.
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                Robust, custom-engineered software architectures designed to
                streamline multi-department operations, automate business logic,
                and eliminate technical debt.
              </p>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter platforms or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs font-medium text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredSoftware.map((solution) => (
              <div
                key={solution.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_45px_rgba(15,23,42,0.12)]"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${solution.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 shadow-2xs border border-slate-100 group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 border border-slate-200/80">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-700 group-hover:translate-x-0.5"
                  >
                    <span>View Specs</span>
                    <span>→</span>
                  </button>

                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100/90 px-2 py-0.5 rounded">
                    {solution.sla}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. ARTIFICIAL INTELLIGENCE & AGENTIC AUTOMATION (#ai)
      ====================================================== */}
      <section
        id="ai"
        className="relative overflow-hidden bg-[#070e1b] py-20 lg:py-28 text-white"
      >
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="hero-grid-pattern absolute inset-0 opacity-15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-950/60 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
              Autonomous Intelligence
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Autonomous AI Systems Built for Deep Precision.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Empower your enterprise with autonomous agent workflows,
              enterprise RAG vector retrieval, proprietary fine-tuned LLMs, and
              real-time visual AI models.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((ai) => (
              <div
                key={ai.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-900/80 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-slate-900"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${ai.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-inner group-hover:scale-110 transition-transform">
                      {ai.icon}
                    </div>
                    <span className="rounded-full bg-purple-950/80 px-3 py-1 text-[11px] font-mono font-semibold text-purple-300 border border-purple-800">
                      {ai.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {ai.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {ai.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                  <div>
                    <span className="text-lg font-heading font-black text-cyan-400">
                      {ai.metric}
                    </span>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                      {ai.metricLabel}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white transition group-hover:translate-x-1"
                  >
                    <span>Deploy</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. CLOUD & DEVOPS INFRASTRUCTURE (#cloud)
      ====================================================== */}
      <section
        id="cloud"
        className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-600">
                High-Availability DevOps
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Multi-Cloud Architecture &amp; 99.99% Uptime Engineering.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                We design and orchestrate cloud infrastructure capable of
                handling high-concurrency workloads, multi-region failovers,
                automated disaster recovery, and continuous security auditing.
              </p>

              {/* SLA Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xs">
                  <p className="text-3xl font-black text-slate-900">99.99%</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Uptime SLA SLA Guarantee
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xs">
                  <p className="text-3xl font-black text-slate-900">Zero</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Downtime Deployments
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition hover:scale-105 active:scale-100"
                >
                  <span>Schedule Infrastructure Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Cards Column */}
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              {cloudDevOpsServices.map((cloud, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200/70">
                    {cloud.icon}
                  </div>
                  <h3 className="mt-4 font-heading text-base sm:text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                    {cloud.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {cloud.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-[11px] font-mono font-bold text-blue-600">
                      ⚡ {cloud.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. CYBERSECURITY & DEFENSE SECTION (#cybersecurity)
      ====================================================== */}
      <section
        id="cybersecurity"
        className="py-20 lg:py-28 bg-[#0b132b] text-white relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
          <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />
          <div className="hero-grid-pattern absolute inset-0 opacity-15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
              Enterprise Defense &amp; Compliance
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Zero-Trust Cybersecurity &amp; Threat Defense.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Protect your software, cloud infrastructure, and proprietary data
              pipelines with bank-grade defense architectures, continuous
              red-team audits, and 24/7 SIEM monitoring.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cybersecuritySolutions.map((sec, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-7 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-900"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 border border-slate-700">
                      {sec.icon}
                    </div>
                    <span className="rounded-full bg-emerald-950 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-300 border border-emerald-800">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-bold text-white transition group-hover:text-emerald-300">
                    {sec.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
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
          7. INDUSTRY-SPECIFIC SOLUTIONS (#industries)
      ====================================================== */}
      <section id="industries" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              Domain Expertise
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Solutions Built Around Your Industry Workflows.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Technology accelerates fastest when built with deep context of
              compliance, customer touchpoints, and domain operational models.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryVerticals.map((ind) => (
              <div
                key={ind.name}
                className={`group flex flex-col justify-between rounded-[1.75rem] border bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${ind.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                      {ind.icon}
                    </div>
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
                  <span className="text-[11px] font-mono font-bold text-slate-500">
                    ✓ {ind.compliance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          8. CALL TO ACTION SECTION (Matching Home Theme)
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#070e1b] py-20 text-white text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 -top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/25 blur-[120px]" />
          <div className="hero-grid-pattern absolute inset-0 opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
            Custom Architecture Consultation
          </span>

          <h2 className="mt-5 font-heading text-3xl font-black text-white sm:text-5xl tracking-tight">
            Ready to Build Your Enterprise Solution?
          </h2>

          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Book a discovery consultation with our principal software architects
            to review your technical requirements and receive an engineering
            blueprint.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 active:scale-100"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Request Solution Specs
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          9. INTERACTIVE TECHNICAL SPECIFICATIONS 3D MODAL
      ====================================================== */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl transition-all">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                  {selectedSolution.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {selectedSolution.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-blue-600">
                    {selectedSolution.badge} • {selectedSolution.sla}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                {selectedSolution.description}
              </p>

              <h4 className="mt-6 font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
                Core Architectural Capabilities
              </h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {selectedSolution.features.map((f: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs font-medium text-slate-700 border border-slate-200/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <h4 className="mt-6 font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
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
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
              >
                Close
              </button>
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:from-blue-700 hover:to-indigo-700 transition"
              >
                Book Architecture Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
