// import React, { useState } from "react";

// const OtherServices = () => {
//   const [services, setServices] = useState([
//     {
//       id: 1,
//       name: "Interior Design",
//       subServices: ["Interior Paint", "Furniture Arrangement", "Lighting Design", "Office", "Function Party"],
//       open: false,
//     },
//     {
//       id: 2,
//       name: "AC Rent",
//       subServices: ["Split AC Rent", "Window AC Rent", "Central AC Rent"],
//       open: false,
//     },
//     {
//       id: 3,
//       name: "Rent Brand of AC",
//       subServices: ["Voltus", "Samsung", "Haier", "Loyd", "Whirlpool", "Bluestar", "Panasonic", "Dakin"],
//       open: false,
//     },
//     {
//       id: 4,
//       name: "AC Services",
//       subServices: ["Voltus", "Samsung", "Haier", "Loyd", "Whirlpool", "Bluestar", "Panasonic", "Dakin"],
//       open: false,
//     },
//   ]);

//   // Toggle function to open/close sub-services
//   const toggleService = (id) => {
//     setServices((prevServices) =>
//       prevServices.map((service) =>
//         service.id === id ? { ...service, open: !service.open } : service
//       )
//     );
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 text-primary text-center">Other Services Sky Need Solutions</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Use grid and 2 columns for small screens and up */}
//         {services.map((service) => (
//           <div key={service.id} className="border p-4 rounded-md shadow-sm">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleService(service.id)}
//             >
//               <h3 className="text-xl font-semibold">{service.name}</h3>
//             </div>
//             {service.open && (
//               <ul className="mt-1 space-y-1 pl-3">
//                 {service.subServices.map((subService, index) => (
//                   <li key={index} className="text-black-500">
//                     {subService}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OtherServices;


import React, { useState } from "react";

const OtherServices = () => {
  const [services, setServices] = useState([
    // {
    //   id: 1,
    //   name: "Interior Design",
    //   subServices: ["Interior Paint", "Furniture Arrangement", "Lighting Design","Office ","Function Party"],
    //   open: false,
    // },
    {
      id: 2,
      name: "AC Rent",
      subServices: ["Split AC Rent", "Window AC Rent",],
      open: false,
    },
    {
      id: 3,
      name: "Brand of AC",
      subServices: [
        "BPL services repair", "Carrier services repair", "Croma services repair", "Cruise services repair", 
        "Daikin services repair", "Electrolux services repair", "Godrej services repair", "Gree services repair", "Haier services repair", 
        "Hisense services repair", "Hitachi services repair", "Hyundai services repair", "IFB services repair", "Impex services repair", 
        "Intex services repair", "Kelvinator services repair", "Koryo services repair", "LG services repair", "Livpure services repair", 
        "Lloyd services repair", "Micromax services repair", "Midea services repair", "Mitashi services repair", "Mitsubishi services repair", 
        "Motorola services repair", "Nokia services repair", "O General services repair", "Ogeneral services repair", "Onida services repair", 
        "Panasonic services repair", "Realme services repair", "Realme TechLife services repair", "Samsung services repair", "Sansui services repair", 
        "Singer services repair", "TCL services repair", "Thomson services repair", "Toshiba services repair", "Trane services repair", 
        "Vestar services repair", "Videocon services repair", "Voltas services repair", "Whirlpool services repair", "White Westinghouse services repair", 
        "Sharp services repair", "Sanyo services repair", "Ariston services repair", "Fujitsu services repair", "Blaupunkt services repair", 
        "Sharp services repair", "LG Electronics services repair", "Mitsubishi Electric services repair", "Carrier Infinity services repair", 
        "Friedrich services repair", "Chigo services repair", "Sears services repair", "Gree Electric services repair", "Toshiba Carrier services repair", 
        "Trane Technologies services repair", "York services repair", "Amana services repair", "Lennox services repair", "Midea services repair", 
        "General Electric services repair", "Goodman services repair", "Lennox services repair", "Frigidaire services repair", "GE Appliances services repair", 
        "Fujitsu General services repair", "Kaiser services repair", "Polar services repair", "TCL Electronics services repair", "Electrolux services repair", 
        "Haier Appliances services repair", "Koldfront services repair", "DeLonghi services repair", "Zanussi services repair", "Nordic services repair", 
        "Rheem services repair", "Samsung Electronics services repair", "Fujitsu General services repair", "Whirlpool Corporation services repair", 
        "Eureka Forbes services repair", "OzonAir services repair", "Haier Appliances services repair", "Havells services repair", "SAMSUNG services repair", 
        "Carrier HVAC services repair", "Bauknecht services repair", "Aire Acondicionado services repair", "Mitsubishi Heavy Industries services repair", 
        "Chiltrix services repair", "O General Air Conditioners services repair", "Trane Air Conditioning services repair", "Fujitsu Air Conditioning services repair", 
        "Energia services repair", "Vokswagen services repair", "SAMSUNG services repair", "Frigidaire Air Conditioning services repair", 
        "Haire services repair", "Bard services repair", "Igenix services repair", "BlueDiamond services repair", "Navien services repair", 
        "Viking services repair", "Zephyr services repair"
],


      
      open: false,
    },
    
  ]);

  // Toggle function to open/close sub-services
  const toggleService = (id) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id ? { ...service, open: !service.open } : service
      )
    );
  };

  return (
    <div className="p-4 lg:w-[50%] lg:mx-auto lg:ml-[8%] md:w-full">
      <h2 className="font-title text-2xl font-bold mb-4 text-primary text-center">Other Services Sky Need Solutions</h2>
      <div className="space-y-3 ">
        {services.map((service) => (
          <div key={service.id} className="font-title border p-4 rounded-md shadow-sm">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <h3 className="text-xl font-semibold">{service.name}</h3>
              {/* <span className="text-lg">
                {service.open ? "▲" : "▼"}
              </span> */}
            </div>
            {service.open && (
              <ul className="mt-1 space-y-1 pl-3  ">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 place-items-start max-w-[1400px] w-full m-full gap-x-4 gap-y-2 ">
                  
                {service.subServices.map((subService, index) => (
                  <li key={index} className="text-black-500 list-disc font-body  ">
                    {subService}
                  </li>
                ))}
                </div>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
