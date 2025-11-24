"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Globe } from "lucide-react";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
import Whoarewe from "@/components/Whoarewe";

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
      <section className="relative h-[60vh] transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover bg-center flex justify-center items-center overflow-hidden text-white">
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
            WHAT WE DO
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Comprehensive water and sewerage services ensuring clean water supply and efficient wastewater management for Karachi.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

     <Services />
     <Projects /> 
   
     <Whoarewe />


    </>
  );
}
