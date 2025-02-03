import React from 'react';
export default function AClocation({ onLocationClick }) {

  let locations = [
    { city: "Mumbai", area: "Churchgate", category: "Western" },
    { city: "Mumbai", area: "Marine Lines", category: "Western" },
    { city: "Mumbai", area: "Charni Road", category: "Western" },
    { city: "Mumbai", area: "Grant Road", category: "Western" },
    { city: "Mumbai", area: "Mumbai Central", category: "Western" },
    { city: "Mumbai", area: "Mahalaxmi", category: "Western" },
    { city: "Mumbai", area: "Lower Parel", category: "Western" },
    { city: "Mumbai", area: "Prabhadevi", category: "Western" },
    { city: "Mumbai", area: "Dadar", category: "Western" },
    { city: "Mumbai", area: "Matunga Road", category: "Western" },
    { city: "Mumbai", area: "Mahim Junction", category: "Western" },
    { city: "Mumbai", area: "Bandra", category: "Western" },
    { city: "Mumbai", area: "Khar Road", category: "Western" },
    { city: "Mumbai", area: "Santacruz", category: "Western" },
    { city: "Mumbai", area: "Vile Parle", category: "Western" },
    { city: "Mumbai", area: "Andheri", category: "Western" },
    { city: "Mumbai", area: "Jogeshwari", category: "Western" },
    { city: "Mumbai", area: "Ram Mandir", category: "Western" },
    { city: "Mumbai", area: "Goregaon", category: "Western" },
    { city: "Mumbai", area: "Malad", category: "Western" },
    { city: "Mumbai", area: "Kandivali", category: "Western" },
    { city: "Mumbai", area: "Borivali", category: "Western" },
    { city: "Mumbai", area: "Dahisar", category: "Western" },
    { city: "Mumbai", area: "Mira Road", category: "Western" },
    { city: "Mumbai", area: "Bhayander", category: "Western" },
    { city: "Mumbai", area: "Naigaon", category: "Western" },
    { city: "Mumbai", area: "Vasai Road", category: "Western" },
    { city: "Mumbai", area: "Nallasopara", category: "Western" },
    { city: "Mumbai", area: "Virar", category: "Western" },
    { city: "Mumbai", area: "Vaitarana", category: "Western" },
    { city: "Mumbai", area: "Saphale Road", category: "Western" },
    { city: "Mumbai", area: "Kelva Road", category: "Western" },
    { city: "Mumbai", area: "Palghar", category: "Western" },
    { city: "Mumbai", area: "Boisar", category: "Western" },
    { city: "Mumbai", area: "Dahanu Road", category: "Western" },

    { city: "Mumbai", area: "Mumbai CST", category: "Central" },
    { city: "Mumbai", area: "Masjid Bunder", category: "Central" },
    { city: "Mumbai", area: "Sandhurst Road", category: "Central" },
    { city: "Mumbai", area: "Byculla", category: "Central" },
    { city: "Mumbai", area: "Chinchpokli", category: "Central" },
    { city: "Mumbai", area: "Currey Road", category: "Central" },
    { city: "Mumbai", area: "Parel", category: "Central" },
    { city: "Mumbai", area: "Dadar", category: "Central" },
    { city: "Mumbai", area: "Matunga", category: "Central" },
    { city: "Mumbai", area: "Sion", category: "Central" },
    { city: "Mumbai", area: "Kurla", category: "Central" },
    { city: "Mumbai", area: "Vidhyavihar", category: "Central" },
    { city: "Mumbai", area: "Ghatkopar", category: "Central" },
    { city: "Mumbai", area: "Vikhroli", category: "Central" },
    { city: "Mumbai", area: "Kanjur Marg", category: "Central" },
    { city: "Mumbai", area: "Bhandup", category: "Central" },
    { city: "Mumbai", area: "Nahur", category: "Central" },
    { city: "Mumbai", area: "Mulund", category: "Central" },
    { city: "Mumbai", area: "Thane", category: "Central" },
    { city: "Mumbai", area: "Kalwa", category: "Central" },
    { city: "Mumbai", area: "Mumbra", category: "Central" },
    { city: "Mumbai", area: "Diva", category: "Central" },
    { city: "Mumbai", area: "Lower Khopar", category: "Central" },
    { city: "Mumbai", area: "Dombivali", category: "Central" },
    { city: "Mumbai", area: "Thakurli", category: "Central" },
    { city: "Mumbai", area: "Kalyan", category: "Central" },
    { city: "Mumbai", area: "Shahad", category: "Central" },
    { city: "Mumbai", area: "Ambivali", category: "Central" },
    { city: "Mumbai", area: "Titwala", category: "Central" },
    { city: "Mumbai", area: "Khadavli", category: "Central" },
    { city: "Mumbai", area: "Vasind", category: "Central" },
    { city: "Mumbai", area: "Asangaon", category: "Central" },
    { city: "Mumbai", area: "Atgaon", category: "Central" },
    { city: "Mumbai", area: "Thansit", category: "Central" },
    { city: "Mumbai", area: "Khardi", category: "Central" },
    { city: "Mumbai", area: "Umbermali", category: "Central" },
    { city: "Mumbai", area: "Kasara", category: "Central" },
    { city: "Mumbai", area: "Vithalwadi", category: "Central" },
    { city: "Mumbai", area: "Ulhasnagar", category: "Central" },
    { city: "Mumbai", area: "Ambernath", category: "Central" },
    { city: "Mumbai", area: "Badlapur", category: "Central" },
    { city: "Mumbai", area: "Vangani", category: "Central" },
    { city: "Mumbai", area: "Shelu", category: "Central" },
    { city: "Mumbai", area: "Neral", category: "Central" },
    { city: "Mumbai", area: "Bhivpuri Road", category: "Central" },
    { city: "Mumbai", area: "Karjat", category: "Central" },
    { city: "Mumbai", area: "Palasdari", category: "Central" },
    { city: "Mumbai", area: "Kelavali", category: "Central" },
    { city: "Mumbai", area: "Dolavali", category: "Central" },
    { city: "Mumbai", area: "Lowjee", category: "Central" },
    { city: "Mumbai", area: "Khopoli", category: "Central" },

    { city: "Navi Mumbai", area: "Mumbai CST", category: "Harbour" },
    { city: "Navi Mumbai", area: "Masjid Bunder", category: "Harbour" },
    { city: "Navi Mumbai", area: "Sandhurst Road", category: "Harbour" },
    { city: "Navi Mumbai", area: "Dockyard Road", category: "Harbour" },
    { city: "Navi Mumbai", area: "Reay Road", category: "Harbour" },
    { city: "Navi Mumbai", area: "Cotton Green", category: "Harbour" },
    { city: "Navi Mumbai", area: "Sewri", category: "Harbour" },
    { city: "Navi Mumbai", area: "Wadala Road", category: "Harbour" },
    { city: "Navi Mumbai", area: "King Circle", category: "Harbour" },
    { city: "Navi Mumbai", area: "Mahim Junction", category: "Harbour" },
    { city: "Navi Mumbai", area: "Bandra", category: "Harbour" },
    { city: "Navi Mumbai", area: "Khar Road", category: "Harbour" },
    { city: "Navi Mumbai", area: "Santacruz", category: "Harbour" },
    { city: "Navi Mumbai", area: "Andheri", category: "Harbour" },
    { city: "Navi Mumbai", area: "Jogeshwari", category: "Harbour" },
    { city: "Navi Mumbai", area: "Ram Mandir", category: "Harbour" },
    { city: "Navi Mumbai", area: "Goregaon", category: "Harbour" },
    { city: "Navi Mumbai", area: "GTB Nagar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Chunabhatti", category: "Harbour" },
    { city: "Navi Mumbai", area: "Kurla", category: "Harbour" },
    { city: "Navi Mumbai", area: "Tilak Nagar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Chembur", category: "Harbour" },
    { city: "Navi Mumbai", area: "Govandi", category: "Harbour" },
    { city: "Navi Mumbai", area: "Mankhurd", category: "Harbour" },
    { city: "Navi Mumbai", area: "Vashi", category: "Harbour" },
    { city: "Navi Mumbai", area: "Sanpada", category: "Harbour" },
    { city: "Navi Mumbai", area: "JuiNagar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Nerul", category: "Harbour" },
    { city: "Navi Mumbai", area: "Seawoods Darave", category: "Harbour" },
    { city: "Navi Mumbai", area: "Belapur CBD", category: "Harbour" },
    { city: "Navi Mumbai", area: "Kharghar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Manasarovar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Khandeshwar", category: "Harbour" },
    { city: "Navi Mumbai", area: "Panvel", category: "Harbour" },
  ];

  const categories = ["Western", "Central", "Harbour"];

  return (
    <div className="bg-gray-200 pb-12">
      <div className="px-4 py-8 max-w-[1400px] w-full  m-auto">
        <h3 className="text-3xl font-serif font-extrabold text-blue-700 text-center">
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
            <h4 className="md:text-2xl text-xl font-extrabold text-primary mb-2">
              {category} Locations
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center max-w-[1400px] w-full m-full gap-x-0 gap-y-0">
              {filteredLocations.map((city, i) => (
                <p key={i} className="w-full flex items-start">
                  <a href="#header" className="w-full">
                    <button
                      onClick={() => onLocationClick(city.area)}
                      className="nb__1_YgJ py-2 px-4 bg-transparent border-2 border-transparent rounded-lg hover:shadow-lg transition-all duration-300 hover:font-semibold text-left"
                    >
                      Best AC Services {city.area}
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
