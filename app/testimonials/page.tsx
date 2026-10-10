import PageBanner from "@/components/common/PageBanner";
import CounterSection from "@/components/CounterSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Testimonials"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <TestimonialsSection />
      <CounterSection />
      <HowItWorks />
    </>
  );
}
