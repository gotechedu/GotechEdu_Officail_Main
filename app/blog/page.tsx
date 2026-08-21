import Link from "next/link";

const categories = [
  "All",
  "AI",
  "Cloud",
  "Technology",
  "Marketing",
  "Education",
];

const posts = [
  {
    title: "How Artificial Intelligence Is Transforming Modern Businesses",
    slug: "how-ai-is-transforming-modern-businesses",
    category: "AI",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    description:
      "Explore how businesses are using AI to automate processes, improve customer experiences and make better decisions.",
  },
  {
    title: "Why Cloud Computing Matters for Growing Businesses",
    slug: "why-cloud-computing-matters-for-growing-businesses",
    category: "Cloud",
    date: "Aug 14, 2026",
    readTime: "5 min read",
    description:
      "Learn how cloud technology helps businesses scale faster while improving flexibility, reliability and operational efficiency.",
  },
  {
    title: "Next.js vs React: Which One Should You Choose?",
    slug: "nextjs-vs-react-which-one-should-you-choose",
    category: "Technology",
    date: "Aug 10, 2026",
    readTime: "7 min read",
    description:
      "A practical comparison of React and Next.js for building modern, fast and SEO-friendly web applications.",
  },
  {
    title: "A Practical Guide to Digital Marketing for Startups",
    slug: "digital-marketing-guide-for-startups",
    category: "Marketing",
    date: "Aug 05, 2026",
    readTime: "8 min read",
    description:
      "Discover practical digital marketing strategies startups can use to build visibility, attract customers and grow online.",
  },
  {
    title: "How to Start a Career in Modern Technology",
    slug: "how-to-start-career-in-modern-technology",
    category: "Education",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    description:
      "A beginner-friendly roadmap covering skills, projects and technologies for starting a career in software development.",
  },
  {
    title: "Generative AI: What Businesses Need to Know",
    slug: "generative-ai-business-guide",
    category: "AI",
    date: "Jul 25, 2026",
    readTime: "7 min read",
    description:
      "Understand the opportunities, challenges and practical applications of generative AI in modern businesses.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">

      {/* Featured Article */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-950">
              <div className="text-center">
                <span className="text-7xl">AI</span>
                <p className="mt-3 text-sm font-medium text-blue-100">
                  Featured Insight
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                AI
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                How Artificial Intelligence Is Transforming Modern Businesses
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                AI is rapidly changing the way organizations operate,
                communicate with customers and make decisions. Discover the most
                important opportunities businesses should consider.
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span>Aug 18, 2026</span>
                <span>•</span>
                <span>6 min read</span>
              </div>

              <Link
                href="/blog/how-ai-is-transforming-modern-businesses"
                className="mt-8 w-fit rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore our latest insights
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Practical knowledge and ideas from technology, business, marketing
              and education.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-slate-900 to-blue-700">
                  <span className="text-4xl font-bold text-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {post.category}
                    </span>

                    <span className="text-xs text-slate-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-7 text-slate-900 transition group-hover:text-blue-600">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.date}</span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-white">
              Stay ahead of technology
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Get useful technology insights, AI updates and practical resources
              delivered to your inbox.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border-0 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-white"
              />

              <button
                type="submit"
                className="rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
