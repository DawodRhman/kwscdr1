"use client";
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function MediaGrid({ items = [] }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const isVideo = (item) => {
        return item.mimeType?.startsWith('video/') || item.imageUrl?.match(/\.(mp4|webm|ogg)$/i);
    };

    if (!items || items.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-slate-500">No media items found.</p>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        onClick={() => setSelectedItem(item)}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-slate-100 shadow-sm transition-all hover:shadow-md"
                    >
                        {isVideo(item) ? (
                            <div className="h-full w-full bg-slate-900 relative">
                                <video src={item.imageUrl} className="h-full w-full object-cover opacity-80" muted />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-transform group-hover:scale-110">
                                        <Play size={24} className="fill-white text-white" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                            <h3 className="truncate text-sm font-bold text-white">{item.title}</h3>
                            {item.caption && <p className="truncate text-xs text-slate-300">{item.caption}</p>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <button 
                        onClick={() => setSelectedItem(null)}
                        className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <X size={32} />
                    </button>
                    
                    <div className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
                            {isVideo(selectedItem) ? (
                                <video 
                                    src={selectedItem.imageUrl} 
                                    controls 
                                    autoPlay 
                                    className="h-full w-full object-contain"
                                />
                            ) : (
                                <img 
                                    src={selectedItem.imageUrl} 
                                    alt={selectedItem.title} 
                                    className="h-full w-full object-contain"
                                />
                            )}
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                            {selectedItem.caption && <p className="mt-1 text-slate-400">{selectedItem.caption}</p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
