import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding, faBoxOpen, faStore, faWarehouse, faSnowflake, faClipboardCheck, faWrench, faCity, faTruck, } from '@fortawesome/free-solid-svg-icons';

import WO from '../assets/images/whatoffer33.jpg'
export default function WhatOffer() {
  const [showAll, setShowAll] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const offers = [

    {
      title: "Local Shifting",
      icon: faHouse,  // Adding the imported icon here
      description: "We provide reliable local and long-distance household shifting services, ensuring your belongings are safely packed, moved, and unpacked with care, making your relocation tension-free.",
      features: [
        {
          "title": "Careful Packing",
          "description": "We pack your items safely to avoid damage. (Hum aapke saman ko dhyaan se pack karte hain, taaki koi nuksan na ho)."
        },
        {
          "title": "Easy Moving",
          "description": "Our team helps with lifting and transporting your things. (Hum aapka saman uthate hain aur naye ghar tak le jaate hain)."
        },
        {
          "title": "Fast & Safe Delivery",
          "description": "We deliver everything on time and safely to your new home. (Hum aapka saman samay par aur surakshit tareeke se naye ghar mein pahuncha dete hain)."
        },
        {
          "title": "Affordable & Reliable",
          "description": "Affordable and reliable moving services for your convenience. (Sasti aur vishwasniya moving services)."
        },
        {
          "title": "Unpacking Assistance",
          "description": "We help you unpack your items and settle in quickly. (Hum aapka saman kholne mein madad karte hain, taaki aap jaldi set ho sakein)."
        },
        {
          "title": "Door-To-Door Service",
          "description": "Complete Door-To-Door shifting service for your convenience. (Door-to-door shifting service aapke liye)."
        }
      ],
      detail: [

        "Careful Packing: We pack your items safely to avoid damage.(Hum aapke saman ko dhyaan se pack karte hain, taaki koi nuksan na ho)`.",
        "Easy Moving: Our team helps with lifting and transporting your things. (Hum aapka saman uthate hain aur naye ghar tak le jaate hain).",
        "Fast Safe Delivery: We deliver everything on time and safely to your new home. (Hum aapka saman samay par aur surakshit tareeke se naye ghar mein pahuncha dete hain).",
        "Affordable Reliable: Affordable and reliable moving services for your convenience. (Sasti aur vishwasniya moving services).",
        "Unpacking Assistance: We help you unpack your items and settle in quickly. (Hum aapka saman kholne mein madad karte hain, taaki aap jaldi set ho sakein).",
        // "StressFreeMoving: Stress-free moving as we handle everything for you. (Hum sab kuch handle karte hain, taaki aapko stress na ho).",
        "Door-To-Door Service: Complete Door-To-Door shifting service for your convenience. (Door-to-door shifting service aapke liye)."

      ],
    },
    {
      title: "Corporate Shifting ",
      icon: faBuilding,  // Adding the imported icon here
      description: "We offer smooth local & long-distance office shifting services,safe and organized moving of furniture, office equipment,& important documents and disruption to your work.",
      features: [
        {
          "title": "Safe Packing",
          "description": "We pack your office items like furniture, computers, and files carefully to keep them safe. (Hum aapke office saman ko dhyaan se pack karte hain, taaki koi nuksan na ho)"
        },
        {
          "title": "Secure Moving",
          "description": "We make sure your office things are moved safely from the old place to the new one. (Aapke office saman ko purani jagah se nayi jagah tak surakshit le jaate hain)"
        },
        {
          "title": "Fast Setup",
          "description": "Once moved, we help set everything up quickly at the new office. (Naye office mein jaldi se sab kuch set kar dete hain)"
        },
        {
          "title": "Less Interruption",
          "description": "We work to make sure your work is not interrupted while moving. (Aapka kaam rukne nahi paaye, hum ise smoothly karte hain)"
        },
        {
          "title": "Reasonable Prices",
          "description": "Our office moving service is affordable, with no hidden costs. (Humari office shifting services sasti hain aur kisi extra cost ka koi jhanjhat nahi)"
        },
        {
          "title": "Skilled Team",
          "description": "Our team is trained and knows how to handle office items carefully. (Hamari team kaafi skilled hai aur har saman ko dhyaan se handle karti hai)"
        },
        {
          "title": "On-Time Delivery",
          "description": "We make sure your office items arrive at the new place when promised. (Hum aapka saman samay par nayi jagah tak pahucha dete hain)"
        },
        {
          "title": "Full-Moving Service",
          "description": "From packing to unpacking, we do everything to make your office shift smooth. (Hum packing se leke unpacking tak sab kuch karte hain, taaki aapka office shift easy ho)"
        },
      ],
    },
    {
      title: "Pack & Unpack",
      icon: faBoxOpen,  // Adding the imported icon here
      description: "Our packaging and unpacking services make moving simple by carefully packing your items, transport them safely, and quickly unpacking your home or office.",
      features: [
        {
          "category": "Packaging",
          "details": [
            {
              "title": "Careful Wrapping",
              "description": "We wrap your items properly using strong materials to protect them during the move. (Hum aapke saman ko dhyaan se wrap karte hain, taaki moving ke dauran koi nuksan na ho)."
            },
            {
              "title": "Use Of Quality Materials",
              "description": "We use high-quality packing materials like bubble wrap, sturdy boxes, and foam to keep everything safe. (Achhe quality ke packing material ka use karte hain, jisse saman safe rahe)."
            },
            {
              "title": "Labeling",
              "description": "Each box is labeled with its contents, so it's easy to know what's inside and where it goes. (Har box par uska content likha hota hai, taaki unpacking mein aasan ho)."
            },
            {
              "title": "Special Care For Breakable Items",
              "description": "Breakable things like glassware, electronics, and artwork are packed with extra care. (Jo saman toot sakta hai, jaise glass ya electronics, unhe extra dhyaan se pack karte hain)."
            },
            {
              "title": "Customized Packing",
              "description": "We customize packing based on the size and type of the items to ensure safety. (Har saman ke size aur type ke hisaab se packing ka tareeka alag hota hai)."
            },
            {
              "title": "Secure Sealing",
              "description": "All boxes are sealed properly to avoid any spillage or damage during transport. (Boxes ko acche se seal karte hain, taaki saman gir na jaye)."
            },
            {
              "title": "Space Management",
              "description": "We organize your items efficiently to save space and reduce shifting costs. (Hum saman ko aise pack karte hain ki space ka istemal acche se ho aur cost kam ho)."
            }
          ]
        },
        {
          "category": "Unpacking",
          "details": [
            {
              "title": "Safe Unpacking",
              "description": "We unpack your items carefully to avoid any damage. (Hum aapka saman dhyaan se unpack karte hain, taaki kuch toot na jaye)."
            },
            {
              "title": "Proper Sorting",
              "description": "Once unpacked, we sort everything so it's easy to organize in your new space. (Unpacking ke baad, saman ko properly sort karte hain, taaki naye ghar ya office mein sab kuch organize ho jaye)."
            },
            {
              "title": "Disposal Of Packing Materials",
              "description": "After unpacking, we help you get rid of all the packing materials like boxes and plastic. (Hum aapko packing material ko dispose karne mein madad karte hain)."
            },
            {
              "title": "Reassembly",
              "description": "If needed, we reassemble furniture or items that were disassembled during packing. (Agar koi saman tod ke pack kiya gaya tha, toh hum use dobara jod kar set karte hain)."
            },
            {
              "title": "Setup Assistance",
              "description": "We also help in setting up things like electronics or furniture, so everything is ready for use. (Hum aapki cheezon ko setup karne mein bhi madad karte hain, taaki aap directly use kar sakein)."
            },
            {
              "title": "Damage Check",
              "description": "After unpacking, we check each item for any damage and resolve any issues. (Unpacking ke baad hum saman ko check karte hain, aur agar koi damage ho toh uska solution dete hain)."
            },
            {
              "title": "Quick and Efficient",
              "description": "Our team unpacks everything quickly so you can settle into your new place without any delays. (Humari team jaldi aur efficiently saman unpack kar deti hai, taaki aap bina kisi delay ke apne naye ghar mein settle ho sakein)."
            }
          ]
        }
      ],


    },
    {
      title: "Shop",
      icon: faStore,  // Adding the imported icon here
      description: "Our shop provides quality products for local and long-distance customers with affordable prices, great service, excellent selection, and a smooth shopping experience",
      features: [
        {
          "title": "Safe Packing",
          "description": "Your shop items like furniture, electronics, and products are packed safely to prevent damage. (Saman ko achhe se pack karte hain, taaki kuch na toote)."
        },
        {
          "title": "Secure Transport",
          "description": "All items are shifted using strong and reliable vehicles for a safe journey. (Mazboot gaadiyon se saman shift karte hain)."
        },
        {
          "title": "Quick Setup",
          "description": "We help arrange everything in your new shop quickly, so you can start working soon. (Nayi shop mein jaldi set karte hain, taaki kaam jaldi shuru ho)."
        },
        {
          "title": "Organized Shifting",
          "description": "We keep a list of all items to ensure nothing is misplaced. (Har cheez ki proper list banate hain, taaki kuch miss na ho)."
        },
        {
          "title": "Affordable Service",
          "description": "We provide pocket-friendly shifting options without extra charges. (Budget-friendly shifting services dete hain, bina extra paisa charge kiye)."
        },
        {
          "title": "Experienced Team",
          "description": "Our team knows how to handle delicate items with care. (Hamari team trained hai aur nazuk saman dhyan se handle karti hai)."
        },
        {
          "title": "On-Time Delivery",
          "description": "We ensure your shop items reach the new location on time. (Saman ko time par pahuchate hain)."
        },
        {
          "title": "Customized Plans",
          "description": "Shifting options are available as per your shop's size and needs. (Aapke shop ke size aur zarurat ke hisaab se shifting plan dete hain)."
        }
      ],

    },
    {
      title: "Warehouse",
      icon: faWarehouse,  // Adding the imported icon here
      description: "A warehouse provides secure, organized storage space for goods, offering inventory management, easy access, and flexible solutions for businesses.",
      features: [
        {
          "title": "Storage Space",
          "description": "A warehouse is a large space where you can safely store your items when you don't need them for a while. (Jahaan aap apne saman ko safe rakh sakte ho.)"
        },
        {
          "title": "Security",
          "description": "Warehouses have security measures like cameras and locks, so your things stay protected. (Cameras aur locks hoti hain taaki aapka saman surakshit rahe.)"
        },
        {
          "title": "Inventory Management",
          "description": "Every item in the warehouse is tracked and recorded, so you can easily find it when needed. (Har cheez ka record rakha jata hai.)"
        },
        {
          "title": "Temporary Storage",
          "description": "If you need to store your things for a short time, a warehouse is a great option. (Agar thodi der ke liye saman rakhna ho, to warehouse sahi rahega.)"
        },
        {
          "title": "Space For Large Items",
          "description": "Whether it's furniture, machinery, or other large items, warehouses have enough space for them. (Bade saman jaise furniture ya machines rakhne ki jagah milti hai.)"
        },
        {
          "title": "Flexible Options",
          "description": "Many warehouses offer flexible storage options where you can change the duration or type of storage as needed. (Aap apne hisaab se storage time aur options adjust kar sakte ho.)"
        },
        {
          "title": "Delivery & Pick-Up",
          "description": "Some warehouses offer delivery and pick-up services, so your things can be moved from your house to the warehouse easily. (Aapka saman ghar se pick-up karke ya deliver kar ke warehouse tak pahunchaya jaata hai.)"
        },
        {
          "title": "Safe For Business",
          "description": "If you're a business owner, a warehouse is a good place to store your extra stock. (Business ke liye extra saman store karna asaan hota hai.)"
        },
        {
          "title": "Climate Control",
          "description": "Some warehouses have controlled temperatures to protect sensitive items like electronics or food. (Kuch warehouses mein temperature control hota hai taaki sensitive saman safe rahe.)"
        },
        {
          "title": "Easy Access",
          "description": "You can access your stored items easily whenever you need them. (Aapko apna saman asaani se mil jaata hai jab bhi zarurat ho.)"
        }
      ],

    },
    {
      title: "AC Rent",
      icon: faSnowflake,  // Adding the imported icon here
      description: "AC rental services offer affordable cooling solutions, providing hassle-free installations and maintenance for short-term and long-term needs.",

      features: [
        {
          title: "1. Window AC",
          details: [
            {
              title: "Affordable Price",
              description: "Rent Window AC's budget-friendly prices for homes, offices, or events."
            },
            {
              title: "Quick Install",
              description: "We ensure proper setup and functioning."
            },
            {
              title: "Regular Maintenance",
              description: "Ongoing maintenance and service during the rental period to keep the AC in top condition."
            },
            {
              title: "Timely Delivery",
              description: "On-time delivery of the Window AC to your location with good-free setup."
            }
          ]
        },
        {
          title: "2. Split AC",
          details: [
            {
              title: "Affordable Pricing",
              description: "Cost-effective rental rates for Split ACs, suitable for homes, offices, and events (ghar, office, ya events ke liye sasta aur affordable rates)."
            },
            {
              title: "Quick Install",
              description: "We ensure the AC is set up properly and works efficiently (jaldi se installation, taaki AC sahi se chal sake)."
            },
            {
              title: "Regular Maintenance",
              description: "Servicing and maintenance included to keep your AC in top condition throughout the rental period (regular service, taaki AC hamesha achha chale)."
            }
          ]
        }
      ],
    },
    {
      title: "AMC",
      icon: faClipboardCheck,  // Adding the imported icon here
      description: "[Annual Maintenance Contract] AMC is a service that keeps your AC running smoothly with regular maintenance and free repairs for a whole year.",
      features: [
        {
          title: "1. Split AC",
          details: [
            {
              "title": "Regular Servicing",
              "description": "Split ACs are checked and cleaned regularly to ensure they stay cool and run smoothly (bar-bar service se AC ko taaza rakhein)."
            },
            {
              "title": "Quick Fixes",
              "description": "If there’s any problem, AMC takes care of repairs or part replacements (agar kuch toot gaya toh repair ho jayega bina extra paisa diye)."
            },
            {
              "title": "Avoid Unexpected Bills",
              "description": "AMC covers all repair and service costs, so you don't get shocked by surprise charges (na koi extra bill aayega na tension)."
            }
          ],
        },
        {
          title: "2. Window AC",
          details: [
            {
              "title": "Routine Maintenance",
              "description": "Window AC gets regular care to make sure it's working properly throughout the year (AC ki proper maintenance se wo kaam karta rahega)."
            },
            {
              "title": "Easy Fixes",
              "description": "If the Window AC has any issues, AMC covers all repairs and part replacements (agar kuch khatam ho gaya toh repair ka tension nahi)."
            },
            {
              "title": "Money Saved",
              "description": "AMC helps you save money because it covers both repairs and regular check-ups, preventing extra costs (paisa bachao aur AC ko sahi rakho)."
            }
          ],
        }
      ],

    },
    {
      title: "AC Service/ repair",
      icon: faWrench,  // Adding the imported icon here
      description: "Expert AC repair services for all brands, diagnosing and fixing issues quickly to restore comfort and performance in your cooling system.",
      features: [
        {
          title: "Quick Fixed",
          description: "We fix problems like strange sounds or weak cooling fast, so your AC works like new. (AC ki chhoti problems ko jaldi theek karenge)."
        },
        {
          title: "Coolant Check",
          description: "We check and refill the coolant to make sure your AC cools properly. (Coolant ka level check karna zaroori hai)."
        },
        {
          title: "Repairs for Electrical and Mechanical Issues",
          description: "We fix any electrical or mechanical problems to stop your AC from breaking down. (Electrical aur mechanical problems ko theek karna)."
        },
        {
          title: "Saving Energy",
          description: "We make sure your AC uses less electricity, saving money on your bill. (AC ko energy-efficient banana, taaki bijli ka bill kam ho)."
        },
        {
          title: "Fast Service",
          description: "We come quickly and fix your AC so it doesn't stop working. (Jaldi service, taaki AC kabhi rukke nahi)."
        },
        {
          title: "Affordable Pricing",
          description: "We offer fair prices without hidden costs. (Sasti pricing, bina extra kharch ke)."
        }
      ],
    },
    {
      title: "Apartment",
      icon: faCity,  // Adding the imported icon here
      description: "An apartment provides comfortable living with all basic needs, including water, electricity, and safety, offering privacy, convenience, and a modern lifestyle for families or individuals.",
      features: [

        "We ensure your apartment belongings are moved safely with proper packing and handling. (Apke saman ko safe rakhna humari zimmedari hai)",
        "Whether shifting within the city or to another city, we’ve got you covered. (Chhoti ya lambi doori, hum aapke saath hain)",
        "Our team works swiftly to minimize the time and effort required for your move. (Jaldi kaam, kam mehnat - aapka time bachaana humara kaam)",
        "We provide careful packaging and unpacking services, making your move hassle-free. (Packing aur unpacking, bina kisi dikkat ke)",
        "Tailored moving plans based on your apartment size, budget, and specific needs. (Aapki zarurat ke hisaab se, bilkul aapke budget me)",
        "Quality service at competitive rates to suit your budget. (Best service, budget-friendly daam)",
        "Our expert team ensures a smooth and stress-free relocation process. (Humare professionals aapka kaam aasaan banate hain)",
        "We take utmost care to prevent any damage to your belongings during the move. (Koi damage nahi, bas safe move)"


      ],

    },
    {
      title: "Vehicle Shifting",
      icon: faTruck,
      description: "Vehicle shifting provide a safe on moving your car or bike from one place to another. We use special trucks to transport your vehicle safely,Also it reaches the destination without any damage.",
      features: [
        {
          title: "Door-to-Door Pickup and Drop",
          description: "We pick up your vehicle directly from your home and deliver it safely to your chosen location. You don’t need to worry about going anywhere. (aapko tension lene ki zarurat nahi hai)"
        },
        {
          title: "Safe Packing for Vehicles",
          description: "Your car or bike is packed properly using special materials to protect it from scratches or damage during the journey. (gaadi bilkul safe hai)"
        },
        {
          title: "Insurance Coverage for Peace of Mind",
          description: "We provide insurance for your vehicle so that you are protected in case of any unexpected damage. (bhool jao fikar aur relax ho jao)"
        },
        {
          title: "Live Tracking Facility",
          description: "You can track your vehicle's exact location in real-time during the entire process. (apki gaadi ka update ab har waqt milega)"
        },
        {
          title: "Handled by Experts",
          description: "Our experienced team takes care of loading and unloading your vehicle safely to avoid any damage. (humari team expert hai)"
        },
        {
          title: "Option of Open and Enclosed Carriers",
          description: "We offer two types of transportation options—open carriers for cost-effectiveness and enclosed carriers for extra safety. You can choose whichever suits you. (apki choice, apka style)"
        },
        {
          title: "Timely Delivery Guaranteed",
          description: "We deliver your vehicle on time so that your daily plans are not affected. (apka time hum samajhte hain)"
        },
        {
          title: "Special Bike Shifting Service",
          description: "We also provide safe transport for bikes, ensuring they reach their destination without any scratches or damage. (gaadi safe aur sound pohchti hai)"
        },
        {
          title: "Customized Service for Every Vehicle",
          description: "Whether it’s a small car, SUV, or bike, we customize the shifting process based on the type of vehicle. (har gaadi ke liye perfect plan hai)"
        },
        {
          title: "Affordable and Transparent Pricing",
          description: "Our vehicle shifting services are priced reasonably without hidden costs, making it easy on your pocket. (aapka budget, humari priority)"
        },
      ],
    },
  ];


  const visibleOffers = showAll ? offers : offers.slice(0, 4);
  const [serviceType, setServiceType] = useState("shifting");

  const handleReadMore = (offer) => {
    setSelectedOffer(offer);
  };


  const handleClosePopup = () => {
    setSelectedOffer(null);
  };

  return (
    <section
      className="flex flex-col font-serif  items-center md:items-start bg-gray-100 text-white w-full px-4 py-8  bg-cover md:w-[50%] md md:ml-[8%]"
    // style={{
    //   backgroundImage: url(${WO}),
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   minHeight: "40vh", // Ensures the section spans the full screen
    // }}
    >
      <div className="w-full max-w-[95%] sm:max-w-[76%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] md:ml-20 mx-auto px-4 md:px-8">
        <h2 className="text-center font-bold text-button font-title text-2xl sm:text-2xl lg:text-4xl mb-6 w-full md:ml-24">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-[10rem] gap-y-8 box-border">
          {visibleOffers.map((offer, index) => (
            <div
              key={index}
              className="product-box bg-white text-black p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full sm:w-[250px] box-border"
            >
              <div className="flex items-center gap-x-3 mb-2">
                <FontAwesomeIcon
                  icon={offer.icon}
                  className="text-purple-700 text-3xl"
                />
                <h3 className="product-title font-title font-bold text-lg">{offer.title}</h3>
              </div>
              <p className="description text-sm md:text-base mb-4 font-body">
                {offer.description}
              </p>
              <div></div>
              <button
                onClick={() => handleReadMore(offer)}
                className="read-more-btn text-primary bg-transparent border border-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors text-sm font-body"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8 md:ml-8">
            <button
              onClick={() => setShowAll(true)}
              className="see-more-btn bg-other2 font-body text-white px-6 py-2 rounded hover:bg-other1 transition-colors text-sm sm:text-base md:ml-24"
            >
              See More
            </button>
          </div>
        )}

        {selectedOffer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black w-full max-w-2xl p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
              <h3 className="text-lg font-title font-bold mb-4 text-center">
                {selectedOffer.title}
              </h3>
              <div className="flex justify-center mb-4">
                <span className="text-lg text-blue-500 font-title font-extrabold text-center">
                  "Hum hain Sky Need Solution, shifting ka best solution!"
                </span>
              </div>

              {/* features mapping */}
              {selectedOffer && selectedOffer.features && (
                <div className='ml-4 font-body'>

                  {selectedOffer.features.map((feature, index) => (
                    <div key={index}>
                      {/* Check if the feature has a 'details' array */}
                      {feature.details ? (
                        <div>
                          <h1 className="font-bold font-title">{feature.title}</h1>
                          <ul className='list-disc font-body'>
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>
                                <strong>{detail.title}:</strong> {detail.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : typeof feature === 'string' ? (
                        // Handle the case where the feature is just a string (like in "Apartment")
                        <ul className='list-disc font-body'>
                          <li key={index}>{feature}</li>
                        </ul>
                      ) : (
                        // If it's an object with title/description properties
                        <ul className='list-disc font-body'>
                          <li>

                          <strong>{feature.title}</strong>
                          </li>
                          <p>{feature.description}</p>
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}


              <button
                onClick={handleClosePopup}
                className="font-body absolute top-2 right-2 text-red-800 bg-gray-100 rounded-full px-3 py-1 hover:bg-red-600 transition"
              >
                X
              </button>
              <div className="scroll-indicator w-full mt-2 text-sm text-gray-500 text-center font-body">
                Scroll for more content
              </div>
            </div>
          </div>
        )}
      </div>
    </section >



  );
}