import React from "react";

const valueProps = [
  {
    icon: "🎯",
    title: "Business-Centric Engineering",
    description:
      "We build technology with clear ROI metrics—focusing on revenue growth, operational efficiency, and user retention.",
    tag: "ROI Focused",
  },
  {
    icon: "⚡",
    title: "Rapid Deployment & Agile Cadence",
    description:
      "Accelerated development cycles with continuous integration, production-ready code, and weekly sprint demos.",
    tag: "Speed to Market",
  },
  {
    icon: "🔒",
    title: "Bank-Grade Security & Compliance",
    description:
      "Security-first design with SOC2, ISO27001 standards, encrypted data pipelines, and strict GDPR adherence.",
    tag: "Enterprise Security",
  },
  {
    icon: "🧠",
    title: "Next-Gen AI Capabilities",
    description:
      "Direct integration of advanced AI models, autonomous agents, and RAG architectures tailored to your proprietary datasets.",
    tag: "AI First",
  },
  {
    icon: "👥",
    title: "Dedicated Senior Engineering Team",
    description:
      "Direct access to principal architects, lead AI engineers, DevOps specialists, and dedicated project managers.",
    tag: "Expert Talent",
  },
  {
    icon: "🌱",
    title: "Full Ecosystem Support & Upskilling",
    description:
      "Post-launch maintenance, 24/7 SLA support, and complete workforce upskilling through GotechEdu tech education.",
    tag: "End-to-End Partnership",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-50/60 py-20 lg:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
            Why GotechEdu
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Empowering Your Digital Transformation.
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            We combine deep technical expertise with strategic execution to help enterprises outpace competitors and innovate faster.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl border border-blue-100 text-blue-600">
                  {prop.icon}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                  {prop.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                {prop.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
