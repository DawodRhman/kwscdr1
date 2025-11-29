
"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import {
  Activity,
  FileText,
  Camera,
  ChevronRight,
  Calendar,
  Tag,
  Cpu,
  Globe,
  Zap
} from "lucide-react";

export default function News() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('updates');

  // ...existing code... Inject custom animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      .animate-scan {
        animation: scan 2.5s linear infinite;
      }
      .tech-grid-bg {
        background-image: 
          linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ...existing code... GSAP Loader Animation
  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

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

  // ...existing code... Static Data
  const latestUpdates = [
    {
      date: "Aug 13, 2025",
      title: "PPP Chairman Bilawal Bhutto Zardari inaugurates New Hub Canal",
      description: "The New Hub Canal project has been officially inaugurated, marking a significant milestone in Karachi's water infrastructure development.",
      type: "Inauguration",
      id: "UP-001"
    },
    {
      date: "Aug 6, 2025",
      title: "Mayor Karachi visits New Hub Canal with officials and experts",
      description: "Comprehensive inspection and review of the completed New Hub Canal project by city leadership.",
      type: "Inspection",
      id: "UP-002"
    },
    {
      date: "Aug 6, 2025",
      title: "First major water project completed in 22 years",
      description: "KW&SC celebrates the completion of the city's first major water project in nearly two decades.",
      type: "Achievement",
      id: "UP-003"
    },
    {
      date: "July 24, 2025",
      title: "KWSC Board approves Ahmed Ali Siddiqui as permanent CEO",
      description: "Board of Directors officially appoints Ahmed Ali Siddiqui as the permanent CEO of KW&SC.",
      type: "Leadership",
      id: "UP-004"
    },
    {
      date: "May 3, 2025",
      title: "CEO visits NEK Old & New Filter Plants",
      description: "CEO conducts inspection of water filtration facilities to ensure quality standards.",
      type: "Inspection",
      id: "UP-005"
    }
  ];

  const pressReleases = [
    {
      date: "Aug 13, 2025",
      title: "New Hub Canal Project Successfully Completed",
      description: "KW&SC announces the successful completion of the New Hub Canal project, ahead of schedule.",
      link: "https://www.kwsc.gos.pk/news-and-updates#press-release",
      id: "PR-101"
    },
    {
      date: "July 24, 2025",
      title: "New CEO Appointment Announcement",
      description: "Official announcement regarding the appointment of Ahmed Ali Siddiqui as permanent CEO.",
      link: "https://www.kwsc.gos.pk/news-and-updates#press-release",
      id: "PR-102"
    }
  ];

  const mediaGallery = [
    {
      title: "Hub Canal Inauguration Ceremony",
      description: "Photos from the official inauguration ceremony of the New Hub Canal project",
      type: "Photos",
      img: "/otherImages/bhutto.png"
    },
    {
      title: "Infrastructure Development",
      description: "Visual documentation of ongoing infrastructure development projects",
      type: "Photos",
      img: "/otherImages/infa.png"
    },
    {
      title: "Community Engagement",
      description: "Images from community engagement and development programs",
      type: "Photos",
      img: "/otherImages/comunity.jpeg"
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {loading && <Loader />}

      {/* Hero Section with Cyber Overlay */}
      <section className="relative h-screen sm:h-[60vh] md:h-[70vh] lg:h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex justify-center items-center overflow-hidden">
        {/* Dark overlay to blend with dark theme */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs sm:text-xs md:text-sm font-mono mb-3 sm:mb-4 md:mb-5 lg:mb-6 backdrop-blur-md">
            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 animate-pulse flex-shrink-0" />
            <span>KW&SC INFORMATION GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-transparent bg-clip-text bg-white leading-tight">
            NEWS & UPDATES
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-300 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed">
            Real-time data streams regarding infrastructure developments and corporate achievements.
          </p>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 flex items-center justify-center gap-2 sm:gap-3 leading-tight">
                <Cpu className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
                LATEST TRANSMISSIONS
              </h1>
              <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            </Fade>
          </div>

          {/* Sci-Fi Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="bg-slate-900/80 backdrop-blur-lg p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-white/10 shadow-lg sm:shadow-2xl inline-flex flex-wrap justify-center gap-1 sm:gap-2">
              {[
                { id: 'updates', label: 'Live Updates', icon: <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
                { id: 'press', label: 'Press Releases', icon: <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
                { id: 'media', label: 'Visual Data', icon: <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg font-mono text-xs sm:text-sm tracking-wide transition-all duration-300 border whitespace-nowrap ${activeTab === tab.id ? 'bg-cyan-950/60 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            {activeTab === 'updates' && (
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {latestUpdates.map((update, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={600} delay={index * 100}>
                    <div className="group relative bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 overflow-hidden hover:border-cyan-500/50 transition-all duration-500">
                      {/* Decorative Left Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                            <span className="bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 px-2 sm:px-2.5 md:px-3 py-0.5 rounded text-xs font-mono uppercase tracking-wider flex-shrink-0">
                              {update.type}
                            </span>
                            <span className="text-slate-500 text-xs font-mono flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {update.date}
                            </span>
                            <span className="text-slate-600 text-[9px] sm:text-[10px] font-mono border border-slate-700 px-1 rounded flex-shrink-0">
                              ID: {update.id}
                            </span>
                          </div>

                          <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-200 transition-colors leading-snug">
                            {update.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed text-xs sm:text-sm md:text-sm lg:text-base">
                            {update.description}
                          </p>
                        </div>

                        {/* Interactive Element */}
                        <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-2 md:mt-0">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-950 group-hover:border-cyan-500/50 transition-all duration-300">
                            <Zap className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-slate-500 group-hover:text-cyan-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {activeTab === 'press' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {pressReleases.map((release, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={600} delay={index * 100}>
                    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl lg:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 hover:bg-slate-800/40 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                        <span className="bg-purple-950/30 border border-purple-500/30 text-purple-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold uppercase flex-shrink-0">
                          OFFICIAL RELEASE
                        </span>
                        <span className="text-slate-500 text-xs font-mono flex-shrink-0">
                          {release.date}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-purple-200 transition-colors leading-snug">
                        {release.title}
                      </h3>

                      <p className="text-slate-400 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed flex-grow">
                        {release.description}
                      </p>

                      <Link
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1 sm:gap-2 text-purple-400 font-mono text-xs sm:text-sm hover:text-purple-300 transition-colors group/link"
                      >
                        ACCESS DOCUMENT
                        <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      {/* Subtle grid overlay on card */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {mediaGallery.map((item, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={600} delay={index * 100}>
                    <div className="group relative bg-slate-900 rounded-lg sm:rounded-xl lg:rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-500">

                      {/* Image Container with Scanner Effect */}
                      <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
                        {/* Scanner Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-20 h-[200%] w-full -translate-y-full group-hover:animate-scan pointer-events-none"></div>

                        {/* Placeholder/Actual Image */}
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />

                        <div className="absolute top-2 sm:top-2.5 md:top-3 right-2 sm:right-2.5 md:right-3 z-30">
                          <div className="bg-black/60 backdrop-blur px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-white/20">
                            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                          <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-500 flex-shrink-0" />
                          <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-200 transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}