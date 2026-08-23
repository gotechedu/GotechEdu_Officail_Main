"use client";

import Link from "next/link";
import React, { useState } from "react";

const programs = [
  {
    id: "fullstack-nextjs",
    title: "Full-Stack Next.js & React Engineering",
    category: "Development",
    duration: "16 Weeks",
    mode: "Live Online + Capstone Labs",
    level: "Beginner to Advanced",
    badge: "Most Popular",
    color: "from-blue-600 to-cyan-500",
    bgSoft: "bg-blue-50",
    textCol: "text-blue-600",
    borderCol: "border-blue-100",
    description:
      "Master modern frontend and full-stack development. Build production-grade web applications using React 19, Next.js App Router, TypeScript, Tailwind CSS, and Server Actions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    modules: [
      "Modern JavaScript ES6+ & TypeScript Mastery",
      "React 19 Hooks, State, and Component Architecture",
      "Next.js App Router, SSR, SSG, and Server Actions",
      "RESTful & GraphQL API Integrations with PostgreSQL",
      "Capstone Project: Multi-Tenant Enterprise SaaS Platform",
    ],
    careerOutcome: "Frontend / Full-Stack Engineer (₹8L – ₹18L PA)",
  },
  {
    id: "mern-stack",
    title: "Enterprise MERN Stack Architecture",
    category: "Development",
    duration: "16 Weeks",
    mode: "Live Interactive",
    level: "Intermediate",
    badge: "High Demand",
    color: "from-emerald-600 to-teal-500",
    bgSoft: "bg-emerald-50",
    textCol: "text-emerald-600",
    borderCol: "border-emerald-100",
    description:
      "Deep dive into full-cycle JavaScript development. Build high-throughput REST APIs with Node.js and Express, architect MongoDB schemas, and integrate microservices with Redis caching.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redis", "Docker"],
    modules: [
      "Advanced Node.js Event Loop & Asynchronous Architecture",
      "MongoDB Indexing, Aggregation Pipelines & Atlas",
      "JWT Authentication, Role-Based Access & Security",
      "Redis Caching & Real-Time WebSockets Architecture",
      "Capstone Project: Real-Time Omnichannel ERP & Chat System",
    ],
    careerOutcome: "Full-Stack Node/React Developer (₹9L – ₹20L PA)",
  },
  {
    id: "gen-ai-agentic",
    title: "Generative AI & Agentic Systems Engineering",
    category: "AI & Data",
    duration: "14 Weeks",
    mode: "Live Labs + Research Project",
    level: "Intermediate to Advanced",
    badge: "Flagship AI",
    color: "from-purple-600 to-indigo-600",
    bgSoft: "bg-purple-50",
    textCol: "text-purple-600",
    borderCol: "border-purple-100",
    description:
      "Learn to architect autonomous multi-agent systems, build enterprise RAG pipelines with vector databases, and fine-tune open-source LLMs using PyTorch and Hugging Face.",
    techStack: ["Python", "PyTorch", "LangChain", "LlamaIndex", "ChromaDB", "FastAPI"],
    modules: [
      "Prompt Engineering & Foundation Model Paradigms",
      "Enterprise RAG Architecture & Vector Embeddings",
      "Multi-Agent Orchestration with LangGraph & CrewAI",
      "LLM Fine-Tuning with LoRA & QLoRA on Custom Data",
      "Capstone Project: Autonomous Enterprise Research Agent",
    ],
    careerOutcome: "AI Engineer / LLM Architect (₹14L – ₹28L PA)",
  },
  {
    id: "cloud-devops",
    title: "Multi-Cloud (AWS & Azure) + Kubernetes DevOps",
    category: "Cloud & DevOps",
    duration: "16 Weeks",
    mode: "Live Cloud Labs",
    level: "Beginner to Advanced",
    badge: "Enterprise SLA",
    color: "from-sky-600 to-blue-600",
    bgSoft: "bg-sky-50",
    textCol: "text-sky-600",
    borderCol: "border-sky-100",
    description:
      "Learn to provision multi-cloud environments with Terraform, orchestrate Kubernetes clusters with Helm, build automated CI/CD pipelines, and manage 24/7 cloud security monitoring.",
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    modules: [
      "Linux Systems & Shell Automation for Cloud Engineers",
      "AWS Core Compute, VPC, IAM, S3, and Serverless Lambda",
      "Docker Containerization & Kubernetes (EKS/AKS) Clustering",
      "Infrastructure as Code (IaC) with Terraform & Ansible",
      "Capstone Project: Zero-Downtime Multi-Region Production Deploy",
    ],
    careerOutcome: "Cloud / DevOps Engineer (₹12L – ₹24L PA)",
  },
  {
    id: "cybersecurity-soc",
    title: "Cybersecurity, Ethical Hacking & SOC Defense",
    category: "Cybersecurity",
    duration: "14 Weeks",
    mode: "Live Cyber Range Labs",
    level: "Beginner to Advanced",
    badge: "High Security",
    color: "from-indigo-600 to-violet-600",
    bgSoft: "bg-indigo-50",
    textCol: "text-indigo-600",
    borderCol: "border-indigo-100",
    description:
      "Understand attack surfaces, conduct penetration testing (OWASP Top 10), configure firewalls, and analyze threat telemetry in realistic SOC incident response simulations.",
    techStack: ["Wireshark", "Burp Suite", "Kali Linux", "SIEM (Splunk)", "Nmap", "Metasploit"],
    modules: [
      "Network Protocols, Packet Analysis & Firewalls",
      "Web Application Security & OWASP Top 10 Exploitation",
      "Penetration Testing & Ethical Hacking Toolsets",
      "SOC Telemetry, Log Analysis & Incident Response",
      "Capstone Project: Full Cyber Range Penetration Test & Audit",
    ],
    careerOutcome: "Cybersecurity / SOC Analyst (₹8L – ₹18L PA)",
  },
  {
    id: "python-backend",
    title: "Python, FastAPI & Microservices Architecture",
    category: "Development",
    duration: "12 Weeks",
    mode: "Live Online",
    level: "Beginner to Intermediate",
    badge: "Fast Track",
    color: "from-amber-600 to-orange-500",
    bgSoft: "bg-amber-50",
    textCol: "text-amber-600",
    borderCol: "border-amber-100",
    description:
      "Build high-performance asynchronous backends using Python 3, FastAPI, asyncpg, and Celery. Implement message queuing with RabbitMQ and deploy on cloud infrastructure.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Celery", "RabbitMQ", "Docker"],
    modules: [
      "Modern Python 3 Type Hints & Asyncio Concurrency",
      "High-Performance API Design with FastAPI & Pydantic",
      "Asynchronous Database ORMs & Raw SQL Optimization",
      "Background Workers & Message Brokers with Celery & RabbitMQ",
      "Capstone Project: High-Throughput Fintech Transaction API",
    ],
    careerOutcome: "Backend Python Engineer (₹8L – ₹16L PA)",
  },
  {
    id: "java-spring",
    title: "Java Spring Boot & Enterprise Systems",
    category: "Development",
    duration: "16 Weeks",
    mode: "Live Interactive",
    level: "Intermediate",
    badge: "Enterprise Standard",
    color: "from-rose-600 to-red-500",
    bgSoft: "bg-rose-50",
    textCol: "text-rose-600",
    borderCol: "border-rose-100",
    description:
      "Enterprise software engineering with Java 21, Spring Boot 3, Spring Security, Hibernate JPA, Kafka event streaming, and distributed microservices design patterns.",
    techStack: ["Java 21", "Spring Boot", "Hibernate", "Kafka", "PostgreSQL", "JUnit"],
    modules: [
      "Object-Oriented Design & Clean Architecture Patterns in Java",
      "Spring Boot 3 REST APIs, Dependency Injection & Security",
      "Database Persistence with Hibernate & JPA Transactions",
      "Event-Driven Microservices Architecture with Apache Kafka",
      "Capstone Project: Distributed Banking & Payment Gateway",
    ],
    careerOutcome: "Enterprise Java Developer (₹10L – ₹22L PA)",
  },
  {
    id: "data-science-ai",
    title: "Data Science, Machine Learning & Analytics",
    category: "AI & Data",
    duration: "16 Weeks",
    mode: "Live Practical Sessions",
    level: "Beginner to Advanced",
    badge: "Data Leader",
    color: "from-teal-600 to-cyan-600",
    bgSoft: "bg-teal-50",
    textCol: "text-teal-600",
    borderCol: "border-teal-100",
    description:
      "Master end-to-end data science: exploratory data analysis, statistical modeling, machine learning algorithms with Scikit-learn, and interactive dashboarding with Power BI and Tableau.",
    techStack: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau", "Power BI"],
    modules: [
      "Statistical Methods, Hypothesis Testing & Advanced SQL",
      "Data Wrangling & Feature Engineering with Pandas & NumPy",
      "Supervised & Unsupervised Machine Learning Algorithms",
      "Interactive Dashboard Storytelling with Power BI",
      "Capstone Project: Customer Churn & Lifetime Value AI Model",
    ],
    careerOutcome: "Data Scientist / Analytics Lead (₹10L – ₹20L PA)",
  },
  {
    id: "digital-marketing-growth",
    title: "Data-Driven Digital Marketing & Growth",
    category: "Business",
    duration: "10 Weeks",
    mode: "Live Real-Budget Campaigns",
    level: "All Levels",
    badge: "High ROI",
    color: "from-pink-600 to-rose-500",
    bgSoft: "bg-pink-50",
    textCol: "text-pink-600",
    borderCol: "border-pink-100",
    description:
      "Learn SEO, Google Ads, Meta advertising, conversion rate optimization (CRO), and growth hacking strategies with live budget execution and analytics.",
    techStack: ["Google Ads", "Meta Ads", "GA4", "SEMrush", "HubSpot", "Canva"],
    modules: [
      "Technical & On-Page SEO Architecture for Top Rankings",
      "Performance Marketing across Google Search & Display Ads",
      "Paid Social Media Strategy & Meta Ad Funnels",
      "Conversion Rate Optimization & Funnel Telemetry with GA4",
      "Capstone Project: Live Real-Budget B2B Lead Gen Campaign",
    ],
    careerOutcome: "Digital Marketing Lead / Growth Marketer (₹7L – ₹15L PA)",
  },
];

const categories = ["All", "Development", "AI & Data", "Cloud & DevOps", "Cybersecurity", "Business"];

export default function LearningHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Application form state
  const [enrollmentForm, setEnrollmentForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    programName: "Full-Stack Next.js & React Engineering",
    experienceLevel: "College Student / Graduate",
    batchPreference: "Weekend Batch (Sat & Sun)",
  });

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter((p) => p.category === selectedCategory);

  const openApplyModal = (program?: any) => {
    if (program) {
      setSelectedProgram(program);
      setEnrollmentForm((prev) => ({ ...prev, programName: program.title }));
    }
    setIsApplying(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEnrollmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">


      {/* =====================================================
          2. PROGRAM CATALOG SECTION
      ====================================================== */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Tech Bootcamps
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
                Explore All Programs
              </h2>
            </div>

            <button
              type="button"
              onClick={() => openApplyModal()}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition"
            >
              Apply for Admission →
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-700">
                      {program.category}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${program.bgSoft} ${program.textCol} border ${program.borderCol}`}
                    >
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {program.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-2.5 text-xs border border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
                      <span className="font-semibold text-slate-800">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Mode</span>
                      <span className="font-semibold text-slate-800">{program.mode}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {program.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3.5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openApplyModal(program)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                  >
                    <span>View Syllabus & Apply</span>
                    <span>→</span>
                  </button>

                  <span className="text-[11px] font-mono text-emerald-600 font-semibold">
                    Admissions Open
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          3. CLEAN & MOBILE-FRIENDLY ENROLLMENT MODAL
      ====================================================== */}
      {isApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6 bg-slate-50/80">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  {isSubmitted ? "Admission Registered" : "Program Enrollment"}
                </h3>
                <p className="text-[11px] text-slate-500 truncate max-w-[260px] sm:max-w-xs">
                  Track: <strong className="text-blue-600">{enrollmentForm.programName}</strong>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsApplying(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-5 sm:p-6 flex-1">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
                    ✓
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-bold text-slate-900">
                    Application Confirmed!
                  </h4>
                  <p className="mx-auto mt-2 max-w-xs text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{enrollmentForm.fullName}</strong>. An admissions mentor will reach out within 24 hours to review your profile and batch schedule.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  {/* Quick Syllabus Preview */}
                  {selectedProgram && (
                    <div className="mb-4 rounded-xl bg-blue-50/70 p-3.5 border border-blue-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Curriculum ({selectedProgram.duration})
                      </p>
                      <ul className="mt-1.5 space-y-1 text-xs text-slate-700">
                        {selectedProgram.modules.slice(0, 3).map((m: string, i: number) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span className="line-clamp-1">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <form onSubmit={handleEnrollSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        placeholder="e.g. Aditi Sharma"
                        value={enrollmentForm.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="aditi@example.com"
                          value={enrollmentForm.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={enrollmentForm.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Select Program Track *
                      </label>
                      <select
                        name="programName"
                        value={enrollmentForm.programName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        {programs.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Background & Batch */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Current Background
                        </label>
                        <select
                          name="experienceLevel"
                          value={enrollmentForm.experienceLevel}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                        >
                          <option value="College Student / Graduate">College Student / Graduate</option>
                          <option value="Working Professional (Tech)">Working Professional (Tech)</option>
                          <option value="Career Switcher (Non-Tech)">Career Switcher (Non-Tech)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Preferred Batch
                        </label>
                        <select
                          name="batchPreference"
                          value={enrollmentForm.batchPreference}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                        >
                          <option value="Weekend Batch (Sat & Sun)">Weekend (Sat & Sun)</option>
                          <option value="Weekday Evening Batch (Mon - Thu)">Weekday Evening</option>
                          <option value="Self-Paced with Mentorship">Self-Paced</option>
                        </select>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setIsApplying(false)}
                        className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:bg-blue-700"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
