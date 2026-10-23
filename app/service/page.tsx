import PageBanner from "@/components/common/PageBanner";
import CtaBanner from "@/components/common/CtaBanner";
import ServicesSection from "@/components/services/ServicesSection";
import { getMoveNestSections } from "@/lib/movenest";

export default function ServicesPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Our Services"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <ServicesSection data={sections.Services?.variants?.MoveNestServices1} />
      <CtaBanner data={sections.CtaBanner?.variants?.MoveNestCtaBanner1} />
    </>
  );
}
