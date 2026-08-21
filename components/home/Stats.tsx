import React from "react";

const stats = [
  {
    value: "500+",
    label: "Enterprise Solutions Deployed",
    subtext: "Custom ERP, CRM, AI agents & cloud systems",
  },
  {
    value: "99.99%",
    label: "Infrastructure Uptime SLA",
    subtext: "High-availability multi-region architecture",
  },
  {
    value: "50,000+",
    label: "Learners & Professionals",
    subtext: "Upskilled in software, AI & DevOps",
  },
  {
    value: "15+",
    label: "Global Tech Partnerships",
    subtext: "AWS, Microsoft, Google Cloud & OpenAI ecosystem",
  },
];

const partners = [
  "AWS Premier",
  "Google Cloud Partner",
  "Microsoft Solutions",
  "OpenAI Tech Stack",
  "Kubernetes Ecosystem",
  "Docker Certified",
];

function Stats() {
  return (
    <section className="bg-white py-16 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Partner Logos/Badges Banner */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Trusted by Leaders Across Enterprise, Startup & Education Sectors
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Metric Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
            >
              <p className="text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition">
                {stat.value}
              </p>
              <h3 className="mt-2 text-base font-bold text-slate-800">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
