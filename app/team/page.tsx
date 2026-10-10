import PageBanner from "@/components/common/PageBanner";
import ServiceExperts from "@/components/ServiceExperts";

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Team"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
      />
      <ServiceExperts />
    </>
  );
}
