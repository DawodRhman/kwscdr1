"use client";
import React, { useMemo } from "react";
import Link from "next/link";

const FALLBACK_UPDATE = {
  title: "Water Today – Daily Water Supply Status",
  summary: "Today’s water distribution across Karachi remains stable, with major pumping stations operating at optimal capacity. Supply to central and western zones is reported as normal, while select southern sectors may experience low-pressure intervals during peak hours. Maintenance teams are deployed to ensure smooth flow and address any temporary disruptions.",
  media: { url: "/downtownkarachi.gif" },
  publishedAt: new Date().toISOString(),
};

export default function WaterTodaySection({ updates }) {
  const latestUpdate = useMemo(() => {
    if (Array.isArray(updates) && updates.length > 0) {
      return updates[0];
    }
    return FALLBACK_UPDATE;
  }, [updates]);

  const imageUrl = latestUpdate.media?.url || FALLBACK_UPDATE.media.url;

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative subtle shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">
          {latestUpdate.title}
        </h2>

        <div className="rounded-3xl bg-white shadow-xl p-6 lg:p-10 border border-gray-200 flex flex-col lg:flex-row items-center gap-8 transition-all hover:shadow-2xl">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={imageUrl}
              alt={latestUpdate.title}
              className="rounded-2xl shadow-md object-cover w-full h-64 lg:h-80"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed text-[17px]">
            <p>
              {latestUpdate.summary}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Updated: {new Date(latestUpdate.publishedAt).toLocaleDateString()}
              </span>
              <Link href="/watertodaysection" className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-all underline text-sm">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

