import PageBanner from "@/components/common/PageBanner";
import GallerySection from "@/components/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <GallerySection />
    </>
  );
}
