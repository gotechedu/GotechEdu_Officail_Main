"use client";

import Link from "next/link";
import React, { useState } from "react";

const jobListings = [
  {
    id: "frontend-dev",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Gurugram / Remote",
    experience: "2–4 Years",
    salary: "₹10L – ₹18L PA",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Architect and ship high-performance, accessible web applications and dashboards with modern micro-frontend principles.",
  },
  {
    id: "fullstack-mern",
    title: "Full-Stack MERN Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Gurugram / Hybrid",
    experience: "2–5 Years",
    salary: "₹12L – ₹20L PA",
    tags: ["Node.js", "Express", "MongoDB", "React", "Docker"],
    description:
      "Design and deploy scalable REST/GraphQL APIs, microservices, and database models for enterprise SaaS solutions.",
  },
  {
    id: "ai-engineer",
    title: "AI & Machine Learning Engineer",
    department: "AI & Data",
    type: "Full-Time",
    location: "Gurugram / Remote",
    experience: "2–5 Years",
    salary: "₹14L – ₹24L PA",
    tags: ["Python", "PyTorch", "LLMs", "LangChain", "RAG"],
    description:
      "Build autonomous AI agents, enterprise RAG vector search pipelines, and fine-tune open-source models for client workflows.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architect",
    department: "Cloud & DevOps",
    type: "Full-Time",
    location: "Gurugram / Remote",
    experience: "3–6 Years",
    salary: "₹15L – ₹25L PA",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker"],
    description:
      "Manage multi-cloud infrastructure, orchestrate Kubernetes clusters, and automate end-to-end zero-downtime CI/CD pipelines.",
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity & SOC Engineer",
    department: "Cybersecurity",
    type: "Full-Time",
    location: "Gurugram / Hybrid",
    experience: "2–5 Years",
    salary: "₹12L – ₹22L PA",
    tags: ["SIEM", "Penetration Testing", "SOC 2", "Zero-Trust"],
    description:
      "Conduct vulnerability assessments, monitor SIEM telemetry, and implement zero-trust security postures across cloud workloads.",
  },
  {
    id: "digital-marketing",
    title: "Performance & Digital Growth Lead",
    department: "Marketing",
    type: "Full-Time",
    location: "Gurugram / On-Site",
    experience: "1–3 Years",
    salary: "₹8L – ₹14L PA",
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics", "CRO"],
    description:
      "Execute data-driven organic and paid acquisition campaigns, content marketing strategies, and conversion rate optimization.",
  },
];

const perks = [
  {
    icon: "🚀",
    title: "Fast-Track Career Growth",
    desc: "Work on high-impact enterprise projects with direct mentorship from principal architects.",
  },
  {
    icon: "💻",
    title: "Top-Tier Work Setup",
    desc: "Latest Apple/Dell hardware, cloud credits, premium IDE licenses, and home-office allowance.",
  },
  {
    icon: "🎓",
    title: "Continuous Upskilling",
    desc: "Unlimited free access to all GotechEdu Learning Hub bootcamps and certification sponsorships.",
  },
  {
    icon: "⚖️",
    title: "Flexible Work Culture",
    desc: "Hybrid and remote-friendly flexibility, generous PTO, and supportive team dynamics.",
  },
];

const departments = ["All", "Engineering", "AI & Data", "Cloud & DevOps", "Cybersecurity", "Marketing"];

export default function CareerPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Senior Frontend Engineer",
    experience: "1-3 Years",
    portfolioUrl: "",
    resumeFileName: "",
    message: "",
  });

  const filteredJobs =
    selectedDept === "All"
      ? jobListings
      : jobListings.filter((job) => job.department === selectedDept);

  const openApplyModal = (jobTitle?: string) => {
    if (jobTitle) {
      setFormData((prev) => ({ ...prev, position: jobTitle }));
    }
    setIsApplying(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFileName: e.target.files![0].name }));
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      <section id="open-positions" className="py-6 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Current Openings
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
                Explore Available Roles
              </h2>
            </div>

            <button
              type="button"
              onClick={() => openApplyModal("General Application")}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition"
            >
              General Application →
            </button>
          </div>

          {/* Department Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-3">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${selectedDept === dept
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="mt-6 space-y-3.5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-100">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                        📍 {job.location}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                        ⏳ {job.experience}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
                        💰 {job.salary}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {job.title}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {job.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center">
                    <button
                      type="button"
                      onClick={() => openApplyModal(job.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-600 active:scale-95"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. CLEAN & MOBILE-PERFECT JOB APPLICATION MODAL
      ====================================================== */}
      {isApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6 bg-slate-50/80">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  {isSubmitted ? "Application Sent" : "Job Application"}
                </h3>
                <p className="text-[11px] text-slate-500 truncate max-w-[260px] sm:max-w-xs">
                  Role: <strong className="text-blue-600">{formData.position}</strong>
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
                    Thank you, {formData.fullName}!
                  </h4>
                  <p className="mx-auto mt-2 max-w-xs text-xs text-slate-600 leading-relaxed">
                    Your profile for <strong className="text-slate-900">{formData.position}</strong> has been received. Our recruiting team will review your application within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.fullName}
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
                        placeholder="vikram@example.com"
                        value={formData.email}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  {/* Position & Experience */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Target Role *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        {jobListings.map((j) => (
                          <option key={j.id} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                        <option value="General Engineering">General Application</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Experience Level
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                      >
                        <option value="0-1 Years (Fresher / Intern)">0-1 Years</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years (Senior / Lead)">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* LinkedIn / GitHub URL */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      LinkedIn / GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Upload Resume / CV (PDF or DOCX) *
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
                      <label className="cursor-pointer rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-100 transition shrink-0">
                        Choose File
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <span className="text-[11px] text-slate-500 truncate">
                        {formData.resumeFileName || "No file chosen (PDF, DOCX max 10MB)"}
                      </span>
                    </div>
                  </div>

                  {/* Brief Note */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Note / Highlights (Optional)
                    </label>
                    <textarea
                      rows={2}
                      name="message"
                      placeholder="Key projects, skills, or why you want to join GotechEdu..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    />
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
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
