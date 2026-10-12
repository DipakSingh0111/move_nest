import PageBanner from "@/components/common/PageBanner";
import ServiceExperts from "@/components/ServiceExperts";
import { getMoveNestSections } from "@/lib/movenest";

export default function TeamPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Our Team"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
      />
      <ServiceExperts data={sections.Team?.variants?.MoveNestTeam1} />
    </>
  );
}
