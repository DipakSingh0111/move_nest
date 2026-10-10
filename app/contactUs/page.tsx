import PageBanner from "@/components/common/PageBanner";
import ContactSection from "@/components/ContactSection";

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
    </>
  );
}
