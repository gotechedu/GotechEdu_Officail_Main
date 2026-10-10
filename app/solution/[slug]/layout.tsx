import type { Metadata } from "next";
import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { getSolutionBySlug } from "@/lib/solutionsData";

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
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Details | GoTechEdu",
      description: "Enterprise technology solutions and custom software engineering by GoTechEdu.",
    };
  }

  const title = `${solution.name} | Enterprise Solutions | GoTechEdu`;
  const description = solution.desc;
  const canonicalUrl = `${SITE_URL}/solution/${slug}`;
  const coverImage = solution.coverImage;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: solution.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [coverImage],
    },
  };
}

export default async function SolutionDetailLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const solution = getSolutionBySlug(slug);

  const title = solution ? solution.name : "Enterprise Technology Solution";
  const description = solution ? solution.desc : "Enterprise technology solutions by GoTechEdu.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: "GoTechEdu",
      url: SITE_URL,
      logo: `${SITE_URL}/icons.png`,
    },
    serviceType: "Enterprise Technology Solutions",
    url: `${SITE_URL}/solution/${slug}`,
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
        name: "Solutions",
        item: `${SITE_URL}/solution`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/solution/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema]} />
      {children}
    </>
  );
}
