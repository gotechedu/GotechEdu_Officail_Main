import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering & Technology Blog | AI, Cloud & Architecture Insights",
  description:
    "In-depth technical publications, architecture guides, and engineering insights on autonomous AI agents, enterprise RAG, multi-cloud DevOps, and modern software development.",
  keywords: [
    "technology blog",
    "autonomous AI agents",
    "enterprise RAG guide",
    "multi-cloud architecture",
    "cybersecurity best practices",
    "full-stack web development",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering & Technology Blog | GoTechEdu",
    description:
      "Deep-dive technical articles, architectural guides, and engineering insights on AI agents, cloud systems, and modern software engineering.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "GoTechEdu Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Technology Blog | GoTechEdu",
    description:
      "Technical articles on autonomous AI agents, multi-cloud infrastructure, and modern software engineering.",
    images: ["/icons.png"],
  },
};

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "GoTechEdu Engineering & Technology Blog",
  description:
    "Technical articles, architectural guides, and insights on autonomous AI agents, multi-cloud infrastructure, and modern software engineering.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  breadcrumb: {
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
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={blogIndexSchema} />
      {children}
    </>
  );
}
