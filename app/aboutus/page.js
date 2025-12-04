import prisma from "@/lib/prisma";
import PageRenderer from "@/components/PageBuilder/PageRenderer";
import AboutUsClient from "./AboutUsClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Force dynamic rendering to ensure we get the latest content
export const dynamic = "force-dynamic";

async function getPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "about-us" },
    include: {
      sections: {
        orderBy: { order: "asc" },
      },
      seo: true,
    },
  });
  return page;
}

export async function generateMetadata() {
  const page = await getPage();
  
  if (!page) return {
    title: "About Us | KW&SC",
    description: "Learn about Karachi Water & Sewerage Corporation's heritage and mission.",
  };

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
  };
}

export default async function AboutUsPage() {
  const page = await getPage();

  // If the page exists in the DB and is published, render the dynamic content
  if (page && page.isPublished) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <PageRenderer sections={page.sections} />
        <Footer />
      </main>
    );
  }

  // Fallback to the hardcoded client component if no DB entry exists
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <AboutUsClient />
      <Footer />
    </main>
  );
}
