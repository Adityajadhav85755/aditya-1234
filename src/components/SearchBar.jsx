import { useEffect, useState } from "react";
// import AcService from "../AcService";
// import AcDetails from "./AcDetails";

const SearchBar = () => {
  const services = [
    "Household shifting",
    "Office shifting",
    "Vehicle shifting",
    "More services",
  ];
  const keywordMap = {
    acMaintenance: "acmaintenance",
    acRepair: "acrepair",
    antiRustDeepClean: "antirustdeepclean",
    acGasRefill: "acgasrefill",
    acGasRefill2: "acgasrefill2",
    acGasRefill1: "acgasrefill1",
    acinstallation: "acinstallation",
    acuninstallation: "acuninstallation",
    acrent: "acrent",
    acamc: "acamc",
    normalService: "normalservice",
    repairInspection: "repairinspection",
    amc: "amcservice",
  };

  const [clean, setClean] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false); // Track if scroll has occurred

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout;
    let switchTimeout;

    const typeText = () => {
      const currentService = services[currentServiceIndex];
      if (charIndex < currentService.length) {
        setCurrentPlaceholder(currentService.slice(0, charIndex + 1));
        charIndex++;
        typingTimeout = setTimeout(typeText, 100);
      } else {
        switchTimeout = setTimeout(() => {
          charIndex = 0;
          setCurrentPlaceholder("");
          setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 2000);
      }
    };

    typeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(switchTimeout);
    };
  }, [currentServiceIndex]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  
    // Normalize the user's search query
    const normalizedQuery = searchQuery.trim().toLowerCase().replace(/\s+/g, "");
  
    // Find a match in the keywordMap
    const matchedService = Object.keys(keywordMap).find((keyword) => {
      const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "");
      return normalizedQuery.includes(normalizedKeyword);
    });
  
    if (matchedService) {
      const targetService = keywordMap[matchedService];
      setMessage(""); // Clear any previous messages
  
      // Scroll to the top of the page (smooth scroll)
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Use setTimeout to delay the scroll action to the target service
      setTimeout(() => {
        const targetElement = document.getElementById(targetService.toLowerCase());
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback scroll to the body if the target element doesn't exist
          document.body.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // 300ms delay to ensure smooth scrolling happens after render
  
      setHasScrolled(false); // Reset hasScrolled to allow future scrolls
      setClean(true); // Trigger clean state if needed
    } else {
      setMessage("No matching service found!"); // Update the message if no match is found
    }
  };

  const [message, setMessage] = useState("");

  return (
    <>
      <form className="flex items-center md:max-w-[80%] mx-auto" onSubmit={handleSearchSubmit}>
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`Search For ${currentPlaceholder}`}
            required
            style={{
              fontSize: "1rem",
            }}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      {/* <AcDetails searchQuery={searchQuery} keywordMap={keywordMap} /> */}
    </>
  );
};

export default SearchBar;


// import { useEffect, useState } from "react";
// import AcService from "../AcService";
// import AcDetails from "./AcDetails";

// const SearchBar = () => {
//   const services = [
//     "Household shifting",
//     "Office shifting",
//     "Vehicle shifting",
//     "More services",
//   ];
//   const keywordMap = {
//     acMaintenance: "acmaintenance",
//     acRepair: "acrepair",
//     antiRustDeepClean: "antirustdeepclean",
//     acGasRefill: "acgasrefill",
//     acGasRefill2: "acgasrefill2",
//     acGasRefill1: "acgasrefill1",
//     acinstallation: "acinstallation",
//     acuninstallation: "acuninstallation",
    
//     normalService: "normalservice",
//     repairInspection: "repairinspection",
//     amc: "amcservice",
//   };

//   const [clean, setClean] = useState(false);
//   const [currentPlaceholder, setCurrentPlaceholder] = useState("");
//   const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hasScrolled, setHasScrolled] = useState(false); // Track if scroll has occurred
//   const [message, setMessage] = useState(""); // Track any messages to display

//   useEffect(() => {
//     let charIndex = 0;
//     let typingTimeout;
//     let switchTimeout;

//     const typeText = () => {
//       const currentService = services[currentServiceIndex];
//       if (charIndex < currentService.length) {
//         setCurrentPlaceholder(currentService.slice(0, charIndex + 1));
//         charIndex++;
//         typingTimeout = setTimeout(typeText, 100);
//       } else {
//         switchTimeout = setTimeout(() => {
//           charIndex = 0;
//           setCurrentPlaceholder("");
//           setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
//         }, 2000);
//       }
//     };

//     typeText();

//     return () => {
//       clearTimeout(typingTimeout);
//       clearTimeout(switchTimeout);
//     };
//   }, [currentServiceIndex]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
  
//     // Normalize the user's search query
//     const normalizedQuery = searchQuery.trim().toLowerCase().replace(/\s+/g, "");
  
//     // Find a match in the keywordMap
//     const matchedService = Object.keys(keywordMap).find((keyword) => {
//       const normalizedKeyword = keyword.toLowerCase().replace(/\s+/g, "");
//       return normalizedQuery.includes(normalizedKeyword);
//     });
  
//     if (matchedService) {
//       const targetService = keywordMap[matchedService];
//       setMessage(""); // Clear any previous messages
  
//       // Scroll to the top of the page (smooth scroll)
//       window.scrollTo({ top: 0, behavior: "smooth" });

//       // Use setTimeout to delay the scroll action to the target service
//       setTimeout(() => {
//         const targetElement = document.getElementById(targetService.toLowerCase());
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         } else {
//           // Fallback scroll to the body if the target element doesn't exist
//           document.body.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 300); // 300ms delay to ensure smooth scrolling happens after render
  
//       setHasScrolled(false); // Reset hasScrolled to allow future scrolls
//       setClean(true); // Trigger clean state if needed
//     } else {
//       setMessage("No matching service found!"); // Update the message if no match is found
//     }
//   };

//   return (
//     <>
//       <form className="flex flex-col sm:flex-row items-center sm:max-w-[80%] mx-auto" onSubmit={handleSearchSubmit}>
//         <label htmlFor="voice-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative w-full">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             id="voice-search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[300px] md:w-[400px] lg:w-[500px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder={`Search For ${currentPlaceholder}`}
//             required
//             style={{
//               fontSize: "1rem",
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           className="inline-flex items-center py-2.5 px-3 ms-2 mt-2 sm:mt-0 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </form>
//       {message && <p className="text-center text-red-500 mt-4">{message}</p>}
//       <AcDetails searchQuery={searchQuery} keywordMap={keywordMap} />
//     </>
//   );
// };

// export default SearchBar;
