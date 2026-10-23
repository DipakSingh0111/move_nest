import PageBanner from "@/components/common/PageBanner";
import TeamDetailsComponent from "@/components/team/TeamDetails";
import { getMoveNestSections } from "@/lib/movenest";
import { notFound } from "next/navigation";
import { experts } from "@/data/experts";

export async function generateStaticParams() {
  return experts.map((e) => ({
    slug: e.slug,
  }));
}

export default async function TeamDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sections = getMoveNestSections();

  const member = experts.find((e) => e.slug === slug);
  if (!member) return notFound();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Team Details"
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/team" },
          { label: "Team Details" },
        ]}
      />

      <TeamDetailsComponent
        member={member}
        data={sections.Team?.variants?.MoveNestTeam1?.details}
      />
    </>
  );
}
