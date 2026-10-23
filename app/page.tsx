import AboutUsSection from "@/components/about/AboutUs";
import CounterSection from "@/components/home/CounterSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import HeroSection from "@/components/hero/HeroSection";
import HeroFeatures from "@/components/hero/HeroFeatures";
import HowItWorksSection from "@/components/about/HowItWorks";
import LatestBlogSection from "@/components/blog/LatestBlog";
import OurServicesSection from "@/components/services/OurServices";
import TestimonialsSection from "@/components/testimonials/Testimonials";
import { getMoveNestSections } from "@/lib/movenest";

export default function Home() {
  const sections = getMoveNestSections();

  return (
    <div>
      <HeroSection data={sections.HeroBanner?.variants?.MoveNestHeroBanner1} />
      <HeroFeatures data={sections.HeroBanner?.variants?.MoveNestHeroBanner1?.features} />
      <AboutUsSection data={sections.AboutUs?.variants?.MoveNestAboutUs1} />
      <OurServicesSection data={sections.Services?.variants?.MoveNestServices1} />
      <CounterSection data={sections.Stats?.variants?.MoveNestStats1} />
      <HowItWorksSection data={sections.WorkingProcess?.variants?.MoveNestWorkingProcess1} />
      <TestimonialsSection data={sections.Testimonials?.variants?.MoveNestTestimonials1} />
      <LatestBlogSection data={sections.BlogNews?.variants?.MoveNestBlogNews1} />
      <CtaBannerSection data={sections.CtaBanner?.variants?.MoveNestCtaBanner1} />
    </div>
  );
}
