import React, { useEffect, useState } from "react";

const OrderSummary = ({ addedServices, handleDeleteService, setShowCustomerForm }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Recalculate total price whenever addedServices changes
  useEffect(() => {
    const newTotalPrice = addedServices.reduce(
      (acc, service) => acc + service.price * service.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [addedServices]);

  if (addedServices.length === 0) return null;

  

  return (
    <div className="card w-full md:max-w-[500px] lg:max-w-[600px] xl:max-w-[500px] max-w-[350px] h-auto bg-white border-[#4f47aa] border-2 rounded mt-4 mx-4 mb-5 position-fixed md:block hidden">
      <h1 className="font-semibold text-xl p-4">Order Summary</h1>
      <hr />
      <div className="p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
        {addedServices.map((service, idx) => (
          <div key={idx} className="flex justify-between list-decimal p-2">
            <div>
              <p className="font-semibold text-left leading-10">
                {service.name} (x{service.quantity}) {/* Display service name and quantity */}
              </p>
            </div>
            <div>
              <p className="text-left mt-2 font-bold p-1">
                ₹{service.price * service.quantity}
              </p>{" "}
              {/* Display total price */}
            </div>
            {/* <div className="mt-2 mb-2">
              <button
                onClick={() => handleDeleteService(service.id)}
                className="text-white font-semibold bg-red-500 px-4 py-1 rounded-full hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div> */}
          </div>
        ))}
        <hr />
        <div className="flex flex-col justify-between p-4">
          <div className="flex justify-between">
            <p className="font-semibold mx-[-10px]">Total Price</p>
            <p className="font-extrabold mx-[-20px]">₹{totalPrice}</p>
          </div>
          {/* Proceed button */}
          <div className="flex flex-col mt-11 justify-center">
          <button
            onClick={() => setShowCustomerForm(true)}
            className="text-white font-semibold bg-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 transition-all mt-15"
          >
            Proceed
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
