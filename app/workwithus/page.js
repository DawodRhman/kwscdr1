"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Globe, FileText, Handshake, TrendingUp, Cpu } from "lucide-react";

export default function WorkWithUs() {
    
  // --- Inject custom CSS for the sci-fi background grid ---
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

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // --- Content Data ---
  const sections = [
    {
      id: "licenses",
      icon: FileText,
      title: "Licensing & Permits",
      subtitle: "Regulatory Framework for Water and Sewerage Operations",
      description: "KW&SC facilitates a streamlined process for obtaining necessary licenses and permits for bulk water usage, commercial water connections, hydrant operations, and effluent discharge. Our digital platform ensures transparency and efficiency, supporting compliant and sustainable operations within Karachi.",
      details: [
        "Bulk Water Supply Licenses (Industrial/Commercial)",
        "Water Tanker Operation Permits",
        "Sewerage Effluent Discharge NOCs",
        "Public Hydrant Authorization and Management",
      ],
      cta: "Apply for a License",
      pdfLink: "https://www.kwsc.gos.pk/assets/documents/DOC-20240409-WA0320..pdf",
      pdfCta: "View Subsoil License PDF",
    },
    {
      id: "collaborations",
      icon: Handshake,
      title: "National & International Collaborations",
      subtitle: "Global Partnerships for Infrastructure Excellence",
      description: "We actively collaborate with national bodies (e.g., planning commission, local government) and international development banks (e.g., World Bank, ADB) and sister utilities globally. These partnerships drive technology transfer, capacity building, and secure critical funding for major infrastructure projects.",
      details: [
        "Technology Exchange Programs (Germany, Japan)",
        "Funding and Technical Assistance (ADB, World Bank)",
        "Joint Venture on Desalination Plants",
        "Research and Development with Local Universities",
      ],
      cta: "View Partnership Portfolio",
    },
    {
      id: "investment",
      icon: TrendingUp,
      title: "Investment Opportunities",
      subtitle: "Strategic Avenues for Private Sector Investment",
      description: "KW&SC offers high-impact investment opportunities in vital city infrastructure. Focus areas include the development of Build-Operate-Transfer (BOT) and Public-Private Partnership (PPP) models for wastewater treatment, bulk water transportation, and smart metering systems.",
      details: [
        "Wastewater Treatment Plant PPP Schemes",
        "K-IV Bulk Water Supply Project Phases",
        "Smart Metering and Billing System Deployment",
        "Pipeline Replacement and Network Rehabilitation",
      ],
      cta: "Explore Investment Models",
    },
  ];

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* --- 1. Hero Section: Futuristic Header (MERGED BANNER) --- */}
      <section className="relative h-[60vh] md:h-[70vh] transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex justify-center items-center overflow-hidden">
        
        {/* Dark overlay to blend with dark theme */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        
        {/* Cyber Grid Overlay (Adopted from user's code) */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] max-w-7xl mx-auto text-center px-6 pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-xl shadow-cyan-500/10"
            >
              <Cpu className="w-4 h-4 text-cyan-300" />
              <span>STRATEGIC ENGAGEMENT PLATFORM</span>
            </motion.div>
            
            <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 
                           text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 
                           drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              Collaborate on Karachi's Infrastructure
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light">
              We seek visionary partners for regulatory compliance, funding, and technology transfer to build resilient water and sanitation systems.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      {/* --- 2. Main Content: Three Sections Grid --- */}
      <section className="py-20 md:py-32 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-1 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <section.icon className="w-8 h-8 text-cyan-400 mr-4 p-1.5 rounded-lg bg-cyan-900/50 shadow-md shadow-cyan-500/20 group-hover:bg-cyan-800/50 transition-colors" />
                    <h2 className="text-2xl font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">{section.title}</h2>
                  </div>

                  <p className="text-sm font-mono uppercase text-cyan-400 mb-4 tracking-wider border-b border-white/10 pb-4">
                    {section.subtitle}
                  </p>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {section.description}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-200 mb-3">Key Focus Areas:</h3>
                  <ul className="space-y-2 mb-8">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-slate-400 text-sm">
                        <span className="text-cyan-500 mr-2 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3">
                  {/* Primary CTA (Cyan Gradient) */}
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 
                               bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-bold rounded-xl transition-all duration-300 
                               hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/40"
                  >
                    {section.cta}
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>

                  {/* Secondary PDF Link (Bordered Cyan) */}
                  {section.pdfLink && (
                      <a
                          href={section.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl transition-all duration-300 hover:bg-cyan-900/50 hover:text-cyan-300"
                      >
                          {section.pdfCta}
                          <FileText className="w-4 h-4 ml-2" />
                      </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- 3. Call to Action / Engagement Footer --- */}
      <section className="py-20 bg-slate-900/70 border-t border-cyan-700/50">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready To Initiate With Us?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-cyan-300 mb-8 font-light">
            Our team is prepared to receive your proposal for licensing, collaboration, or critical investment. Contact us to schedule a strategic dialogue.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="/contactus"
            className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 
                       bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 
                       hover:from-cyan-300 hover:to-blue-400 shadow-xl hover:shadow-cyan-400/50"
          >
            Get In Touch
            <Globe className="w-5 h-5 ml-3" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

// ArrowUpRight component (Helper)
const ArrowUpRight = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
        <path d="M7 7l10 10M7 17V7h10" />
    </svg>
);