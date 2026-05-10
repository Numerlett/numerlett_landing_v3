import StructuredData from "@/components/StructuredData";
import BlogSection from "@/components/sections/BlogSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SeedSection from "@/components/sections/SeedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TickerBar from "@/components/sections/TickerBar";
import WhySection from "@/components/sections/WhySection";
import { getFaqs } from "@/actions/faq";
import { FaqStatus } from "@/database/types";

export default async function Home() {
  const faqResult = await getFaqs(FaqStatus.PUBLISHED);
  const faqs = faqResult.success && faqResult.data ? faqResult.data : [];

  return (
    <>
      <StructuredData />
      <main id="main-content">
        <HeroSection />
        <TickerBar />
        <StatsBar />
        <ServicesSection />
        <SeedSection />
        <WhySection />
        <ProcessSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FaqSection faqs={faqs} />
        <BlogSection />
        <CtaSection />
        <ContactSection />
      </main>
    </>
  );
}

