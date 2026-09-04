import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { officialApi } from "@/lib/api";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

const knownArticles: Record<string, { title: string; intro: string; category: string; date: string; author: string; coverImage: string }> = {
  "how-ai-is-transforming-modern-businesses": {
    title: "How Autonomous AI Agents Are Transforming Enterprise Operations in 2026",
    intro: "Explore how multi-agent architectures, enterprise RAG, and fine-tuned open source models are streamlining operations and driving 75% faster triage resolution.",
    category: "Artificial Intelligence",
    date: "2026-08-18",
    author: "Dr. Vikram Sharma",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad99a?auto=format&fit=crop&w=1200&q=80",
  },
  "why-cloud-computing-matters-for-growing-businesses": {
    title: "Multi-Cloud vs Hybrid Cloud: Choosing the Right Architecture for Scale",
    intro: "A technical comparison of multi-cloud redundancy vs hybrid cloud on-premise governance, with Kubernetes orchestration and Terraform IaC strategies.",
    category: "Cloud & DevOps",
    date: "2026-08-14",
    author: "Sarah Jenkins",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  "cybersecurity-trends-protecting-digital-assets": {
    title: "Zero-Trust Architecture: Practical Implementation Guide for 2026",
    intro: "Moving beyond perimeter firewalls to continuous identity verification, micro-segmentation, and automated SIEM threat detection.",
    category: "Cybersecurity",
    date: "2026-08-10",
    author: "Marcus Vance",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  "future-of-full-stack-web-development": {
    title: "Next.js 15, Server Components & React 19: The New Standard for Web Apps",
    intro: "An architectural deep-dive into React Server Components, streaming SSR, Server Actions, and partial pre-rendering in modern web development.",
    category: "Full-Stack Development",
    date: "2026-08-05",
    author: "Alex Rivera",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let title = "";
  let description = "";
  let coverImage = `${SITE_URL}/icons.png`;

  if (knownArticles[slug]) {
    title = knownArticles[slug].title;
    description = knownArticles[slug].intro;
    coverImage = knownArticles[slug].coverImage;
  } else {
    try {
      const res = await officialApi.getBlogBySlug(slug);
      if (res && res.blog) {
        title = res.blog.title;
        description = res.blog.description || res.blog.intro || "";
        coverImage = res.blog.coverImage || coverImage;
      }
    } catch {
      // Fallback
    }
  }

  if (!title) {
    const formatted = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    title = formatted;
    description = `Read technical insights on ${formatted} by the engineering team at GoTechEdu.`;
  }

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

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
      type: "article",
      images: [
        {
          url: coverImage,
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
      images: [coverImage],
    },
  };
}

export default async function BlogArticleLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const article = knownArticles[slug];
  const articleTitle = article ? article.title : slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${slug}#article`,
    headline: articleTitle,
    description: article ? article.intro : `Technical publication on ${articleTitle} by GoTechEdu.`,
    image: article ? article.coverImage : `${SITE_URL}/icons.png`,
    datePublished: article ? article.date : "2026-08-01",
    dateModified: article ? article.date : "2026-08-01",
    author: {
      "@type": "Person",
      name: article ? article.author : "GoTechEdu Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "GoTechEdu",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
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
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: articleTitle,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
