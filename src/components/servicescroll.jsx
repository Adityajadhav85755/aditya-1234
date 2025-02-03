// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Service() {
//   const services = [
//     { name: "AC Repair & Inspection", redirect: "household", image: "/Ac_Service/AC_install.jpg" },
//     { name: "Anti Rust Deep Clean", redirect: "shop", image: "/Ac_Service/Anti_Rust_Deep.jpg" },
//     { name: "AC Gas Fill", redirect: "household", image: "/Ac_Service/AC_gas_leak_refill.png" },
//     { name: "Installation", redirect: "warehouse", image: "/Ac_Service/AC_install.jpg" },
//     { name: "Uninstallation", redirect: "acservice", image: "/Ac_Service/Ac_Uninstalllation.jpeg" },
//   ];

//   return (
//     <section className="p-8 bg-terniary w-full md:w-[50%] mx-auto md:ml-[8%] flex justify-center">
//       <div className="flex overflow-x-scroll gap-x-10 w-full max-w-[900px] p-4 px-8">
//         {services.map((serv, i) => (
//           <div
//             key={i}
//             className="grid rounded-tl-lg rounded-lg overflow-hidden place-items-center w-60 shrink-0 border-2 border-primary"
//           >
//             {/* Clickable Image */}
//             <Link to={`/${serv.redirect}`} className="w-full">
//               <img
//                 src={serv.image}
//                 alt={serv.name}
//                 className="w-full h-auto object-cover p-3"
//               />
//             </Link>
//             {/* Text with underline on hover */}
//             <div className="bg-white w-full text-left p-2">
//               <Link
//                 to={`/${serv.redirect}`}
//                 className="text-2xl text-primary font-bold hover:underline"
//               >
//                 {serv.name}
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useState,useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Ac_Service_home_drop from './Ac_Service_home_drop';
// import {Ac_Service_home_drop} from './Ac_Service_home_drop'


export default function Service() {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeService]);

  const togglePopup = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const handleAddClick = (redirectPage) => {
    navigate(`/${redirectPage}`);
  };

  const services = [
    {
      name: "AC Rental",
      redirect: "warehouse",
      image: "/Ac_Service/AC.png",
      // details: [
      //   { title: 'Detail 1', price: '$100', description: 'Description of detail 1' },
      //   { title: 'Detail 2', price: '$200', description: 'Description of detail 2' },
      // ],
      details: [
        {
          title: "AC Slpit",
          price: "100 Rs.",
          description: "Professional installation of AC units with precision. Ensuring proper alignment and connection to avoid issues. Post-installation performance testing and user guidance."
        },
        {
          title: "AC windows",
          price: "100 Rs.",
          description: "Professional installation of AC units with precision. Ensuring proper alignment and connection to avoid issues. Post-installation performance testing and user guidance."
        }
      ]
    },
    {
      name: "AC AMC Service",
      redirect: "warehouse",
      image: "/Ac_Service/AMC.png",
      details: [
        {
          title: "AC Installation",
          price: "$100",
          description: "Professional installation of AC units with precision. Ensuring proper alignment and connection to avoid issues. Post-installation performance testing and user guidance."
        }
      ]
    },
    {
      name: "AC Repair & Inspection",
      redirect: "acservice",
      image: "/Ac_Service/AC_install.jpg",
      details: [
        { 
          title: "Full Gas Refill",
          price: "500. Rs.",
          description: "Ensure a complete refill of your gas cylinder or tank to meet your daily or industrial requirements. High-quality and certified gas to ensure safety and efficiency."
        }
      ]
    },
    {
      name: "Anti Rust Deep Clean",
      redirect: "shop",
      image: "/Ac_Service/Anti_Rust_Deep.jpg",
      details: [
        {
          title: "Rust Prevention Cleaning",
          price: "60 Rs.",
          description: "Detailed cleaning of internal components to prevent rust formation. Application of anti-rust solutions for enhanced longevity. Thorough inspection to ensure optimal performance post-cleaning."
        }
      ]
    },
    {
      name: "AC Gas Fill",
      redirect: "household",
      image: "/Ac_Service/AC_gas_leak_refill.png",
      details: [
        { 
          title: "Full Gas Refill",
          price: "500. Rs.",
          description: "Ensure a complete refill of your gas cylinder or tank to meet your daily or industrial requirements. High-quality and certified gas to ensure safety and efficiency."
        },
        {
          title: "Gas Top-Up",
          price: "300 Rs.",
          description: "Partial refilling for cases where only a top-up is required. Cost-effective solution to maintain uninterrupted supply."
        },
        {
          title: "Gas Leakage Repair",
          price: "700 Rs.",
          description: "Professional detection and repair of gas leaks to ensure safety. Use of advanced tools and techniques to fix leaks efficiently. Comprehensive inspection to prevent future leaks and hazards."
        },
        {
          title: "Complete Gas Refill",
          price: "400 Rs.",
          description: "Complete gas refill using certified refrigerants. Leak detection and necessary repairs before refilling. Efficiency testing post-refill to ensure cooling performance."
        },
        { 
          title: "Full Gas Refill",
          price: "500. Rs.",
          description: "Ensure a complete refill of your gas cylinder or tank to meet your daily or industrial requirements. High-quality and certified gas to ensure safety and efficiency."
        },
        {
          title: "Gas Top-Up",
          price: "300 Rs.",
          description: "Partial refilling for cases where only a top-up is required. Cost-effective solution to maintain uninterrupted supply."
        },
        {
          title: "Gas Leakage Repair",
          price: "700 Rs.",
          description: "Professional detection and repair of gas leaks to ensure safety. Use of advanced tools and techniques to fix leaks efficiently. Comprehensive inspection to prevent future leaks and hazards."
        },
        {
          title: "Complete Gas Refill",
          price: "400 Rs.",
          description: "Complete gas refill using certified refrigerants. Leak detection and necessary repairs before refilling. Efficiency testing post-refill to ensure cooling performance."
        },
        
      ]
    },
    {
      name: "Installation",
      redirect: "warehouse",
      image: "/Ac_Service/AC_install.jpg",
      details: [
        {
          title: "AC Installation",
          price: "$100",
          description: "Professional installation of AC units with precision. Ensuring proper alignment and connection to avoid issues. Post-installation performance testing and user guidance."
        }
      ]
    },
    {
      name: "Uninstallation",
      redirect: "acservice",
      image: "/Ac_Service/Ac_Uninstalllation.jpeg",
      details: [
        {
          title: "Safe Uninstallation",
          price: "$80",
          description: "Safe and damage-free removal of AC units. Inspection of components for reuse or disposal. Guidance on proper storage of uninstalled units."
        }
      ]
    }
  ];

  const styles = {
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 50,
    },
    popupContent: {
      backgroundColor: 'white',
      margin:'4px',
      borderRadius: '8px',
      padding: '24px',
      width: '80%',
      maxHeight: '75%',
      overflowY: 'scroll',
    },
    closeButton: {
      marginTop: '16px',
      marginRight: '8px',
      padding: '8px 16px',
      backgroundColor: 'primary',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    closeButtonHover: {
      backgroundColor: 'yellow',
    },
  };

  // const [activeService, setActiveService] = useState(null);

  // const togglePopup = (index) => {
  //   setActiveService(activeService === index ? null : index);
  // };

  return (
    <section className="p-8 w-full md:w-[50%] mx-auto md:ml-[8%] flex justify-center mt-34 md:mt-0">
      <div className="flex overflow-x-scroll gap-x-10 w-full max-w-full h-auto p-4 px-8 sm:px-6 md:px-8 lg:px-10 pt-10">
        {services.map((serv, i) => (
          <div
            key={i}
            className="grid rounded-tl-lg rounded-lg overflow-hidden place-items-center w-60 shrink-0 border-2 border-primary"
          >
            <Link to={`/${serv.redirect}`} className="w-full">
              <img
                src={serv.image}
                alt={serv.name}
                className="bg-terniary w-full h-auto object-cover p-3"
              />
            </Link>
            <div className="w-full text-left p-2">
              <Link
                to={`/${serv.redirect}`}
                className="text-md text-primary font-bold hover:underline"
              >
                {serv.name}
              </Link>
            </div>
            <button
              className="mb-1 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-4"
              onClick={() => togglePopup(i)}
            >
              Read
            </button>
            {/* {activeService === i && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg w-4/5 md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-primary text-center">{serv.name} - Details</h2>
                  <ul className="pl-6 space-y-4">
                    {serv.details.map((detail, index) => (
                      <li key={index} className="text-black-500">
                        <div className="flex justify-between">
                        <ul className="list-disc">
                          <li>
                          <span className="font-disc font-semibold">{detail.title}</span>
                          </li>
                        </ul>  
                          <span className="text-primary font-semibold">{detail.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{detail.description}</p>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                    onClick={() => togglePopup(i)}
                  >
                    Close
                  </button>
                  <button
                    className="ml-2 mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                    onClick={() => handleAddClick('acservice')}
                  >
                    Add
                  </button>
                </div>
              </div>
            )} */}
            {activeService === i && (
              <div style={styles.popupOverlay}>
                <div style={styles.popupContent}>
                  <h2 className="text-2xl font-bold mb-4 text-primary text-center">
                    {serv.name} - Details
                  </h2>
                  <ul className="pl-6 space-y-4">
                    {serv.details.map((detail, index) => (
                      <li key={index} className="text-black-500">
                        <div className="flex justify-between">
                          <ul className="list-disc">
                            <li>
                              <span className="font-disc font-semibold">
                                {detail.title}
                              </span>
                            </li>
                          </ul>
                          <span className="text-primary font-semibold">
                            {detail.price}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{detail.description}</p>
                      </li>
                    ))}
                  </ul>


                  <Ac_Service_home_drop/>
                  
                  <button
                    style={styles.closeButton}
                    className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-500"
                    onClick={() => togglePopup(i)}
                  >
                    Close
                  </button>
                  <button
                    className="ml-2 mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-500"
                    onClick={() => handleAddClick('acservice')}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
