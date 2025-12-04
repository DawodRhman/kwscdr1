"use client";
import React, { useEffect, useState } from "react";
import { 
  FaTint, 
  FaWater, 
  FaTruck, 
  FaWrench, 
  FaHandHoldingWater, 
  FaFileInvoiceDollar,
  FaBuilding,
  FaLeaf
} from "react-icons/fa";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { useServicesData } from "@/hooks/useServicesData";

const IconMap = {
  FaTint,
  FaWater,
  FaTruck,
  FaWrench,
  FaHandHoldingWater,
  FaFileInvoiceDollar,
  FaBuilding,
  FaLeaf
};

export default function Services() {
  const [animationDone, setAnimationDone] = useState(false);
  const { data, loading: dataLoading, error, stale } = useServicesData();
  const loading = !animationDone || dataLoading;

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setAnimationDone(true) });
    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  if (loading) return <Loader />;

  // Flatten the structure to display details as the main content blocks
  // The API returns categories -> cards -> details
  // We want to display the details (which contain the text content) and their associated cards
  const serviceBlocks = [];
  
  if (data?.categories) {
    data.categories.forEach(category => {
      if (category.cards) {
        category.cards.forEach(card => {
          if (card.details && card.details.length > 0) {
            card.details.forEach(detail => {
              serviceBlocks.push({
                ...detail,
                card: card,
                category: category
              });
            });
          }
        });
      }
    });
  }

  return (
    <>
      {/* Corporate Section Header */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            {data.hero?.title || "Our Services"}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed">
            {data.hero?.subtitle || "KW&SC provides essential services to the citizens of Karachi, ensuring efficient water supply, sewerage management, and digital accessibility."}
          </p>
          {error && (
            <p className="mt-4 text-sm text-red-500">Showing cached content due to a network issue. ({error.message})</p>
          )}
          {!error && stale && <p className="mt-4 text-sm text-amber-500">Content shown from cache while live data refreshes.</p>}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          
          {serviceBlocks.length > 0 ? (
            serviceBlocks.map((block, index) => {
              const Icon = IconMap[block.card.iconKey] || FaTint;
              
              return (
                <div key={block.id || index} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
                  <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800">
                      {block.heading}
                    </h2>
                    <div 
                      className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.body }}
                    />
                    {block.bulletPoints && block.bulletPoints.length > 0 && (
                      <ul className="list-disc list-inside text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 space-y-1 sm:space-y-1.5 md:space-y-2 pl-2 sm:pl-0">
                        {block.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={`bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br ${block.card.gradientClass || 'from-blue-50 to-white'}`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full mr-4 text-blue-600">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800">
                        {block.card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 leading-relaxed">
                      {block.card.summary || block.card.description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No services data available.</p>
            </div>
          )}

        </div>
      </section>

      {/* ...existing code... */}
    </>
  );
}
