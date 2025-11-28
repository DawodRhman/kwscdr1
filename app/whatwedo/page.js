"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Globe } from "lucide-react";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Workwithus from "@/components/Workwithus";
import Developmentworks from "@/components/Developmentworks";

export default function WhatWeDo() {
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

      {/* CYBER HERO BANNER */}
      <section className="relative h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover bg-center flex justify-center items-center overflow-hidden text-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs md:text-sm font-mono mb-4 sm:mb-6 md:mb-8 backdrop-blur-md">
            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 animate-pulse" />
            <span>KW&SC CORE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
            WHAT WE DO
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto font-light leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Comprehensive water and sewerage services ensuring clean water supply and efficient wastewater management for Karachi.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      <Services />
      <Projects />
      <Workwithus />
      <Developmentworks />


    </>
  );
}
