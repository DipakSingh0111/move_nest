import PageBanner from "@/components/common/PageBanner";
import TeamDetailsComponent from "@/components/TeamDetails";
import ServiceExperts from "@/components/ServiceExperts";
import TransportCTA from "@/components/CtaBanner";
import { notFound } from "next/navigation";
import { experts } from "@/data/experts";

export async function generateStaticParams() {
  return experts.map((e) => ({
    slug: e.slug,
  }));
}

export default async function DynamicTeamDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const member = experts.find(e => e.slug === slug);
  if (!member) return notFound();

  return (
    <>
      <PageBanner
        title={member.name}
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/team" },
          { label: member.name },
        ]}
      />
      
      <TeamDetailsComponent member={member} />
      
      <ServiceExperts limit={3} />
      
      <TransportCTA />
    </>
  );
}
