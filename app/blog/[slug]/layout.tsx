import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { officialApi } from "@/lib/api";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let title = "";
  let description = "";
  let coverImage = `${SITE_URL}/icons.png`;

  try {
    const res = await officialApi.getBlogBySlug(slug);
    if (res && res.blog) {
      title = res.blog.title;
      description = res.blog.description || "";
      coverImage = res.blog.coverImage || coverImage;
    }
  } catch {
    // Graceful fallback
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

export default async function BlogArticleLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let blogData: any = null;
  try {
    const res = await officialApi.getBlogBySlug(slug);
    if (res && res.blog) {
      blogData = res.blog;
    }
  } catch {
    // Graceful fallback
  }

  const articleTitle =
    blogData?.title ||
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const articleDescription =
    blogData?.description ||
    `Technical publication on ${articleTitle} by GoTechEdu.`;

  const articleImage = blogData?.coverImage || `${SITE_URL}/icons.png`;
  const authorName =
    blogData?.author?.name || "GoTechEdu Engineering & Research Team";
  const publishDate = blogData?.createdAt || "2026-08-01";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${slug}#article`,
    headline: articleTitle,
    description: articleDescription,
    image: articleImage,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Person",
      name: authorName,
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
