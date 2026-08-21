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
    <section className="bg-white py-20 lg:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Technology Stack
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Built on Battle-Tested Enterprise Tech.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We leverage cutting-edge frameworks, robust cloud infrastructure, and modern AI tools to ensure speed, security, and enterprise scalability.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-slate-100 p-2 border border-slate-200">
            {stackData.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(idx)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition sm:text-sm ${
                  activeCategory === idx
                    ? "bg-white text-blue-600 shadow-md font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
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
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm border border-slate-200/80">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.name}
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
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
