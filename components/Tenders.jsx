"use client";
import React, { useState, useEffect } from "react";
import { FileText, Download, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Tenders() {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTenders() {
      try {
        const response = await fetch("/api/tenders");
        if (!response.ok) {
          throw new Error("Failed to fetch tenders");
        }
        const json = await response.json();
        const data = json.data || {};
        
        // The API returns categorized tenders (open, closed, cancelled)
        const allTenders = [
          ...(data.open || []),
          ...(data.closed || []),
          ...(data.cancelled || [])
        ];
        
        setTenders(allTenders);
      } catch (err) {
        console.error("Error fetching tenders:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTenders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading tenders: {error}</p>
      </div>
    );
  }

  if (tenders.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No active tenders found.</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tenders.map((tender) => (
          <div 
            key={tender.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tender.status === 'OPEN' ? 'bg-green-100 text-green-800' : 
                  tender.status === 'CLOSED' ? 'bg-red-100 text-red-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {tender.status || 'Active'}
                </span>
                <span className="text-xs text-gray-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(tender.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                {tender.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {tender.description || tender.summary || "No description available."}
              </p>
              
              {tender.tenderNumber && (
                <div className="text-xs text-gray-500 mb-4">
                  Ref: <span className="font-mono bg-gray-100 px-1 rounded">{tender.tenderNumber}</span>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 mt-auto">
              <div className="flex flex-col gap-2">
                {tender.attachments && tender.attachments.length > 0 ? (
                  tender.attachments.map((att, idx) => (
                    <a 
                      key={idx}
                      href={att.url || att.mediaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm font-medium"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Document
                    </a>
                  ))
                ) : (
                   <button disabled className="flex items-center justify-center w-full py-2 px-4 bg-gray-300 text-gray-500 rounded cursor-not-allowed text-sm font-medium">
                      <FileText className="w-4 h-4 mr-2" />
                      No Documents
                   </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
