import React, { useEffect, useRef, useState } from 'react';
import Ac_Service_emogi from './Ac_Service_emogi';
import OrderSummary from './OrderSummary';
import { FaCalendarAlt } from "react-icons/fa";
import ThankYouPage from '../ThankYouPage';
import ARD from '../assets/servImg/AntiRust.jpeg'
import ACR from '../assets/AC/acrepair.jpg'
import GLR from '../assets/AC/Gasrefill.jpg'
import AI from '../assets/AC/ACinst_uni.jpg'
import zwash from '../assets/AC_emoji_images/z-wash1.jpeg'
import AMC from '../assets/AC/ac amc service image 2.png'
// import { type } from '@testing-library/user-event/dist/type';
import Card from './Card';
import Calendar from 'react-calendar';
import ACRent from '../assets/AC/ACRENT.jpg'
import 'react-calendar/dist/Calendar.css';
import Ac_Service_home_drop from './Ac_Service_home_drop';


const services = {
  acGasrefill: [

    {
      id: 1,
      tagId: "Full Gas Refill",
      heading: "Full Gas Refill",
      desc: [
        "Refills the AC unit with the full required amount of gas.",
        // "Ensures optimal cooling performance after the refill.",
        // "Professional gas refill service to restore AC efficiency.",

      ],
      desc1: [
        "Refills the AC unit with the full required amount of gas.",
        "Ensures optimal cooling performance after the refill.",
        "Professional gas refill service to restore AC efficiency.",

      ],
      service_include: [
        "Removing old refrigerant gas from the system.",
        "Refilling with fresh refrigerant to restore optimal performance.",
        "Checking for any gas leaks to ensure the system is sealed properly.",
        "Testing the AC to confirm it's cooling effectively.",
        "Pressure and cooling performance checks to ensure proper functionality post-refill.",
        "Safe handling of refrigerant gas to comply with environmental and safety standards."
      ],
      service_not_include: [
        "Replacing the compressor or other major components.",
        "Repairing ACs that are broken or severely damaged beyond simple fixes.",
        "Addressing electrical or mechanical issues that require extensive repairs."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "The Full Gas Refill Service replenishes your AC with the necessary refrigerant gas to restore optimal cooling performance and ensure efficient operation.",

      ],
      originalPrice: 3499,
      price: 2499,
      imp: true,
      plan: "1 Month",
      img: GLR, // Replace with the correct image URL
      type1: [{ id: 1, name: " Split AC Full Gas Refill", desc: "These air conditioners consist of two units (indoor and outdoor), offering quiet and efficient cooling for medium to large rooms.", price: 2499 }],
      type2: [{ id: 2, name: " Window AC Full Gas Refill", desc: "Compact units designed for single-room cooling, installed in a window or wall, ideal for smaller spaces.", price: 2499 }],

    },
    {
      id: 2,
      tagId: "Gas Top Up",
      heading: "Gas Top Up",
      desc: [
        "Check the refrigerant level to identify low gas.",
        // "Refill the cooling gas (refrigerant) to the required level.",
        // "Test the AC for proper cooling after the gas top-up.",
      ],
      desc1: [
        "Check the refrigerant level to identify low gas.",
        "Refill the cooling gas (refrigerant) to the required level.",
        "Test the AC for proper cooling after the gas top-up.",
      ],
      service_include: [
        "Diagnosis of refrigerant levels to determine the required amount.",
        "Partial refill of refrigerant to restore cooling efficiency.",
        "Leak testing to check for any minor leaks.",
        "Performance and pressure testing after the refill.",
        "Safe handling of refrigerant following eco-friendly standards.",
        "Adjustment of refrigerant pressure for optimal efficiency."
      ],
      service_not_include: [
        "Full refrigerant gas refill or removal of old gas from the system.",
        "Replacing the compressor or other major, critical components.",
        "Repairing significant electrical or mechanical issues."
      ],

      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [

        " The Gas Top-Up Service adds refrigerant gas to your AC when it's running low, ensuring it continues to cool effectively without the need for a full gas refill..",
      ],
      originalPrice: 3499,


      price: 2499,
      imp: true,
      plan: "1 Month",
      img: GLR, // Replace with the correct image URL     
      type1: [{ id: 3, name: " Split AC Gas Top Up", desc: "Consists of two units (indoor and outdoor), offering quiet and efficient cooling for medium to large rooms.", price: 2499 }],
      type2: [{ id: 4, name: " Window AC Gas Top Up", desc: "A compact unit designed to fit in a window or wall, ideal for cooling single rooms in smaller spaces.", price: 2499 }],
    },
    {
      id: 3,
      tagId: "Gas Leakage Repair",
      heading: "Gas Leakage Repair",
      originalPrice: 3499,

      desc: [
        "        Detect and seal any gas leaks in the AC system.",
        // "        Recharge the refrigerant to restore optimal cooling performance.",
      ],
      desc1: [
        "Detect and seal any gas leaks in the AC system.",
        "Recharge the refrigerant to restore optimal cooling performance.",
      ],
      service_include: [
        "Thorough inspection to identify the source of the refrigerant leak.",
        "Sealing or repairing damaged refrigerant pipes or connections.",
        "Leak testing to ensure no further refrigerant loss after repairs.",
        "Refilling refrigerant gas as needed following the leak repair.",
        "Cooling performance and pressure checks to ensure optimal operation.",
        "Use of high-quality sealing materials to prevent future leaks."
      ],
      service_not_include: [
        "Replacement of major components such as compressors or condensers.",
        "Structural modifications, including core cutting or drilling.",
        "Warranty coverage for leaks caused by external physical damage or mishandling."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "The Gas Leakage Repair Service identifies and fixes any leaks in your AC’s refrigerant system, ensuring it can retain gas properly and operate efficiently and Recharge the refrigerant to restore optimal cooling performance,Inspect critical components like pipes, valves, and joints for damage.",
      ],
      price: 2499,
      imp: true,
      plan: "1 Month",
      img: GLR, // Replace with the correct image URL
      type1: [{ id: 5, name: " Split AC Gas Leakage Repair", desc: "Consists of two separate units: one indoor and one outdoor, designed to offer efficient and quiet cooling.Ideal for cooling larger rooms and providing consistent performance with minimal noise..", price: 2499 }],
      type2: [{ id: 6, name: " Window AC Gas Leakage Repair", desc: "A compact, single-unit system that fits into a window or wall, perfect for smaller spaces.Provides cost-effective cooling for individual rooms and is easy to install.", price: 2499 }],
    },
    {
      id: 4,
      tagId: "Complete Gas Refill",
      originalPrice: 3499,

      heading: "Complete Gas Refill",

      desc: [
        "        Top-up or replace the entire refrigerant gas in the AC system. ",

        // "Restore the AC's cooling efficiency to its maximum potential.",

        // " Perform necessary tests to ensure leak-free and efficient operation. ",
      ],
      desc1: [
        "        Top-up or replace the entire refrigerant gas in the AC system. ",

        "Restore the AC's cooling efficiency to its maximum potential.",

        " Perform necessary tests to ensure leak-free and efficient operation. ",
      ],
      service_include: [
        "Evacuation of old or contaminated refrigerant from the system.",
        "Complete refill with high-quality refrigerant gas according to AC specifications.",
        "Leak detection and minor sealing to prevent refrigerant loss.",
        "Pressure testing and cooling performance checks after the refill.",
        "Safe disposal of old refrigerant gas in line with environmental standards.",
        "Final inspection to ensure the AC operates at peak cooling efficiency."
      ],
      service_not_include: [
        "Repair or replacement of damaged components like compressors or valves.",
        "Major leak repairs or structural modifications, including core cutting or drilling.",
        "Additional charges for refrigerant required beyond the standard capacity."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [

        "The Complete Gas Refill Service removes the old refrigerant gas and fills your AC with fresh gas, ensuring it cools effectively and operates efficiently.",
      ],
      price: 2499,
      imp: true,
      plan: "1 Month",
      img: GLR, // Replace with the correct image URL
      type1: [{ id: 7, name: " Split AC Gas Refill", desc: "These air conditioners consist of two units (indoor and outdoor), designed for quiet and efficient cooling.Ideal for cooling larger rooms, offering consistent performance with minimal noise.", price: 2499 }],

      type2: [{ id: 8, name: " Window AC Gas Refill", desc: "A compact unit that fits in a window or wall, perfect for cooling single rooms.Provides cost-effective cooling for smaller spaces and is easy to install.", price: 2499 }],
    },
  ],
  acInstallationUninstallation: [
    {
      id: 1,
      tagId: "AC Installation",
      heading: "AC Installation",

      type1: [
        { id: 9, name: " Split AC Installation", desc: "Split ACs are ideal for larger spaces, providing efficient cooling with minimal noise. They consist of two units: an indoor and an outdoor unit, ensuring better air distribution. ", price: 1149 },
      ],
      type2: [
        { id: 10, name: " Window AC Installation", desc: "Window ACs are compact and perfect for smaller spaces. These all-in-one units are easy to install and provide reliable cooling with a simple design. ", price: 499 },
      ],

      desc: [
        "Mount and securely fix the indoor and outdoor units. ",
        // "Connect electrical wires and refrigerant pipes properly. ",
        // "Test the AC for efficient cooling after installation. ",
      ],
      desc1: [
        "Disconnect and safely remove electrical connections and refrigerant lines.",
        "Dismount and detach the indoor and outdoor units.",
        "Properly dispose of or relocate the unit as required.",
      ],
      service_include: [
        "Complete AC installation and mounting.",
        "Connection of electrical and refrigerant lines.",
        "Checking and testing the unit for proper functionality.",
        "Basic guidance on AC usage and maintenance."
      ],
      service_not_include: [
        "Electrical wiring modifications or new power outlets.",
        "Repair of existing AC units.",
        "Ductwork or structural modifications.",
        "Additional materials such as mounting brackets or piping (if not provided by the customer)."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "We offer professional AC installation services to ensure your air conditioning unit is set up efficiently and securely. Our experienced technicians handle installations with precision, prioritizing customer satisfaction and safety. ",
      ],
      originalPrice: 1599,
      price2: 3199,
      price: 499,
      imp: true,
      plan: "1 Month",
      img: AI, // Update the image path accordingly
    },
    {
      id: 2,
      tagId: "AC Uninstallation",
      heading: "AC Uninstallation",

      type1: [{ id: 13, name: "Split AC UnInstallation", desc: "Split AC uninstallation involves carefully disconnecting the indoor and outdoor units. We ensure no damage to the walls, wiring, or refrigerant pipes during the process. ", price: 499 }],
      type2: [{ id: 14, name: "AC Window UnInstallation", desc: "Window AC uninstallation is quick and hassle-free. Our team removes the unit while safeguarding the window frame and electrical connections. ", price: 399 }],

      desc: [
        "Disconnect and safely remove electrical connections and refrigerant lines.",
        // "Dismount and detach the indoor and outdoor units.",
        // "Properly dispose of or relocate the unit as required.",
      ],
      desc1: [
        "Disconnect and safely remove electrical connections and refrigerant lines.",
        "Dismount and detach the indoor and outdoor units.",
        "Properly dispose of or relocate the unit as required.",
      ],
      service_include: [
        "Safe disconnection of electrical and refrigerant lines.",
        "Removal of the indoor and/or outdoor units.",
        "Careful handling to prevent damage to the AC unit and property.",
        "Basic cleaning of the area after uninstallation."
      ],
      service_not_include: [
        "Repair or maintenance of the AC unit during the uninstallation process.",
        "Restoration of walls, window frames, or other areas impacted by removal.",
        "Disposal or removal of the uninstalled AC unit from the premises."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Our AC uninstallation services ensure safe and damage-free removal of your air conditioning unit. Our skilled technicians handle the process efficiently, leaving your space clean and ready for future use. ",

      ],
      price: 399,
      originalPrice: 999,
      price2: 1299,
      imp: true,
      plan: "1 Month",
      img: AI, // Update the image path accordingly
    },
  ],
  acService: [
    {
      id: 1,

      tagId: "Essential AC Service",
      heading: "Essential AC Service",
      type1: [{ id: 15, name: " Split AC Essential Service", desc: "Comprehensive cleaning and inspection of both the indoor and outdoor units. This includes removing dirt and debris, ensuring optimal cooling efficiency, and checking  system for any potential issues. ", price: 499 }],
      type2: [{ id: 16, name: " Window AC Essential service", desc: "Thorough cleaning and inspection of the unit to maintain smooth airflow, proper cooling, and overall performance. ", price: 399 }],

      desc: [
        // "Repairs and maintains AC units with precision.",
        "Check and clean the AC parts like filters and coils.",
        // "Make sure the cooling gas level is correct.",
        // "Fix any small problems like leaks or loose parts."
        // "Professional setup with attention to detail.",
      ],
      desc1: [
        // "Repairs and maintains AC units with precision.",
        "Check and clean the AC parts like filters and coils.",
        "Make sure the cooling gas level is correct.",
        "Fix any small problems like leaks or loose parts.",
        "Professional setup with attention to detail.",
      ],
      service_include: [
        "Cleaning of filters, vents, and coils to maintain efficiency.",
        "Checking and refilling gas if required for optimal performance. ",
        "Servicing of fans, blowers, and all electrical components. ",
        "Testing and adjusting the thermostat and other moving parts for smooth operation. ",
      ],
      service_not_include: [
        "Replacing wiring or circuit boards as part of the service. ",
        "Cost of spare parts, which will be charged separately if needed. ",
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Essential AC Service ensures your air conditioner operates at peak performance by keeping it clean, maintaining strong cooling efficiency, and reducing energy consumption. A well-maintained AC not only provides consistent comfort but also extends the lifespan of the unit. ",
      ],
      originalPrice: 899,
      price2: 999,

      price: 399,
      imp: true,
      plan: "1 Month",
      img: ACR, // Update the image path accordingly
    },
    {
      id: 2,

      tagId: "AC Premium Service",
      heading: "AC Premium Service",
      type1: [{ id: 16, name: " Split AC Premium service", desc: "Advanced cleaning of indoor and outdoor units to remove accumulated dirt, debris, and dust.Comprehensive inspection of the cooling system, refrigerant levels, and electrical connections to ensure efficient and uninterrupted cooling.", price: 599 }],
      type2: [{ id: 17, name: " Window AC Premium service", desc: "In-depth cleaning of the entire unit, including filters, vents, and internal components, to maintain smooth airflow and cooling performance.Detailed maintenance to address potential wear and tear, ensuring long-lasting functionality.", price: 499 }],

      desc: [
        "Clean the AC filters, coils, and inside parts.",
        // "Check parts like the compressor, fan, and thermostat.",
        // "Refill the cooling gas (refrigerant) if needed."
      ],
      desc1: [
        "Clean the AC filters, coils, and inside parts.",
        "Check parts like the compressor, fan, and thermostat.",
        "Refill the cooling gas (refrigerant) if needed."
      ],
      service_include: [
        "Full system inspection to identify potential issues and ensure smooth operation. ",

        "Cleaning of filters, coils, and condensate drains for improved airflow. ",

        "Ensuring the AC doesn’t circulate dust or allergens for cleaner air. ",

        "Lubricating moving parts to reduce wear and improve performance. ",

        "Checking the cooling performance to maintain optimal efficiency. ",

        "Inspecting and topping up refrigerant levels as needed to ensure maximum cooling."
      ],
      service_not_include: [
        " Charges for replacing components like fans, motors, or compressors. ",

        "Tasks involving structural modifications such as drilling, core cutting, or masonry work.",
        "Coverage for damages caused by improper use regular wear and tear or insufficient upkeep",
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Premium AC Service is designed to deliver top-notch care for your air conditioner, including advanced cleaning, detailed inspection, and thorough maintenance. This service not only enhances cooling efficiency but also prevents potential breakdowns and extends the lifespan of your AC, ensuring optimal performance and comfort throughout the year."
      ],
      originalPrice: 1199,
      price2: 1299,

      price: 499,
      imp: true,
      plan: "1 Month",
      img: ACR, // Update the image path accordingly
    },
    {
      id: 3,

      tagId: "AC Repair Service",
      heading: "AC Repair Service",
      type1: [{ id: 18, name: " Split AC Repair", desc: "Repairs for both indoor and outdoor units, addressing cooling inefficiencies, refrigerant leaks, and electrical faults.Solutions for fan motor issues, sensor malfunctions, and improper airflow.", price: 249 }],
      type2: [{ id: 19, name: " Window AC Repair", desc: "Fixes for cooling problems, compressor malfunctions, and electrical issues.Repairs for motors, fans, and other critical components to ensure reliable performance.", price: 199 }],
      desc: [
        "Fix low cooling, power issues, and leaks.",
        // "Eliminate unwanted noise and smells.",
        // "Quick and reliable solutions for comfort."
      ],
      desc1: [
        "Fix low cooling, power issues, and leaks.",
        "Eliminate unwanted noise and smells.",
        "Quick and reliable solutions for comfort."
      ],
      service_include: [
        "Precise identification of issues to address the root cause effectively.",
        "Complete repair services, including filter and coil cleaning, and fixing electrical components.",
        "Refrigerant gas refilling, if required, to restore cooling performance.",
        "Use of durable, high-quality spare parts for replacements.",
        "Fast and reliable repair work to minimize downtime and ensure comfort.",
        "Comprehensive post-repair testing to confirm optimal AC functionality."
      ],
      service_not_include: [
        "Full replacement of the AC unit.",
        "Structural modifications or reinstallation of the AC unit.",
        "Any damage caused by misuse or external factors (e.g., power surges, accidents).",
        "Repairs related to issues caused by improper installation or external interference."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "AC Repair Service provides expert solutions to resolve any issues with your air conditioner, restoring its cooling efficiency and ensuring smooth, trouble-free operation."
      ],
      originalPrice: 699,
      price2: 699,

      price: 199,
      imp: true,
      plan: "1 Month",
      img: ACR, // Update the image path accordingly
    },
  ],
  acService2: [
    {
      acRepair: [
        {
          id: 1,
          tagId: "Less / No Cooling",
          heading: "Less / No Cooling",
          type1: [{ id: 20, name: " Split AC Less / No Cooling", desc: "Ideal for homes and offices, split AC units often face cooling issues due to refrigerant leaks, dirty air filters, or malfunctioning compressors. This service ensures proper diagnosis and repair for uninterrupted cooling. ", price: 199 }],
          type2: [{ id: 21, name: " Window AC Less / No Cooling", desc: "Compact and widely used, window AC units may experience reduced cooling due to clogged filters, thermostat issues, or refrigerant depletion. Our service focuses on resolving these problems efficiently. ", price: 199 }],

          desc: [
            "Check and clean the condenser and evaporator coils.",
            // "Repair or replace faulty components like the compressor or fan.",
            // "Detect and fix refrigerant leaks to restore cooling.",
          ],
          desc1: [
            "Check and clean the condenser and evaporator coils.",
            "Repair or replace faulty components like the compressor or fan.",
            "Detect and fix refrigerant leaks to restore cooling.",
          ],
          service_include: [
            "Thorough inspection to diagnose cooling problems.",
            "Detection and refilling of refrigerant leaks.",
            "Compressor inspection and minor repairs.",
            "Cleaning or replacing clogged air filters.",
            "Checking and calibrating thermostats and sensors.",
            "Repair or replacement of faulty components."
          ],
          service_not_include: [
            "Installation of new AC units.",
            "Major part replacements (e.g., compressor, condenser) unless covered under warranty.",
            "Deep cleaning of ducts and vents."
          ],

          detaildesc: [
            "Less/No Cooling Service is tailored to resolve issues when your air conditioner fails to cool properly or stops cooling entirely. This service identifies and repairs problems such as refrigerant leaks, clogged filters, or faulty components to restore optimal cooling performance. ",
          ],
          originalPrice: 399,
          price2: 399,
          price: 199,
          imp: true,
          plan: "1 Month",
          img: ACR, // Update the image path accordingly
          brands: [
            "Daikin",
            "Voltas ",
            "LG ",
            "Samsung ",
            "Hitachi ",
            "Carrier ",
            "Whirlpool",
            "Panasonic",
            "Haier",
          ],
        },
        {
          id: 2, // New ID for AC Repair Service
          tagId: "Power issue",

          heading: "Power issue",
          type1: [{ id: 22, name: " Split AC Power issue", desc: "Split AC units can face power issues due to faulty wiring, damaged power cords, or malfunctioning circuit boards. This service ensures a thorough inspection and resolution of power-related problems. ", price: 199 }],
          type2: [{ id: 23, name: " Window AC Power issue", desc: "Window AC units often experience power problems caused by worn-out switches, damaged plugs, or electrical overload. Our service focuses on diagnosing and fixing these issues effectively. ", price: 199 }],


          desc: [
            "Inspect and repair electrical components like wiring, capacitors, and circuit breakers.",
            // "Check and replace a faulty compressor or fan motor.",
            // "Test and resolve issues with the power supply or connections.",
          ],
          desc1: [
            "Inspect and repair electrical components like wiring, capacitors, and circuit breakers.",
            "Check and replace a faulty compressor or fan motor.",
            "Test and resolve issues with the power supply or connections.",
          ],
          service_include: [
            "Inspection of power supply and connections.",
            "Repair or replacement of damaged power cords and plugs.",
            "Checking and repairing circuit boards.",
            "Inspection of electrical components like capacitors and switches.",
            "Resolving issues related to frequent tripping or overheating."
          ],
          service_not_include: [
            "Replacement of major electrical components like compressors or motors.",
            "Electrical issues outside the AC system, such as building wiring.",
            "Repair of non-AC related electrical parts or systems.",
            "Installation or upgrades to the power supply or circuit board."
          ],
          detaildesc: [
            "Power Issue service is designed to address problems when your air conditioner fails to power on, frequently trips, or faces inconsistent power supply. This service ensures safe and reliable diagnosis and repair of electrical components. ",
          ],
          originalPrice: 399,
          price2: 399,
          price: 199, // Updated price
          imp: true,
          plan: "1 Month",
          img: ACR, // Update the image path accordingly
          brands: [
            "Daikin",
            "Voltas ",
            "LG ",
            "Samsung ",
            "Hitachi ",
            "Carrier ",
            "Whirlpool",
            "Panasonic",
            "Haier",
          ],
        },
        {
          id: 3, // New ID for AC Repair Service
          tagId: "Water Leakage",

          heading: "Water Leakage",
          type1: [{ id: 24, name: " Split AC Water Leakage", desc: "Split AC units may experience water leakage due to clogged drain lines, improper leveling, or frozen evaporator coils. This service ensures thorough inspection and repair to stop leakage. ", price: 599 }],
          type2: [{ id: 25, name: " Window AC Water Leakage", desc: "Water leakage in window AC units can occur due to blocked drainage, improper installation, or excess condensation. Our service resolves these issues to maintain proper functioning. ", price: 599 }],


          desc: [
            "Clean and unclog the AC drain pipe to prevent blockages.",
            // "Check and repair damage to the condensate pump or tray.",
            // "Inspect and fix refrigerant levels to avoid coil freezing.",
          ],
          desc1: [
            "Clean and unclog the AC drain pipe to prevent blockages.",
            "Check and repair damage to the condensate pump or tray.",
            "Inspect and fix refrigerant levels to avoid coil freezing.",
          ],
          service_include: [
            "Inspection and cleaning of drain pipes.",
            "Unclogging blocked drainage systems.",
            "Checking and fixing improper installation or leveling issues.",
            "Repairing or replacing damaged drain pans.",
            "Addressing frozen evaporator coil problems.",
            "Ensuring proper condensation flow."
          ],
          service_not_include: [
            "Replacement of major components like compressors or the AC unit.",
            "Fixing issues outside the AC system, such as building plumbing.",
            "Handling non-AC related water damage, such as leaks from walls or roofs."
          ],
          detaildesc: [
            "Water Leakage service addresses issues where water drips or leaks from your air conditioner. This service focuses on identifying and resolving problems like clogged drain pipes, improper installation, or damaged components to prevent water damage. ",
          ],
          originalPrice: 699,
          price2: 699,
          price: 599, // Updated price
          imp: true,
          plan: "1 Month",
          img: ACR, // Update the image path accordingly
          brands: [
            "Daikin",
            "Voltas ",
            "LG ",
            "Samsung ",
            "Hitachi ",
            "Carrier ",
            "Whirlpool",
            "Panasonic",
            "Haier",
          ],
        },
        {
          id: 5,

          tagId: "Unwanted Noise/Smell",
          brands: [
            "Daikin",
            "Voltas ",
            "LG ",
            "Samsung ",
            "Hitachi ",
            "Carrier ",
            "Whirlpool",
            "Panasonic",
            "Haier",
          ],
          heading: "Unwanted Noise/Smell",
          type1: [{ id: 26, name: " Split AC Repair", desc: "Split AC units may produce noise due to loose fan blades, motor issues, or vibration. Odors can arise from mold, mildew, or dirty filters. This service resolves these issues for smooth and odor-free operation. ", price: 399 }],
          type2: [{ id: 27, name: " Window AC Repair", desc: "Window AC units often generate noise due to loose screws, faulty motors, or debris. Smells can result from accumulated dirt or moisture. Our service ensures proper diagnosis and resolution. ", price: 399 }],

          desc: [
            "Clean the AC filters and internal parts to remove dirt and debris.",
            // "Check and fix loose or damaged components causing noise.",
            // "Inspect and clean the drain pipe to eliminate bad smells.",
          ],
          desc1: [
            "Clean the AC filters and internal parts to remove dirt and debris.",
            "Check and fix loose or damaged components causing noise.",
            "Inspect and clean the drain pipe to eliminate bad smells.",
          ],
          service_include: [
            "Inspection and tightening of loose components.",
            "Cleaning or replacing dirty air filters.",
            "Lubricating or repairing noisy fan motors.",
            "Checking for and addressing mold or mildew buildup.",
            "Cleaning evaporator and condenser coils.",
            "Deodorizing the AC unit to remove unpleasant smells."
          ],
          service_not_include: [
            "Replacing major parts like compressors or fan motors.",
            "Addressing noise or smell caused by external factors, such as plumbing or walls.",
            "Cleaning or repairs of non-AC-related issues, like mold outside the unit."
          ],
          detaildesc: [
            "Unwanted Noise/Smell service is designed to address issues like unusual sounds or unpleasant odors coming from your air conditioner. This service focuses on identifying and resolving problems such as loose components, clogged filters, or mold buildup to ensure a comfortable environment. ",
          ],
          originalPrice: 499,
          price2: 499,

          price: 399,
          imp: true,
          plan: "1 Month",
          img: ACR,
        },
      ]
    },
  ],
  antiRustDeepClean: [
    {
      id: 1,
      tagId: "Z-Wash",
      heading: "Z-Wash",
      type1: [{ id: 28, name: " Split AC Z-Wash", desc: "Comprehensive anti-rust cleaning for both indoor and outdoor units, targeting rust-prone areas to prevent corrosion.Focus on maintaining the longevity of key components like the condenser and coils.", price: 449 }],
      type2: [{ id: 29, name: " Window AC Z-Wash", desc: "Thorough anti-rust treatment for exterior and interior parts, including metal surfaces exposed to moisture.Preventative cleaning to reduce the risk of rust buildup and improve overall functionality.", price: 449 }],

      desc: [
        "Clean the AC parts thoroughly to remove dirt and dust.",
        // "Apply anti-rust treatment to prevent corrosion and extend the life of the unit.",
      ],
      desc1: [
        "Clean the AC parts thoroughly to remove dirt and dust.",
        "Apply anti-rust treatment to prevent corrosion and extend the life of the unit.",
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      service_include: [
        "Anti-rust cleaning of the condenser, coils, and other metal parts.",
        "Removal of dirt, dust, and debris to prevent rust buildup.",
        "Applying anti-rust treatment to exposed surfaces.",
        "Checking for any signs of corrosion and addressing minor issues.",
        "Inspection of the entire unit to ensure proper airflow and function."
      ],
      service_not_include: [
        "Major repairs like compressor replacement.",
        "Replacing parts that are beyond cleaning or anti-rust treatment.",
        "Full dismantling and reinstallation of the AC."
      ],
      detaildesc: [
        "Z-Wash Service provides a specialized anti-rust deep cleaning to safeguard your AC from rust and corrosion. This service ensures enhanced performance, improved durability, and protection against moisture-related damage, keeping your AC in optimal condition."
      ],
      originalPrice: 699,
      price2: 699,

      price: 449,
      imp: true,
      plan: "1 Month",
      img: ARD, // Replace with the correct image URL
    },
    {
      id: 2,
      tagId: "Normal Service",
      heading: "Normal Service",
      type1: [{ id: 30, name: "AC Split Normal Service", desc: "Basic cleaning of both indoor and outdoor units to remove dirt and debris.Rust prevention treatment for exposed metal parts, ensuring smooth operation and protection against corrosion.", price: 399 }],
      type2: [{ id: 31, name: "AC Window Normal Service", desc: "Cleaning of filters, vents, and key components to maintain airflow and cooling efficiency.Application of rust protection for vital parts to prevent moisture-related damage.", price: 399 }],

      desc: [
        "Clean the AC parts like filters and coils and apply a rust.",
        // "Apply a rust protection solution.",
        // "Check for and treat any rust spots.",
      ],
      desc1: [
        "Clean the AC parts like filters and coils and apply a rust.",
        "Apply a rust protection solution.",
        "Check for and treat any rust spots.",
      ],
      service_include: [
        "Removing rust from metal parts to restore condition.",
        "Coating metal surfaces to prevent future rust formation.",
        "Cleaning metal parts and coils to maintain performance.",
        "Restoring shine to metal parts for a fresh appearance.",
        "Preventing further rust buildup with protective treatments.",
        "Inspecting for rust and providing necessary fixes."
      ],
      service_not_include: [
        "Replacing parts that are badly rusted, like compressors or fans, which require full replacement.",
        "Repairing parts that are too rusted to be fixed properly.",
        "Warranty does not cover rust caused by misuse or poor maintenance."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Normal Service offers essential cleaning and rust prevention for your AC to maintain its efficiency and protect it from corrosion. This service ensures smooth performance and helps extend the lifespan of your air conditioner."
      ],
      originalPrice: 599,
      price2: 599,
      price: 399,
      imp: true,
      plan: "1 Month",
      img: zwash, // Replace with the correct image URL
    },
    {
      id: 3,
      tagId: "Dry Service",
      heading: "Dry Service",
      type1: [{ id: 32, name: " Split AC cleaning", desc: "Dry cleaning for both indoor and outdoor units, ensuring rust protection and minimal moisture exposure.Focus on maintaining smooth operation and preventing corrosion in key components.", price: 299 }],
      type2: [{ id: 33, name: " Window AC cleaning", desc: "Dry cleaning of essential parts to remove dust and dirt while preventing rust.Application of rust prevention treatment to protect against moisture damage and corrosion.", price: 299 }],

      desc: [
        "Dry cleaning to remove dust, dirt, and rust buildup.",
        // "Uses minimal moisture to protect internal components.",
        // "Helps in restoring the AC's performance.",
      ],
      desc1: [
        "Dry cleaning to remove dust, dirt, and rust buildup.",
        "Uses minimal moisture to protect internal components.",
        "Helps in restoring the AC's performance.",
      ],
      service_include: [
        "Dry cleaning of filters, vents, and coils for efficient operation.",
        "Application of anti-rust treatment to exposed metal parts to prevent corrosion.",
        "Removal of dust, dirt, and debris without the use of water.",
        "Ensuring smooth airflow and maintaining proper cooling efficiency."
      ],
      service_not_include: [
        "Replacing parts that are too badly rusted to be repaired.",
        "Major repairs for components that are excessively rusted and beyond restoration.",
        "Warranty does not cover rust damage resulting from misuse or lack of proper maintenance."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Dry Service provides a specialized rust prevention treatment using minimal moisture, ensuring your AC stays clean and protected from corrosion. This service effectively removes dirt and dust while maintaining optimal cooling performance.",
      ],
      originalPrice: 499,
      price2: 499,
      price: 299,
      imp: true,
      plan: "1 Month",
      img: zwash, // Replace with the correct image URL
    },
    {
      id: 4,
      tagId: "Wet Service",
      heading: "Wet Service",
      type1: [{ id: 34, name: " Split AC cleaning", desc: "Wet cleaning of both indoor and outdoor units to remove accumulated dirt and grime.Application of rust protection to exposed metal parts, ensuring long-lasting performance.", price: 449 }],
      type2: [{ id: 35, name: " Window AC cleaning", desc: "Wet cleaning of key components to improve airflow and cooling efficiency.Rust prevention treatment for metal parts to safeguard against corrosion.", price: 449 }],

      desc: [
        "Cleans and removes rust with moisture-based solutions.",
        // "Effective for deeper cleaning and rust removal.",
        // "Restores the AC's cooling efficiency.",
      ],
      desc1: [
        "Cleans and removes rust with moisture-based solutions.",
        "Effective for deeper cleaning and rust removal.",
        "Restores the AC's cooling efficiency.",
      ],
      service_include: [
        "Wet cleaning of filters, vents, and coils to ensure thorough cleaning.",
        "Application of rust protection treatment to exposed metal parts to prevent corrosion.",
        "Removal of dirt, dust, and debris using water for deeper cleaning.",
        "Ensuring proper airflow and enhancing cooling efficiency for optimal performance."
      ],
      service_not_include: [
        "Replacement of rusted or damaged parts that cannot be repaired.",
        "Gas recharge or refrigerant refill services.",
        "Structural modifications, such as wall drilling or core cutting."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Wet Service provides a comprehensive deep cleaning using water to eliminate dirt, dust, and grime from your AC. This service also includes rust protection to prevent corrosion, ensuring enhanced performance and longevity of your air conditioner.",
      ],
      originalPrice: 699,
      price2: 699,

      price: 449,
      imp: true,
      plan: "1 Month",
      img: zwash, // Replace with the correct image URL
    },
    {
      id: 5,
      tagId: "Chemical Service",
      heading: "Chemical Service",
      type1: [{ id: 36, name: " Split AC cleaning", desc: "Chemical cleaning for both indoor and outdoor units to eliminate stubborn dirt and rust.Ensures efficient cooling and smooth operation of key components.", price: 899 }],
      type2: [{ id: 37, name: " Window AC cleaning", desc: "Deep chemical cleaning of essential parts to maintain performance and prevent corrosion.Application of rust protection treatment to safeguard against moisture and rust damage.", price: 899 }],

      desc: [
        "Deep clean the AC coils, filters, and fins using chemical solutions.",
        // "Remove rust and prevent corrosion on internal parts.",
        // "Ensure improved cooling and efficiency with thorough cleaning.",
      ],
      desc1: [
        "Deep clean the AC coils, filters, and fins using chemical solutions.",
        "Remove rust and prevent corrosion on internal parts.",
        "Ensure improved cooling and efficiency with thorough cleaning.",
      ],
      service_include: [
        "Chemical cleaning of filters, vents, coils, and condenser.",
        "Application of rust protection treatment on metal parts.",
        "Removal of tough grime and dirt using specialized cleaning agents.",
        "Improved airflow and cooling efficiency after cleaning."
      ],
      service_not_include: [
        "Replacement of parts like compressors or fans that are too rusted to repair.",
        "Repairs for parts that are heavily corroded and cannot be salvaged.",
        "Warranty does not cover rust damage caused by misuse, neglect, or lack of maintenance."
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      detaildesc: [
        "Chemical Service provides a deep cleaning using specialized cleaning agents to remove tough dirt, grime, and rust. This service ensures thorough protection against corrosion, improved cooling efficiency, and enhanced performance of your air conditioner.",
      ],
      originalPrice: 1099,
      price2: 1099,
      price: 899,
      imp: true,
      plan: "1 Month",
      img: zwash, // Replace with the correct image URL
    },
  ],
  AC_Rent: [
    {
      id: 1,
      tagId: "AC_Rent",
      heading: "AC Rent",
      desc: [
        "Offer flexible rental plans for different AC models.",
        // "Install and set up the rented AC units at your location.",
        // "Provide regular maintenance and servicing during the rental period.",
        // "Offer support for repairs and replacements if needed.",
      ],
      desc1: [
        "Offer flexible rental plans for different AC models.",
        "Install and set up the rented AC units at your location.",
        "Provide regular maintenance and servicing during the rental period.",
        "Offer support for repairs and replacements if needed.",
      ],
      detaildesc: [
        "The AC Rent Service provides convenient and affordable air conditioning solutions for your temporary cooling needs, with flexible rental periods and hassle-free installation.",
      ],
      price: 1499,
      imp: true,
      plan: "1 Month",


      img: ACRent, // Update the image path accordingly
      type1: [
        {
          id: 37,
          name: "Split AC Rent",
          desc: [
            "Comprises two separate units: one indoor and one outdoor, offering efficient and quiet cooling.Ideal for larger rooms, providing consistent performance with minimal noise.",
          ],
          price: 1499,
        },
      ],
      type2: [
        {
          id: 38,
          name: "Window AC Rent",
          desc: [
            "A compact, single-unit system designed to fit into a window or wall, perfect for smaller spaces.Delivers cost-effective cooling for individual rooms and is easy to install and maintain.",
          ],
          price: 1499,
        },
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      service_include: [
        "AC selection assistance to choose the right type and size based on your requirements.",
        "Flexible rental plans with daily, monthly, or seasonal options.",
        "Timely delivery and professional installation of the rented AC.",
        "Periodic checks and cleaning to ensure optimal performance.",
        "Assistance in relocating the AC unit if required during the rental period."
      ],
      service_not_include: [
        "Permanent ownership of the AC is not included, as the service is strictly rental-based.",
        "Repairs beyond routine maintenance, such as major repairs or replacements, are not covered."
      ],
      ac_condition: [
        "All rented AC units are thoroughly inspected before delivery to ensure they are in proper working condition.",
        "Units are cleaned, sanitized, and tested for optimal cooling performance.",
        "Any minor issues are resolved prior to installation, guaranteeing a hassle-free experience for renters."

      ],
      plans: [
        { duration: "3 Month", price: 2800 },
        { duration: "6 Month", price: 5000 },
        { duration: "1 Year", price: 9000 },
      ],
    },
  ],
  AC_AMC: [
    {
      id: 1,
      tagId: "AC_AMC",
      heading: "AC AMC",

      desc: [
        "Provide annual maintenance contracts for regular AC servicing.",
        // "Include routine cleaning, filter replacement, and system checks.",
        // "Offer priority support for repairs and servicing during the contract period.",
        // "Ensure efficient performance and extend the lifespan of your AC unit.",
      ],
      desc1: [
        "Provide annual maintenance contracts for regular AC servicing.",
        "Include routine cleaning, filter replacement, and system checks.",
        "Offer priority support for repairs and servicing during the contract period.",
        "Ensure efficient performance and extend the lifespan of your AC unit.",
      ],
      detaildesc: [
        "The AC AMC Service ensures your air conditioner operates efficiently year-round by providing regular maintenance, timely servicing, and preventive care.",
      ],
      price: 1499,
      imp: true,
      plan: "1 Year",
      img: AMC, // Update the image path accordingly
      type1: [
        {
          id: 39,
          name: "Split AC AMC",
          desc: [
            "Includes two units: indoor and outdoor, designed for efficient and quiet cooling.Ideal for larger rooms and consistent performance with minimal noise.",
          ],
          price: 1499,
        },
      ],
      type2: [
        {
          id: 40,
          name: "Window AC AMC",
          desc: [
            "A compact, single-unit system that fits into a window or wall. Perfect for smaller spaces, offering cost-effective cooling.",
          ],
          price: 1499,
        },
      ],
      brands: [
        "Daikin",
        "Voltas ",
        "LG ",
        "Samsung ",
        "Hitachi ",
        "Carrier ",
        "Whirlpool",
        "Panasonic",
        "Haier",
      ],
      service_include: [
        "Routine maintenance to clean filters, coils, and other components.",
        "Performance checkups to ensure optimal cooling and energy efficiency.",
        "Gas level inspection and refilling if necessary.",
        "Preventive care to identify potential issues and address them before they escalate.",
        "Emergency breakdown support with priority repair service during the contract period.",
      ],
      service_not_include: [
        "Replacement of major parts like compressors or motors.",
        "Electrical or structural modifications to the setup or installation site.",

      ],

    },
  ],


};
console.log("services", services.acService2[0]?.acRepair[0]);
const AcDetails = ({ searchQuery, setSearchQuery, keywordMap }) => {

  // State for selected service
  const [selectedAntiService, setSelectedAntiService] = useState(services.antiRustDeepClean[0]);
  const [selectedServiceAcGasRefill, setSelectedServiceAcGasRefill] = useState(services.acGasrefill[0]);
  const [selectedServiceAcRepair, setSelectedServiceAcRepair] = useState(
    services.acService2[0]?.acRepair[0] // Set the first item as default selected
  );

  const [selectedServiceAcInstallationUninstallation, setSelectedServiceAcInstallationUninstallation] = useState(services.acInstallationUninstallation[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null); // To pass selected service to modal
  const [selectedButtonId, setSelectedButtonId] = useState(null); // Track selected button
  const [isAddingService, setIsAddingService] = useState(false);

  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [addedServices, setAddedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedService, setSelectedService] = useState(null);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    location: "",
    type: "",
    service: "",
    repairInspection: "",
    brand: "",
    time: "",
    date: "",
    desc: "",
    name: "",

  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showThankPage, setShowThankPage] = useState(false);
  const [activeServiceType1, setActiveServiceType1] = useState(null);
  const [activeServiceType2, setActiveServiceType2] = useState(null);  
  const [activeService, setActiveService] = useState(null);  
  const [customDate, setCustomDate] = useState(null); 


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showChangePopup, setShowChangePopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(""); 
  const [showLocationPopup, setShowLocationPopup] = useState(false); 
  const [locations, setLocations] = useState([
    { id: 1, city: "Mumbai", area: "Bandra" },
    { id: 2, city: "Mumbai", area: "Kandivali" },
    { id: 3, city: "Mumbai", area: "Thane" },]);
  const [showOrderSummary, setShowOrderSummary] = useState(false); 
  const [selectedOtherLocation, setSelectedOtherLocation] = useState(null); 

  const [customAddress, setCustomAddress] = useState(""); 

  const proceed = () => {
    setShowCustomerForm(true);
  };


  const handleAddService = (service) => {

    setShowAddServiceModal(true);
    setSelectedService(service);
  };



  // Function to handle the modal open
  const openModal = (service) => {
    setSelectedServiceForModal(service); // Set the selected service to display in modal
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Set the default selected button for each category when the component mounts
  useEffect(() => {
    setSelectedButtonId(selectedServiceAcInstallationUninstallation.id);  // Default service for AC Installation/Uninstallation
  }, [selectedServiceAcInstallationUninstallation]);

  useEffect(() => {
    setSelectedButtonId(selectedServiceAcGasRefill.id);  // Default service for AC Gas Refill
  }, [selectedServiceAcGasRefill]);

  useEffect(() => {
    setSelectedButtonId(selectedServiceAcRepair.id);  // Default service for AC Repair
  }, [selectedServiceAcRepair]);

  useEffect(() => {
    setSelectedButtonId(selectedAntiService.id);  // Default service for Anti Rust Deep Clean
  }, [selectedAntiService]);



  // Scroll logic
  const sectionRefs = [
    useRef(null), 
    useRef(null), 
    useRef(null), 
    useRef(null), 
    useRef(null), 
    useRef(null), 
    useRef(null), 
  ];
  const sectionCards = [
    useRef(null),
    useRef(null), 
  ];

  const handleScrollToService = (index) => {
    if (sectionRefs[index]?.current) {
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start",    // Align to the top of the viewport
      });
    }
  };
  const handleScrollToCardService = (index) => {
    if (sectionCards[index]?.current) {
      sectionCards[index].current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start",    // Align to the top of the viewport
      });
    }
  };

  const closeAddServiceModal = () => {
    setShowAddServiceModal(false);
    setSelectedService(null);
    setIsAddingService(false);
  };

  const handleAddServiceChange = (isIncrement, item, type) => {
    const itemId = item.id;

    // Update the active service for the correct type
    if (type === 'type1') {
      setActiveServiceType1(itemId); // Set active service for type1
    } else if (type === 'type2') {
      setActiveServiceType2(itemId); // Set active service for type2
    }

    // Ensure the quantity is a valid number and initialize if necessary
    const currentQuantity = item.quantity || 0;

    // Determine the new quantity based on increment or decrement
    const newQuantity = isIncrement ? currentQuantity + 1 : Math.max(0, currentQuantity - 1);

    // Calculate the price change
    const priceChange = (newQuantity - currentQuantity) * item.price;

    // Update the total price
    setTotalPrice((prevTotal) => prevTotal + priceChange);

    // Update the added services list
    setAddedServices((prevServices) => {
      const updatedServices = [...prevServices];
      const serviceIndex = updatedServices.findIndex(
        (service) => service.id === itemId && service.tagId === item.tagId
      );

      if (newQuantity === 0) {
        // Remove the item if its new quantity is 0
        if (serviceIndex !== -1) {
          updatedServices.splice(serviceIndex, 1);
        }
      } else {
        // Update or add the item with the new quantity
        if (serviceIndex !== -1) {
          updatedServices[serviceIndex] = { ...item, quantity: newQuantity };
        } else {
          updatedServices.push({ ...item, quantity: newQuantity });
        }
      }

      return updatedServices;
    });

    // Update the quantity in the original item object
    item.quantity = newQuantity;
  };


  const handleDeleteService = (serviceId) => {
    const updatedServices = addedServices.filter(
      (service) => service.id !== serviceId
    );
    setAddedServices(updatedServices);



    // Update the total price after removing the service
    const removedService = addedServices.find((service) => service.id === serviceId);
    if (removedService) {
      setTotalPrice((prevTotal) => prevTotal - removedService.price * removedService.quantity);
    }
  };



  const [isFixed, setIsFixed] = useState(false);
  const [showfinalSummary, setShowFinalSummary] = useState(false);



  useEffect(() => {
    const handleBodyOverflow = (shouldPreventScroll) => {
      document.body.style.overflow = shouldPreventScroll ? 'hidden' : 'auto';
    };

    const handlePopupOpen = (isOpen) => {
      handleBodyOverflow(isOpen);
    };

    // Example usage: handlePopupOpen(true) when popup opens, handlePopupOpen(false) when it closes

    return () => handleBodyOverflow(false); // Cleanup on component unmount
  }, []);





  useEffect(() => {
    if (searchQuery) {
      const matchedService = Object.keys(keywordMap).find((keyword) =>
        searchQuery.toLowerCase().includes(keyword)
      );

      if (matchedService) {
        const targetService = keywordMap[matchedService];
        const targetSection = sectionRefs.find(ref => ref.current && ref.current.id === targetService.replace(/\s+/g, "-").toLowerCase());
        if (targetSection) {
          targetSection.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [searchQuery, sectionRefs]);

  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneInputChange = (e) => {
    const { value } = e.target;

    // If phone number exceeds 10 digits, show an error message
    if (value.length > 10) {
      setError('Phone number must not exceed 10 digits');
      return;
    } else {
      setError(''); // Clear the error if the input is valid
    }

    // Update phone state if valid
    setPhone(value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !phone || !selectedDate || !selectedTime || !customAddress) {
      alert("Please fill out all required fields, including location.");
      return;
    }

    // set the phone number to be 10 not more than that
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }
    // Format selected date
    const formattedDate = customDate
      ? customDate.toLocaleDateString()
      : `Day ${selectedDate}`;

    // Collect form and item details
    const details = {
      name: name.trim(),
      phone: phone.trim(),
      selectedDate: formattedDate,
      selectedTime,
      location: customAddress.trim(), // Using customAddress here instead of selectedLocation
      services: addedServices,
    };

    // Reset form fields
    setName("");
    setPhone("");
    setSelectedDate(null);
    setSelectedTime("");
    setCustomDate(null);
    setCustomAddress("");  // Clear the location field
    setSelectedLocation(""); // Clear the location selection state

    // Update state with order details
    setOrderDetails(details);

    // Toggle visibility of forms and summary
    setShowCustomerForm(false); // Close the form
    setShowFinalSummary(true); // Show order summary

    // Output order details to the console
    // console.log("Order Details111:", details);
  };



  const handleViewOrderSummary = () => {
    setShowOrderSummary(true); // Hide order summary
    // setShowThankPage(true);
    // console.log("Added Services:", addedServices); // Log added services to console

  };

  const showThankYouPage = async () => {
    // Prepare the order summary data
    const orderSummary = {
      orderDetails: {
        name: orderDetails.name,
        phone: orderDetails.phone,
        date: orderDetails.selectedDate,
        time: orderDetails.selectedTime,
        location: orderDetails.location,
        // area: orderDetails.area || "N/A",
      },
      services: addedServices.map((service) => ({
        name: service.name,
        price: service.price,
        quantity: service.quantity,
        totalPrice: service.price * service.quantity,
      })),
    };

    // Log the order summary in JSON format
    console.log("Order Summary:", JSON.stringify(orderSummary, null, 2)); // Pretty-printing JSON

    try {
      // Make an API call to save the data
      const response = await fetch("http://localhost/json.php/ac_service.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderSummary), // Send the full details object
      });

      const result = await response.json();

      if (result.status === "success") {
        console.log("Data successfully saved:", result);
        // Proceed with the logic to show the Thank You page and hide the final summary
        setShowThankPage(true);
        setShowFinalSummary(false);
      } else {
        console.error("Error saving data:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    if (selectedLocation === "other") {
      setSelectedLocation("Andheri");
      setShowLocationPopup(true);
    } else if (selectedLocation === 'home') {
      setSelectedLocation("Andheri");
      setShowLocationPopup(false);
    }
  };
  useEffect(() => {
    if (isModalOpen || showAddServiceModal || showCustomerForm || showThankPage || showOrderSummary || showfinalSummary) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, showAddServiceModal, showCustomerForm, showThankPage, showOrderSummary, showfinalSummary]);



  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight to avoid time issues when comparing

  // const handleLocationClick = (location) => {
  //   setSelectedLocation(location); // Update the location
  // };

  // const [selectedLocation, setSelectedLocation] = useState('');

  //------------------ Edit summary-----------------
  const [editingIndex, setEditingIndex] = useState(null);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative or zero quantity
    const updatedServices = [...addedServices];
    updatedServices[index].quantity = newQuantity;
    setAddedServices(updatedServices);
  };

  const [isEditing, setIsEditing] = useState(false); // New state to track edit mode

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };



  // const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const addToSummary = () => {
    if (selectedServiceForModal) {
      setAddedServices((prev) => [...prev, selectedServiceForModal]);
      closeModal();
    }
  };

  return (
    <>

      <div className="md:flex md:justify-center md:items-end lg:items-center items-center justify-center md:h-[500px] md:mb-2 w-full font-serif">

        <div className='lg:w-3/12 md:w-3/12 w-full md:hidden block bg-gray-200  font-serif'>

          {/* <h2 id='header' className="location text-center text-lg leading-[4rem] md:mt-10 md:ml-[5rem] font-bold">
            Best AC Service  <span className="text- text-primary">{selectedLocation}</span> in Mumbai
          </h2> */}
          <Card handleScrollToCardService={handleScrollToCardService} />
        </div>
        <div className='xl:w-6/12 lg:w-7/12 md:w-9/12 overflow-y-auto p-2 md:bg-white bg-gray-300 font-serif'>

          <Ac_Service_emogi handleScrollToService={handleScrollToService} />
        </div>
        <div className='w-3/12 mr-3 md:block hidden'>
          <Card handleScrollToCardService={handleScrollToCardService} />
        </div>
      </div>
      <div className='justify-center md:flex xl:flex-wrap lg:flex-wrap md:flex-row md:mt-4 md:gap-5 bg-gray-300 w-full  text-20 font-serif'>
        <div className='flex flex-col justify-center md:w-7/12 lg:w-7/12 xl:w-8/12    w-full items-center md:ml md:mt-4 p-2' >



          {/* Anti Rust Deep Clean */}
          <div className="pt-2 mb-2 font-serif text-14 bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-1 rounded-xl" id='antirustdeepclean' ref={sectionRefs[0]}>
            <h1 className="md:text-14 lg:text-xl mt-2 py-2 font-bold text-center sm:text-left">Anti Rust Deep Clean</h1>
            <img
              src={zwash}
              alt="Anti Rust Deep Clean"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:block hidden"
            />
            <img
              src={zwash}
              alt="Anti Rust Deep Clean"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.antiRustDeepClean?.map((service) => (
                <div key={service.id} className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className='px-4'>
                        <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-14 lg:text-20 mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">
                        <span className="self-center mr-1 font-light text-12 opacity-60">
                          starts from <del>₹{service.originalPrice}</del>
                        </span>
                        <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                      </div>
                    </div>
                    <div className='relative'>
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                      />

                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                      />

                      <button
                        type="button"
                        className={`${addedServices.some(s => s.id === service.id) ? 'bg-green-500' : 'bg-blue-800'} text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block`}
                        onClick={() => handleAddService(service)}
                      >
                        {addedServices.some(s => s.id === service.id) ? 'ADDED' : 'ADD'}
                        {/* how to console.log here  */}
                        {console.log(addedServices.some(s => s.id === service.id))}
                      </button>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2">
                    <ul className="pl-4 list-disc opacity-80 text-14 md:text-20 mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div>
                      <button
                        type="button"
                        className={`${addedServices.some(s => s.id === service.id) ? 'bg-green-500' : 'bg-blue-800'} text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden`}
                        onClick={() => handleAddService(service)}
                      >
                        {addedServices.some(s => s.id === service.id) ? 'ADDED' : 'ADD'}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>

          {/* AC Gas Refill */}
          <div className=" pt-2 mb-2 font-serif bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-5 rounded-xl" id='acgasrefill' data-id="acgasrefill1" data-id1="acgasrefill2" ref={sectionRefs[1]}>
            <h1 className="text-2xl mt-2 py-2 font-bold text-center sm:text-left">AC Gas Refill</h1>
            <img
              src={GLR}
              alt="AC Gas Refill"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:block hidden"
            />
            <img
              src={GLR}
              alt="AC Gas Refill"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.acGasrefill?.map((service) => (
                <div key={service.id} id='' className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className='px-4'>
                        <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-14 mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">
                        <span className="self-center mr-1 font-light text-12 opacity-100">
                          starts from <del>₹{service.originalPrice}</del>
                        </span>
                        <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                      />

                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                      />

                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2">
                    <ul className="pl-4 list-disc opacity-80 text-14 md:text-sm mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div>
                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>



          {/* AC Repair service */}
          <div className=" pt-2 mb-2 font-serif bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-5 rounded-xl" id='acrepair' ref={sectionRefs[2]}>
            <h1 className="text-2xl mt-2 py-2 font-bold text-center sm:text-left">AC Repair Service</h1>
            <img
              src={selectedServiceAcRepair.img}
              alt={selectedServiceAcRepair.heading}
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:block hidden"
            />
            <img
              src={selectedServiceAcRepair.img}
              alt={selectedServiceAcRepair.heading}
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.acService2?.map((serviceGroup, index) => (
                serviceGroup.acRepair.map((service) => (
                  <div key={service.id} className="mt-4">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                        <div className="px-4">
                          <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-20 mt-2 md:hidden block">
                            {service.desc.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center mt-2 px-2">
                          <span className="self-center mr-1 font-light text-12 opacity-60">
                            starts from <del>₹{service.originalPrice}</del>
                          </span>
                          <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={service.img}
                          alt={service.heading}
                          className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                        />

                        <img
                          src={service.img}
                          alt={service.heading}
                          className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                        />

                        <button
                          type="button"
                          className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                          onClick={() => handleAddService(service)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>

                    <div className="md:flex md:justify-between mt-2 px-2">
                      <ul className="pl-4 list-disc opacity-80 text-14 md:text-20 mt-2 md:block hidden">
                        {service.desc1.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <div>
                        <button
                          type="button"
                          className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                          onClick={() => handleAddService(service)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start mt-4">
                      <button
                        type="button"
                        className="text-primary px-2 rounded-xl mt-1"
                        onClick={() => openModal(service)}
                      >
                        Read More
                      </button>
                    </div>
                    <hr className="mt-4" />
                  </div>
                ))
              ))}
            </div>
          </div>





          {/* AC Installation/Uninstallation */}
          <div className="md:p-4 pt-2 mb-2 font-serif bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-5 rounded-xl" id='acinstallation' data-id="acuninstallation" ref={sectionRefs[3]}>
            <h1 className="text-2xl mt-2 py-2 font-bold text-center sm:text-left">AC Installation / Uninstallation</h1>
            <img
              src={AI}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:block hidden"
            />
            <img
              src={AI}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.acInstallationUninstallation?.map((service) => (
                <div key={service.id} className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className="px-4">
                        <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-20 mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">
                        <span className="self-center mr-1 font-light text-12 opacity-60">
                          starts from <del>₹ {service.originalPrice}</del>
                        </span>
                        <span className="font-bold text-16 whitespace-nowrap">₹ {service.price}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                      />
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                      />

                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2">
                    <ul className="pl-4 list-disc opacity-80 text-14 md:text-20 mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div>
                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Ac Rent */}
          <div className="md:p-4 pt-2 mb-2 font-serif bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-5 rounded-xl" id='acrent' ref={sectionCards[0]}>
            <h1 className="text-2xl mt-2 py-2 font-bold text-center sm:text-left">AC Rent</h1>
            <img
              src={ACRent}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[200px] md:block hidden"
            />
            <img
              src={ACRent}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4 font-serif">
              {services.AC_Rent?.map((service) => (
                <div key={service.id} className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className="px-4">
                        <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-20 mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">

                        <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                      />
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                      />

                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2">
                    <ul className="pl-4 list-disc opacity-80 text-14 md:text-20 mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div>
                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className=" font-serif flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>


          {/* AC AMC */}
          <div className="md:p-4 pt-2 mb-2 font-serif bg-white pb-4.2 shadow-lg w-full max-w-[800px] mt-5 rounded-xl" id='acamc' ref={sectionCards[1]}>
            <h1 className="font-serif text-2xl mt-2 py-2 font-bold text-center sm:text-left">AC AMC</h1>
            <img
              src={AMC}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
            />
            <img
              src={AMC}
              alt="AC Uninstallation"
              className="object-cover w-full rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block pl-2"
            />

            <hr className="mt-2" />

            <div className="flex flex-col gap-y-4">
              {services.AC_AMC?.map((service) => (
                <div key={service.id} className="mt-4">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="md:text-2xl text-xl px-2 font-bold">{service.heading}</h1>
                      <div className="px-4">
                        <ul className="pl-4 px-5 list-disc opacity-80 text-14 md:text-20 mt-2 md:hidden block">
                          {service.desc.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center mt-2 px-2">
                        <span className="self-center mr-1 font-light text-12 opacity-60">
                          {service.plan} -
                        </span>
                        <span className="font-bold text-16 whitespace-nowrap">₹{service.price}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[200px] rounded-tl-lg rounded-bl-lg h-[100px] md:hidden block"
                      />
                      <img
                        src={service.img}
                        alt={service.heading}
                        className="object-cover w-[500px] rounded-tl-lg rounded-bl-lg h-[150px] md:block hidden"
                      />

                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 absolute top-[3.8rem] left-8 md:hidden block"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="md:flex md:justify-between mt-2 px-2">
                    <ul className="pl-4 list-disc opacity-80 text-14 md:text-20 mt-2 md:block hidden">
                      {service.desc1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div>
                      <button
                        type="button"
                        className="bg-blue-800 text-white hover:bg-blue-900 px-3 py-1 rounded-xl mt-4 md:block hidden"
                        onClick={() => handleAddService(service)}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start mt-4">
                    <button
                      type="button"
                      className="text-primary px-2 rounded-xl mt-1"
                      onClick={() => openModal(service)}
                    >
                      Read More
                    </button>
                  </div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          </div>


        </div>

        <div
          className={`lg:w-[35%] xl:w-3/12 p-4 right-[6cm] left-[65rem] ${addedServices.length === 0 ? "hidden" : "block"} ${isFixed ? "fixed top-4 p-2" : "sticky top-4 self-start"} lg:sticky lg:top-4 lg:self-start`}

        >
          <OrderSummary
            addedServices={addedServices}
            totalPrice={totalPrice}
            handleDeleteService={handleDeleteService}
            setShowCustomerForm={setShowCustomerForm}
          />
        </div>

      </div>


      {/* Read More Modal */}
      {isModalOpen && selectedServiceForModal && (
        <div className="font-serif fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div
            className={`bg-white mt-16 p-6 rounded-xl w-[90%] h-[90%] md:w-[50%] max-h-[85vh] overflow-y-auto ${isModalOpen ? "animate-SlideDown" : "animate-SlideUp"
              }`}

          >

            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="md:text-2xl text-md absolute top-24 right-8 bg-white border-2 hover:border-black rounded-full p-2 hover:bg-red-500 hover:text-white transition-all py-0"
              >
                &times;
              </button>
            </div>
            {/* AC Rent Heading */}
            {/* <div className="font-bold text-2xl text-center mb-4">{}</div> */}

            {/* Selected Service Heading */}
            <div className="font-bold text-md text-center mb-4">{selectedServiceForModal.heading}</div>
            <div className="mt-4">
              {/* Service Image */}
              <img
                src={selectedServiceForModal.img}
                alt={selectedServiceForModal.heading}
                className="w-full rounded-xl mb-4 h-[200px]"
              />

              {/* Service Details */}
              <ul className="pl-4 list-none opacity-80 text-xs sm:text-sm md:text-base mb-4 gap-y-3 mt-2">
                {selectedServiceForModal.detaildesc.map((item, index) => (
                  <h1 key={index} className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {item}
                  </h1>
                ))}
              </ul>

              {/* Type 1 Details */}
              {selectedServiceForModal.type1 && (
                <div className="mt-4">
                  <div className="font-bold text-lg md:text-[1.3rem] lg:text-2xl mb-2">
                    {selectedServiceForModal.heading}
                  </div>
                  <ul className="pl-4 list-disc opacity-80 text-sm md:text-base lg:text-lg gap-y-2">
                    {selectedServiceForModal.type1.map((type, index) => (
                      <li key={index}>
                        <span className="font-semibold">{type.name}: </span>
                        {type.desc}
                        <br />
                        <del>{selectedServiceForModal.price2}</del>
                        <span className="font-bold"> ₹{type.price}</span>
                      </li>
                    ))}
                  </ul>

                  {/* duration */}
                  
                </div>
              )}

              {/* Type 2 Details */}
              {selectedServiceForModal.type2 && (
                <div className="mt-4">
                  <ul className="pl-4 list-disc opacity-80 text-sm md:text-base lg:text-lg gap-y-2">
                    {selectedServiceForModal.type2.map((type) => (
                      <li key={type.id}>
                        <span className="font-semibold">{type.name}: </span>
                        {type.desc}
                        <br />
                        {/* <del>{selectedServiceForModal.originalPrice}</del> */}
                        <span className="font-bold"> ₹{type.price}</span>
                      </li>
                    ))}
                  </ul>

                  <h1 className="font-bold mt-3">Duration:</h1>
                  {selectedServiceForModal.heading === "AC Rent" && (
                    <ul className="pl-4 list-disc opacity-80 text-sm md:text-base lg:text-lg gap-y-2">
                      {selectedServiceForModal.plans.map((plan, index) => (
                        <li key={index}>
                          <span className="font-semibold">{plan.duration} - </span>
                          <span> ₹{plan.price}</span>
                        </li>
                      ))}
                    </ul>
                  )}


                  {/* Brands Details */}
                    <h1 className="font-bold mt-3">Available Brands:</h1>
                  <ul className="pl-4 list-disc opacity-80 text-base md:text-lg lg:text-xl mb-4 gap-y-3 mt-3 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3">
                    {selectedServiceForModal.brands.map((item, index) => (
                      <li className="text-sm md:text-base mt-1" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>


                  {/* Services Included Details */}
                  <ul className="pl-4 list-disc opacity-80 text-base md:text-lg lg:text-xl mb-4 gap-y-3 mt-3">
                    <h1 className="font-bold">Services Included</h1>
                    {selectedServiceForModal.service_include.map((item, index) => (
                      <li className="text-sm md:text-base mt-1" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Services Not Included Details */}
                  <ul className="pl-4 list-disc opacity-80 text-base md:text-lg lg:text-xl mb-4 gap-y-3 mt-3">
                    <h1 className="font-bold">Services Not Included</h1>
                    {selectedServiceForModal.service_not_include.map((item, index) => (
                      <li className="text-sm md:text-base mt-1" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* AC Condition Details */}
                  {selectedServiceForModal.tagId === "AC_Rent" && (
                    <ul className="pl-4 list-disc opacity-80 text-base md:text-lg lg:text-xl mb-4 gap-y-3 mt-3">
                      <h1 className="font-bold">AC Condition</h1>
                      {selectedServiceForModal.ac_condition.map((item, index) => (
                        <li className="text-sm md:text-base mt-1" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Render Additional Component */}
                  <Ac_Service_home_drop />
                </div>
              )}
              {/* Service Price */}
              {/* <div className="mt-4 font-bold text-xl">Price: ₹{selectedServiceForModal.price}</div> */}
            </div>

          </div>
        </div>
      )}

      {showAddServiceModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white rounded-lg p-3 md:max-w-[500px] max-w-[350px] w-full max-h-[700px] h-auto border-2 border-[#0a2c5a] 
        transform transition-all duration-500 ease-out 
        ${showAddServiceModal ? "animate-SlideRight md:animate-SlideDown" : "animate-SlideLeft md:animate-SlideUp"}`}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4 relative">
              <button
                onClick={closeAddServiceModal}
                className="md:text-2xl py-0 text-md absolute top-0 right-3 bg-white border-2 hover:border-black rounded-full p-2 hover:bg-red-500 hover:text-white transition-all"
              >
                <p className="p-2 hover:font-bold">X</p>
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content overflow-y-auto md:max-h-[75vh] max-h-[75vh] mt-1 pb-24">
              {/* Header Section */}
              <h3 className="text-xl font-semibold mb-4">{selectedService.heading}</h3>

              {/* Service List */}
              {['type1', 'type2'].map((serviceType) => (
                <div
                  key={serviceType}
                  className="border rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out mb-4 md:w-[400px] w-[300px] md:ml-5"
                >
                  {selectedService[serviceType].map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                      {/* Service Details */}
                      <div>
                        <h3 className="md:text-lg text-md font-semibold text-[#0a2c5a]">{item.name}</h3>
                        <p className="mt-2 font-semibold md:text-lg text-md">Price: ₹{item.price}</p>
                      </div>

                      {/* Add/Modify Quantity */}
                      <div className='mt-3'>
                        {item.quantity > 0 ? (
                          <div className="flex items-center gap-2 mt-3">
                            <i
                              className="fa-solid fa-minus cursor-pointer rounded-full md:px-4 md:py-2 px-2 py-1 text-xl md:text-2xl"
                              onClick={() => handleAddServiceChange(false, item, serviceType)}
                            ></i>
                            <p className="p-2 md:text-3xl text-xl">{item.quantity}</p>
                            <i
                              className="fa-solid fa-plus cursor-pointer rounded-full md:px-4 md:py-2 px-2 py-1 text-xl md:text-2xl"
                              onClick={() => handleAddServiceChange(true, item, serviceType)}
                            ></i>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddServiceChange(true, item, serviceType)}
                            className="text-white md:text-xl font-semibold bg-[#0a2c5a] md:px-8 md:py-3 px-4 py-1 rounded-lg hover:bg-blue-800 transition-all mt-3"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Fixed Bottom Box for Selected Items & Price */}
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-between items-center border-t">
              <div>
                <p className="font-semibold text-lg">
                  ₹ {totalPrice}
                </p>
                <p className="text-sm text-gray-500">{addedServices.length} service included</p>
              </div>
              <button
                onClick={() => setShowAddServiceModal(false)}
                className="bg-green-500 text-white md:px-10 md:py-2 px-4 py-1 rounded-full hover:bg-green-700 transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {showCustomerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className={`w-full max-w-full sm:max-w-[90%] md:max-w-[700px] lg:max-w-[800px] bg-white rounded-lg shadow-2xl border-2 border-[#0a2c5a] relative max-h-[90vh] overflow-y-auto ${showCustomerForm ? "animate-SlideDown" : "animate-SlideUp"}`}>
            {/* Close button */}
            <div className="flex justify-end p-2">
              <button
                onClick={() => setShowCustomerForm(false)}
                className="text-2xl text-[#0a2c5a] hover:text-red-500"
              >
                &times;
              </button>
            </div>

            <div className="modal-content">
              <div className="flex items-center gap-x-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2c5a] px-2">
                  Fill out the Details
                </h3>
              </div>
              <form className="space-y-3 md:p-4">

                {/* Name and Number */}
                <div className="p-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        className="w-full p-2 sm:p-3 border rounded-lg"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="w-full p-2 sm:p-3 border rounded-lg"
                        placeholder="Phone Number"
                        value={phone}
                        maxLength={10}
                        onChange={handlePhoneInputChange}
                      />
                      {error && <p className="text-red-500 text-sm">{error}</p>}

                    </div>
                  </div>
                </div>

                {/* Date Picker */}
                <div className="p-2">
                  <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-1">
                    Select the Date
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-3 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center"
                      onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar visibility
                    >
                      <FaCalendarAlt className="text-lg text-gray-600" />
                      <span className="ml-2 text-sm sm:text-md">
                        {customDate ? "Change Date" : "Pick Date"} {/* Change button text after date is selected */}
                      </span>
                    </button>
                    {showCalendar && (
                      <div className="absolute z-50 bg-white p-2 rounded-lg shadow-lg">
                        <Calendar
                          onChange={(date) => {
                            setCustomDate(date);
                            setSelectedDate(date.getDate());
                            setShowCalendar(false); // Close the calendar after selecting a date
                          }}
                          value={customDate || new Date()}
                          minDate={today} // Disable past dates
                        />
                      </div>
                    )}
                  </div>

                  {/* Display selected date */}
                  {customDate && (
                    <div className="mt-2 text-gray-600 text-sm">
                      Selected Date: <span className="font-semibold">{customDate.toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {/* Time Picker */}
                <div className="p-2">
                  <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-1">
                    Select the Time
                  </label>
                  <div>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-2 sm:p-3 border rounded-lg bg-gray-100"
                    >
                      <option value="">Select Time</option>
                      {[
                        "9:00 AM - 10:00 AM",
                        "10:00 AM - 11:00 AM",
                        "11:00 AM - 12:00 PM",
                        "12:00 PM - 1:00 PM",
                        "1:00 PM - 2:00 PM",
                        "2:00 PM - 3:00 PM",
                      ].map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Location */}
                <div className="p-2">
                  <label className="block text-sm sm:text-lg font-medium text-gray-700 mb-1">
                    Service Location
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full p-2 sm:p-3 border rounded-lg"
                        placeholder="Enter location"
                        value={customAddress}
                        onChange={(e) => setCustomAddress(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="ml-2 text-[#0a2c5a] font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
                      onClick={() => setCustomAddress("")}  // Clear the location field when clicked
                    >
                      Edit
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full mt-4">
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0a2c5a] to-[#1f6eb8] text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
      {/* Change Location Popup */}




      {/* Change Location Popup */}
      {showChangePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end md:items-center z-50">
          <div className="bg-white rounded-t-lg w-full max-w-[400px] p-4 shadow-xl md:relative md:bottom-auto bottom-0">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Select Location</h4>
              <button
                onClick={() => setShowChangePopup(false)}
                className="text-gray-600"
              >
                X
              </button>
            </div>
            <div className="space-y-4">
              {/* Home Location */}
              <div>
                <button
                  onClick={() => {
                    setSelectedLocation("home");
                    setCustomAddress(""); // Clear custom address when selecting home
                    setShowChangePopup(false); // Close popup
                  }}
                  className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left"
                >
                  Home
                  <p className="text-sm text-gray-600">Service at Home</p>
                </button>
              </div>

              {/* Other Location */}
              <div>
                <button
                  onClick={() => setSelectedLocation("other")}
                  className={`w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left ${selectedLocation === "other" ? "bg-gray-200" : ""
                    }`}
                >
                  Other
                  <p className="text-sm text-gray-600">Select or enter an address</p>
                </button>

                {selectedLocation === "other" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={customAddress}
                      onChange={(e) => setCustomAddress(e.target.value)}
                      className="w-full p-3 border rounded-lg bg-gray-100 hover:bg-gray-200 mt-2"
                      placeholder="Enter your address"
                    />
                    <button
                      onClick={() => {
                        setShowChangePopup(false); // Close popup
                      }}
                      className="w-full p-3 mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                      Submit Address
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}






      {showThankPage && (
        <ThankYouPage onClose={() => setShowThankPage(false)} orderDetails={orderDetails} />
      )}

      <div>
        {/* Order Summary Button */}
        {addedServices.length > 0 && (
          <div className={`fixed bottom-0 bg-white h-[100px] w-full shadow-lg md:hidden rounded-t-xl flex items-center justify-center`}>
            <div className='flex justify-between items-center w-full p-2'>
              <div>
                <p className='font-bold'>
                  ₹ {addedServices.reduce((total, service) => total + service.price * service.quantity, 0)}
                </p>
                <p>{addedServices.length} services is selected</p>
              </div>
              <div className='flex gap-x-5'>
                {/* Proceed Button */}
                <button
                  onClick={() => setShowCustomerForm(true)} // Step 2: Update state on click
                  className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-left"
                >
                  Proceed
                </button>
                <button
                  onClick={handleViewOrderSummary} // Log and show order summary
                  className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-left"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Summary Popup */}
        {showOrderSummary && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-full max-w-[350px] p-4 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Order Summary</h4>
                <button
                  onClick={() => setShowOrderSummary(false)} // Close the popup
                  className="text-gray-600"
                >
                  X
                </button>
              </div>
              <div className="space-y-4">
                {addedServices.map((service, idx) => (
                  <div key={idx} className="flex justify-between">
                    <div>
                      <p className="font-semibold">
                        {service.name} (x{service.quantity})
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">₹ {service.price * service.quantity}</p>
                    </div>
                    {/* <div className=" mb-2">
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="text-white font-semibold bg-red-500 px-2 py-1 rounded-full hover:bg-red-600 transition-all"
                      >
                        delete
                      </button>
                    </div> */}

                  </div>
                ))}
              </div>
              <div className="mt-4">
                {/* Optionally, add any additional content for the Order Summary here */}
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Order details popups*/}
      {showfinalSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-full max-w-[90%] md:max-w-[700px] bg-white rounded-lg shadow-2xl border-2 border-[#0a2c5a] p-4 md:p-6 relative">
            <div className="flex items-center mb-4 absolute right-2 top-2">
              <button
                onClick={() => setShowFinalSummary(false)}
                className="text-2xl md:text-3xl text-[#0a2c5a] hover:text-red-500 p-1 md:p-2"
              >
                &times;
              </button>
            </div>
            <div className="">
              <div className="flex items-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#0a2c5a]">
                  Order Summary
                </h2>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className="text-sm md:text-base">
                <strong>Name:</strong> {orderDetails.name}
              </p>
              <p className="text-sm md:text-base">
                <strong>Phone:</strong> {orderDetails.phone}
              </p>
              <p className="text-sm md:text-base">
                <strong>Date:</strong> {orderDetails.selectedDate}
              </p>
              <p className="text-sm md:text-base">
                <strong>Time:</strong> {orderDetails.selectedTime}
              </p>
              <p className="text-sm md:text-base">
                <strong>Location:</strong> {orderDetails.location}
              </p>
              {orderDetails.area && (
                <p className="text-sm md:text-base">
                  <strong>Area:</strong> {orderDetails.area}
                </p>
              )}
            </div>

            {/* Scrollable Services Table */}
            <div className="mt-4 max-h-40 md:max-h-60 overflow-y-auto">
              <h3 className="text-md md:text-lg font-semibold text-[#0a2c5a] mb-2">
                Selected Services
              </h3>
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-sm md:text-base">
                <thead className="bg-[#0a2c5a] text-white">
                  <tr>
                    <th className="text-left font-semibold px-2 py-1 md:px-4 md:py-2">
                      Service
                    </th>
                    <th className="text-right font-semibold px-2 py-1 md:px-4 md:py-2">
                      Price(₹)
                    </th>
                    <th className="text-center font-semibold px-2 py-1 md:px-4 md:py-2">
                      Quantity
                    </th>
                    <th className="text-center font-semibold px-2 py-1 md:px-4 md:py-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addedServices.map((service, idx) => (
                    <tr
                      key={idx}
                      className={`border-b last:border-b-0 ${idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                        } hover:bg-gray-200`}
                    >
                      <td className="text-left px-2 py-1 md:px-4 md:py-2 text-gray-700">
                        {service.name}
                      </td>
                      <td className="text-right px-2 py-1 md:px-4 md:py-2 text-gray-700">
                        {service.price * service.quantity}
                      </td>
                      <td className="text-center px-2 py-1 md:px-4 md:py-2 text-gray-700">
                        {editingIndex === idx ? (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(idx, service.quantity - 1)}
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            >
                              -
                            </button>
                            <span>{service.quantity}</span>
                            <button
                              onClick={() => updateQuantity(idx, service.quantity + 1)}
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          service.quantity
                        )}
                      </td>
                      <td className="text-center px-2 py-1 md:px-4 md:py-2 text-gray-700">
                        {editingIndex === idx ? (
                          <button
                            onClick={() => setEditingIndex(null)}
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                          >
                            Done
                          </button>
                        ) : (
                          <button
                            onClick={() => setEditingIndex(idx)}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-around space-y-2 md:space-y-0">
              <button
                onClick={showThankYouPage}
                className="w-full md:w-auto bg-gradient-to-r from-[#0a2c5a] to-[#1f6eb8] text-white font-bold py-2 px-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Submit
              </button>
              <button
                onClick={() => setShowFinalSummary(false)}
                className="w-full md:w-auto bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden block">

        {/* <Location onLocationClick={handleLocationClick} /> */}
      </div>


    </>
  );
};

export default AcDetails;
