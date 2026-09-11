"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  Cloud,
  ArrowRight,
  Code2,
  Users,
  CreditCard,
  GraduationCap,
  Building2,
  Landmark,
  Stethoscope,
  Truck,
  X,
  ChevronRight,
  ChevronLeft,
  Play,
  Download,
  Check,
  Bot,
  Brain,
  Cpu,
  Lock,
  Boxes,
  ShoppingBag,
  Shield,
  Activity,
  Workflow,
  Server,
  Zap,
  ShieldAlert,
  Gauge,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// --- Types ---
interface EnterpriseApp {
  id: string;
  tag: string;
  badgeCol: string;
  dotCol: string;
  title: string;
  fullName: string;
  description: string;
  imageUrl: string;
  features: string[];
  techStack: string[];
  sla: string;
  accentCol: string;
  btnCol: string;
}

interface SolutionItem {
  id: string;
  title: string;
  badge: string;
  badgeCol: string;
  desc: string;
  imageUrl: string;
  metrics: string;
  metricsLabel: string;
  techTags: string[];
  capabilities: string[];
}

// --- Data ---
const architectureLayers = [
  {
    id: "app-core",
    title: "Application & UX Core",
    desc: "Next.js micro-frontends, reactive SPAs, and offline-first mobile systems engineered for sub-second responses.",
    icon: Code2,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    tags: ["React 19 / Next.js", "GraphQL", "WebSockets"],
  },
  {
    id: "ai-engine",
    title: "Autonomous AI Engine",
    desc: "Multi-agent workflows, enterprise RAG vector retrieval, and custom fine-tuned LLMs running with strict governance.",
    icon: Bot,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-100",
    tags: ["Agentic AI", "Vector RAG", "Custom LLMs"],
  },
  {
    id: "cloud-mesh",
    title: "Distributed Cloud Mesh",
    desc: "Kubernetes orchestration, automated horizontal scaling, multi-cloud redundancy, and zero-downtime CI/CD.",
    icon: Cloud,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50 border-sky-100",
    tags: ["Kubernetes", "Multi-Cloud", "Istio Mesh"],
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Perimeter",
    desc: "Least-privilege IAM, 24/7 SIEM threat telemetry, continuous VAPT audits, and ISO 27001 / SOC 2 compliance.",
    icon: ShieldCheck,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
    tags: ["SOC 2 Type II", "Zero-Trust", "24/7 SOC"],
  },
];

const enterpriseApps: EnterpriseApp[] = [
  {
    id: "crm",
    tag: "CRM",
    badgeCol: "bg-blue-50 text-blue-700 border-blue-200",
    dotCol: "bg-blue-600",
    title: "Customer Relationship Management",
    fullName: "Customer Relationship Management (CRM)",
    description:
      "Omnichannel lead scoring, automated sales pipelines, customer lifecycle analytics, and AI-assisted communication intelligence.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    features: [
      "Pipeline & Deal Stage Automation",
      "Omnichannel Communication Hub (VoIP / Email)",
      "AI Predictive Lead Scoring Engine",
      "Executive Financial & KPI Dashboards",
    ],
    techStack: ["Next.js 15", "Node.js", "PostgreSQL", "Redis", "Kafka"],
    sla: "99.99% Uptime",
    accentCol: "text-blue-600",
    btnCol: "text-blue-600 hover:text-blue-700",
  },
  {
    id: "erp",
    tag: "ERP",
    badgeCol: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotCol: "bg-emerald-600",
    title: "Enterprise Resource Planning",
    fullName: "Enterprise Resource Planning (ERP)",
    description:
      "Unify multi-entity financial ledgers, global procurement, inventory logistics, and regulatory compliance in a resilient single console.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-Currency Automated Financial Ledger",
      "Supply Chain Real-Time Synchronization",
      "Granular Role-Based Access Control (RBAC)",
      "Automated Regulatory & Tax Compliance Engine",
    ],
    techStack: ["Go Microservices", "Docker", "PostgreSQL", "Kafka", "Redis"],
    sla: "SOC 2 Type II",
    accentCol: "text-emerald-600",
    btnCol: "text-emerald-600 hover:text-emerald-700",
  },
  {
    id: "hrms",
    tag: "HRMS",
    badgeCol: "bg-purple-50 text-purple-700 border-purple-200",
    dotCol: "bg-purple-600",
    title: "Human Resource Management",
    fullName: "Human Resource Management (HRMS)",
    description:
      "Complete workforce lifecycle management with biometric attendance sync, automated multi-tier tax payroll, and OKR talent performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Automated Tax-Compliant Payroll Engine",
      "Self-Service Employee Mobile Portal",
      "Biometric Attendance & Leave Sync",
      "360° Review & Performance OKR Tracking",
    ],
    techStack: ["React", "NestJS", "MongoDB", "AWS S3", "Redis"],
    sla: "GDPR Compliant",
    accentCol: "text-purple-600",
    btnCol: "text-purple-600 hover:text-purple-700",
  },
  {
    id: "pos",
    tag: "POS",
    badgeCol: "bg-orange-50 text-orange-700 border-orange-200",
    dotCol: "bg-orange-600",
    title: "Omnichannel Point-of-Sale",
    fullName: "Omnichannel Point-of-Sale (POS)",
    description:
      "High-speed retail checkout, offline-first SQLite cache, automated inventory reservation, and multi-terminal payment gateways.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
    features: [
      "Offline-First SQLite Cache Sync",
      "Multi-Store Real-Time Inventory Control",
      "Universal EMV / Stripe / UPI Gateway Hub",
      "Customer Loyalty & Tiered Rewards Engine",
    ],
    techStack: ["Electron", "React Native", "Go", "GraphQL", "SQLite"],
    sla: "PCI-DSS Level 1",
    accentCol: "text-orange-600",
    btnCol: "text-orange-600 hover:text-orange-700",
  },
];

// --- Dedicated AI & Machine Learning Solutions ---
const aiSolutions: SolutionItem[] = [
  {
    id: "enterprise-rag",
    title: "Enterprise RAG & Hybrid Knowledge Intelligence",
    badge: "Generative AI",
    badgeCol: "bg-purple-50 text-purple-700 border-purple-200",
    desc: "Ingest thousands of corporate manuals, contracts, and codebases into Pinecone/Milvus with hybrid BM25 and dense vector ranking for hallucination-free AI chat.",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    metrics: "< 120ms",
    metricsLabel: "Vector Latency",
    techTags: ["Pinecone", "Milvus", "LangChain", "LlamaIndex", "Hybrid RAG"],
    capabilities: [
      "Semantic chunking and hybrid BM25 + vector reranking",
      "Context-aware citations and source document tracing",
      "Strict tenant data isolation with zero model training retention",
    ],
  },
  {
    id: "agentic-swarms",
    title: "Autonomous Multi-Agent Swarms & Workflows",
    badge: "Agentic AI",
    badgeCol: "bg-indigo-50 text-indigo-700 border-indigo-200",
    desc: "Deploy goal-driven AI agents equipped with tool calling, memory state machines, self-reflection, and automated human-in-the-loop escalation.",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    metrics: "85%",
    metricsLabel: "Workflow Automation",
    techTags: ["LangGraph", "CrewAI", "Function Calling", "Vector State"],
    capabilities: [
      "Dynamic tool selection & multi-step execution graphs",
      "Self-correcting error handling with reflection loops",
      "Enterprise audit logs for every autonomous decision step",
    ],
  },
  {
    id: "llm-finetuning",
    title: "Domain-Specific LLM Fine-Tuning & Quantization",
    badge: "Custom Models",
    badgeCol: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Parameter-efficient LoRA / QLoRA adaptation of open foundation models (Llama 3.3, Mistral, DeepSeek) trained on private enterprise data inside air-gapped VPCs.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    metrics: "4x Cost",
    metricsLabel: "Efficiency vs API",
    techTags: ["LoRA / QLoRA", "vLLM", "Llama 3.3", "DeepSeek", "Ollama"],
    capabilities: [
      "Air-gapped deployment in private VPCs with zero data leakage",
      "Inference acceleration via vLLM and TensorRT-LLM",
      "Custom evaluation harnesses benchmarked to internal KPIs",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Multimodal Edge Intelligence",
    badge: "Visual AI",
    badgeCol: "bg-violet-50 text-violet-700 border-violet-200",
    desc: "High-speed multimodal document OCR extraction, automated factory defect classification, and real-time video stream analytics running at edge or cloud scale.",
    imageUrl:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80",
    metrics: "< 80ms",
    metricsLabel: "Inference Latency",
    techTags: ["YOLOv11", "OpenCV", "TensorRT", "Vision Transformers"],
    capabilities: [
      "Sub-second unstructured document and invoice parsing",
      "Real-time video anomaly & safety violation detection",
      "Edge-optimized quantization for low-power devices",
    ],
  },
];

// --- DevOps & Cloud Dedicated Solutions ---
const devopsSolutions: SolutionItem[] = [
  {
    id: "k8s-mesh",
    title: "Multi-Cloud Kubernetes & Service Mesh",
    badge: "Container Orchestration",
    badgeCol: "bg-sky-50 text-sky-700 border-sky-200",
    desc: "Production-grade EKS, GKE, and AKS clusters with Istio service mesh, automated canary rollouts, and mTLS mutual authentication between microservices.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    metrics: "99.999%",
    metricsLabel: "Uptime Availability",
    techTags: ["Kubernetes", "Istio", "EKS / GKE", "Helm", "Karpenter"],
    capabilities: [
      "Automated Horizontal Pod Autoscaling (HPA & VPA)",
      "Zero-downtime blue/green & canary traffic splits",
      "Multi-region disaster recovery & auto-failover",
    ],
  },
  {
    id: "gitops-cicd",
    title: "Enterprise GitOps & Automated CI/CD",
    badge: "Continuous Delivery",
    badgeCol: "bg-indigo-50 text-indigo-700 border-indigo-200",
    desc: "Automated test suites, security gates, image signing with Cosign, and ArgoCD declarative cluster synchronization triggered on commit.",
    imageUrl:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    metrics: "< 3 Mins",
    metricsLabel: "Average Deploy Cycle",
    techTags: ["ArgoCD", "GitHub Actions", "Docker", "Cosign", "SonarQube"],
    capabilities: [
      "Immutable declarative cluster state in Git",
      "Automated rollbacks on health check threshold alerts",
      "Integrated static code analysis and container CVE scanning",
    ],
  },
  {
    id: "iac-governance",
    title: "Infrastructure as Code & Cloud Governance",
    badge: "Cloud Automation",
    badgeCol: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Declarative Terraform and Pulumi blueprints maintaining zero-drift infrastructure across AWS, Azure, and GCP with automated cost optimization.",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    metrics: "Zero Drift",
    metricsLabel: "State Enforcement",
    techTags: ["Terraform", "Pulumi", "AWS / GCP", "Infracost", "OPA Policy"],
    capabilities: [
      "Modular reusable infrastructure components",
      "Policy-as-code guardrails via Open Policy Agent",
      "Cloud budget tracking & automated idle resource pruning",
    ],
  },
  {
    id: "sre-observability",
    title: "24/7 SRE & Full-Stack APM Observability",
    badge: "Site Reliability",
    badgeCol: "bg-teal-50 text-teal-700 border-teal-200",
    desc: "Unified observability stack combining Prometheus, Grafana, OpenTelemetry, and Datadog for distributed tracing and predictive anomaly alerts.",
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    metrics: "< 45 Sec",
    metricsLabel: "Mean Time to Detect",
    techTags: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "Datadog",
      "PagerDuty",
    ],
    capabilities: [
      "Real-time distributed request tracing across microservices",
      "SLO / SLI error budget tracking and alerts",
      "Automated self-healing and service restarts",
    ],
  },
];

// --- Cyber Security Dedicated Solutions ---
const cybersecuritySolutions: SolutionItem[] = [
  {
    id: "zero-trust-iam",
    title: "Zero-Trust Architecture & Identity Governance",
    badge: "Identity Defense",
    badgeCol: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Least-privilege policy enforcement, hardware biometric MFA (FIDO2), SAML 2.0 / OIDC SSO, and granular micro-segmented network isolation.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    metrics: "100%",
    metricsLabel: "MFA & Least-Privilege",
    techTags: ["FIDO2 / WebAuthn", "Okta / Keycloak", "OIDC", "Zscaler"],
    capabilities: [
      "Context-aware conditional access based on device health",
      "Granular RBAC / ABAC permission policy engines",
      "Continuous posture assessment on all internal endpoints",
    ],
  },
  {
    id: "soc-siem",
    title: "24/7 Managed SOC & SIEM Threat Telemetry",
    badge: "Active Defense",
    badgeCol: "bg-cyan-50 text-cyan-700 border-cyan-200",
    desc: "Continuous SIEM log ingestion across endpoints, servers, and cloud accounts with Splunk and Microsoft Sentinel, powered by AI threat hunting.",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    metrics: "< 12 Mins",
    metricsLabel: "Incident Containment",
    techTags: ["Splunk SIEM", "Microsoft Sentinel", "Wazuh", "Suricata", "XDR"],
    capabilities: [
      "Real-time correlation of adversary tactics & attack vectors",
      "Automated incident containment & IP/host isolation bots",
      "24/7/365 dedicated security operations engineering team",
    ],
  },
  {
    id: "vapt-audits",
    title: "Continuous VAPT & Red-Team Penetration Audits",
    badge: "Offensive Security",
    badgeCol: "bg-amber-50 text-amber-700 border-amber-200",
    desc: "Simulated adversary attack simulations, OWASP Top 10 web and API fuzzing, static/dynamic code analysis (SAST/DAST), and patch remediation.",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    metrics: "Zero",
    metricsLabel: "Critical Vulns Allowed",
    techTags: ["Burp Suite Pro", "OWASP ZAP", "Metasploit", "Trivy", "Snyk"],
    capabilities: [
      "API fuzzing & authentication bypass tests",
      "Infrastructure network port & configuration audits",
      "Executive technical blueprints & CVE remediation roadmaps",
    ],
  },
  {
    id: "compliance-certs",
    title: "Regulatory Compliance & Certified Auditing",
    badge: "Enterprise Trust",
    badgeCol: "bg-rose-50 text-rose-700 border-rose-200",
    desc: "End-to-end readiness auditing, automated evidence collection, cryptographic KMS key rotation, and audit trails for global compliance standards.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    metrics: "100%",
    metricsLabel: "Audit Pass Rate",
    techTags: ["SOC 2 Type II", "ISO 27001", "HIPAA", "PCI-DSS", "GDPR"],
    capabilities: [
      "Automated continuous cloud compliance tracking",
      "Data classification and encryption at rest & in transit",
      "Tamper-proof immutable audit trails stored in WORM storage",
    ],
  },
];

const industryVerticals = [
  { id: "edtech", name: "EdTech", icon: GraduationCap },
  { id: "fintech", name: "FinTech", icon: Landmark },
  { id: "healthcare", name: "Healthcare", icon: Stethoscope },
  { id: "retail", name: "Retail & E-Commerce", icon: ShoppingBag },
  { id: "logistics", name: "Logistics", icon: Truck },
  { id: "manufacturing", name: "Manufacturing", icon: Cpu },
  { id: "realestate", name: "Real Estate", icon: Building2 },
];

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState<string>("architecture");
  const [selectedApp, setSelectedApp] = useState<EnterpriseApp | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [activeAppIndex, setActiveAppIndex] = useState(0);

  const tabs = [
    { id: "architecture", label: "System Architecture", icon: Layers },
    { id: "enterprise", label: "Enterprise Applications", icon: Boxes },
    { id: "ai", label: "AI & Machine Learning", icon: Bot },
    { id: "devops", label: "Cloud & DevOps", icon: Cloud },
    { id: "security", label: "Cyber Security", icon: ShieldCheck },
    { id: "impact", label: "Global Impact", icon: Activity },
  ];

  const handleNextApp = () => {
    setActiveAppIndex((prev) => (prev + 1) % enterpriseApps.length);
  };

  const handlePrevApp = () => {
    setActiveAppIndex((prev) =>
      prev === 0 ? enterpriseApps.length - 1 : prev - 1,
    );
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =====================================================================
          3. SECTION: SYSTEM ARCHITECTURE ("Engineered with 4 Robust Layers.")
      ====================================================================== */}
      <section
        id="architecture"
        className="py-8 lg:py-14 bg-white border-b border-slate-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                SYSTEM ARCHITECTURE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Engineered with <br />4 Robust Layers.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every GoTechEdu solution is architected according to four
                uncompromising foundational standards, guaranteeing seamless
                integration and zero technical debt.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact?type=solution&topic=architecture"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition active:scale-98"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right 2x2 Feature Grid */}
            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              {architectureLayers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={layer.id}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${layer.iconBg}`}
                      >
                        <Icon size={22} className={layer.iconColor} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {layer.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                          {layer.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SECTION: CORE ENTERPRISE SYSTEMS (With Realistic High-Res Imagery)
      ====================================================================== */}
      <section
        id="enterprise"
        className="py-8 lg:py-14 bg-slate-50/60 border-b border-slate-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                CORE ENTERPRISE SYSTEMS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                Enterprise Application Suite.
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Robust, custom-engineered software architectures designed to
                streamline multi-department operations, automate business logic,
                and eliminate technical debt.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact?type=solution&topic=enterprise-suite"
                className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-xs font-bold text-blue-600 shadow-2xs hover:bg-blue-50 transition"
              >
                <span>View All Solutions</span>
                <ArrowRight size={14} />
              </Link>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevApp}
                  aria-label="Previous application"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNextApp}
                  aria-label="Next application"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseApps.map((app) => (
              <div
                key={app.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={app.imageUrl}
                      alt={app.fullName}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md bg-white/90 ${app.badgeCol}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${app.dotCol}`}
                        />
                        {app.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono font-semibold opacity-90">
                        {app.sla}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider rounded bg-black/40 px-2 py-0.5 backdrop-blur-xs border border-white/20">
                        Enterprise Grade
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                      {app.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                      {app.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {app.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] font-mono text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedApp(app)}
                    className={`text-xs font-bold transition flex items-center gap-1 cursor-pointer ${app.btnCol}`}
                  >
                    <span>View Full Specs</span>
                    <ArrowRight size={13} />
                  </button>
                  <span className="text-[11px] font-bold text-slate-400">
                    SLA: {app.sla}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. SECTION: DEDICATED AI & MACHINE LEARNING SOLUTIONS (Real Images)
      ====================================================================== */}
      <section
        id="ai"
        className="py-8 lg:py-18 bg-white border-b border-slate-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-600">
                ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
                Autonomous AI Engines & <br className="hidden sm:inline" />
                Production-Ready ML Pipelines.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From custom enterprise RAG pipelines to autonomous multi-agent
                swarms, we engineer scalable, high-speed AI systems tailored to
                real tech industry workflows.
              </p>
            </div>

            <Link
              href="/contact?type=solution&topic=ai-ml"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-purple-600/20 transition active:scale-98 shrink-0"
            >
              <span>Consult AI Architect</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* AI Feature Hero Showcase Banner with Realistic AI Visualization */}
          <div className="relative mb-12 overflow-hidden rounded-3xl border border-purple-100 bg-slate-950 text-white shadow-xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 rounded-lg bg-purple-500/20 border border-purple-400/30 px-3 py-1 text-xs font-mono text-purple-300">
                  <Sparkles size={14} />
                  <span>ENTERPRISE COGNITIVE INTELLIGENCE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                  Production RAG & Swarm Agents Running with Strict Governance
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We bridge the gap between proof-of-concept models and
                  high-throughput production AI. With context caching,
                  deterministic evaluation metrics, and air-gapped VPC
                  deployments, your proprietary data stays completely
                  confidential.
                </p>

                {/* 4 AI Metric Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-purple-400">
                      &lt; 120ms
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Vector Latency
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-indigo-400">
                      85%
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Task Automation
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      100%
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Air-Gapped VPC
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-pink-400">
                      &lt; 80ms
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Edge Vision
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Realistic Image */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                  alt="Realistic Artificial Intelligence Neural Network"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>

          {/* 4 Dedicated AI Solution Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiSolutions.map((sol) => (
              <div
                key={sol.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[10px] font-mono font-bold backdrop-blur-md bg-white/90 ${sol.badgeCol}`}
                      >
                        {sol.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs font-black text-purple-400">
                          {sol.metrics}
                        </span>
                        <span className="text-[10px] text-slate-300 ml-1.5">
                          {sol.metricsLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition">
                      {sol.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {sol.desc}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {sol.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-1.5 text-[11px] text-slate-700"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-purple-600 shrink-0 mt-0.5"
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {sol.techTags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-purple-50 text-[10px] font-mono font-medium text-purple-700 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. SECTION: DEDICATED CLOUD & DEVOPS SOLUTIONS (Real Images)
      ====================================================================== */}
      <section
        id="devops"
        className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-100"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                CLOUD & DEVOPS ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
                Scalable Cloud Infrastructure &{" "}
                <br className="hidden sm:inline" />
                Automated Deployments.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From multi-region Kubernetes clusters to declarative GitOps
                pipelines, we architect resilient, self-healing cloud ecosystems
                with zero-downtime rollouts.
              </p>
            </div>

            <Link
              href="/contact?type=solution&topic=devops"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-sky-600/20 transition active:scale-98 shrink-0"
            >
              <span>Consult DevOps Architect</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative mb-12 overflow-hidden rounded-3xl border border-sky-100 bg-slate-950 text-white shadow-xl">
            <div className="grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 rounded-lg bg-sky-500/20 border border-sky-400/30 px-3 py-1 text-xs font-mono text-sky-300">
                  <Gauge size={14} />
                  <span>HIGH-AVAILABILITY CLOUD FABRIC</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                  Multi-Region Cloud Mesh Engineered for Zero Downtime
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  GoTechEdu deploys fault-tolerant containerized architectures
                  across AWS, GCP, and Azure. With automated telemetry,
                  auto-scaling Karpenter nodes, and Istio service mesh, your
                  applications sustain high concurrency without latency spikes.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-sky-400">
                      99.999%
                    </div>
                    <div className="text-[10px] text-slate-400">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      &lt; 3 Min
                    </div>
                    <div className="text-[10px] text-slate-400">
                      CI/CD Cycle
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-teal-400">
                      0 Drift
                    </div>
                    <div className="text-[10px] text-slate-400">IaC State</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-cyan-400">
                      &lt; 45 Sec
                    </div>
                    <div className="text-[10px] text-slate-400">SRE MTTD</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="Realistic Cloud Server Datacenter"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devopsSolutions.map((sol) => (
              <div
                key={sol.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[10px] font-mono font-bold backdrop-blur-md bg-white/90 ${sol.badgeCol}`}
                      >
                        {sol.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs font-black text-sky-400">
                          {sol.metrics}
                        </span>
                        <span className="text-[10px] text-slate-300 ml-1.5">
                          {sol.metricsLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition">
                      {sol.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {sol.desc}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {sol.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-1.5 text-[11px] text-slate-700"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-sky-600 shrink-0 mt-0.5"
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {sol.techTags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-sky-50 text-[10px] font-mono font-medium text-sky-700 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. SECTION: DEDICATED CYBER SECURITY SOLUTIONS (Real SOC Images)
      ====================================================================== */}
      <section
        id="security"
        className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-10 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                CYBERSECURITY & ENTERPRISE GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Bank-Grade Protection. <br className="hidden sm:inline" />
                Zero-Trust Security by Design.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Protecting enterprise digital assets with continuous VAPT
                auditing, 24/7 SIEM monitoring, and strict regulatory compliance
                standards.
              </p>
            </div>

            <Link
              href="/contact?type=solution&topic=cybersecurity"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition active:scale-98 shrink-0"
            >
              <span>Schedule Security Audit</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative mb-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full overflow-hidden order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
                  alt="Security Operations Center SOC Real-Time Monitoring"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/30 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 z-10 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-mono text-emerald-300">
                  <ShieldAlert size={14} />
                  <span>24/7 SOC THREAT TELEMETRY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                  Comprehensive Threat Defense with Under 12-Minute Containment
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our dedicated Red & Blue teams execute continuous
                  vulnerability assessments, endpoint telemetry, and automated
                  incident containment across multi-cloud VPCs and internal
                  networks.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">
                      &lt; 12 Min
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Threat Containment
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">
                      100%
                    </div>
                    <div className="text-[10px] text-slate-400">
                      MFA Enforced
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-cyan-400">
                      SOC 2
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Type II Certified
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-amber-400">
                      Zero
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Critical CVEs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cybersecuritySolutions.map((sol) => (
              <div
                key={sol.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-xs hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-xs"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[10px] font-mono font-bold backdrop-blur-md ${sol.badgeCol}`}
                      >
                        {sol.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs font-black text-emerald-400">
                          {sol.metrics}
                        </span>
                        <span className="text-[10px] text-slate-300 ml-1.5">
                          {sol.metricsLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition">
                      {sol.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {sol.desc}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-800">
                      {sol.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="flex items-start gap-1.5 text-[11px] text-slate-300"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-emerald-400 shrink-0 mt-0.5"
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                  {sol.techTags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-emerald-950/60 border border-emerald-800/40 text-[10px] font-mono font-medium text-emerald-300 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. SECTION: GLOBAL IMPACT (Photorealistic Glowing 3D Earth Globe)
      ====================================================================== */}
      <section
        id="impact"
        className="relative overflow-hidden bg-[#0A0F1D] py-20 lg:py-28 text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Photorealistic Glowing Digital Earth Sphere */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-blue-400/30 blur-2xl animate-pulse duration-4000" />

                {/* Realistic Globe Container */}
                <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-blue-400/40 shadow-[0_0_80px_rgba(59,130,246,0.45)] group">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                    alt="Realistic Glowing Earth Globe in Space with Global Digital Infrastructure"
                    className="h-full w-full object-cover scale-110 group-hover:scale-120 transition-transform duration-1000 ease-out"
                  />

                  {/* Atmosphere Glow & Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-cyan-400/25 mix-blend-screen pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-full pointer-events-none" />

                  {/* Pulsing Coordinates Nodes on Globe */}
                  <div className="absolute top-1/3 left-1/3 h-3 w-3 rounded-full bg-cyan-400 animate-ping" />
                  <div className="absolute top-1/3 left-1/3 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                  <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-blue-400 animate-ping delay-500" />
                  <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />

                  <div className="absolute bottom-1/3 left-1/2 h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_10px_#5eead4]" />

                  {/* Floating Glassmorphic 50+ Global Clients Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/30 bg-slate-950/90 backdrop-blur-md px-5 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 z-10 hover:scale-105 transition-transform duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/40">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white leading-tight">
                        50+
                      </div>
                      <div className="text-xs font-semibold text-slate-300">
                        Global Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Header & Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                GLOBAL IMPACT
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Powering Innovation <br />
                Across Industries.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Tailored technology solutions to meet the unique demands of your
                industry, with global reach and local expertise.
              </p>
            </div>
          </div>

          {/* Industry Icons Strip */}
          <div className="mt-16 pt-10 border-t border-slate-800/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {industryVerticals.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.id}
                    className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-blue-400">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-300 text-center">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. BOTTOM CTA BANNER ("Let's Build What's Next — Together.")
      ====================================================================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-blue-50/90 p-8 sm:p-12 lg:p-16 shadow-lg shadow-blue-500/5">
            <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-2xs">
                  READY TO TRANSFORM?
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
                  Let's Build What's Next — Together.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                  Partner with GoTechEdu and turn your ideas into powerful,
                  scalable solutions.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/contact?type=solution"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/25 transition active:scale-98"
                  >
                    <span>Schedule a Free Consultation</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {downloadSuccess && (
                  <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-bold text-emerald-700 animate-fadeIn">
                    <Check size={14} />
                    <span>Brochure sent to download queue!</span>
                  </div>
                )}
              </div>

              {/* Right Column: 3D Origami Plane & Workflow */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <svg
                    viewBox="0 0 280 200"
                    className="w-full h-auto drop-shadow-xl"
                    fill="none"
                  >
                    <path
                      d="M20 160 C60 180, 100 130, 140 150 C180 170, 200 110, 220 80"
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />

                    <g transform="translate(180, 30)">
                      <path
                        d="M0 50 L80 0 L50 75 L35 48 Z"
                        fill="#3B82F6"
                        stroke="#2563EB"
                        strokeWidth="2"
                      />
                      <path d="M35 48 L80 0 L0 50 Z" fill="#60A5FA" />
                      <path d="M35 48 L50 75 L45 55 Z" fill="#1D4ED8" />
                    </g>
                  </svg>

                  <div className="absolute top-2 right-0 text-right select-none">
                    <div className="font-serif italic font-bold text-slate-500 text-sm sm:text-base leading-tight">
                      Ideas <br />
                      <span className="text-blue-600">Strategy</span> <br />
                      Execution <br />
                      <span className="text-indigo-600">Growth</span>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      className="inline-block mt-1 text-slate-400"
                    >
                      <path
                        d="M6 6 C12 28, 24 28, 30 18 M24 14 L30 18 L32 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          MODAL: APPLICATION DETAILS & ARCHITECTURE SPECS
      ====================================================================== */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition font-bold text-sm cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-mono font-bold ${selectedApp.badgeCol}`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${selectedApp.dotCol}`}
                />
                {selectedApp.tag}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                SLA: {selectedApp.sla}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-950">
              {selectedApp.fullName}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {selectedApp.description}
            </p>

            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Architectural Capabilities
              </h4>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {selectedApp.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 rounded-xl p-2.5 border border-slate-100"
                  >
                    <Check size={14} className="text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Engineered With
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?type=solution&solution=${encodeURIComponent(
                  selectedApp.title,
                )}`}
                onClick={() => setSelectedApp(null)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition"
              >
                <span>Request Deployment</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: WATCH VIDEO ARCHITECTURE REEL
      ====================================================================== */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-slate-950 p-6 sm:p-8 shadow-2xl border border-slate-800 text-white">
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 transition font-bold text-sm cursor-pointer"
            >
              <X size={16} />
            </button>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-wider">
              TECHNOLOGY REEL
            </span>

            <h3 className="mt-2 text-2xl font-black">
              Engineering Scalable Platforms at GoTechEdu
            </h3>

            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40 mb-3 animate-pulse">
                <Play size={24} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-slate-200">
                GoTechEdu High-Throughput Architecture Overview (2:45)
              </p>
              <p className="text-xs text-slate-500 max-w-md mt-1">
                Explore how our cloud mesh, autonomous AI pipelines, and
                zero-trust perimeter operate together in enterprise production.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <Link
                href="/contact?type=solution"
                onClick={() => setShowVideoModal(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition"
              >
                <span>Book a Live Technical Demo</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
