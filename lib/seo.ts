/**
 * Central SEO Configuration & Helper Functions for GoTechEdu
 * Production URL: https://gotechedu.vercel.app
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://gotechedu.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "GoTechEdu";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/icons.png`;

/**
 * Returns an absolute URL based on the configured SITE_URL
 */
export function absoluteUrl(path = ""): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Organization Schema (schema.org/Organization)
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: DEFAULT_OG_IMAGE,
    caption: "GoTechEdu Logo",
  },
  image: DEFAULT_OG_IMAGE,
  description:
    "GoTechEdu is an enterprise technology solutions provider and modern tech academy specializing in software engineering, autonomous AI systems, multi-cloud DevOps, and cybersecurity.",
  email: "gotecheduofficial@gmail.com",
  telephone: "+91-9608094837",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/gotechedu",
    "https://www.instagram.com/gotecheduofficial",
    "https://www.facebook.com/profile.php?id=61593275925756",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9608094837",
    contactType: "customer service",
    email: "gotecheduofficial@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
};

/**
 * WebSite Schema (schema.org/WebSite)
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/learninghub?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
