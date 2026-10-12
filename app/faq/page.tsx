import PageBanner from "@/components/common/PageBanner";
import FaqSection from "@/components/FaqSection";
import { getMoveNestSections } from "@/lib/movenest";

export default function FAQPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="FAQ"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <FaqSection data={sections.Faq?.variants?.MoveNestFaq1} />
    </>
  );
}
