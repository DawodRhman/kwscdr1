"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";

export default function FAQs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const faqs = [
    {
      question: "How can I get a new water connection?",
      answer: "For residential, commercial, bulk, or industrial connections, you need to submit an application form along with required documents to the nearest KW&SC office. The process includes site inspection, approval, and connection installation.",
      category: "New Connection"
    },
    {
      question: "How can I get a duplicate bill?",
      answer: "You can obtain a duplicate bill by visiting our online portal at web.kwsb.crdc.biz or by visiting the nearest KW&SC office with your account number and CNIC.",
      category: "Billing"
    },
    {
      question: "Where can I complain about sewerage?",
      answer: "You can register sewerage complaints through our online complaint system at complain.kwsc.gos.pk or contact our customer service helpline at (+92) 021 111 597 200.",
      category: "Complaints"
    },
    {
      question: "How can I order a water tanker?",
      answer: "You can order water tankers through our online booking system at campaign.kwsc.gos.pk or by calling our customer service helpline directly.",
      category: "Tanker Service"
    },
    {
      question: "How can I report water theft?",
      answer: "Report water theft by calling our helpline (+92) 021 111 597 200. You can also contact the Hydrant Management Cell for immediate action against illegal connections.",
      category: "Water Theft"
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === faqs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? faqs.length - 1 : prev - 1));
  };

  // Animation Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16 relative overflow-hidden" id="faq-slider">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Common Questions
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Quick answers to our most frequent inquiries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm min-h-[220px] md:min-h-[200px] flex items-center justify-center p-5 md:p-8 overflow-hidden">
            
            {/* Background Watermark Icon */}
            <HelpCircle className="absolute -right-8 -bottom-8 w-32 h-32 text-gray-50 opacity-50 pointer-events-none" />

            {/* AnimatePresence handles the slide transition */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full text-center"
              >
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  {faqs[currentIndex].category}
                </span>

                {/* Question */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                  "{faqs[currentIndex].question}"
                </h3>

                {/* Answer */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  {faqs[currentIndex].answer}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-400 hover:text-blue-600 hover:scale-110 transition-all z-20 hidden md:block"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-400 hover:text-blue-600 hover:scale-110 transition-all z-20 hidden md:block"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {faqs.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-blue-600 rounded-full" : "w-2 bg-gray-300 hover:bg-blue-300 rounded-full"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}