import React, { useState } from "react";

const OtherServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Interior Design",
      subServices: ["Interior Paint", "Furniture Arrangement", "Lighting Design","Office ","Function Party"],
      open: false,
    },
    {
      id: 2,
      name: "AC Rent",
      subServices: ["Split AC Rent", "Window AC Rent", "Central AC Rent"],
      open: false,
    },
    {
      id: 3,
      name: "Brand of AC",
      subServices: ["Voltus","Samsung","Haier","Loyd","Whirlpool","Bluestar","Panasonic","Dakin"],
      open: false,
    },
    
  ]);

  // Toggle function to open/close sub-services
  const toggleService = (id) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id ? { ...service, open: !service.open } : service
      )
    );
  };

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">Other Services Sky Need Solutions</h2>
      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="border p-4 rounded-md shadow-sm">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleService(service.id)}
            >
              <h3 className="text-xl font-semibold">{service.name}</h3>
              {/* <span className="text-lg">
                {service.open ? "▲" : "▼"}
              </span> */}
            </div>
            {service.open && (
              <ul className="mt-1 space-y-1 pl-3 ">
                {service.subServices.map((subService, index) => (
                  <li key={index} className="text-black-500">
                    {subService}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
