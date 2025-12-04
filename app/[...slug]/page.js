import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import PageRenderer from "@/components/PageBuilder/PageRenderer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Force dynamic rendering to ensure we get the latest content
export const dynamic = "force-dynamic";

async function getPage(slugArray) {
  const slug = slugArray.join("/");
  const page = await prisma.page.findUnique({
    where: { slug },
    include: {
      sections: {
        orderBy: { order: "asc" },
      },
      seo: true,
    },
  });
  return page;
}

export async function generateMetadata({ params }) {
  const page = await getPage(params.slug);
  
  if (!page) return {};

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
    // Add other SEO fields as needed
  };
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);

  if (!page || !page.isPublished) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageRenderer sections={page.sections} />
      <Footer />
    </main>
  );
}
