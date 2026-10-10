import PageBanner from "@/components/common/PageBanner";
import QuoteSection from "@/components/QuoteSection";

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner
        title="Get A Quote"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get A Quote" }]}
      />
      <QuoteSection />
    </>
  );
}
