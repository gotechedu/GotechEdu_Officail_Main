"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { officialApi } from "@/lib/api";

const categories = ["All", "AI", "Cloud", "Technology", "Cybersecurity", "Education", "Marketing"];

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Fetch live blogs from Backend API
  useEffect(() => {
    const fetchLiveBlogs = async () => {
      try {
        setLoading(true);
        const data = await officialApi.getBlogs();
        if (data && data.blogs && data.blogs.length > 0) {
          const formatted = data.blogs.map((b: any) => ({
            title: b.title,
            slug: b.slug || b._id,
            category: b.category || "Technology",
            date: b.date || (b.createdAt ? new Date(b.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently"),
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

          setAllBlogs(formatted);
        } else {
          setAllBlogs([]);
        }
      } catch (err) {
        console.log("Failed to fetch live blogs:", err);
        setAllBlogs([]);
      } finally {
        setLoading(false);
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

  const featuredPost = allBlogs.length > 0 ? allBlogs[0] : null;

  return (
    <main className="min-h-screen bg-slate-50">
      {!loading && featuredPost && selectedCategory === "All" && !searchQuery && (
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
                      {(featuredPost.tags || []).map((tag: string) => (
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

          {loading ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div
                  key={idx}
                  className="animate-pulse rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden"
                >
                  <div className="h-48 w-full bg-slate-200" />
                  <div className="p-5">
                    <div className="h-5 w-3/4 bg-slate-200 rounded mb-3" />
                    <div className="h-4 w-full bg-slate-100 rounded mb-1" />
                    <div className="h-4 w-2/3 bg-slate-100 rounded mb-4" />
                    <div className="flex gap-1.5 mb-4">
                      <div className="h-4 w-12 bg-slate-100 rounded" />
                      <div className="h-4 w-12 bg-slate-100 rounded" />
                    </div>
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                      <div className="h-7 w-7 rounded-full bg-slate-200" />
                      <div className="h-3 w-20 bg-slate-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-400">
                📰
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                No articles found
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                There are currently no published articles matching your selected category or search.
              </p>
            </div>
          ) : (
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
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
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
