import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tech Learning Hub | Industry-Led Engineering & Cloud Programs",
  description:
    "Upskill with industry-recognized technical programs and bootcamps in Full-Stack Next.js & React, Cloud & DevOps Engineering, Generative AI & Agentic Systems, and Red Hat Linux certifications.",
  keywords: [
    "tech learning hub",
    "software engineering bootcamp",
    "fullstack nextjs course",
    "cloud devops training",
    "generative AI course",
    "Red Hat RHCSA certification",
    "cybersecurity SOC analyst training",
  ],
  alternates: {
    canonical: "/learninghub",
  },
  openGraph: {
    title: "Tech Learning Hub | Industry-Led Engineering & Cloud Programs",
    description:
      "Upskill with industry-recognized technical programs and bootcamps in Full-Stack Web Development, Cloud & DevOps, AI Engineering, and Red Hat certifications.",
    url: `${SITE_URL}/learninghub`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "GoTechEdu Learning Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Learning Hub | GoTechEdu",
    description:
      "Industry-recognized technical bootcamps in Full-Stack, Cloud & DevOps, and Generative AI.",
    images: ["/icons.png"],
  },
};

const learningHubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/learninghub#webpage`,
  url: `${SITE_URL}/learninghub`,
  name: "Tech Learning Hub | GoTechEdu",
  description:
    "Industry-recognized technical programs and bootcamps in Full-Stack, Cloud & DevOps, Generative AI, and Red Hat certifications.",
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
        name: "Learning Hub",
        item: `${SITE_URL}/learninghub`,
      },
    ],
  },
};

export default function LearningHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={learningHubSchema} />
      {children}
    </>
  );
}
