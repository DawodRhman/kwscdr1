"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";

export default function Education() {
  const [loading, setLoading] = useState(true);
  const [educationData, setEducationData] = useState(null);
  const [dataError, setDataError] = useState(null);

  // ...existing code... GSAP loader animation
  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });

    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  // ...existing code... API fetch logic
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch("/api/education");
        if (!response.ok) throw new Error("Failed to fetch Education data");
        const payload = await response.json();
        if (isMounted) {
          setEducationData(payload.data);
        }
      } catch (error) {
        console.error("Error fetching Education data:", error);
        if (isMounted) setDataError("Unable to load educational resources.");
      }
    };
    fetchData();
    return () => { isMounted = false; };
  }, []);

  // ...existing code... Fallback data
  const defaultPosts = [
    {
      title: "Water Conservation Workshops",
      description: "KW&SC conducts interactive workshops for schools and communities, teaching smart water usage and leak detection techniques to promote sustainable water practices.",
      image: "/otherImages/watershops.jpg",
    },
    {
      title: "Educational Seminars",
      description: "Regular seminars and webinars educate citizens about Karachi's water supply system, sewerage management, and the importance of environmental sustainability.",
      image: "/otherImages/edu-seminear.jpg",
    },
    {
      title: "Digital Learning & Awareness",
      description: "Online resources, infographics, and e-learning modules help students and the public understand water treatment, wastewater management, and smart city water solutions.",
      image: "/otherImages/education.jpg",
    },
  ];

  const posts = educationData?.resources?.length > 0 ? educationData.resources : defaultPosts;
  const hero = educationData?.hero || {
    title: "Education & Awareness",
    subtitle: "Empowering the community with knowledge about water conservation and hygiene.",
    backgroundImage: "/karachicharminar.gif",
  };

  return (
    <>
      {loading && <Loader />}

      {/* Hero Banner */}
      <section className="relative h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)] bg-[size:40px_40px] opacity-30 z-0"></div>
        <div className="relative z-[1] max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs md:text-sm font-mono mb-4 sm:mb-6 md:mb-8 backdrop-blur-md">
            KW&SC EDUCATION INITIATIVES
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
            EDUCATION
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Learn about KW&SC's programs to educate students, citizens, and communities on water conservation, sanitation, and sustainable practices.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      {/* Educational Posts */}
      <section className="bg-[#020617] text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl 2xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20 2xl:space-y-24">
          {posts.map((post, i) => (
            <Fade key={i} direction="up" triggerOnce duration={800} delay={i * 150}>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
                <div className="md:flex-1">
                  <img src={post.image} alt={post.title} className="rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] w-full h-auto" />
                </div>
                <div className="md:flex-1">
                  <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-cyan-400 mb-2 sm:mb-3 md:mb-4 lg:mb-5">{post.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">{post.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01041b] text-cyan-400 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 text-center border-t border-cyan-600">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">© 2025 Karachi Water & Sewerage Board (KW&SC). All rights reserved.</p>
      </footer>
    </>
  );
}
