import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FourPillars from "@/components/home/FourPillars";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "GoTechEdu | Enterprise Technology Solutions",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

function HomePage() {
  return (
    <main>
      <Hero />
      <FourPillars />
      <Services />
      {/* <WhyChooseUs /> */}
      <Testimonials />
      <CTASection />
    </main>
  );
}

export default HomePage;
