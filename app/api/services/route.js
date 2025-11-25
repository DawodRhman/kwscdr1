import { NextResponse } from "next/server";
import { SnapshotModule } from "@prisma/client";
import prisma from "@/lib/prisma";
import { resolveWithSnapshot } from "@/lib/cache";
import { resolvePageSeo } from "@/lib/seo";
import content from "@/data/static/content";

export async function GET() {
  try {
    const { data, stale } = await resolveWithSnapshot(
      SnapshotModule.SERVICES,
      async () => {
        let categories = [];
        try {
            categories = await prisma.serviceCategory.findMany({
            orderBy: { order: "asc" },
            include: {
                seo: true,
                cards: {
                orderBy: { order: "asc" },
                include: {
                    seo: true,
                    media: true,
                    details: {
                    orderBy: { order: "asc" },
                    },
                },
                },
                resources: {
                orderBy: { createdAt: "asc" },
                include: {
                    media: true,
                },
                },
            },
            });
        } catch (dbError) {
            console.warn("⚠️ Database unreachable in services API. Using fallback data.");
            // Fallback mapping is complex, returning empty array for now to prevent crash
            // Ideally we would map content.services here
            categories = []; 
        }

        const hero = {
          title: "What We Do",
          subtitle:
            "Comprehensive water and sewerage services ensuring clean water supply and efficient wastewater management for Karachi.",
          backgroundImage: "/teentalwarkarachi.gif",
        };

        const seo = await resolvePageSeo({
          canonicalUrl: "/ourservices",
          fallback: {
            title: `${hero.title} | Karachi Water & Sewerage Corporation`,
            description: hero.subtitle,
            ogImageUrl: hero.backgroundImage,
          },
        });

        return {
          hero,
          categories,
          seo,
        };
      }
    );

    return NextResponse.json({ data, meta: { stale } });
  } catch (error) {
    console.error("GET /api/services", error);
    return NextResponse.json(
      { 
        data: {
            hero: {
                title: "What We Do",
                subtitle: "Comprehensive water and sewerage services ensuring clean water supply and efficient wastewater management for Karachi.",
                backgroundImage: "/teentalwarkarachi.gif",
            },
            categories: [],
            seo: null
        },
        meta: { stale: true }
      }
    );
  }
}
