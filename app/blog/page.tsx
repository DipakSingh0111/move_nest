import PageBanner from "@/components/common/PageBanner";
import LatestBlogSection from "@/components/LatestBlog";

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blogs"
        image="/images/banners/services.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <LatestBlogSection />
    </>
  );
}
