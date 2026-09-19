"use client";

import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Laptop,
  ShieldCheck,
  GraduationCap,
  X,
  RotateCcw,
  Send,
  User,
  Mail,
  Phone,
  Globe,
  Award,
  Layers,
  ArrowUpRight,
  SlidersHorizontal,
  FileText,
  DollarSign,
  HeartHandshake,
} from "lucide-react";
import { officialApi } from "@/lib/api";

const perks = [
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "High-Impact Architecture",
    desc: "Work on mission-critical enterprise ERPs, microservices, and autonomous multi-agent AI systems from day one.",
    highlight: "Real Production Impact",
  },
  {
    icon: <Laptop className="w-6 h-6 text-indigo-600" />,
    title: "Elite Engineering Setup",
    desc: "Latest Apple MacBooks or Dell XPS machines, cloud credits on AWS/Azure, premium IDE licenses, and home-office budget.",
    highlight: "Top-Tier Hardware",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
    title: "Uncapped Upskilling & Sponsorships",
    desc: "100% free access to all GoTechEdu Learning Academy bootcamps plus sponsored global certifications (AWS, Azure, Red Hat).",
    highlight: "Sponsored Credentials",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
    title: "Radical Autonomy & Flexibility",
    desc: "Flexible remote and hybrid options, transparent engineering leadership, comprehensive medical cover, and generous PTO.",
    highlight: "Work-Life Harmony",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Application Review",
    time: "Within 48 Hours",
    desc: "Our technical recruiting team assesses your skills, GitHub repos, and architectural experience.",
  },
  {
    step: "02",
    title: "Technical & System Deep Dive",
    time: "45–60 Mins",
    desc: "A hands-on discussion with a Lead Architect on system design, code patterns, and problem solving.",
  },
  {
    step: "03",
    title: "Leadership & Culture Sync",
    time: "30 Mins",
    desc: "Meet with founders and engineering leads to align on vision, product ownership, and team values.",
  },
  {
    step: "04",
    title: "Offer & Fast-Track Onboard",
    time: "24 Hours",
    desc: "Competitive compensation proposal, signed offer, and immediate shipment of your development machine.",
  },
];

const locationsList = ["All Locations", "Remote", "Hybrid", "On-site"];
const experiencesList = ["All Experience", "1–3 Years", "2–5 Years", "3–6 Years"];

export default function CareerPage() {
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedExperience, setSelectedExperience] = useState("All Experience");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  // Application Drawer / Modal State
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "General Application",
    department: "Engineering",
    experience: "1-3 Years",
    currentCompany: "",
    expectedCTC: "",
    noticePeriod: "30 Days",
    portfolioUrl: "",
    resumeFileName: "",
    message: "",
  });

  // Fetch live jobs from Backend API
  useEffect(() => {
    const fetchLiveJobs = async () => {
      try {
        setLoading(true);
        const data = await officialApi.getJobs();
        if (data && data.jobs && Array.isArray(data.jobs)) {
          const formatted = data.jobs.map((j: any) => ({
            id: j._id || j.slug,
            title: j.title,
            department: j.department || "Engineering",
            type: j.type || "Full-Time",
            location: j.location || "Hybrid / On-site",
            experience: j.experience || "2–4 Years",
            salary: j.salary || "Competitive CTC",
            tags: Array.isArray(j.tags) ? j.tags : [],
            description:
              j.description ||
              "Lead high-throughput software delivery and mentor engineers on production architectures.",
          }));
          setAllJobs(formatted);
        } else {
          setAllJobs([]);
        }
      } catch (err) {
        console.error("Failed to fetch live jobs:", err);
        setAllJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveJobs();
  }, []);

  // Compute dynamic departments from active jobs
  const dynamicDepartments = useMemo(() => {
    const depts = Array.from(
      new Set(allJobs.map((j) => (j.department || "").trim()).filter(Boolean))
    );
    return ["All", ...depts];
  }, [allJobs]);

  // Dynamic department counts
  const departmentCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allJobs.length };
    dynamicDepartments.forEach((dept) => {
      if (dept !== "All") {
        counts[dept] = allJobs.filter(
          (j) => (j.department || "").toLowerCase() === dept.toLowerCase()
        ).length;
      }
    });
    return counts;
  }, [allJobs, dynamicDepartments]);

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

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    return allJobs
      .filter((job) => {
        // Department filter
        if (selectedDept !== "All") {
          if ((job.department || "").toLowerCase() !== selectedDept.toLowerCase()) {
            return false;
          }
        }
        // Location filter
        if (selectedLocation !== "All Locations") {
          if (
            !(job.location || "")
              .toLowerCase()
              .includes(selectedLocation.toLowerCase())
          ) {
            return false;
          }
        }
        // Experience filter
        if (selectedExperience !== "All Experience") {
          const expKeyword = selectedExperience.replace("Years", "").trim();
          if (!(job.experience || "").includes(expKeyword)) {
            return false;
          }
        }
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = (job.title || "").toLowerCase().includes(q);
          const matchesDept = (job.department || "").toLowerCase().includes(q);
          const matchesLoc = (job.location || "").toLowerCase().includes(q);
          const matchesDesc = (job.description || "").toLowerCase().includes(q);
          const matchesTags = (job.tags || []).some((t: string) =>
            typeof t === "string" && t.toLowerCase().includes(q)
          );
          if (
            !matchesTitle &&
            !matchesDept &&
            !matchesLoc &&
            !matchesDesc &&
            !matchesTags
          ) {
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
  }, [allJobs, selectedDept, selectedLocation, selectedExperience, searchQuery, sortBy]);

  const openApplyModal = (jobTitle?: string, dept?: string) => {
    setFormData((prev) => ({
      ...prev,
      position: jobTitle || "General Application",
      department: dept || "Engineering",
    }));
    setIsApplying(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resumeFileName: e.target.files![0].name,
      }));
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await officialApi.submitJobApplication({
        jobTitle: formData.position,
        department: formData.department,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        currentCompany: formData.currentCompany,
        expectedCTC: formData.expectedCTC,
        noticePeriod: formData.noticePeriod,
        portfolioUrl: formData.portfolioUrl,
        coverLetter: formData.message,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submit application error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">


      {/* =====================================================================
          2. CULTURE & ENGINEERING PRINCIPLES (PERKS & BENEFITS)
      ====================================================================== */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-600">
              Why Build With GoTechEdu
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-slate-950">
              Engineering Culture Driven By Autonomy &amp; Mastery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We empower team members with complete ownership, bleeding-edge tools,
              and continuous mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="group relative rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs mb-4 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 border border-blue-100 mb-2">
                    {p.highlight}
                  </span>
                  <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MAIN OPEN POSITIONS & REFINED DISCOVERY COMMAND HUB
      ====================================================================== */}
      <section id="open-positions" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Briefcase className="w-3.5 h-3.5" />
                Live Job Openings
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950">
                Explore Available Engineering Roles
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                All roles include competitive base salary, health coverage,
                continuous upskilling, and flexible work modes.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openApplyModal("General Application", "Engineering")}
              className="self-start md:self-auto inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:brightness-105 active:scale-95 transition cursor-pointer"
            >
              <span>General Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* DISCOVERY & FILTER COMMAND CARD */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs mb-8 space-y-5">
            {/* ROW 1: Integrated Omni-Search & Facet Dropdowns */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5">
              {/* Search Bar Input */}
              <div className="relative flex-1 min-w-[280px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search role, skills (e.g. Python, OWASP, Linux), keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-9 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/15 transition shadow-xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Facet Controls */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Location Filter */}
                <div className="relative flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 absolute left-3 pointer-events-none" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {locationsList.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc === "All Locations" ? "All Locations" : `Mode: ${loc}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Filter */}
                <div className="relative flex items-center">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 absolute left-3 pointer-events-none" />
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {experiencesList.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp === "All Experience" ? "All Experience" : `Exp: ${exp}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Order */}
                <div className="relative flex items-center">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    <option value="recommended">Sort: Featured Roles</option>
                    <option value="title">Sort: Title (A - Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ROW 2: Department Pills Rail */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  Filter by Department
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {allJobs.length} active roles
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {dynamicDepartments.map((dept) => {
                  const isSelected = selectedDept === dept;
                  const count = departmentCounts[dept] || 0;

                  return (
                    <button
                      key={dept}
                      type="button"
                      onClick={() => setSelectedDept(dept)}
                      className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                        }`}
                    >
                      <span>{dept === "All" ? "All Departments" : dept}</span>
                      <span
                        className={`rounded-full px-2 py-0.2 text-[10px] font-mono font-extrabold ${isSelected
                            ? "bg-white/20 text-white"
                            : "bg-slate-200/70 text-slate-600"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ROW 3: Active Filters Tags Tray & Reset */}
            {activeFiltersCount > 0 && (
              <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2 animate-fadeIn">
                <span className="text-xs text-slate-500 font-semibold mr-1">
                  Active Filters ({activeFiltersCount}):
                </span>

                {selectedDept !== "All" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-2xs">
                    <span>Department: {selectedDept}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedDept("All")}
                      className="hover:text-blue-900 cursor-pointer"
                      aria-label="Remove department filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {selectedLocation !== "All Locations" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-bold text-emerald-700 shadow-2xs">
                    <span>Location: {selectedLocation}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedLocation("All Locations")}
                      className="hover:text-emerald-900 cursor-pointer"
                      aria-label="Remove location filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {selectedExperience !== "All Experience" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-bold text-indigo-700 shadow-2xs">
                    <span>Experience: {selectedExperience}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedExperience("All Experience")}
                      className="hover:text-indigo-900 cursor-pointer"
                      aria-label="Remove experience filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {searchQuery.trim() !== "" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 border border-slate-300 px-2.5 py-1 text-xs font-bold text-slate-800 shadow-2xs">
                    <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="hover:text-slate-950 cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 hover:underline ml-2 cursor-pointer transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All Filters</span>
                </button>
              </div>
            )}
          </div>

          {/* Results Counter Bar */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Showing <strong className="font-bold text-slate-950">{filteredJobs.length}</strong>{" "}
                of <span className="font-semibold">{allJobs.length}</span> active engineering roles
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-3">
              <span>✓ Direct Recruiter Review</span>
              <span>•</span>
              <span>✓ 48-Hr Turnaround</span>
              <span>•</span>
              <span>✓ High-Equity Incentives</span>
            </div>
          </div>

          {/* JOBS LIST, SKELETON LOADER, OR EMPTY STATE */}
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="h-5 w-24 rounded-full bg-slate-200" />
                    <div className="h-5 w-28 rounded-full bg-slate-100" />
                    <div className="h-5 w-20 rounded-full bg-slate-100" />
                    <div className="h-5 w-24 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-7 w-1/3 rounded-lg bg-slate-200" />
                  <div className="h-4 w-3/4 rounded bg-slate-100" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-5 w-16 rounded bg-slate-100" />
                    <div className="h-5 w-20 rounded bg-slate-100" />
                    <div className="h-5 w-16 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-slate-900">
                No matching career openings found
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Try loosening your filters or submit a general application to be
                considered for upcoming positions.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-200 transition cursor-pointer"
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  onClick={() => openApplyModal("General Application", "Engineering")}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-blue-700 transition cursor-pointer"
                >
                  General Application →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="max-w-3xl space-y-3">
                    {/* Badge Row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-mono font-bold text-blue-700 border border-blue-100">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-mono font-medium text-slate-600">
                        📍 {job.location}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-mono font-medium text-slate-600">
                        ⏳ {job.experience}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-[11px] font-mono font-bold text-emerald-700 border border-emerald-100">
                        💰 {job.salary}
                      </span>
                      <span className="rounded-full bg-purple-50 px-3 py-0.5 text-[11px] font-mono font-bold text-purple-700 border border-purple-100">
                        {job.type}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {job.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {(job.tags || []).slice(0, 6).map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {(job.tags || []).length > 6 && (
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          +{(job.tags || []).length - 6} more skills
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Apply CTA Button */}
                  <div className="shrink-0 flex lg:flex-col items-center justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <button
                      type="button"
                      onClick={() => openApplyModal(job.title, job.department)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:brightness-105 active:scale-95 transition cursor-pointer"
                    >
                      <span>Apply For Role</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          4. TRANSPARENT 4-STEP HIRING PROCESS
      ====================================================================== */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-600">
              Transparent &amp; Fast-Paced
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-slate-950">
              Our 4-Step Engineering Hiring Journey
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We respect your time. No puzzle trivia or endless loops — just real
              discussions with our core architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-3xl border border-slate-200/90 bg-slate-50/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-blue-600">
                      {step.step}
                    </span>
                    <span className="rounded-full bg-blue-100/70 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-800">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. JOB APPLICATION MODAL (DIRECT API INTEGRATION)
      ====================================================================== */}
      {isApplying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div
            className="absolute inset-0"
            onClick={() => setIsApplying(false)}
          />

          <div className="relative z-10 w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/80">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                  Application Submission
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900">
                  {isSubmitted ? "Application Received" : formData.position}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsApplying(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 transition text-xs font-bold cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 flex-1">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900">
                    Thank you, {formData.fullName}!
                  </h4>
                  <p className="mx-auto max-w-sm text-xs text-slate-600 leading-relaxed">
                    Your profile for{" "}
                    <strong className="text-slate-900">{formData.position}</strong> has
                    been successfully registered in our recruitment system. Our hiring
                    leads will review your application within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="mt-4 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-blue-700 transition cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        name="fullName"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="+91 9608094837"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Role & Experience */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Target Role *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
                      >
                        {allJobs.map((j: any) => (
                          <option key={j.id} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                        <option value="General Application">General Application</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
                      >
                        <option value="0-1 Years (Fresher / Intern)">0-1 Years</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years (Senior / Staff)">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  {/* Current Company & Expected CTC */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Current Company / College
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        placeholder="e.g. Infosys / Tech Corp"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Expected CTC (LPA)
                      </label>
                      <input
                        type="text"
                        name="expectedCTC"
                        placeholder="e.g. ₹12 LPA"
                        value={formData.expectedCTC}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* LinkedIn / GitHub Profile */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      LinkedIn / GitHub URL
                    </label>
                    <div className="relative">
                      <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        name="portfolioUrl"
                        placeholder="https://linkedin.com/in/username or github.com/..."
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
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
                        {formData.resumeFileName || "PDF or DOCX (Max 10MB)"}
                      </span>
                    </div>
                  </div>

                  {/* Cover Letter / Note */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Cover Note / Highlights (Optional)
                    </label>
                    <textarea
                      rows={2}
                      name="message"
                      placeholder="Share your proudest project or reason for joining GoTechEdu..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:brightness-105 transition cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
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
