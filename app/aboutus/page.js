"use client";
import Loader from "@/components/Loader";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Watertodaysection from "@/components/Watertodaysection";
import Achievement from "@/components/Achievement";
import OurLeadership from "@/components/OurLeadership";
import Career from "@/components/Career";
import Faqs from "@/components/Faqs";
import { Globe } from "lucide-react";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });

    loaderTimeline
      .fromTo(
        ".loader",
        { scaleY: 0, transformOrigin: "50% 100%" },
        { scaleY: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .to(".loader", {
        scaleY: 0,
        transformOrigin: "0% -100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".wrapper",
        { y: "-100%", ease: "power4.inOut", duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* 🔥 CYBER HERO BANNER */}
      <section className="relative h-screen sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-screen 2xl:h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center flex justify-center items-center overflow-hidden text-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 2xl:py-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3 2xl:gap-3 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-4 py-1 sm:py-1.5 md:py-2 lg:py-1.5 xl:py-1.5 2xl:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-mono mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 backdrop-blur-md">
            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-3 2xl:h-3 animate-pulse" />
            <span>KW&SC CORE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
            ABOUT US
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto font-light leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Karachi Water and Sewerage Corporation (KW&SC) is committed to providing reliable water and sewerage services to Karachi.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      <Fade direction="up" triggerOnce duration={1000}>
        <section className="bg-black w-full overflow-x-hidden">
          <div className="text-white max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 2xl:mb-20">
              <Fade direction="down" triggerOnce duration={1000}>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 2xl:gap-2.5 px-3 sm:px-4 md:px-5 lg:px-5 xl:px-5 2xl:px-5 py-0.5 sm:py-1 md:py-1.5 lg:py-1 xl:py-1 2xl:py-1 shadow-md bg-slate-100 text-black rounded-full text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-sm font-medium">
                  <Image src="/icon/magic-black.svg" width={16} height={16} alt="Magic Icon" className="sm:w-5 md:w-6 lg:w-5 xl:w-5 2xl:w-5" />
                  About Us
                </div>
              </Fade>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
              <div className="hidden sm:block w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 2xl:w-40 h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] 2xl:h-[3px] bg-blue-700"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold whitespace-nowrap">KW&SC Heritage</h1>
              <div className="hidden sm:block w-12 sm:w-16 md:w-20 lg:w-28 xl:w-32 2xl:w-40 h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] 2xl:h-[3px] bg-blue-700"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
              <div className="flex-1 w-full">
                <Fade direction="left" triggerOnce duration={1200}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold w-full md:w-11/12 leading-tight sm:leading-tight md:leading-snug lg:leading-snug">
                    How KW&SC is Setting New Standards in Water & Sewerage Services for Karachi
                  </h2>
                </Fade>
              </div>

              <div className="flex-1 w-full text-gray-400 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 2xl:space-y-8">
                <Fade direction="right" triggerOnce duration={1000}>
                  <p>
                    At KW&SC, we strive to provide clean, safe drinking water and efficient sewerage services to all residents of Karachi. Our commitment to excellence and innovation enables us to deliver reliable solutions tailored to the city's needs.
                  </p>
                  <p>
                    Our mission is to transform KW&SC into a customer‑centric, financially autonomous, and technologically advanced water and sewerage utility. We leverage sustainable practices to ensure long‑term success and contribute to Karachi's water security and sanitation goals.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <Watertodaysection />
        <Achievement />
        <OurLeadership />
        <Career />
        <Faqs />
      </Fade>
    </>
  );
}
