import PageBanner from "@/components/common/PageBanner";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
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
    </>
  );
}
