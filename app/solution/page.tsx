"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { solutionsData } from "@/lib/solutionsData";
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
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Clock,
  Compass,
  Hammer,
  Rocket,
  Headphones,
  Check,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

/* --------------------------------------------------------------------------
   Data Definitions: 8 Enterprise Technology Solutions
-------------------------------------------------------------------------- */
interface SolutionCardData {
  id: string;
  name: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
  iconColor: string;
  badgeBg: string;
  borderColor: string;
  hoverBorder: string;
  capabilities: string[];
}

const solutionCategories: SolutionCardData[] = [
  {
    id: "software",
    name: "Software & Application Development",
    badge: "Core Engineering",
    desc: "End-to-end custom business software, transactional web applications, and cross-platform mobile systems built for speed and long-term maintainability.",
    icon: Code2,
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-blue-400",
    capabilities: [
      "Custom ERP and CRM enterprise suites",
      "Enterprise software and business applications",
      "Scalable web and mobile applications",
    ],
  },
  {
    id: "cloud",
    name: "Cloud, DevOps & Automation",
    badge: "Infrastructure",
    desc: "Multi-cloud architecture, automated CI/CD delivery pipelines, and production Kubernetes clusters engineered for high availability and zero downtime.",
    icon: Cloud,
    iconColor: "text-sky-600",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-sky-400",
    capabilities: [
      "AWS, Azure, and multi-cloud infrastructure",
      "Kubernetes and container orchestration",
      "CI/CD pipelines and deployment automation",
    ],
  },
  {
    id: "transformation",
    name: "Digital Transformation",
    badge: "Modernization",
    desc: "Modernize legacy monoliths into cloud-native microservices, automate operational workflows, and turn fragmented business data into actionable analytics.",
    icon: Workflow,
    iconColor: "text-purple-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-purple-400",
    capabilities: [
      "Legacy system modernization",
      "Business workflow automation",
      "Operational analytics and process optimization",
    ],
  },
  {
    id: "emerging-tech",
    name: "Emerging Technology",
    badge: "Next-Gen Tech",
    desc: "Connect physical environments and intelligent edge endpoints through scalable IoT protocols, edge compute nodes, and decentralized architectures.",
    icon: Zap,
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-amber-400",
    capabilities: [
      "Edge computing and IoT solutions",
      "Emerging architecture and connected systems",
      "Web3 solutions where applicable",
    ],
  },
  {
    id: "managed-services",
    name: "IT & Managed Services",
    badge: "Operations",
    desc: "Continuous 24/7 system reliability, proactive telemetry monitoring, routine maintenance, and dedicated technical support with defined SLA commitments.",
    icon: Server,
    iconColor: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-indigo-400",
    capabilities: [
      "Infrastructure monitoring and maintenance",
      "Technical support and operational management",
      "Service-level agreements where offered",
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    badge: "Intelligence",
    desc: "Practical enterprise AI systems integrating foundation model fine-tuning, Retrieval-Augmented Generation (RAG), and autonomous agentic workflows.",
    icon: Brain,
    iconColor: "text-rose-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-rose-400",
    capabilities: [
      "Generative AI and LLM applications",
      "Retrieval-Augmented Generation (RAG)",
      "AI agents and intelligent automation",
    ],
  },
  {
    id: "networking",
    name: "Networking & Infrastructure",
    badge: "Connectivity",
    desc: "Enterprise networking architectures, software-defined networks (SD-WAN), and resilient data center connections optimized for throughput and privacy.",
    icon: Network,
    iconColor: "text-teal-600",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-teal-400",
    capabilities: [
      "Network architecture and connectivity",
      "Secure enterprise networking",
      "Infrastructure planning and optimization",
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    badge: "Security & Risk",
    desc: "Comprehensive defense posture based on Zero Trust principles, continuous threat modeling, vulnerability assessments, and compliance audits.",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    borderColor: "border-slate-200/90",
    hoverBorder: "hover:border-emerald-400",
    capabilities: [
      "Security architecture and risk assessment",
      "Zero Trust security principles",
      "Security testing and monitoring where offered",
    ],
  },
];

/* --------------------------------------------------------------------------
   Business Challenges Data
-------------------------------------------------------------------------- */
const businessChallenges = [
  {
    challenge: "Legacy systems that limit growth",
    solution:
      "Modernize aging monoliths with modular microservices and modern APIs without business interruption.",
  },
  {
    challenge: "Manual workflows that consume time",
    solution:
      "Automate repetitive operational steps through deterministic software pipelines and intelligent integrations.",
  },
  {
    challenge: "Infrastructure that struggles to scale",
    solution:
      "Engineer auto-scaling multi-cloud environments that maintain high availability through traffic spikes.",
  },
  {
    challenge: "Security gaps and operational risks",
    solution:
      "Implement Zero-Trust architecture, identity controls, and continuous posture audits across all digital assets.",
  },
  {
    challenge: "Difficulty integrating business applications",
    solution:
      "Create standardized API bridges, webhooks, and event-driven data buses linking disparate software tools.",
  },
  {
    challenge: "Lack of visibility into business operations",
    solution:
      "Deploy unified telemetry, distributed tracing, and centralized executive dashboards for real-time clarity.",
  },
];

/* --------------------------------------------------------------------------
   Delivery Approach (5 Steps)
-------------------------------------------------------------------------- */
const deliverySteps = [
  {
    step: "01",
    name: "Discover",
    icon: Compass,
    desc: "Understand business goals, technical constraints, user needs, and existing system architecture.",
  },
  {
    step: "02",
    name: "Plan",
    icon: Layers,
    desc: "Define solution architecture, scope of work, technical specifications, and implementation priorities.",
  },
  {
    step: "03",
    name: "Build",
    icon: Hammer,
    desc: "Develop and integrate the solution using modern coding standards, automated tests, and code reviews.",
  },
  {
    step: "04",
    name: "Deploy",
    icon: Rocket,
    desc: "Test thoroughly, release through automated CI/CD pipelines, and validate performance under load.",
  },
  {
    step: "05",
    name: "Support",
    icon: Headphones,
    desc: "Provide agreed maintenance, operational monitoring, SLAs, and continuous optimization services.",
  },
];

/* --------------------------------------------------------------------------
   Why Choose GoTechEdu (Engineering Principles)
-------------------------------------------------------------------------- */
const whyChooseReasons = [
  {
    title: "Business-Focused Technical Planning",
    desc: "We align every technical decision with measurable business ROI and operational efficiency rather than engineering for hype.",
  },
  {
    title: "Scalable Software Architecture",
    desc: "Modular architectures built to handle growth smoothly, supporting increased user volume, data load, and transaction frequency.",
  },
  {
    title: "Security-Conscious Development",
    desc: "Security is embedded into every stage of development through Zero Trust principles, secure code analysis, and least-privilege IAM.",
  },
  {
    title: "Integration with Existing Systems",
    desc: "Deep experience integrating with legacy ERPs, relational databases, third-party APIs, and enterprise cloud accounts.",
  },
  {
    title: "Maintainability & Long-Term Support",
    desc: "Clean, documented codebases backed by automated test suites and defined service-level agreements for reliable long-term operations.",
  },
  {
    title: "Clear Communication & Defined Deliverables",
    desc: "Structured milestone tracking, direct engineering collaboration, and transparent project updates from kickoff to deployment.",
  },
];

/* --------------------------------------------------------------------------
   Frequently Asked Questions (FAQ) Data
-------------------------------------------------------------------------- */
const faqs = [
  {
    q: "What technology solutions does GoTechEdu offer?",
    a: "GoTechEdu provides comprehensive technology services spanning custom software engineering, cloud and DevOps automation, digital transformation, emerging tech/IoT, managed IT operations, AI/ML engineering, enterprise networking, and cybersecurity.",
  },
  {
    q: "Can you build custom ERP and CRM software?",
    a: "Yes. We design and develop tailor-made ERP and CRM solutions engineered around your organization's exact workflows, role permissions, inventory rules, and financial reporting requirements.",
  },
  {
    q: "Can you integrate with existing business systems?",
    a: "Yes. We regularly connect modern applications with legacy databases, third-party payment gateways, specialized accounting software, and internal ERP systems using secure REST, GraphQL, or event-driven APIs.",
  },
  {
    q: "Do you provide cloud migration and DevOps services?",
    a: "Yes. Our cloud engineering team assists with cloud readiness evaluations, migration from on-premise infrastructure to AWS/Azure/GCP, Kubernetes cluster orchestration, and automated CI/CD pipeline setup.",
  },
  {
    q: "Can AI be integrated into existing applications?",
    a: "Yes. We build Retrieval-Augmented Generation (RAG) vector pipelines, domain-adapted LLMs, and autonomous agent workflows that interface with your existing database schemas and internal documentation.",
  },
  {
    q: "How can I discuss my project requirements?",
    a: "You can schedule a consultation through our contact page or email our engineering team directly. We will review your requirements, discuss architectural feasibility, and outline next steps.",
  },
];

export default function SolutionsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeHash, setActiveHash] = useState<string>("");

  // Smooth scroll support for direct URL hashes on mount and hash changes
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.slice(1);
        setActiveHash(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* =====================================================================
          SECTION A: HERO SECTION
      ====================================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Subtle Ambient Background Gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs mb-6">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Enterprise Technology Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight max-w-4xl mx-auto">
            Technology That Moves Your Business Forward
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-normal">
            From custom enterprise software to intelligent AI systems, secure
            cloud infrastructure, and digital transformation, GoTechEdu helps
            businesses build reliable and scalable technology solutions.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:brightness-105 active:scale-95 transition cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#solutions-overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-blue-600 transition cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </a>
          </div>

          {/* Key Value Strip */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                8 Dedicated Domains
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Zero-Trust Security
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                Cloud-Native Architecture
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">
                SLA-Backed Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: SOLUTIONS OVERVIEW (The 8 Services Grid)
      ====================================================================== */}
      <section
        id="solutions-overview"
        className="py-12 sm:py-16 lg:py-20 scroll-mt-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Technology Capabilities
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Our Technology Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Targeted engineering solutions designed for operational reliability,
              enterprise security, and scalable digital capability.
            </p>
          </div>

          {/* 8 Services Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {solutionCategories.map((solution) => {
              const IconComponent = solution.icon;
              const isTargeted = activeHash === solution.id;
              const detailData = solutionsData[solution.id];

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className={`scroll-mt-28 group relative flex flex-col justify-between rounded-2xl border bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                    isTargeted
                      ? "ring-2 ring-blue-500 border-blue-400 bg-blue-50/20"
                      : `${solution.borderColor} ${solution.hoverBorder}`
                  }`}
                >
                  <div>
                    {/* Visual Card Cover Image with Hover Zoom & Badge */}
                    <Link
                      href={`/solution/${solution.id}`}
                      className="block relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-100 group/img"
                    >
                      <Image
                        src={detailData?.coverImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                        alt={solution.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span
                          className={`inline-block rounded-md border px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-2xs ${solution.badgeBg}`}
                        >
                          {solution.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1 rounded-md bg-white/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-bold text-slate-900 shadow-xs">
                          <span>Details</span>
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>

                    {/* Header: Icon & Title */}
                    <div className="flex items-start gap-2.5 mb-2">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200/80 transition-transform duration-200 group-hover:scale-105 mt-0.5`}
                      >
                        <IconComponent
                          className={`h-4 w-4 ${solution.iconColor}`}
                        />
                      </div>
                      <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        <Link href={`/solution/${solution.id}`}>
                          {solution.name}
                        </Link>
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {solution.desc}
                    </p>

                    {/* Capabilities List */}
                    <ul className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {solution.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-blue-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Links */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      href={`/solution/${solution.id}`}
                      className="font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 group/link"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <Link
                      href={`/contact?solution=${encodeURIComponent(solution.name)}`}
                      className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      Discuss
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION C: BUSINESS CHALLENGES
      ====================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
              Problems We Solve
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Business Challenges We Address
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              We help companies remove technical friction that limits developer
              velocity, scalability, and digital execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessChallenges.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 shadow-2xs hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100/70 text-blue-700 mt-0.5">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.challenge}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION D: OUR DELIVERY APPROACH (5-Step Process)
      ====================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
              Engineering Lifecycle
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Our Delivery Approach
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              A disciplined, milestone-driven framework that takes solutions from
              initial requirements through production launch and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {deliverySteps.map((stepItem, idx) => {
              const StepIcon = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-md">
                        {stepItem.step}
                      </span>
                      <StepIcon className="h-4 w-4 text-slate-400" />
                    </div>

                    <h3 className="font-heading text-base font-bold text-slate-900">
                      {stepItem.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION E: WHY CHOOSE GOTECHEDU
      ====================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
              Engineering Rigor
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Choose GoTechEdu
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              Our engineering philosophy prioritizes clear architecture, long-term
              maintainability, and predictable delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION F: FREQUENTLY ASKED QUESTIONS (FAQ)
      ====================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
              Clarifications &amp; Details
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear answers to common questions about engaging GoTechEdu for
              technology solutions.
            </p>
          </div>

          {/* Accessible Accordion Component */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left font-heading text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION G: FINAL CALL TO ACTION
      ====================================================================== */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950 p-8 sm:p-12 lg:p-16 text-center text-white shadow-xl relative overflow-hidden">
            {/* Ambient Backlight */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-xs">
                <Sparkles className="h-3 w-3 text-cyan-300" />
                <span>Start Your Implementation</span>
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
                Let's Build the Right Technology Solution for Your Business
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl mx-auto">
                Share your business requirements and explore an implementation
                approach that fits your goals.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 shadow-md hover:bg-blue-50 active:scale-95 transition cursor-pointer"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="mailto:gotecheduofficial@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition cursor-pointer"
                >
                  <span>Email Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
