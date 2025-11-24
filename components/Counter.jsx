"use client";
import React from "react";
import Count from "./ui/Count";
import { FaTint, FaTools, FaClock, FaIndustry } from "react-icons/fa";

const counter_data = [
  { id: 1, title: "Water Connections", number: 1.2, icon: <FaTint size={40} className="text-cyan-500" />, suffix: "M" },
  { id: 2, title: "Sewerage Connections", number: 0.8, icon: <FaTools size={40} className="text-blue-500" />, suffix: "M" },
  { id: 3, title: "Years of Service", number: 22, icon: <FaClock size={40} className="text-yellow-500" /> },
  { id: 4, title: "Water Treatment Plants", number: 12, icon: <FaIndustry size={40} className="text-green-500" /> },
];

const Counter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background subtle animated lines */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="w-[2px] h-full bg-cyan-200 animate-pulse-slow mx-8"></div>
        <div className="w-[2px] h-full bg-blue-200 animate-pulse-slow mx-8"></div>
        <div className="w-[2px] h-full bg-cyan-200 animate-pulse-slow mx-8"></div>
      </div>

      <div className="max-w-[90%] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-16">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {counter_data.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="mb-3 transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 flex items-center justify-center transition-colors duration-500 group-hover:text-cyan-500">
                <Count number={item.number} add_style={true} />
                {item.suffix && <span className="ml-1 text-4xl md:text-5xl font-thin">{item.suffix}</span>}
              </div>
              <p className="mt-3 text-xl md:text-2xl font-medium text-gray-700 transition-colors duration-500 group-hover:text-gray-900">
                {item.title}
              </p>
              {/* Subtle animated underline */}
              <div className="mt-2 w-10 h-[3px] bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
