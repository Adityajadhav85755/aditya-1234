// import React, { useState } from 'react';
// import './Services.css'; // Import the CSS for animations

// const services = [
//   {
//     id: 'house-shifting',
//     title: 'House Shifting',
//     description: 'We offer customized services to fit your specific requirements... Click below to learn more.',
//     details: 'Detailed information about house shifting services...',
//   },
//   {
//     id: 'office-shifting',
//     title: 'Office Shifting',
//     description: 'Expert office relocation services... Click below to learn more.',
//     details: 'Detailed information about office shifting services...',
//   },
//   {
//     id: 'shop-shifting',
//     title: 'Shop Shifting',
//     description: 'Safe and secure shop shifting services... Click below to learn more.',
//     details: 'Detailed information about shop shifting services...',
//   },
//   {
//     id: 'vehicle-shifting',
//     title: 'Vehicle Shifting',
//     description: 'Efficient vehicle transportation services... Click below to learn more.',
//     details: 'Detailed information about vehicle shifting services...',
//   },
// ];

// export default function Services() {
//   const [selectedService, setSelectedService] = useState(null);

//   const handleLearnMore = (id) => {
//     const service = services.find((service) => service.id === id);
//     setSelectedService(service);
//   };

//   return (
//     <div className="services-container">
//       <div className={`services ${selectedService ? 'slide-out' : ''}`}>
//         {!selectedService ? (
//           <div>
//             <h2 className="text-center font-bold text-2xl p-2">Our Services</h2>
//             <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-[100px]:flex-col">
//               {services.map((service) => (
//                 <div key={service.id} className="p-4 border rounded-lg shadow-md">
//                   <h3 className="font-bold text-lg mb-2">{service.title}</h3>
//                   <p>{service.description}</p>
//                   <button
//                     onClick={() => handleLearnMore(service.id)}
//                     className="mt-2 text-blue-500 underline"
//                   >
//                     How We Work
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : null}
//       </div>
//       {selectedService && (
//         <div className={`details-page ${selectedService ? 'slide-in' : ''}`}>
//           <button
//             onClick={() => setSelectedService(null)}
//             className="text-blue-500 underline mb-4"
//           >
//             Back to Services
//           </button>
//           <h2 className="font-bold text-2xl mb-2">{selectedService.title}</h2>
//           <p>{selectedService.details}</p>
//         </div>
//       )}
//     </div>
//   );
// }
