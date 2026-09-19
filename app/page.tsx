import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FourPillars from "@/components/home/FourPillars";
import SolutionsSection from "@/components/home/SolutionsSection";
import LeadCapture from "@/components/home/LeadCapture";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import AboutSection from "@/components/home/AboutSection";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GoTechEdu | Enterprise Technology Solutions & Modern Tech Academy",
  description:
    "Empowering global enterprises and ambitious learners through custom software development, autonomous AI workflows, multi-cloud engineering, and industry-certified tech education.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoTechEdu | Enterprise Technology Solutions & Modern Tech Academy",
    description:
      "Empowering global enterprises and ambitious learners through custom software development, autonomous AI workflows, multi-cloud engineering, and industry-certified tech education.",
    url: SITE_URL,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section with 3 Floating Highlight Cards */}
      <Hero />

      {/* 2. Four Foundation Pillars (Tech, Talent, Training, Transformation) */}
      <FourPillars />

      {/* 3. Welcome to GoTechEdu & Why Choose Us (Left Accent Bar + Staggered Images + Trust Badge) */}


      {/* 4. End-to-End Solutions for Every Growth Stage */}
      <SolutionsSection />




      {/* 7. Industry Engineering & Tech Stack */}
      <TechStack />

      {/* 8. Testimonials - What they are saying? (Top Colored Accent Bar Cards) */}
      <Testimonials />

      <AboutSection />
    </main>
  );
}
