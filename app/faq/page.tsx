import PageBanner from "@/components/common/PageBanner";
import FaqSection from "@/components/FaqSection";

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="FAQ"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <FaqSection />
    </>
  );
}
