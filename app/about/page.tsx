import AboutUs from "@/components/common/AboutUs";
import PageBanner from "@/components/common/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import OurApproach from "@/components/OurApproach";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutUs showButton={false} />
      <OurApproach />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
