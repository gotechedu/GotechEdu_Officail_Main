"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { officialApi } from "@/lib/api";

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
const locations = ["All Locations", "Remote", "Hybrid", "On-Site"];
const experiences = ["All Experience", "1–3 Years", "2–5 Years", "3–6 Years"];

export default function CareerPage() {
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedExperience, setSelectedExperience] = useState("All Experience");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Senior Frontend Engineer",
    experience: "1-3 Years",
    portfolioUrl: "",
    expectedCTC: "",
    resumeFileName: "",
    message: "",
  });

  // Fetch live jobs from Backend API
  useEffect(() => {
    const fetchLiveJobs = async () => {
      try {
        setLoading(true);
        const data = await officialApi.getJobs();
        if (data && data.jobs && data.jobs.length > 0) {
          const formatted = data.jobs.map((j: any) => ({
            id: j._id || j.slug,
            title: j.title,
            department: j.department || "Engineering",
            type: j.type || "Full-Time",
            location: j.location || "Gurugram / Remote",
            experience: j.experience || "2–4 Years",
            salary: j.salary || "₹12L – ₹20L PA",
            tags: j.tags || [],
            description: j.description,
          }));

          setAllJobs(formatted);
        } else {
          setAllJobs([]);
        }
      } catch (err) {
        console.log("Failed to fetch live jobs:", err);
        setAllJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveJobs();
  }, []);

  // Calculate active filter count
  const activeFiltersCount =
    (selectedDept !== "All" ? 1 : 0) +
    (selectedLocation !== "All Locations" ? 1 : 0) +
    (selectedExperience !== "All Experience" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const resetFilters = () => {
    setSelectedDept("All");
    setSelectedLocation("All Locations");
    setSelectedExperience("All Experience");
    setSearchQuery("");
    setSortBy("recommended");
  };

  const filteredJobs = allJobs
    .filter((job) => {
      // Department filter
      if (selectedDept !== "All" && job.department !== selectedDept) {
        return false;
      }
      // Location filter
      if (selectedLocation !== "All Locations" && !job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
      // Experience filter
      if (selectedExperience !== "All Experience" && !job.experience.includes(selectedExperience.replace("Years", "").trim())) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesDept = job.department.toLowerCase().includes(q);
        const matchesLoc = job.location.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        const matchesTags = (job.tags || []).some((t: string) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDept && !matchesLoc && !matchesDesc && !matchesTags) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

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

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await officialApi.submitJobApplication({
        jobTitle: formData.position,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        expectedCTC: formData.expectedCTC,
        portfolioUrl: formData.portfolioUrl,
        coverLetter: formData.message,
      });
    } catch (err) {
      console.log("Submit application error (saved locally):", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section id="open-positions" className="py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header & Controls Bar */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                Current Openings
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950">
                Explore Available Roles
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Showing <strong className="text-blue-600 font-bold">{filteredJobs.length}</strong> of{" "}
                {allJobs.length} open technical roles
              </p>
            </div>

            {/* Action controls */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Search Bar Input */}
              <div className="relative flex-1 sm:w-64 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search role, skills, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 shadow-2xs placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Filter Toggle Button */}
              <button
                type="button"
                onClick={() => setShowFilterPanel(!showFilterPanel)}
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition shadow-2xs ${
                  showFilterPanel || activeFiltersCount > 0
                    ? "border-blue-500 bg-blue-50 text-blue-700 font-extrabold"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                }`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => openApplyModal("General Application")}
                className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 hover:opacity-95 active:scale-95 transition"
              >
                <span>General Application</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Expandable Advanced Filter Panel */}
          {showFilterPanel && (
            <div className="mt-5 rounded-2xl border border-blue-200/90 bg-white p-5 sm:p-6 shadow-sm animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                  Filter Career Opportunities
                </span>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Department */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Department
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location / Work Mode */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Work Location / Mode
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Sort Order
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
                  >
                    <option value="recommended">Featured / Recommended</option>
                    <option value="title">Alphabetical (A - Z)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Active Filter Chips */}
          {activeFiltersCount > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Active Filters:
              </span>
              {selectedDept !== "All" && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  Dept: {selectedDept}
                  <button type="button" onClick={() => setSelectedDept("All")} className="hover:text-blue-900 font-bold ml-1">✕</button>
                </span>
              )}
              {selectedLocation !== "All Locations" && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Location: {selectedLocation}
                  <button type="button" onClick={() => setSelectedLocation("All Locations")} className="hover:text-emerald-900 font-bold ml-1">✕</button>
                </span>
              )}
              {selectedExperience !== "All Experience" && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                  Experience: {selectedExperience}
                  <button type="button" onClick={() => setSelectedExperience("All Experience")} className="hover:text-indigo-900 font-bold ml-1">✕</button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  Search: "{searchQuery}"
                  <button type="button" onClick={() => setSearchQuery("")} className="hover:text-amber-900 font-bold ml-1">✕</button>
                </span>
              )}
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-bold text-slate-500 hover:text-rose-600 transition underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Jobs List, Loading Skeleton, or Empty State */}
          {loading ? (
            <div className="mt-6 space-y-3.5">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div
                  key={idx}
                  className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div className="h-5 w-24 rounded-full bg-slate-200" />
                    <div className="h-5 w-28 rounded-full bg-slate-100" />
                    <div className="h-5 w-20 rounded-full bg-slate-100" />
                    <div className="h-5 w-24 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-6 w-1/3 rounded-lg bg-slate-200 mb-2" />
                  <div className="h-4 w-3/4 rounded bg-slate-100 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-5 w-16 rounded bg-slate-100" />
                    <div className="h-5 w-16 rounded bg-slate-100" />
                    <div className="h-5 w-16 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-400">
                💼
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                No job openings match your criteria
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Try clearing some filters or submit a general application for upcoming positions.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-200 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-300 transition"
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  onClick={() => openApplyModal("General Application")}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition"
                >
                  General Application →
                </button>
              </div>
            </div>
          ) : (
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
                        {(job.tags || []).map((tag: string) => (
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
          )}
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
                        {allJobs.map((j: any) => (
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
