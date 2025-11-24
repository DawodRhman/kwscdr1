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
        image: "https://placehold.co/800x450/e0f7fa/0891b2?text=K-IV+COMPLETION"
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
        image: "https://placehold.co/800x450/fffbe5/d97706?text=DHABEJI+UPGRADE"
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
        image: "https://placehold.co/800x450/eff6ff/1d4ed8?text=SEWERAGE+REHAB"
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
        image: "https://placehold.co/800x450/f5f3ff/7c3aed?text=DIGITIZATION+PLAN"
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
        image: "https://placehold.co/800x450/fef2f2/dc2626?text=GADANI+SCHEME"
    }
];

// Reusable component for a single project card
const ProjectCard = ({ project, index }) => {
    
    // Define dynamic Tailwind classes based on project color and status
    // Using darker borders and text for the light theme
    const colorClasses = {
        cyan: { border: 'border-cyan-300', shadow: 'shadow-cyan-200', text: 'text-cyan-600', bg: 'bg-cyan-50', progress: 'bg-cyan-500' },
        yellow: { border: 'border-yellow-300', shadow: 'shadow-yellow-200', text: 'text-yellow-600', bg: 'bg-yellow-50', progress: 'bg-yellow-500' },
        blue: { border: 'border-blue-300', shadow: 'shadow-blue-200', text: 'text-blue-600', bg: 'bg-blue-50', progress: 'bg-blue-500' },
        purple: { border: 'border-purple-300', shadow: 'shadow-purple-200', text: 'text-purple-600', bg: 'bg-purple-50', progress: 'bg-purple-500' },
        red: { border: 'border-red-300', shadow: 'shadow-red-200', text: 'text-red-600', bg: 'bg-red-50', progress: 'bg-red-500' },
    };
    
    // Status badges using light theme colors
    const statusBadges = {
        'COMPLETED': 'bg-emerald-500 text-white',
        'ONGOING': 'bg-yellow-500 text-white',
        'PLANNING': 'bg-purple-500 text-white',
        'PAUSED': 'bg-red-500 text-white',
    };

    const currentClasses = colorClasses[project.color] || colorClasses.cyan;
    const currentStatusBadge = statusBadges[project.status] || 'bg-gray-500 text-white';

    return (
        <div 
            className={`relative bg-white rounded-xl overflow-hidden border ${currentClasses.border} shadow-lg transition-all duration-500 flex flex-col h-full cursor-pointer hover:shadow-xl hover:-translate-y-1`}
            style={{
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                transform: 'translateY(20px)',
            }}
        >
            {/* Image & Header */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    // Darkening image on hover slightly for light theme
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/f0f0f0/6b7280?text=Image+Unavailable" }}
                />
                <div className="absolute inset-0 bg-black/10"></div> {/* Soft overlay */}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${currentStatusBadge} shadow`}>
                        {project.status}
                    </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                    <span className={`px-3 py-1 text-xs font-mono uppercase rounded-full border ${currentClasses.border} ${currentClasses.bg} ${currentClasses.text}`}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-grow relative">
                
                <div className="flex items-center gap-3 mb-3">
                    <div className={`text-2xl ${currentClasses.text}`}>
                        {project.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug line-clamp-2">
                        {project.title}
                    </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.scope}
                </p>

                {/* Project Metrics (Physical Progress) */}
                <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                    
                    <div className="flex items-center justify-between text-gray-700 text-sm">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <TrendingUp className="w-4 h-4" />
                            <span>Physical Progress:</span>
                        </div>
                        <span className="font-bold text-gray-900">{project.progress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${currentClasses.progress}`}
                            style={{ width: `${project.progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            
            {/* Footer Link */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
                <a href={`#project-${project.id}`} className={`flex items-center gap-1 text-sm font-bold ${currentClasses.text} hover:text-opacity-80 transition-colors group/link`}>
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
        // Main container uses a light background
        <section className="min-h-screen bg-gray-50 py-24 relative overflow-hidden font-sans selection:bg-blue-100 selection:text-gray-800">
            
            {/* --- Subtle Background Elements (Retained for depth) --- */}
            {/* Soft, light gradient glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-30"></div>
            <div className="absolute inset-0 bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-20">
                    {/* Light Theme Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-semibold mb-6 shadow-sm">
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span>INFRASTRUCTURE DEPLOYMENT STATUS</span>
                    </div>
                    
                    {/* Light Theme Heading */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
                        MAJOR <span className="text-blue-600">PROJECTS</span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Tracking the physical and financial progress of Federal (PSDP) and Provincial (ADP) development schemes.
                    </p>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-80">
                        <div className="relative">
                            {/* Loading spinner uses a darker border for visibility */}
                            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                            </div>
                        </div>
                        <p className="mt-6 text-blue-600 font-medium text-base tracking-wider animate-pulse">LOADING PROJECT DATA...</p>
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
                        className="group relative inline-flex items-center justify-center px-10 py-4 bg-white overflow-hidden rounded-full border border-blue-400 text-blue-600 font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                        <span className="relative flex items-center gap-3">
                            View Historical Project Archives
                            <Clock className="w-5 h-5 transition-transform group-hover:rotate-12" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}