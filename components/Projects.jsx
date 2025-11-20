"use client";
import React, { useState, useEffect } from "react";
import { 
  Waves, 
  Zap, 
  Droplet, 
  Cpu, 
  HardHat, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Activity
} from "lucide-react";

// --- Mock Data derived from KW&SC Projects Page (PSDP/ADP Schemes) ---
// Note: The 'cost' field has been removed from all project objects.
const projectsData = [
    {
        id: "PSDP-1",
        title: "K-IV Water Supply Project (Phase-I)",
        category: "Federal PSDP",
        status: "COMPLETED",
        progress: 100,
        scope: "Add 260 MGD of water to the Karachi system. Includes components like bulk water conveyance, pumping stations, and distribution network improvements.",
        icon: <Waves />,
        color: "cyan",
        image: "https://placehold.co/800x450/0f172a/06b6d4?text=K-IV+COMPLETION"
    },
    {
        id: "PSDP-2",
        title: "Dhabeji Pumping Station Rehabilitation",
        category: "Federal PSDP",
        status: "ONGOING",
        progress: 85,
        scope: "Rehabilitation and upgrade of pumping machinery at Dhabeji to ensure optimal transmission capacity and reduce downtime.",
        icon: <Zap />,
        color: "yellow",
        image: "https://placehold.co/800x450/0f172a/facc15?text=DHABEJI+UPGRADE"
    },
    {
        id: "ADP-1",
        title: "Sewerage System Overhaul (District East)",
        category: "Provincial ADP",
        status: "ONGOING",
        progress: 55,
        scope: "Replacement of old and damaged sewage lines and construction of new disposal structures in District East.",
        icon: <Droplet />,
        color: "blue",
        image: "https://placehold.co/800x450/0f172a/3b82f6?text=SEWERAGE+REHAB"
    },
    {
        id: "ADP-2",
        title: "Water Tanker Service Digitization",
        category: "Provincial ADP",
        status: "PLANNING",
        progress: 5,
        scope: "Develop a centralized digital system for managing tanker requests, tracking, and billing to enhance transparency and efficiency.",
        icon: <Cpu />,
        color: "purple",
        image: "https://placehold.co/800x450/0f172a/a855f7?text=DIGITIZATION+PLAN"
    },
    {
        id: "ADP-3",
        title: "Gadani Bulk Water Supply Scheme",
        category: "Provincial ADP",
        status: "PAUSED",
        progress: 20,
        scope: "Construction of a new bulk water line to connect Gadani to the main KW&SC network.",
        icon: <HardHat />,
        color: "red",
        image: "https://placehold.co/800x450/0f172a/ef4444?text=GADANI+SCHEME"
    }
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Define dynamic Tailwind classes based on project color and status
    const colorClasses = {
        cyan: { border: 'border-cyan-500/50', shadow: 'shadow-cyan-400/20', text: 'text-cyan-400', bg: 'bg-cyan-950/30', progress: 'bg-cyan-500' },
        yellow: { border: 'border-yellow-500/50', shadow: 'shadow-yellow-400/20', text: 'text-yellow-400', bg: 'bg-yellow-950/30', progress: 'bg-yellow-500' },
        blue: { border: 'border-blue-500/50', shadow: 'shadow-blue-400/20', text: 'text-blue-400', bg: 'bg-blue-950/30', progress: 'bg-blue-500' },
        purple: { border: 'border-purple-500/50', shadow: 'shadow-purple-400/20', text: 'text-purple-400', bg: 'bg-purple-950/30', progress: 'bg-purple-500' },
        red: { border: 'border-red-500/50', shadow: 'shadow-red-400/20', text: 'text-red-400', bg: 'bg-red-950/30', progress: 'bg-red-500' },
    };
    
    const statusBadges = {
        'COMPLETED': 'bg-emerald-600/70 border-emerald-400/50',
        'ONGOING': 'bg-yellow-600/70 border-yellow-400/50',
        'PLANNING': 'bg-purple-600/70 border-purple-400/50',
        'PAUSED': 'bg-red-600/70 border-red-400/50',
    };

    const currentClasses = colorClasses[project.color] || colorClasses.cyan;
    const currentStatusBadge = statusBadges[project.status] || 'bg-slate-600/70 border-slate-400/50';

    return (
        <div 
            className={`relative bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border ${currentClasses.border} transition-all duration-500 flex flex-col h-full cursor-pointer hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]`}
            style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                transform: 'translateY(20px)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image & Header */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-10">
                    <span className={`px-3 py-1 text-xs font-bold text-white uppercase rounded border ${currentStatusBadge}`}>
                        {project.status}
                    </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                    <span className={`px-3 py-1 text-xs font-mono uppercase rounded ${currentClasses.bg} border ${currentClasses.border} ${currentClasses.text} backdrop-blur-sm`}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="flex items-center gap-3 mb-3">
                    <div className={`${currentClasses.text}`}>
                        {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug line-clamp-2">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.scope}
                </p>

                {/* Project Metrics (Only Physical Progress remains) */}
                <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
                    
                    <div className="flex items-center justify-between text-slate-300 text-sm">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <TrendingUp className="w-4 h-4" />
                            <span>Physical Progress:</span>
                        </div>
                        <span className="font-bold text-white">{project.progress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
                        <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${currentClasses.progress}`}
                            style={{ width: `${project.progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            
            {/* Footer Link */}
            <div className={`p-4 border-t border-white/5 flex justify-end`}>
                <a href={`#project-${project.id}`} className={`flex items-center gap-1 text-sm font-bold ${currentClasses.text} hover:opacity-80 transition-colors group/link`}>
                    VIEW DETAILS
                    <CheckCircle className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
            </div>
        </div>
    );
};


export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // --- Custom Styles for Consistency ---
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            /* Add the futuristic grid background CSS from page.js or NewsUpdates.jsx */
            .tech-grid-bg {
                background-image: 
                  linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
                background-size: 40px 40px;
                mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
              }
        `;
        document.head.appendChild(style);

        // Simulate data loading delay
        const timer = setTimeout(() => {
            setProjects(projectsData);
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
            
            {/* 1. Grid Background Overlay */}
            <div className="absolute inset-0 tech-grid-bg opacity-10 pointer-events-none"></div>
            
            {/* 2. Glowing Nebula Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>

            {/* 3. Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span>INFRASTRUCTURE DEPLOYMENT STATUS</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] tracking-tight mb-6">
                        MAJOR <span className="text-cyan-400">PROJECTS</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
                        Tracking the physical and financial progress of Federal (PSDP) and Provincial (ADP) development schemes.
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
                        <p className="mt-6 text-cyan-500 font-mono text-sm tracking-widest animate-pulse">AWAITING PROJECT DATA...</p>
                    </div>
                ) : (
                    /* Projects Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((item, index) => (
                            <ProjectCard key={item.id} project={item} index={index} />
                        ))}
                    </div>
                )}

                {/* Bottom Call to Action */}
                <div className="text-center mt-24">
                    <a
                        href="https://www.kwsc.gos.pk/our-projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 overflow-hidden rounded-lg border border-cyan-500/50 text-white font-bold uppercase tracking-wider hover:border-cyan-400 transition-all duration-300"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-500 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative flex items-center gap-3">
                            View Historical Project Archives
                            <Clock className="w-5 h-5 group-hover:animate-bounce" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}