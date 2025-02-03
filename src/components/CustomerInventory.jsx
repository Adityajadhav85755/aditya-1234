import React, { useEffect,useContext } from "react";

export default function CustomerInventory({ context2 }) {
  let [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] =
    useContext(context2);

  // Function to remove an item from the customerList
  const handleRemoveItem = (itemIndex) => {
    const updatedList = [...customerList];
    updatedList.splice(itemIndex, 1);
    setCustomerList(updatedList);
  };

  // Prevent scrolling when the popup is open
  useEffect(() => {
    if (customerInventoryDisplay) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [customerInventoryDisplay]);

  return (
    customerInventoryDisplay && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full h-[100vh] z-50">
        {/* Popup Container */}
        <div className="w-full flex flex-col max-w-[400px] h-full max-h-[500px] bg-white bg-opacity-100 rounded-lg overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:shadow-lg p-4">
          {/* Header */}
          <div className="text-center font-semibold text-white bg-PeriwinklePurpleDark py-2">
            <h4 className="text-base">Your Inventory</h4>
          </div>

          {/* Inventory List */}
          <div className="p-4 flex flex-col gap-y-4 overflow-y-auto max-h-[400px]">
            {customerList.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                Your Cart Is Empty. Please Add Items.
              </div>
            ) : (
              customerList.map((item, i) => (
                <div
                  key={i}
                  className={`w-full bg-gray-300 text-PeriwinklePurpleDark font-semibold py-3 px-4 rounded-lg flex justify-between items-center ${
                    item.subItem[0].quantity === 0 ? "hidden" : "flex"
                  }`}
                >
                  {/* Item Name */}
                  <p>{item.subItem[0].name}</p>

                  {/* Delete Button */}
                  {/* <button
                    className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center"
                    onClick={() => handleRemoveItem(i)}
                  >
                    <i className="fa-solid fa-times"></i>
                  </button> */}
                </div>
              ))
            )}
          </div>

          {/* Close Button */}
          <div className="flex justify-center bg-PeriwinklePurpleDark py-2">
            <button
              className="text-white font-bold bg-green-500 px-4 py-1 rounded-full"
              onClick={() => setcustomerInventoryDisplay(false)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    )
  );
}
