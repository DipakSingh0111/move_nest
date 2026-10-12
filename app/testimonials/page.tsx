import PageBanner from "@/components/common/PageBanner";
import CounterSection from "@/components/CounterSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getMoveNestSections } from "@/lib/movenest";

export default function TestimonialsPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Testimonials"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <TestimonialsSection data={sections.Testimonials?.variants?.MoveNestTestimonials1} />
      <CounterSection data={sections.Stats?.variants?.MoveNestStats1} />
      <HowItWorks data={sections.WorkingProcess?.variants?.MoveNestWorkingProcess1} />
    </>
  );
}
