import crypto from "crypto";
import prisma from "@/lib/prisma";

const DEFAULT_TTL_MS = Number(process.env.SNAPSHOT_TTL_MS || 1000 * 60 * 15);

export async function resolveWithSnapshot(module, fetcher) {
  try {
    const data = await fetcher();
    const checksum = crypto
      .createHash("sha256")
      .update(JSON.stringify(data))
      .digest("hex");

    await prisma.cachedSnapshot.upsert({
      where: { module },
      update: {
        payload: data,
        checksum,
        fetchedAt: new Date(),
        expiresAt: new Date(Date.now() + DEFAULT_TTL_MS),
      },
      create: {
        module,
        payload: data,
        checksum,
        expiresAt: new Date(Date.now() + DEFAULT_TTL_MS),
      },
    }).catch(err => {
      console.warn(`⚠️ Failed to cache snapshot for ${module}: ${err.message}`);
    });

    return { data, stale: false };
  } catch (error) {
    console.warn(`⚠️ Fetcher failed for ${module}, trying cache...`);
    try {
      const snapshot = await prisma.cachedSnapshot.findUnique({ where: { module } });
      if (snapshot?.payload) {
        return { data: snapshot.payload, stale: true, error };
      }
    } catch (dbError) {
      console.warn(`⚠️ Failed to retrieve cache for ${module}: ${dbError.message}`);
    }
    
    // If we are here, both fetcher and cache failed. 
    // If the fetcher was buildHomePayload, it might have already handled the error and returned fallback data.
    // But if fetcher threw, we rethrow.
    throw error;
  }
}

export async function purgeSnapshot(module) {
  if (!module) return;
  await prisma.cachedSnapshot
    .delete({ where: { module } })
    .catch((error) => {
      if (error.code !== "P2025") {
        throw error;
      }
    });
}
