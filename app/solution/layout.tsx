import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Enterprise Technology Solutions | Software, AI, Cloud & Cybersecurity",
  description:
    "Explore GoTechEdu's enterprise software application suites, autonomous AI agents, multi-cloud DevOps architectures, and zero-trust cybersecurity defense systems engineered for global scale.",
  keywords: [
    "enterprise software development",
    "custom ERP CRM systems",
    "autonomous AI agents",
    "cloud infrastructure DevOps",
    "cybersecurity zero trust",
    "microservices architecture",
  ],
  alternates: {
    canonical: "/solution",
  },
  openGraph: {
    title: "Enterprise Technology Solutions | Software, AI, Cloud & Cybersecurity",
    description:
      "Explore GoTechEdu's enterprise software application suites, autonomous AI agents, multi-cloud DevOps architectures, and zero-trust cybersecurity defense systems.",
    url: `${SITE_URL}/solution`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "GoTechEdu Enterprise Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Technology Solutions | GoTechEdu",
    description:
      "Custom software engineering, autonomous AI workflows, cloud infrastructure, and zero-trust cybersecurity.",
    images: ["/icons.png"],
  },
};

const solutionPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/solution#webpage`,
  url: `${SITE_URL}/solution`,
  name: "Enterprise Technology Solutions | GoTechEdu",
  description:
    "Enterprise software application suites, autonomous AI agents, multi-cloud DevOps architectures, and zero-trust cybersecurity defense systems.",
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
        name: "Solutions",
        item: `${SITE_URL}/solution`,
      },
    ],
  },
};

export default function SolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={solutionPageSchema} />
      {children}
    </>
  );
}
