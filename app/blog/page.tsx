import PageBanner from "@/components/common/PageBanner";
import LatestBlogSection from "@/components/LatestBlog";
import { getMoveNestSections } from "@/lib/movenest";

export default function BlogPage() {
  const sections = getMoveNestSections();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Blogs"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <LatestBlogSection data={sections.BlogNews?.variants?.MoveNestBlogNews1} />
    </>
  );
}
