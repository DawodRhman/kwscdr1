"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { FiDownload, FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- Dummy Data Expansion for 10+ items ---
const allOpenTenders = [
  {
    id: 1,
    title: "Supply of Water Treatment Chemicals",
    date: "Aug 20, 2025",
    description: "KW&SC invites suppliers for the provision of high-grade water treatment chemicals.",
    fullDetails:
      "This tender includes supply, delivery, and testing of certified water treatment chemicals. Bidders must be registered vendors with relevant experience and ISO certification. Delivery timeline is critical.",
    type: "Procurement",
    downloadLink: "#download-1",
  },
  {
    id: 2,
    title: "Pipeline Rehabilitation Works - Zone B",
    date: "Aug 15, 2025",
    description: "Tender for pipeline repair and rehabilitation in designated Zone B.",
    fullDetails:
      "Rehabilitation includes excavation, replacement of damaged sections (up to 500m total), and pressure testing. All contractors must follow KW&SC engineering standards and have prior municipal work experience.",
    type: "Construction",
    downloadLink: "#download-2",
  },
  {
    id: 3,
    title: "IT System Upgrade & Maintenance",
    date: "Aug 10, 2025",
    description: "Upgrade of central billing and customer management software.",
    fullDetails: "Scope includes migration to a new cloud-based system, staff training, and 3 years of post-implementation maintenance support.",
    type: "Services",
    downloadLink: "#download-3",
  },
  {
    id: 4,
    title: "Bulk Meter Supply & Installation",
    date: "Aug 05, 2025",
    description: "Procurement and installation of 500 industrial-grade flow meters.",
    fullDetails: "Tender for DN300 to DN600 electromagnetic flow meters. Supply must meet international standards. Installation services are mandatory.",
    type: "Procurement",
    downloadLink: "#download-4",
  },
  {
    id: 5,
    title: "Security & Guard Services Contract",
    date: "July 30, 2025",
    description: "Contract for armed and unarmed security personnel for all facilities.",
    fullDetails: "Requires a licensed security firm to provide 24/7 coverage for pumping stations, offices, and reservoirs. Must comply with all local security regulations.",
    type: "Services",
    downloadLink: "#download-5",
  },
  {
    id: 6,
    title: "Office Stationery and Supplies",
    date: "July 25, 2025",
    description: "Annual supply tender for all general office consumables.",
    fullDetails: "Includes paper, printer cartridges, general stationery, and cleaning supplies for a period of 12 months, delivered to 4 main distribution points.",
    type: "Procurement",
    downloadLink: "#download-6",
  },
  {
    id: 7,
    title: "Vehicle Fleet Maintenance",
    date: "July 20, 2025",
    description: "Maintenance and repair contract for KW&SC's vehicle fleet (light and heavy vehicles).",
    fullDetails: "Scope includes routine servicing, accidental repair, and parts replacement for over 150 vehicles. Bidder must have a fully equipped workshop.",
    type: "Maintenance",
    downloadLink: "#download-7",
  },
  {
    id: 8,
    title: "Reservoir Cleaning and Desilting",
    date: "July 15, 2025",
    description: "Specialized services for cleaning and desilting two main water reservoirs.",
    fullDetails: "Work must be conducted during scheduled shutdown periods, utilizing non-hazardous methods and adhering to strict environmental guidelines.",
    type: "Construction",
    downloadLink: "#download-8",
  },
  {
    id: 9,
    title: "HR Consultancy for Training",
    date: "July 10, 2025",
    description: "Consultancy services for staff development and professional training programs.",
    fullDetails: "Design and deliver a series of workshops on modern management techniques and public service ethics for mid-to-senior level staff.",
    type: "Services",
    downloadLink: "#download-9",
  },
  {
    id: 10,
    title: "Civil Works for New Office Block",
    date: "July 01, 2025",
    description: "Tender for the foundation and structural civil works of a new administrative building.",
    fullDetails: "Phase 1 construction involving site preparation, foundation laying, and erection of the main structure up to the roof slab. Compliance with local building codes is mandatory.",
    type: "Construction",
    downloadLink: "#download-10",
  },
];

const closedTenders = [
  {
    id: 11,
    title: "Electrical Maintenance Services",
    date: "July 10, 2025",
    description: "Closed tender for maintenance of electrical systems across facilities.",
    type: "Maintenance",
    status: "Closed",
  },
  {
    id: 12,
    title: "Machinery Equipment Supply",
    date: "June 22, 2025",
    description: "Closed tender for industrial machinery procurement.",
    type: "Procurement",
    status: "Closed",
  },
];

const cancelledTenders = [
  {
    id: 13,
    title: "Drilling Equipment Purchase",
    date: "May 15, 2025",
    description: "Tender cancelled due to revised project scope and budgetary constraints.",
    type: "Procurement",
    status: "Cancelled",
  },
  {
    id: 14,
    title: "Water Quality Lab Upgrade",
    date: "Apr 01, 2025",
    description: "Tender cancelled; process will be re-initiated later with new specifications.",
    type: "Construction",
    status: "Cancelled",
  },
];
// --- End Dummy Data ---

// --- New Search/Filter Component ---
const SearchFilter = React.memo(({ onFilterChange, allTenders }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Extract unique types from open tenders
  const uniqueTypes = useMemo(() => {
    const types = allTenders.map(t => t.type);
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
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Type</label>
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

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    // Reset open item when filters change to prevent showing details of a hidden item
    setOpenId(null);
  }, []);

  // Memoized filtered tenders logic
  const filteredTenders = useMemo(() => {
    const { searchTerm, filterType } = filters;
    const lowerSearchTerm = searchTerm.toLowerCase();

    return allOpenTenders.filter(tender => {
      const matchesSearch =
        tender.title.toLowerCase().includes(lowerSearchTerm) ||
        tender.description.toLowerCase().includes(lowerSearchTerm);

      const matchesType = filterType === "All" || tender.type === filterType;

      return matchesSearch && matchesType;
    });
  }, [filters]);

  // Tenders Card Component (Compact Square Design)
  const TenderCard = ({ item, tabName, index }) => {
    const isExpanded = tabName === "open" && openId === item.id;
    const isClosedOrCancelled = tabName !== "open";
    const status = isClosedOrCancelled ? item.status : item.type; // Use status for closed/cancelled

    const typeClasses = {
      Procurement: "bg-green-100 text-green-800 border-green-400",
      Construction: "bg-orange-100 text-orange-800 border-orange-400",
      Services: "bg-purple-100 text-purple-800 border-purple-400",
      Maintenance: "bg-yellow-100 text-yellow-800 border-yellow-400",
      Closed: "bg-red-100 text-red-800 border-red-400",
      Cancelled: "bg-gray-100 text-gray-700 border-gray-400",
    };

    const cardClasses = typeClasses[status] || typeClasses.Cancelled;
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
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
          </div>

          {/* Footer/Actions */}
          <div className="mt-auto pt-3">
            <span className="text-gray-500 text-xs block mb-3">
              {tabName === "open" ? "Due Date:" : "Closed/Cancelled Date:"} **{item.date}**
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
              {tabName === "open" && (
                <Link href={item.downloadLink} className="text-gray-400 hover:text-green-600 transition-colors ml-4" title="Download Tender Documents">
                  <FiDownload className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Expanded Details (For Open Tenders Only) */}
          {isExpanded && (
            <div id={`details-${item.id}`} className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg font-medium">{item.fullDetails}</p>
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
      <section className="relative h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex justify-center items-center">
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-extrabold tracking-tight">Tenders</h2>
            <p className="mt-6 text-[3.5vh] font-light">Official tender notices, procurement opportunities, and bidding documents</p>
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
                  <TenderCard key={item.id} item={{ ...item, status: "Closed" }} tabName="closed" index={i} />
                ))}
              </div>
            )}

            {activeTab === "cancelled" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cancelledTenders.map((item, i) => (
                  <TenderCard key={item.id} item={{ ...item, status: "Cancelled" }} tabName="cancelled" index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}