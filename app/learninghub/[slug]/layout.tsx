import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo";
import { officialApi } from "@/lib/api";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

const knownCourseTitles: Record<string, { title: string; desc: string; category: string; image?: string }> = {
  "fullstack-nextjs": {
    title: "Full-Stack Next.js 15 & React Engineering Program",
    desc: "Master modern web development with React 19, Next.js 15 App Router, TypeScript, Tailwind CSS, PostgreSQL, and Cloud CI/CD deployments.",
    category: "Full-Stack Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  "gen-ai-agentic": {
    title: "Generative AI & Autonomous Agentic Systems Masterclass",
    desc: "Architect production-grade LLM applications, RAG pipelines with hybrid vector search, and autonomous multi-agent swarms using LangChain and LangGraph.",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  "cloud-devops": {
    title: "AWS, Azure & Cloud DevOps Engineering Master Program",
    desc: "Master multi-cloud architecture, Docker containerization, Kubernetes orchestration, Terraform Infrastructure as Code, and production GitOps CI/CD.",
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  "cybersecurity-soc": {
    title: "Cybersecurity & SOC Analyst Defense Academy",
    desc: "Master network penetration testing, threat hunting, SIEM log analysis, zero-trust architecture, and SOC Tier-1/2 incident response.",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  "mern-stack": {
    title: "Enterprise MERN Full-Stack Engineering Bootcamp",
    desc: "Build scalable high-concurrency applications with MongoDB aggregation pipelines, Express microservices, React 19, and Node.js asynchronous architecture.",
    category: "Full-Stack Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. Check known courses
  let title = "";
  let description = "";
  let ogImage = `${SITE_URL}/icons.png`;

  if (knownCourseTitles[slug]) {
    title = knownCourseTitles[slug].title;
    description = knownCourseTitles[slug].desc;
    if (knownCourseTitles[slug].image) {
      ogImage = knownCourseTitles[slug].image!;
    }
  } else {
    // 2. Try fetching from live backend API
    try {
      const res = await officialApi.getCourseById(slug);
      if (res && res.course) {
        title = res.course.title;
        description = res.course.description || res.course.heroTagline || "";
        ogImage = res.course.image || res.course.previewImage || res.course.bannerImage || ogImage;
      }
    } catch {
      // Graceful fallback from slug formatting
    }
  }

  if (!title) {
    const formatted = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    title = `${formatted} Course`;
    description = `Comprehensive curriculum, hands-on lab projects, and career placement mentorship in ${formatted} at GoTechEdu.`;
  }

  const canonicalUrl = `${SITE_URL}/learninghub/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | GoTechEdu`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | GoTechEdu`,
      description,
      images: [ogImage],
    },
  };
}

export default async function CourseDetailLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const courseInfo = knownCourseTitles[slug];
  const courseTitle = courseInfo ? courseInfo.title : slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/learninghub/${slug}#course`,
    name: courseTitle,
    description: courseInfo ? courseInfo.desc : `Industry-led curriculum in ${courseTitle} by GoTechEdu.`,
    provider: {
      "@type": "Organization",
      name: "GoTechEdu",
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      inLanguage: "en",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learning Hub",
        item: `${SITE_URL}/learninghub`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: courseTitle,
        item: `${SITE_URL}/learninghub/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[courseSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
