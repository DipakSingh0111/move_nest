import PageBanner from "@/components/common/PageBanner";
import ServiceDetails from "@/components/ServiceDetails";
import TransportCTA from "@/components/CtaBanner";

export default function ServiceDetailsPage() {
  return (
    <>
      <PageBanner
        title="Service Details"
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/service" },
          { label: "Service Details" },
        ]}
      />
      <ServiceDetails />
      <TransportCTA />
    </>
  );
}
