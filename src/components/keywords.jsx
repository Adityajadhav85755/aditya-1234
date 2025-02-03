import React from 'react';

// Define a reusable component for keyword links
const Keywords = ({ selectedLocation, onLocationClick }) => {

  // Unified list of keywords (all in one list without categories like Central, Western, Harbour)
  const filteredLocations = [
    { text: 'Mumbai CST to Masjid Bunder', href: '/', ariaLabel: 'mumbai-cst-to-masjid-bunder' },
    { text: 'Masjid Bunder to Sandhurst Road', href: '/', ariaLabel: 'masjid-bunder-to-sandhurst-road' },
    { text: 'Sandhurst Road to Byculla', href: '/', ariaLabel: 'sandhurst-road-to-byculla' },
    { text: 'Byculla to Chinchpokli', href: '/', ariaLabel: 'byculla-to-chinchpokli' },
    { text: 'Chinchpokli to Currey Road', href: '/', ariaLabel: 'chinchpokli-to-currey-road' },
    { text: 'Currey Road to Parel', href: '/', ariaLabel: 'currey-road-to-parel' },
    { text: 'Parel to Dadar', href: '/', ariaLabel: 'parel-to-dadar' },
    { text: 'Dadar to Matunga', href: '/', ariaLabel: 'dadar-to-matunga' },
    { text: 'Matunga to Sion', href: '/', ariaLabel: 'matunga-to-sion' },
    { text: 'Sion to Kurla', href: '/', ariaLabel: 'sion-to-kurla' },
    { text: 'Kurla to Vidhyavihar', href: '/', ariaLabel: 'kurla-to-vidhyavihar' },
    { text: 'Vidhyavihar to Ghatkopar', href: '/', ariaLabel: 'vidhyavihar-to-ghatkopar' },
    { text: 'Ghatkopar to Vikhroli', href: '/', ariaLabel: 'ghatkopar-to-vikhroli' },
    { text: 'Vikhroli to Kanjur Marg', href: '/', ariaLabel: 'vikhroli-to-kanjur-marg' },
    { text: 'Kanjur Marg to Bhandup', href: '/', ariaLabel: 'kanjur-marg-to-bhandup' },
    { text: 'Bhandup to Nahur', href: '/', ariaLabel: 'bhandup-to-nahur' },
    { text: 'Nahur to Mulund', href: '/', ariaLabel: 'nahur-to-mulund' },
    { text: 'Mulund to Thane', href: '/', ariaLabel: 'mulund-to-thane' },
    { text: 'Thane to Kalwa', href: '/', ariaLabel: 'thane-to-kalwa' },
    { text: 'Kalwa to Mumbra', href: '/', ariaLabel: 'kalwa-to-mumbra' },
    { text: 'Mumbra to Diva', href: '/', ariaLabel: 'mumbra-to-diva' },
    { text: 'Diva to Lower Khopar', href: '/', ariaLabel: 'diva-to-lower-khopar' },
    { text: 'Lower Khopar to Dombivli', href: '/', ariaLabel: 'lower-khopar-to-dombivli' },
    { text: 'Dombivli to Thakurli', href: '/', ariaLabel: 'dombivli-to-thakurli' },
    { text: 'Thakurli to Kalyan', href: '/', ariaLabel: 'thakurli-to-kalyan' },
    { text: 'Kalyan to Shahad', href: '/', ariaLabel: 'kalyan-to-shahad' },
    { text: 'Shahad to Ambivali', href: '/', ariaLabel: 'shahad-to-ambivali' },
    { text: 'Ambivali to Titwala', href: '/', ariaLabel: 'ambivali-to-titwala' },
    { text: 'Titwala to Khandavli', href: '/', ariaLabel: 'titwala-to-khandavli' },
    { text: 'Khandavli to Vasind', href: '/', ariaLabel: 'khandavli-to-vasind' },
    { text: 'Vasind to Asangaon', href: '/', ariaLabel: 'vasind-to-asangaon' },
    { text: 'Asangaon to Atgaon', href: '/', ariaLabel: 'asangaon-to-atgaon' },
    { text: 'Atgaon to Khardi', href: '/', ariaLabel: 'atgaon-to-khardi' },
    { text: 'Khardi to Kasara', href: '/', ariaLabel: 'khardi-to-kasara' },
    { text: 'Kasara to Vithalwadi', href: '/', ariaLabel: 'kasara-to-vithalwadi' },
    { text: 'Vithalwadi to Ulhasnagar', href: '/', ariaLabel: 'vithalwadi-to-ulhasnagar' },
    { text: 'Ulhasnagar to Ambernath', href: '/', ariaLabel: 'ulhasnagar-to-ambernath' },
    { text: 'Ambernath to Badlapur', href: '/', ariaLabel: 'ambernath-to-badlapur' },
    { text: 'Badlapur to Vangani', href: '/', ariaLabel: 'badlapur-to-vangani' },
    { text: 'Vangani to Shelu', href: '/', ariaLabel: 'vangani-to-shelu' },
    { text: 'Shelu to Neral', href: '/', ariaLabel: 'shelu-to-neral' },
    { text: 'Neral to Bhivpuri', href: '/', ariaLabel: 'neral-to-bhivpuri' },
    { text: 'Bhivpuri to Karjat', href: '/', ariaLabel: 'bhivpuri-to-karjat' },
    { text: 'Karjat to Palasdari', href: '/', ariaLabel: 'karjat-to-palasdari' },
    { text: 'Palasdari to Kelavali', href: '/', ariaLabel: 'palasdari-to-kelavali' },
    { text: 'Kelavali to Dolavali', href: '/', ariaLabel: 'kelavali-to-dolavali' },
    { text: 'Dolavali to Lowjee', href: '/', ariaLabel: 'dolavali-to-lowjee' },
    { text: 'Lowjee to Khopoli', href: '/', ariaLabel: 'lowjee-to-khopoli' },
    // Add more links as needed
  ];

  return (
    <section className="p-8 w-full lg:w-[50%] md:w-full mx-auto flex flex-col items-center rounded-lg bg-gray-200 shadow-lg lg:ml-[8%] ">
      {/* Dynamic section header */}
      <div className="text-3xl font-title font-bold mb-6  text-blue-700">
        Best Packers And Movers In Mumbai
      </div>

      {/* Grid with city buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredLocations.map((location, index) => (
        <a href="#header">
          <button
            key={index}
            onClick={() => onLocationClick(location.ariaLabel)} // Call the function to update the location
            className="py-2 px-4 font-body hover:scale-110 hover:shadow-xl hover:rounded-xl hover:font-semibold transition-all duration-300 text-left"
          >
            {location.text} 
          </button>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Keywords;
