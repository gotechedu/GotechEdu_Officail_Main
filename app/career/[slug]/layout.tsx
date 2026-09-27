import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { getFallbackJob, defaultCareers } from "@/lib/careerData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getFallbackJob(slug);

  const title = job
    ? `${job.title} | Careers at GoTechEdu`
    : "Career Opportunity | GoTechEdu Engineering & Tech Academy";

  const description = job
    ? `${job.title} (${job.department}, ${job.location}, ${job.salary}). ${job.description.slice(0, 150)}... Apply now at GoTechEdu.`
    : "Explore career opportunities, software engineering roles, and competitive compensation packages at GoTechEdu.";

  return {
    title,
    description,
    keywords: [
      job?.title || "Tech Careers",
      job?.department || "Engineering",
      "GoTechEdu jobs",
      "software engineer hiring",
      "tech careers India",
      "remote engineering jobs",
      ...(job?.tags || []),
    ],
    alternates: {
      canonical: `/career/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/career/${slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: "/icons.png",
          width: 512,
          height: 512,
          alt: job?.title || "GoTechEdu Career Opportunity",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/icons.png"],
    },
  };
}

export default async function CareerDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getFallbackJob(slug);

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job?.title || "Software Engineering Role",
    description: job?.description || "Career opportunity at GoTechEdu",
    datePosted: "2026-09-01",
    validThrough: "2026-12-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/icons.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cyber City, DLF Phase 2",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122002",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        minValue: 1000000,
        maxValue: 2500000,
        unitText: "YEAR",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    jobLocationType: "TELECOMMUTE",
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
        name: "Careers",
        item: `${SITE_URL}/career`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job?.title || "Job Details",
        item: `${SITE_URL}/career/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jobPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
