import PageBanner from "@/components/common/PageBanner";
import QuoteSection from "@/components/quote/QuoteSection";
import CtaBanner from "@/components/common/CtaBanner";
import { getMoveNestSections } from "@/lib/movenest";

export default function GetAQuotePage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Get A Quote"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Get A Quote" }]}
      />
      <QuoteSection data={sections.GetQuote?.variants?.MoveNestGetQuote1} />
      <CtaBanner data={sections.CtaBanner?.variants?.MoveNestCtaBanner1} />
    </>
  );
}
