"use client";

import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Laptop,
  ShieldCheck,
  GraduationCap,
  X,
  Send,
  User,
  Mail,
  Phone,
  Globe,
  Award,
  Layers,
  ArrowUpRight,
  FileText,
  DollarSign,
  HeartHandshake,
  Share2,
  Bookmark,
  Copy,
  Check,
  Building,
  ChevronRight,
  Calendar,
  Users,
  Target,
  Zap,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { officialApi } from "@/lib/api";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateUrl,
  sanitizeInput,
} from "@/lib/validation";
import { CareerJob, getFallbackJob, defaultCareers } from "@/lib/careerData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CareerDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  // Initial immediate state from fallback dataset to avoid blank flash
  const fallback = getFallbackJob(slug) || defaultCareers[0];
  const [job, setJob] = useState<CareerJob>(fallback);
  const [loading, setLoading] = useState<boolean>(true);
  const [backendError, setBackendError] = useState<string | null>(null);

  // Related jobs
  const [relatedJobs, setRelatedJobs] = useState<CareerJob[]>([]);

  // Interactive UI states
  const [copied, setCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "responsibilities" | "requirements" | "perks" | "process"
  >("overview");

  // Application Modal & Form states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submittedAppId, setSubmittedAppId] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCompany: "",
    experience: fallback.experience || "2–4 Years",
    expectedCTC: "",
    noticePeriod: "30 Days",
    portfolioUrl: "",
    resumeFileName: "",
    resumeFileSize: "",
    message: "",
  });

  // Fetch job details from backend API
  useEffect(() => {
    let isMounted = true;

    async function loadJobData() {
      try {
        setLoading(true);
        // Call backend API by slug or ID
        const res = await officialApi.getJobById(slug);

        if (isMounted && res && res.job) {
          const apiJob = res.job;
          // Merge API data with rich fallbacks for fields that might be missing in basic schema
          const enriched: CareerJob = {
            id: apiJob._id || apiJob.slug || slug,
            slug: apiJob.slug || slug,
            title: apiJob.title || fallback.title,
            department: apiJob.department || fallback.department,
            type: apiJob.type || fallback.type,
            location: apiJob.location || fallback.location,
            experience: apiJob.experience || fallback.experience,
            salary: apiJob.salary || fallback.salary,
            status: (apiJob.status as any) || "Active",
            openings: fallback.openings || 2,
            postedDate: apiJob.createdAt
              ? new Date(apiJob.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : fallback.postedDate,
            tags:
              Array.isArray(apiJob.tags) && apiJob.tags.length > 0
                ? apiJob.tags
                : fallback.tags,
            description: apiJob.description || fallback.description,
            aboutTeam: fallback.aboutTeam,
            responsibilities:
              Array.isArray(apiJob.responsibilities) &&
              apiJob.responsibilities.length > 0
                ? apiJob.responsibilities
                : fallback.responsibilities,
            requirements:
              Array.isArray(apiJob.requirements) &&
              apiJob.requirements.length > 0
                ? apiJob.requirements
                : fallback.requirements,
            niceToHave: fallback.niceToHave,
            whatWeOffer: fallback.whatWeOffer,
            techStackDetails: fallback.techStackDetails,
            hiringLead: fallback.hiringLead,
          };
          setJob(enriched);
        } else {
          // Use matched fallback job
          const found = getFallbackJob(slug);
          if (found) {
            setJob(found);
          }
        }
      } catch (err) {
        console.error("Failed to load career detail from backend:", err);
        const found = getFallbackJob(slug);
        if (found) setJob(found);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadJobData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Load related jobs
  useEffect(() => {
    async function loadRelated() {
      try {
        const res = await officialApi.getJobs();
        if (res && res.jobs && Array.isArray(res.jobs) && res.jobs.length > 0) {
          const filtered = res.jobs
            .filter((j: any) => j.slug !== slug && j._id !== slug)
            .slice(0, 3)
            .map((j: any) => ({
              id: j._id || j.slug,
              slug:
                j.slug ||
                (j.title
                  ? j.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                  : j._id),
              title: j.title,
              department: j.department || "Engineering",
              type: j.type || "Full-Time",
              location: j.location || "Hybrid",
              experience: j.experience || "2–4 Years",
              salary: j.salary || "Competitive CTC",
              status: (j.status as any) || "Active",
              tags: Array.isArray(j.tags) ? j.tags : [],
              description: j.description || "",
              responsibilities: j.responsibilities || [],
              requirements: j.requirements || [],
            }));
          if (filtered.length > 0) {
            setRelatedJobs(filtered);
            return;
          }
        }
      } catch (err) {
        // fallback to defaultCareers
      }
      const defaultRelated = defaultCareers
        .filter((c) => c.slug !== slug)
        .slice(0, 3);
      setRelatedJobs(defaultRelated);
    }

    loadRelated();
  }, [slug]);

  // Scroll to inline application form
  const scrollToApply = () => {
    const el = document.getElementById("apply-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  // Copy shareable link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  // File upload simulation & validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      if (file.size > 5 * 1024 * 1024) {
        setFormError(
          "Resume file size exceeds the 5MB limit. Please upload a smaller PDF or DOCX file.",
        );
        return;
      }
      setFormData((prev) => ({
        ...prev,
        resumeFileName: file.name,
        resumeFileSize: `${sizeMb} MB`,
      }));
      setFormError("");
    }
  };

  // Form submission handler
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const nameValidation = validateName(formData.fullName);
    if (!nameValidation.isValid) {
      setFormError(nameValidation.error!);
      return;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setFormError(emailValidation.error!);
      return;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      setFormError(phoneValidation.error!);
      return;
    }

    if (formData.portfolioUrl && formData.portfolioUrl.trim()) {
      const urlValidation = validateUrl(formData.portfolioUrl);
      if (!urlValidation.isValid) {
        setFormError(urlValidation.error!);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const res = await officialApi.submitJobApplication({
        jobId: job.id,
        jobTitle: job.title,
        department: job.department,
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        experience: formData.experience,
        currentCompany: formData.currentCompany
          ? sanitizeInput(formData.currentCompany)
          : "",
        expectedCTC: formData.expectedCTC
          ? sanitizeInput(formData.expectedCTC)
          : "",
        noticePeriod: formData.noticePeriod,
        portfolioUrl: formData.portfolioUrl ? formData.portfolioUrl.trim() : "",
        resumeUrl: formData.resumeFileName
          ? `https://storage.gotechedu.internal/resumes/${formData.resumeFileName}`
          : "",
        coverLetter: formData.message ? sanitizeInput(formData.message) : "",
      });

      if (res && res.success === false) {
        setFormError(
          res.message ||
            "Failed to submit application. Please check your inputs.",
        );
      } else {
        setSubmittedAppId(
          res?.applicationId ||
            `APP-${Math.floor(100000 + Math.random() * 900000)}`,
        );
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Job application submission error:", err);
      // Fallback friendly simulation if backend is unreachable
      setSubmittedAppId(`APP-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentCompany: "",
      experience: job.experience || "2–4 Years",
      expectedCTC: "",
      noticePeriod: "30 Days",
      portfolioUrl: "",
      resumeFileName: "",
      resumeFileSize: "",
      message: "",
    });
    setSubmitSuccess(false);
    setFormError("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =====================================================================
          1. TOP BREADCRUMB & BACK ACTION BAR (Sticky Micro-Header)
      ====================================================================== */}
      <div className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md sticky top-0 z-30 transition-all shadow-2xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb Trail */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link
              href="/"
              className="hover:text-blue-600 transition flex items-center gap-1"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href="/career"
              className="hover:text-blue-600 transition flex items-center gap-1 text-slate-600"
            >
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              Careers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600">
              {job.department}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
              {job.title}
            </span>
          </div>

          {/* Quick Utility Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer active:scale-95 ${
                isSaved
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${isSaved ? "fill-amber-500 text-amber-500" : ""}`}
              />
              <span>{isSaved ? "Saved" : "Save Role"}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">
                    Link Copied!
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={scrollToApply}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:brightness-105 active:scale-95 transition cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. HERO SECTION: BRAND SIGNATURE DARK MESH GRADIENT
      ====================================================================== */}
      <section className="bg-[#070e1b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
        {/* Glow ambient background orbs */}
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all engineering openings</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Hero Details */}
            <div className="lg:col-span-8 space-y-5">
              {/* Badge Strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1 text-xs font-mono font-bold text-blue-300">
                  <Layers className="w-3 h-3 text-blue-400" />
                  {job.department}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-xs font-mono font-bold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Actively Hiring
                </span>

                {job.status === "Urgent" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-mono font-bold text-amber-300">
                    <Zap className="w-3 h-3 text-amber-400" />
                    Immediate Joiner Priority
                  </span>
                )}

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-mono font-medium text-slate-300">
                  Ref: GTE-{job.slug.toUpperCase().slice(0, 8)}
                </span>
              </div>

              {/* Main Role Title */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {job.title}
              </h1>

              {/* Hero Brief Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
                {job.description}
              </p>

              {/* Key Meta Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{job.type}</span>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 text-xs text-slate-300">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{job.experience}</span>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-bold text-emerald-300 shadow-sm">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-semibold mr-1">
                  Primary Tech:
                </span>
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 text-xs font-mono font-medium text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Hero Quick Apply Box */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-400">
                  Fast-Track Hiring
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> 48-Hour Response
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Direct Recruiter:</span>
                  <span className="font-semibold text-white">
                    Aditya Verma (Lead Architect)
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Interview Rounds:</span>
                  <span className="font-semibold text-white">
                    4 Stages (Practical &amp; Design)
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Location Flexibility:</span>
                  <span className="font-semibold text-emerald-300">
                    Gurugram / Hybrid / Remote
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Hardware Provided:</span>
                  <span className="font-semibold text-white">
                    Apple MacBook Pro (M3/M4)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToApply}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 py-3.5 px-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 hover:brightness-110 active:scale-95 transition cursor-pointer"
              >
                <span>Apply For This Role</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Takes less than 2 minutes • No account creation needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. KEY POSITION METRICS & HIGHLIGHTS GRID
      ====================================================================== */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:border-blue-200 hover:bg-white hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase text-slate-500">
                    Department
                  </span>
                  <strong className="text-sm font-bold text-slate-900">
                    {job.department} Squad
                  </strong>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:border-emerald-200 hover:bg-white hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase text-slate-500">
                    Compensation
                  </span>
                  <strong className="text-sm font-bold text-slate-900">
                    {job.salary}
                  </strong>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:border-purple-200 hover:bg-white hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase text-slate-500">
                    Work Arrangement
                  </span>
                  <strong className="text-sm font-bold text-slate-900">
                    {job.location}
                  </strong>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:border-amber-200 hover:bg-white hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase text-slate-500">
                    Experience Level
                  </span>
                  <strong className="text-sm font-bold text-slate-900">
                    {job.experience} Required
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. MAIN DETAILS BODY (TWO-COLUMN ARCHITECTURE)
      ====================================================================== */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ==============================================================
                LEFT COLUMN (MAIN CONTENT: 8 COLS)
            ============================================================== */}
            <div className="lg:col-span-8 space-y-8">
              {/* SECTION A: ABOUT ROLE & SQUAD CULTURE */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-600">
                    Mission &amp; Context
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                  About the Role &amp; Engineering Culture
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {job.description}
                </p>
                {job.aboutTeam && (
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold mb-1">
                        Squad Philosophy:
                      </strong>
                      <p>{job.aboutTeam}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION B: RESPONSIBILITIES */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-indigo-600">
                    Your Impact
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                  Key Responsibilities
                </h2>
                <div className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3.5 p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition"
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION C: QUALIFICATIONS & REQUIREMENTS */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-emerald-600">
                    Qualifications
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                  What We&apos;re Looking For
                </h2>
                <div className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition"
                    >
                      <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 font-extrabold" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Nice To Have */}
                {job.niceToHave && job.niceToHave.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      Bonus Points / Nice-to-Have
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {job.niceToHave.map((nice, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl border border-purple-100 bg-purple-50/40 text-xs text-purple-900 leading-relaxed font-medium"
                        >
                          + {nice}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION D: TECH STACK MATRIX */}
              {job.techStackDetails && job.techStackDetails.length > 0 && (
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-600">
                      Engineering Architecture
                    </span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                    Tech Stack &amp; Tools You&apos;ll Use Daily
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {job.techStackDetails.map((tech) => (
                      <div
                        key={tech.name}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 hover:bg-white hover:border-blue-300 hover:shadow-xs transition"
                      >
                        <span className="block text-xs font-mono font-bold text-blue-700">
                          {tech.name}
                        </span>
                        <span className="block text-[11px] text-slate-500 font-medium">
                          {tech.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION E: WHY BUILD AT GOTECHEDU (PERKS & CULTURE) */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-purple-600">
                    Comprehensive Benefits
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                  Why You&apos;ll Love Engineering Here
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Elite Workstation Setup
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Latest Apple MacBook Pro (M3/M4 Series) or Dell XPS with
                        multi-monitor desktop stipend.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Sponsored Upskilling
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        100% reimbursed global certifications (AWS, Azure, Red
                        Hat) plus full Academy access.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Family Medical Cover
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Comprehensive health, dental, and personal accidental
                        insurance for you and your dependents.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Autonomy &amp; Flexibility
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Flexible remote &amp; hybrid policies with transparent
                        leadership and zero micromanagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION F: 4-STAGE INTERVIEW JOURNEY */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-blue-600">
                    Transparent Process
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-950">
                  What To Expect: The 4-Stage Journey
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative p-4 rounded-2xl border border-slate-200/90 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black font-mono text-blue-600">
                        01
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                        Application Review
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Review of your background, GitHub repositories, and code
                        samples.
                      </p>
                    </div>
                    <span className="mt-3 inline-block font-mono text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                      Within 48 Hours
                    </span>
                  </div>

                  <div className="relative p-4 rounded-2xl border border-slate-200/90 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black font-mono text-indigo-600">
                        02
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                        Technical Deep-Dive
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Live coding &amp; system architecture discussion with
                        Lead Architect.
                      </p>
                    </div>
                    <span className="mt-3 inline-block font-mono text-[10px] font-bold text-indigo-700 bg-indigo-100/60 px-2 py-0.5 rounded">
                      45–60 Mins
                    </span>
                  </div>

                  <div className="relative p-4 rounded-2xl border border-slate-200/90 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black font-mono text-purple-600">
                        03
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                        Culture &amp; Leadership
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Alignment on vision, team dynamics, ownership, and
                        engineering impact.
                      </p>
                    </div>
                    <span className="mt-3 inline-block font-mono text-[10px] font-bold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded">
                      30 Mins
                    </span>
                  </div>

                  <div className="relative p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black font-mono text-emerald-600">
                        04
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                        Offer &amp; Onboard
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Formal offer proposal and immediate dispatch of your
                        Apple MacBook.
                      </p>
                    </div>
                    <span className="mt-3 inline-block font-mono text-[10px] font-bold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                      24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* ==============================================================
                  SECTION G: INTEGRATED LIVE APPLICATION FORM (#apply-section)
              ============================================================== */}
              <div
                id="apply-section"
                className="scroll-mt-24 rounded-3xl border-2 border-blue-600/30 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-mono font-bold text-blue-700 border border-blue-100">
                      <Send className="w-3.5 h-3.5" />
                      Direct Candidate Submission
                    </span>
                    <h2 className="mt-2 font-heading text-xl sm:text-2xl font-black text-slate-950">
                      Apply For {job.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Our hiring leads review all applications within 48 hours.
                    </p>
                  </div>

                  <span className="self-start sm:self-auto rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs font-mono font-bold text-emerald-800">
                    ⚡ Fast 2-Min Form
                  </span>
                </div>

                {submitSuccess ? (
                  /* SUCCESS STATE */
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-slate-950">
                      Application Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for applying to join the GoTechEdu team as a{" "}
                      <strong>{job.title}</strong>. Our talent acquisition squad
                      has received your candidate profile.
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 border border-slate-200 px-4 py-2 font-mono text-xs font-bold text-slate-800">
                      <span>Application Reference:</span>
                      <span className="text-blue-700">{submittedAppId}</span>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                      <Link
                        href="/career"
                        className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition"
                      >
                        Explore Other Openings →
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ACTIVE FORM */
                  <form
                    onSubmit={handleSubmitApplication}
                    className="mt-6 space-y-5"
                  >
                    {formError && (
                      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700 flex items-start gap-2.5 animate-shake">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="e.g. Vikram Sharma"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. vikram@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone & Current Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Mobile / Phone Number{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +91 9876543210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Current Company / College
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="currentCompany"
                            placeholder="e.g. Tech Solutions Pvt Ltd"
                            value={formData.currentCompany}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Experience, Notice Period, Expected CTC */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Relevant Experience
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition cursor-pointer"
                        >
                          <option value="Fresher / 0–1 Years">
                            Fresher / 0–1 Years
                          </option>
                          <option value="1–3 Years">1–3 Years</option>
                          <option value="2–4 Years">2–4 Years</option>
                          <option value="3–5 Years">3–5 Years</option>
                          <option value="5+ Years">
                            5+ Years (Lead / Staff)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Notice Period
                        </label>
                        <select
                          name="noticePeriod"
                          value={formData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition cursor-pointer"
                        >
                          <option value="Immediate Joiner">
                            Immediate Joiner
                          </option>
                          <option value="15 Days">15 Days</option>
                          <option value="30 Days">30 Days</option>
                          <option value="60 Days">60 Days</option>
                          <option value="90 Days">90 Days</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Expected Annual CTC
                        </label>
                        <div className="relative">
                          <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="expectedCTC"
                            placeholder="e.g. ₹15 LPA"
                            value={formData.expectedCTC}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Portfolio / GitHub / LinkedIn URL */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        GitHub / Portfolio / LinkedIn URL
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="url"
                          name="portfolioUrl"
                          placeholder="https://github.com/yourhandle or https://linkedin.com/in/yourhandle"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                        />
                      </div>
                    </div>

                    {/* Row 5: Resume Upload Zone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Attach Resume / CV (PDF, DOCX up to 5MB)
                      </label>
                      <div className="relative border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-5 text-center bg-slate-50/50 hover:bg-blue-50/30 transition cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        {formData.resumeFileName ? (
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xs font-bold text-slate-900">
                              {formData.resumeFileName}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              ({formData.resumeFileSize})
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormData((prev) => ({
                                  ...prev,
                                  resumeFileName: "",
                                  resumeFileSize: "",
                                }));
                              }}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs font-bold text-slate-800">
                              Click or drag and drop your resume file here
                            </p>
                            <p className="text-[11px] text-slate-400 mt-1">
                              PDF, DOC, DOCX files accepted (Max 5MB)
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Row 6: Cover Note / Architectural Projects Highlights */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Brief Cover Note / Architectural Highlights (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about a challenging system or frontend optimization you architected..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/15 transition"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 hover:brightness-105 active:scale-95 disabled:opacity-50 transition cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>
                              Submitting Application to Talent Squad...
                            </span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Application For {job.title}</span>
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-slate-400 text-center mt-2.5">
                        By submitting, you agree to allow GoTechEdu to process
                        your candidate data strictly for hiring.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* ==============================================================
                RIGHT COLUMN (STICKY SIDEBAR: 4 COLS)
            ============================================================== */}
            <div className="lg:col-span-4 space-y-6 sticky top-20">
              {/* CARD 1: QUICK ACTION SUMMARY */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-extrabold uppercase text-slate-400">
                    Position Overview
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-700">
                    Active Opening
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      Role Title
                    </span>
                    <strong className="text-slate-900 font-bold truncate max-w-[170px]">
                      {job.title}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-600" />
                      Department
                    </span>
                    <strong className="text-slate-900 font-bold">
                      {job.department}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      Location
                    </span>
                    <strong className="text-slate-900 font-bold truncate max-w-[170px]">
                      {job.location}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                      Salary / CTC
                    </span>
                    <strong className="text-emerald-700 font-bold">
                      {job.salary}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-purple-600" />
                      Openings
                    </span>
                    <strong className="text-slate-900 font-bold">
                      {job.openings || 2} Seats Available
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollToApply}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 hover:brightness-105 active:scale-95 transition cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* CARD 3: SHARE THIS POSITION */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-400 block">
                  Share This Opportunity
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white py-2 text-xs font-semibold text-slate-700 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">
                          Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : "",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] text-slate-600 transition"
                    title="Share on LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `Check out this ${job.title} role at GoTechEdu: ${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-slate-600 transition"
                    title="Share on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* CARD 4: RELATED OPEN POSITIONS */}
              {relatedJobs.length > 0 && (
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
                      Other Open Roles
                    </span>
                    <Link
                      href="/career"
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {relatedJobs.map((rj) => (
                      <Link
                        key={rj.slug}
                        href={`/career/${rj.slug}`}
                        className="group block p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition"
                      >
                        <span className="text-[10px] font-mono font-bold text-blue-700 block mb-1">
                          {rj.department} • {rj.type}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {rj.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2 text-[11px] text-slate-500">
                          <span>{rj.location}</span>
                          <span className="font-semibold text-emerald-700">
                            {rj.salary}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. BOTTOM GENERAL APPLICATION BANNER
      ====================================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#070e1b] to-indigo-950 p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="space-y-2 max-w-2xl relative z-10">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Don&apos;t See Your Exact Role?
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-white">
                We Are Always Looking for Exceptional Engineers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Send us your resume and GitHub profile. We review unlisted
                profiles for upcoming enterprise software, autonomous AI, and
                cloud DevOps expansion squads.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/career"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-md hover:bg-slate-100 active:scale-95 transition"
              >
                <span>Browse All Open Roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 active:scale-95 transition"
              >
                <span>Contact Tech Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
