import prisma from "@/lib/prisma";

function serializeDate(value) {
  return value ? value.toISOString() : null;
}

export async function getAdminDashboardStats() {
  const [
    serviceCategories,
    tenderCount,
    newsArticles,
    careerOpenings,
    leadershipMembers,
    socialLinks,
    projects,
    faqCount,
    mediaAssets,
    operatorCount,
    latestTender,
    latestNews,
    latestSnapshot,
    rtiCount,
    educationCount,
    waterTodayCount,
    achievementCount,
    workflowCount,
    counterCount,
    locationCount,
    contactCount,
  ] = await Promise.all([
    prisma.serviceCategory.count(),
    prisma.tender.count(),
    prisma.newsArticle.count(),
    prisma.careerOpening.count(),
    prisma.leadershipMember.count(),
    prisma.socialLink.count(),
    prisma.projectHighlight.count(),
    prisma.faq.count(),
    prisma.mediaAsset.count(),
    prisma.user.count(),
    prisma.tender.findFirst({
      orderBy: { updatedAt: "desc" },
      select: { title: true, status: true, updatedAt: true },
    }),
    prisma.newsArticle.findFirst({
      orderBy: { updatedAt: "desc" },
      select: { title: true, publishedAt: true },
    }),
    prisma.cachedSnapshot.findFirst({
      orderBy: { updatedAt: "desc" },
      select: { module: true, updatedAt: true },
    }),
    prisma.rtiDocument.count(),
    prisma.educationResource.count(),
    prisma.waterTodayUpdate.count(),
    prisma.achievement.count(),
    prisma.workflowStep.count(),
    prisma.counterStat.count(),
    prisma.officeLocation.count(),
    prisma.contactChannel.count(),
  ]);

  return {
    metrics: [
      { label: "Services live", value: serviceCategories },
      { label: "Active tenders", value: tenderCount },
      { label: "News stories", value: newsArticles },
      { label: "Open roles", value: careerOpenings },
      { label: "Water Updates", value: waterTodayCount },
      { label: "Education", value: educationCount },
      { label: "RTI Docs", value: rtiCount },
    ],
    secondaryMetrics: [
      { label: "Leadership bios", value: leadershipMembers },
      { label: "Projects showcased", value: projects },
      { label: "FAQ entries", value: faqCount },
      { label: "Social links", value: socialLinks },
      { label: "Media assets", value: mediaAssets },
      { label: "Operators", value: operatorCount },
      { label: "Achievements", value: achievementCount },
      { label: "Workflow Steps", value: workflowCount },
      { label: "Counters", value: counterCount },
      { label: "Locations", value: locationCount },
      { label: "Contacts", value: contactCount },
    ],
    highlights: {
      latestTender: latestTender
        ? {
            title: latestTender.title,
            status: latestTender.status,
            updatedAt: serializeDate(latestTender.updatedAt),
          }
        : null,
      latestNews: latestNews
        ? {
            title: latestNews.title,
            publishedAt: serializeDate(latestNews.publishedAt),
          }
        : null,
      cacheSnapshot: latestSnapshot
        ? {
            module: latestSnapshot.module,
            updatedAt: serializeDate(latestSnapshot.updatedAt),
          }
        : null,
    },
  };
}
