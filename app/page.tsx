import AboutUsSection from "@/components/common/AboutUs";
import CounterSection from "@/components/CounterSection";
import CtaBannerSection from "@/components/CtaBanner";
import HeroSection from "@/components/HeroSection";
import HeroFeatures from "@/components/HeroFeatures";
import HowItWorksSection from "@/components/HowItWorks";
import LatestBlogSection from "@/components/LatestBlog";
import OurServicesSection from "@/components/OurServices";
import TestimonialsSection from "@/components/Testimonials";
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
