import PageBanner from "@/components/common/PageBanner";
import CtaBanner from "@/components/CtaBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <ServicesSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
