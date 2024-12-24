import React, { useContext, useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import CustomerInventory from './CustomerInventory';
import { Link } from 'react-router-dom';

export let InvetoryContext = React.createContext();

export default function Inventory({ inventoryItem, context }) {
  let [inventory, setInvetory] = useState(inventoryItem);
  let [totalItem, setTotalItem] = useState(0);
  let [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context);
  
  // State for handling image modal
  let [imageModalOpen, setImageModalOpen] = useState(false);
  let [selectedImage, setSelectedImage] = useState(null);

  function saveCustomerInventory() {
    console.log(customerList);
  }

  function activeItem(index, e) {
    let updatedInventory = inventory.map((item, i) => {
      if (i === index) {
        item.active = true;
        return item;
      } else {
        item.active = false;
        return item;
      }
    });
    setInvetory(updatedInventory);
  }

  useEffect(() => {
    function getTotalItem() {
      // Placeholder for total item calculation logic
    }
    getTotalItem();
  }, [customerList]);

  // Function to handle image click
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
    setImageModalOpen(true); // Open modal with the clicked image
  }

  return (
    <div className="w-full h-full sm:h-auto sm:min-h-[90%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] flex flex-col bg-white rounded-lg overflow-hidden overflow-y-auto fixed inset-0 mx-auto p-6 shadow-lg sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
      <div className="flex-2 shrink-0">
        <div className="text-center font-semibold text-white bg-primary py-4 px-0 relative">
          <Link to="/" className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h4 className="text-xl max-[498px]:text-lg">Customize Inventory</h4>
        </div>
        <div className="flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold max-[490px]:gap-x-2">
          {inventory.map((item, i) => {
            return (
              <p
                key={i}
                className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${item.active ? 'activeDropdown' : ''} shrink-0`}
                onClick={(e) => {
                  activeItem(i, e);
                }}
              >
                {item.mainItem}
              </p>
            );
          })}
        </div>
      </div>

      <InvetoryContext.Provider value={[inventory, setInvetory, setTotalItem, totalItem]}>
        <div className="m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20">
          {inventory.map((item, i) => {
            if (item.active) {
              return (
                <Dropdown
                  key={i}
                  item={item}
                  topLevel={i}
                  context={InvetoryContext}
                  context2={context}
                  onImageClick={handleImageClick} // Pass image click handler to Dropdown
                />
              );
            }
          })}
        </div>
        {customerInventoryDisplay && <CustomerInventory context2={context} />}
      </InvetoryContext.Provider>

      {/* Modal for image display */}
      {imageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <button className="absolute top-2 right-2 text-white" onClick={() => setImageModalOpen(false)}>
              <i className="fa-solid fa-times"></i>
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-96 object-contain" />
          </div>
        </div>
      )}

      <div className="flex justify-between px-8 py-4 bg-primary items-center fixed w-full bottom-0 left-0 z-50">
        <h4 className="text-lg text-white">
          Total Item = <span className="text-gray-400">{totalItem}</span>
        </h4>
        <button
          className="text-white font-bold bg-green-500 px-4 py-2 rounded-full relative"
          onClick={() => {
            setcustomerInventoryDisplay(!customerInventoryDisplay);
          }}
        >
          Check List
          <p className={`w-3 h-3 rounded-full bg-red-600 absolute -top-1 right-1 ${(totalItem >= 1) ? 'block' : 'hidden'} checkAnimation`}></p>
        </button>
        <button className="text-white font-bold bg-green-500 px-4 py-2 rounded-full" onClick={saveCustomerInventory}>
          Continue
        </button>
      </div>
    </div>
  );
}
