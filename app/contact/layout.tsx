import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise Solutions, Tech Training & Careers | GoTechEdu",
  description:
    "Connect with GoTechEdu for custom enterprise software development, tech training cohort admissions, or engineering careers. Schedule a direct consultation with our leadership.",
  keywords: [
    "contact GoTechEdu",
    "hire software developers",
    "enterprise software development",
    "tech training cohorts India",
    "college industrial internship",
    "software engineer careers",
    "technical consultation India",
    "IT corporate upskilling",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Enterprise Solutions, Tech Training & Careers | GoTechEdu",
    description:
      "Schedule a consultation with GoTechEdu for enterprise software development, tech training cohorts, or engineering career opportunities.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "Contact GoTechEdu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GoTechEdu | Solutions, Training & Careers",
    description:
      "Connect with GoTechEdu for enterprise software, tech training cohorts, or engineering careers.",
    images: ["/icons.png"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact GoTechEdu",
  description: "Direct executive channels and technical consultation scheduling.",
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
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  },
};

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can we initiate a new enterprise development sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Following our initial technical discovery call and requirement scoping, our engineering squads can typically onboard and initiate sprint zero within 5 to 7 business days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign Non-Disclosure Agreements (NDAs) prior to discovery calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. We prioritize your proprietary intellectual property. We provide mutual NDAs before reviewing any proprietary architecture or business logic.",
      },
    },
    {
      "@type": "Question",
      name: "Can GotechEdu engineers integrate with our existing in-house technical squads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer both dedicated autonomous product pods (Principal Architect + Senior Full-Stack + QA + DevOps) and staff augmentation models to embed directly into your Jira sprints.",
      },
    },
    {
      "@type": "Question",
      name: "What post-launch SLA support and maintenance guarantees do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive 24/7 Tier-3 production support SLAs, automated uptime monitoring, security patch management, and continuous optimization retainers.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={[contactPageSchema, contactFaqSchema]} />
      {children}
    </>
  );
}
