import React from "react";
import OptimizedImage from "@/components/OptimizedImage";

const FALLBACK_CARDS = [
  {
    title: "Excellence in Service",
    body: "Recognized for outstanding performance in water distribution and management across Karachi.",
    imageUrl: "/bg-1.jpg"
  },
  {
    title: "Innovation Award",
    body: "Awarded for implementing cutting-edge technology in sewerage treatment and disposal.",
    imageUrl: "/bg-2.jpg"
  },
  {
    title: "Community Impact",
    body: "Acknowledged for significant contributions to community health and hygiene awareness.",
    imageUrl: "/bg-1.jpg"
  }
];

const GenericCardGrid = ({ heading, description, cards = [] }) => {
  const displayCards = cards.length > 0 ? cards : FALLBACK_CARDS;

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {(heading || description) && (
        <div className="text-center mb-12">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {card.imageUrl && (
              <div className="relative h-48 w-full">
                <OptimizedImage 
                  src={card.imageUrl} 
                  alt={card.title || "Card Image"} 
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              {card.title && (
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {card.title}
                </h3>
              )}
              {card.body && (
                <div 
                  className="text-gray-600 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              )}
              {card.linkUrl && (
                <a 
                  href={card.linkUrl} 
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  {card.linkText || "Learn More"} &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericCardGrid;
