"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
// --- New Lucide Icon Imports ---
import { Briefcase, Zap, Building, MapPin, Clock, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Careers() {
  const [loading, setLoading] = useState(true);

  // Data remains the same, but moving outside the component for cleaner JSX
  const careerOpportunities = [
    {
      title: "Recruitment",
      description: "Join KW&SC's team of dedicated professionals working to improve Karachi's essential water and sewerage infrastructure.",
      features: [
        "Competitive salary packages",
        "Professional development opportunities",
        "Health insurance benefits",
        "Pension scheme",
        "Career growth prospects"
      ],
      link: "https://www.kwsc.gos.pk/careers#Recruitment",
      type: "Full-time Positions"
    },
    {
      title: "Young Graduate Program",
      description: "Launch your career with KW&SC's comprehensive graduate program designed for fresh, talented engineers and professionals.",
      features: [
        "A structured program",
        "Mentorship from senior professionals",
        "Hands-on project experience",
        "Training and skill development",
        "Potential for permanent employment"
      ],
      link: "https://www.kwsc.gos.pk/careers#YoungGraduateProgram",
      type: "Graduate Program"
    },
    {
      title: "Consultancies",
      description: "Partner with KW&SC as an expert consultant to contribute your specialized skills to critical infrastructure projects.",
      features: [
        "Project-based assignments",
        "Flexible working arrangements",
        "Competitive consultancy rates",
        "Access to latest technology",
        "Collaboration with industry experts"
      ],
      link: "https://www.kwsc.gos.pk/careers#Consultancies",
      type: "Consulting"
    }
  ];

  const currentOpenings = [
    {
      id: 1,
      position: "Executive Engineer (Water)",
      department: "Water Supply Department",
      location: "Karachi",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      id: 2,
      position: "Executive Engineer (Sewerage)",
      department: "Sewerage Department",
      location: "Karachi",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      id: 3,
      position: "Assistant Engineer",
      department: "Technical Services",
      location: "Karachi",
      type: "Full-time",
      experience: "2+ years"
    },
    {
      id: 4,
      position: "Graduate Trainee",
      department: "Various Departments",
      location: "Karachi",
      type: "Training Program",
      experience: "Fresh Graduate"
    }
  ];

  // GSAP Loader Effect (Kept as is)
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

  return (
    <>
      {loading && <Loader />}
      
      {/* 1. Enhanced Hero Section */}
       <section  className={`relative h-[15vh] md:h-[70vh] transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover bg-center text-white flex justify-center items-center`}
>
  <div className="absolute inset-0 bg-blue-900/80 z-0 backdrop-blur-sm"></div>
        
        <div className="relative z-[1] max-w-5xl mx-auto px-6 text-center">
          <Fade direction="up" triggerOnce duration={1000} cascade damping={0.1}>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              Careers at 
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                KW&SC
              </span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-blue-100/90 font-light">
              Join our mission to provide clean water and efficient sewerage services to Karachi.
            </p>
          </Fade>
        </div>
      </section>

      {/* 2. Opportunities & Openings Section */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Opportunities To Make A Difference
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Discover the path that aligns with your professional aspirations and contribute to the core infrastructure of the city.
              </p>
            </Fade>
          </div>

          {/* Career Opportunities Cards (Grid) */}
          <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b-2 border-blue-500/50 pb-2">
              Explore Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {careerOpportunities.map((opportunity, index) => (
              <Fade 
                key={index} 
                direction="up" 
                triggerOnce 
                duration={800} 
                delay={index * 150}
                className="h-full"
              >
                <div 
                  className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 flex flex-col justify-between 
                             transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500/50 h-full"
                >
                  <div>
                    <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block shadow-md">
                      {opportunity.type}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 my-4 flex items-center">
                      <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 border-b border-gray-100 pb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                        <Zap className="w-5 h-5 mr-2 text-green-500" />
                        Benefits & Scope:
                      </h4>
                      <ul className="space-y-3">
                        {opportunity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <Zap className="w-4 h-4 text-green-500 mt-1 flex-shrink-0 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    href={opportunity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-6 py-3 mt-4 
                               bg-blue-600 text-white font-semibold rounded-lg transition-all 
                               hover:bg-blue-700 hover:shadow-lg shadow-blue-500/30 group"
                  >
                    View Details
                    <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </Fade>
            ))}
          </div>

          {/* Current Job Openings (Table-like Grid) */}
          <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b-2 border-blue-500/50 pb-2">
              Current Openings
          </h2>
          <div className="space-y-4">
            {currentOpenings.map((opening, index) => (
              <Fade key={opening.id} direction="up" triggerOnce duration={800} delay={index * 50}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md grid grid-cols-1 lg:grid-cols-5 items-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
                  
                  {/* Position */}
                  <h3 className="text-xl font-bold text-blue-800 col-span-2">
                    {opening.position}
                  </h3>
                  
                  {/* Details (Flex/Icons) */}
                  <div className="flex items-center text-gray-600 text-sm">
                    <Building className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                    {opening.department}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                    {opening.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                    {opening.experience}
                  </div>

                  {/* Apply Button */}
                  <button className="lg:col-span-1 w-full lg:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                    Apply Now
                  </button>
                </div>
              </Fade>
            ))}
          </div>
          
          {/* 3. Contact Information / CTA */}
          <div className="mt-20 bg-blue-800 rounded-xl shadow-2xl p-10 md:p-14 text-white">
            <Fade direction="up" triggerOnce duration={1000} delay={200}>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Ready to Start Your KW&SC Career?
                </h2>
                <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
                  For detailed information, reach out to our Human Resources department directly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hr@kwsc.gos.pk"
                    className="inline-flex items-center px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-lg transition-all hover:bg-cyan-300 shadow-lg shadow-cyan-400/50"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Email: info@kwsc.gos.pk
                  </a>
                  <a
                    href="tel:+92021111597200"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 transition-colors hover:bg-white/20"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call: (+92) 021 111 597 200
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}