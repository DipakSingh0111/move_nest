import PageBanner from "@/components/common/PageBanner";
import BlogDetailsComponent from "@/components/blog/BlogDetails";
import { getMoveNestSections } from "@/lib/movenest";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sections = getMoveNestSections();

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <>
      <PageBanner
        data={sections.PageBanners?.variants?.MoveNestPageBanners1}
        title="Blog Detail"
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Blogs", href: "/blog" },
          { label: "Blog Detail" },
        ]}
      />

      <BlogDetailsComponent
        blog={blog}
        data={sections.BlogNews?.variants?.MoveNestBlogNews1?.details}
      />
    </>
  );
}
