"use client";
import React from "react";
import Image from "next/image";

export default function OurLeadership() {
  const managementTeam = [
    {
      name: "Ahmed Ali Siddiqui",
      role: "Managing Director",
      img: "/leaders/salahuddin.jpg", // Ensure these paths exist in public/
    },
    {
      name: "Asadullah Khan",
      role: "Chief Operating Officer",
      img: "/leaders/imran.jpg",
    },
    {
      name: "Muhammad Ali Sheikh",
      role: "Chief Engineer Water Supply",
      img: "/leaders/sarah.jpg",
    },
    {
      name: "Aftab Alam Chandio",
      role: "Chief Engineer Sewerage",
      img: "/leaders/bilal.jpg",
    },
  ];

  const pastLeaders = [
    {
      name: "Engr. Syed Najib Ahmed",
      role: "Former Managing Director",
      period: "2022 - 2023",
      img: "/leaders/najib.jpg",
    },
    {
      name: "Asadullah Khan",
      role: "Former Managing Director",
      period: "2020 - 2022",
      img: "/leaders/asadullah.jpg",
    },
    {
      name: "Hashim Raza Zaidi",
      role: "Former Managing Director",
      period: "2018 - 2020",
      img: "/leaders/hashim.jpg",
    },
  ];

  const insights = [
    {
      title: "Our Vision",
      desc: "A future where Karachi receives uninterrupted, clean, and safe water through modernized infrastructure and progressive leadership.",
    },
    {
      title: "Our Mission",
      desc: "To provide efficient water supply and sewerage services through sustainable operations, innovative planning, and skilled leadership.",
    },
    {
      title: "Core Values",
      desc: "Transparency, accountability, innovation, and public service form the foundation of KW&SC’s leadership principles.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50" id="leadership-content">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Leadership & Management
          </h2>
          <p className="text-gray-600 text-lg">
            KW&SC has evolved under the guidance of exceptional leaders. Meet the
            visionaries guiding the corporation toward a sustainable and
            efficient future.
          </p>
        </div>

        {/* --- Current Management Team --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10 uppercase tracking-wider border-b-2 border-blue-200 inline-block pb-2 px-4 mx-auto block w-fit">
             Management Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center relative">
                  <h4 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}