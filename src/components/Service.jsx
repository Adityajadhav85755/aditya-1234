// import React from 'react';
// import { Link } from 'react-router-dom';
// import shipping from '../assets/images/shifting.jpg';

// export default function Service() {
//   let services = [
//     { name: "HouseShifting", redirect: "household", image: "https://assets.nobroker.in/hs-new/public/Home-Services/packers-moversOptimized.png" },
//     { name: "OfficeShifting", redirect: "office", image: "https://assets.nobroker.in/hs-new/public/Home-Services/home-paintingOptimized.png" },
//     { name: "ShopShifting", redirect: "shop", image: "https://assets.nobroker.in/hs-new/public/Home-Services/home-renovationOptimized.png" },
//     { name: "VehicleShifting", redirect: "vehicle", image: "https://assets.nobroker.in/hs-new/public/Home-Services/otherPanel.webp" },
//     { name: "AC Jet Service", redirect: "acservice",  image: "https://assets.nobroker.in/hs-new/public/Home-Services/packers-moversOptimized.png" },
//     { name: "Warehouse", redirect: "warehouse",  image: "https://assets.nobroker.in/hs-new/public/Home-Services/home-paintingOptimized.png" }
//   ];

//   return (
//     <section className='bg-terniary py-8 flex flex-col md:flex-row justify-around bg-other w-full md:w-[50%] mx-auto md:ml-[8%]'>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full px-8'>
//         {services.map((serv, i) => (
//           <Link to={`/${serv.redirect}`} key={i} className="relative rounded-lg overflow-hidden">
//             {/* Gradient overlay and image */}
//             <div className="relative w-full h-[168px]">
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
//                 style={{ background: "linear-gradient(rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 100%)" }}
//               />
//               <img
//                 src={serv.image}
//                 alt={serv.name}
//                 className="object-cover w-full h-full rounded-lg"
//               />
//               {/* Service text and rating */}
//               <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
//                 <div className="text-white font-bold text-lg">{serv.name}</div>
//                 <div className="flex items-center gap-1 mt-1">
//                   <span className="text-sm bg-black bg-opacity-60 px-2 rounded-md">{serv.rating}</span>
//                   <img className="w-4 h-4" src="https://assets.nobroker.in/hs-new/public/Home-Services/star-icon.svg" alt="star" />
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
  let services = [
    { name: "Household Shifting", redirect: "household", image: "/Ac_Service/household.png" },
    { name: "Office Shifting", redirect: "office", image: "/Ac_Service/office.jpg" },
    { name: "Shop Shifting", redirect: "shop", image: "/Ac_Service/shop.jpg" },
    { name: "Vehicle Shifting", redirect: "vehicle", image: "/Ac_Service/vechile.jpg" },
    { name: "AC Service", redirect: "acservice", image: "/Ac_Service/newacservice.png" },
    { name: "Warehouse", redirect: "warehouse", image: "/Ac_Service/warehouse.webp" },
  ];

  return (
    <section className="bg-terniary py-8 flex justify-center  w-[100%] lg:w-[50%] md:w-full mx-auto lg:ml-[8%] font-title">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl px-4 ">
        {services.map((serv, i) => (
          <Link
            to={`/${serv.redirect}`}
            key={i}
            className="w-full max-w-[250px] border-[#0a2c5a] border h-[150px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] relative bg-white shadow-sm"
          >
            {/* Gradient overlay and image */}
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                style={{
                  background: "linear-gradient(rgba(126, 152, 167, 0.7) 20%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
              <img
                src={serv.image}
                alt={serv.name}
                className="object-cover w-full h-full rounded-tl-[2rem] rounded-br-[2rem]"
              />
              {/* Service text */}
              <div className="absolute bottom-0 left-0 p-2 z-20">
                <div className="text-white font-title font-bold text-sm">{serv.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
