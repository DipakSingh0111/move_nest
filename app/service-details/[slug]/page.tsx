import PageBanner from "@/components/common/PageBanner";
import ServiceDetails from "@/components/ServiceDetails";
import TransportCTA from "@/components/CtaBanner";
import { getMoveNestSections } from "@/lib/movenest";
import { notFound } from "next/navigation";

const sections = getMoveNestSections();
const servicesSection = sections.Services?.variants?.MoveNestServices1;
const footerSection = sections.Footer?.variants?.MoveNestFooter1;
const serviceDetails = servicesSection?.serviceDetails;

const allServicesData = [
  ...(servicesSection?.list || []).map((s) => ({ slug: s.slug, title: s.title })),
  ...(footerSection?.services || []).map((s) => ({
    slug: s.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"),
    title: s,
  })),
  ...(serviceDetails?.sidebarServices || []).map((s) => ({ slug: s.slug, title: s.name })),
];

const uniqueServicesMap = new Map();
allServicesData.forEach((s) => {
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

export default async function DynamicServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentSections = getMoveNestSections();

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <PageBanner
        data={currentSections.PageBanners?.variants?.MoveNestPageBanners1}
        title={service.title}
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/service" },
          { label: service.title },
        ]}
      />
      <ServiceDetails
        data={currentSections.Services?.variants?.MoveNestServices1?.serviceDetails}
        currentSlug={slug}
        title={service.title}
      />
      <TransportCTA data={currentSections.CtaBanner?.variants?.MoveNestCtaBanner1} />
    </>
  );
}
