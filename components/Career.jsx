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
    <section
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      id="careers-content"
    >
      <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl 2xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* --- Section Header --- */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              Opportunities To Make A Difference
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-gray-600 max-w-4xl mx-auto">
              Discover the path that aligns with your professional aspirations
              and contribute to the core infrastructure of the city.
            </p>
          </motion.div>
        </div>

        {/* --- Career Opportunities Cards (Grid) --- */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <div className="flex items-center justify-between border-b-2 border-blue-100 pb-2 sm:pb-3 md:pb-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-gray-800">
              Explore Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
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
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl shadow-sm sm:shadow-md hover:shadow-lg md:hover:shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-between 
                             transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-blue-400 h-full group"
                >
                  <div>
                    <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 md:px-4 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 inline-block">
                      {opportunity.type}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-gray-900 my-2 sm:my-2.5 md:my-3 lg:my-4 flex items-center group-hover:text-blue-700 transition-colors">
                      <Briefcase className="w-4 sm:w-5 md:w-6 lg:w-7 h-4 sm:h-5 md:h-6 lg:h-7 mr-2 md:mr-3 text-blue-500" />
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-6 text-xs sm:text-xs md:text-sm lg:text-base border-b border-gray-100 pb-4 sm:pb-5 md:pb-6 lg:pb-6">
                      {opportunity.description}
                    </p>

                    <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                      <h4 className="font-bold text-gray-800 mb-2 sm:mb-2.5 md:mb-3 lg:mb-3 flex items-center text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-wide">
                        <Zap className="w-3 sm:w-3.5 md:w-4 lg:w-5 h-3 sm:h-3.5 md:h-4 lg:h-5 mr-1.5 md:mr-2 text-yellow-500" />
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2 lg:space-y-2">
                        {opportunity.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-500 text-xs sm:text-xs md:text-sm lg:text-base"
                          >
                            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full mt-1.5 mr-1.5 sm:mr-2 flex-shrink-0"></div>
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
                    className="inline-flex items-center justify-center w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 mt-3 sm:mt-4 md:mt-5 lg:mt-6 bg-gray-50 text-gray-700 text-xs sm:text-xs md:text-sm lg:text-base font-semibold rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl transition-all hover:bg-blue-600 hover:text-white border border-gray-200 hover:border-blue-600"
                  >
                    View Details
                    <ArrowUpRight className="w-3 sm:w-3.5 md:w-4 lg:w-4 h-3 sm:h-3.5 md:h-4 lg:h-4 ml-1.5 md:ml-2" />
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