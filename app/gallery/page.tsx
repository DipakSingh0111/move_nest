import PageBanner from "@/components/common/PageBanner";
import GallerySection from "@/components/gallery/GallerySection";
import { getMoveNestSections } from "@/lib/movenest";

export default function GalleryPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Gallery"
        image="/images/Hero.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <GallerySection data={sections.Gallery?.variants?.MoveNestGallery1} />
    </>
  );
}
