import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, organizationSchema, websiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GoTechEdu | Enterprise Technology Solutions & Modern Tech Academy",
    template: "%s | GoTechEdu",
  },
  description:
    "GoTechEdu empowers global businesses and ambitious learners with enterprise software engineering, autonomous AI systems, multi-cloud DevOps architecture, cybersecurity defense, and industry-led tech academies.",
  keywords: [
    "GoTechEdu",
    "enterprise software development",
    "AI automation solutions",
    "cloud infrastructure DevOps",
    "cybersecurity zero trust",
    "tech learning hub",
    "fullstack developer bootcamp",
    "Red Hat certification training",
    "IT consulting India",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "GoTechEdu | Enterprise Technology Solutions & Modern Tech Academy",
    description:
      "Empowering enterprises and learners through custom software engineering, AI agent systems, multi-cloud DevOps, and industry-accredited tech education.",
    images: [
      {
        url: "/icons.png",
        width: 512,
        height: 512,
        alt: "GoTechEdu - Enterprise Solutions & Tech Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTechEdu | Enterprise Technology Solutions & Modern Tech Academy",
    description:
      "Enterprise software, autonomous AI systems, cloud DevOps, and high-impact tech education.",
    images: ["/icons.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icons.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/icons.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icons.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/icons.png?v=2" />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
