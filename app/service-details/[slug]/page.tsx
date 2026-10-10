import PageBanner from "@/components/common/PageBanner";
import ServiceDetails from "@/components/ServiceDetails";
import TransportCTA from "@/components/CtaBanner";
import data from "@/data/move-nest.json";
import { notFound } from "next/navigation";

const allServicesData = [
  ...data.ourServices.services.map(s => ({ slug: s.slug, title: s.title })),
  ...data.footer.services.map(s => ({ 
    slug: s.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-'), 
    title: s 
  })),
  ...data.serviceDetails.sidebarServices.map(s => ({ slug: s.slug, title: s.name }))
];

const uniqueServicesMap = new Map();
allServicesData.forEach(s => {
  if (!uniqueServicesMap.has(s.slug)) {
    uniqueServicesMap.set(s.slug, s);
  }
});
const servicesData = Array.from(uniqueServicesMap.values());

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function DynamicServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/service" },
          { label: service.title },
        ]}
      />
      <ServiceDetails currentSlug={slug} title={service.title} />
      <TransportCTA />
    </>
  );
}
