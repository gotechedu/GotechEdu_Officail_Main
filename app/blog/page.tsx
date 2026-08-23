"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { officialApi } from "@/lib/api";

const blogPosts = [
  {
    title: "How Autonomous AI Agents Are Transforming Enterprise Operations in 2026",
    slug: "how-ai-is-transforming-modern-businesses",
    category: "AI",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Dr. Vikram Sharma",
      role: "Head of AI Research",
      initials: "VS",
      avatarBg: "bg-blue-600",
    },
    badge: "Featured Insight",
    description:
      "Explore how multi-agent LLM systems and retrieval-augmented generation (RAG) are eliminating manual back-office tasks, automating tier-1 customer support, and driving 4x operational speed.",
    tags: ["Autonomous Agents", "Enterprise RAG", "LLMs", "Automation"],
  },
  {
    title: "Multi-Cloud vs Hybrid Cloud: Choosing the Right Architecture for Scale",
    slug: "why-cloud-computing-matters-for-growing-businesses",
    category: "Cloud",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Sarah Jenkins",
      role: "Principal Cloud Architect",
      initials: "SJ",
      avatarBg: "bg-indigo-600",
    },
    badge: "Cloud & DevOps",
    description:
      "A deep technical breakdown of multi-region AWS and Azure failover architectures, zero-downtime Kubernetes deployments, and cost-optimization frameworks.",
    tags: ["AWS", "Kubernetes", "DevOps", "Multi-Cloud"],
  },
  {
    title: "Next.js 16 App Router vs Traditional Single Page Apps: Production Benchmarks",
    slug: "nextjs-vs-react-which-one-should-you-choose",
    category: "Technology",
    date: "Aug 10, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Aditya Verma",
      role: "Lead Frontend Architect",
      initials: "AV",
      avatarBg: "bg-cyan-600",
    },
    badge: "Web Architecture",
    description:
      "An in-depth performance analysis measuring Core Web Vitals, server actions concurrency, partial prerendering (PPR), and SEO rankings across high-traffic platforms.",
    tags: ["Next.js 16", "React 19", "Performance", "Web Development"],
  },
  {
    title: "Zero-Trust Architecture: Safeguarding Enterprise Cloud Workloads Against Modern Threats",
    slug: "zero-trust-cybersecurity-guide",
    category: "Cybersecurity",
    date: "Aug 08, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Rohan Mehra",
      role: "Chief Information Security Officer",
      initials: "RM",
      avatarBg: "bg-emerald-600",
    },
    badge: "Cyber Defense",
    description:
      "How to implement least-privilege IAM, automated SIEM anomaly detection, and continuous VAPT penetration audits across distributed cloud environments.",
    tags: ["Zero-Trust", "SIEM", "SOC 2", "Penetration Testing"],
  },
  {
    title: "The 2026 Developer Roadmap: Transitioning from Coding to AI-Assisted Engineering",
    slug: "how-to-start-career-in-modern-technology",
    category: "Education",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Rajesh Kumar",
      role: "Director of Tech Education",
      initials: "RK",
      avatarBg: "bg-amber-600",
    },
    badge: "Career & Upskilling",
    description:
      "A comprehensive roadmap for engineers and career switchers: mastering full-stack fundamentals, cloud DevOps pipelines, agentic development workflows, and portfolio building.",
    tags: ["Career Roadmap", "EdTech", "Full-Stack", "Upskilling"],
  },
  {
    title: "Generative AI in Production: Mitigating Hallucinations with Deterministic Guardrails",
    slug: "generative-ai-business-guide",
    category: "AI",
    date: "Jul 25, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Elena Rostova",
      role: "VP of Product Engineering",
      initials: "ER",
      avatarBg: "bg-purple-600",
    },
    badge: "AI Engineering",
    description:
      "Best practices for deploying generative AI in regulated industries: implementing NeMo guardrails, semantic cache layers, token optimization, and real-time output auditing.",
    tags: ["Generative AI", "Guardrails", "Vector DB", "Enterprise AI"],
  },
  {
    title: "Data-Driven Performance Marketing: Scaling B2B Customer Acquisition",
    slug: "digital-marketing-guide-for-startups",
    category: "Marketing",
    date: "Aug 05, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Ananya Iyer",
      role: "Head of Growth & Analytics",
      initials: "AI",
      avatarBg: "bg-pink-600",
    },
    badge: "Growth Marketing",
    description:
      "How high-growth technology companies leverage conversion rate optimization (CRO), automated LinkedIn campaigns, technical SEO, and predictive attribution modeling.",
    tags: ["Growth Marketing", "B2B Acquisition", "SEO", "CRO"],
  },
];

const categories = ["All", "AI", "Cloud", "Technology", "Cybersecurity", "Education", "Marketing"];

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState<any[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Fetch live blogs from Backend API
  useEffect(() => {
    const fetchLiveBlogs = async () => {
      try {
        const data = await officialApi.getBlogs();
        if (data && data.blogs && data.blogs.length > 0) {
          const formatted = data.blogs.map((b: any) => ({
            title: b.title,
            slug: b.slug || b._id,
            category: b.category || "Technology",
            date: b.date || "Aug 2026",
            readTime: b.readTime || "5 min read",
            coverImage: b.coverImage || "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
            author: b.author || {
              name: "Editorial Team",
              role: "Tech Author",
              initials: "ET",
              avatarBg: "bg-blue-600",
            },
            badge: b.badge || "Featured Insight",
            description: b.description,
            tags: b.tags || [],
          }));

          // Merge dynamic blogs
          const slugs = new Set(formatted.map((f: any) => f.slug));
          const uniqueStatic = blogPosts.filter((p) => !slugs.has(p.slug));
          setAllBlogs([...formatted, ...uniqueStatic]);
        }
      } catch (err) {
        console.log("Using static blogPosts cache");
      }
    };
    fetchLiveBlogs();
  }, []);

  const filteredPosts = allBlogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags || []).some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubscribed(true);
    }
  };

  const featuredPost = blogPosts[0];

  return (
    <main className="min-h-screen bg-slate-50">
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="grid lg:grid-cols-12 gap-0 items-center">
                {/* Real Image Visual Column */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[320px] overflow-hidden bg-slate-900">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                      🌟 {featuredPost.badge}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700 border border-blue-100">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {featuredPost.date} • {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {featuredPost.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-mono font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-xs text-white ${featuredPost.author.avatarBg}`}>
                        {featuredPost.author.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{featuredPost.author.name}</p>
                        <p className="text-[10px] text-slate-400">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          3. ARTICLES GRID WITH REAL IMAGES
      ====================================================== */}
      <section className="py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
              Latest Technical Publications ({filteredPosts.length})
            </h2>
            <span className="text-xs font-mono text-slate-400 uppercase">
              Updated Weekly
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                {/* Real Image Card Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold leading-snug text-slate-900 transition group-hover:text-blue-600">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {(post.tags || []).slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-full font-bold text-[11px] text-white ${post.author.avatarBg}`}>
                        {post.author.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{post.author.name}</p>
                        <p className="text-[10px] text-slate-400">{post.date}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-blue-600 group-hover:text-blue-700 transition"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. NEWSLETTER SUBSCRIPTION
      ====================================================== */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950 p-6 sm:p-10 text-center text-white shadow-xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">
              Stay Ahead of the Engineering Curve
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
              Join 25,000+ CTOs and engineers receiving weekly breakdowns of LLMs, cloud infrastructure, and software architecture.
            </p>

            {emailSubscribed ? (
              <div className="mt-6 rounded-xl bg-emerald-500/20 p-3.5 border border-emerald-400/40 text-xs font-bold text-emerald-300 max-w-md mx-auto">
                ✓ You're Subscribed! Welcome to GotechEdu Insights.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-md hover:bg-slate-100 transition"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
