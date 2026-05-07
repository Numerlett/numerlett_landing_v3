import PageEffects from '@/components/PageEffects'
import StructuredData from '@/components/StructuredData'
import AnnouncementBar from '@/components/sections/AnnouncementBar'
import BlogSection from '@/components/sections/BlogSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import ContactSection from '@/components/sections/ContactSection'
import CtaSection from '@/components/sections/CtaSection'
import FaqSection from '@/components/sections/FaqSection'
import HeroSection from '@/components/sections/HeroSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import MainNav from '@/components/sections/MainNav'
import ProcessSection from '@/components/sections/ProcessSection'
import SeedSection from '@/components/sections/SeedSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SiteFooter from '@/components/sections/SiteFooter'
import StatsBar from '@/components/sections/StatsBar'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import TickerBar from '@/components/sections/TickerBar'
import WhySection from '@/components/sections/WhySection'

export default function Home() {
  return (
    <>
      <StructuredData />
      <AnnouncementBar />
      <MainNav />
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
        <FaqSection />
        <BlogSection />
        <CtaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <PageEffects />
    </>
  )
}
