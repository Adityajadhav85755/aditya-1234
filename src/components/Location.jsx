import React from 'react';

export default function Location({ onLocationClick }) {
  let locations = [
    { city: "Mumbai", area: "Bandra", category: "Western" },
    { city: "Mumbai", area: "Kandivali", category: "Western" },
    { city: "Mumbai", area: "Borivali", category: "Western" },
    { city: "Mumbai", area: "Goregaon", category: "Western" },
    { city: "Mumbai", area: "Malad", category: "Western" },
    { city: "Mumbai", area: "Versova", category: "Western" },
    { city: "Mumbai", area: "Juhu", category: "Western" },
    { city: "Mumbai", area: "Santacruz", category: "Western" },
    { city: "Mumbai", area: "Khar", category: "Western" },
    { city: "Mumbai", area: "Jogeshwari", category: "Western" },
    { city: "Mumbai", area: "Andheri", category: "Western" },
    { city: "Mumbai", area: "Vile Parle", category: "Western" },
    { city: "Mumbai", area: "Dahisar", category: "Western" },
    { city: "Mumbai", area: "Chembur", category: "Central" },
    { city: "Mumbai", area: "Mulund", category: "Central" },
    { city: "Mumbai", area: "Bhandup", category: "Central" },
    { city: "Mumbai", area: "Ghatkopar", category: "Central" },
    { city: "Mumbai", area: "Powai", category: "Central" },
    { city: "Mumbai", area: "Kalyan", category: "Central" },
    { city: "Mumbai", area: "Dombivli", category: "Central" },
    { city: "Mumbai", area: "Thane", category: "Central" },
    { city: "Navi Mumbai", area: "Vashi", category: "Herbal" },
    { city: "Navi Mumbai", area: "Nerul", category: "Herbal" },
    { city: "Navi Mumbai", area: "Airoli", category: "Herbal" },
    { city: "Navi Mumbai", area: "Kamothe", category: "Herbal" },
    { city: "Navi Mumbai", area: "Kharghar", category: "Herbal" },
    { city: "Navi Mumbai", area: "Panvel", category: "Herbal" },
    { city: "Mumbai", area: "Virar", category: "Herbal" },
    { city: "Mumbai", area: "Vasai", category: "Herbal" },
    { city: "Mumbai", area: "Bandra", category: "Western" },
    { city: "Mumbai", area: "Dombivli", category: "Central" },
    { city: "Mumbai", area: "Chembur", category: "Central" }
  ];

  const categories = ["Western", "Central", "Herbal"];

  return (
    <div className="bg-gray-200 pb-12">
      <div className="px-4 py-8 max-w-[1400px] w-full m-auto">
        <h3 className="text-2xl font-bold text-primary text-center">
          Sky Need Solutions Locality
        </h3>
      </div>

      {/* Categories Grid */}
      {categories.map((category) => {
        const filteredLocations = locations.filter(
          (location) => location.category === category
        );

        return (
          <div key={category} className="px-4 py-4">
            <h4 className="text-xl font-semibold text-primary mb-2">
              {category} Locations
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center max-w-[1400px] w-full m-auto gap-x-2 gap-y-2">
              {filteredLocations.map((city, i) => (
                <p key={i} className="w-full flex items-start">
                  <a href="#header">
                    <button
                      onClick={() => onLocationClick(city.area)}
                      className="text-gray-700 scroll-smooth hover:underline"
                    >
                      Shifting in {city.area}
                    </button>
                  </a>
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
