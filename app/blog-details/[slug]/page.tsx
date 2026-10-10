import PageBanner from "@/components/common/PageBanner";
import BlogDetailsComponent from "@/components/BlogDetails";
import TransportCTA from "@/components/CtaBanner";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function DynamicBlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return notFound();

  return (
    <>
      <PageBanner
        title="Blog Detail"
        image="/images/Hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Blogs", href: "/blog" },
          { label: "Blog Detail" },
        ]}
      />
      
      <BlogDetailsComponent blog={blog} />
      
      <TransportCTA />
    </>
  );
}
