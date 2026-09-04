import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers at GoTechEdu | Engineering & Technology Opportunities",
  description:
    "Explore career opportunities and technical roles at GoTechEdu across full-stack web development, AI engineering, cloud infrastructure, and technical mentoring.",
  keywords: [
    "GoTechEdu careers",
    "software engineer jobs",
    "cloud architect hiring",
    "AI engineer jobs India",
    "remote tech jobs",
    "edtech careers",
  ],
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers at GoTechEdu | Join Our Technology & Education Team",
    description:
      "Join GoTechEdu. Explore open roles across software engineering, autonomous AI systems, cloud architecture, and technical mentoring.",
    url: `${SITE_URL}/career`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "GoTechEdu Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at GoTechEdu | Join Our Team",
    description:
      "Explore open technical roles across software engineering, AI, and cloud architecture at GoTechEdu.",
    images: ["/icons.png"],
  },
};

const careerPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/career#webpage`,
  url: `${SITE_URL}/career`,
  name: "Careers at GoTechEdu",
  description:
    "Explore open technical roles across software engineering, AI, and cloud architecture at GoTechEdu.",
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
        name: "Careers",
        item: `${SITE_URL}/career`,
      },
    ],
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={careerPageSchema} />
      {children}
    </>
  );
}
