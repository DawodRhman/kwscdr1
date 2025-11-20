'use client';
import React, { useState, useMemo } from "react";
import { MapPin, Phone, Mail, Building2, HardHat, Zap } from "lucide-react";

export default function Kwscmap() {
  // Define all possible KW&SC locations with their details
  const locations = useMemo(() => [
    {
      id: 'hq',
      name: 'Headquarters (Main Office)',
      shortName: 'HQ',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      address: "9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350",
      phone: "(+92) 021 111 597 200",
      email: "info@kwsc.gos.pk",
      // Google Maps embed URL for the main office (KW&SB/KW&SC)
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.554030778644!2d67.09062367500356!3d24.8724729779183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f6a2958434d%3A0xc3f8e58a2d5940d9!2sKarachi%20Water%20and%20Sewerage%20Board%20(KW%26SB)!5e0!3m2!1sen!2spk!4v1700676458055!5m2!1sen!2spk",
    },
    {
      id: 'north',
      name: 'North Karachi Customer Center',
      shortName: 'North CCM',
      icon: <MapPin className="w-5 h-5 text-green-600" />,
      address: "Sector 11-A, Near Power House, North Karachi",
      phone: "(+92) 021 992 60001",
      email: "customercare.north@kwsc.pk",
      // Mock coordinates for a regional office
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.488344583167!2d67.03051407500588!3d24.977464277416358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9b2d9a941b%3A0x6b4c1a2d5e7f1e56!2sNorth%20Karachi%20Town!5e0!3m2!1sen!2spk!4v1700676500000!5m2!1sen!2spk",
    },
    {
      id: 'k4',
      name: 'K-IV Project Site Office',
      shortName: 'K-IV Project',
      icon: <HardHat className="w-5 h-5 text-orange-600" />,
      address: "Super Highway, near Dhabeji Pumping Station, Thatta",
      phone: "(+92) 029 876 54321",
      email: "project.k4@kwsc.pk",
      // Mock coordinates for a project site
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3263045237735!2d67.57014697501358!3d25.32162627745771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb94026857f6d39%3A0x5a18a91b29a65d50!2sDhabeji%20Pumping%20Station!5e0!3m2!1sen!2spk!4v1700676600000!5m2!1sen!2spk",
    },
    {
      id: 'pumping',
      name: 'Dhabeji Pumping Station',
      shortName: 'Dhabeji Pumping',
      icon: <Zap className="w-5 h-5 text-red-600" />,
      address: "Dhabeji, Thatta District, Sindh, Pakistan",
      phone: "N/A - Operations Only",
      email: "operations@kwsc.pk",
      // Coordinates for Dhabeji
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3263045237735!2d67.57014697501358!3d25.32162627745771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb94026857f6d39%3A0x5a18a91b29a65d50!2sDhabeji%20Pumping%20Station!5e0!3m2!1sen!2spk!4v1700676600000!5m2!1sen!2spk",
    }
  ], []);

  const [activeLocationId, setActiveLocationId] = useState('hq');
  
  // Find the currently active location object
  const activeLocation = locations.find(loc => loc.id === activeLocationId);

  if (!activeLocation) {
    return <div className="p-10 text-center text-red-500">Error: Location data not found.</div>;
  }

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
        
        {/* Location Selector */}
        {/* On mobile, use a clean scrollable row for tabs */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white/95 backdrop-blur-md px-2 py-2 rounded-xl shadow-xl border border-blue-100 flex flex-nowrap overflow-x-auto gap-2">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`flex items-center gap-2 px-3 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.03] flex-shrink-0 whitespace-nowrap
                  ${activeLocationId === loc.id
                    ? 'bg-blue-600 text-white shadow-blue-400/50'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }
                `}
                aria-current={activeLocationId === loc.id ? 'location' : undefined}
                title={loc.name}
              >
                {loc.icon}
                <span className="hidden sm:inline">{loc.name}</span>
                <span className="sm:hidden">{loc.shortName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map iframe - Dynamically load the map */}
        <iframe
          key={activeLocation.id} // Key ensures the iframe fully reloads when location changes
          src={activeLocation.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          aria-label={`Google Map showing the location of ${activeLocation.name}`}
          title={`${activeLocation.name} Location Map`}
          className="transition-opacity duration-700 opacity-100"
        />

        {/* Glassmorphism overlay for contact details - Dynamically updated */}
        {/* Positioned on the bottom left for mobile viewing space */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:right-10 md:left-auto bg-white/85 backdrop-blur-md rounded-xl p-6 shadow-2xl max-w-full md:max-w-md border border-blue-200 transition-all duration-300 transform hover:translate-y-[-2px]">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 border-b pb-2 border-blue-200 flex items-center gap-2">
             {activeLocation.icon} {activeLocation.name}
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                {activeLocation.address}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600 w-5 h-5 flex-shrink-0" />
              <a href={`tel:${activeLocation.phone.replace(/[() -]/g, '')}`} className="text-gray-800 font-medium text-sm md:text-base hover:text-blue-700 transition-colors">
                {activeLocation.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5 flex-shrink-0" />a
              <a href={`mailto:${activeLocation.email}`} className="text-gray-800 font-medium text-sm md:text-base hover:text-blue-700 transition-colors truncate">
                {activeLocation.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}