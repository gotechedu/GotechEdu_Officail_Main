"use client";

import React, { useState } from "react";

const stackData = [
  {
    category: "AI & Data Science",
    items: [
      { name: "OpenAI GPT-4o / Claude", desc: "LLM Orchestration & Custom Prompting", icon: "🧠" },
      { name: "LangChain & LlamaIndex", desc: "RAG Knowledge Base & Agent Workflows", icon: "⛓️" },
      { name: "PyTorch & TensorFlow", desc: "Deep Learning & Model Fine-Tuning", icon: "🔥" },
      { name: "Pinecone & Qdrant", desc: "Vector Databases for AI Search", icon: "⚡" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Amazon Web Services (AWS)", desc: "EC2, EKS, Lambda, S3 & CloudFront", icon: "☁️" },
      { name: "Google Cloud Platform", desc: "BigQuery, Vertex AI & GKE", icon: "🌐" },
      { name: "Kubernetes & Docker", desc: "Containerization & Auto-Scaling", icon: "🐳" },
      { name: "Terraform & GitHub Actions", desc: "Infrastructure as Code & CI/CD", icon: "🚀" },
    ],
  },
  {
    category: "Frontend & Web",
    items: [
      { name: "Next.js 16 & React 19", desc: "Server Components & SSR Performance", icon: "⚛️" },
      { name: "TypeScript", desc: "Type-Safe Full-Stack Architecture", icon: "📘" },
      { name: "Tailwind CSS v4", desc: "Responsive Design Systems & UI Components", icon: "🎨" },
      { name: "GraphQL & REST APIs", desc: "Optimized Data Fetching Layer", icon: "🔌" },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js & Express / NestJS", desc: "Scalable Microservices Backend", icon: "🟢" },
      { name: "Python & Fast API", desc: "High-Performance AI Backend & Async APIs", icon: "🐍" },
      { name: "PostgreSQL & MongoDB", desc: "Relational & Document Data Stores", icon: "🐘" },
      { name: "Redis", desc: "In-Memory Caching & Real-time Pub/Sub", icon: "🔴" },
    ],
  },
];

function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-20 lg:py-28 border-t border-slate-200/80">
      {/* Ambient Glow */}
      <div className="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 backdrop-blur-sm shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              Technology Stack
            </span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Built on Battle-Tested Enterprise Tech.
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            We leverage cutting-edge frameworks, robust cloud infrastructure, and modern AI tools to ensure speed, security, and enterprise scalability.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-slate-100/90 p-2 border border-slate-200/80 shadow-2xs">
            {stackData.map((cat, idx) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                  activeCategory === idx
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20 font-extrabold scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Items Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackData[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >
              {/* Subtle accent bar on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-2xl shadow-xs border border-blue-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              <h3 className="mt-4 font-heading text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>

              <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
