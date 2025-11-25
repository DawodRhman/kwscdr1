"use client";
import React, { useEffect, useState } from 'react';
import { ChevronRight, Play, Sun, Moon, X } from 'lucide-react';

export default function MediaGallery({ items = [] }) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleTheme = () => setIsDarkTheme(prev => !prev);

    // Theme-dependent classes
    const themeClasses = {
        dark: {
            mainBg: "bg-[#020617]",
            headerAccent: "text-cyan-500",
            headerText: "text-white",
            subtitleText: "text-slate-400",
            cardBg: "bg-slate-800/60 border-slate-700",
            cardText: "text-white",
            cardTitle: "text-cyan-400",
            hoverShadow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]",
            carouselBg: "bg-gradient-to-r from-[#020617] via-transparent to-[#020617]",
        },
        light: {
            mainBg: "bg-gray-50",
            headerAccent: "text-blue-600",
            headerText: "text-gray-900",
            subtitleText: "text-gray-600",
            cardBg: "bg-white border-gray-200",
            cardText: "text-gray-800",
            cardTitle: "text-blue-600",
            hoverShadow: "hover:shadow-xl hover:shadow-blue-100",
            carouselBg: "bg-gradient-to-r from-gray-50 via-transparent to-gray-50",
        }
    };
    const t = isDarkTheme ? themeClasses.dark : themeClasses.light;

    // Inject custom CSS for carousel animation
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes slide-left-loop {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .carousel-track {
                animation: slide-left-loop 60s linear infinite;
            }
            .carousel-track:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const isVideo = (item) => {
        return item.mimeType?.startsWith('video/') || item.imageUrl?.match(/\.(mp4|webm|ogg)$/i);
    };

    // Duplicate items for infinite loop if we have enough items
    const displayItems = items.length > 0 ? [...items, ...items, ...items, ...items] : [];

    if (!items || items.length === 0) return null;

    return (
        <section className={`${t.mainBg} py-20 md:py-32 relative overflow-hidden transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Theme Toggle Button */}
                <div className="absolute top-0 right-6 md:right-0">
                    <button
                        onClick={toggleTheme}
                        className={`p-3 rounded-full ${isDarkTheme ? 'bg-cyan-500 text-white' : 'bg-blue-600 text-white'} shadow-lg transition-all duration-300 hover:scale-105`}
                        title={isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
                    >
                        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16 pt-8">
                    <h2 className={`text-xl font-mono uppercase ${t.headerAccent} tracking-widest mb-3 transition-colors duration-500`}>
                        Media Gallery
                    </h2>
                    <p className={`text-4xl md:text-5xl font-extrabold ${t.headerText} transition-colors duration-500`}>
                        KW&SC <span className={`${t.headerAccent}`}>In Action</span>
                    </p>
                    <p className={`mt-4 text-lg max-w-2xl mx-auto ${t.subtitleText} transition-colors duration-500`}>
                        Explore our latest projects, events, and initiatives through our media lens.
                    </p>
                </div>
            </div>

            {/* Moving Gallery / Carousel */}
            <div className="relative w-full overflow-hidden py-8">
                {/* Overlay gradients for fade effect at edges */}
                <div className={`absolute inset-y-0 left-0 w-32 ${t.carouselBg} z-20 pointer-events-none`}></div>
                <div className={`absolute inset-y-0 right-0 w-32 ${t.carouselBg} z-20 rotate-180 pointer-events-none`}></div>

                <div className="carousel-track flex items-center gap-6 px-8" style={{ width: 'max-content' }}>
                    {displayItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            onClick={() => setSelectedItem(item)}
                            className={`flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden border ${t.cardBg} shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${t.hoverShadow} cursor-pointer group`}
                        >
                            {isVideo(item) ? (
                                <div className="w-full h-full bg-black flex items-center justify-center relative">
                                    <video src={item.imageUrl} className="w-full h-full object-cover opacity-80" muted />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full group-hover:scale-110 transition-transform">
                                            <Play size={24} className="text-white fill-white" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
                                {item.albumSlug && <p className="text-cyan-400 text-xs">{item.albumSlug}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={32} />
                    </button>
                    
                    <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
                        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
                            {isVideo(selectedItem) ? (
                                <video 
                                    src={selectedItem.imageUrl} 
                                    controls 
                                    autoPlay 
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <img 
                                    src={selectedItem.imageUrl} 
                                    alt={selectedItem.title} 
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                            {selectedItem.caption && <p className="text-slate-400 mt-1">{selectedItem.caption}</p>}
                        </div>
                    </div>
                </div>
            )}

            <div className="text-center mt-12 z-10 relative">
                <a
                    href="/media"
                    className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold ${isDarkTheme ? 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-xl' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl'} transition-all duration-300 hover:scale-105`}
                >
                    View Full Gallery
                    <ChevronRight size={20} />
                </a>
            </div>
        </section>
    );
}
