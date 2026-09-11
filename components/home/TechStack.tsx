"use client";

import React from "react";
import Link from "next/link";
import {
  BrainCircuit,
  CloudCog,
  ShieldCheck,
  Layers3,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";
const technologies = [
  {
    title: "AI / ML",
    subtitle: "Intelligent Systems",
    description:
      "Building intelligent products with modern AI models, machine learning pipelines and production-ready AI infrastructure.",
    icon: BrainCircuit,
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
    href: "/learninghub?category=AI+%26+Data",
    skills: [
      "Generative AI",
      "LLM & RAG",
      "Machine Learning",
      "AI Agents",
      "Vector Databases",
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Scalable Infrastructure",
    description:
      "Designing reliable cloud infrastructure with automated deployments, containerization and scalable production systems.",
    icon: CloudCog,
    gradient: "from-violet-500 to-indigo-400",
    glow: "bg-violet-500/20",
    href: "/learninghub?category=Cloud+%26+DevOps",
    skills: [
      "AWS / GCP",
      "Docker & Kubernetes",
      "CI / CD",
      "Terraform",
      "Cloud Architecture",
    ],
  },
  {
    title: "Cyber Security",
    subtitle: "Secure by Design",
    description:
      "Protecting applications and infrastructure with modern security practices, monitoring and secure engineering.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-500/20",
    href: "/learninghub?category=Cybersecurity",
    skills: [
      "Application Security",
      "API Security",
      "Authentication",
      "Threat Monitoring",
      "Data Protection",
    ],
  },
  {
    title: "Full Stack",
    subtitle: "Complete Product Engineering",
    description:
      "Creating high-performance web applications with modern frontend, backend, database and API technologies.",
    icon: Layers3,
    gradient: "from-orange-500 to-pink-400",
    glow: "bg-orange-500/20",
    href: "/learninghub?category=Development",
    skills: [
      "React / Next.js",
      "Node.js / Python",
      "REST / GraphQL",
      "PostgreSQL / MongoDB",
      "TypeScript",
    ],
  },
];

export default function TechnologyCapabilities() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={13} className="text-blue-600" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Technology Expertise
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Technology that turns
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              ideas into products.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            We combine modern engineering, intelligent systems and secure
            infrastructure to build scalable digital products.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <Link
                key={tech.title}
                href={tech.href}
                className="group relative [perspective:1200px] block no-underline cursor-pointer"
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -inset-2 rounded-[30px] ${tech.glow} opacity-0 blur-2xl transition duration-500 group-hover:opacity-70`}
                />

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-[0_15px_40px_-20px_rgba(15,23,42,0.25)]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:-translate-y-3
                    group-hover:rotate-x-[2deg]
                    group-hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.3)]
                  "
                >
                  {/* Top gradient line */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${tech.gradient}`}
                  />

                  {/* Decorative orb */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${tech.gradient} opacity-[0.06] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.12]`}
                  />

                  {/* Card Header */}
                  <div className="relative flex items-start justify-between">
                    {/* 3D Icon */}
                    <div className="relative">
                      {/* Shadow layer */}
                      <div
                        className={`absolute inset-0 translate-y-2 rounded-2xl bg-gradient-to-br ${tech.gradient} opacity-20 blur-md`}
                      />

                      {/* Icon container */}
                      <div
                        className={`
                          relative
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white
                          bg-gradient-to-br
                          ${tech.gradient}
                          text-white
                          shadow-lg
                          transition-all
                          duration-500
                          group-hover:-translate-y-2
                          group-hover:rotate-6
                          group-hover:scale-110
                        `}
                      >
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          className="drop-shadow-md"
                        />
                      </div>
                    </div>

                    {/* Number */}
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="relative mt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      {tech.subtitle}
                    </p>

                    <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                      {tech.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative mt-4 min-h-[84px] text-xs leading-5 text-slate-500">
                    {tech.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-100" />

                  {/* Skills */}
                  <div>
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Key Skills
                    </div>

                    <div className="space-y-2.5">
                      {tech.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-xs font-medium text-slate-600 transition-all duration-300 group-hover:translate-x-1"
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tech.gradient} text-white`}
                          >
                            <Check size={9} strokeWidth={3} />
                          </span>

                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-blue-600 flex items-center gap-1"
                    >
                      <span>Explore capability</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>

                    <div
                      className={`
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        text-slate-400
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:border-transparent
                        group-hover:bg-slate-950
                        group-hover:text-white
                        group-hover:rotate-45
                      `}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Bottom hover indicator */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${tech.gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="h-px w-10 bg-slate-200" />

          <p className="text-xs font-semibold text-slate-400">
            Modern stack. Secure architecture. Production-ready engineering.
          </p>

          <div className="h-px w-10 bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
