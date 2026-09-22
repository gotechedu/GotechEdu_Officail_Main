"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Filter,
  Sparkles,
  Star,
  Clock,
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Calendar,
  ChevronRight,
  ArrowRight,
  Play,
  Flame,
  BadgePercent,
  Laptop,
  Terminal,
  SlidersHorizontal,
  Layers,
  Briefcase,
  TrendingUp,
  X,
  Tag,
  Check,
  Cpu,
  Cloud,
  Code2,
  LayoutGrid,
  List,
  RotateCcw,
  ArrowUpDown,
} from "lucide-react";
import { officialApi } from "@/lib/api";
import { validateName, validateEmail, validatePhone, sanitizeInput } from "@/lib/validation";

// Helper functions to safely extract instructor details without runtime object errors
const getInstructorName = (instructor: any): string => {
  if (!instructor) return "GoTechEdu Principal Architect";
  if (typeof instructor === "string") return instructor;
  if (typeof instructor === "object") {
    if (instructor.name) {
      return `${instructor.name}${instructor.role ? ` · ${instructor.role}` : ""}`;
    }
    if (instructor.role) return instructor.role;
  }
  return "GoTechEdu Principal Architect";
};

const getInstructorAvatar = (instructor: any, fallback?: string): string => {
  if (
    instructor &&
    typeof instructor === "object" &&
    typeof instructor.avatar === "string"
  ) {
    return instructor.avatar;
  }
  if (typeof fallback === "string" && fallback) return fallback;
  return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
};

const experienceLevels = [
  "All Levels",
  "Beginner to Advanced",
  "Intermediate",
  "Advanced",
];
const durationOptions = [
  "All Durations",
  "Up to 12 Weeks",
  "14-16 Weeks",
  "12 Months (Diploma)",
];
const ratingOptions = ["All Ratings", "4.8 & up", "4.5 & up"];

export default function LearningHubPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Application Drawer / Modal State
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] =
    useState<any>(null);
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeOrCompany: "",
    batchPreference: "Weekend Batch (Sat & Sun)",
    experienceLevel: "Beginner to Intermediate",
    notes: "",
  });
  const [isSubmittingApply, setIsSubmittingApply] = useState(false);
  const [isApplySuccess, setIsApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState("");

  // Fetch ONLY live courses from Backend API
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setIsLoading(true);
        const res = await officialApi.getCourses();
        if (res && res.courses && Array.isArray(res.courses)) {
          const liveFormatted = res.courses.map((c: any) => ({
            id: c.slug || c._id,
            slug: c.slug || c._id,
            title:
              typeof c.title === "string"
                ? c.title
                : c.title?.name || "Professional Certification",
            category:
              typeof c.category === "string" && c.category.trim()
                ? c.category.trim()
                : "Development",
            subCategory:
              typeof c.subCategory === "string"
                ? c.subCategory
                : typeof c.category === "string"
                  ? c.category
                  : "Specialization",
            duration: typeof c.duration === "string" ? c.duration : "14 Weeks",
            totalHours:
              typeof c.totalHours === "string" ? c.totalHours : "100+ Hours",
            lecturesCount:
              typeof c.lecturesCount === "number" ? c.lecturesCount : 50,
            mode: typeof c.mode === "string" ? c.mode : "Live Online",
            level:
              typeof c.level === "string" ? c.level : "Beginner to Advanced",
            badge: typeof c.badge === "string" ? c.badge : "Accredited",
            badgeStyle:
              typeof c.badgeStyle === "string"
                ? c.badgeStyle
                : "bg-blue-600 text-white",
            color:
              typeof c.color === "string"
                ? c.color
                : "from-blue-600 to-indigo-600",
            description: typeof c.description === "string" ? c.description : "",
            instructor: getInstructorName(c.instructor),
            instructorAvatar: getInstructorAvatar(
              c.instructor,
              c.instructorAvatar,
            ),
            originalPrice:
              typeof c.originalPrice === "number"
                ? c.originalPrice
                : c.price
                  ? c.price * 2
                  : 49999,
            discountedPrice:
              typeof c.discountedPrice === "number"
                ? c.discountedPrice
                : c.price || 24999,
            emiStartsAt:
              typeof c.emiStartsAt === "string" ? c.emiStartsAt : "₹2,083/mo",
            rating: typeof c.rating === "number" ? c.rating : 4.9,
            reviewsCount:
              typeof c.reviewsCount === "number" ? c.reviewsCount : 120,
            enrolledStudents:
              typeof c.enrolledStudents === "number"
                ? `${c.enrolledStudents.toLocaleString()}+`
                : "3,500+",
            nextBatchDate:
              typeof c.nextBatchDate === "string"
                ? c.nextBatchDate
                : "Upcoming Cohort",
            careerOutcome:
              typeof c.careerOutcome === "string"
                ? c.careerOutcome
                : "Software Engineer",
            image:
              typeof c.image === "string" && c.image.startsWith("http")
                ? c.image
                : c.previewImage ||
                  c.thumbnail ||
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
            techStack: Array.isArray(c.techStack)
              ? c.techStack.map((t: any) =>
                  typeof t === "string" ? t : t?.name || String(t),
                )
              : ["Next.js", "Cloud", "APIs"],
          }));
          setCourses(liveFormatted);
        } else {
          setCourses([]);
        }
      } catch (err) {
        console.error("Failed to load courses from API:", err);
        setCourses([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadCourses();
  }, []);

  // Dynamically compute category tabs from loaded API courses
  const categoriesList = useMemo(() => {
    const uniqueCats = Array.from(
      new Set(courses.map((c) => (c.category || "").trim()).filter(Boolean)),
    );
    const list: { id: string; name: string; icon: React.ReactNode }[] = [
      {
        id: "All",
        name: "All Programs",
        icon: <Layers className="w-3.5 h-3.5" />,
      },
    ];
    uniqueCats.forEach((cat) => {
      const lower = cat.toLowerCase();
      let icon = <Code2 className="w-3.5 h-3.5" />;
      if (lower.includes("ai") || lower.includes("data"))
        icon = <Cpu className="w-3.5 h-3.5" />;
      else if (lower.includes("cloud") || lower.includes("devops"))
        icon = <Cloud className="w-3.5 h-3.5" />;
      else if (lower.includes("security") || lower.includes("cyber"))
        icon = <ShieldCheck className="w-3.5 h-3.5" />;
      else if (lower.includes("diploma") || lower.includes("cert"))
        icon = <Award className="w-3.5 h-3.5" />;
      else if (lower.includes("business"))
        icon = <Briefcase className="w-3.5 h-3.5" />;
      list.push({ id: cat, name: cat, icon });
    });
    return list;
  }, [courses]);

  // Dynamic Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: courses.length };
    categoriesList.forEach((cat) => {
      if (cat.id !== "All") {
        counts[cat.id] = courses.filter(
          (c) => (c.category || "").toLowerCase() === cat.id.toLowerCase(),
        ).length;
      }
    });
    return counts;
  }, [courses, categoriesList]);

  // Filter & Search Logic
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Category Filter
        if (selectedCategory !== "All") {
          if (
            (course.category || "").toLowerCase() !==
            selectedCategory.toLowerCase()
          ) {
            return false;
          }
        }

        // Level Filter
        if (selectedLevel !== "All Levels") {
          if (
            !course.level.toLowerCase().includes(selectedLevel.toLowerCase())
          ) {
            return false;
          }
        }

        // Duration Filter
        if (selectedDuration === "Up to 12 Weeks") {
          const weeks = parseInt(course.duration);
          if (!isNaN(weeks) && weeks > 12) return false;
        } else if (selectedDuration === "14-16 Weeks") {
          const weeks = parseInt(course.duration);
          if (!isNaN(weeks) && weeks < 14) return false;
        } else if (selectedDuration === "12 Months (Diploma)") {
          if (!course.duration.toLowerCase().includes("month")) return false;
        }

        // Rating Filter
        if (selectedRating === "4.8 & up") {
          if ((course.rating || 0) < 4.8) return false;
        } else if (selectedRating === "4.5 & up") {
          if ((course.rating || 0) < 4.5) return false;
        }

        // Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = (course.title || "").toLowerCase().includes(q);
          const matchDesc = (course.description || "")
            .toLowerCase()
            .includes(q);
          const matchCat = (course.category || "").toLowerCase().includes(q);
          const matchTech = (course.techStack || []).some(
            (t: string) => typeof t === "string" && t.toLowerCase().includes(q),
          );
          if (!matchTitle && !matchDesc && !matchCat && !matchTech)
            return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "popular") return b.reviewsCount - a.reviewsCount;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "price-low")
          return a.discountedPrice - b.discountedPrice;
        if (sortBy === "price-high")
          return b.discountedPrice - a.discountedPrice;
        return a.title.localeCompare(b.title);
      });
  }, [
    courses,
    selectedCategory,
    selectedLevel,
    selectedDuration,
    selectedRating,
    searchQuery,
    sortBy,
  ]);

  const activeFiltersCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (selectedLevel !== "All Levels" ? 1 : 0) +
    (selectedDuration !== "All Durations" ? 1 : 0) +
    (selectedRating !== "All Ratings" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All Levels");
    setSelectedDuration("All Durations");
    setSelectedRating("All Ratings");
    setSearchQuery("");
    setSortBy("popular");
  };

  const handleOpenApply = (course: any) => {
    setSelectedCourseForApply(course);
    setIsApplyModalOpen(true);
    setIsApplySuccess(false);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplyError("");

    const nameVal = validateName(applyForm.fullName);
    if (!nameVal.isValid) {
      setApplyError(nameVal.error!);
      return;
    }

    const emailVal = validateEmail(applyForm.email);
    if (!emailVal.isValid) {
      setApplyError(emailVal.error!);
      return;
    }

    const phoneVal = validatePhone(applyForm.phone);
    if (!phoneVal.isValid) {
      setApplyError(phoneVal.error!);
      return;
    }

    setIsSubmittingApply(true);
    try {
      const res = await officialApi.submitCourseApplication({
        courseId: selectedCourseForApply?.id || null,
        courseTitle: selectedCourseForApply?.title || "General Application",
        studentName: applyForm.fullName.trim(),
        email: applyForm.email.trim(),
        phone: applyForm.phone.trim(),
        collegeOrCompany: applyForm.collegeOrCompany ? sanitizeInput(applyForm.collegeOrCompany) : "",
        experienceLevel: applyForm.experienceLevel,
        learningGoal: applyForm.notes ? sanitizeInput(applyForm.notes) : "",
        modePreference: applyForm.batchPreference,
      });

      if (res && res.success === false) {
        setApplyError(res.message || "Failed to submit course application.");
      } else {
        setIsApplySuccess(true);
      }
    } catch (err) {
      console.error("Enrollment error:", err);
      setApplyError("Network error occurred. Please try again.");
    } finally {
      setIsSubmittingApply(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =====================================================================
          2. SCHOLARSHIP ANNOUNCEMENT STRIP
      ====================================================================== */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-2.5 px-4 shadow-sm">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
              SCHOLARSHIP
            </span>
            <span className="text-xs sm:text-sm font-semibold">
              🎓 50% Flat Launch Grant on all Full-Stack &amp; AI Cohorts with
              code{" "}
              <strong className="underline font-mono font-extrabold text-amber-300">
                GOTECH50
              </strong>
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleOpenApply(courses[0] || null)}
            className="rounded-full bg-white text-blue-700 px-4 py-1.5 text-xs font-extrabold hover:bg-slate-100 transition shadow-xs shrink-0 cursor-pointer active:scale-95"
          >
            Claim 50% Scholarship →
          </button>
        </div>
      </section>

      {/* =====================================================================
          3. MAIN CATALOG & REFINED PROFESSIONAL FILTER SECTION
      ====================================================================== */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* PROFESSIONAL FILTER & DISCOVERY COMMAND HUB */}
          <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 mb-8 space-y-5">
            {/* ROW 1: Integrated Omni-Search & Quick Facet Controls */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5">
              {/* Integrated Instant Search Input */}
              <div className="relative flex-1 min-w-[280px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 12+ programs: Next.js, AI Agents, Cloud DevOps, Python, AWS..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-9 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/15 transition shadow-xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Facet Dropdowns & View Mode Strip */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Level Dropdown */}
                <div className="relative flex items-center">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 absolute left-3 pointer-events-none" />
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {experienceLevels.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl === "All Levels" ? "All Levels" : `Level: ${lvl}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Duration Dropdown */}
                <div className="relative flex items-center">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 absolute left-3 pointer-events-none" />
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {durationOptions.map((dur) => (
                      <option key={dur} value={dur}>
                        {dur === "All Durations"
                          ? "All Durations"
                          : `Duration: ${dur}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter Dropdown */}
                <div className="relative flex items-center">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400 absolute left-3 pointer-events-none" />
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {ratingOptions.map((rat) => (
                      <option key={rat} value={rat}>
                        {rat === "All Ratings"
                          ? "All Ratings"
                          : `Rating: ${rat}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By Dropdown */}
                <div className="relative flex items-center">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 absolute left-3 pointer-events-none" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 pl-8 pr-7 py-2 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>

                {/* View Mode Toggle Switcher */}
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-white text-blue-600 shadow-xs font-bold"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      viewMode === "list"
                        ? "bg-white text-blue-600 shadow-xs font-bold"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ROW 2: Coursera & Udemy-style Specialization Rail */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                  Explore by Specialization
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {courses.length} verified programs
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {categoriesList.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryCounts[cat.id] || 0;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/20"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                      }`}
                    >
                      <span
                        className={isSelected ? "text-white" : "text-blue-600"}
                      >
                        {cat.icon}
                      </span>
                      <span>{cat.name}</span>
                      <span
                        className={`rounded-full px-2 py-0.2 text-[10px] font-mono font-extrabold ${
                          isSelected
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

                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-2xs">
                    <span>Specialization: {selectedCategory}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("All")}
                      className="hover:text-blue-900 cursor-pointer"
                      aria-label="Remove category filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {selectedLevel !== "All Levels" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200 px-2.5 py-1 text-xs font-bold text-indigo-700 shadow-2xs">
                    <span>Level: {selectedLevel}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel("All Levels")}
                      className="hover:text-indigo-900 cursor-pointer"
                      aria-label="Remove level filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {selectedDuration !== "All Durations" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 border border-purple-200 px-2.5 py-1 text-xs font-bold text-purple-700 shadow-2xs">
                    <span>Duration: {selectedDuration}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedDuration("All Durations")}
                      className="hover:text-purple-900 cursor-pointer"
                      aria-label="Remove duration filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {selectedRating !== "All Ratings" && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-xs font-bold text-amber-800 shadow-2xs">
                    <span>Rating: {selectedRating}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedRating("All Ratings")}
                      className="hover:text-amber-950 cursor-pointer"
                      aria-label="Remove rating filter"
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
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 hover:underline ml-2 cursor-pointer transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All Filters</span>
                </button>
              </div>
            )}
          </div>

          {/* Results Counter & Trust Markers */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Showing{" "}
                <strong className="font-bold text-slate-950">
                  {filteredCourses.length}
                </strong>{" "}
                of <span className="font-semibold">{courses.length}</span>{" "}
                accredited programs
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-3">
              <span>✓ 1-on-1 Mentorship</span>
              <span>•</span>
              <span>✓ Capstone Labs</span>
              <span>•</span>
              <span>✓ Verifiable Certificate</span>
            </div>
          </div>

          {/* COURSES DISPLAY: SKELETON, EMPTY OR CARDS (GRID/LIST) */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {[1, 2, 3, 4, 5, 6].map((sk) => (
                <div
                  key={sk}
                  className="animate-pulse rounded-3xl border border-slate-200/90 bg-white overflow-hidden p-5 shadow-xs flex flex-col justify-between h-[450px]"
                >
                  <div>
                    <div className="h-44 w-full rounded-2xl bg-slate-200 mb-4" />
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-4 w-24 rounded bg-slate-200" />
                      <div className="h-4 w-12 rounded bg-slate-100" />
                    </div>
                    <div className="h-6 w-3/4 rounded bg-slate-200 mb-2" />
                    <div className="h-3 w-full rounded bg-slate-100 mb-1" />
                    <div className="h-3 w-4/5 rounded bg-slate-100 mb-4" />
                    <div className="flex gap-1.5">
                      <div className="h-5 w-16 rounded bg-slate-100" />
                      <div className="h-5 w-16 rounded bg-slate-100" />
                      <div className="h-5 w-16 rounded bg-slate-100" />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="h-6 w-24 rounded bg-slate-200" />
                    <div className="h-8 w-24 rounded-xl bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center my-6">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-slate-800">
                No matching programs found
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try loosening your filters or searching for different keywords
                like Next.js, Python, AWS, or DevOps.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-4 rounded-xl bg-blue-600 text-white px-5 py-2 text-xs font-bold hover:bg-blue-700 transition cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* GRID VIEW (Udemy 3-Column Cards) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  {/* Card Media Preview Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span
                        className={`rounded-md px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-wide shadow-xs ${course.badgeStyle}`}
                      >
                        {course.badge}
                      </span>
                      <span className="rounded-md bg-black/60 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono font-bold text-white">
                        {course.duration}
                      </span>
                    </div>

                    {/* Next Batch Date Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="flex items-center gap-1 font-semibold text-blue-200">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>Starts {course.nextBatchDate}</span>
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                        {course.mode}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                          {course.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-slate-800">
                            {course.rating.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            ({course.reviewsCount.toLocaleString()})
                          </span>
                        </div>
                      </div>

                      {/* Course Title */}
                      <Link
                        href={`/learninghub/${course.slug}`}
                        className="group-hover:text-blue-600 transition-colors"
                      >
                        <h3 className="font-heading text-base sm:text-lg font-black text-slate-950 leading-snug line-clamp-2">
                          {course.title}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(course.techStack || [])
                          .slice(0, 4)
                          .map((tech: string) => (
                            <span
                              key={tech}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>

                      {/* Instructor Info (Object-Safe) */}
                      {/* <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden shrink-0 border border-slate-200">
                          <Image
                            src={getInstructorAvatar(course.instructor, course.instructorAvatar)}
                            alt={getInstructorName(course.instructor)}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-medium text-slate-600 truncate">
                          {getInstructorName(course.instructor)}
                        </span>
                      </div> */}
                    </div>

                    {/* Pricing & Actions */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-lg sm:text-xl font-black text-slate-950">
                            ₹{course.discountedPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-slate-400 line-through">
                            ₹{course.originalPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="rounded bg-emerald-50 px-1.5 py-0.2 text-[10px] font-mono font-bold text-emerald-700 border border-emerald-200">
                            50% OFF
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-medium">
                          EMI {course.emiStartsAt}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/learninghub/${course.slug}`}
                          className="flex items-center justify-center gap-1 rounded-xl border border-slate-300 bg-white py-2 text-xs font-bold text-slate-800 hover:border-blue-600 hover:text-blue-600 transition active:scale-95"
                        >
                          <span>Curriculum</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleOpenApply(course)}
                          className="flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2 text-xs font-bold text-white shadow-xs hover:shadow-md hover:brightness-105 transition active:scale-95 cursor-pointer"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST VIEW (Udemy Search Results Format) */
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col md:flex-row gap-5 items-start"
                >
                  {/* Left Thumbnail */}
                  <div className="relative h-48 md:h-44 w-full md:w-72 shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-bold uppercase shadow-xs ${course.badgeStyle}`}
                      >
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  {/* Center Details */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono text-[10px] font-extrabold uppercase text-blue-600">
                        {course.category}
                      </span>
                      <span>•</span>
                      <span className="text-slate-500">{course.duration}</span>
                      <span>•</span>
                      <span className="text-slate-500">{course.mode}</span>
                    </div>

                    <Link href={`/learninghub/${course.slug}`}>
                      <h3 className="font-heading text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition leading-snug">
                        {course.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {(course.techStack || []).map((t: string) => (
                        <span
                          key={t}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs pt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold">
                          {course.rating.toFixed(2)}
                        </span>
                        <span className="text-slate-400">
                          ({course.reviewsCount})
                        </span>
                      </div>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-500 font-medium">
                        Instructor: {getInstructorName(course.instructor)}
                      </span>
                    </div>
                  </div>

                  {/* Right Pricing & Actions */}
                  <div className="w-full md:w-56 shrink-0 md:border-l md:border-slate-100 md:pl-5 flex flex-col justify-between h-full space-y-3 pt-2 md:pt-0">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-xl font-black text-slate-950">
                          ₹{course.discountedPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{course.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                        50% SCHOLARSHIP
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1">
                        EMI {course.emiStartsAt}
                      </p>
                    </div>

                    <div className="space-y-2 w-full">
                      <button
                        type="button"
                        onClick={() => handleOpenApply(course)}
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-xs font-bold text-white shadow-xs hover:brightness-105 transition cursor-pointer"
                      >
                        Apply Now
                      </button>
                      <Link
                        href={`/learninghub/${course.slug}`}
                        className="w-full inline-block text-center rounded-xl border border-slate-200 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                      >
                        View Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          4. WHY LEARN WITH GOTECHEDU
      ====================================================================== */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Why Learn With GoTechEdu?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our engineering bootcamps and diplomas are engineered for real
              outcomes, not just theory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Terminal className="w-6 h-6 text-blue-600" />,
                title: "Production-Grade Code",
                desc: "Deploy 6+ real cloud projects with Docker, automated CI/CD, and real database migrations.",
              },
              {
                icon: <Users className="w-6 h-6 text-purple-600" />,
                title: "1-on-1 Mentor Guidance",
                desc: "Weekly code reviews, 24/7 Discord support, and architecture sessions with Senior Staff Engineers.",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
                title: "Career & Placement Cell",
                desc: "Resume overhaul, LinkedIn profiling, mock interviews, and referrals to our 500+ hiring partners.",
              },
              {
                icon: <Award className="w-6 h-6 text-amber-600" />,
                title: "Certifications",
                desc: "Verifiable digital credential with QR code verification accepted across leading tech enterprises.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl flex flex-row items-center gap-2 border border-slate-200/80 bg-slate-50/50 p-6 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-xs mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. APPLICATION / ENROLLMENT MODAL DRAWER
      ====================================================================== */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="absolute inset-0"
            onClick={() => setIsApplyModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pb-4 border-b border-slate-100 pr-8">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                Course Application &amp; Scholarship
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mt-1">
                {selectedCourseForApply?.title || "Program Application"}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                <span>
                  Fee: ₹
                  {selectedCourseForApply?.discountedPrice?.toLocaleString(
                    "en-IN",
                  ) || "24,999"}
                </span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">
                  50% Scholarship Applied
                </span>
              </div>
            </div>

            {isApplySuccess ? (
              <div className="my-6 rounded-2xl bg-emerald-50 p-6 text-center border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                  Our admissions coordinator will contact you with batch
                  onboarding details and scholarship confirmation within 2
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-4 rounded-xl bg-emerald-600 text-white px-5 py-2 text-xs font-bold hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="mt-4 space-y-3.5">
                {applyError && (
                  <div className="rounded-xl bg-red-50 p-2.5 text-xs font-semibold text-red-600 border border-red-200">
                    {applyError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applyForm.fullName}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, fullName: e.target.value })
                      }
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applyForm.phone}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, phone: e.target.value })
                      }
                      placeholder="+91 9608094837"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applyForm.email}
                      onChange={(e) =>
                        setApplyForm({ ...applyForm, email: e.target.value })
                      }
                      placeholder="rahul@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      College / Company
                    </label>
                    <input
                      type="text"
                      value={applyForm.collegeOrCompany}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          collegeOrCompany: e.target.value,
                        })
                      }
                      placeholder="e.g. B.Tech 3rd Year / Freelancer"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Batch Preference
                    </label>
                    <select
                      value={applyForm.batchPreference}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          batchPreference: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="Weekend Batch (Sat & Sun)">
                        Weekend Batch (Sat &amp; Sun)
                      </option>
                      <option value="Weekday Evening Batch">
                        Weekday Evening Batch
                      </option>
                      <option value="Self-Paced with 1:1 Mentorship">
                        Self-Paced with Mentorship
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      value={applyForm.experienceLevel}
                      onChange={(e) =>
                        setApplyForm({
                          ...applyForm,
                          experienceLevel: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="Beginner (No coding experience)">
                        Beginner (No coding experience)
                      </option>
                      <option value="College Student / Graduate">
                        College Student / Graduate
                      </option>
                      <option value="Working Professional / Upskilling">
                        Working Professional / Upskilling
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Goals or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={applyForm.notes}
                    onChange={(e) =>
                      setApplyForm({ ...applyForm, notes: e.target.value })
                    }
                    placeholder="Tell us what you want to achieve or any scholarship query..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingApply}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:brightness-105 transition active:scale-95 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmittingApply ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application &amp; Reserve Seat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
