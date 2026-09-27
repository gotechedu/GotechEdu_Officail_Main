import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { officialApi } from "@/lib/api";

const STATIC_COURSE_SLUGS = [
  "fullstack-nextjs",
  "gen-ai-agentic",
  "cloud-devops",
  "cybersecurity-soc",
  "mern-stack",
];

const STATIC_BLOG_SLUGS = [
  "how-ai-is-transforming-modern-businesses",
  "why-cloud-computing-matters-for-growing-businesses",
  "cybersecurity-trends-protecting-digital-assets",
  "future-of-full-stack-web-development",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 1. Core Public Indexable Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/solution`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/learninghub`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/career`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Course Slugs (Catalog + Live Backend)
  const courseSlugs = new Set<string>(STATIC_COURSE_SLUGS);
  try {
    const courseRes = await officialApi.getCourses();
    if (courseRes && courseRes.courses && Array.isArray(courseRes.courses)) {
      courseRes.courses.forEach((c: any) => {
        const slug = c.slug || c._id;
        if (slug && typeof slug === "string") {
          courseSlugs.add(slug);
        }
      });
    }
  } catch {
    // Graceful fallback to static courses if API is offline during build
  }

  const coursePages: MetadataRoute.Sitemap = Array.from(courseSlugs).map(
    (slug) => ({
      url: `${SITE_URL}/learninghub/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  // 3. Dynamic Blog Articles (Catalog + Live Backend)
  const blogSlugs = new Set<string>(STATIC_BLOG_SLUGS);
  try {
    const blogRes = await officialApi.getBlogs();
    if (blogRes && blogRes.blogs && Array.isArray(blogRes.blogs)) {
      blogRes.blogs.forEach((b: any) => {
        const slug = b.slug || b._id;
        if (slug && typeof slug === "string") {
          blogSlugs.add(slug);
        }
      });
    }
  } catch {
    // Graceful fallback to static blogs if API is offline during build
  }

  const blogPages: MetadataRoute.Sitemap = Array.from(blogSlugs).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Dynamic Career Openings (Catalog + Live Backend)
  const careerSlugs = new Set<string>([
    "senior-frontend-engineer",
    "full-stack-mern-developer",
    "ai-machine-learning-engineer",
    "cloud-devops-infrastructure-lead",
    "lead-ui-ux-product-designer",
    "technical-mentor-fullstack-devops",
  ]);
  try {
    const jobRes = await officialApi.getJobs();
    if (jobRes && jobRes.jobs && Array.isArray(jobRes.jobs)) {
      jobRes.jobs.forEach((j: any) => {
        const slug = j.slug || j._id;
        if (slug && typeof slug === "string") {
          careerSlugs.add(slug);
        }
      });
    }
  } catch {
    // Graceful fallback to static career openings if API is offline
  }

  const careerPages: MetadataRoute.Sitemap = Array.from(careerSlugs).map((slug) => ({
    url: `${SITE_URL}/career/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...coursePages, ...blogPages, ...careerPages];
}
