"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { FiDownload, FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- New Search/Filter Component ---
const SearchFilter = React.memo(({ onFilterChange, allTenders }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Extract unique types from open tenders
  const uniqueTypes = useMemo(() => {
    const types = allTenders.map(t => t.category || "General");
    return ["All", ...new Set(types)];
  }, [allTenders]);

  // Notify parent component of filter change using useCallback from parent
  useEffect(() => {
    onFilterChange({ searchTerm, filterType });
  }, [searchTerm, filterType, onFilterChange]);

  return (
    <div className="mb-12">
      <div className="bg-white rounded-xl shadow-lg p-4 border border-blue-200">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="filter-controls"
        >
          <h3 className="text-lg font-bold text-blue-900 flex items-center">
            <FiSearch className="mr-2 text-blue-600" />
            Search & Filter Open Tenders
          </h3>
          {isExpanded ? <FiChevronUp className="w-5 h-5 text-blue-600" /> : <FiChevronDown className="w-5 h-5 text-blue-600" />}
        </button>

        <div id="filter-controls" className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-4 border-t mt-4 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search by Title/Description</label>
                <input
                  type="text"
                  id="search"
                  placeholder="e.g. Water, Pipeline, IT"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Type Filter */}
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
                <select
                  id="type-filter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// --- Main Tenders Component ---
export default function Tenders() {
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("open");
  const [filters, setFilters] = useState({ searchTerm: "", filterType: "All" });
  const [tendersData, setTendersData] = useState(null);
  const [dataError, setDataError] = useState(null);

  // GSAP Loader Effect (kept as is)
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

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tenders");
        if (!response.ok) throw new Error("Failed to fetch Tenders data");
        const payload = await response.json();
        if (isMounted) {
          setTendersData(payload.data);
        }
      } catch (error) {
        console.error("Error fetching Tenders data:", error);
        if (isMounted) setDataError("Unable to load tenders.");
      }
    };
    fetchData();
    return () => { isMounted = false; };
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    // Reset open item when filters change to prevent showing details of a hidden item
    setOpenId(null);
  }, []);

  const allOpenTenders = tendersData?.open || [];
  const closedTenders = tendersData?.closed || [];
  const cancelledTenders = tendersData?.cancelled || [];
  const hero = tendersData?.hero || {
    title: "Tenders",
    subtitle: "Official tender notices, procurement opportunities, and bidding documents",
    backgroundImage: "/karachicharminar.gif",
  };

  // Memoized filtered tenders logic
  const filteredTenders = useMemo(() => {
    const { searchTerm, filterType } = filters;
    const lowerSearchTerm = searchTerm.toLowerCase();

    return allOpenTenders.filter(tender => {
      const matchesSearch =
        (tender.title || "").toLowerCase().includes(lowerSearchTerm) ||
        (tender.summary || "").toLowerCase().includes(lowerSearchTerm);

      const matchesType = filterType === "All" || (tender.category || "General") === filterType;

      return matchesSearch && matchesType;
    });
  }, [filters, allOpenTenders]);

  // Tenders Card Component (Compact Square Design)
  const TenderCard = ({ item, tabName, index }) => {
    const isExpanded = tabName === "open" && openId === item.id;
    const isClosedOrCancelled = tabName !== "open";
    const status = isClosedOrCancelled ? item.status : (item.category || "Open"); // Use status for closed/cancelled

    const typeClasses = {
      Procurement: "bg-green-100 text-green-800 border-green-400",
      Construction: "bg-orange-100 text-orange-800 border-orange-400",
      Services: "bg-purple-100 text-purple-800 border-purple-400",
      Maintenance: "bg-yellow-100 text-yellow-800 border-yellow-400",
      CLOSED: "bg-red-100 text-red-800 border-red-400",
      CANCELLED: "bg-gray-100 text-gray-700 border-gray-400",
      Open: "bg-blue-100 text-blue-800 border-blue-400",
    };

    const cardClasses = typeClasses[status] || typeClasses.Open;
    const chipColor = cardClasses.split(' ').slice(0, 2).join(' '); // Extracts bg- and text- classes

    return (
      <Fade key={item.id || index} direction="up" triggerOnce duration={600} delay={index * 50}>
        <div className={`bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow border-t-4 ${cardClasses.split(' ')[3]}`}>
          {/* Header/Info */}
          <div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${chipColor} mb-3 inline-block`}>
              {status}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" title={item.title}>{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
          </div>

          {/* Footer/Actions */}
          <div className="mt-auto pt-3">
            <span className="text-gray-500 text-xs block mb-3">
              {tabName === "open" ? "Due Date:" : "Closed/Cancelled Date:"} **{new Date(item.closingAt || item.publishedAt).toLocaleDateString()}**
            </span>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              {tabName === "open" ? (
                <button
                  onClick={() => setOpenId(isExpanded ? null : item.id)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`details-${item.id}`}
                >
                  {isExpanded ? "Hide Details" : "View More"}
                  {isExpanded ? <FiChevronUp className="w-4 h-4 ml-1" /> : <FiChevronDown className="w-4 h-4 ml-1" />}
                </button>
              ) : (
                <span className="text-sm text-gray-500 italic">
                  {tabName === "closed" ? "Tender Closed" : "Tender Cancelled"}
                </span>
              )}

              {/* Download button only for open tenders */}
              {tabName === "open" && item.attachments && item.attachments.length > 0 && (
                <Link href={item.attachments[0].url || "#"} className="text-gray-400 hover:text-green-600 transition-colors ml-4" title="Download Tender Documents">
                  <FiDownload className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Expanded Details (For Open Tenders Only) */}
          {isExpanded && (
            <div id={`details-${item.id}`} className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg font-medium">{item.summary}</p>
              {item.attachments && item.attachments.length > 0 && (
                 <div className="mt-2">
                    <h4 className="text-xs font-bold text-gray-600 mb-1">Documents:</h4>
                    <ul className="list-disc list-inside text-xs text-blue-600">
                        {item.attachments.map(att => (
                            <li key={att.id}><a href={att.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{att.label || "Download"}</a></li>
                        ))}
                    </ul>
                 </div>
              )}
            </div>
          )}
        </div>
      </Fade>
    );
  };

  return (
    <>
      {loading && <Loader />}

      {/* Hero Section */}
      <section className="relative h-screen transition-opacity duration-700 bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-extrabold tracking-tight">{hero.title}</h2>
            <p className="mt-6 text-[3.5vh] font-light">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">Tenders & Procurement</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Official tender notices, procurement opportunities, and bidding documents
              </p>
            </Fade>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-xl border border-blue-200">
              <button
                onClick={() => {
                  setActiveTab("open");
                  setOpenId(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "open"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Open Tenders 
              </button>
              <button
                onClick={() => {
                  setActiveTab("closed");
                  setOpenId(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "closed"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Closed Tenders
              </button>
              <button
                onClick={() => {
                  setActiveTab("cancelled");
                  setOpenId(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "cancelled"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                Cancelled Tenders 
              </button>
            </div>
          </div>

          {/* Search Filter (Only for Open Tenders tab) */}
          {activeTab === "open" && (
            <SearchFilter
              onFilterChange={handleFilterChange}
              allTenders={allOpenTenders} // Pass the full list to extract types
            />
          )}

          {/* Tab Content - Compact Grid Display */}
          <div className="max-w-6xl mx-auto">
            {activeTab === "open" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTenders.length > 0 ? (
                  filteredTenders.map((item, i) => (
                    <TenderCard key={item.id} item={item} tabName="open" index={i} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 bg-white rounded-xl shadow-lg">
                    <p className="text-xl text-gray-500">No Open Tenders match your current search criteria.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "closed" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {closedTenders.map((item, i) => (
                  <TenderCard key={item.id} item={{ ...item, status: "CLOSED" }} tabName="closed" index={i} />
                ))}
              </div>
            )}

            {activeTab === "cancelled" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cancelledTenders.map((item, i) => (
                  <TenderCard key={item.id} item={{ ...item, status: "CANCELLED" }} tabName="cancelled" index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}