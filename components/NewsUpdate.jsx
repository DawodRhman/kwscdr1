'use client';
import React, { useState, useEffect } from "react";
import { Zap, Droplet, Waves, Users, HardHat, Calendar, Tag, ChevronRight, Activity, Cpu } from "lucide-react";

// --- Mock Data with Futuristic/Tech Spin ---
const mockNewsData = [
  {
    id: 1,
    title: "K-IV Project: Phase I Operational Status Confirmed",
    date: "2025-11-15",
    category: "INFRASTRUCTURE",
    summary: "System diagnostics confirm Phase I of the K-IV water supply grid is fully operational, injecting 260 MGD into the primary distribution network. Pressure levels are stable.",
    icon: <HardHat className="w-6 h-6 text-cyan-400" />,
    imagePlaceholder: "https://placehold.co/800x450/0f172a/06b6d4?text=K-IV+OPERATIONAL",
    status: "ONLINE"
  },
  {
    id: 2,
    title: "E-Billing Portal V2.0 Deployed",
    date: "2025-10-28",
    category: "DIGITAL SERVICES",
    summary: "The upgraded digital payment gateway is live. New features include real-time consumption analytics, instant ledger updates, and biometric login support for verified consumers.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    imagePlaceholder: "https://placehold.co/800x450/0f172a/a855f7?text=PORTAL+V2.0",
    status: "ACTIVE"
  },
  {
    id: 3,
    title: "Sewerage Network Overhaul: Sector 4 & 7",
    date: "2025-10-10",
    category: "MAINTENANCE",
    summary: "Automated dredging units have been deployed in Lyari and Gadap. Predictive AI modeling suggests a 40% efficiency increase in flow rates post-rehabilitation.",
    icon: <Waves className="w-6 h-6 text-blue-400" />,
    imagePlaceholder: "https://placehold.co/800x450/0f172a/3b82f6?text=NETWORK+OVERHAUL",
    status: "IN PROGRESS"
  },
  {
    id: 4,
    title: "Industrial Water Conservation Protocol",
    date: "2025-09-22",
    category: "SUSTAINABILITY",
    summary: "Smart metering mandates are now in effect for all industrial zones. Real-time monitoring will detect unauthorized usage patterns and optimize resource allocation.",
    icon: <Droplet className="w-6 h-6 text-emerald-400" />,
    imagePlaceholder: "https://placehold.co/800x450/0f172a/10b981?text=CONSERVATION+PROTOCOL",
    status: "MANDATORY"
  },
  {
    id: 5,
    title: "Community Outreach: Clean Water Initiative",
    date: "2025-09-01",
    category: "PUBLIC RELATIONS",
    summary: "KW&SC technical teams conducted a seminar on next-gen filtration methods. Attendees were briefed on smart-home leak detection systems and water quality standards.",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    imagePlaceholder: "https://placehold.co/800x450/0f172a/ec4899?text=OUTREACH+INITIATIVE",
    status: "COMPLETED"
  },
];

const NewsCard = ({ news, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${index * 0.15}s`,
        opacity: 0,
        transform: 'translateY(20px)',
        boxShadow: isHovered ? '0 0 30px -5px rgba(6, 182, 212, 0.15)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tech Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
        {/* Scanner Line Effect */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent z-20 h-[200%] w-full -translate-y-full ${isHovered ? 'animate-scan' : ''}`}></div>
        
        <img
          src={news.imagePlaceholder}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        
        {/* HUD Badge */}
        <div className="absolute top-3 right-3 z-30">
          <div className="bg-black/70 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-[10px] tracking-widest font-mono px-2 py-1 rounded flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {news.status}
          </div>
        </div>
      </div>

      {/* Content Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-3 h-3 text-slate-400" />
          <span className="text-xs font-mono text-cyan-500 tracking-widest uppercase">{news.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-200 transition-colors">
          {news.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-slate-300 transition-colors">
          {news.summary}
        </p>

        {/* Tech Footer */}
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Calendar className="w-3 h-3" />
            {news.date}
          </div>
          
          <a href="#" className="flex items-center gap-1 text-sm font-bold text-cyan-500 hover:text-cyan-300 transition-colors group/link">
            ACCESS DATA
            <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function NewsUpdates() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inject custom keyframes for animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      .animate-scan {
        animation: scan 2s linear infinite;
      }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setNews(mockNewsData);
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#020617] py-20 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* --- FUTURISTIC BACKGROUND ELEMENTS --- */}
      
      {/* 1. Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
      {/* 2. Glowing Nebula Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none mix-blend-screen"></div>

      {/* 3. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>LIVE SYSTEM UPDATES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tracking-tight mb-6">
            KW&SC <span className="text-cyan-400">LATEST NEWS</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            Tracking infrastructure developments, digital transformation, and utility metrics in real-time across the Karachi metropolis.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-80">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <p className="mt-6 text-cyan-500 font-mono text-sm tracking-widest animate-pulse">INITIALIZING DATA STREAM...</p>
          </div>
        ) : (
          /* News Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))}
          </div>
        )}

       
      </div>

      {/* Floating Feedback Node */}
      <a
        href="https://complain.kwsc.gos.pk"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute inset-0 bg-red-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>
        <div className="relative bg-slate-900 border border-red-500/50 text-red-400 p-4 rounded-full shadow-2xl hover:bg-red-950 hover:text-white hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
          <Zap className="w-6 h-6" />
        </div>
      </a>

    </section>
  );
}