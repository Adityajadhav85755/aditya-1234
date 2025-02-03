import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding, faStore, faWarehouse, faSnowflake,  faWrench,  faTruck,faClipboardCheck, } from '@fortawesome/free-solid-svg-icons';
const services = [
  {
    id: 'rental-ac',
    icon: faSnowflake,
    tablestatement: [
      {
        "statement": "The costs for rental AC services are approximate and can vary depending on factors like the type of AC, rental duration, and service provider. For the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      },  
    ],  
      tabledesc: [
      {
        "heading": "Cost of Rental AC Services in Mumbai",
        "desc": "This table details the cost of rental AC services in Mumbai, covering different models and rental durations available for short-term and long-term needs."
      },
    
    ],
    title: 'Rental Air Conditioner (AC)',
    description: "Rent air conditioners for short or long-term use, providing a simple, cost-effective solution.",
    description2: 'Affordable AC rental options for any duration, perfect for temporary needs or events. Click below to learn more.',
    descriptionpoint: [
      "Cheap rates for split and window ACs.",
      "Rent for a few days or months, whatever you need.",
      "Free delivery and setup at your place.",
      "We pick it up and uninstall when you’re done.",
      "ACs are clean and in good condition.",
      "No hidden costs, everything is clear.",


    ],
    details1: "Our AC rental service offers a variety of high-performance units from top brands, catering to different space sizes and cooling needs. With flexible rental periods, easy installation, and maintenance support, we ensure optimal performance. Transparent pricing, free delivery, and emergency repair services make renting easy and affordable, with no upfront costs and efficient service throughout the rental duration.",
    details: 'AC rental services are designed to help people and businesses stay cool without the hassle of buying and maintaining an air conditioner. Whether it’s for a short-term event, a temporary need during summer, or long-term use, renting an AC is a flexible and affordable option. Sky Need Solution offers reliable and efficient AC rental services in Mumbai, ensuring comfort with minimal effort. Our service includes the delivery, installation, and maintenance of the rented AC units. We handle everything, from setting up the system to regular servicing and repairs. You don’t need to worry about hidden costs or extra charges.',
    approximateCost: '₹4,000 - ₹10,000 per month',
    Type: [
      {
        type1: "1.Window AC",
        Ddescription2: "Window ACs are compact units installed in a window or wall opening, ideal for smaller spaces like single rooms or office cabins. They are cost-effective, easy to install, and operate efficiently.",
        installation2: "Our technicians install the unit securely in a window or wall opening, ensuring a proper seal to prevent air leaks and enhance cooling efficiency.",
        uninstallation2: "When it’s time for removal, we carefully uninstall the unit, ensuring no damage to the window or surrounding structure. We handle the packing or disposal of the unit if necessary."
      },
      {
        type1: "2.Split AC",
        Ddescription2: "Split ACs feature two units: an indoor unit for cooling and an outdoor unit for heat release. They are quieter, more powerful, and suitable for larger rooms or halls, adding a sleek, modern touch to your space.",
        installation2: "Our team installs both the indoor and outdoor units, ensuring proper placement and connection for optimal performance. The installation process is quick, and we check the system to ensure everything works perfectly.",
        uninstallation2: "During uninstallation, we carefully disconnect and remove both units, ensuring no damage to walls or exterior spaces. The components are safely packed for relocation or disposal."
      }

    ],
    brands: [" Daikin", "Voltas", "Hitachi", "LG", "Samsung", "Mitsubishi Electric", "Carrier", "Godrej"],

    duration: [
      { duration: "1 Month", price: 1499 },
      { duration: "3 Month", price: 3499 },
      { duration: "6 Month", price: 7499 },
      { duration: "1Year", price: 12499 },
    ],
    serviceinclude: [
      "Professional installation and uninstallation by experienced technicians.",
      "Quick and safe setup to ensure proper functionality.",
      "Regular servicing and cleaning to keep your AC in top condition.",
      "Performance checks to avoid sudden breakdowns.",
      "Increases the longevity and efficiency of the unit.",
      "Fast, reliable emergency repair services to restore cooling.",
      "Minimize downtime and discomfort caused by a malfunction.",
      "24/7 availability to ensure quick responses.",
      "Dedicated customer support available any time, day or night.",
      "Prompt assistance for any questions or issues you encounter.",
      "Reliable communication for smooth and timely service.",
      "Expert recommendations based on your space and cooling requirements.",
      "Helps you choose the most energy-efficient AC models.",
      "Reduces electricity bills by ensuring optimal energy use.",


    ],
    servicenotinclude: [
      "We do not provide electrical wiring services or alterations to your existing electrical setup. Any electrical changes required are the responsibility of the customer.",
      "We do not handle any structural modifications, such as creating new window openings or wall alterations for AC installation.",
      "Our services do not cover damage caused by misuse, excessive use, or operating the AC in extreme conditions outside of standard residential or commercial setups.",
    ],
    // service: ["Installation", "Uninstallation"],
    // repair: ["dis"],
    ACcondition: [
      "The AC unit is regularly inspected to check for any issues.",
      "We ensure that the AC is in good working condition before every use.",
      "The cooling performance is tested to confirm it’s working at its best.",
      "We focus on making sure your AC provides consistent cooling.",
      "Energy-efficient AC units are used to save electricity and reduce bills.",
      "All parts of the AC are checked for wear and tear during regular servicing.",
      "Filters are cleaned or replaced to ensure clean air circulation.",
      "Coils are regularly cleaned to improve efficiency and avoid issues.",
      "We fix any small issues early to prevent them from becoming big problems.",
      "The refrigerant levels are checked and topped up if needed to maintain performance.",
      "The AC’s compressor is inspected to make sure it's working properly.",
      "We ensure the AC doesn’t make any annoying noises while running.",
      "The thermostat is calibrated to ensure accurate temperature control.",
      "We check for any water leakage and fix it right away.",
      "We ensure there are no blockages in the drainage pipes of the AC.",
      "The fan is checked to ensure proper airflow for cooling.",
      "The AC unit is inspected for any signs of damage to the outer body.",
      "We make sure that the unit is free from rust or corrosion.",
      "Regular servicing includes checking the ductwork to ensure no dust or debris is blocking airflow.",
      "The overall condition of the AC is monitored, ensuring smooth operation.",

    ],
    Benefits: [

      {
        title: "Cost-Effective Solution",
        descriptionpoint: [
          "No large upfront payment required for purchasing an AC.",
          "Pay only for the duration of the rental, saving you money.",
          "Avoid the long-term costs of ownership, including repair and maintenance.",
        ],
      },
      {
        title: "Flexible Rental Terms",
        descriptionpoint: [
          "Rent AC units for short-term or long-term needs.",
          "Customizable rental durations based on your requirements.",
          "Ideal for temporary setups like events, vacations, or new homes.",
        ],
      },
      {
        title: "Convenience and Smooth Setup",
        descriptionpoint: [
          "AC units are delivered, installed, and maintained by us.",
          "No need to worry about servicing or repairs – it’s all included.",
          "Quick setup with no effort required on your part.",
        ],
      },
    ],

    // Servicesoffer: [
    //   {
    //     title: "Cost-Effective Solution",
    //     descriptionpoint: [
    //       "No large upfront payment required for purchasing an AC.",
    //       "Pay only for the duration of the rental, saving you money.",
    //       "Avoid the long-term costs of ownership, including repair and maintenance.",
    //     ],
    //   },],
    Approch: [
      {
        title: "Needs Assessment",
        descriptionpoint: [
          "We begin by evaluating your cooling requirements through a detailed consultation to ensure you get the perfect AC model.",
          "Whether for residential or commercial spaces, we prioritize comfort and energy efficiency in our recommendations.",
        ],
      },
      {
        title: "Flexible Rental Plans",
        descriptionpoint: [
          "Choose from short-term or long-term rental plans tailored to meet your specific cooling needs.",
          "Our plans offer flexibility to renew or terminate based on your usage and preferences.",
        ],
      },
      {
        title: "Seamless Installation & Removal",
        descriptionpoint: [
          "Our expert team manages the installation of your AC unit, ensuring optimal performance from day one.",
          "At the end of the rental period, we handle the removal process, leaving you stress-free.",
        ],
      },
      {
        title: "Regular Maintenance",
        descriptionpoint: [
          "We provide regular servicing to keep your rented AC in excellent condition throughout the rental period.",
          "Routine maintenance helps prevent unexpected breakdowns and ensures long-term efficiency.",
        ],
      },
      {
        title: "Cost-Effective Solution",
        descriptionpoint: [
          "No large upfront payment required for purchasing an AC.",
          "Pay only for the duration of the rental, saving you money.",
          "Avoid the long-term costs of ownership, including repair and maintenance.",
        ],
      },
    ],


    whychoose: [
      {
        // title: "Why Choose Sky Need Solution for AC Rental Service?",
        options: [
          {
            title: "Wide Range of Options",
            content: [
              "We offer a variety of AC models, including split and window ACs, to meet your cooling needs.",
              "Our diverse range ensures that you find the ideal solution for both residential and commercial spaces.",
              "Whether you need a basic model or high-performance units, we have the right options available.",
              "All our ACs are well-maintained and serviced before delivery, ensuring optimal performance."
            ]
          },
          {
            title: "Affordable Pricing",
            content: [
              "Our rental plans are designed to be budget-friendly, with no hidden charges.",
              "You can enjoy cost-effective cooling without compromising on quality or service.",
              "Flexible payment options are available to suit your financial needs, making it easier to manage your expenses.",
              "Enjoy competitive rates that make us one of the most affordable options in the market."
            ]
          },
          {
            title: "Quick Delivery and Installation",
            content: [
              "We guarantee fast delivery and professional installation, ensuring your AC is set up and operational without delays.",
              "Our team works efficiently to minimize any inconvenience and get you comfortable as soon as possible.",
              "We offer same-day delivery and installation services for urgent requirements.",
              "Our installation process is hassle-free, ensuring no damage to your property."
            ]
          }
        ]
      }
    ],

    howtobook: [
      {
        title: "Visit Our Website",
        description: "Go to our official website and navigate to the AC Rental Service section."
      },
      {
        title: "Call or WhatsApp Us",
        description: "Reach out to our customer care team via call or WhatsApp to discuss your requirements."
      },
      {
        title: "Choose Your AC",
        description: "Select the type and duration of AC rental as per your needs."
      },
      {
        title: "Confirm Booking",
        description: "Confirm your booking and share the delivery address and preferred installation date."
      },
      {
        title: "Enjoy Cool Air",
        description: "Sit back and relax as we handle delivery, installation, and servicing of the AC."
      }
    ],

    faq: [
      {
        question: "What types of ACs are available for rent?",
        answer: "We provide two types of air conditioning units for rent: window ACs and split ACs. Whether you need a compact window unit for a small room or a split AC for better airflow and quieter operation, we have options to suit your needs.",
      },
      {
        question: "What is the minimum rental duration?",
        answer: "The minimum rental duration for our air conditioning units is one month. This allows us to ensure you get the best service and support throughout the rental period. For short-term rentals, we offer flexible options, so feel free to inquire about your specific needs.",
      },
      {
        question: "Are maintenance and servicing included?",
        answer: "Yes, maintenance and servicing are included in the rental price. We take full responsibility for keeping the ACs in optimal working condition, with regular servicing and prompt repairs as needed, so you can enjoy hassle-free comfort during the entire rental period.",
      },
      {
        question: "Do you charge a security deposit?",
        answer: "Yes, a refundable security deposit is required at the time of booking. This deposit ensures the safety of the equipment and is refunded to you upon return of the AC in good condition. The amount varies based on the type of AC you rent, and we will inform you of the exact deposit required at the time of booking.",
      },
      {
        question: "How soon can I get the AC delivered and installed?",
        answer: "Once your booking is confirmed, we aim to deliver and install your air conditioning unit within 24-48 hours. Our team of professionals ensures that the installation is done correctly and efficiently, so you can start enjoying the cooling experience without delay.",
      },
      {
        question: "Can I rent an AC for a single day or event?",
        answer: "Yes, we offer short-term rental options for events, parties, or one-day usage. We understand that some occasions require temporary cooling solutions, and we provide flexible rental packages tailored to your specific event needs. Please contact us directly for customized pricing and availability.",
      },
      {
        question: "What if the AC stops working during the rental period?",
        answer: "In the rare event that your rented AC stops working, we promise to respond quickly and resolve the issue. Our team will either repair or replace the unit at no additional cost to you, ensuring that you're never left without cooling during the rental period.",
      },
      {
        question: "How can I contact Sky Need Solution for support?",
        answer: "For any support or queries, you can easily reach Sky Need Solution via phone, WhatsApp, or email. Our customer service team is available to assist you with anything from booking assistance to troubleshooting or service inquiries, ensuring that your experience is as smooth as possible.",
      },
      {
        question: "Can I switch my AC during the rental period?",
        answer: "Yes, you can switch your AC during the rental period. If your cooling needs change or if you want to upgrade to a more powerful unit, we offer the flexibility to swap the AC. Please reach out to us, and we'll arrange the exchange based on availability.",
      },
      {
        question: "How do I make a booking?",
        answer: "Booking is simple! You can easily place an order through our website, via phone, or by messaging us on WhatsApp. Just let us know the type of AC, duration of the rental, and installation location, and we’ll handle the rest.",
      },
      {
        question: "Are there any delivery charges?",
        answer: "Delivery charges may apply depending on the location and distance. We strive to offer affordable delivery rates, and any charges will be clearly communicated to you before finalizing your booking.",
      },
      {
        question: "What if I need to cancel my rental?",
        answer: "We understand that plans can change. If you need to cancel your rental, please inform us at least 48 hours in advance. Depending on the timing, cancellation charges may apply, but we always aim to be as accommodating as possible.",
      },
      {
        question: "How do I maintain the AC during the rental period?",
        answer: "You don’t need to worry about maintenance! We take care of the regular servicing and maintenance of the ACs. If you notice any issues, simply contact us, and we'll send a technician to resolve the problem promptly.",
      },
      {
        question: "Can I rent an AC for commercial or office use?",
        answer: "Yes, we provide ACs for both residential and commercial use. Whether it's for your office, retail space, or event, we have the right units to meet your business cooling requirements. Contact us for specific commercial rental rates.",
      },
      {
        question: "What if the AC is damaged during the rental period?",
        answer: "If the AC is damaged due to misuse or negligence, you may be liable for repair or replacement costs. However, if the damage is due to technical issues or wear and tear, we will handle the repairs or replacement without extra charges.",
      },
    ],

    parts: [
      { part: 'General AC Servicing', approximateCost: " Rs. 349 to Rs. 469" },
      { part: 'AC Installation', approximateCost: "Rs. 1499 to Rs. 1599" },
      { part: 'AC Uninstallation', approximateCost: "Rs. 399 to Rs. 1449" },
      { part: 'Gas Filling (1 ton)', approximateCost: "Rs. 1799 to Rs. 2299" },
      { part: 'Gas Filling (1.5 ton)', approximateCost: "Rs. 2299 to Rs. 2399" },

    ]
  },
  {
    id: 'asc',
    icon: faClipboardCheck,  // Adding the imported icon here
    tablestatement: [
      {
        "statement": "The costs for AMC (Annual Maintenance Contract) services for AC are approximate and can vary depending on factors such as the type of AC, maintenance package, and service provider. To get the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      },  
    ],  
    tabledesc: [
      {
        "heading": "Cost of AMC (Annual Maintenance Contract) for AC in Mumbai",
        "desc": "This table outlines the cost of AMC for AC services in Mumbai, detailing the various maintenance packages available for different types of air conditioners."
      },
    ],
    title: 'AC on ASC ( Annual Service Contract )',
    description: "Annual Maintenance Contract ensures regular servicing, keeping your AC in perfect condition.",
    description2: 'Regular AC check-ups and servicing for continuous performance and energy efficiency. Click below to learn more.',
    descriptionpoint: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',
      'We’ll repair it if it stops working.',
      'Skilled people take care of your AC.',
      'Quick service if theres an emergency.',
      // 'Helps your AC run better and saves energy.',

    ],
    details1: "Our AMC (Annual Maintenance Contract) service ensures your air conditioning units are consistently maintained for optimal performance. We provide routine inspections, cleaning, and necessary repairs, helping you avoid unexpected breakdowns. With flexible plans tailored to your needs, we ensure your ACs remain energy-efficient and reliable throughout the year, offering peace of mind and extending the life of your units.",
    details: 'AMC (Annual Maintenance Contract) Service. An Annual Maintenance Contract (AMC) is an essential service to ensure your air conditioners perform at their best throughout the year. Whether you have a single unit or multiple ACs, AMC guarantees regular servicing, cleaning, and repairs, saving you from unexpected breakdowns and costly repairs. At Sky Need Solution, we offer hassle-free AMC services that include routine maintenance, emergency repairs, and gas refills, keeping your air conditioners running efficiently. With our AMC service, you don’t have to worry about anything. We take care of the entire process—from installation and regular servicing to repairs and parts replacement. You can enjoy peace of mind knowing your AC is in the best hands.',
    approximateCost: '₹12,000 - ₹30,000 per year',
    parts: ["A", "B", "C"],
    Type: [
      {
        type1: "Comprehensive AMC",
        description2: [
          "Covers both maintenance and replacement of parts, ensuring your system operates at its best.",
          "Service provider bears the cost of repairs, spare parts, and labor, reducing your financial burden.",
          "Ideal for critical systems where downtime is costly and maintaining smooth operation is essential.",
          "Includes priority service for faster response times in case of emergencies.",
          "Regular inspections and maintenance to prevent potential failures and extend the life of your system."
        ],
        // installation2: "",
        // uninstallation2: ""
      },
      {
        type1: "Non-Comprehensive AMC",
        description2: [
          "Covers only regular maintenance services, ensuring your system is checked and serviced periodically.",
          "Spare parts are charged separately, offering flexibility for systems with fewer repair needs.",
          "Cost-effective for less complex systems, where extensive repair services are not frequently needed.",
          "Ideal for customers with a limited budget who want to ensure their AC runs efficiently with minimal expenses.",
          "Focuses on routine servicing to maintain the basic functionality of your equipment."
        ],
        // installation2: "",
        // uninstallation2: ""
      }
    ],
    brands: [" Daikin", "Voltas", "Hitachi", "LG", "Samsung", "Mitsubishi Electric", "Carrier", "Godrej"],

    duration: [
      { duration: "1 Year", price: 1499 },
      // { duration: "6 Month", price: 5000 },
      // { duration: "1Year", price: 9000 },
    ],
    // Updated serviceinclude array with new descriptions

    serviceinclude: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',
      'Timely and regular maintenance visits to ensure your AC runs smoothly throughout the year.',
      'Servicing helps prevent unexpected breakdowns and ensures optimal cooling efficiency.',
      'During visits, our technicians will check for any minor issues, preventing them from developing into costly repairs.',
      'Regular servicing keeps your AC running at peak performance, extending its lifespan.',
      'Thorough cleaning of the air filters and coils to maintain the quality of air and improve cooling performance.',
      'Regular cleaning helps remove dust, dirt, and allergens from the system, contributing to healthier indoor air quality.',
      'Cleaning the coils helps prevent the buildup of grime that can reduce cooling efficiency and increase energy consumption.',
      'Our cleaning process is designed to enhance airflow and reduce wear on system components, improving overall efficiency.',
      'Comprehensive AMC plans include regular checks of your AC’s refrigerant levels to ensure efficient cooling.',
      'Gas refills are provided when necessary to maintain optimal cooling performance and energy efficiency.',
      'Ensuring the correct refrigerant level prevents your AC from overworking and helps maintain its longevity.',
      'Timely refrigerant management avoids sudden cooling failures and extends the system\'s effective cooling capacity.',
      'Detailed system assessments to identify any potential issues before they turn into major problems.',
      'Inspections ensure that your system is running efficiently, detecting any faults early.',
      'Regular checks reduce the risk of system failure, helping to avoid costly emergency repairs.',
      'Our technicians also monitor for signs of wear and tear, offering proactive solutions to extend the life of your AC.',
    ],

    servicenotinclude: [
      'Major Repairs and Replacements',
      'Compressor replacement is not included in Non-Comprehensive AMC.',
      'Electrical rewiring or panel repairs are not covered under any plan.',
      'Damage due to misuse or mishandling is excluded from coverage.',
      'Installation of new AC units is not part of the AMC plan.',
      'Uninstallation or relocation of ACs is not included in AMC services.',
      'Shifting AC units between locations requires separate service booking.',
      'Repairs for physical damage caused by accidents are not covered.',
      'Maintenance due to external electrical surges is excluded.',
      'Damage caused by natural disasters like floods or earthquakes is not part of the plan.',
    ],
    // service: ["unstllation"],
    // repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [
      {
        "title": "Cost-Effective Maintenance",
        "descriptionpoint": [
          "Avoid costly emergency repairs by identifying and resolving potential problems early with routine maintenance.",
          "Enjoy a fixed annual fee that covers regular servicing and minor repairs, making budgeting for AC maintenance easier.",
          "Reduce long-term costs by minimizing wear and tear through regular professional care."
        ]
      },
      {
        "title": "Prevent Major Repairs",
        "descriptionpoint": [
          "Regular servicing ensures minor issues are addressed before they become major problems, reducing the risk of breakdowns.",
          "Comprehensive AMCs include parts replacement, eliminating the need for additional out-of-pocket expenses.",
          "Early detection of issues helps prevent costly compressor or system failures.",
          "Scheduled maintenance reduces the likelihood of emergency repairs, saving time and stress."
        ]
      },
      {
        "title": "Increased Energy Efficiency",
        "descriptionpoint": [
          "Routine maintenance keeps your AC operating at optimal efficiency, saving money on electricity bills.",
          "AMCs ensure your unit remains clean and obstruction-free, boosting cooling performance and lowering energy consumption.",
          "Properly maintained ACs use less power, reducing your carbon footprint.",
          "Regular tune-ups improve the overall performance and energy-saving potential of your system."
        ]
      },
      {
        "title": "Improved Indoor Air Quality",
        "descriptionpoint": [
          "Consistent servicing keeps filters and ducts clean, reducing allergens, dust, and bacteria in your home or office.",
          "Clean AC units provide better airflow, creating healthier and more comfortable indoor environments.",
          "Regular cleaning eliminates mold and mildew buildup, preventing unpleasant odors.",
          "Proper air circulation ensures a fresher, more hygienic living or working space."
        ]
      },
      {
        "title": "Increased Lifespan of Your AC",
        "descriptionpoint": [
          "Routine maintenance prevents overworking your system, extending its lifespan and ensuring smooth operation.",
          "Professionals regularly maintain your AC, ensuring consistent performance and longevity.",
          "Timely servicing prevents the deterioration of crucial components, avoiding premature replacements.",
          "A well-maintained AC can perform efficiently for years, maximizing your investment."
        ]
      },
      {
        "title": "Priority Service for Premium Plans",
        "descriptionpoint": [
          "Premium AMC plans prioritize your service requests, providing quick assistance during emergencies.",
          "AMCs ensure you don’t experience long delays in getting your AC repaired when issues arise.",
          "Get round-the-clock support for urgent repairs and maintenance needs with premium coverage.",
          "Enjoy hassle-free service scheduling tailored to your convenience and urgency."
        ]
      },
      {
        "title": "No Worries About Repairs or Service Delays",
        "descriptionpoint": [
          "AMC packages handle all maintenance, so you don’t have to schedule individual appointments for repairs or cleaning.",
          "Regular checkups are covered under the AMC, ensuring timely servicing at your convenience.",
          "Avoid the stress of finding reliable technicians by relying on AMC-covered expert services.",
          "Keep your AC in top condition without interruptions, thanks to scheduled and consistent care."
        ]
      }
    ],


    // Servicesoffer: [
    //   { title: 'accc' },
    //   { description: "unastaltion" },
    //   {
    //     descriptionpoint: [
    //       'Regular checks for split and window ACs.',
    //       'We clean and fix your AC on time.',
    //       'We’ll repair it if it stops working.',
    //       'Skilled people take care of your AC.',
    //       'Quick service if theres an emergency.',

    //     ]
    //   },],
    Approch: [
      {
        title: "Routine Inspections",
        descriptionpoint: [
          " Our AMC service includes regular inspections to identify potential issues and keep your AC running efficiently.",
          "Thorough evaluations ensure optimal performance throughout the year, avoiding unexpected breakdowns.",
          "We use advanced tools to detect hidden faults, ensuring no problem goes unnoticed.",
          " Routine checks help maintain consistent cooling performance, even during peak seasons."
        ]
      },
      {
        title: "Timely Service",
        descriptionpoint: [
          "We schedule routine maintenance visits for cleaning, checking refrigerant levels, and verifying all components.",
          "Timely servicing helps maintain energy efficiency and prevents potential malfunctions.",
          "Our technicians work around your schedule to provide service at your convenience.",
          "Seasonal tune-ups ensure your AC is ready to handle temperature changes without any issues."
        ]
      },
      {
        title: "Efficient Repairs",
        descriptionpoint: [
          "Our team responds quickly to address any issues and perform necessary repairs with minimal disruption.",
          "AMC customers receive priority service to ensure uninterrupted cooling comfort.",
          "Expert technicians use genuine parts to ensure long-lasting repairs.",
          "We ensure detailed diagnostics and precise fixes to prevent recurring issues."
        ]
      },
      {
        title: "Cost Savings",
        descriptionpoint: [
          "Benefit from ongoing support and reduced repair expenses through our preventive maintenance approach.",
          "Regular care extends your system’s lifespan, saving you money on premature replacements or major repairs",
          "Fixed annual costs eliminate unexpected repair bills, helping you budget effectively.",
          "Energy-efficient servicing reduces electricity consumption, further cutting down on expenses."
        ]
      }
    ],



    whychoose: [
      {
        title: "Expert Technicians",
        options: [
          {
            // title: "Quality Service",
            content: [
              "Our team is skilled, experienced, and dedicated to providing quality service.",
              "You can rely on our technicians to handle all aspects of AC servicing and repair, ensuring your system runs smoothly.",
              "We regularly train our technicians on the latest technologies and maintenance techniques for optimal results.",
              "Our technicians are certified, ensuring professional and reliable service every time."
            ]
          }
        ]
      },
      {
        title: "Flexible Plans",
        options: [
          {
            // title: "Customizable Plans",
            content: [
              "We offer both comprehensive and non-comprehensive AMC plans, allowing you to choose a package that fits your budget and needs.",
              "Tailor your service plan to suit your specific requirements, whether it's routine maintenance or full coverage including parts and labor.",
              "Our flexible plans cater to both residential and commercial needs, ensuring convenience for every customer.",
              "You can upgrade or downgrade your AMC plan as your requirements change."
            ]
          }
        ]
      },
      {
        title: "Timely and Reliable Service",
        options: [
          {
            // title: "Prompt Assistance",
            content: [
              "We understand the importance of your AC, so we ensure that our technicians arrive on time and complete the job as quickly and efficiently as possible.",
              "Our service schedule is designed for minimal disruption, offering timely maintenance and prompt repair services.",
              "We provide emergency services, ensuring you're never left without cooling in critical times.",
              "You can track your service progress with our easy-to-use customer portal."
            ]
          }
        ]
      },
      {
        title: "Customer-Centric Approach",
        options: [
          {
            // title: "Personalized Service",
            content: [
              "Our customer support team is always available to assist you with any queries or concerns.",
              "We prioritize your satisfaction, ensuring all services are carried out to the highest standard and that any follow-up issues are resolved quickly.",
              "We provide personalized service by understanding your unique cooling requirements and tailoring solutions accordingly.",
              "Your feedback is important to us; we continuously improve our services based on your input."
            ]
          }
        ]
      },
      {
        title: "Affordable and Transparent Pricing",
        options: [
          {
            // title: "Cost-Effective Solutions",
            content: [
              "We offer competitive prices with no hidden fees, ensuring you get value for your money.",
              "The pricing for AMCs is transparent, with all costs communicated upfront before service begins.",
              "Our cost-effective AMC options help you maintain your AC system without worrying about unexpected expenses.",
              "We provide detailed invoices for every service, so you’re always aware of what you’re paying for."
            ]
          }
        ]
      }
    ],


    howtobook: [
      {
        "title": "Visit Our Website",
        "description": "Navigate to the AMC section on our website and choose your preferred plan."
      },
      {
        "title": "Call or WhatsApp Us",
        "description": "Reach out to us via phone or WhatsApp to discuss your requirements and confirm the details."
      },
      {
        "title": "Select AMC Plan",
        "description": "Choose between the Comprehensive or Non-Comprehensive AMC plan."
      },
      {
        "title": "Confirm Booking",
        "description": "Provide the necessary details about your AC units, and confirm your booking."
      },
      {
        "title": "Enjoy Smooth and Secure AC Maintenance",
        "description": "Sit back and relax as we take care of the entire process—servicing, repairs, and maintenance."
      },
      // {
      //   "title": "Are There Any Hidden Costs in the AMC?",
      //   "description": "There are no hidden costs. All services and any extra charges are communicated upfront."
      // },
      // {
      //   "title": "What If My AC Requires Repair During the AMC Contract?",
      //   "description": "Comprehensive AMC covers repairs, while Non-Comprehensive AMC may require additional charges for parts or services."
      // },
      // {
      //   "title": "Is Gas Refill Included in the Comprehensive AMC?",
      //   "description": "Yes, gas refills are included in the Comprehensive AMC at no extra charge during the coverage period."
      // },
      // {
      //   "title": "What If the Service Team is Unable to Repair My AC on the First Visit?",
      //   "description": "If repairs can’t be completed on the first visit, we will schedule a follow-up appointment for the necessary repairs."
      // },
      // {
      //   "title": "How Do I Know If My AC is Eligible for an AMC?",
      //   "description": "ACs in working condition and typically between 5-10 years old are eligible for AMC. Contact us for an evaluation of your unit."
      // }
    ],
    faq: [
      {
        "title": "What’s the difference between Comprehensive and Non-Comprehensive AMC?",
        "description": "The Comprehensive AMC provides full coverage, including regular servicing, repairs, gas refills, and parts replacement, while Non-Comprehensive AMC covers routine servicing and minor repairs, with additional charges for major repairs or parts replacement."
      },
      {
        "title": "How often will my AC be serviced under an AMC?",
        "description": "The frequency of servicing depends on the AMC plan. Typically, your AC will be serviced 2-4 times a year, but the plan can be adjusted based on your needs."
      },
      {
        "title": "Are there any additional charges for emergency repairs?",
        "description": "Emergency repairs are included in the Comprehensive AMC. For Non-Comprehensive AMC, additional charges may apply depending on the situation."
      },
      {
        "title": "Do you charge for parts replacement under the Non-Comprehensive AMC?",
        "description": "Yes, parts replacement is not included in the Non-Comprehensive AMC and will be charged separately. The cost will be communicated before any work is done."
      },
      {
        "title": "How soon can I get service if my AC breaks down?",
        "description": "With the Premium AMC plan, you receive priority service, typically within 24-48 hours. Response times may vary for other AMC types based on availability."
      },
      {
        "title": "Can I upgrade my AMC during the year?",
        "description": "Yes, you can upgrade your AMC during the year to suit your needs. Contact us to adjust your plan for uninterrupted service."
      },
      {
        "title": "How can I contact Sky Need Solution for AMC service?",
        "description": "You can reach us by phone, WhatsApp, or email for any AMC-related queries, service requests, or issues."
      },
      {
        "title": "What is the minimum duration for AMC contracts?",
        "description": "The standard AMC contract duration is one year, though longer durations can be arranged for added value."
      },
      {
        "title": "Do you offer AMC for all types of ACs?",
        "description": "Yes, we offer AMC services for both window and split ACs, and we tailor plans based on your unit’s needs."
      },
      {
        "title": "Can I cancel my AMC contract mid-year?",
        "description": "Yes, you can cancel mid-year, but cancellation charges may apply depending on the contract terms. Unused service fees will be adjusted."
      },
      {
        "title": "Are there any hidden costs in the AMC?",
        "description": "There are no hidden costs. All services, including repairs and gas refills, are clearly outlined. Extra charges for parts replacement or emergency services are communicated upfront."
      },
      {
        "title": "What if my AC requires repair during the AMC contract?",
        "description": "Repairs under the Comprehensive AMC are covered. Non-Comprehensive plans may require payment for parts or additional services."
      },
      {
        "title": "Is gas refill included in the Comprehensive AMC?",
        "description": "Yes, gas refills are included in the Comprehensive AMC to ensure your AC runs efficiently."
      },
      {
        "title": "What if the service team is unable to repair my AC on the first visit?",
        "description": "If the repair isn’t completed on the first visit, we’ll schedule a follow-up appointment to complete the job."
      },
      {
        "title": "How do I know if my AC is eligible for an AMC?",
        "description": "Your AC is eligible if it’s in working condition and within the specified age limit, typically 5-10 years old. Contact us for an evaluation."
      }

    ],
    parts: [
      { part: 'General AC Servicing', approximateCost: " Rs. 349 to Rs. 469" },
      { part: 'AC Installation', approximateCost: "Rs. 1499 to Rs. 1899" },
      { part: 'AC Uninstallation', approximateCost: "Rs. 399 to Rs. 1599" },
      { part: 'Gas Filling (1 ton)', approximateCost: "Rs. 1899 to Rs. 2399" },
      { part: 'Gas Filling (1.5 ton)', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]


  },


  {
    id: 'house-shifting',
    icon: faHouse,  // Adding the imported icon here
    tablestatement: [
      {
        "statement": "The costs for house shifting services are approximate and can vary depending on factors such as the size of the house, distance, and service provider. For an accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      }, 
    ],  
    tabledesc: [
      {
    "heading": "Cost of House Shifting Services in Mumbai",
    "desc": "This table provides an overview of the cost for various house shifting services in Mumbai, including packing, moving, and unloading."
  },
    ],
    title: 'House Shifting',
    description: "Move your home items safely and quickly with our professional packing and moving services.",
    description2: "Safe and smooth packing, moving, and unpacking services to shift your home without tension. Click below to learn more.",
    descriptionpoint: [
      'We pack your things safely, including breakable stuff.',
      'Strong packing to keep everything safe',
      'Our team loads and unloads everything.',
      'Special care for delicate things like glass and electronics.',
      'You can pick the time that works best for you.',
      'Fair prices, no surprise fees.',
    ],
    details1: "Our house shifting service provides a reliable and efficient solution for moving your belongings. We handle everything from packing and loading to transportation and unloading, ensuring your items are safe and secure throughout the process. With experienced movers and careful attention to detail, we make relocating to your new home stress-free and convenient, all at competitive rates.",
    details: "Relocating can be a daunting task, but Sky Need Solution simplifies the process with our professional local and long-distance shifting services. Whether you’re moving across the city or to a different state, we ensure that your belongings reach their destination safely and on time.Our services include packing, transportation, and unpacking, tailored to meet your specific needs. With a team of trained professionals and the latest equipment, we guarantee a seamless and stress-free moving experience",
    approximateCost: '₹15,000 - ₹40,000',
    Type: [
      {
        "type1": "Household Items ",
        description2: [
          "Furniture (beds, sofas, tables): We take extra care in packing and moving furniture like beds, sofas, and tables, ensuring they are securely wrapped to prevent scratches and damage. Our experienced team uses the right tools to transport them safely to your new home.",
          "Kitchen Appliances (refrigerators, ovens): Kitchen appliances such as refrigerators and ovens are carefully packed and handled to avoid damage. We use protective padding and secure packaging to ensure these bulky items arrive safely without any dents or scratches.",
          "Home Decor, Books, and Personal Belongings: Fragile and personal items, such as home decor, books, and personal belongings, are packed with soft materials to shield them during the move. We ensure that each item, no matter how small, is carefully handled and transported."
        ],
      },
      {
        "type1": "Fragile and Valuable Goods",
        description2: [
          "Glass Items, Mirrors, and Ceramics: Glass items, mirrors, and ceramics are packed using high-quality materials like bubble wrap and foam inserts to prevent breakage. We ensure that these delicate items are securely protected throughout the entire moving process.",
          "Antiques, Artwork, and Collectibles: We specialize in moving valuable antiques, artwork, and collectibles. These items are carefully packed in custom boxes or crates to prevent any damage, ensuring they are transported safely to your new location.",
          "Electronics (TVs, Laptops, Speakers): Electronics like TVs, laptops, and speakers are carefully packed with the proper padding to protect them from damage during the move. We use secure packaging to ensure that all components arrive safely and are ready for immediate use."
        ],
      },
      {
        "type1": "Heavy and Oversized Goods",
        description2: [
          "Wardrobes, Dining Tables, and Large Cabinets: For heavy furniture like wardrobes, dining tables, and large cabinets, we use professional-grade equipment like dollies and straps. These items are carefully wrapped and moved to ensure they are delivered without any damage.",
          "Washing Machines, Dishwashers, and Gym Equipment: Large appliances such as washing machines, dishwashers, and gym equipment are carefully disassembled and wrapped to prevent damage. Our team ensures that everything is securely packed and transported to your new location.",
          "Industrial or Office Machinery: Moving industrial or office machinery requires specialized equipment. We use tools like cranes and forklifts to safely load and unload heavy machinery, ensuring that it reaches its destination without any issues."
        ],
      },
      {
        "type1": "Office and Commercial Items",
        description2: [
          "Desks, Chairs, File Cabinets, and Computers: Office furniture like desks, chairs, file cabinets, and computers are packed with protective materials. We ensure that every item is carefully transported and reassembled at your new office, minimizing downtime.",
          "Printers, Scanners, and Electronic Equipment: Office electronics such as printers and scanners are safely packed and transported with appropriate materials to prevent damage. We make sure these essential items are set up quickly in the new space without any hassle.",
          "Inventory for Shops and Commercial Goods: For commercial moves, we carefully handle and transport your shop inventory, ensuring everything is packed securely. Fragile items are wrapped properly, and larger items are secured to prevent shifting during transit."],
      },
      {
        "type1": "Specialized Goods",
        description2: [
          "Vehicles (Two-wheelers and Four-wheelers): We provide secure vehicle transportation, whether it’s a two-wheeler or four-wheeler. Our carriers are equipped to safely transport your vehicle, protecting it from scratches or damage during the journey.",
          "Plants, Aquariums, and Pet Transportation: For plants, aquariums, and pets, we offer specialized care. These items are packed carefully, and we use climate-controlled transport for the safety and comfort of your living items during transit.",
          "Pianos, Gym Equipment, and Other Custom Items: Specialized items like pianos and gym equipment require custom packing and handling. We ensure these large or delicate items are securely transported using appropriate equipment, ensuring they arrive safely at your new home."],
      },
    ],

    // PackagingServices: [
    //   {
    //     "type1": "Boxes and Cartons",
    //     "description2": [
    //       "We provide durable boxes of various sizes to accommodate items securely.",
    //       "Each box is selected based on the size and fragility of the items to be packed.",
    //       "We ensure proper sealing to prevent any shifting or damage during handling and transit.",
    //       "Boxes are reinforced for heavier or delicate items, ensuring they can withstand the rigors of transportation without collapsing."
    //     ]
    //   },
    //   {
    //     "type1": "Bubble Wrap and Foam",
    //     "description2": [
    //       "Protective materials like bubble wrap and foam are used to safeguard fragile goods.",
    //       "These materials provide cushioning to absorb shocks and vibrations during transportation.",
    //       "We meticulously wrap delicate items to ensure they arrive at their destination intact and undamaged.",
    //       "For high-value or exceptionally fragile items, we apply multiple layers of protection to provide maximum safety."
    //     ]
    //   },
    //   {
    //     "type1": "Stretch Films and Tapes",
    //     "description2": [
    //       "Stretch films and tapes are employed to secure goods tightly within their packaging.",
    //       "This prevents items from shifting or moving around during transit, maintaining their integrity.",
    //       "We use high-quality tapes that adhere firmly without leaving residue or damaging surfaces.",
    //       "Stretch films are used to seal large items or bundles, ensuring everything is compact and tightly secured for safe handling."
    //     ]
    //   },
    //   {
    //     "type1": "Custom Crates",
    //     "description2": [
    //       "For oversized or uniquely shaped items, we offer custom crates tailored to their dimensions and specifications.",
    //       "These crates provide extra protection and stability during handling and transport.",
    //       "Our custom crating ensures that even the most delicate or irregularly shaped items are securely packed and transported safely.",
    //       "We use sturdy materials like wood and plywood to construct crates that meet your specific needs, preventing damage from external impacts."
    //     ]
    //   }
    // ],
    // brands: [" Daikin", "Voltas", "Hitachi", "LG", "Samsung", "Mitsubishi Electric", "Carrier", "Godrej"],
    // duration: [
    //   { duration: "3 Month", price: 2800 },
    //   { duration: "6 Month", price: 5000 },
    //   { duration: "1Year", price: 9000 },
    // ],
    serviceinclude: [
      'We provide a full-service packing solution, ensuring that all items are securely packed to prevent damage.',
      'High-quality materials such as bubble wrap, foam, and sturdy cartons are used for added protection.',
      'All items are properly labeled and categorized, making the unpacking process smooth and organized.',
      'Fragile items like glassware, ceramics, and antiques are packed with extra care to avoid breakage.',
      'Heavy furniture and equipment are transported using advanced tools and professional handling techniques.',
      'Each item is treated according to its unique requirements, ensuring maximum safety during transit.',
      'GPS-enabled vehicles provide real-time tracking, allowing you to monitor the movement of your goods.',
      'We offer dedicated transport options for long-distance moves, ensuring timely delivery.',
      'Every vehicle is equipped with shock-absorbing features to protect your belongings during travel.',
      'Our storage facilities are equipped with climate-controlled environments to keep your items in pristine condition.',
      'Regular monitoring and security measures ensure the safety of your belongings at all times.',
      'Both short-term and long-term storage solutions are available based on your needs.',
      'Optional insurance coverage is provided to give you peace of mind during the relocation process.',
      'Our customer support team is available 24/7 to address your queries and concerns.',
      'We strive to ensure that every customer receives a smooth and satisfactory experience.'

    ],
    servicenotinclude: [
      'We do not transport flammable, explosive, or toxic materials to ensure compliance with all safety regulations.',
      'Handling hazardous substances or items that pose significant risks is excluded from our services.',
      'We follow all safety protocols to ensure the safety of both our team and customers during the relocation process.',
      'Transportation of items requiring specific licenses or permissions is not included in our service offerings.',
      'We do not handle goods restricted by legal or regulatory requirements during transit.',
      'Any items that require specialized transportation permits are excluded from our services.',
      'While we manage pet accessories, we do not provide services for moving live animals or livestock.',
      'Relocation of animals requiring special care or permissions is outside the scope of our services.',
      'We recommend seeking professional pet relocation services for live animals that require specific care during transit.'
    ],
    service: ["adiii", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [


      {
        "title": "Comprehensive Solutions",
        "descriptionpoint": [
          "We handle every aspect of the relocation process, from packing to unpacking, ensuring a seamless experience.",
          "Our team tailors services to suit the specific needs of both residential and commercial clients.",
          "With a focus on precision, we ensure that all goods are delivered in perfect condition."
        ]
      },
      {
        "title": "Safety and Reliability",
        "descriptionpoint": [
          "All items are packed using high-quality materials and advanced techniques to minimize risks.",
          "Our professional team is trained to handle delicate, valuable, and heavy items with care.",
          "Vehicles equipped with modern safety features ensure secure transportation of goods."
        ]
      },
      {
        "title": "Time and Cost Efficiency",
        "descriptionpoint": [
          "We provide affordable pricing plans with complete transparency, ensuring no hidden charges.",
          "A well-organized workflow saves time and reduces stress, allowing you to focus on other priorities.",
          "Optional insurance coverage protects against potential losses, offering added security."
        ]
      },
      {
        "title": "Flexibility and Customization",
        "descriptionpoint": [
          "Our services are adaptable to suit various requirements, including specialized items like vehicles or plants.",
          "We offer both local and long-distance shifting options, catering to diverse needs.",
          "Storage and transport solutions can be customized for short-term or long-term purposes."
        ]
      },
      {
        "title": "Customer-Centric Approach",
        "descriptionpoint": [
          "Our support team is available around the clock to assist with any concerns or updates.",
          "A dedicated manager oversees the entire process to ensure timely delivery and satisfaction.",
          "Regular feedback is collected to continuously improve our services and exceed expectations."
        ]
      }
    ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      {
        "title": "Tailored Planning",
        "descriptionpoint": [
          'We begin by understanding your needs and creating a detailed moving plan.',
          'Every aspect of your move is organized to ensure a stress-free experience.',
          'Personalized strategies address unique requirements, like bulky or fragile items.',
          'Our planning minimizes delays, ensuring an efficient and seamless shifting process.'
        ]
      },
      {
        "title": "Secure Packing",
        "descriptionpoint": [
          "Our team uses high-quality materials to pack your items safely and securely.",
          "Fragile and valuable belongings are packed with special care to prevent damage.",
          "Packages are labeled systematically for easier organization and unpacking.",
          "Advanced packing techniques ensure maximum protection during transportation."
        ]
      },
      {
        "title": "Timely Process",
        "descriptionpoint": [
          "We stick to the agreed schedule, completing every step of the move on time.",
          "Our systematic approach ensures a smooth and hassle-free shifting experience.",
          "Punctuality is maintained, and you’re updated regularly on the progress.",
          "We meet deadlines without compromising on quality or safety measures."
        ]
      },
      {
        "title": "Safe Transportation",
        "descriptionpoint": [
          "Your items are transported in well-maintained vehicles for maximum safety.",
          "Careful loading and unloading prevent damage to belongings during transit.",
          "GPS-enabled vehicles allow real-time tracking and transparency throughout.",
          "Experienced drivers ensure a secure and reliable moving experience."
        ]
      },
      {
        "title": "Unpacking Support",
        "descriptionpoint": [
          "After delivery, we assist with unpacking and arranging items as per your needs.",
          "Every item is handled with care to ensure nothing is damaged during unpacking.",
          "We help set up furniture or equipment according to your preferences.",
          "Packing materials are removed responsibly, leaving your space clean and tidy."
        ]
      },
      {
        "title": "Cost-Effective Service",
        "descriptionpoint": [
          "Our services are offered at affordable rates with transparent, upfront pricing.",
          "You receive excellent service without any hidden charges or surprises.",
          "Customizable packages allow you to pay only for the services you require.",
          "Efficient processes save time and reduce overall costs for your relocation."
        ]
      }
    ],


    whychoose: [
      {
        "title": "Experienced Professionals",
        "options": [
          {
            "content": [
              "Our skilled team has years of experience in providing reliable relocation services.",
              "Each professional is trained to handle all types of goods with precision and care.",
              "We prioritize customer satisfaction, ensuring a smooth and stress-free experience."
            ]
          }
        ]
      },
      {
        "title": "Wide Range of Services",
        "options": [
          {
            "content": [
              "From household items to vehicles, we cater to all types of shifting needs.",
              "Both local and long-distance moves are handled efficiently with tailored solutions.",
              "Specialized services are available for fragile, valuable, and heavy goods."
            ]
          }
        ]
      },
      {
        "title": "Advanced Technology and Tools",
        "options": [
          {
            "content": [
              "Our GPS-enabled vehicles ensure real-time tracking for your peace of mind.",
              "Modern equipment and packing materials are used to protect your belongings.",
              "We are committed to adopting eco-friendly practices in our operations."
            ]
          }
        ]
      },
      {
        "title": "Transparent Pricing",
        "options": [
          {
            "content": [
              "Competitive pricing ensures affordability without compromising on quality.",
              "Each quote is customized based on the distance, type of goods, and services required.",
              "No hidden charges or surprises, offering complete transparency to customers."
            ]
          }
        ]
      },
      {
        "title": "Dedicated Support",
        "options": [
          {
            "content": [
              "Our customer care team is available 24/7 to assist with any issues or updates.",
              "A single point of contact is provided to streamline communication throughout the process.",
              "We go above and beyond to ensure a hassle-free and enjoyable moving experience."
            ]
          }
        ]
      }
    ],
    howtobook: [
      {
        "title": "Visit Our Website",
        "description": "Navigate to our Local/Long-Distance Shifting Service section for detailed information."
      },
      {
        "title": "Contact Us",
        "description": "Call or WhatsApp our team to discuss your requirements and get a quote."
      },
      {
        "title": "Select Your Services",
        "description": "Choose your preferred service options, such as packing, storage, or insurance."
      },
      {
        "title": "Confirm Your Booking",
        "description": "Share your relocation details, including addresses and preferred dates."
      },
      {
        "title": "Relax While We Handle the Rest",
        "description": "From packing to delivery, we’ll ensure your goods reach their destination safely."
      }

    ],
    faq: [
      {
        "title": "What goods can you transport?",
        "description": "We handle a wide variety of goods, including household items, fragile goods, office equipment, vehicles, and more. Whether it's furniture, electronics, clothing, or delicate antiques, our team ensures safe and secure transport of all your belongings, no matter the size or value."
      },
      {
        "title": "Do you provide storage options?",
        "description": "Yes, we offer both short-term and long-term secure storage options. Our storage facilities are well-maintained, equipped with climate control and 24/7 security, giving you peace of mind knowing your items are safe until you're ready for them."
      },
      {
        "title": "Is insurance coverage available?",
        "description": "Yes, we provide optional insurance coverage to protect your belongings during transit. This insurance ensures that if any damage or loss occurs, your goods will be reimbursed, so you can feel confident that your items are well-protected throughout the moving process."
      },
      {
        "title": "Can you transport goods to another state?",
        "description": "Yes, we specialize in both local and long-distance relocations, including interstate moves. Whether you're moving just a few miles away or across state lines, we have the experience and resources to handle your move efficiently and safely."
      },
      {
        "title": "How are fragile items handled?",
        "description": "Fragile items are packed with the utmost care using special packing materials like bubble wrap, foam, and custom boxes. We also label these items as 'fragile' to ensure that they are handled with extra caution during the loading, transport, and unloading processes."
      },
      {
        "title": "How much notice do you require for booking?",
        "description": "We recommend booking at least 3-5 days in advance to ensure availability and allow time for proper planning. However, we understand that sometimes last-minute moves are necessary, and we’ll do our best to accommodate urgent requests whenever possible."
      },
      {
        "title": "Do you offer packing services?",
        "description": "Yes, we offer professional packing services to ensure your items are securely packed for transport. Our team uses high-quality materials, and our packing expertise ensures that everything is protected during the move, from delicate glassware to heavy furniture."
      },
      {
        "title": "How do you ensure the safety of my belongings during transit?",
        "description": "We take every precaution to ensure your belongings are transported safely. Our professional movers use sturdy boxes, padding, and wrapping to secure each item. Additionally, we load and unload items with careful precision, and our vehicles are equipped with safety features to prevent shifting during transport."
      },
      {
        "title": "Are there any items you cannot transport?",
        "description": "For safety and legal reasons, we cannot transport hazardous materials, perishable goods, or illegal items. If you’re unsure whether something can be moved, please contact us beforehand to discuss specific items, and we’ll guide you accordingly."
      },
      {
        "title": "How long will the relocation process take?",
        "description": "The time required depends on several factors, including the distance, the volume of items, and the complexity of the move. Local moves typically take a few hours, while long-distance moves may require 1-3 days. We’ll provide a clear estimate of the timeline before your move."
      },
      {
        "title": "Do you charge for packing materials?",
        "description": "Yes, packing materials such as boxes, bubble wrap, and tape come at an additional cost. The total cost for materials will be calculated based on the number of items that need packing, and we’ll provide you with a transparent estimate ahead of time."
      },
      {
        "title": "How do you handle large or bulky items?",
        "description": "We use specialized equipment and techniques to handle large or bulky items, such as pianos, heavy furniture, and large appliances. Our experienced movers ensure that these items are carefully packed, loaded onto the moving vehicle, and transported securely to your new home."
      },
      {
        "title": "Can I track my shipment?",
        "description": "Yes, for long-distance relocations, we provide shipment tracking services. This allows you to monitor the progress of your move and stay updated on your items’ whereabouts, ensuring you’re always in the loop about when they will arrive at your new location."
      },
      {
        "title": "Can I reschedule my moving date?",
        "description": "Yes, we allow you to reschedule your moving date if necessary. We ask for at least 48 hours' notice for changes, and depending on availability, we will accommodate your new date without any additional charges, ensuring flexibility for your plans."
      },
      {
        "title": "Are your movers experienced and trained?",
        "description": "Absolutely. All of our movers are highly trained and have extensive experience handling various types of goods. From packing delicate items to managing heavy furniture, they are skilled at ensuring your move is safe, efficient, and stress-free."
      }
    ],
  parts: [
        { part: '1 BHK', approximateCost: " Rs. 349 to Rs. 469" },
        { part: '2 BHK', approximateCost: "Rs. 1499 to Rs. 1899" },
        { part: '3 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },
        { part: '4 BHK', approximateCost: "Rs. 399 to Rs. 1599" },
        { part: '5 BHK', approximateCost: "Rs. 1899 to Rs. 2399" },
        { part: '6 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  {
    id: 'office-shifting',
    icon: faBuilding,  // Adding the imported icon here
    tablestatement: [
      {
        "statement": "The costs for shop shifting services are approximate and can vary depending on factors like the size of the shop, inventory, distance, and service provider. To get the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      },  
    ],  
    tabledesc: [
      {
        "heading": "Cost of Office Shifting Services in Mumbai",
        "desc": "This table provides details on the cost for office shifting services, including the transportation of office furniture, equipment, and setup at the new office."
      },
    ],
    title: 'Office Shifting',
    description: "Get organized, secure shifting for office or corporate items to their new location.",
    description2: 'Quick and careful moving of office stuff without any problem. Click below to learn more.',
    descriptionpoint: [
      'We pack office furniture, computers, and files carefully.',
      'We move your important office stuff safely.',
      'We move fast so your work doesn’t stop.',
      'Flexible hours, we can do it after work or on weekends.',
      'Safe transport for everything in your office.',
      'We pack things neatly so setting up is easy.',
    ],
    details1: "Our office shifting service is designed to make relocating your business smooth and efficient. We take care of packing, transporting, and setting up your office furniture, equipment, and documents with minimal disruption. Our professional team ensures everything is securely moved and quickly set up in your new location, allowing you to resume work without delays",
    details: 'Relocating an office can be a complex and time-sensitive task, but with Sky Need Solution, it becomes seamless and stress-free. Our office shifting services are designed to ensure minimal disruption to your business operations, allowing you to settle into your new location quickly and efficiently.Whether youre moving within the city or across states, we handle every aspect of your office relocation. From securely packing furniture and equipment to carefully unpacking and setting up your new workspace, our team takes care of it all. We use the latest techniques and equipment to protect your valuable office items, including electronics and heavy furniture, ensuring their safe transport.With a focus on safety, efficiency, and minimal downtime, we guarantee a smooth transition so you can get back to work without missing a beat. Let Sky Need Solution manage your office move while you focus on growing your business.',
    approximateCost: '₹25,000 - ₹50,000',
    Type: [
      {
        "type1": "Office Furniture",
        "description2": [
          "Desks, Chairs, and File Cabinets: We pack and transport all types of office furniture, including desks, chairs, and file storage units.",
          "Conference Tables and Reception Furniture: We carefully move large conference tables and reception seating for your new office setup.",
          "Shelving and Ergonomic Seating: We handle bookshelves, ergonomic chairs, and other office furniture with attention to detail during the move.",
          "Filing Systems and Storage Units: We ensure filing systems and other storage solutions are securely packed and transported without disruption."
        ]
      },
      {
        "type1": "Office Equipment",
        "description2": [
          "Computers, Printers, and Photocopiers: We safely move office electronics, including computers, printers, and photocopiers.",
          "Scanners, Telephones, and Networking Equipment: All essential office tech, from scanners to phones and routers, are securely transported.",
          "Projectors and Monitors: We take special care when moving projectors, monitors, and other sensitive electronics.",
          "Laptops and Mobile Devices: Our team ensures laptops, tablets, and other mobile devices are securely packed and safely transported."
        ]
      },
      {
        "type1": "Office Supplies and Documents",
        "description2": [
          "Files, Folders, and Books: Your important documents, books, and files are packed and moved securely to avoid any disorganization.",
          "Office Stationery and Personal Items: We carefully transport stationery, personal items, and office supplies to ensure everything arrives intact.",
          "Confidential Documents: Sensitive documents are securely packed and handled with the highest level of confidentiality.",
          "Legal and Financial Records: We ensure legal and financial paperwork is transported securely, adhering to all privacy standards."
        ]
      },
      {
        "type1": "Specialized Office Items",
        "description2": [
          "Server Racks and IT Equipment: We move IT equipment, including server racks and other essential tech, with specialized care.",
          "Heavy Machinery, Artwork, and Awards: We ensure heavy office machinery, valuable artwork, and trophies are carefully transported.",
          "Custom Furniture: For custom office setups, we provide specialized packing to ensure everything fits perfectly in your new space.",
          "Audio-Visual Equipment: We handle AV equipment, including sound systems, microphones, and other media devices with special care."
        ]
      }

    ],
    brands: ["lg", "lenovo"],
    duration: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
    serviceinclude: [
      
          "Comprehensive moving solution, covering packing, transport, and unpacking of all office-related items.",
          "Professional movers ensure every item is packed securely to avoid any damage during transport.",
          "Specialized packing materials used for sensitive and fragile office goods.",
          "Extra care for fragile office items, including glassware, monitors, electronics, and artwork.",
          "Specialized packing techniques using high-quality materials like bubble wrap, foam, and sturdy boxes.",
          "Clear labeling for delicate items to ensure they are handled with utmost care during the move.",
          "Use of modern, GPS-enabled vehicles that provide real-time tracking and ensure timely delivery.",
          "Dedicated vehicles equipped with shock-absorbing features to minimize the risk of damage during the move.",
          "Flexible options for both local and long-distance office relocations, ensuring timely and safe transport.",
          "Secure, climate-controlled storage solutions for short-term or long-term needs.",
          "Regular monitoring and advanced security systems in place to protect your office goods.",
          "Ideal for businesses that require temporary storage during office renovations or transitions.",
          "Optional insurance coverage for your office items, providing added peace of mind during the move.",
          "24/7 customer support to address any queries, issues, or updates related to your office relocation.",
          "Dedicated customer service representatives to assist throughout the entire relocation process."
        ],
      

    
        servicenotinclude: [
          "We do not provide services for designing or customizing the interiors of your new office space.",
          "Assistance with decor, furniture layout, or structural modifications is outside the scope of our offerings.",
          "Clients are advised to consult professional interior designers or contractors for any customization needs.",
          "Our focus is strictly on efficient relocation and setup, excluding aesthetic or structural enhancements.",
          "Setting up computers, servers, or other IT systems after relocation is not included in our services.",
          "We do not handle network configuration, troubleshooting, or technical installations for office equipment.",
          "For IT-specific tasks, clients are encouraged to work with specialized IT service providers.",
          "Our responsibility is limited to safely relocating your IT equipment to the new location.",
          "Our services do not cover the disposal or recycling of old furniture, electronics, or office waste.",
          "Managing unwanted items, including arranging for recycling or removal, is excluded from our package.",
          "Clients are advised to coordinate with local waste disposal or recycling agencies for such needs.",
          "We ensure all items we transport are delivered, but handling excess or discarded goods remains the client’s responsibility."
        ],
    service: ["Installation", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],
    unpackging: [
      { title: 'accc' },
      { description: "unastaltion" },

    ],
    Benefits: [
      {
        "title": "Comprehensive Solutions",
        "descriptionpoint": [
          "Our team manages the entire relocation process, from packing to the final setup of your office.",
          "A personalized approach that meets the specific needs of your business and ensures a smooth transition.",
          "We cover everything – no need to hire multiple service providers for different aspects of the move."
        ]
      },
      {
        "title": "Minimal Business Disruption",
        "descriptionpoint": [
          "Quick and efficient relocation strategies to minimize downtime for your business.",
          "We work around your schedule, moving your office after hours or on weekends to avoid interrupting your operations.",
          "A smooth move ensures that your team can quickly settle into the new office with minimal delays."
        ]
      },
      {
        "title": "Security and Reliability",
        "descriptionpoint": [
          "Only high-quality packing materials and techniques are used to ensure your items are safe during transit.",
          "Experienced professionals handle all types of office equipment with care, including sensitive electronics and confidential documents.",
          "GPS-enabled vehicles provide live tracking for real-time updates on the status of your move."
        ]
      },
      {
        "title": "Cost-Effective and Time-Efficient",
        "descriptionpoint": [
          "Transparent pricing with no hidden charges, allowing you to plan your move within budget.",
          "An organized workflow that ensures everything is moved efficiently, saving time and reducing stress.",
          "Optional insurance coverage provides additional peace of mind at a reasonable cost."
        ]
      },
      {
        "title": "Flexible and Customizable Services",
        "descriptionpoint": [
          "Tailored solutions for small businesses, corporate offices, or large enterprises.",
          "Ability to handle specialized items such as IT equipment, high-value furniture, and custom office setups.",
          "Customizable storage and transport options to meet your specific office relocation needs."
        ]
      },
      {
        "title": "Customer-Focused Approach",
        "descriptionpoint": [
          "We assign a dedicated manager to your move, ensuring everything goes according to plan.",
          "Our team communicates regularly to provide updates and address any concerns throughout the process.",
          "We listen to customer feedback to continuously improve our services and exceed your expectations."
        ]
      }
      
    ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      {
        "title": "Detailed Planning",
        "descriptionpoint": [
          "We collaborate with you to create a customized plan, minimizing disruption to your business operations.",
          "Our team ensures the entire process runs smoothly with a clear timeline, keeping everything on track.",
          "We conduct a pre-move assessment to identify special requirements and tailor our services accordingly.",
          "Constant communication throughout the process keeps you informed at every step for a hassle-free experience."
        ]
      },
      {
        "title": "Safe Packing & Handling",
        "descriptionpoint": [
          "All office equipment, furniture, and important documents are securely packed and protected during the move.",
          "Special care is taken with sensitive items like electronics and confidential materials to prevent any damage.",
          "We use high-quality packing materials to ensure the safety of your belongings during transit.",
          "Our trained staff follows best practices to handle fragile and high-value items with utmost care."
        ]
      },
      {
        "title": "IT Equipment Relocation",
        "descriptionpoint": [
          "Our experienced team ensures that your IT equipment is safely relocated, minimizing risk and ensuring readiness at the new location.",
          "We handle everything from computers to servers, ensuring they arrive intact and fully operational.",
          "Proper labeling and organized packing streamline the reinstallation process at the new site.",
          "We work closely with your IT team to ensure data integrity and system connectivity during the transition."
        ]
      },
      {
        "title": "Efficient Setup",
        "descriptionpoint": [
          "Once everything is moved, we efficiently set up your office to minimize downtime and get you back to work quickly.",
          "We ensure your workspace is fully operational, with all systems in place for a smooth transition.",
          "Furniture and equipment are arranged as per your specifications to maintain your workflow and productivity.",
          "Post-move support ensures any adjustments or fine-tuning are promptly addressed for complete satisfaction."
        ]
      }
    ],


    whychoose: [
      {
        "title": "Experienced Professionals",
        "options": [
          {
            "content": [
              "Our skilled team has years of experience in office relocations, making sure that every item is moved safely and efficiently.",
              "Each member of our team is trained to handle all office goods, including fragile, valuable, and bulky items, with care.",
              "We take extra precautions when dealing with sensitive items like electronics, ensuring they are transported without damage.",
              "Our expertise in handling complex office moves ensures a seamless transition with minimal disruption to your business."
            ]
          }
        ]
      },
      {
        "title": "Comprehensive Service Offering",
        "options": [
          {
            "content": [
              "We provide end-to-end office relocation services, from packing to unpacking and setting up your new office space.",
              "Our services are fully customizable based on your needs, whether you’re relocating locally or long-distance.",
              "From handling IT equipment to arranging furniture, we ensure all aspects of the move are covered.",
              "Additional services, such as temporary storage and specialized packing, are available to meet unique requirements."
            ]
          }
        ]
      },
      {
        "title": "Modern Equipment and Tools",
        "options": [
          {
            "content": [
              "Our fleet of modern vehicles is equipped with advanced safety features and GPS for real-time tracking.",
              "We use eco-friendly and high-quality packing materials to ensure maximum protection for your office items.",
              "Specialized tools, such as trolleys and padding, are used to safely handle heavy or delicate equipment.",
              "Our modern approach ensures efficiency and reduces the risk of delays or damages during the move."
            ]
          }
        ]
      },
      {
        "title": "Competitive and Transparent Pricing",
        "options": [
          {
            "content": [
              "No hidden charges – all pricing is clear and customized based on your specific move.",
              "We offer competitive rates without compromising on quality or service, ensuring excellent value for money.",
              "Detailed cost breakdowns are provided upfront, so you know exactly what you’re paying for.",
              "Flexible packages are available to accommodate different budgets and business needs."
            ]
          }
        ]
      },
      {
        "title": "24/7 Customer Support",
        "options": [
          {
            "content": [
              "Our dedicated customer support team is available around the clock to assist you with any queries, changes, or updates.",
              "A single point of contact ensures smooth communication and a hassle-free moving experience.",
              "We proactively keep you updated about the progress of your move and address any concerns promptly.",
              "Our commitment to customer satisfaction ensures that help is always just a call or message away."
            ]
          }
        ]
      }
    ],
    howtobook: [
      
        {
          "title": "Visit Our Website",
          "description": "Navigate to the Office Shifting section for detailed information about our services."
        },
        {
          "title": "Contact Us",
          "description": "Call or WhatsApp our team to discuss your office relocation needs and get a personalized quote."
        },
        {
          "title": "Select Your Services",
          "description": "Choose from our full range of services, including packing, transportation, storage, and insurance."
        },
        {
          "title": "Confirm Your Booking",
          "description": "Provide your office details, including address, preferred moving dates, and any specific requirements."
        },
        {
          "title": "Relax While We Handle the Rest",
          "description": "Sit back and let us manage your office relocation with care and professionalism."
        }
  
    ],
    faq: [
      {
        "title": "What office items do you move?",
        "description": "We handle all types of office furniture, electronics, documents, and specialized equipment, including servers and heavy machinery. Our experienced team ensures that each item is carefully packed and transported, whether it’s delicate office equipment or large furniture."
      },
      {
        "title": "Do you provide storage options?",
        "description": "Yes, we offer both short-term and long-term secure storage options for your office items. Whether you need temporary storage during the transition or a longer-term solution, our storage facilities are safe, clean, and easily accessible."
      },
      {
        "title": "Is insurance coverage available?",
        "description": "Yes, we offer optional insurance coverage to protect your office belongings during transit. This coverage ensures that in case of any damage or loss, your office items are fully covered, giving you peace of mind throughout the moving process."
      },
      {
        "title": "Can you move offices to another state?",
        "description": "Yes, we specialize in both local and long-distance office relocations. Whether you're moving to a nearby city or to another state, we have the resources and expertise to safely transport your office belongings over long distances, ensuring a smooth relocation."
      },
      {
        "title": "How are fragile items handled?",
        "description": "Fragile items, including electronics, glassware, and artwork, are carefully packed using high-quality protective materials like bubble wrap, foam, and custom-made crates. We take extra precautions to prevent any damage and ensure these items are transported securely."
      },
      {
        "title": "How much notice is required for booking?",
        "description": "We recommend booking at least 5-7 days in advance to ensure we can properly plan and prepare for your move. This allows us to assess the requirements, prepare the right materials, and coordinate logistics for a smooth and efficient office relocation."
      },
      {
        "title": "Do you offer packing services for office items?",
        "description": "Yes, we offer professional packing services for all types of office items. Our team uses high-quality packing materials, ensuring your items are well-protected throughout the move. From files and furniture to electronics, we take care of everything to guarantee safe transport."
      },
      {
        "title": "How do you ensure the safety of office equipment during the move?",
        "description": "We use specialized equipment such as padded covers, crates, and custom boxes to protect your office equipment. Our team is trained to handle sensitive electronics and machinery with care, ensuring your valuable items are safe throughout the moving process."
      },
      {
        "title": "Will there be any disruption to my office operations during the move?",
        "description": "We aim to minimize any disruption to your office operations by planning the move around your business hours. We offer flexible scheduling, including weekends and off-peak hours, to ensure that the transition is as smooth as possible and that your office can resume work quickly."
      },
      {
        "title": "Can you help with setting up the office at the new location?",
        "description": "Yes, we provide post-move setup services to help arrange furniture, set up office equipment, and ensure your new workspace is ready for immediate use. We can also assist with connecting electronics, organizing files, and ensuring everything is in place before your team returns to work."
      },
      {
        "title": "What is the cost of office shifting services?",
        "description": "The cost of office shifting depends on several factors, including the volume of items, the distance of the move, and any additional services required, such as packing or storage. After assessing your specific needs, we provide a detailed and transparent quote to ensure no surprises."
      },
      {
        "title": "Do you provide staff to help with packing and unpacking?",
        "description": "Yes, our team offers both packing and unpacking services as part of the office shifting package. We take care of wrapping, labeling, and organizing your items for transport, and once at the new location, we unpack and arrange everything so that your office is ready to go."
      },
      {
        "title": "How do you handle large or heavy items?",
        "description": "We have specialized equipment like dollies, lift straps, and cranes to move large or heavy office items such as filing cabinets, desks, and safes. Our team is skilled in handling bulky equipment efficiently and safely, ensuring no damage during the move."
      },
      {
        "title": "Can you assist with moving a home office?",
        "description": "Yes, we offer office relocation services for home offices as well. Whether you have a small home office setup or a larger workspace, we provide professional moving services, ensuring everything from furniture to equipment is safely packed and transported."
      },
      {
        "title": "What if I need to make changes to the moving schedule?",
        "description": "If you need to make changes to your scheduled move, simply inform us as soon as possible. We will do our best to accommodate changes based on availability, adjusting the time or details of your move to suit your updated needs without causing any inconvenience."
      }
    ],
    parts: [
      { part: '1 BHK', approximateCost: " Rs. 349 to Rs. 469" },
      { part: '2 BHK', approximateCost: "Rs. 1499 to Rs. 1899" },
      { part: '3 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },
      { part: '4 BHK', approximateCost: "Rs. 399 to Rs. 1599" },
      { part: '5 BHK', approximateCost: "Rs. 1899 to Rs. 2399" },
      { part: '6 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  {
    id: 'shop-shifting',
    icon: faStore,  // Adding the imported icon here
    tablestatement: [
      {
        "statement": "The costs for shop shifting services are approximate and can vary depending on factors like the size of the shop, inventory, distance, and service provider. To get the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      }, 
    ],  
    tabledesc: [
      {
        "heading": "Cost of Shop Shifting Services in Mumbai",
        "desc": "This table outlines the cost of shop shifting services in Mumbai, covering tasks like packing, transportation, and setup at the new location."
      },
    ],
    title: 'Shop Shifting',
    description: "Shift your shop items safely and quickly with our reliable packing and moving services.",
    description2: 'Fast and safe moving of your shop items with no damage. Click below to learn more.',
    descriptionpoint: [
      'We pack your shop items like furniture and products carefully.',
      'We move your things safely, no damage.',
      'Extra care for breakable items like electronics.',
      'Flexible hours so your business isn’t affected.',
      'Our team handles everything, no stress for you.',
      'We set up your shop quickly so you can get back to work.',
    ],
    details1: "Our shop shifting service is focused on safely and efficiently relocating your retail business. We handle everything from packing and transporting product to setting up displays in your new location. Our experienced team ensures minimal downtime and that your shop’s assets are moved securely, allowing you to get back to business quickly with no complications.",
    details: 'Shop shifting is a meticulous process of relocating everything in your shop, including furniture, inventory, equipment, and fragile items. Whether you are moving to a bigger space, a better market location, or another part of the city, it demands careful planning and execution to ensure the safe and efficient transport of your business essentials.At Sky Need Solution, we provide a smooth, hassle-free experience for shop owners who need to relocate. Our expert team handles every aspect of the process—starting from packing and loading to transportation, unloading, and even setting up your new shop. We guarantee that all items, from delicate glassware to heavy machinery, are handled with the utmost care, ensuring your shop is operational again as soon as possible.',
    approximateCost: '₹10,000 - ₹30,000',
    Type: [
      {
        "type1": "Furniture (Counters, Tables, etc.)",
        "description2": [
          "Heavy furniture items such as desks, counters, display racks, and cabinets: We pack and transport bulky furniture with care, ensuring safe relocation.",
          "Large and cumbersome furniture: We use specialized equipment like dollies and lifts to handle large furniture during loading and unloading.",
          "Specialized equipment: We ensure the safe movement of your heavy furniture with proper handling techniques and tools."
        ]
      },
      {
        "type1": "Electronic Items (ACs, Computers, etc.)",
        "description2": [
          "Air conditioners (split/window), computers, monitors: We ensure your delicate electronics are packed securely to avoid any damage.",
          "Fragile and expensive electronics: We use bubble wrap, foam, and secure cartons for safe packing of all sensitive items.",
          "Careful handling: Our team takes extra care to protect your electronics, ensuring no internal or external damage during transit."
        ]
      },
      {
        "type1": "Inventory (Products/Stock)",
        "description2": [
          "Retail stock, packaged goods, or display items: We efficiently pack and organize your shop's stock for safe and smooth relocation.",
          "Efficient packing and organization: We ensure your inventory is packed to minimize damage and avoid confusion during unloading.",
          "Tailored packing methods: We adjust our packing techniques according to the size and weight of your products."
        ]
      },
      {
        "type1": "Fragile Items (Glassware, Décor)",
        "description2": [
          "Glass shelves, mirrors, and decorative items: We use special packing materials like bubble wrap and packing peanuts to prevent breakage.",
          "Fragile goods: Our team handles your delicate items with care to avoid any damage during transport.",
          "Careful packing and transport: We ensure that all fragile items are securely packed and transported safely."
        ]
      },
      {
        "type1": "Heavy Machinery/Equipment",
        "description2": [
          "Large, specialized machinery: We use extra manpower and equipment like cranes to safely move heavy machinery and industrial tools.",
          "Safe transport: We ensure your machinery is securely loaded and transported on larger vehicles for safe delivery.",
          "Specialized equipment: Our team has the expertise to handle and move large, complex equipment with precision."
        ]
      },
      {
        "type1": "Light Fixtures/Display Units",
        "description2": [
          "Lamps and lighting systems: We pack and transport delicate light fixtures and customized display units with care.",
          "Delicate but less bulky items: We ensure that lamps and display units are securely packed to avoid any damage during transit.",
          "Disassembly of display units: We take the necessary steps to disassemble and pack your display units for safe relocation."
        ]
      },
      {
        "type1": "Stationery and Small Items",
        "description2": [
          "Office supplies, documents, and files: We pack your office supplies and small personal items to ensure they are safely transported.",
          "Low-risk items: While generally low-risk for damage, we ensure proper organization to avoid loss or disorganization during the move.",
          "Efficient packing: We organize stationery and small items into boxes for easy loading and unloading."
        ]
      }
    ],
    brands: ["lg", "lenovo"],
    duration: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
    serviceinclude: [
    "Our expert packers use high-quality materials to safely pack everything, from fragile items to heavy machinery, ensuring zero damage during the move.",
    "We carefully categorize and label items to streamline the unpacking process.",
    "Our team also assists in unpacking and setting up your shop at the new location, making it ready to operate.",
    "We employ skilled personnel to load and unload all goods, ensuring proper handling of heavy, bulky, or fragile items.",
    "Using advanced equipment such as lifts, dollies, and padded trucks, we ensure safe loading and unloading without any damage.",
    "We ensure that everything is carefully moved to prevent accidents or delays.",
    "We use well-maintained, modern vehicles that are equipped to handle all types of goods—whether small or large, fragile or heavy.",
    "Our drivers are experienced with city routes, ensuring safe and timely delivery to your new location.",
    "We offer customized vehicles based on your needs, ensuring the proper transportation for every item in your shop.",
    "After transporting everything, we offer assistance in arranging and setting up your shop in the new location.",
    "Our team places furniture, inventory, and equipment according to your specifications, minimizing disruption to your business operations.",
    "We ensure your new setup mirrors your old shop’s layout (or even improve it) for optimal functionality."

    ],
    servicenotinclude: [
    "Our services are focused on shifting and setting up your shop, and do not include structural modifications, painting, or décor installations.",
    "We do not handle any design, construction, or aesthetic changes to your new shop location.",
    "For any interior design or renovation needs, we recommend hiring professional designers or contractors.",
    "Our primary focus is on the relocation of goods, ensuring the process is smooth and efficient.",
    "Waste management or disposal services for items you choose not to move to your new shop are not included.",
    "The removal or recycling of unwanted goods is outside the scope of our shop-shifting services.",
    "Clients are responsible for managing discarded or outdated items, including arranging recycling or donation services.",
    "For eco-friendly disposal options, we suggest contacting specialized waste management companies.",
    "We do not provide assistance with setting up utilities such as electricity, water, internet, or other essential services.",
    "Any installation or activation of utilities is not part of our shop-shifting package.",
    "Clients should coordinate with utility providers separately for these services to ensure a smooth transition.",
    "Our focus remains on the safe relocation and setup of your shop’s physical items, ensuring the space is ready for use."
    ],
    service: ["Installation", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [
      {
        "title": "Time-Saving Process",
        "descriptionpoint": [
          "We take care of the entire process so you don’t have to worry about organizing or executing the move yourself.",
          "Our efficient team ensures your shop is relocated quickly, minimizing downtime.",
          "You can focus on other aspects of your business while we handle the logistics."
        ]
      },
      {
        "title": "Safety of Items",
        "descriptionpoint": [
          "All items, especially fragile ones like glassware and electronics, are securely packed using bubble wrap, foam, and sturdy cartons.",
          "We use advanced equipment like padded trucks and lifts to ensure heavy or delicate items are safely transported.",
          "We guarantee no damage to goods during transit, thanks to our careful handling and insurance coverage."
        ]
      },
      {
        "title": "Handling Heavy & Bulky Items",
        "descriptionpoint": [
          "Our team uses specialized tools like lifts and dollies to safely move large items, such as counters, machinery, and display racks.",
          "No need to worry about bulky items; we’ll handle the tough lifting and transportation.",
          "Our equipment ensures that heavy loads are moved efficiently without any damage or delays."
        ]
      },
      {
        "title": "Affordable and Transparent Pricing",
        "descriptionpoint": [
          "We offer budget-friendly services with clear pricing to ensure there are no surprises.",
          "You’ll receive a detailed quote that breaks down the cost, so you know exactly what you're paying for.",
          "Our affordable pricing model saves you money while providing professional services."
        ]
      },
      {
        "title": "Stress-Free Experience",
        "descriptionpoint": [
          "Shifting a shop can be overwhelming, but with our experienced team, you can avoid the stress.",
          "Our professionals are trained to manage every step of the process with care and precision.",
          "Enjoy a worry-free move knowing that everything will be handled by experts."
        ]
      },
      {
        "title": "Customized Services",
        "descriptionpoint": [
          "We provide tailored solutions based on the specific needs of your business, whether it’s handling fragile décor, machinery, or large volumes of inventory.",
          "Our services are flexible to suit all types of businesses, from small retail stores to large-scale outlets.",
          "We ensure that your unique needs are met with personalized service that caters to your shop’s requirements."
        ]
      },
      {
        "title": "On-Time Delivery",
        "descriptionpoint": [
          "Time is crucial for businesses. Our team ensures that everything is delivered and set up on time so you can resume operations without unnecessary delays.",
          "We adhere to a tight schedule and guarantee a timely move to minimize downtime for your shop."
        ]
      },
      {
        "title": "Insurance Coverage",
        "descriptionpoint": [
          "We offer insurance coverage for your items during the move, providing peace of mind.",
          "In the unlikely event of any damage, our insurance will cover the losses, ensuring you’re financially protected."
        ]
      }
    ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      
        {
          "title": "Secure Transport of Goods",
          "descriptionpoint": [
            "We prioritize the safety of your shop's stock, furniture, and displays, ensuring everything is packed with care.",
            "Our team takes all necessary precautions to prevent any damage during the move, providing peace of mind.",
            "High-quality packing materials and secure loading techniques guarantee the safety of your goods during transit.",
            "Vehicles equipped with advanced safety features ensure your items reach the destination securely."
          ]
        },
        {
          "title": "Handling Fragile Items",
          "descriptionpoint": [
            "Fragile and delicate items are packed carefully using specialized materials, ensuring they arrive at the new location in perfect condition.",
            "We take extra care to ensure the protection of sensitive goods throughout the relocation process.",
            "Custom crating is provided for high-value or exceptionally delicate items to avoid any damage.",
            "Our team uses proper labeling and categorization to ensure extra caution is applied to fragile packages."
          ]
        },
        {
          "title": "Quick & Efficient Relocation",
          "descriptionpoint": [
            "Understanding the importance of minimizing downtime, we work quickly to complete the move without unnecessary delays.",
            "Our team focuses on efficiency, so you can get back to business as soon as possible, with minimal interruption.",
            "Streamlined processes and experienced staff ensure timely and hassle-free shop relocation.",
            "We prioritize your schedule to avoid disruption to your business hours or customer service."
          ]
        },
        {
          "title": "Setup Assistance",
          "descriptionpoint": [
            "Once at the new location, we assist with unpacking and setting up your shop to ensure a smooth transition.",
            "We help organize everything and ensure your shop is ready for business in no time.",
            "Our team works closely with you to arrange furniture, displays, and stock as per your preferences.",
            "Post-relocation support is available to make adjustments or address any concerns for a seamless setup."
          ]
        }
      
      
    ],


    whychoose: [
      {
        "title": "Experienced & Professional Team",
        "options": [
          {
            "content": [
              "Our trained team handles everything from fragile items to heavy machinery with the utmost care.",
              "We ensure safe packing, loading, transportation, and unloading to avoid any damage.",
              "Our professionals are skilled in managing both small retail setups and large-scale commercial stores.",
              "We have experience in handling various types of shop equipment, ensuring a smooth and secure relocation."
            ]
          }
        ]
      },
      {
        "title": "Comprehensive & Hassle-Free Service",
        "options": [
          {
            "content": [
              "We offer a complete service package, including packing, loading, transportation, and unpacking.",
              "No need to hire multiple vendors—our team takes care of it all.",
              "Our services are fully customizable based on your shop’s specific needs, ensuring everything is taken care of without any added stress.",
              "We streamline the entire moving process, from initial consultation to the final setup of your shop."
            ]
          }
        ]
      },
      {
        "title": "State-of-the-Art Equipment",
        "options": [
          {
            "content": [
              "We use modern equipment such as padded trucks, lifts, and dollies to safely move all items, large or small.",
              "This ensures an efficient, damage-free moving process.",
              "We utilize specialized tools and machinery to handle heavy or delicate items, ensuring the safest possible transport.",
              "Our fleet is regularly maintained and fully equipped with the latest features to handle every type of shop equipment securely."
            ]
          }
        ]
      },
      {
        "title": "Transparent & Affordable Pricing",
        "options": [
          {
            "content": [
              "Our clear, competitive pricing includes no hidden fees, helping you stay within budget.",
              "Upfront quotes ensure no surprises during the process.",
              "We offer flexible pricing packages tailored to meet the size and complexity of your move.",
              "Our focus is on providing excellent value for money while maintaining high standards of service and reliability."
            ]
          }
        ]
      },
      {
        "title": "Timely & Reliable Service",
        "options": [
          {
            "content": [
              "We ensure your shop move is completed on time, minimizing downtime.",
              "Our efficient team works swiftly to get you back in business as quickly as possible.",
              "We respect your timeline and coordinate every step to ensure the move is as seamless as possible, with no unnecessary delays.",
              "Our punctual service means you can plan your reopening with confidence."
            ]
          }
        ]
      },
      {
        "title": "Customer-Focused & Local Expertise",
        "options": [
          {
            "content": [
              "We prioritize your satisfaction and tailor our services to your needs.",
              "As a Mumbai-based company, we leverage our local knowledge to plan a smooth, efficient move.",
              "We understand the specific challenges of shop relocations in Mumbai, from navigating busy streets to adhering to local regulations.",
              "Our customer-focused approach ensures a personalized, stress-free moving experience from start to finish."
            ]
          }
        ]
      }
    ],
    howtobook: [
      
        {
          "title": "Call Us",
          "description": "Dial our customer support number to discuss your shop’s relocation requirements."
        },
        {
          "title": "Online Booking",
          "description": "Visit our website and fill out the booking form with details about your current and new location."
        },
        {
          "title": "WhatsApp Us",
          "description": "Send us a quick message, and our team will guide you through the booking process."
        },
        {
          "title": "Schedule a Visit",
          "description": "We offer on-site evaluations to assess the volume and type of goods to be moved."
        },
        {
          "title": "Confirmation",
          "description": "Once the plan and pricing are finalized, confirm your booking, and we’ll take care of the rest."
        }
      
      

    ],
    faq: [
      {
        "title": "What types of shops do you cater to?",
        "description": "We cater to a wide range of shops, including retail outlets, offices, and any commercial space. Whether you're running a small boutique or a larger office, we can provide tailored moving services to meet your specific needs."
      },
      {
        "title": "How do you ensure the safety of fragile items?",
        "description": "We take extra care with fragile items by using high-quality packing materials such as bubble wrap, foam, and sturdy cartons. Our professional movers also carefully label and pack these items to ensure they are secure during the transportation process."
      },
      {
        "title": "Can I shift my shop to a location outside Mumbai?",
        "description": "Yes, we offer intercity shop shifting services to various locations outside Mumbai. Whether you're moving to a neighboring city or farther, we provide cost-effective and reliable services, ensuring your items arrive safely at the new destination."
      },
      {
        "title": "What if some goods are damaged during the move?",
        "description": "For your peace of mind, we offer insurance coverage for your goods during the move. In the unlikely event that any items are damaged, the insurance will compensate you for the loss or damage, giving you full assurance while moving."
      },
      {
        "title": "Do you also set up items at the new location?",
        "description": "Yes, we provide complete shop setup services. Once your items reach the new location, our team will help with unpacking, arranging furniture, and setting up equipment to ensure your shop is ready for business without any delays."
      },
      {
        "title": "How far in advance do I need to book shop shifting services?",
        "description": "We recommend booking shop shifting services at least 3-5 days in advance to ensure availability, especially during peak seasons. However, we do accommodate last-minute bookings based on availability, so feel free to contact us even for urgent moves."
      },
      {
        "title": "Can you help with packing heavy equipment or furniture?",
        "description": "Absolutely! Our team is trained in handling and packing heavy equipment, large furniture, and bulky items. We use special equipment like dollies, straps, and lifting tools to safely transport these items to prevent damage and ensure smooth relocation."
      },
      {
        "title": "Do you provide storage services if I need to delay my shop's move-in?",
        "description": "Yes, we offer secure storage solutions for your items if you need to delay moving them into the new shop. Our storage facilities are safe and well-maintained, giving you flexibility to store your goods until you're ready to set up your new space."
      },
      {
        "title": "How long will it take to shift my shop?",
        "description": "The time required to shift your shop depends on the size of the move and the complexity involved. Smaller moves may take just a few hours, while larger relocations could take a full day or longer. We will provide a detailed estimate after evaluating your specific requirements."
      },
      {
        "title": "Do you provide any discounts for bulk or repeat customers?",
        "description": "Yes, we value our loyal customers and offer discounts for bulk orders or repeat business. If you need to shift multiple shops or are a returning customer, reach out to us for special pricing and discounts available exclusively for you."
      },
      {
        "title": "Can you handle electronic equipment and delicate devices?",
        "description": "Yes, we are well-equipped to handle and transport electronic equipment and delicate devices like computers, printers, and other sensitive machinery. We use anti-static wraps and soft padding to ensure that your valuable electronics remain undamaged throughout the move."
      },
      {
        "title": "Are there any hidden charges for shop shifting?",
        "description": "No, we believe in transparency. Our pricing structure is clear, and we provide an upfront estimate that covers all the expected costs. Any extra charges, such as those for packing materials or additional mileage, will be communicated before the move begins."
      },
      {
        "title": "How do I prepare my shop for the move?",
        "description": "To prepare your shop for the move, we recommend removing any personal items and sensitive documents from furniture or display cases. We can assist with disassembling larger pieces of furniture and help organize your items for easier packing and transportation."
      },
      {
        "title": "Do you offer international shop shifting services?",
        "description": "While we currently specialize in local and intercity moves within India, we can assist with finding trusted partners for international relocations. If you plan to move your shop abroad, we can provide recommendations for reliable international movers."
      },
      {
        "title": "What if my shop items require reassembling at the new location?",
        "description": "Our team is skilled in reassembling furniture and setting up equipment at the new location. Whether it's assembling desks, shelves, or larger furniture pieces, we’ll make sure everything is put together and placed exactly as you need, so you can begin operations right away."
      }
    ],
    parts: [
      { part: '1 BHK', approximateCost: " Rs. 349 to Rs. 469" },
        { part: '2 BHK', approximateCost: "Rs. 1499 to Rs. 1899" },
        { part: '3 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },
        { part: '4 BHK', approximateCost: "Rs. 399 to Rs. 1599" },
        { part: '5 BHK', approximateCost: "Rs. 1899 to Rs. 2399" },
        { part: '6 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  {
    id: 'vehicle-shifting',
    icon: faTruck,
    tablestatement: [
      {
        "statement": "The costs for vehicle shifting services are approximate and can vary depending on factors such as the type of vehicle, distance, and service provider. To get the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      },  
    ],  
    tabledesc: [
      {
        "heading": "Cost of Vehicle Shifting Services in Mumbai",
        "desc": "This table outlines the cost of vehicle shifting services in Mumbai, covering the transportation of cars, bikes, and other vehicles to new locations."
      },
    
    ],
    title: 'Vehicle Shifting',
    description: "Move your car or bike safely to any location with our trusted transportation services.",
    description2: 'Secure and smooth transportation of your vehicles to any destination with care. Click below to learn more.',
    descriptionpoint: [
      'Safe transport for your car or bike.',
      'We pick it up and drop it off at your door.',
      'We pack your vehicle well to avoid any damage.',
      'Affordable rates, no hidden fees.',
      'We deliver your vehicle on time.',
      'We offer insurance for added safety.',

    ],
    details1: "Our vehicle shifting service ensures the safe and timely transportation of your cars, bikes, and other vehicles. We use specialized equipment and experienced drivers to handle your vehicles with care, providing door-to-door delivery. Whether relocating across town or to a different city, our service guarantees a smooth, secure, and smooth experience for your valuable assets.",
    details: 'Sky Need Solution offers reliable vehicle shifting services for both local and long-distance moves. Whether it’s a car, bike, or heavy vehicle, we ensure safe and timely transportation of your vehicle. Our experienced team uses high-quality packing materials and specialized equipment for secure loading, transport, and unloading.We provide door-to-door service with real-time tracking for long-distance relocations, offering peace of mind throughout the journey. Optional insurance coverage is available for added security. Whether relocating a single vehicle or a fleet, we tailor our services to meet your needs, ensuring a smooth and hassle-free experience.',
    approximateCost: '₹5,000 - ₹15,000',
    Type: [
      {
        "type1": "Cars",
        "description2": [
          "We handle all types of cars, from small sedans to luxury models, ensuring secure delivery to your destination.",
          "Whether it's a compact car or an expensive vehicle, we take extra care to ensure safe transport.",
          "Our team uses protective covers and secure loading methods to prevent any damage during the move.",
          "We offer both open and enclosed transport options, depending on the level of protection your car requires."
        ]
      },
      {
        "type1": "Bikes",
        "description2": [
          "We specialize in transporting motorcycles, scooters, and all types of two-wheelers with proper packing and care.",
          "Our services ensure that your bike is safely secured during transit to prevent any damage.",
          "For added protection, we use custom cradles, straps, and padding to safeguard your bike’s delicate parts.",
          "We provide both local and long-distance bike shifting services, ensuring your bike reaches its destination in pristine condition."
        ]
      },
      {
        "type1": "Heavy Vehicles",
        "description2": [
          "We also specialize in the transportation of heavy vehicles, including trucks, vans, and commercial vehicles.",
          "These vehicles are transported using specialized equipment to ensure their safety and secure delivery.",
          "Our experienced team uses hydraulic lifts, ramps, and other heavy-duty tools to handle large vehicles.",
          "Whether for business or personal use, we ensure that even the most robust vehicles are safely transported to their new location."
        ]
      }
    ],
    brands: ["lg", "lenovo"],
    duration: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
    serviceinclude: [
      "We provide end-to-end solutions for packing, transporting, and unpacking your vehicle.",
      "Specialized packing materials and techniques are used to safeguard the vehicle from any damage.",
      "All vehicles are securely strapped and placed on transport vehicles, ensuring a smooth journey.",
      "Our team ensures all safety protocols are followed to prevent any shifting of the vehicle during transit.",
      "We inspect the vehicle before packing to ensure it’s ready for transport and note any pre-existing conditions.",
      "Our long-distance moving vehicles are equipped with shock-absorbing systems to protect your vehicle during the journey.",
      "We offer real-time GPS tracking, so you can monitor your vehicle’s journey in real-time.",
      "We ensure timely delivery and offer specific vehicles for different types of transportation needs.",
      "Our vehicles are equipped with climate control features to prevent environmental factors from affecting your vehicle, especially in extreme weather conditions.",
      "We plan the most efficient route to ensure minimal transit time while ensuring safety during long-distance transport.",
      "Optional insurance coverage is provided for added peace of mind during transit.",
      "We offer different levels of coverage depending on the value of the vehicle and distance.",
      "Insurance ensures that your vehicle is protected against unforeseen circumstances during the move.",
      "We provide transparent details about the insurance coverage, including what’s covered and any exclusions.",
      "Our customer support team is available to guide you through the insurance process and answer any questions.",
      "We use specialized equipment like hydraulic lifts to load and unload vehicles safely, preventing any scratches or dents.",
      "Our team is trained to handle delicate and heavy vehicles with extreme care.",
      "Each vehicle is thoroughly inspected before and after transit to ensure it is in the same condition as it was when picked up.",
      "We ensure that all vehicles are loaded and unloaded with precision, reducing the risk of any accidental damage.",
      "Our team takes extra precautions to protect both the vehicle and the surrounding environment during loading and unloading."

    ],
    servicenotinclude: [
  "We do not offer mechanical repairs or maintenance services before, during, or after the shifting process.",
  "Any required vehicle repairs or servicing, including engine checks or tire changes, are outside the scope of our transportation services.",
  "If your vehicle requires repairs, it should be handled separately by a professional mechanic prior to the scheduled shifting.",
  "Fueling the vehicle or transporting personal belongings inside the vehicle is not included in our services.",
  "We do not handle or transport any personal items stored in the vehicle during transit, such as electronics, bags, or valuables.",
  "To ensure safety and prevent damage, all items should be removed from the vehicle before transport.",
  "We do not relocate vehicles that are not legally registered or lack valid documentation.",
  "Vehicles must have all required paperwork, including proof of ownership and insurance, to be eligible for transportation.",
  "If your vehicle is not registered or does not meet legal transportation standards, you must resolve the documentation before scheduling the shift."
    ],
    service: ["Installation", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [
      {
        "title": "Comprehensive Solutions",
        "descriptionpoint": [
          "We provide a complete solution, handling everything from packing and loading to transportation and unloading.",
          "Our services are customizable based on your specific needs, whether you're moving locally or long distance.",
          "Each step of the process is managed by professionals to ensure the highest level of care for your vehicle."
        ]
      },
      {
        "title": "Safety and Protection",
        "descriptionpoint": [
          "We utilize top-notch materials and equipment to safeguard your vehicle during transit.",
          "Our team of experts ensures that your vehicle is packed and loaded in the safest possible manner.",
          "GPS-enabled vehicles, along with real-time monitoring, ensure that your vehicle is protected during transportation."
        ]
      },
      {
        "title": "Time and Cost Efficiency",
        "descriptionpoint": [
          "Our transparent pricing structure ensures no hidden costs or surprises.",
          "We offer competitive rates without compromising on quality and service.",
          "The well-organized logistics of our team ensure timely and cost-effective delivery."
        ]
      },
      {
        "title": "Flexibility and Customization",
        "descriptionpoint": [
          "Whether you need to transport cars, bikes, or heavy vehicles, our services can be tailored to suit your specific requirements.",
          "You can select additional services like insurance, storage, and special handling based on your needs.",
          "Flexible options for short-term or long-term storage are available to ensure that your vehicle is safe and secure."
        ]
      }
    ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      
        {
          "title": "Safe Transportation",
          "descriptionpoint": [
            "We ensure your vehicle is securely transported to its destination, whether locally or over long distances.",
            "Our professional drivers and transporters handle your vehicle with care, providing peace of mind throughout the journey.",
            "Advanced safety measures and reliable carriers are used to protect your vehicle during transit.",
            "Comprehensive insurance coverage adds an extra layer of security, ensuring your vehicle is safeguarded against unforeseen events."
          ]
        },
        {
          "title": "Careful Loading & Unloading",
          "descriptionpoint": [
            "Your vehicle is loaded and unloaded with great care to prevent any damage.",
            "We use secure methods and equipment to ensure its safety during the entire loading, transport, and unloading process.",
            "Skilled handlers inspect the vehicle thoroughly before and after loading to maintain its condition.",
            "Special attention is given to avoid scratches, dents, or any mechanical issues during handling."
          ]
        },
        {
          "title": "Flexible Options",
          "descriptionpoint": [
            "Choose between open or enclosed transport based on your preferences and the protection level required for your vehicle.",
            "We offer both options to meet the specific needs of different vehicle types and customer requirements.",
            "Enclosed transport provides maximum protection from weather and road debris, ideal for luxury or vintage vehicles.",
            "Open transport offers a cost-effective solution while maintaining high standards of safety and reliability."
          ]
        },
        {
          "title": "Timely Delivery",
          "descriptionpoint": [
            "We guarantee timely delivery, ensuring your vehicle reaches its destination as scheduled.",
            "Our tracking services keep you informed of your vehicle’s journey, providing updates along the way.",
            "Well-planned routes and experienced drivers ensure on-time arrivals, even for long-distance transport.",
            "Prompt communication keeps you updated in case of any delays or changes, ensuring transparency throughout the process."
          ]
        }
      
      
    ],


    whychoose: [
      {
        "title": "Experienced Team",
        "options": [
          {
            "content": [
              "Our professional team has extensive experience handling all types of vehicle relocation.",
              "We train our staff to ensure each vehicle is carefully packed, loaded, and transported with the highest degree of care.",
              "Our team is knowledgeable about vehicle types, ensuring that both standard and luxury vehicles are given the proper attention during transit."
            ]
          }
        ]
      },
      {
        "title": "Wide Range of Services",
        "options": [
          {
            "content": [
              "From cars and bikes to heavy vehicles, we offer tailored services to meet the needs of any type of relocation.",
              "Both local and long-distance moves are efficiently handled with a focus on safety and timely delivery.",
              "We offer specialized transport options, including open and enclosed vehicles, to meet specific customer requirements."
            ]
          }
        ]
      },
      {
        "title": "Advanced Equipment and Technology",
        "options": [
          {
            "content": [
              "We use the latest tools and packing materials to protect your vehicle during the move.",
              "Our GPS-enabled vehicles allow real-time tracking, so you can always monitor your vehicle’s progress.",
              "We also use shock-absorbing systems and hydraulic lifts to ensure smooth loading, unloading, and transport of all vehicle types."
            ]
          }
        ]
      },
      {
        "title": "Transparent Pricing",
        "options": [
          {
            "content": [
              "We offer competitive pricing with no hidden charges, ensuring full transparency from start to finish.",
              "Pricing is tailored based on the distance, type of vehicle, and additional services requested.",
              "We provide a detailed breakdown of costs upfront, so you know exactly what to expect."
            ]
          }
        ]
      }
    ],
    howtobook: [
      
        {
          "title": "Visit Our Website",
          "description": "Navigate to the Vehicle Shifting section to explore detailed service offerings."
        },
        {
          "title": "Contact Us",
          "description": "Get in touch with our team via phone or WhatsApp to discuss your shifting requirements and obtain a personalized quote."
        },
        {
          "title": "Select Your Services",
          "description": "Choose from our range of services such as packing, storage, and insurance that best suit your needs."
        },
        {
          "title": "Confirm Your Booking",
          "description": "Provide the details of your vehicle, destination, and preferred pickup dates."
        },
        {
          "title": "Relax While We Handle the Rest",
          "description": "From packing to delivery, we’ll ensure that your vehicle is delivered safely and on time."
        }
      
      

    ],
    faq: [
      
        {
          "title": "What types of vehicles do you transport?",
          "description": "We handle a wide range of vehicles, including cars, bikes, and heavy vehicles such as trucks, vans, and commercial vehicles. Whether it's a personal vehicle or a business fleet, we manage it efficiently."
        },
        {
          "title": "Do you offer storage options?",
          "description": "Yes, we provide short-term and long-term secure storage solutions for vehicles, ensuring they are kept safe until delivery or pickup."
        },
        {
          "title": "Is insurance available for vehicle shifting?",
          "description": "Yes, we offer optional insurance coverage to protect your vehicle during transit, covering any damage or unexpected incidents."
        },
        {
          "title": "Can you transport vehicles to other states?",
          "description": "Yes, we specialize in local and interstate vehicle transportation, ensuring timely and hassle-free delivery across distances."
        },
        {
          "title": "How are fragile items like bikes and cars handled?",
          "description": "We use specialized packing materials, secure loading techniques, and protective padding to safeguard vehicles like bikes and cars during transit."
        },
        {
          "title": "How much notice is needed to book vehicle shifting services?",
          "description": "We recommend booking at least 3-5 days in advance to ensure availability and proper planning for a smooth transportation process."
        },
        {
          "title": "How do I book vehicle shifting services?",
          "description": "Booking is simple. Contact us via our website, phone, or WhatsApp with your vehicle details, locations, and preferred timeline."
        },
        {
          "title": "Are there any additional charges for vehicle shifting?",
          "description": "Additional charges may apply based on distance, vehicle type, and optional services like insurance or storage. A transparent cost breakdown is provided."
        },
        {
          "title": "How long does vehicle shifting take?",
          "description": "Local moves take a few hours, while interstate or long-distance moves can take 2 to 7 days. An estimated timeline is provided during booking."
        },
        {
          "title": "What if my vehicle is damaged during transit?",
          "description": "Optional insurance coverage protects your vehicle. In case of damage, our team will assess and resolve the situation promptly."
        },
        {
          "title": "Do you provide vehicle tracking?",
          "description": "Yes, tracking services are available for long-distance and interstate moves, allowing you to monitor your vehicle's status and location."
        },
        {
          "title": "Can I transport a non-operational vehicle?",
          "description": "Yes, we use specialized equipment to safely transport non-operational vehicles, including those with mechanical issues."
        },
        {
          "title": "Are there any vehicle restrictions for shifting?",
          "description": "While most vehicles can be accommodated, oversized or heavily modified vehicles may require special arrangements. Contact us for details."
        },
        {
          "title": "Will my vehicle be transported with other vehicles?",
          "description": "Vehicles may be transported alongside others in shared trucks to reduce costs. Dedicated transportation options are also available."
        },
        {
          "title": "What documents are needed for vehicle shifting?",
          "description": "Required documents include the vehicle's registration certificate (RC), valid insurance papers, and your identification. Our team will assist with the process."
        }
      
      
    ],
    parts: [
      { part: '1 BHK', approximateCost: " Rs. 349 to Rs. 469" },
        { part: '2 BHK', approximateCost: "Rs. 1499 to Rs. 1899" },
        { part: '3 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },
        { part: '4 BHK', approximateCost: "Rs. 399 to Rs. 1599" },
        { part: '5 BHK', approximateCost: "Rs. 1899 to Rs. 2399" },
        { part: '6 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  {
    id: 'warehouse',
    icon: faWarehouse,  // Adding the imported icon here
    tablestatement: [
      {
        "statement": "The costs for warehouse shifting services are approximate and can vary depending on factors such as the size of the warehouse, goods, distance, and service provider. For an accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
      },  
    ],  
    tabledesc: [
      {
        "heading": "Cost of Warehouse Shifting Services in Mumbai",
        "desc": "This table provides an overview of the cost for warehouse shifting services, including the moving of goods, equipment, and machinery to new warehouses."
      },
    ],
    title: 'Warehouse Service',
    description: "Secure and spacious warehouses for storing your goods with proper care and management.",
    description2: "Secure storage for your things with flexible time options. Click below to learn more.",
    descriptionpoint: [
      'Safe and spacious place to store your items.',
      '24/7 security to keep your stuff safe.',
      'We have cool storage for sensitive things.',
      'You can access your things whenever you need.',
      'Affordable storage with flexible options.',
      'Our friendly staff will help you store and get your items.',
    ],
    details1: "Our warehouse service provides secure and organized storage solutions for your goods. With climate-controlled spaces, inventory management, and easy access, we ensure your items are stored safely and efficiently. Whether you need short-term or long-term storage, our professional team handles everything with care, offering flexible options according to your specific needs, all at competitive rates.",
    details: 'Relocating can sometimes require temporary storage, especially during long-distance moves or when your new space is not yet ready. Sky Need Solution offers secure and flexible warehouse services designed to provide storage for your belongings during your moving process. Whether you are moving to a new home, office, or any other space, we ensure that your items are stored safely and conveniently until you are ready to move them into their final destination.Our warehouse facilities are equipped with advanced security systems and climate control, ensuring that your belongings—ranging from household items to office supplies—are kept in perfect condition during the waiting period. You can trust us to provide a secure and reliable solution to store your items temporarily until the next phase of your move.',
    approximateCost: '₹1,500 - ₹5,000 per month',
     Type: [
      {
        "type1": "Household Goods",
        "description2": [
          "Furniture: Sofas, beds, dining tables, wardrobes, and other bulky furniture items are carefully packed and stored to prevent damage.",
          "Electronics and Appliances: Televisions, refrigerators, washing machines, air conditioners, and other household gadgets are kept in secure, climate-controlled conditions.",
          "Personal Belongings: Clothing, books, decorative items, heirlooms, and other personal goods are stored with labeled packaging for easy identification.",
          "Kitchenware: Utensils, crockery, and kitchen appliances are packed to ensure safety during storage."
        ]
      },
      {
        "type1": "Office Supplies and Equipment",
        "description2": [
          "Office Furniture: Chairs, desks, filing cabinets, modular workstations, and partitions are stored securely and are easily retrievable.",
          "Electronics: Computers, printers, scanners, servers, and other IT equipment are packed using protective materials and stored in a climate-controlled environment.",
          "Stationery and Documents: Files, folders, stationery items, marketing materials, and archived records are cataloged for convenient storage and retrieval.",
          "Specialized Equipment: Items like conference room AV setups, projectors, and telecommunication devices are packed and stored with care."
        ]
      },
      {
        "type1": "Sensitive Goods",
        "description2": [
          "Fragile Items: Glassware, crystal items, artworks, sculptures, and antiques are packed with specialized materials like foam and bubble wrap to avoid damage.",
          "High-Value Electronics: Cameras, drones, audio equipment, and other high-value items are stored in secure areas with enhanced surveillance and access control.",
          "Delicate Items: Items requiring extra care, such as musical instruments, laboratory equipment, and vintage collectibles, are given specialized packing and storage solutions.",
          "Confidential Items: Sensitive data storage devices or documents are secured with added protection and confidentiality measures."
        ]
      },
      {
        "type1": "Perishable Goods",
        "description2": [
          "Food Products: Dairy, frozen items, beverages, and packaged food are stored in temperature-controlled conditions to maintain freshness.",
          "Pharmaceuticals: Medicines, vaccines, medical devices, and other temperature-sensitive pharmaceutical products are stored in compliance with safety and regulatory standards.",
          "Plants or Organic Materials: Live plants, floral arrangements, or organic materials requiring specific humidity and temperature levels are stored in a controlled environment.",
          "Specialty Goods: Items like wine, gourmet products, and organic produce are carefully stored in specialized facilities."
        ]
      },
      {
        "type1": "Commercial Stock and Inventory",
        "description2": [
          "Retail Goods: Clothing, accessories, home décor items, and packaged products for retail stores are securely stored until needed.",
          "Wholesale Items: Bulk goods and supplies for wholesalers are stored in organized, easily accessible racks, making restocking more efficient.",
          "Raw Materials: Items like textiles, construction materials, chemicals, or unfinished goods are stored safely for businesses during transitions.",
          "Seasonal Inventory: Products for seasonal sales, promotions, or holiday periods are stored and managed efficiently."
        ]
      },
      {
        "type1": "Industrial Equipment",
        "description2": [
          "Machinery: Heavy industrial machinery such as drills, presses, conveyor belts, and manufacturing equipment are carefully packed and stored in areas suitable for their size and weight.",
          "Tools and Spare Parts: Precision tools, mechanical components, spares, and other industrial supplies are stored securely to avoid damage or misplacement.",
          "Hazardous Materials: Industrial-grade chemicals or materials requiring specific handling and storage conditions are managed with strict safety precautions and regulatory compliance.",
          "Specialized Equipment: Large-scale equipment such as generators, turbines, or construction equipment is packed and stored with proper documentation and safety measures."
        ]
      }
      
    ],
    // brands: ["lg", "lenovo"],
    duration: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
    
      serviceinclude: [
        "We provide secure storage solutions tailored to your needs, whether it’s short-term during a weekend move or long-term storage for several months.",
        "Choose from various storage unit sizes based on the volume and type of items, ensuring you only pay for the space you need.",
        "Each item is carefully cataloged, labeled, and stored in an organized manner, ensuring quick and hassle-free retrieval.",
        "Optional insurance plans are available to protect your valuables during the storage period.",
        "Our team uses durable packing materials such as bubble wrap, packing paper, foam, and moving blankets to ensure your belongings are safe during handling and storage.",
        "Fragile and high-value items are professionally packed by trained experts to minimize any risk of damage.",
        "Large furniture, modular setups, or complex items are disassembled during packing and reassembled after retrieval for convenience.",
        "We offer eco-friendly packing materials to minimize environmental impact while ensuring maximum protection.",
        "Our climate-controlled facilities maintain optimal temperature and humidity for sensitive goods like electronics, artwork, and pharmaceuticals.",
        "Climate control prevents issues like rust, mold, or warping that can affect sensitive materials over time.",
        "Storage is customized for goods requiring unique environmental conditions, including separate units for perishable or temperature-sensitive items.",
        "Advanced air filtration systems ensure clean air circulation to keep stored items free from dust or pollutants.",
        "Our warehouses are equipped with CCTV cameras, motion detectors, and alarm systems to ensure 24/7 monitoring.",
        "Entry to the storage areas is restricted to authorized personnel, ensuring complete protection for your goods.",
        "Security teams conduct frequent checks and maintenance to ensure all safety protocols are functioning effectively.",
        "Facilities are equipped with fire alarms, sprinklers, and extinguishers to safeguard your belongings against fire-related incidents.",
        "Schedule a pickup or delivery of your items at your convenience, with options for same-day or priority service.",
        "Access your belongings anytime with extended warehouse hours, including weekends and holidays.",
        "Our team assists with loading, unloading, and sorting during retrieval for a smooth and stress-free process.",
        "Get a complete digital catalog of your stored items, enabling quick identification and retrieval.",
        "Our GPS-enabled vehicles ensure safe and efficient transportation of your goods to and from the warehouse.",
        "Specialized vehicles with shock-absorbing features, padding, and temperature control are provided for sensitive items.",
        "We offer doorstep delivery of your goods to your new space, ensuring a seamless transition.",
        "Real-time tracking and updates keep you informed about the status of your goods during transit."
      
    
    

    ],
    
      servicenotinclude: [
        "Our warehouse services are designed for short-term storage, ideal for situations like relocation or awaiting new premises.",
        "We do not provide storage options for customers seeking long-term or permanent storage solutions, focusing on transitional storage for optimal space utilization.",
        "All storage agreements are bound by clear timelines, ensuring that space is available for those requiring temporary storage solutions without long-term commitments.",
        "For the safety of all, we do not permit the storage of hazardous materials such as chemicals, explosives, or firearms in our facilities.",
        "We comply with all relevant safety regulations to safeguard your goods, our employees, and the environment.",
        "For customers requiring storage for hazardous materials, we can refer you to licensed, specialized facilities that meet legal and safety standards for such items."
      
    
    ],
    service: ["Installation", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [
      {
        "title": "Safe and Secure Storage",
        "descriptionpoint": [
          "Our warehouses are equipped with CCTV cameras, alarm systems, and regular security checks to ensure maximum protection for your belongings.",
          "Climate-controlled facilities maintain optimal temperature and humidity levels, protecting sensitive items such as electronics, antiques, and perishable goods.",
          "Items are stored carefully using proper shelving, padding, and secure packing methods to prevent physical damage during storage."
        ]
      },
      {
        "title": "Efficient Storage Management",
        "descriptionpoint": [
          "We offer flexible storage plans tailored to your needs, whether for a few days, weeks, or months.",
          "Each item is cataloged, and our system allows you to track stored goods easily, ensuring quick retrieval when needed.",
          "Storage space is organized efficiently to maximize space utilization and ensure you pay only for what you use."
        ]
      },
      {
        "title": "Cost-Effective Solutions",
        "descriptionpoint": [
          "We provide upfront cost estimates with no hidden fees, allowing you to budget confidently.",
          "Our storage plans are designed to meet various budget requirements without compromising on service quality.",
          "Temporary storage helps minimize moving costs by avoiding unnecessary expenses during delays or transitions."
        ]
      },
      {
        "title": "Easy and Flexible Access",
        "descriptionpoint": [
          "Access your belongings 24/7 with flexible hours to suit your schedule.",
          "We offer efficient delivery services to transport your stored items to your desired location when you're ready.",
          "Our strategically located warehouses make it convenient for customers to drop off and pick up their goods."
        ]
      },
      {
        "title": "Professional Handling of Goods",
        "descriptionpoint": [
          "Fragile, oversized, or sensitive items are packed and stored with extra precautions to avoid damage.",
          "Our experienced staff handles everything from household goods to commercial equipment with professionalism and care.",
          "We use high-quality packing materials like bubble wrap, foam, and crates to ensure maximum protection during the storage period."
        ]
      },
      {
        "title": "Peace of Mind",
        "descriptionpoint": [
          "Optional insurance coverage ensures that your goods are financially protected in case of unforeseen events.",
          "Our team provides regular updates on the status of your stored goods, keeping you informed every step of the way.",
          "With a proven track record of customer satisfaction, we’re committed to making your storage experience stress-free."
        ]
      }
      
  ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      {
        "title": "Secure & Organized Storage",
        "descriptionpoint": [
          "Our warehouse facilities offer highly secure storage solutions for both short-term and long-term needs.",
          "With advanced surveillance and systematic storage methods, we prioritize the safety and organization of your belongings.",
          "Each item is carefully labeled and stored in an optimized manner to prevent damage or loss.",
          "Fire safety measures, restricted access systems, and round-the-clock monitoring add an extra layer of protection."
        ]
      },
      {
        "title": "Inventory Management",
        "descriptionpoint": [
          "We provide professional inventory management services to ensure your goods are properly cataloged and tracked.",
          "This makes it easy for you to retrieve specific items quickly and efficiently, saving time and hassle.",
          "Digital inventory systems can also be provided upon request for detailed tracking and real-time updates.",
          "Our systematic approach helps reduce errors, ensuring every item is accounted for with precision."
        ]
      },
      {
        "title": "Regular Audits & Maintenance",
        "descriptionpoint": [
          "To maintain the quality of your stored goods, we conduct regular audits and condition checks.",
          "Our team ensures that your belongings remain in excellent condition by addressing issues like dust accumulation, humidity control, and overall storage quality.",
          "Routine cleaning of the facility is also carried out to ensure a hygienic environment.",
          "Pest control measures are implemented regularly to keep the storage area clean and safe for all types of goods."
        ]
      },
      {
        "title": "Flexible Access",
        "descriptionpoint": [
          "Enjoy flexible access to your stored items with convenient retrieval options, including 24/7 access for emergencies.",
          "Whether it’s same-day pickup or scheduled delivery, we tailor our services to suit your requirements, giving you peace of mind and convenience at all times.",
          "Dedicated customer support ensures that you can easily coordinate access whenever needed.",
          "Multiple access points and efficient retrieval systems minimize delays and make pickups hassle-free."
        ]
      },
      {
        "title": "Specialized Storage Solutions",
        "descriptionpoint": [
          "For sensitive or high-value goods, we provide customized storage options, including climate-controlled spaces and specialized handling protocols to cater to your unique needs.",
          "Our climate-controlled units maintain optimal temperature and humidity levels to protect delicate items.",
          "High-security vaults are available for storing valuables like artwork, electronics, or sensitive documents.",
          "We offer tailored solutions for businesses, such as pallet storage, bulk inventory management, or seasonal stock storage."
        ]
      }
      
    ],


    whychoose: [
      {
        "title": "Experienced and Professional Team",
        "options": [
          {
            "content": [
              "Our team is highly skilled in handling all types of warehouse goods, from stock to heavy machinery.",
              "We prioritize the safety of your items and the efficiency of the entire process.",
              "Each team member undergoes rigorous training to ensure the proper handling, labeling, and storage of goods.",
              "We bring years of expertise to provide solutions for various industries, ensuring your goods are managed with care."
            ]
          }
        ]
      },
      {
        "title": "State-of-the-Art Equipment",
        "options": [
          {
            "content": [
              "We utilize the latest tools, vehicles, and technology to ensure smooth and safe operations.",
              "GPS-enabled vehicles, shock-absorbing transport, and climate-controlled options for sensitive goods.",
              "Advanced inventory management systems ensure seamless tracking and retrieval of your items.",
              "Specialized equipment like forklifts, pallet jacks, and automated storage systems for efficient handling and organization."
            ]
          }
        ]
      },
      {
        "title": "Flexible and Transparent Services",
        "options": [
          {
            "content": [
              "Customizable services based on your specific needs, with no hidden charges.",
              "We provide full transparency regarding the pricing and services offered, ensuring no surprises.",
              "Options for short-term or long-term storage solutions tailored to fit your requirements.",
              "Flexible access hours, including 24/7 emergency access, so your goods are always available when needed."
            ]
          }
        ]
      },
      {
        "title": "Comprehensive Insurance Coverage",
        "options": [
          {
            "content": [
              "Optional insurance coverage for complete peace of mind during the entire moving process.",
              "We offer coverage tailored to your specific needs, from general liability to product-specific protection.",
              "Transparent claims process with dedicated support to guide you through every step.",
              "Insurance covers unforeseen damages due to natural disasters, theft, or handling, ensuring your goods are fully protected."
            ]
          }
        ]
      }
      
    ],
    howtobook: [
      {
        "title": "Visit Our Website",
        "description": "Navigate to the Warehouse Service section on our website to explore detailed information about the services we offer."
      },
      {
        "title": "Contact Our Team",
        "description": "Reach out to us via call, WhatsApp, or email to discuss your storage requirements. Share details about the items you need to store, their nature (fragile, perishable, etc.), and the estimated duration of storage."
      },
      {
        "title": "Get a Customized Quote",
        "description": "Based on your requirements, our team will provide a transparent and personalized quote, including details about packing, transport, storage duration, and optional insurance."
      },
      {
        "title": "Confirm Your Booking",
        "description": "Once you’re satisfied with the quote, confirm your booking by sharing the necessary details, such as the pickup location, items to be stored, and preferred storage duration."
      },
      {
        "title": "Schedule Pickup",
        "description": "Our professional team will arrange for pickup, packing, and transportation of your goods to our secure warehouse facility at a time convenient for you."
      },
      {
        "title": "Relax and Stay Updated",
        "description": "Your items will be safely stored, and our team will keep you updated throughout the storage period. For any queries or access requests, our customer support is available 24/7."
      }
      

    ],
    faq: [
      {
        "title": "What is the purpose of the warehouse service?",
        "description": "Our warehouse service provides secure, temporary storage solutions during your relocation process. Whether your new home or office space is not yet ready, or you need extra time to organize, we offer a safe environment for your belongings until you're ready to move them to their final destination."
      },
      {
        "title": "What types of items can I store?",
        "description": "You can store a variety of items, including household goods, office equipment, and sensitive items like electronics. Additionally, we can accommodate temperature-sensitive items, such as perishables or pharmaceuticals. However, hazardous materials, explosives, chemicals, and firearms are strictly prohibited."
      },
      {
        "title": "Is the storage facility secure?",
        "description": "Yes, our storage facilities are equipped with the latest security measures. This includes 24/7 CCTV surveillance, alarm systems, secure access points, and regular security checks to ensure that your belongings remain safe and protected throughout their storage period."
      },
      {
        "title": "How long can I store my items?",
        "description": "Our warehouse service is designed for flexible storage durations, offering both short-term and long-term options based on your needs. Whether you need a few days or several months, we can accommodate your storage requirements with adjustable timelines that fit your relocation schedule."
      },
      {
        "title": "Are climate-controlled options available?",
        "description": "Yes, we offer climate-controlled storage solutions to ensure your sensitive items are kept in optimal conditions. This is ideal for items such as electronics, antiques, art, and perishable goods, where temperature and humidity levels need to be carefully regulated to prevent damage."
      },
      {
        "title": "Is insurance available for stored items?",
        "description": "Yes, we offer optional insurance coverage to protect your items while they are stored in our warehouse. This provides peace of mind, ensuring that your belongings are financially covered in case of any unforeseen events, such as accidental damage or natural disasters."
      },
      {
        "title": "How do I access my stored goods?",
        "description": "You can access your items during our flexible access hours. If you need to retrieve something before scheduled access times, simply contact our team, and we will arrange for you to pick up your items or have them delivered directly to your location, depending on your needs."
      },
      {
        "title": "Are there any prohibited items?",
        "description": "Yes, there are certain items that we cannot store due to safety regulations. These include hazardous materials, explosives, chemicals, firearms, and perishable goods that require specialized handling. For a detailed list of prohibited items, please feel free to contact our customer service team."
      },
      {
        "title": "Can I extend my storage duration?",
        "description": "Yes, extensions are possible based on availability. If you need more time to store your belongings, simply let us know in advance, and we will adjust your storage agreement accordingly, making sure that your items remain safe and secure until you're ready to retrieve them."
      },
      {
        "title": "Do you offer packing services for stored goods?",
        "description": "Absolutely! We provide professional packing services using high-quality, durable materials to ensure your items are carefully packed and protected during storage. This service helps prevent any potential damage while your belongings are in transit or being stored."
      },
      {
        "title": "What is the process for scheduling a pickup?",
        "description": "Once you confirm your storage booking, our team will work with you to schedule a convenient pickup time. We’ll handle the packing, transportation, and storage of your goods, ensuring everything is securely delivered to our warehouse according to your preferred schedule."
      },
      {
        "title": "How is the pricing determined?",
        "description": "Pricing for our warehouse service is based on factors such as the size and type of items you're storing, the duration of storage, and any additional services like packing or insurance. We offer transparent pricing with no hidden costs, ensuring you know exactly what you’re paying for before the service begins."
      },
      {
        "title": "Can I store perishable goods?",
        "description": "Yes, we provide temperature-controlled storage options specifically designed for perishable items, such as food or pharmaceuticals. Our climate-controlled units maintain the optimal temperature and humidity levels to keep these items in good condition throughout their storage period."
      },
      {
        "title": "What happens if my items get damaged in storage?",
        "description": "While we take great care to ensure the safety of your goods with proper handling, security, and monitoring, optional insurance coverage is available to provide financial protection in the event of any damage or unforeseen issues. We always strive to keep your items safe, but insurance adds extra peace of mind."
      },
      {
        "title": "How do I know my items are safe in storage?",
        "description": "We ensure the safety of your items through a combination of advanced security features, including 24/7 surveillance, secure access control, and regular inventory audits. Our real-time monitoring system ensures that your items remain in good condition, and our team conducts regular checks to maintain a secure environment."
      }
      
    ], parts: [
      { part: '1 BHK', approximateCost: " Rs. 349 to Rs. 469" },
        { part: '2 BHK', approximateCost: "Rs. 1499 to Rs. 1899" },
        { part: '3 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },
        { part: '4 BHK', approximateCost: "Rs. 399 to Rs. 1599" },
        { part: '5 BHK', approximateCost: "Rs. 1899 to Rs. 2399" },
        { part: '6 BHK', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  {
    id: 'ac-service-and-repair',
  icon: faWrench,  // Adding the imported icon here
  tablestatement: [
    {
      "statement": "The costs for AC repair services are approximate and can vary depending on factors such as the type of repair needed, the model of the AC, and the service provider. To get the most accurate estimate, it is recommended to request a personalized quote from Sky Need Solution."
    }  
  ],  
  tabledesc: [
    {
      "heading": "Cost of AC Service and Repair in Mumbai",
      "desc": "This table provides an overview of the cost for various air conditioning services like installation, maintenance, and repair in Mumbai."
    }
  ],
    title: 'AC Service-Repair',
    description: "Get quick and reliable repair services to keep your AC running smoothly and efficiently.",
    description2: 'Quick repair of your AC to get it working properly again. To learn more.',
    descriptionpoint: [
      'Fast repair for split and window ACs.',
      'Skilled people who know how to fix your AC.',
      'We use good quality parts for long-lasting fixes.',
      'Repair costs are clear, no hidden charges.',
      'Emergency service if you need it right away.',
      'Tips to help your AC last longer and work better.',

    ],
    details1: "Our AC service and repair solution ensures your air conditioning units are running at their best. Our skilled technicians provide thorough inspections, cleaning, and prompt repairs for all types of AC systems. Whether it's a minor fix or a major issue, we guarantee quick and efficient service to restore comfort in your home or office, ensuring long-lasting performance.",
    details: 'Air conditioning (AC) systems are indispensable in ensuring comfort, particularly during the scorching summer months. However, just like any other appliance, ACs can suffer from wear and tear over time. Regular AC service repair is crucial to ensure your system remains efficient, providing cool, comfortable air all year long. Our expert technicians are trained to identify and address a wide range of AC issues, from cooling inefficiency to electrical faults. They perform thorough inspections, clean the necessary components, repair or replace worn-out parts, and recharge refrigerants to restore optimal performance. With regular AC servicing, your system will work smoothly, last longer, and continue delivering cool air without causing high energy bills.',
    approximateCost: '₹2,000 - ₹8,000 per service',
    Type: [
      {
        "type1": "No or Less Cooling",
        "description2": [
          "Caused by low refrigerant levels, dirty filters, or compressor failure, we restore optimal cooling performance.",
          "Our technicians ensure proper diagnostics and quick resolution to restore comfort.",
          "We also check airflow issues, ensuring no blockages or leaks that could affect cooling efficiency.",
          "We conduct a full inspection to ensure the system’s overall health and prevent future cooling problems."
        ]
      },
      {
        "type1": "Power Issues",
        "description2": [
          "If your AC isn’t turning on or shuts off unexpectedly, we identify electrical faults like wiring or power supply issues.",
          "Our experts resolve circuit board failures and power-related problems to ensure smooth operation.",
          "We test the entire electrical system to guarantee long-term functionality and safety.",
          "We also ensure all connections are secure and that your AC is energy-efficient."
        ]
      },
      {
        "type1": "Water Leakage",
        "description2": [
          "Water leakage could be due to a clogged drain line, broken seals, or faulty condensate pan.",
          "We fix these issues to prevent water damage and ensure your AC operates without disruption.",
          "Our technicians also inspect the unit for any other potential water-related issues to prevent future leaks.",
          "We clean and maintain the drain lines to ensure smooth water flow and avoid clogging."
        ]
      },
      {
        "type1": "Unwanted Noise/Smell",
        "description2": [
          "Strange sounds or odors often point to problems with the fan, motor, or mold buildup.",
          "We pinpoint and resolve the root causes to restore a quiet, fresh environment.",
          "Our professionals thoroughly clean and sanitize the system to eliminate fungus growth and unpleasant smell.",
          "We also lubricate parts and check for any mechanical wear that could cause noise disruptions."
        ]
      }
      ],
    brands: ["lg", "lenovo"],
    duration: [
      { duration: "3 Month", price: 2800 },
      { duration: "6 Month", price: 5000 },
      { duration: "1Year", price: 9000 },
    ],
    serviceinclude: [
     
          "We provide general AC service, including comprehensive inspection of internal and external components.",
          "Our service includes cleaning of filters, coils, and fins to restore airflow and ensure efficient cooling.",
          "We check refrigerant levels and refill if necessary to maintain optimal cooling performance.",
          "Thermostat and fan motors are inspected to ensure proper operation for consistent temperature control.",
          "Gas refill and leak repair involve detecting and sealing refrigerant leaks using specialized tools.",
          "We refill refrigerant and verify system pressure to restore cooling efficiency and prevent leaks.",
          "Our compressor repair service ensures smooth operation and addresses issues like overheating or wear.",
          "We diagnose, repair, or replace faulty components in the compressor and perform leak tests to prevent refrigerant loss.",
          "Filter cleaning and replacement prevent clogging and improve airflow, ensuring better air quality.",
          "We replace old or damaged filters to enhance cooling efficiency and prevent dirt buildup.",
          "Thermostat repair and replacement services ensure precise regulation of indoor temperature.",
          "We recalibrate or replace malfunctioning thermostats to improve temperature control and sensor accuracy.",
          "Fan motor repair or replacement ensures efficient air circulation by addressing motor malfunctions and lubrication needs.",
          "We check fan alignment and speed to ensure proper air circulation and cooling performance.",
          "Professional AC installation ensures optimal placement of units and checks electrical connections and refrigerant charging.",
          "We guarantee proper installation and smooth operation after setup, ensuring efficient cooling."
       
    
    ],
    servicenotinclude: [
  "We do not provide structural changes to accommodate AC installations.",
  "This includes tasks like wall alterations, creating new spaces, or electrical rewiring to support AC units.",
  "Any adjustments to the building's infrastructure, such as ductwork modifications or additional support, are beyond the scope of our services.",
  "Troubleshooting or repairing electrical systems unrelated to the AC unit is not included.",
  "Examples include wiring or circuit problems in your home that do not directly affect the AC system.",
  "Any issues with the home's main electrical system or appliances outside the scope of the AC are the responsibility of an electrician.",
  "Services exceeding the manufacturer’s recommended maintenance schedule are excluded.",
  "This includes over-servicing or unnecessary part replacements that go beyond what’s suggested for optimal functioning.",
  "We follow the manufacturer’s guidelines for servicing and recommend only essential maintenance as per their instructions."
    ],
    service: ["Installation", "Uninstallation"],
    repair: ["dis"],
    ACcondition: [
      'Regular checks for split and window ACs.',
      'We clean and fix your AC on time.',

    ],

    Benefits: [
      
        {
          "title": "Improved Cooling Efficiency",
          "descriptionpoint": [
            "Regular servicing ensures the system is free of dirt and debris, maximizing airflow.",
            "Clean filters and coils help your AC cool faster and more effectively.",
            "Proper refrigerant levels ensure that your AC maintains optimal cooling performance.",
            "Reduced strain on the system allows it to operate more efficiently over time."
          ]
        },
        {
          "title": "Energy Savings",
          "descriptionpoint": [
            "Clean and maintained systems consume less power, lowering electricity bills.",
            "Well-functioning parts like the compressor and thermostat use less energy.",
            "Fixing minor issues early prevents inefficient operation and saves energy.",
            "You can expect a reduction in your monthly energy costs due to improved efficiency."
          ]
        },
        {
          "title": "Increased Longevity",
          "descriptionpoint": [
            "Timely maintenance and repairs prevent severe system breakdowns that can shorten lifespan.",
            "Regular checks extend the operational life of components like the compressor and fan motors.",
            "Proper care helps avoid major failures that could require costly replacements.",
            "A well-maintained AC can last 10-15 years or even longer with proper care."
          ]
        },
        {
          "title": "Enhanced Air Quality",
          "descriptionpoint": [
            "Cleaning filters and coils removes trapped dust, allergens, and bacteria.",
            "Servicing ensures that your AC doesn’t recirculate pollutants, improving indoor air quality.",
            "Regular maintenance reduces mold and bacteria buildup, preventing foul odors.",
            "Clean air helps with respiratory health, especially for allergy sufferers."
          ]
        },
        {
          "title": "Prevents Major Breakdowns",
          "descriptionpoint": [
            "Early detection of small issues prevents costly repairs and replacements.",
            "Routine servicing helps spot refrigerant leaks, faulty wiring, or malfunctioning components.",
            "Keeping parts in good condition ensures fewer emergency breakdowns.",
            "Prevents unexpected disruptions and costly downtime during peak seasons."
          ]
        },
        {
          "title": "Fewer Unpleasant Odors",
          "descriptionpoint": [
            "Mold, mildew, and bacteria in the AC system can cause unpleasant smells.",
            "Regular cleaning eliminates sources of odor like stagnant water or dirty filters.",
            "Routine servicing ensures the AC maintains a fresh-smelling environment.",
            "A well-maintained unit doesn’t emit musty or stale smells, promoting a healthier space."
          ]
        },
        {
          "title": "Better Temperature Control",
          "descriptionpoint": [
            "Servicing ensures the thermostat provides accurate temperature regulation.",
            "Well-maintained AC units keep the indoor environment at your desired temperature.",
            "Precise control prevents overworking the system, maintaining comfort without energy waste.",
            "No fluctuations in room temperature, ensuring consistent comfort all day long."
          ]
        }
      
      
  ],

    Servicesoffer: [
      { title: 'accc' },
      { description: "unastaltion" },
      {
        descriptionpoint: [
          'Regular checks for split and window ACs.',
          'We clean and fix your AC on time.',
          'We’ll repair it if it stops working.',
          'Skilled people take care of your AC.',
          'Quick service if theres an emergency.',

        ]
      },],
    Approch: [
      {
        "title": "Comprehensive Diagnostics",
        "descriptionpoint": [
          "We begin with a detailed diagnostic check to find the root cause of issues.",
          "This includes identifying problems like cooling inefficiencies, refrigerant leaks, or electrical faults.",
          "Our technicians use advanced tools to assess the overall performance of your AC system.",
          "Thorough inspections ensure no hidden issues are overlooked, enabling precise and effective solutions."
        ]
      },
      {
        "title": "Expert Repairs",
        "descriptionpoint": [
          "Our technicians use high-quality parts for efficient repairs, ensuring reliability and durability.",
          "We restore your AC's functionality to ensure it performs at its best, even under heavy usage.",
          "Repairs are carried out swiftly and professionally, minimizing downtime and inconvenience.",
          "Specialized expertise allows us to handle all brands and types of ACs, from window units to split systems."
        ]
      },
      {
        "title": "Preventive Tips",
        "descriptionpoint": [
          "During service visits, we provide useful tips for maintaining your AC to keep it in top condition.",
          "These tips help in extending the AC's lifespan and preventing future breakdowns caused by common issues.",
          "Guidance on proper cleaning, filter replacement, and optimal temperature settings enhances efficiency.",
          "We also educate customers about signs of potential problems, enabling early intervention to avoid major repairs."
        ]
      },
      {
        "title": "Long-Term Comfort",
        "descriptionpoint": [
          "Our focus is on keeping your AC running smoothly over the long term, ensuring reliable performance year-round.",
          "This helps save money on frequent repairs and ensures consistent comfort, even in extreme weather.",
          "Regular maintenance services are available to enhance durability and maintain energy efficiency.",
          "Our commitment to quality ensures that you enjoy a cool and comfortable environment without interruptions."
        ]
      }
      
    ],


    whychoose: [
      
        {
          "title": "Unmatched Expertise",
          "options": [
            {
              "content": [
                "Our technicians are highly trained and certified, with extensive knowledge in AC systems.",
                "We stay updated with the latest technologies to provide the most efficient service.",
                "Skilled in repairing and maintaining all types of AC systems, including residential and commercial units."
              ]
            }
          ]
        },
        {
          "title": "Quick Response Times",
          "options": [
            {
              "content": [
                "We understand the urgency of AC issues, especially in hot weather, and guarantee fast response times.",
                "Once you reach out, we will schedule your service quickly, minimizing your wait time.",
                "Our technicians arrive promptly and get to work right away, ensuring minimal disruption."
              ]
            }
          ]
        },
        {
          "title": "Comprehensive AC Services",
          "options": [
            {
              "content": [
                "From general cleaning to gas refills and full system installations, we provide end-to-end AC services.",
                "We can repair, maintain, and install all major AC brands, ensuring your needs are met.",
                "Our services are available for both residential and commercial clients."
              ]
            }
          ]
        },
        {
          "title": "Quality and Genuine Spare Parts",
          "options": [
            {
              "content": [
                "We use only genuine, high-quality spare parts for all repairs to ensure your AC runs efficiently.",
                "We source parts directly from trusted manufacturers to guarantee long-term performance.",
                "Our technicians only replace components when necessary to maintain the system’s integrity."
              ]
            }
          ]
        },
        {
          "title": "Affordable and Transparent Pricing",
          "options": [
            {
              "content": [
                "Affordable pricing without sacrificing the quality of service is one of our key strengths.",
                "We provide upfront estimates and keep you informed of all costs involved before proceeding.",
                "No hidden fees – the price you see is the price you pay."
              ]
            }
          ]
        },
        {
          "title": "Customer-Centric Approach",
          "options": [
            {
              "content": [
                "We listen to your concerns and ensure you are fully informed about the issues with your AC.",
                "We value your time and offer flexible scheduling to accommodate your convenience.",
                "Your satisfaction is our priority, and we ensure hassle-free service every time."
              ]
            }
          ]
        },
        {
          "title": "After-Service Support",
          "options": [
            {
              "content": [
                "Our after-service support ensures your AC continues to run efficiently after repairs.",
                "If any issues arise post-service, we offer follow-up visits to address any concerns.",
                "We're committed to providing ongoing support, ensuring long-term satisfaction."
              ]
            }
          ]
        },
        {
          "title": "Emergency Services",
          "options": [
            {
              "content": [
                "AC breakdowns can happen unexpectedly, which is why we offer 24/7 emergency repair services.",
                "Our technicians are ready to address urgent issues, ensuring you stay cool even in emergencies.",
                "We understand the urgency and respond promptly, regardless of the time of day or night."
              ]
            }
          ]
        }
      
      
    ],
    howtobook: [
      
        {
          "title": "Call Us",
          "description": "Contact our helpline for any inquiries or to schedule an appointment."
        },
        {
          "title": "Online Booking",
          "description": "Book easily through our website by filling in your service details and preferred timing."
        },
        {
          "title": "WhatsApp",
          "description": "Send us a quick message on WhatsApp for fast scheduling and inquiries."
        },
        {
          "title": "On-Site Visit",
          "description": "Our technician will visit your location, assess the issue, and provide a free quote for repair."
        },
        {
          "title": "Service Confirmation",
          "description": "After confirming the service, our team will perform repairs efficiently, keeping you updated throughout."
        }
      
      
    ],
    faq: [
      
        {
          "title": "How often should I service my AC?",
          "description": "It is recommended to get your AC serviced at least once a year to ensure optimal performance and energy efficiency. However, if you use your AC heavily, especially during summer months, bi-annual servicing is ideal to prevent wear and tear and extend the life of the unit."
        },
        {
          "title": "Why is my AC not cooling properly?",
          "description": "Several factors can cause your AC to not cool properly, including low refrigerant levels, clogged air filters, a malfunctioning thermostat, or blocked air vents. Our expert technicians will thoroughly inspect your unit to diagnose the issue and provide the best solution to restore its cooling performance."
        },
        {
          "title": "How long does AC service take?",
          "description": "A standard AC service typically takes 30 minutes to 1 hour, depending on the size and condition of the unit. If the service requires major repairs, such as replacing components or refilling refrigerant, it may take additional time, and our team will keep you informed throughout the process."
        },
        {
          "title": "Can you service any brand of AC?",
          "description": "Yes, we provide professional servicing for all major AC brands, including LG, Samsung, Daikin, Hitachi, Voltas, and more. Our technicians are trained to handle different models and ensure quality service, regardless of the brand of your AC."
        },
        {
          "title": "Do I need to be home for the service?",
          "description": "While it’s not mandatory, it’s ideal for someone to be present during the service to approve repairs and discuss any concerns with the technician. If you can’t be available, we recommend leaving clear instructions to ensure a smooth and hassle-free process."
        },
        {
          "title": "What types of AC units do you service?",
          "description": "We service a wide range of AC units, including window ACs, split ACs, central ACs, and portable ACs. No matter the type or size of your air conditioner, our team is equipped to handle all servicing and repair needs efficiently."
        },
        {
          "title": "What does a basic AC service include?",
          "description": "A basic service involves cleaning air filters, checking refrigerant levels, inspecting electrical connections, and ensuring the thermostat is working correctly. It also includes cleaning the condenser and evaporator coils to improve cooling efficiency and overall performance."
        },
        {
          "title": "How do I book an AC service appointment?",
          "description": "Booking an AC service is simple and convenient. You can contact us through our website, call us, or reach out via WhatsApp to schedule an appointment. Just provide your details, preferred time, and type of service required, and we’ll confirm your booking."
        },
        {
          "title": "What if my AC requires replacement parts?",
          "description": "If your AC needs replacement parts, we’ll inform you about the issue and the cost involved. We only use genuine parts to ensure long-lasting performance and will proceed with replacements only after receiving your approval."
        },
        {
          "title": "Do you provide same-day AC repair services?",
          "description": "Yes, we offer same-day AC repair services for urgent issues, subject to technician availability. Our goal is to resolve your problem as quickly as possible so that you can enjoy uninterrupted cooling."
        },
        {
          "title": "How much does AC servicing cost?",
          "description": "The cost of servicing depends on the type of service and repairs required. Basic servicing is affordable, while advanced repairs or part replacements may incur additional costs. Contact us for a detailed quote based on your specific needs."
        },
        {
          "title": "What if the problem persists after servicing?",
          "description": "If the issue persists after servicing, we provide a follow-up service free of charge within the warranty period. Our team is committed to ensuring complete customer satisfaction and will re-evaluate and fix the problem promptly."
        },
        {
          "title": "Do you provide gas refilling for ACs?",
          "description": "Yes, we provide refrigerant gas refilling services to restore cooling performance in your AC. Low refrigerant levels can significantly affect cooling efficiency, and our team ensures a proper refill to meet your unit's requirements."
        },
        {
          "title": "Can you repair ACs with major issues like compressor failure?",
          "description": "Yes, we handle major AC repairs, including compressor failure, electrical issues, and more. Our experienced technicians are trained to manage complex repairs and will provide a detailed assessment and solution for your AC problems."
        },
        {
          "title": "Do you offer AMC (Annual Maintenance Contracts) for ACs?",
          "description": "Yes, we provide AMC plans to ensure regular maintenance and hassle-free service throughout the year. Our AMC packages include scheduled checkups, priority service, and discounted rates for repairs, offering peace of mind and value for money."
        }
      
      
    ],
    parts: [
      { part: 'General AC Servicing', approximateCost: " Rs. 349 to Rs. 469" },
      { part: 'AC Installation', approximateCost: "Rs. 1499 to Rs. 1899" },
      { part: 'AC Uninstallation', approximateCost: "Rs. 399 to Rs. 1599" },
      { part: 'Gas Filling (1 ton)', approximateCost: "Rs. 1899 to Rs. 2399" },
      { part: 'Gas Filling (1.5 ton)', approximateCost: "Rs. 2299 to Rs. 2599" },

    ]

  },
  // Add more services here...
];

services.forEach(service => {
  console.log(`Service ID: ${service.id}`);
  console.log(`Title: ${service.title}`);
  console.log(`benefits: ${service.Benefits}`);
  console.log(`Description: ${service.description}`);
  console.log(`Type: ${service.Type}`);
  console.log(`Brands: ${service.brands}`);
  // console.log(service);
  console.log(`Duration: ${JSON.stringify(service.duration)}`);
  console.log(`Service Included: ${service.serviceinclude}`);
  console.log(`Service Not Included: ${service.servicenotinclude}`);
  // console.log(`Repair: ${service.repair}`);
  console.log(`AC Condition: ${service.ACcondition}`);
  console.log(`Benefits: ${JSON.stringify(service.Benefits)}`);
  // console.log(`Services Offered: ${JSON.stringify(service.Servicesoffer)}`);
  console.log(`Why Choose: ${JSON.stringify(service.whychoose)}`);
  console.log(`How to Book: ${service.howtobook}`);
  console.log(`FAQ: ${JSON.stringify(service.faq)}`);
  console.log(`Parts: ${JSON.stringify(service.parts)}`);
  console.log('-----------------------------------');
});

export default function AboutServiceDetails() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate(); // React Router hook for navigation

  const handleLearnMore = (id) => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  const handleOpenNewPage = () => {
    navigate('/data', { state: { service: selectedService } }); // Navigate with state
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="services-container ml-10 mr-10 p-3 font-title">
      <h2 className="text-center font-title font-bold text-2xl p-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="p-3 border rounded-lg shadow-md ">
             <div className="font-title flex items-center justify-start gap-x-2">
            <FontAwesomeIcon icon={service.icon} className="text-purple-700 transition-opacity opacity-100 mb-2 text-2xl" />
            <h3 className="font-body font-bold text-lg mb-2">{service.title}</h3>
            
            {/* <h3 className="product-title font-bold text-lg mb-2 ">{service.icon}</h3> */}
          </div >
            <p>{service.description}</p>

            <button
              onClick={() => handleLearnMore(service.id)}
              className="text-blue-500 underline font-body"
            >
              Click me.
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedService && (
        <div className="fixed inset-0 font-title bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg  w-[800px] h-[500px] relative overflow-y-auto">
            <button
              onClick={closeModal}
              className="text-red-600 font-title font-bold text-xl absolute top-2 right-4"
            >
              &times;
            </button>
            <h2 className="font-bold font-title text-2xl mb-4 ">{selectedService.title}</h2>
            <p className="mb-4  font-body font-bold  text-slate-600">{selectedService.description2}</p>
            <p className='mt-4'>{selectedService.details1}</p>
            <li className='list-disc text-lg mt-3 mb-2 font-body font-bold'>keypoints</li>
            <ul className="list-decimal pl-6 ">
              {selectedService.descriptionpoint.map((point, index) => (
                <>
                  <li key={index} className="text-gray-700">{point}</li>

                </>
              ))}
            </ul>
            <button
              onClick={handleOpenNewPage}
              className="bg-blue-500 mt-3 font-body text-white py-2 px-4 rounded-lg "
            >
              Go to Full Page
            </button>

          </div>

        </div>
      )}
    </div>
  );
}
