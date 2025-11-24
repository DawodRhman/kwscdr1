"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Zap, ArrowUpRight } from "lucide-react";

export default function Career() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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

  return (
    <section className="bg-white py-20 md:py-24" id="careers-content">
      <div className="container mx-auto px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Opportunities To Make A Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the path that aligns with your professional aspirations and contribute to the core infrastructure of the city.
            </p>
          </motion.div>
        </div>

        {/* --- Career Opportunities Cards (Grid) --- */}
        <div className="mb-10">
          <div className="flex items-center justify-between border-b-2 border-blue-100 pb-4 mb-10">
             <h3 className="text-3xl font-bold text-gray-800">
                Explore Programs
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((opportunity, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-full"
              >
                <div 
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col justify-between 
                             transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400 h-full group"
                >
                  <div>
                    <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                      {opportunity.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 my-3 flex items-center group-hover:text-blue-700 transition-colors">
                      <Briefcase className="w-6 h-6 mr-3 text-blue-500" />
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm border-b border-gray-100 pb-6">
                      {opportunity.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-sm uppercase tracking-wide">
                        <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {opportunity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-500 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <a
                    href={opportunity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 
                               bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all 
                               hover:bg-blue-600 hover:text-white border border-gray-200 hover:border-blue-600"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}