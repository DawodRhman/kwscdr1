"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTint, FaWater, FaTools, FaShieldAlt, FaChartLine, FaCogs, FaDatabase, FaPhone } from "react-icons/fa";
import Loader from "@/components/Loader";
import gsap from "gsap";

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });
    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  const services = [
    { title: "Water Supply Services", description: "Reliable clean water distribution across Karachi.", icon: <FaTint />, gradient: "from-blue-100 to-blue-300" },
    { title: "Sewerage Management", description: "Efficient wastewater collection and treatment systems.", icon: <FaWater />, gradient: "from-cyan-100 to-blue-200" },
    { title: "Infrastructure Maintenance", description: "Regular maintenance and upgrade of water infrastructure.", icon: <FaTools />, gradient: "from-indigo-100 to-purple-200" },
    { title: "Water Quality Testing", description: "Comprehensive water quality monitoring and testing.", icon: <FaShieldAlt />, gradient: "from-green-100 to-teal-200" },
    { title: "Emergency Services", description: "24/7 emergency water and sewerage services.", icon: <FaPhone />, gradient: "from-red-100 to-orange-200" },
    { title: "Customer Support", description: "Dedicated customer service and complaint resolution.", icon: <FaCogs />, gradient: "from-purple-100 to-pink-200" },
    { title: "Water Treatment", description: "Advanced water treatment and purification processes.", icon: <FaChartLine />, gradient: "from-teal-100 to-green-200" },
    { title: "Billing Services", description: "Convenient online billing and payment systems.", icon: <FaDatabase />, gradient: "from-yellow-100 to-orange-200" },
  ];

  return (
    <>
      {loading && <Loader />}

      {/* Corporate Section Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg md:text-xl">
            We provide a full range of water supply, sewerage, and infrastructure services to keep Karachi safe, clean, and sustainable.
          </p>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Water Supply */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Water Supply Services</h2>
              <p className="text-gray-600">KW&SC sources water from multiple locations including Hub Dam, Keenjhar Lake, and other strategic water sources to ensure adequate supply for Karachi's growing population.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Hub Dam - Primary water source</li>
                <li>Keenjhar Lake - Secondary source</li>
                <li>Groundwater extraction</li>
                <li>Desalination plants</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Water Filtration Process</h3>
              <p className="text-gray-600 mb-2">Our state-of-the-art filtration plants ensure that water meets international quality standards before distribution to consumers.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Multi-stage filtration process</li>
                <li>Chlorination for disinfection</li>
                <li>Quality testing laboratories</li>
                <li>Continuous monitoring systems</li>
              </ul>
            </div>
          </div>

          {/* Sewerage */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sewerage Infrastructure</h3>
              <p className="text-gray-600 mb-2">Comprehensive sewerage network covering residential, commercial, and industrial areas across Karachi.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Extensive sewerage network</li>
                <li>Pumping stations</li>
                <li>Treatment facilities</li>
                <li>Maintenance services</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Sewerage Treatment</h2>
              <p className="text-gray-600">Advanced treatment plants ensure proper processing of wastewater before disposal, protecting the environment.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Primary treatment processes</li>
                <li>Secondary treatment systems</li>
                <li>Tertiary treatment facilities</li>
                <li>Environmental compliance</li>
              </ul>
            </div>
          </div>

          {/* Revenue Resource */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Revenue Resource Generation</h2>
            <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Billing & Collection</h3>
                <p className="text-gray-600 mb-2">Efficient billing system ensuring accurate charges and timely collection of water and sewerage fees.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Online billing system</li>
                  <li>Multiple payment options</li>
                  <li>Automated meter reading</li>
                  <li>Customer service support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Connection Services</h3>
                <p className="text-gray-600 mb-2">Streamlined process for new connections and service modifications.</p>
                <a href="https://www.kwsc.gos.pk/assets/documents/Connection-Guideline-RRG.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Connection Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper / Card Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Other Services</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={false}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={`h-[400px] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-gray-200 bg-gradient-to-br ${service.gradient}`}>
                  <div className="flex flex-col items-center text-center justify-center h-full">
                    <div className="text-5xl mb-4 text-gray-800">{service.icon}</div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
