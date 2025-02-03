import './App.css';
import Navbar from './components/Navbar';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Gallery from './components/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import QuickContact from './components/QuickContact';
import Footer from './components/Footer';
import Login from './components/Login';
import PopUpPlan from './components/PopUpPlan';
import Register from './components/Register';
import Service from './components/Service';
import AboutContent from './components/AboutContent';
import Client1 from "../src/assets/images/Client/Client-1.png"
import { LoginStatusContext } from './index';
import Sidebar from './components/Sidebar';
import Location from './components/Location';
import offer from './assets/images/offer.jpg'
import WhatOffer from './components/WhatOffer';
import WareHouse from './components/WareHouse';
import OtherServices from './components/OtherServices';
import AcSummerNeeds from './components/AcsummaryNeed';
import Steps from './components/Steps';
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceScroll from './components/servicescroll';
import { Link } from 'react-router-dom';
import ComparisonTable from './components/ComparisionTable';
import FAQSection from './components/FAQ';
import { useNavigate } from 'react-router-dom';


// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Pagination module import
import Keywords from './components/keywords';
import DiscountScroller from './components/Discountcoupon';
// import Contact from "./components/Contact";

let LoginContext = React.createContext();
let FormContext = React.createContext();

// let LoginStatusContext = React.createContext();
const App = () => {
  // State for the selected location
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");

  // Combined handleLocationClick function
  const handleLocationClick = (locationOrAriaLabel) => {
    let updatedLocation = locationOrAriaLabel;

    // If the input is an ariaLabel, we format it accordingly
    if (locationOrAriaLabel.includes('-')) {
      updatedLocation = locationOrAriaLabel
        .replace(/-/g, ' ') // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
    }

    setSelectedLocation(updatedLocation); // Update the location
  };

  // comparisonData.js
  const comparisonPoints = [
    { service: "Cost", localCompany: "High", sky: "Affordable" },
    { service: "Service Speed", localCompany: "Slow", sky: "Fast" },
    { service: "Customer Support", localCompany: "Average", sky: "24/7 Support" },
    { service: "Reliability", localCompany: "Inconsistent", sky: "Highly Reliable" },
    { service: "Warranty", localCompany: "6 months", sky: "1 year" },
    { service: "Technology Used", localCompany: "Outdated", sky: "Latest Tech" },
    { service: "Transparency", localCompany: "Low", sky: "High" },
    { service: "Coverage", localCompany: "Limited", sky: "Wide Coverage" },
    { service: "Expertise", localCompany: "Moderate", sky: "Highly Skilled" },
    { service: "Value for Money", localCompany: "Average", sky: "Excellent" },
  ];

  let [loginStatus, setLoginStatus, showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm, userData, setUserData] = useContext(LoginStatusContext)
  // console.log(loginStatus)
  let [change, setChange] = useState(false)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  let [form, setForm] = useState({ location: "", phone: "", type: "", serviceType: "", detail: "" })
  // let [showLoginForm, setShowLoginForm] = useState(false)
  // let [showRegisterForm, setShowRegisterForm] = useState(false)
  let [showPlan, setShowPlan] = useState(false)
  function handleFormInput(e) {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  let storeData = (e) => {
    e.preventDefault();
    console.log(form)
  }

  let corousel = useRef(null)
  // let [withinForm, setWithingForm] = useState({ city: "", sourceLocality: "", destinationLocality: "", choice: "movers", date: "",service:"" })
  let [withinForm, setWithingForm] = useState({ sourceLocality: "", destinationLocality: "", date: "", service: "", plan: "", time: "" })
  let [betweenForm, setBetweenForm] = useState({ city: "", destinationCity: "", date: "" })
  // let [ctaForm, setCtaForm] = useState({ name: "", email: "", phone: "", moveFrom: "", moveTo: "" })

  let withinButton = useRef(null)
  let formForWithin = useRef(null)
  let betweenButton = useRef(null)
  let formForBetween = useRef(null)
  function handleInput(e) {
    let { name, value } = e.target;
    setWithingForm({ ...withinForm, [name]: value })
  }




  function handleBetweenFormInput(e) {
    let { name, value } = e.target;
    setBetweenForm({ ...betweenForm, [name]: value })

  }
  function handleWithinForm(e) {
    e.preventDefault();
    console.log(withinForm)
  }

  function handleBetweenForm(e) {
    e.preventDefault();
    console.log(withinForm)
  }

  function displayPlan() {
    console.log("clicked")
    setShowPlan(true)

  }

  function showBetweenForm() {
    formForWithin.current.style.display = "none";
    formForBetween.current.style.display = "flex";
    betweenButton.current.classList.remove("unActiveForm")
    betweenButton.current.classList.add("activeForm")
    withinButton.current.classList.add("unActiveForm")

  }
  function showWithinForm() {
    formForWithin.current.style.display = "flex";
    formForBetween.current.style.display = "none";
    withinButton.current.classList.remove("unActiveForm")
    withinButton.current.classList.add("activeForm")
    betweenButton.current.classList.add("unActiveForm")
  }
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e, formType) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Determine which form data to use based on formType
    let formData = {};
    if (formType === "within") {
      formData = withinForm;
    } else if (formType === "between") {
      formData = betweenForm; // Assuming betweenForm is defined elsewhere
    } else {
      formData = {}; // Default case (if needed)
    }

    // Ensure serviceType is included in the formData
    if (!formData.serviceType) {
      alert("Please select a service type before submitting.");
      return;
    }

    console.log("Form Data to be sent:", formData); // Display form data in the console

    try {
      // Send formData directly to the backend
      const response = await fetch('http://localhost/json.php/Quotation.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the entire formData object
      });

      // Parse the response
      const result = await response.json();
      console.log("Response from backend:", result);

      // Handle the response based on the status
      if (response.ok) {
        // Redirect to the selected service's inventory page
        switch (formData.serviceType) {
          case 'household-shifting':
            navigate('/household');
            break;
          case 'office-shifting':
            navigate('/office');
            break;
          case 'shop-shifting':
            navigate('/shop');
            break;
          case 'vehicle-shifting':
            navigate('/vehicle');
            break;
          case 'warehouse-storage':
            navigate('/warehouse');
            break;
          default:
            navigate('/contact');
            break;
        }
      } else {
        alert("Error submitting quote: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit quote. Please try again.");
    }
  };

  const socket = new WebSocket('ws://localhost:3000');


  socket.onopen = () => {
    console.log('WebSocket connected');
    socket.send('Hello from client');
  };

  socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };







  const videoRef = useRef(null);

  useEffect(() => {
    // Set the video to autoplay after 3 seconds (3000 ms)
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    // Auto-scroll the scroller continuously
    const autoScroll = () => {
      if (scroller) {
        scroller.scrollLeft += 1; // Increase to scroll faster
        if (scroller.scrollLeft >= scroller.scrollWidth / 3) {
          scroller.scrollLeft = 0; // Reset when it reaches the end
        }
      }
    };

    const interval = setInterval(autoScroll, 20); // Adjust speed with interval

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowLoginForm(true)
    }, 3000)
  }, [])

  return (

    <>
      <header id="header" className='scroll-smooth'>
        {/* <LoginStatusContext.Provider value={[loginStatus, setLoginStatus, userData, setUserData, setShowLoginForm]}> */}
        <Navbar LoginStatusContext={LoginStatusContext} />
        <Sidebar LoginStatusContext={LoginStatusContext} />
        {/* </LoginStatusContext.Provider> */}
      </header>
      <main>
        <section className=" fusion-fullwidth fullwidth-box"
          style={{
            backgroundImage: "url('/img/frontend222.jpg')", // Replace with your image path
            backgroundSize: "cover",  // Ensures the image covers the full section like a wallpaper
            backgroundPosition: "center",  // Centers the background image
            minheight: "100vh",  // Ensures the section takes full height of the viewport
            backgroundColor: "rgba(0, 0, 0, 0.6)",  // Semi-transparent black overlay
          }}
        >
          <div className='text-white font-bold p-4 max-w-[600px] w-full lg:w-[50%] md:ml-[15%] md:mt-8'>
            <h2 className='font-title font-light lg:mt-0 sm:mt-28 location text-4xl leading-[3rem] text-Roboto'>


              Best Packers And Movers In {selectedLocation}
            </h2>

            <h2 className='text-2xl font-title text-white font-bold tracking-wider leading-8 '>
              "Budget Me Best Service"
            </h2>
            <DiscountScroller />
            {/* <div className="relative overflow-hidden my-8">
              <div
                ref={scrollerRef}
                className="flex gap-5 max-w-[600px] overflow-x-scroll "
              >
                <img src={offer} alt="Service 1" className="w-12 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 2" className="w-80 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 3" className="w-80 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 4" className="w-80 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 5" className="w-80 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 6" className="w-80 h-20 rounded-md rounded-full object-cover" />
                <img src={offer} alt="Service 7" className="w-80 h-20 rounded-md rounded-full object-cover" />
              </div>
            </div> */}

            <div className="flex gap-5 max-w-[600px] overflow-x-scroll my-8 hidden lg:flex ml-4">
              {/* Icon 1 with Link */}
              <div className="flex flex-col items-center ml-2" style={{ zIndex: 10 }}>
                <Link to="/household-custom-inventory" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md"
                    style={{
                      backgroundImage: `url(/img/House.png)`, // Replace with your desired image path
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2 font-title text-center">Household</span>
                </Link>
              </div>


              <div className="flex flex-col items-center ml-2" style={{ zIndex: 10 }}>
                <Link to="/office-custom-inventory" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md"
                    style={{
                      backgroundImage: `url(/img/office.png)`,
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2  font-titletext-center">Office</span>
                </Link>
              </div>

              {/* Icon 3 with Link */}
              <div className="flex flex-col items-center ml-2" style={{ zIndex: 10 }}>
                <Link to="/vehicle-custom-inventory" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md"
                    style={{
                      backgroundImage: `url(/img/newcar.png)`, // Replace with your desired image path
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2 font-title text-center">Vehicle</span>
                </Link>
              </div>

              {/* Icon 4 with Link */}
              <div className="flex flex-col items-center ml-2" style={{ zIndex: 10 }}>
                <Link to="/shop-custom-inventory" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md"
                    style={{
                      backgroundImage: `url(/img/shop.png)`, // Replace with your desired image path
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2 font-title text-center">Shop</span>
                </Link>
              </div>

              {/* Icon 5 with Link */}
              <div className="flex flex-col items-center ml-2 cursor-pointer" style={{ zIndex: 10 }}>
                <Link to="/ac-service" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md cursor-pointer"
                    style={{
                      backgroundImage: `url(/img/ac_install.png)`, // Replace with your desired image path
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2 font-title text-center">AC Services</span>
                </Link>
              </div>

              {/* Icon 6 with Link */}
              <div className="flex flex-col items-center ml-2" style={{ zIndex: 10 }}>
                <Link to="/warehouse" className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full bg-cover bg-gray-300 border-2 border-red-500 shadow-md"
                    style={{
                      backgroundImage: `url(/img/newwarehouse.png)`, // Replace with your desired image path
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span className="text-xs mt-2 font-title text-center">Warehouse</span>
                </Link>
              </div>


            </div>
            {/* Video Section */}
            <div className=" border-2 flex flex-col md:flex-row justify-around w-full md:w-[100%] h-[100px] md:h-[220px] mx-auto md:ml-[0%] ml-[80px] hidden md:block">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b "></div>

              {/* Video Element */}
              <video
                ref={videoRef}
                className=" bg-opacity-80 w-full  h-full"
                controls
                loop
                muted // Add muted attribute to allow autoplay
              >
                <source src="/4277721-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>



          </div>



          {/*   Form start */}
          <div
            className="max-w-[450px] m-auto bg-terniary p-4 lg:my-8 md:my-8 my-0  rounded-md mx-8 max-[472px]:mx-0 
                      border border-gray-600 shadow-lg 
                      md:w-[500px] md:h-[400px] md:relative 
                      lg:fixed lg:top-28 lg:right-[10%] md:mx-auto 
                      lg:w-[400px] lg:h-[450px] font-title
                      md:top-auto md:right-auto md:bottom-4"
          >

            {/* Buttons to toggle between "Within City" and "Between Cities" */}
            <div className='flex justify-evenly bg-white font-body text-white py-2 rounded-md gap-x-10 mb-4 max-[472px]:grid grid-cols-2 w-full max-[472px]:px-4'>
              <div className='text-center m-4 my-0 w-full max-[472px]:m-0 '>
                <button
                  className='bg-PeriwinklePurpleDark p-2 px-8 font-semibold tracking-wide w-full rounded-md max-[472px]:px-0 max-[472px]:m-0'
                  ref={withinButton}
                  onClick={showWithinForm}
                >
                  Within City
                </button>
              </div>
              <div className='text-center m-4 my-0 w-full max-[472px]:m-0'>
                <button
                  className='bg-PeriwinklePurpleDark p-2 px-8 font-semibold tracking-tight w-full rounded-md max-[472px]:px-0 max-[472px]:tracking-tighter'
                  ref={betweenButton}
                  onClick={showBetweenForm}
                >
                  Between Cities
                </button>
              </div>
            </div>

            {/* Form: Within City */}
            <form
              className="flex flex-col px-4 py-4 gap-y-4 text-PeriwinklePurpleDark"
              onSubmit={(e) => handleSubmit(e, 'within')}
              ref={formForWithin}
            >
              {/* Source Locality */}
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input
                  required
                  type="text"
                  name="sourceLocality"
                  placeholder="Enter Your Locality"
                  value={withinForm.sourceLocality}
                  onChange={handleInput}
                  className='w-full py-2 px-4 pl-10 rounded-full border-PeriwinklePurpleDark border'
                />
              </div>

              {/* Destination Locality */}
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input
                  required
                  type="text"
                  name="destinationLocality"
                  placeholder="Enter Your Destination Locality"
                  value={withinForm.destinationLocality}
                  onChange={handleInput}
                  className='w-full py-2 px-4 pl-10 rounded-full border-PeriwinklePurpleDark border'
                />
              </div>

              {/* Select Service Type */}
              <div className='relative'>
                <i className="fa-solid fa-suitcase absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select
                  required
                  name="serviceType"
                  value={withinForm.serviceType}
                  onChange={handleInput}
                  className='w-full py-2 px-4 rounded-full pl-10 border-PeriwinklePurpleDark border'

                >
                  <option value="">-- Select Service Type --</option>
                  <option value="household-shifting">Household Shifting</option>
                  <option value="office-shifting">Office Shifting</option>
                  <option value="shop-shifting">Shop Shifting</option>
                  <option value="vehicle-shifting">Vehicle Shifting</option>
                  <option value="warehouse-storage">Warehouse Storage</option>
                </select>
              </div>

              {/* Inventory Related to Service Type */}
              {/* {withinForm.serviceType && (
          <div className="relative">
            <i className="fa-solid fa-boxes absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <input
              required
              type="text"
              name="inventory"
              placeholder={`Enter inventory for ${withinForm.serviceType}`}
              value={withinForm.inventory}
              onChange={handleInput}
              className='w-full py-2 px-4 pl-10 rounded-full border-PeriwinklePurpleDark border'
            />
          </div>
        )} */}

              {/* Select Shifting Date */}
              <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input
                  required
                  type="date"
                  name="date"
                  className='w-full py-2 px-4 rounded-full pl-10 border-PeriwinklePurpleDark border'
                  value={withinForm.date}
                  onChange={handleInput}
                  onClick={(e) => e.target.showPicker()}  // This will trigger the calendar to open
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Submit Button */}
              <div className=''>
                <button
                  type="submit"
                  className='bg-PeriwinklePurpleDark p-2 px-4 font-bold tracking-wide w-full rounded-md font-body text-white'
                >
                  Get Quote
                </button>
              </div>
            </form>

            {/* Form: Between Cities (Hidden by Default) */}
            <form
              className="flex-col px-4 py-4 gap-y-4 text-PeriwinklePurpleDark hidden"
              onSubmit={handleBetweenForm}
              ref={formForBetween}
            >
              {/* Search Locality */}
              <div className='relative '>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input
                  required
                  type="text"
                  name="sourceLocality"
                  placeholder="Enter Your Locality"
                  value={withinForm.sourceLocality}
                  onChange={handleInput}
                  className='w-full py-2 px-4 pl-10 rounded-full border-PeriwinklePurpleDark border'
                />
              </div>

              {/* Destination Locality */}
              <div className='relative'>
                <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
                <input
                  required
                  type="text"
                  name="destinationLocality"
                  placeholder="Enter Your Destination Locality"
                  value={withinForm.destinationLocality}
                  onChange={handleInput}
                  className='w-full py-2 px-4 pl-10 rounded-full border-PeriwinklePurpleDark border'
                />
              </div>

              {/* Select Service Type */}
              <div className='relative'>
                <i className="fa-solid fa-suitcase absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <select
                  required
                  name="serviceType"
                  value={withinForm.serviceType}
                  onChange={handleInput}
                  className='w-full py-2 px-4 rounded-full pl-10 border-PeriwinklePurpleDark border'
                >
                  <option value="">-- Select Service Type --</option>
                  <option value="household-shifting">Household Shifting</option>
                  <option value="office-shifting">Office Shifting</option>
                  <option value="shop-shifting">Shop Shifting</option>
                  <option value="vehicle-shifting">Vehicle Shifting</option>
                  <option value="warehouse-storage">Warehouse Storage</option>
                </select>
              </div>


              {/* Select Shifting Date */}
              <div className='relative'>
                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                <input
                  required
                  type="date"
                  name="date"
                  className='w-full py-2 px-4 rounded-full pl-10 border-PeriwinklePurpleDark border'
                  value={withinForm.date}
                  onChange={handleInput}
                  onClick={(e) => e.target.showPicker()}
                />
              </div>

              {/* Submit Button */}
              <div className=''>
                <button
                  type="submit"
                  className='bg-PeriwinklePurpleDark p-2 px-4 font-bold tracking-wide w-full rounded-md font-body text-white'
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>

        </section>
        {/* <ServiceScroll/> */}
        <AcSummerNeeds />
        <Service />
        <Steps />
        <WhatOffer />
        {/* <AboutContent /> */}
        {/* <Gallery heading={"Our Work"} /> */}
        {/* <LoginStatusContext.Provider value={[userData, setUserData, loginStatus, setLoginStatus]}>
          <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
            {showLoginForm && <Login LoginContext={LoginContext} />}
            {showRegisterForm && <Register LoginContext={LoginContext} />}
          </LoginContext.Provider> */}

        {/* </LoginStatusContext.Provider> */}
        <Location onLocationClick={handleLocationClick} />   {/* location section*/}
        <OtherServices />

        <div className="App">
          <ComparisonTable comparisonPoints={comparisonPoints} />
        </div>

        <FAQSection />
        {/* Pass selectedLocation and onLocationClick to Keywords */}
        <Keywords selectedLocation={selectedLocation} onLocationClick={handleLocationClick} />

      </main>
      {/* <Footer /> */}
      <QuickContact />



    </>
  );
}

export default App;
