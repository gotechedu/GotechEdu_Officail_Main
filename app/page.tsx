import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "GotechEdu | Technology Solutions",
  description:
    "GotechEdu is an official technology solutions company empowering businesses with software development, AI, cloud engineering, digital marketing, and tech education.",
};

export default function HomePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
