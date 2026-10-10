"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, use, useMemo } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Copy,
  Check,
  Share2,
  Bookmark,
  ChevronRight,
  Tag,
  User,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  ExternalLink,
  ListFilter, ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { officialApi } from "@/lib/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogData {
  _id?: string;
  title: string;
  slug: string;
  category?: string;
  date?: string;
  createdAt?: string;
  readTime?: string;
  coverImage?: string;
  author?: {
    name?: string;
    role?: string;
    initials?: string;
    avatarBg?: string;
    bio?: string;
  };
  badge?: string;
  description?: string;
  content?: string;
  tags?: string[];
  views?: number;
}

/**
 * Parses inline formatting:
 * - Markdown links [text](url) -> highlighted link
 * - Raw URLs http/https -> highlighted link
 * - Bold **text**
 * - Inline code `code`
 */
function renderFormattedInline(text: string): React.ReactNode[] {
  const pattern =
    /(\[([^\]]+)\]\((https?:\/\/[^\s)]+|[^\s)]+)\))|(https?:\/\/[^\s<]+)|(\*\*([^*]+)\*\*)|(`([^`]+)`)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      // Markdown link [label](url)
      const label = match[2];
      const href = match[3];
      const isExternal = href.startsWith("http");
      elements.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-semibold text-blue-600 underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-800 hover:decoration-blue-600 hover:bg-blue-50/90 px-1 py-0.5 rounded transition-all inline-flex items-center gap-1 cursor-pointer"
        >
          <span>{label}</span>
          {isExternal && <ExternalLink className="h-3 w-3 opacity-80 inline" />}
        </a>
      );
    } else if (match[4]) {
      // Raw URL
      const url = match[4];
      elements.push(
        <a
          key={`raw-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 underline decoration-blue-300 decoration-2 underline-offset-4 hover:text-blue-800 hover:decoration-blue-600 hover:bg-blue-50/90 px-1 py-0.5 rounded transition-all inline-flex items-center gap-1 break-all cursor-pointer"
        >
          <span>{url}</span>
          <ExternalLink className="h-3 w-3 opacity-80 inline shrink-0" />
        </a>
      );
    } else if (match[5]) {
      // Bold text
      elements.push(
        <strong key={`bold-${match.index}`} className="font-bold text-slate-900">
          {match[6]}
        </strong>
      );
    } else if (match[7]) {
      // Inline code
      elements.push(
        <code
          key={`code-${match.index}`}
          className="rounded-md bg-blue-50/90 border border-blue-200/70 px-1.5 py-0.5 font-mono text-xs font-semibold text-blue-800"
        >
          {match[8]}
        </code>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements.length > 0 ? elements : [text];
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const [blog, setBlog] = useState<BlogData | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Newsletter subscription
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

  // Scroll reading progress
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  // Fetch article
  useEffect(() => {
    let isMounted = true;

    async function loadPostData() {
      try {
        setLoading(true);
        setError(null);

        const res = await officialApi.getBlogBySlug(slug);

        if (!isMounted) return;

        if (res && res.blog) {
          setBlog(res.blog);
        } else {
          setError("The requested article could not be found.");
        }
      } catch (err: any) {
        if (!isMounted) return;
        setError(err?.message || "Failed to load publication data.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPostData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Load related posts
  useEffect(() => {
    let isMounted = true;

    async function loadRelated() {
      try {
        const res = await officialApi.getBlogs();
        if (res && res.blogs && isMounted) {
          const others = res.blogs
            .filter((b: any) => b.slug !== slug && b._id !== slug)
            .slice(0, 3);
          setRelatedBlogs(others);
        }
      } catch {
        // Quietly ignore
      }
    }

    loadRelated();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Copy URL
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Social Share Handlers
  const handleShareTwitter = () => {
    if (typeof window !== "undefined" && blog) {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(blog.title);
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        "_blank",
        "noopener,noreferrer,width=600,height=400"
      );
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank",
        "noopener,noreferrer,width=600,height=500"
      );
    }
  };

  // Sidebar newsletter submit
  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setSidebarEmail("");
    }
  };

  // Formatted publication details
  const formattedDate = useMemo(() => {
    if (blog?.date) return blog.date;
    if (blog?.createdAt) {
      return new Date(blog.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
    return "Recently Published";
  }, [blog?.date, blog?.createdAt]);

  const author = useMemo(() => {
    const raw = blog?.author;
    const name = raw?.name || "GoTechEdu Editorial Team";
    const role = raw?.role || "Engineering & Research";
    const initials =
      raw?.initials ||
      name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    const avatarBg = raw?.avatarBg || "bg-blue-600";
    const bio =
      raw?.bio ||
      `${name} is a technical contributor at GoTechEdu, sharing enterprise architecture breakdowns and software best practices.`;

    return { name, role, initials, avatarBg, bio };
  }, [blog?.author]);

  // Extract headings for Table of Contents
  const tableOfContents = useMemo(() => {
    if (!blog?.content) return [];
    const lines = blog.content.split("\n");
    const headings: string[] = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (
        trimmed.startsWith("### ") ||
        trimmed.startsWith("## ") ||
        trimmed.startsWith("# ")
      ) {
        headings.push(trimmed.replace(/^#{1,3}\s+/, ""));
      }
    }
    return headings.slice(0, 6);
  }, [blog?.content]);

  // Render article content safely with clean typography & highlighted links
  const renderContentBlocks = useMemo(() => {
    if (!blog) return null;

    const rawContent = blog.content || "";
    if (!rawContent.trim()) {
      return (
        <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
          {renderFormattedInline(blog.description || "")}
        </p>
      );
    }

    const rawBlocks = rawContent
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .filter((block) => block.length > 0);

    return rawBlocks.map((block, idx) => {
      // Markdown header: #, ##, ###
      if (block.startsWith("### ")) {
        return (
          <h4
            key={idx}
            className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mt-6 mb-2"
          >
            {renderFormattedInline(block.replace(/^###\s+/, ""))}
          </h4>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-8 mb-3"
          >
            {renderFormattedInline(block.replace(/^##\s+/, ""))}
          </h3>
        );
      }
      if (block.startsWith("# ")) {
        return (
          <h2
            key={idx}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4"
          >
            {renderFormattedInline(block.replace(/^#\s+/, ""))}
          </h2>
        );
      }

      // Blockquote: >
      if (block.startsWith(">")) {
        return (
          <blockquote
            key={idx}
            className="my-6 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50/60 p-4 sm:p-5 text-slate-800 italic"
          >
            {renderFormattedInline(block.replace(/^>\s*/gm, ""))}
          </blockquote>
        );
      }

      // Code snippet block: ```
      if (block.startsWith("```")) {
        const cleanCode = block
          .replace(/^```[a-zA-Z]*\n?/, "")
          .replace(/```$/, "");
        return (
          <div
            key={idx}
            className="my-6 overflow-x-auto rounded-xl bg-slate-900 p-4 sm:p-5 text-xs sm:text-sm font-mono text-cyan-300 shadow-inner"
          >
            <pre>{cleanCode}</pre>
          </div>
        );
      }

      // List block (starts with bullet • or - or numbered list)
      const lines = block.split("\n");
      const isBulletList = lines.every(
        (l) =>
          l.trim().startsWith("•") ||
          l.trim().startsWith("-") ||
          l.trim().startsWith("*")
      );
      const isNumberedList = lines.every((l) => /^\d+\.\s/.test(l.trim()));

      if (isBulletList) {
        return (
          <ul key={idx} className="my-5 space-y-2 text-slate-700 pl-2">
            {lines.map((line, lIdx) => (
              <li key={lIdx} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span className="text-base leading-relaxed">
                  {renderFormattedInline(line.replace(/^[•\-\*]\s*/, ""))}
                </span>
              </li>
            ))}
          </ul>
        );
      }

      if (isNumberedList) {
        return (
          <ol key={idx} className="my-5 space-y-2 text-slate-700 pl-2">
            {lines.map((line, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3">
                <span className="shrink-0 font-mono text-sm font-bold text-blue-600">
                  {lIdx + 1}.
                </span>
                <span className="text-base leading-relaxed">
                  {renderFormattedInline(line.replace(/^\d+\.\s*/, ""))}
                </span>
              </li>
            ))}
          </ol>
        );
      }

      // Standard paragraph with highlighted links
      return (
        <p
          key={idx}
          className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal"
        >
          {renderFormattedInline(block)}
        </p>
      );
    });
  }, [blog]);

  // Loading Skeleton State (matches exact max-w-7xl layout and spacing)
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        {/* Header Skeleton */}
        <section className="py-8 lg:py-12 bg-white border-b border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="h-4 w-52 bg-slate-200 rounded animate-pulse" />
            <div className="h-10 sm:h-12 w-3/4 bg-slate-200 rounded-2xl animate-pulse" />
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-10 rounded-full bg-slate-200 animate-pulse" />
              <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-8 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div className="aspect-video w-full rounded-2xl bg-slate-200 animate-pulse" />
                <div className="h-24 w-full rounded-2xl bg-slate-200 animate-pulse" />
                <div className="h-6 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-6 w-5/6 bg-slate-200 rounded animate-pulse" />
                <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="lg:col-span-4 space-y-6 hidden lg:block">
                <div className="h-44 rounded-2xl bg-slate-200 animate-pulse" />
                <div className="h-60 rounded-2xl bg-slate-200 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Not Found / Error State
  if (error || !blog) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
            <BookOpen className="h-7 w-7" />
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Article Not Available
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {error ||
              "The technical article you are looking for does not exist or may have been retired."}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Browse All Articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Scroll Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* =====================================================================
          1. ARTICLE HEADER SECTION (Consistent max-w-7xl px-4 sm:px-6 lg:px-8)
      ====================================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-8 pb-10 lg:pt-10 lg:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumbs & Back Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center justify-between gap-3 text-xs mb-6"
          >
            <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
              {/* Highlighted Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors group"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>All Articles</span>
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />
              {/* Highlighted Category Filter Link */}
              <Link
                href="/blog"
                className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {blog.category || "Insight"}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-300 shrink-0" />
              <span className="truncate font-semibold text-slate-600 max-w-[200px] sm:max-w-md">
                {blog.title}
              </span>
            </div>

          </nav>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">


            <div className="flex items-center gap-3 text-xs text-slate-500 sm:ml-auto">
              <span className="inline-flex items-center gap-1 font-medium">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {blog.readTime || "5 min read"}
              </span>
              {typeof blog.views === "number" && (
                <span className="hidden sm:inline-flex items-center gap-1 font-medium">
                  <Eye className="h-3.5 w-3.5 text-slate-400" />
                  {blog.views.toLocaleString()} views
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight max-w-5xl">
            {blog.title}
          </h1>

          {/* Author Details & Quick Share Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-xs ${author.avatarBg}`}
              >
                {author.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {author.name}
                </p>
                {/* <p className="text-xs text-slate-500 font-medium">
                  {author.role}
                </p> */}
              </div>
            </div>

            {/* Quick Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
                Share:
              </span>
              <button
                type="button"
                onClick={handleShareTwitter}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition cursor-pointer"
                title="Share on X (Twitter)"
                aria-label="Share on X"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleShareLinkedIn}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition cursor-pointer"
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition cursor-pointer"
                title="Copy Link"
                aria-label="Copy Link"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Share2 className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MAIN CONTENT & SIDEBAR (Consistent max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16)
      ====================================================================== */}
      <section className="py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Main Reading Column */}
            <article className="lg:col-span-8 space-y-8">
              {/* Featured Cover Image */}
              {blog.coverImage && (
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-900 shadow-md aspect-video w-full">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 820px"
                  />
                </div>
              )}

              {/* Executive Summary / Lead Callout */}
              {blog.description && (
                <div className="rounded-2xl sm:rounded-3xl border-l-4 border-blue-600 bg-white p-6 sm:p-7 shadow-2xs border border-slate-200/60">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 block mb-2">
                    Executive Abstract
                  </span>
                  <div className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                    {renderFormattedInline(blog.description)}
                  </div>
                </div>
              )}

              {/* Article Content with Highlighted Links */}
              <div className="space-y-6 text-slate-800 font-normal leading-relaxed">
                {renderContentBlocks}
              </div>

              {/* Article Tags (Highlighted badge links) */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Tagged Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        href={`/blog`}
                        className="inline-flex items-center gap-1 rounded-lg bg-blue-50/80 border border-blue-200 px-3 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-2xs"
                      >
                        <span>#{tag}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Spotlight Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-base font-extrabold text-white shadow-xs ${author.avatarBg}`}
                  >
                    {author.initials}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                      Author Profile
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {author.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {author.bio}
                    </p>
                    <div className="mt-3">
                      {/* Highlighted Author Articles Link */}
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        <span>View more publications by this team</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Share & Back Navigation Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 sm:p-5 border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700">
                    Share publication:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-200/80 hover:bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-700 transition cursor-pointer shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Highlighted Back Link Button */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:brightness-105 active:scale-95 transition"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Articles</span>
                </Link>
              </div>
            </article>

            {/* Sticky Editorial Sidebar */}
            <aside className="lg:col-span-4 space-y-6 sticky top-24 hidden lg:block">
              {/* Quick Actions & Bookmark Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Article Actions
                </h3>
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50/60 px-3.5 py-2.5 text-xs font-bold text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Copy className="h-3.5 w-3.5 text-blue-600" />
                      {copied ? "Link Copied to Clipboard!" : "Copy Article Link"}
                    </span>
                    {copied && <Check className="h-3.5 w-3.5 text-emerald-600" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleShareTwitter}
                    className="w-full flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5 fill-current text-slate-600" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Share on X (Twitter)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShareLinkedIn}
                    className="w-full flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5 fill-current text-blue-600" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Share on LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents / Outline */}
              {tableOfContents.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                    <ListFilter className="h-3.5 w-3.5 text-blue-600" />
                    <span>Article Overview</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {tableOfContents.map((heading, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-slate-700 font-medium leading-relaxed">
                          {heading}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Newsletter Sidebar Card */}
              <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 p-5 shadow-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-2">
                  Weekly Insights
                </span>
                <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                  Get Engineering Updates
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Join CTOs & developers receiving technical breakdowns directly
                  in their inbox.
                </p>

                {sidebarSubscribed ? (
                  <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 p-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Subscribed successfully!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarSubscribe} className="mt-3 space-y-2">
                    <input
                      type="email"
                      required
                      placeholder="work.email@company.com"
                      value={sidebarEmail}
                      onChange={(e) => setSidebarEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-600 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-blue-700 transition cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* Highlighted Catalog Link */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <span>Explore all technical publications</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. RECOMMENDED PUBLICATIONS (Consistent max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16)
      ====================================================================== */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Recommended Publications
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Explore related technical insights from the GoTechEdu team
                </p>
              </div>
              {/* Highlighted View Catalog Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.slug || item._id}
                  href={`/blog/${item.slug || item._id}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all hover:-translate-y-1"
                >
                  <div>
                    {item.coverImage && (
                      <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-900 mb-3">
                        <Image
                          src={item.coverImage}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <span className="inline-block rounded-md bg-blue-50 border border-blue-200/60 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 mb-2">
                      {item.category || "Insight"}
                    </span>
                    {/* Highlighted Card Title on Hover */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{item.readTime || "5 min read"}</span>
                    {/* Highlighted Read Link */}
                    <span className="font-bold text-blue-600 group-hover:translate-x-0.5 group-hover:text-blue-800 transition-all flex items-center gap-0.5 underline decoration-blue-200 underline-offset-2">
                      Read Article <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
