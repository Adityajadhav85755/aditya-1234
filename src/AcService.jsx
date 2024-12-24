import service1 from "./assets/images/shifting.jpg";
import { useState, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LoginStatusContext } from "./index";

const AcService = () => {
  const [loginStatus, setLoginStatus, showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm, userData, setUserData] =
    useContext(LoginStatusContext);

  const services = [
    {
      id: 1,
      tagId: "AC Rent",
      heading: "AC Rent",
      desc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      detaildesc: [
        "This is deail Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 1000,
      imp: true,
    },
    {
      id: 2,
      tagId: "AMC",
      heading: "AMC",
      desc: [
        "Regular maintenance and servicing.",
        "Ensures optimal performance of the AC unit.",
        "Includes check-ups, cleaning, and necessary repairs.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 8000,
      imp: true,
    },
    {
      id: 3,
      tagId: "AC Service",
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
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 100,
      imp: false,
    },
    {
      id: 4,
      tagId: "acGasLeakFillRefill",
      heading: "Gas Leak Refill",
      desc: [
        "Identifies and repairs gas leaks.",
        "Ensures safe and efficient operation.",
        "Refills gas to the required level.",
      ],
      detaildesc: [
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 1000,
      imp: false,
    },
    {
      id: 5,
      tagId: "acGasLeakFillRefill",
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
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
        "Provides temporary cooling solution.",
        "Suitable for short-term usage.",
        "Cost-effective rental options available.",
      ],
      price: 1000,
      imp: false,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [newService, setNewService] = useState({ heading: "", desc: "", price: 0 });
  const [form, setForm] = useState({
    phone: "",
    location: "",
    type: "",
    service: "",
    repairInspection: "",
    brand: "",
    time: "",
    date: "",
  });
  const [servicesList, setServicesList] = useState(services);
  const [selectedService, setSelectedService] = useState(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [isAddingService, setIsAddingService] = useState(false); // Flag for adding service state
  const [addedServices, setAddedServices] = useState([]); // State for tracking all added services
  const [totalPrice, setTotalPrice] = useState(0); // State for tracking total price of added services

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

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const handleReadMore = (service) => {
    setSelectedService(service);
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

  const closeAddServiceModal = () => {
    setShowAddServiceModal(false);
    setSelectedService(null);
    setIsAddingService(false);
  };

  const handleAddServiceChange = () => {
    if (selectedService) {
      const newServiceData = {
        id: addedServices.length + 1, // Unique ID for the new service
        tagId: selectedService.tagId,
        heading: selectedService.heading,
        desc: selectedService.desc,
        detaildesc: selectedService.detaildesc,
        price: selectedService.price,
        // price: selectedService.price,
        imp: false, // New services are not important by default
      };

      // Update the list of added services and calculate the new total price
      setAddedServices([...addedServices, newServiceData]);
      setTotalPrice(totalPrice + newServiceData.price);
      setIsAddingService(true);
    }

  };

  // Component rendering logic
  return (
    <>
      <header>
        <LoginStatusContext.Provider value={[loginStatus, setLoginStatus, userData, setUserData]}>
          <Navbar setShowLoginForm={setShowLoginForm} LoginStatusContext={LoginStatusContext} />
        </LoginStatusContext.Provider>
      </header>

      <div className="flex flex-row items-center overflow-hidden">
        <div className="grid grid-cols-1 place-items-center m-8 gap-10 w-full overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
          <div className="flex w-full justify-center gap-x-10">
            {services.map((serv, i) => (
              serv.imp && (
                <div
                  key={i}
                  className="card w-full max-w-[400px] border-[#0a2c5a] border-2 h-[400px] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem]"
                >
                  <img src={service1} alt="" className="w-full h-[150px] object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-left leading-10">{serv.heading}</h3>
                    <ul className="text-left list-disc list-inside">
                      {serv.desc.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    

                    <div className="w-full text-left my-4 flex justify-center items-center gap-x-4">
                      <button
                        onClick={() => handleAddService(serv)}
                        className="text-white font-semibold bg-[#0a2c5a] px-4 py-1 rounded-full hover:bg-blue-800 transition-all"
                      >
                        Add Services
                      </button>
                      <button
                        onClick={() => handleReadMore(serv)}
                        className="mx-5 text-white font-semibold bg-[#0a2c5a] px-4 py-1 rounded-full hover:bg-blue-800 transition-all"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Render the single Order Summary for added services */}
        {addedServices.length > 0 && (
          <div className="card w-full max-w-[400px] border-[#0a2c5a] border-2 h-auto overflow-auto  rounded mt-4 mx-4">
            <h1 className="font-semibold text-xl p-4">Order Summary</h1>
            <hr />
            <div className="p-4 overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
              {addedServices.map((service, idx) => (
                <div key={idx} className="flex justify-between">
                  <p className="font-semibold text-left leading-10">{service.heading}</p>
                  <p className="text-left mt-2 font-bold">₹{service.price}</p>

                </div>
              ))}
              <hr />
              <div className="flex justify-between p-4">
                <p className=" font-semibold mx-[-10px]">Total price</p>
                <p className="font-bold mx-[-20px]">₹{totalPrice}</p>
              </div>
            </div>
          </div>
        )}


        {/* Modal for "Read More" */}
        {showModal && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-[800px] w-full max-h-full h-[90vh] overflow-hidden">
              <div>
                <button
                  onClick={closeModal}
                  className="text-2xl border-2 hover:border-black rounded-full p-2 hover:bg-red-500 hover:text-white transition-all py-0"
                >
                  <p className="p-2 hover:font-bold">X</p>
                </button>
              </div>
              <div className="p-4 flex">
                <img src={service1} alt={selectedService.heading} className="w-full h-[200px] object-cover rounded-t-lg" />
              </div>
              <div className="modal-content overflow-y-auto max-h-[400px] mt-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300">
                <h3 className="text-xl font-semibold">{selectedService.heading}</h3>
                <ul className="mt-4 list-disc list-inside">
                  {selectedService.detaildesc.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p className="mt-4">Price: {selectedService.price}</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal for "Add Services" */}
        {showAddServiceModal && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-[800px] w-full max-h-full h-[300px] overflow-hidden">
              <div>
                <button
                  onClick={closeAddServiceModal}
                  className="text-2xl border-2 hover:border-black rounded-full p-2 hover:bg-red-500 hover:text-white transition-all py-0"
                >
                  <p className="p-2 hover:font-bold">X</p>
                </button>
              </div>
              <div className="p-4 flex">
                {/* <img src={service1} alt={selectedService.heading} className="w-full h-[200px] object-cover rounded-t-lg" /> */}
              </div>
              <div className="modal-content overflow-y-auto max-h-[400px] mt-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedService.heading}</h3>
                    <ul>
                      {selectedService.desc.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="mt-4">Price: {selectedService.price}</p>
                  </div>
                  <div className="mb-11 px-7">
                    <button
                      onClick={handleAddServiceChange}
                      className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-all"
                    >
                      Add
                    </button>
                    {isAddingService && (
                      <div className="mt-4 flex justify-end overflow-auto ">
                        <h3 className="text-lg  font-bold p-4">Total Price: {totalPrice}</h3>
                        <button className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-700 transition-all ml-4">
                          Proceed
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}






      </div>

      {/* Scrollable Services Section */}
      <div className="p-8 bg-terniary w-full flex justify-center">
        <div className="flex overflow-x-scroll gap-x-10 w-full max-w-[1200px] p-4 px-8">
          {services.map((item, i) => (
            <div key={i} className="grid rounded-tl-lg rounded-lg overflow-hidden place-items-center w-60 shrink-0 border-2 border-primary">
              <div className="w-full">
                <img src={service1} alt="" className="w-full" />
              </div>
              <div className="bg-white w-full text-left p-2">
                <p className="text-sm p-1 px-2 text-left text-primary font-semibold">{item.heading}</p>
                <button
                  className="text-white text-sm bg-[#0a2c5a] rounded-sm text-left hover:bg-blue-800 transition-all px-2 py-1 ml-2 my-2"
                onClick={() => handleAddService(item)}
                >
                  Add Service
                </button>
                <button
                  className="text-white text-sm bg-[#0a2c5a] rounded-sm text-left hover:bg-blue-800 transition-all px-2 py-1 ml-2 my-2"
                  onClick={() => handleReadMore(item)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form for Adding a Service */}
      <div className="flex justify-center items-center w-1/2">
        <form className="flex flex-col px-4 py-4 gap-y-4 text-primary max-w-[500px] w-full" >
          <div className="relative">
            <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
            <input type="number" name='phone' placeholder='Your Phone Number' className='w-full py-2 px-4 pl-10 rounded-full border-primary border' value={form.phone} />
          </div>
          <div className="relative">
            <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
            <input type="text" name='location' placeholder='Your Location' className='w-full py-2 px-4 pl-10 rounded-full border-primary border' value={form.location} />
          </div>
          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select name="type" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={form.type}>
              <option value="">-- Ac Type --</option>
              <option value="split">Split AC</option>
              <option value="window">Window Ac</option>
              <option value="Floor Mounted Ac">Floor Mounted Ac</option>
              <option value="Hybrid">Hybrid /Dual Ac</option>
            </select>
          </div>

          <div className="relative">
            <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
            <select name="service" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
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
              <select name="repairInspection" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={form.repairInspection}>
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
            <select name="brand" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={form.brand}>
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
              className="w-full py-2 px-4 rounded-full pl-10 border-primary border"

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
            <input type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border' value={form.date} />
          </div>

          <div className="">
            <button type="submit" className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
          </div>
        </form>
      </div>
      <Footer />

    </>
  );
};

export default AcService;
