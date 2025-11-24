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
      <section className="relative h-[60vh] transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center flex justify-center items-center overflow-hidden text-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            <Globe className="w-3 h-3 animate-pulse" />
            <span>KW&SC CORE</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            ABOUT US
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Karachi Water and Sewerage Corporation (KW&SC) is committed to providing reliable water and sewerage services to Karachi.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      <Fade direction="up" triggerOnce duration={1000}>
        <section className="bg-black w-full overflow-x-hidden">
          <div className="text-white max-w-[85%] mx-auto py-20">
            <div className="text-center mb-10">
              <Fade direction="down" triggerOnce duration={1000}>
                <div className="inline-flex items-center gap-2 px-4 py-1 shadow-ld bg-slate-100 text-black rounded-full text-sm font-medium">
                  <Image src="/icon/magic-black.svg" width={20} height={20} alt="Magic Icon" />
                  About Us
                </div>
              </Fade>
            </div>

            <div className="flex items-center justify-center gap-20 mb-20">
              <div className="w-28 h-[2px] bg-blue-700"></div>
              <h1 className="text-5xl font-bold">KW&SC Heritage</h1>
              <div className="w-28 h-[2px] bg-blue-700"></div>
            </div>

            <div className="flex">
              <div className="flex-1">
                <Fade direction="left" triggerOnce duration={1200}>
                  <h2 className="text-5xl font-bold w-11/12">
                    How KW&SC is Setting New Standards in Water & Sewerage Services for Karachi
                  </h2>
                </Fade>
              </div>

              <div className="flex-1 text-gray-400 font-bold text-lg">
                <Fade direction="right" triggerOnce duration={1000}>
                  <p className="mb-2">
                    At KW&SC, we strive to provide clean, safe drinking water and efficient sewerage services to all residents of Karachi. Our commitment to excellence and innovation enables us to deliver reliable solutions tailored to the city's needs.
                  </p>
                  <p>
                    Our mission is to transform KW&SC into a customer‑centric, financially autonomous, and technologically advanced water and sewerage utility. We leverage sustainable practices to ensure long‑term success and contribute to Karachi’s water security and sanitation goals.
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
