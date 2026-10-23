import AboutUs from "@/components/about/AboutUs";
import PageBanner from "@/components/common/PageBanner";
import HowItWorks from "@/components/about/HowItWorks";
import OurApproach from "@/components/about/OurApproach";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import { getMoveNestSections } from "@/lib/movenest";

export default function AboutPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="About Us"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutUs
        data={sections.AboutUs?.variants?.MoveNestAboutUs1}
        showButton={false}
      />
      <OurApproach data={sections.OurApproach?.variants?.MoveNestOurApproach1} />
      <WhyChooseUs data={sections.WhyChooseUs?.variants?.MoveNestWhyChooseUs1} />
      <HowItWorks data={sections.WorkingProcess?.variants?.MoveNestWorkingProcess1} />
    </>
  );
}
