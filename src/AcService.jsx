import service1 from "./assets/images/shifting.jpg";
import ACService from './assets/images/AC-1.png'
import AMCService from './assets/images/AMC.png'
import { useState, useContext, useEffect, useRef, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LoginStatusContext } from "./index";
import ACUn from './assets/images/AC_Uninstalllation.jpeg'
import ARD from './assets/images/Anti-Rust-Deep.jpg'
import ACR from './assets/images/ACRepair.jpg'
import GLR from './assets/images/ac-gas-leak-refill.png'
import AI from './assets/images/ac_install.jpg'
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import ThankYouPage from "./ThankYouPage";
import Ac_Service_emogi from './components/Ac_Service_emogi';
import AcDetails from './components/AcDetails';
import OrderSummary from "./components/OrderSummary";
import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import AClocation from "./components/AClocation";
import Sidebar from "./components/Sidebar";
import ACFAQ from './components/ACFAQ'
import Register from "./components/Register";
import Login from "./components/Login";
const AcService = () => {
  const [loginStatus, setLoginStatus, showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm, userData, setUserData] =
    useContext(LoginStatusContext);

  const services = [
    {
      id: 1,
      tagId: "AC Rent",
      heading: "AC Rent",
      img: ACService,
      desc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        // "Cost-effective rental options available.",
      ],
      detaildesc: [
        "This is detail Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 1000,
      plan: "1 Month",
      imp: true,
      img: AMCService,
      plans: [
        { duration: "3 Month", price: 2800 },
        { duration: "6 Month", price: 5000 },
        { duration: "1Year", price: 9000 },
      ],
    },
    {
      id: 2,
      tagId: "AMC",
      heading: "AMC",
      desc: [
        "Regular maintenance and servicing.",
        "Suitable for short-term usage.",
        "Suitable for short-term usage.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 8000,
      plan: "1 Year",
      imp: true,
      img: AMCService,
      plans: [
        { duration: "Basic", price: 22000 },
        { duration: "Advance", price: 40000 },
        { duration: "1Year", price: 70000 },
      ],
      style: { color: "red" },
    },
  ];


  const services2 = [
    {
      id: 1,
      tagId: "Anti-Rust Deep Clean",
      heading: "Anti-Rust Deep Clean",
      desc: [
        "Removes rust and buildup from AC components.",
        "Prevents future damage to the unit.",
        "Enhances efficiency and longevity of the AC.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 100,
      imp: false,
      plan: "1 Month",
      img: ARD,
      acRepair: true,
      acInspection: false,
      acInstallation: false,
    },
    {
      id: 2,
      tagId: "AC Uninstallation",
      heading: "AC Uninstallation",
      desc: [
        "Identifies and repairs gas leaks.",
        "Ensures safe and efficient operation.",
        "Refills gas to the required level.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      img: ACUn,
      price: 1000,
      imp: false,
      plan: "1 Month",
      acRepair: false,
      acInspection: true,
      acInstallation: false,
    },
    {
      id: 3,
      tagId: "Gas Leak Refill",
      heading: "Gas Leak Refill",
      desc: [
        "Detects gas leaks quickly.",
        "Provides refill services.",
        "Ensures the unit's optimal performance.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 1000,
      imp: false,
      plan: "1 Month",
      img: GLR,
      acRepair: true,
      acInspection: false,
      acInstallation: false,
    },
    {
      id: 4,
      tagId: "AC Installation",
      heading: "AC Installation",
      desc: [
        "Installs new AC units with precision.",
        "Ensures proper installation and optimal performance.",
        "Professional setup with attention to detail.",
      ],
      detaildesc: [
        "Comprehensive installation service.",
        "Professional setup with attention to detail.",
        "Ensures long-lasting performance.",
      ],
      price: 2000,
      imp: true,
      plan: "1 Month",
      img: AI,
      acRepair: false,
      acInspection: false,
      acInstallation: true,
    },
    {
      id: 5,
      tagId: "AC Repair",
      heading: "AC Repair",
      desc: [
        "Diagnoses and repairs AC malfunctions.",
        "Restores AC to optimal working condition.",
        "Quick response and professional service.",
      ],
      detaildesc: [
        "Fast and reliable AC repair.",
        "Diagnoses issues and provides effective solutions.",
        "Ensures your AC works like new.",
      ],
      price: 1500,
      imp: true,
      plan: "1 Month",
      img: ACR,
      acRepair: true,
      acInspection: false,
      acInstallation: false,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    serviceName: '', // Default value from selectedService
    address: '',
    location: '',
    date: '',
    time: '',
    description: '',
  });

  const [selectedService, setSelectedService] = useState(null);
  const [isAddingService, setIsAddingService] = useState(false); // Flag for adding service state
  const [addedServices, setAddedServices] = useState([]); // State for tracking all added services
  const [totalPrice, setTotalPrice] = useState(0); // State for tracking total price of added services


  const [showThankPage, setShowThankPage] = useState(false);

  const ShowThankPage = (e) => {
    e.preventDefault();
    // setShowCustomerForm(false);
    // setShowAddServiceModal(false);
    setShowThankPage(true); // Show the Thank You popup
  };




  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling on body
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling on body when modal is closed
    }

    // Clean-up to avoid issues
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // const handleServiceClick = (service) => {
  //   setSelectedService(service);
  //   setShowServiceModal(true);
  // };


  const handleReadMore = (service) => {
    setSelectedService(service);
    // setAddedServices(service)
    setShowModal(true);
  };
  const handleReadMore1 = (service1) => {
    setSelectedService(service1);
    // setAddedServices(service)
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleAddService = (service) => {
    setShowAddServiceModal(true);
    setSelectedService(service);
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

  const closeAddServiceModal = () => {
    setShowAddServiceModal(false);
    setSelectedService(null);
    setIsAddingService(false);
  };

  const proceed = () => {
    setShowCustomerForm(true);
  };

  // const ProceedSubmit = () => {

  //   // setShowCustomerForm(false);
  //   // setShowAddServiceModal(false);
  //   setSubmitSuccess(true);
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };


  const handleAddServiceChange = (isIncrement) => {
    if (!selectedService) return;

    // Ensure quantity is initialized to 1 if undefined or NaN
    if (selectedService.quantity === undefined || isNaN(selectedService.quantity)) {
      selectedService.quantity = 1;
    }

    // Check if the service is already added in the addedServices array
    const serviceIndex = addedServices.findIndex(
      (service) => service.id === selectedService.id && service.tagId === selectedService.tagId
    );

    if (serviceIndex !== -1) {
      // Service already exists, update the quantity
      const updatedServices = [...addedServices];
      const service = updatedServices[serviceIndex];

      if (isIncrement) {
        service.quantity += 1; // Increase the quantity
        selectedService.quantity = service.quantity; // Update selectedService quantity
        setTotalPrice((prevTotal) => prevTotal + service.price); // Update total price
      } else if (service.quantity > 1) {
        service.quantity -= 1; // Decrease the quantity
        selectedService.quantity = service.quantity; // Update selectedService quantity
        setTotalPrice((prevTotal) => prevTotal - service.price); // Update total price
      }

      // Update state
      setAddedServices(updatedServices);
    } else if (isIncrement) {
      // If service doesn't exist, add it with quantity 1
      const newService = {
        ...selectedService,
        id: addedServices.length + 1, // Generate unique ID
        quantity: 1, // Initialize with quantity 1
      };

      // Add new service and update total price
      setAddedServices((prevAddedServices) => [...prevAddedServices, newService]);
      setTotalPrice((prevTotal) => prevTotal + newService.price);

      // Update selectedService quantity
      selectedService.quantity = 1;
    }

    setIsAddingService(true); // Update flag
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (showModal || showAddServiceModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, showAddServiceModal])


  const validateForm = () => {
    const requiredFields = ['phone', 'address', 'location', 'date', 'time', 'description'];
    const newErrors = requiredFields.reduce((acc, field) => {
      if (!form[field]?.trim()) acc[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      return acc;
    }, {});

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Do not proceed if validation fails
      return;
    }

    // Proceed if validation passes
    setShowCustomerForm(false);
    setShowAddServiceModal(false)
    setShowThankPage(true);
  };


  // Scroll logic
  const sectionRefs = [
    useRef(null), // Ref for Service 1
    useRef(null), // Ref for Service 2
    useRef(null), // Ref for Service 3
    useRef(null), // Ref for Service 4
    useRef(null), // Ref for Service 5
  ];

  const handleScrollToService = (index) => {
    if (sectionRefs[index]?.current) {
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start",    // Align to the top of the viewport
      });
    }
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
    console.log("Selected Location: ", location);
  };

  const [selectedLocation, setSelectedLocation] = useState(''); // Stores the selected location
  let LoginContext = createContext();

  // const [loginStatus, setLoginStatus] = useState(false);
  // const [userData, setUserData] = useState({});

  return (
    <>
       <header id="header" className='scroll-smooth'>
              {/* <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData,setShowLoginForm]}> */}
              <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>
              <Sidebar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>
              {/* </LoginStatusContext.Provider> */}
            </header>
      <div className="md:mt-20 p-2 w-ful "> 
        <SearchBar />
        <h2
          id="header"
          className="md:text-5xl location md:text-left md:mb-2 text-left text-[1.10rem] leading-[4rem] md:mt-10 md:ml-[10rem] ml-2 font-bold  "
        >
          Best AC Service {selectedLocation} in Mumbai
        </h2>
      </div>
      <div className="md:flex md:flex-row flex flex-col items-center overflow-hidden bg-gray-300">
        {/* <div className="mt-2 w-full md:hidden block p-1">
          <SearchBar />
        </div> */}
        <div className="w-full flex flex-col justify-center items-center md:hidden md:max-w-[80%] mx-auto">
          <div className="w-full flex items-center justify-center">
            {/* <h2
              id="header1"
              className="location text-left text-xl leading-[4rem] md:mt-10 md:ml-[10rem] font-bold"
            >
              Best AC Service {selectedLocation} in Mumbai
            </h2> */}
          </div>
          {/* Service Cards Section */}
        </div>
      </div>

      {/* Scrollable Services Section */}
      {/* <div className="p-8 bg-terniary w-full flex justify-center">
        <div className="flex overflow-x-scroll gap-x-10 w-full max-w-[1200px] p-4 px-8">
          {services2.map((item, i) => (
            <div
              key={i}
              className="grid rounded-tl-lg rounded-lg overflow-hidden place-items-center md:w-[300px] w-[90%] shrink-0 border-2 border-gray-300 bg-transparent group-hover:text-white bg-red-300 shadow-lg"
            >
              <div
                className="relative w-full bg-cover bg-center bg-no-repeat bg-gray-200"

              >
                <div className="p-3 rounded-tl-lg ">
                  <img src={item.img} alt="" className="rounded-lg w-full " />
                </div>

                <div className="font-bold text-white absolute bottom-0 p-2">

                </div>
              </div>
              <div className="bg-white w-full text-left p-2">
                <div className="flex justify-between">
                  <p className="text-xl px-1 text-center text-primary font-semibold">{item.heading}</p>
                  <p className="md:text-lg text-sm p-1 px-2 text-left text-primary">
                    <span className="font-semibold p-1 px-2 rounded-sm text-black">{item.plan}</span> - ₹{item.price}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-blue-500 text-xl  underline rounded-full text-left transition-all "
                    onClick={() => handleAddService(item)}
                  >
                    Add
                  </button>
                  <button
                    className="text-blue-500 text-xl underline rounded-full text-left transition-all px-3  ml-2 my-2"
                    onClick={() => handleReadMore(item)}
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <AcGasservice/> */}
      {/* <Ac_Service_emogi/> */}

      <AcDetails handleAddServiceChange={handleAddServiceChange} />


      {/* Form for Adding a Service */}
      {/* <h1 className="text-center font-bold md:text-2xl text-xl mt-3">For Quotation</h1>
      <div className="flex justify-center items-center w-1/2 ml-auto mr-auto">
        <form className="flex flex-col px-4 py-4 gap-y-4 text-primary max-w-[500px] md:w-full w-[800px]" >
          <div className="relative">
            <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3 "></i>
            <input type="number" name='phone' placeholder='Your Phone Number' className='md:w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.phone} />
          </div>
          <div className="relative">
            <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
            <input type="text" name='location' placeholder='Your Location' className='md:w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.location} />
          </div>
          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select name="type" className='w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.type}>
              <option value="">-- Ac Type --</option>
              <option value="split">Split AC</option>
              <option value="window">Window Ac</option>
              <option value="Floor Mounted Ac">Floor Mounted Ac</option>
              <option value="Hybrid">Hybrid /Dual Ac</option>
            </select>
          </div>

          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select name="service" className='w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.service}>
              <option value="">-- Select Service --</option>
              <option value="AcRepairInspection">AC Repair & Inspection</option>
              <option value="Anti-RustDeepClean">Anti-Rust Deep Clean</option>
              <option value="acGasLeakFillRefill">AC Gas Leak Fill & Refill</option>
              <option value="installation">Installation</option>
              <option value="uninstallation">Uninstallation</option>
            </select>
          </div>

          {form.service === "AcRepairInspection" && (
            <div className="relative">
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select name="repairInspection" className='w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.repairInspection}>
                <option value="">-- Select Issue --</option>
                <option value="lessNoCooling">Less / No Cooling</option>
                <option value="powerIssue">Power Issue</option>
                <option value="unWantedNoiseSmell">Unwanted Noise/ Smell</option>
                <option value="waterLeakage">Water Leakage</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select name="brand" className='w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.brand}>
              <option value="">-- Select Brand --</option>
              <option value="Voltas">Voltas</option>
              <option value="Samsung">Samsung</option>
              <option value="Haie">Haie</option>
              <option value="Lloyd">Lloyd</option>
              <option value="Whirlpool">Whirlpool</option>
              <option value="Bluestar">Bluestar</option>
              <option value="Panasonic">Panasonic</option>
              <option value="Daikin">Daikin</option>
            </select>
          </div>

          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select
              name="time"
              className="w-full py-2 px-4 rounded-md pl-10 border-primary border"

              value={form.time}
            >
              <option value="">-- Select Time --</option>
              <option value="9 AM to 10 AM">9 AM to 10 AM</option>
              <option value="10 AM to 11 AM">10 AM to 11 AM</option>
              <option value="11 AM to 12 PM">11 AM to 12 PM</option>
              <option value="12 PM to 1 PM">12 PM to 1 PM</option>
              <option value="1 PM to 2 PM">1 PM to 2 PM</option>
              <option value="2 PM to 3 PM">2 PM to 3 PM</option>
              <option value="3 PM to 4 PM">3 PM to 4 PM</option>
              <option value="4 PM to 5 PM">4 PM to 5 PM</option>
              <option value="5 PM to 6 PM">5 PM to 6 PM</option>
              <option value="6 PM to 7 PM">6 PM to 7 PM</option>
            </select>
          </div>

          <div className="relative">
            <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <input type="date" name='date' className='w-full py-2 px-4 rounded-md pl-10 border-primary border' value={form.date} />
          </div>

          <div className="">
            <button type="submit" className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
          </div>
        </form>
      </div> */}
        {/* <LoginStatusContext.Provider value={[userData, setUserData, loginStatus, setLoginStatus]}>
                <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
                  {showLoginForm && <Login LoginContext={LoginContext} />}
                  {showRegisterForm && <Register LoginContext={LoginContext} />}
                </LoginContext.Provider>
      
              </LoginStatusContext.Provider> */}
      <ACFAQ/>
      <AClocation onLocationClick={handleLocationClick} />
      <Footer />
    </>
  );
};

export default AcService;
