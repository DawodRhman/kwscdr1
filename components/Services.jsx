"use client";
import React, { useEffect, useState } from "react";
import { FaTint } from "react-icons/fa";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { useServicesData } from "@/hooks/useServicesData";

export default function Services() {
  const [animationDone, setAnimationDone] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { data, cards, loading: dataLoading, error, stale } = useServicesData();
  const loading = !animationDone || dataLoading;

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setAnimationDone(true) });
    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const closeOverlay = () => setSelectedCard(null);
  const SelectedIcon = selectedCard ? FaTint : null;

  return (
    <>
      {loading && <Loader />}

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
          {/* Complaint Management */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800">
                Complaint Management
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed">
                Citizens can register complaints regarding water supply issues,
                sewerage problems, or service disruptions. KW&SC ensures timely
                tracking and resolution of all complaints.
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 space-y-1 sm:space-y-1.5 md:space-y-2 pl-2 sm:pl-0">
                <li>Register complaints online or via helpline</li>
                <li>Track status of registered complaints</li>
                <li>Timely resolution and escalation management</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                Citizen Support
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 leading-relaxed">
                Dedicated team for resolving complaints efficiently and
                maintaining service quality.
              </p>
            </div>
          </div>

          {/* Online Water Tanker Booking */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800">
                Online Tanker Booking
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed">
                Book water tankers online for residential or commercial needs.
                KW&SC manages scheduling, delivery, and ensures timely supply.
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 space-y-1 sm:space-y-1.5 md:space-y-2 pl-2 sm:pl-0">
                <li>Online booking portal for citizens</li>
                <li>Flexible delivery schedules</li>
                <li>Real-time tracking of tankers</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                Tanker Services
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-2 leading-relaxed">
                Efficient management and monitoring of water tanker deliveries
                across the city.
              </p>
            </div>
          </div>

          {/* New Connections */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 text-center">
              New Connection Services
            </h2>
            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Water & Sewerage Connections
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-5 leading-relaxed">
                  Apply for new connections or modifications online. KW&SC
                  streamlines approvals, installation, and activation.
                </p>
                <a
                  href="https://www.kwsc.gos.pk/assets/documents/Connection-Guideline-RRG.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs sm:text-sm md:text-base lg:text-lg text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
                >
                  View Connection Guidelines
                </a>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                  Efficient Approvals
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Fast processing of applications for residential and commercial
                  connections to ensure uninterrupted service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
    </>
  );
}
