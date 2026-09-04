import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";
import FourPillars from "@/components/home/FourPillars";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
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
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      {/* <Stats /> */}
      <FourPillars />
      <Services />
      <TechStack />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
