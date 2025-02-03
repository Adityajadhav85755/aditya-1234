// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import shifting from '../assets/images/shifting.jpg'; // Correct image path
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png'
import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/lucky.png';
import Footer from './Footer';

function WareHouse() {
  const [form, setForm] = useState({
    category: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    duration: "",
  });


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);  // Example login state
  const [showThankYou, setShowThankYou] = useState(false);
  const thankYouRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value };
      console.log("Updated Form Data:", updatedForm); // Log form data on change
      return updatedForm;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation (only letters allowed)
    const isNameValid = /^[a-zA-Z\s]+$/.test(form.customerName);

    // Email validation (only @gmail.com allowed)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.customerEmail);

    // Check if name and email are valid
    if (!isNameValid) {
      setMessage("Error: Name must contain only letters.");
      return;
    }

    if (!isEmailValid) {
      setMessage("Error: Email must be a valid Gmail address.");
      return;
    }


    console.log("Form Submitted with Data:", form); // Log form data on submit
    // Prepare the data to send
    const data = {
      category: form.category,
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      customerPhone: form.customerPhone,
      duration: form.duration,
    };

    // Set submitted flag and clear previous messages
    setSubmitted(true);
    setMessage("");

    try {
      // Send the form data to the backend using fetch
      let response = await fetch("http://localhost/json.php/warehouse.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json", // Sending data as JSON
        },
        body: JSON.stringify(data), // Send the form data as a JSON string
      });

      // Check if the response is successful (status 200)
      if (response.ok) {
        let responseData = await response.json(); // Parse the JSON response from the backend
        console.log('Response from server:', responseData); // Log the response

        // Check for success in responseData
        if (responseData.status === "success") {
          setMessage("Form submitted successfully!");
          // Optionally, clear the form after submission
          setForm({
            category: form.category,
            customerName: form.customerName,
            customerEmail: form.customerEmail,
            customerPhone: form.customerPhone,
            duration: form.duration,
          });
        } else {
          setMessage(`Error: ${responseData.message}`); // Handle the error message
        }
      } else {
        // Handle case when the response is not ok (non-200 status code)
        setMessage("Error: Unable to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error('An error occurred:', error); // Log the error
      setMessage("An error occurred while submitting the form. Please try again.");
    }
  };


  const closeSummary = () => {
    setSubmitted(false);
    setShowThankYou(true);
    setForm({
      category: "",
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      duration: "",
    });
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (thankYouRef.current && !thankYouRef.current.contains(e.target)) {
        setShowThankYou(false);
      }
    };

    // Add event listener to close the thank you modal on outside click
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleFAQ = (id) => {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.style.transform = "rotate(180deg)"; // Rotate arrow up
    } else {
      content.classList.add('hidden');
      icon.style.transform = "rotate(0deg)"; // Rotate arrow down
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // Toggle dropdown visibility on click
  const toggleDropdown = (menu) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };
  return (

    <>

      <div
        style={{ backgroundImage: `url('/img of services/warehouse.bg.jpg')` }} // Relative path from the public folder
        className="h-screen w-full flex flex-col md:flex-row bg-center bg-cover relative"
      >
        {/* Navbar */}
        {/* Navbar for large screens */}
        <nav id="navbar" className=" h-0 fixed top-0 left-0 w-full z-50 shadow-md bg-shahid font-title">
          <div className=" flex justify-between items-center p-3 gap-4 bg-shahid  lg:h-12">
            {/* Logo Section */}
            <div className="logoContainer flex items-center gap-2 z-10 font-title">
              <Link to="/" className="z-10">
                <img src={logo} alt="Logo" className="w-13 h-11" />
              </Link>
              <span className=" w-[5cm] font-title font-bold text-white ">Sky Need Solution</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="text-white font-body text-2xl md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            {/* Navigation Links */}
            <ul
              id="mobile-menu"
              className={`hidden md:flex md:flex-row text-white font-body font-semibold justify-end items-center gap-4 md:gap-10 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <Link
                  to="/"
                  className=" font-body tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                >
                  Home
                </Link>
              </li>
              <li className="group relative py-1">
                <Link
                  className=" font-body tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                  onClick={() => toggleDropdown('services')}
                >
                  Services
                </Link>
                {isDropdownOpen === 'services' && (
                  <ul className="absolute bg-shahid font-body text-white py-2 rounded-sm top-full flex-col gap-y-2 z-50">
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/household">Household</Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/office">Office</Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/vehicle">Vehicle</Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/AcService">Ac Service</Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-800 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                      <Link to="/warehouse">Warehouse</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="tel:9004780981"
                  className="tracking-wider flex gap-x-2 justify-center items-center px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                >
                  <i className="fa-solid fa-headphones text-red-600 text-xl"></i>9004780981
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-primary font-body text-white flex flex-col p-4 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <ul className="mt-20 flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className=" font-body block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <div
                onClick={() => toggleDropdown('services')}
                className=" font-body block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all cursor-pointer flex justify-between items-center"
              >
                Services
                <i
                  className={`fa-solid fa-chevron-down transition-transform duration-300 ${isDropdownOpen === 'services' ? 'rotate-180' : ''
                    }`}
                ></i>
              </div>
              {isDropdownOpen === 'services' && (
                <ul className="flex flex-col gap-2 pl-4 mt-2">
                  <li>
                    <Link
                      to="/household"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Household
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/office"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Office
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vehicle"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Vehicle
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AcService"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Ac Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/warehouse"
                      className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                    >
                      Warehouse
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="tel:9004780981"
                className="block px-4 py-2 tracking-wider border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-headphones text-red-600"></i>
                7045228136
              </Link>
            </li>

            {/* {loginStatus ? (
                        <li className="flex items-center mt-4 hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-white">
                            <img src="profile-image-url" className="w-10 h-10 rounded-full" alt="Profile" />
                            <p className="ml-3">{userData.name || 'Profile'}</p>
                        </li>
                    ) : (
                        <button
                            className="bg-green-500 text-white px-4 py-1 rounded-full mt-4 hover:bg-green-600 transition-all"
                            onClick={() => setShowLoginForm(true)}
                        >
                            Login
                        </button>
                    )} */}
          </ul>
        </div>





        {/* Main Content */}
        <div className="flex flex-1 md:flex-row flex-col pt-16"> {/* Added pt-16 for spacing due to fixed navbar */}

          {/* Details Container (Scrollable on mobile and desktop) */}
          <div className="bg-white bg-opacity-80 p-6 rounded-md w-full md:w-2/2 flex flex-col justify-start items-center overflow-y-auto h-screen md:h-auto md:w-[50%] md:mx-auto md:ml-[8%]">
            <h2 className="text-2xl font-title font-bold mb-4  text-black">Warehouse Services</h2>
            <div className="text-gray-700 mb-6">
              <p className="mb-4 font-body text-black">
                We offer additional services like packaging and logistics. Get in touch for more details.
              </p>
              <p className="mb-4 font-body text-black">
                Our team ensures safe and secure transportation for all your belongings. Contact us for premium service at competitive prices.
              </p>
            </div>
            {/* Images Section */}
            <div className="grid grid-cols-1">
              {/* Image 1 */}
              {/* <div className="justify items-center">
          <img
            src="/img of services/household.png"
            alt="Packaging Service"
            className="w-full h-auto rounded-md shadow-md"
          />
          <p className="mt-2 text-center text-PeriwinklePurpleDark">Roshan Ali</p>
        </div> */}

            </div>
            <div id="storehouse" className="bg-white bg-opacity-70 p-6 rounded-md shadow-lg mb-6 flex flex-col md:flex-row">
              {/* Left Side - Data */}
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-title  font-bold mb-4 text-PeriwinklePurpleDark">Storehouse - Security & More</h2>
                <p className="mb-4 font-body text-black">
                  Our storehouse services include secure storage with surveillance systems and 24/7 monitoring to ensure your goods are protected. We offer flexible storage options for various business needs, from short-term to long-term storage.
                </p>
                <ul className="list-disc pl-5 font-title text-PeriwinklePurpleDark">
                  <li>24/7 security surveillance</li>
                  <li>Climate-controlled units</li>
                  <li>Flexible lease terms</li>
                  <li>Easy access and management</li>
                </ul>
              </div>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <img
                  src="/img of services/storage.jpg" // Replace with your image path
                  alt="Storehouse Security"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
            <div id="receiving-warehouse" className="bg-white p-6 rounded-md shadow-lg mb-6 flex flex-col md:flex-row">
              {/* Left Side - Data */}
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-title  font-bold mb-4 text-PeriwinklePurpleDark">Sky Need Solution - Receiving Warehouse</h2>
                <p className="mb-4 font-body text-black">
                  At Sky Need Solution, our receiving warehouse services are designed to streamline your supply chain. With state-of-the-art facilities, we ensure that your products are handled with care, inspected upon arrival, and stored efficiently for further distribution.
                </p>
                <ul className="list-disc pl-5 font-title text-PeriwinklePurpleDark">
                  <li>Safe and secure receiving of goods</li>
                  <li>Quality inspection and documentation</li>
                  <li>Efficient storage and sorting</li>
                  <li>Seamless integration with your supply chain</li>
                  <li>24/7 monitoring and tracking</li>
                </ul>
              </div>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <img
                  src="/img of services/Receiving.jpg" // Replace with your actual image path
                  alt="Receiving Warehouse"
                  className="w-full h-auto rounded-md shadow-md "
                />

              </div>
            </div>
            <div id="shipping-warehouse" className="bg-white p-6 rounded-md shadow-lg mb-6 flex flex-col md:flex-row">
              {/* Left Side - Data */}
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-title  font-bold mb-4 text-PeriwinklePurpleDark">
                  Sky Need Solution - Shipping Warehouse
                </h2>
                <p className="mb-4 font-body text-black">
                  Sky Need Solution provides efficient and reliable shipping warehouse services. Our warehouses are strategically located to facilitate quick and safe shipping of goods to various destinations. With advanced tracking systems, we ensure that your shipments are handled with care and delivered on time.
                </p>
                <ul className="list-disc pl-5 font-title text-PeriwinklePurpleDark">
                  <li>Fast and reliable shipping services</li>
                  <li>Global shipping capabilities</li>
                  <li>Advanced inventory tracking and management</li>
                  <li>Efficient packaging and handling</li>
                  <li>Safe storage for transit goods</li>
                </ul>
              </div>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2 p-4 relative flex justify-center items-center">
                {/* Discount Tag */}
                <div className="absolute top-10 left-15 bg-red-500 text-white px-4 py-2 text-sm font-body font-bold rounded-md shadow-md z-10">
                  Flat 30% Off
                </div>

                {/* Image */}
                <img
                  src="/img of services/shipping.png" // Replace with your actual image path
                  alt="Shipping Warehouse"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>

            <div id="consolation-warehouse" className=" bg-white p-6 rounded-md shadow-lg mb-6 flex flex-col md:flex-row ">
              {/* Left Side - Data */}
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-2xl font-title  font-bold mb-4 text-PeriwinklePurpleDark">Sky Need Solution - Consolation Warehouse</h2>
                <p className="mb-4 font-body text-black">
                  Sky Need Solution offers top-tier Consolation Warehouse services, where goods from multiple suppliers are consolidated into a single shipment. This service helps in reducing shipping costs, streamlining inventory, and offering a reliable solution for businesses with smaller volumes. We ensure efficient handling and safe consolidation of your products.
                </p>
                <ul className="list-disc pl-5 font-body text-PeriwinklePurpleDark">
                  <li>Cost-effective shipping through consolidation</li>
                  <li>Efficient inventory management and tracking</li>
                  <li>Streamlined logistics for multiple suppliers</li>
                  <li>Reliable and safe consolidation of goods</li>
                  <li>Customized solutions based on your business needs</li>
                </ul>
              </div>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                <img
                  src="/img of services/consolidation.jpeg" // Replace with your actual image path
                  alt="Consolation Warehouse"
                  className="w-full h-auto rounded-md shadow-md"
                />
              </div>
            </div>
            <div id="faq-warehouse" className=" w-full bg-white p-6 rounded-md shadow-lg mb-6">
              <h2 className="text-2xl font-title  font-bold text-PeriwinklePurpleDark mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="border rounded-md shadow-sm">
                  <button
                    className=" font-bodyw-full flex justify-between items-center p-4 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-md h-16"
                    onClick={() => toggleFAQ(1)}
                  >
                    What is a warehouse consolidation service?
                    <span
                      className="text-2xl transform transition-transform duration-200"
                      id="icon-1"
                    >
                      &#9660;
                    </span>
                  </button>
                  <div id="faq-content-1" className="hidden p-4 bg-white font-body text-gray-700">
                    Warehouse consolidation service combines goods from multiple suppliers into a single shipment, reducing shipping costs and improving logistics efficiency.
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="border rounded-md shadow-sm">
                  <button
                    className="w-full flex justify-between items-center p-4 font-body text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-md h-16"
                    onClick={() => toggleFAQ(2)}
                  >
                    What are the benefits of a shipping warehouse?
                    <span
                      className="text-2xl transform transition-transform duration-200"
                      id="icon-2"
                    >
                      &#9660;
                    </span>
                  </button>
                  <div id="faq-content-2" className="hidden p-4 bg-white font-body text-gray-700">
                    A shipping warehouse ensures efficient storage and distribution, supports global shipping, and improves inventory management with tracking systems.
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="border rounded-md shadow-sm">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-body font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-md h-16"
                    onClick={() => toggleFAQ(3)}
                  >
                    How does inventory management work in a warehouse?
                    <span
                      className="text-2xl transform transition-transform duration-200"
                      id="icon-3"
                    >
                      &#9660;
                    </span>
                  </button>
                  <div id="faq-content-3" className="hidden p-4 bg-white font-body text-gray-700">
                    Inventory management uses advanced tracking systems to monitor stock levels, automate replenishment, and ensure accuracy in picking and shipping.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md shadow-lg mb-6">
              <h2 className="text-2xl font-bold font-body text-PeriwinklePurpleDark mb-4">Customer Reviews</h2>

              <div className="space-y-6">
                {/* Review Item 1 */}
                <div className="border rounded-md shadow-sm p-4 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <img
                      src="/img of services/usman.jpeg" // Replace with your actual image path
                      alt="Customer 1"
                      className="w-24 h-24 object-cover rounded-full border-2 border-PeriwinklePurpleDark"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 pl-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold font-body text-gray-800">Mohd Usman</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">4.5</span>
                        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span> {/* Star Rating */}
                      </div>
                    </div>
                    <p className="mt-2 font-body text-gray-700">
                      "The service was great! I’m very happy with the results and the process was smooth and easy."
                    </p>
                    {/* Paid Badge */}
                    <div className="mt-3">
                      <span className="bg-green-500 text-white px-3 py-1 font-body  text-xs rounded-full">Paid</span>
                    </div>
                  </div>
                </div>

                {/* Review Item 2 */}
                <div className="border rounded-md shadow-sm p-4 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <img
                      src="/img of services/shahid.img.jpeg" // Replace with your actual image path
                      alt="Customer 2"
                      className="w-24 h-24 object-cover rounded-full border-2 border-PeriwinklePurpleDark"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 pl-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-body font-semibold text-gray-800">Manihar Shahid</h3>
                      <div className="flex items-center">
                        <span className="text-sm font-body text-gray-500 mr-2">5.0</span>
                        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> {/* Star Rating */}
                      </div>
                    </div>
                    <p className="mt-2 font-body text-gray-700">
                      "Excellent service, highly recommended! I would definitely use it again for my next project."
                    </p>
                    {/* Paid Badge */}
                    <div className="mt-3">
                      <span className="bg-green-500 font-body text-white px-3 py-1 text-xs rounded-full">Paid</span>
                    </div>
                  </div>
                </div>

                {/* Review Item 3 */}
                <div className="border rounded-md shadow-sm p-4 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/3 flex justify-center items-center">
                    <img
                      src="/img of services/aditya.jpeg" // Replace with your actual image path
                      alt="Customer 3"
                      className="w-24 h-24 object-cover rounded-full border-2 border-PeriwinklePurpleDark"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 pl-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold font-body text-gray-800">Aditya</h3>
                      <div className="flex items-center">
                        <span className="text-sm font-body text-gray-500 mr-2">3.5</span>
                        <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> {/* Star Rating */}
                      </div>
                    </div>
                    <p className="mt-2 font-body text-gray-700">
                      "Good service, but there’s still room for improvement. Some delays occurred during the process."
                    </p>
                    {/* Paid Badge */}
                    <div className="mt-3">
                      <span className="bg-green-500 font-body text-white px-3 py-1 text-xs rounded-full">Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="bg-gray-50 p-6 rounded-md shadow-lg mb-6">
              <h2 className="text-2xl font-body font-bold text-PeriwinklePurpleDark mb-4">You Might Also Like</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Service 1 */}
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/stor.jpg" alt="Service 1" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-body text-gray-800">Storage Services</h3>
                    <p className="font-body text-gray-600">Safe and secure storage of goods in various types of facilities like pallet racks, shelves, and bulk storage areas. </p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>

                {/* Service 2 */}
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/inven.png" alt="Service 2" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">Inventory Management</h3>
                    <p className="text-gray-600">This service involves the systematic tracking of products stored in the warehouse. </p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>

                {/* Service 3 */}
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/order.jpg" alt="Service 3" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-body font-semibold text-gray-800">Order Fulfillment</h3>
                    <p className="text-gray-600">The process of receiving, processing, and delivering orders to customers.</p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/pack.jpg" alt="Service 3" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-body text-gray-800">Packing and Repacking</h3>
                    <p className="text-gray-600">Products are packed or repacked based on customer specifications or industry standards.</p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/dock.png" alt="Service 3" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-body text-gray-800">Cross-Docking</h3>
                    <p className="text-gray-600">A logistics practice where incoming shipments are unloaded and immediately transferred to outbound transportation without being stored for a long period.</p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>
                <div className="border rounded-md shadow-sm overflow-hidden">
                  <img src="/img of services/distribution.jpg" alt="Service 3" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-body text-gray-800"> Distribution Services</h3>
                    <p className="text-gray-600 font-body"> Managing the distribution of goods from the warehouse to retailers, customers, or distribution centers.</p>
                    {/* <button className="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md mt-4">Learn More</button> */}
                  </div>
                </div>
              </div>
            </div>



            {/* <div class="bg-white p-6 rounded-md shadow-lg mb-6">
  <h2 class="text-2xl font-bold text-PeriwinklePurpleDark mb-4">Warehouse Locations in Mumbai & Thane</h2>
  <p class="text-gray-600 mb-6">Explore key locations in Mumbai and Thane where we offer warehouse services. Select your preferred area to learn more.</p>
  <div class="flex flex-wrap gap-4">
    
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Malad to Kandivali')"
    >
      Malad to Kandivali
    </button>
    
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Andheri to Versova')"
    >
      Andheri to Versova
    </button>
   
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Borivali to Dahisar')"
    >
      Borivali to Dahisar
    </button>
   
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Navi Mumbai to Vashi')"
    >
      Navi Mumbai to Vashi
    </button>
    
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Thane to Bhiwandi')"
    >
      Thane to Bhiwandi
    </button>
    
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Goregaon to Jogeshwari')"
    >
      Goregaon to Jogeshwari
    </button>
    
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Kurla to Ghatkopar')"
    >
      Kurla to Ghatkopar
    </button>
   
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Dombivli to Kalyan')"
    >
      Dombivli to Kalyan
    </button>
   
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Malad West to Goregaon East')"
    >
      Malad West to Goregaon East
    </button>

    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Chembur to Mankhurd')"
    >
      Chembur to Mankhurd
    </button>
     <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Virar to Vasai')"
    >
      Virar to Vasai
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Vasai to Nallasopara')"
    >
      Vasai to Nallasopara
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Nallasopara to Borivali')"
    >
      Nallasopara to Borivali
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Borivali to Kandivali')"
    >
      Borivali to Kandivali
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Kandivali to Malad')"
    >
      Kandivali to Malad
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Malad to Goregaon')"
    >
      Malad to Goregaon
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Goregaon to Andheri')"
    >
      Goregaon to Andheri
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Andheri to Juhu')"
    >
      Andheri to Juhu
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Juhu to Bandra')"
    >
      Juhu to Bandra
    </button>
    <button
      class="bg-PeriwinklePurpleDark text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all"
      onclick="alert('You clicked on: Bandra to Churchgate')"
    >
      Bandra to Churchgate
    </button>
  </div>
</div> */}
          </div>





          {/* Form Container (Fixed) */}
          <div id="form" className="wherehouse-form max-w-[500px] m-auto bg-terniary p-4 my-8 rounded-md mx-8 max-[472px]:mx-0 lg:fixed lg:top-30 lg:right-[2cm] border border-gray-600 shadow-lg md:place-items-start lg:w-[600px] lg:h-[560px] flex flex-col justify-center items-center bg-white bg-opacity-90 shadow-lg p-8 rounded-lg w-full md:w-1/3">
            <div className="w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4 text-PeriwinklePurpleDark">Wherehouse Service</h2>

              {/* Success message */}
              {message && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 mb-4 rounded-md shadow-lg">
                  <p>{message}</p>
                </div>
              )}

              {/* Form Section */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="relative">
                    <label htmlFor="category" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                      Select Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      value={form.category}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                    >
                      <option value="">-- Select Category --</option>
                      <option value="Event Space">Event Space</option>
                      <option value="Commercial Space">Commercial Space</option>
                      <option value="Rapid Deployment space">Rapid Deployment space</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label htmlFor="customerName" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      id="customerName"
                      placeholder="Enter your name"
                      value={form.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="customerEmail" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      id="customerEmail"
                      placeholder="Enter your email"
                      value={form.customerEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="customerPhone" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                      Phone
                    </label>
                    <div className="flex items-center">
                      <span className="px-4 py-2 bg-gray-200 rounded-l-md border border-PeriwinklePurpleDark text-PeriwinklePurpleDark">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="customerPhone"
                        id="customerPhone"
                        placeholder="Enter your phone number"
                        value={form.customerPhone}
                        onChange={handleInputChange}
                        maxLength={10}
                        required
                        className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="duration" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                      Storage Duration
                    </label>
                    <select
                      name="duration"
                      id="duration"
                      value={form.duration}
                      onChange={handleInputChange}
                      required
                      className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                    >
                      <option value="">-- Select Duration --</option>
                      <option value="1-week">1 Week</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                      <option value="1-year">1 Year</option>
                    </select>
                  </div>

                  <div>
                    <button type="submit" className="bg-PeriwinklePurpleDark text-white font-bold py-2 px-4 rounded-md">
                      Submit
                    </button>
                    {message && <div className="text-red-500 font-semibold mt-2">{message}</div>}
                  </div>

                </form>
              ) : (
                /* Summary Section */
                <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg w-full">
                  <h3 className="text-xl font-bold mb-4 text-PeriwinklePurpleDark">Summary</h3>
                  <p>
                    <strong>Category:</strong> {form.category}
                  </p>
                  <p>
                    <strong>Name:</strong> {form.customerName}
                  </p>
                  <p>
                    <strong>Email:</strong> {form.customerEmail}
                  </p>
                  <p>
                    <strong>Phone:</strong> {form.customerPhone}
                  </p>
                  <p>
                    <strong>Storage Duration:</strong> {form.duration}
                  </p>
                  <button
                    onClick={closeSummary}
                    className="mt-4 bg-PeriwinklePurpleDark text-white py-2 px-4 rounded-md"
                  >
                    Close
                  </button>
                </div>
              )}
              {/* Thank You Page */}
              {showThankYou && (
                <div
                  className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center"
                >
                  <div className="bg-white p-6 rounded-md shadow-lg w-3/4 max-w-md text-center">
                    <h3 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h3>
                    <p className="text-xl text-gray-600 mb-4">Your submission has been received successfully. We will get back to you soon.</p>
                    <p className="text-lg text-gray-500">If you have any further questions, feel free to contact us at <a href="mailto:skyneedsolution@gmail.com" className="text-blue-500">info@example.com</a></p>
                    <button
                      onClick={() => setShowThankYou(false)}
                      className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                      <a href="/" className="text-white">Go to Homepage</a>
                    </button>
                  </div>
                </div>
              )}
            </div>
            +    </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>


  );
}

export default WareHouse;

