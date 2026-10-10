import AboutUsSection from "@/components/common/AboutUs";
import CounterSection from "@/components/CounterSection";
import CtaBannerSection from "@/components/CtaBanner";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import LatestBlogSection from "@/components/LatestBlog";
import OurServicesSection from "@/components/OurServices";
import TestimonialsSection from "@/components/Testimonials";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <CounterSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LatestBlogSection />
      <CtaBannerSection />
    </div>
  );
}
