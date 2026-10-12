import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/ContactSection";
import { getMoveNestSections } from "@/lib/movenest";

export default function ContactUsPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Contact Us"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection data={sections.ContactPage?.variants?.MoveNestContactPage1} />
    </>
  );
}
