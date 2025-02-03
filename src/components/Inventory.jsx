// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import CustomerInventory from './CustomerInventory';
// import { ListContext } from '../Household';
// import { Link, useNavigate } from 'react-router-dom';

// export let InvetoryContext = React.createContext();

// export default function Inventory({ inventoryItem, context, onImageClick }) {
//   const [inventory, setInvetory] = useState(inventoryItem);
//   const [totalItem, setTotalItem] = useState(0);
//   const [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context);
//   const [showForm, setShowForm] = useState(false);
//   const [showSummary, setShowSummary] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [formData, setFormData,] = useState({
//     name: '',
//     phoneNumber: '',
//     shiftingDate: '',
//   });
//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     phoneNumber: "",
//   });

//   const [imageModalOpen, setImageModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [customerInventory, setCustomerInventory] = useState([]);
//   const navigate = useNavigate();


//   // Validation Functions
//   const validateName = (name) => {
//     const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
//     return nameRegex.test(name);
//   };

//   const validatePhoneNumber = (phone) => {
//     const phoneRegex = /^[0-9]{10}$/; // Only 10 digits
//     return phoneRegex.test(phone);
//   };

  

//   // Fetch data from the backend
//   async function fetchCustomerInventory() {
//     try {
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched data:', data);

//         // Ensure that the fetched data is an array
//         if (Array.isArray(data)) {
//           setCustomerInventory(data);
//         } else {
//           setCustomerInventory([]); // Set an empty array if the data isn't in the correct format
//         }
//       } else {
//         alert('Error: Unable to fetch data. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('An error occurred while fetching data. Please try again.');
//     }
//   }

//   // Save customer inventory
//   function saveCustomerInventory() {
//     setCustomerInventory(customerList);
//     setShowForm(true);
//   }

  
//   function cancelForm() {
//     setShowForm(false);
//     setFormData({ name: '', phoneNumber: '', shiftingDate: '' });
//   }

//   async function handleFormSubmit(e) {
//     e.preventDefault();
  
//     // Perform form validation
//     let errors = {};
  
//     // Validate name
//     if (!validateName(formData.name)) {
//       errors.name = "Name should only contain letters.";
//     }
  
//     // Validate phone number (without +91)
//     if (!validatePhoneNumber(formData.phoneNumber)) {
//       errors.phoneNumber = "Phone number must be 10 digits.";
//     }
  
//     if (Object.keys(errors).length === 0) {
//       // If there are no errors, proceed to hide the form and show the summary
//       setShowForm(false);  // Hide the form
//       setShowSummary(true); // Show the summary
  
//       // Optionally, log the form data or send it to a server
//       console.log("Form submitted:", formData);
//     } else {
//       // Set errors if validation fails
//       setFormErrors(errors);
//     }
//   }

//   async function handleSummaryClose() {
//     try {
//       // Fetch any necessary data before submitting
//       await fetchCustomerInventory();

//       // Prepare payload for each sub-item
//       const payload = customerInventory.flatMap((item) =>
//         item.subItem.map((subItem) => ({
//           customer_name: formData.name,
//           phone_number: formData.phoneNumber,
//           shifting_date: formData.shiftingDate,
//           main_item: item.mainItem,
//           sub_item: subItem.name,
//           quantity: subItem.quantity,
//         }))
//       );

//       console.log('Payload to be sent:', payload);

//       // Send the data to the backend
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log('Response from server:', responseData);

//         if (responseData.status === 'success') {
//           setShowSummary(false);
//           setShowThankYou(true); // Show thank you page
//         } else {
//           alert(`Error: ${responseData.message}`);
//         }
//       } else {
//         alert('Error: Unable to submit the form. Please try again later.');
//       }
//     } catch (error) {
//       console.error('An error occurred during submission:', error);
//       alert('An error occurred while submitting the form. Please try again.');
//     }
//   }

//   function activeItem(index, e) {
//     const updatedInventory = inventory.map((item, i) => ({
//       ...item,
//       active: i === index,
//     }));
//     setInvetory(updatedInventory);
//   }

//   useEffect(() => {
//     const getTotalItem = () => {
//       setTotalItem(
//         customerList.reduce((total, item) => total + item.subItem[0].quantity, 0)
//       );
//     };
//     getTotalItem();
//   }, [customerList]);
  
//   function handleImageClick(imageUrl) {
//     setSelectedImage(imageUrl);
//     setImageModalOpen(true); // Open modal with the clicked image
//   }


//   return (
//     <div className="w-full flex flex-col max-w-[600px] h-full max-h-[700px] bg-white rounded-lg overflow-hidden relative loadComponent mx-4 item-center">
//       <div className="flex-2 shrink-0">
//         <div className="text-center font-semibold text-white bg-primary py-4 px-0 relative">
//           <Link
//             to={'/'}
//             className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full"
//           >
//             <i className="fa-solid fa-arrow-left "></i>
//           </Link>
//           <h4 className="text-xl max-[498px]:text-lg ">Customize Inventory</h4>
//         </div>
//         <div className="flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold max-[490px]:gap-x-2">
//           {inventory.map((item, i) => (
//             <p
//               key={i}
//               className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${
//                 item.active ? 'activeDropdown' : ''
//               } shrink-0`}
//               onClick={(e) => {
//                 activeItem(i, e);
//               }}
//             >
//               {item.mainItem}
//             </p>
//           ))}
//         </div>
//       </div>

//       <InvetoryContext.Provider value={[inventory, setInvetory, setTotalItem, totalItem]}>
//         <div className="m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20">
//           {inventory.map((item, i) => {
//             if (item.active) {
//               return <Dropdown key={i} item={item} topLevel={i} context={InvetoryContext} context2={context} onImageClick={handleImageClick} />;
//             }
//           })}
//         </div>
//         {customerInventoryDisplay && <CustomerInventory context2={context} />}
//       </InvetoryContext.Provider>

//       {/* Modal for image display */}
//       {imageModalOpen && selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg">
//             <button className="absolute top-2 right-2 text-white" onClick={() => setImageModalOpen(false)}>
//               <i className="fa-solid fa-times"></i>
//             </button>
//             <img src={selectedImage} alt="Selected" className="max-w-full max-h-96 object-contain" />
//           </div>
//         </div>
//       )}

//       <div className="flex justify-between px-8 py-4 bg-primary items-center absolute w-full bottom-0 left-0">
//         <h4 className="text-lg text-white">
//           Total Item = <span className="text-gray-400">{totalItem}</span>
//         </h4>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={() => {
//             setcustomerInventoryDisplay(!customerInventoryDisplay);
//           }}
//         >
//           Check List
//         </button>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={saveCustomerInventory}
//         >
//           Continue
//         </button>
//       </div>

//       {/* Form Popup */}
//       {showForm && (
//        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//        <div className="bg-white p-6 rounded-lg shadow-lg">
//          <h4 className="text-lg font-bold mb-4">Fill Out Your Details</h4>
//          <form onSubmit={handleFormSubmit}>
//            {/* Name Field */}
//            <div className="relative mb-4">
//              <input
//                type="text"
//                placeholder="Name"
//                className="border w-full p-2 mb-4 rounded-full border-PeriwinklePurpleDark"
//                value={formData.name}
//                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//              />
//              {formErrors.name && (
//                <span className="text-red-500 text-sm">{formErrors.name}</span>
//              )}
//            </div>
     
//            {/* Phone Number Field */}
//            <div className="relative mb-4">
//              <label htmlFor="phoneNumber" className="block text-PeriwinklePurpleDark font-semibold mb-1">
//                Phone
//              </label>
//              <div className="flex items-center">
//                {/* +91 Prefix as Static Element */}
//                <span className="px-4 py-2 bg-gray-200 rounded-l-full border border-PeriwinklePurpleDark text-PeriwinklePurpleDark">
//                  +91
//                </span>
//                {/* Phone Number Input */}
//                <input
//                  type="tel"
//                  name="phoneNumber"
//                  id="phoneNumber"
//                  placeholder="Enter your phone number"
//                  value={formData.phoneNumber}
//                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//                  maxLength={10} // Limit the user to 10 digits
//                  required
//                  className="w-full py-2 px-4 rounded-r-full border-PeriwinklePurpleDark border"
//                />
//              </div>
//              {formErrors.phoneNumber && (
//                <span className="text-red-500 text-sm">{formErrors.phoneNumber}</span>
//              )}
//            </div>
     
//            {/* Shifting Date Field */}
//            <div className="relative mb-4">
//              <label
//                htmlFor="shiftingDate"
//                className="block text-PeriwinklePurpleDark font-semibold mb-1"
//              >
//                Shifting Date
//              </label>
//              <div className="relative">
//                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
//                <input
//                required
//                  type="date"
//                  name="date"
//                  placeholder="Shifting Date"
//                  className="w-full p-2 pl-10 border-PeriwinklePurpleDark border rounded-full"
//                  value={formData.shiftingDate}
//                   onClick={(e) => e.target.showPicker()} 
//                  onChange={(e) => setFormData({ ...formData, shiftingDate: e.target.value })}
//                />
//              </div>
//            </div>
     
//            {/* Action Buttons */}
//            <div className="flex justify-end gap-4">
//              <button
//                type="button"
//                className="px-4 py-2 bg-gray-300 rounded"
//                onClick={cancelForm}
//              >
//                Cancel
//              </button>
//              <button
//                type="submit"
//                className="px-4 py-2 bg-green-500 text-white rounded"
//              >
//                Submit
//              </button>
//            </div>
//          </form>
//        </div>
//      </div>
//       )}

//       {/* Inventory Summary */}
//       {showSummary && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-[800px] w-full">
//             <h4 className="text-lg font-bold mb-4">Customer Inventory Summary</h4>
//             <div className="mb-4">
//               <h5 className="text-lg font-semibold">Form Details:</h5>
//               <p>
//                 <strong>Name:</strong> {formData.name}
//               </p>
//               <p>
//                 <strong>Phone Number:</strong> {formData.phoneNumber}
//               </p>
//               <p>
//                 <strong>Shifting Date:</strong> {formData.shiftingDate}
//               </p>
//             </div>

//             <table className="table-auto w-full border-collapse mb-4">
//               <thead>
//                 <tr>
//                   <th className="border px-4 py-2">S. No.</th>
//                   <th className="border px-4 py-2">Main Item</th>
//                   <th className="border px-4 py-2">Sub-item</th>
//                   <th className="border px-4 py-2">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Ensure that customerInventory is an array before mapping */}
//                 {Array.isArray(customerInventory) && customerInventory.length > 0 ? (
//                   customerInventory.map((item, idx) =>
//                     item.subItem.map((sub, subIdx) => (
//                       <tr key={`${idx}-${subIdx}`} className="hover:bg-gray-100">
//                         <td className="border px-4 py-2">{idx + 1}</td>
//                         <td className="border px-4 py-2">{item.mainItem}</td>
//                         <td className="border px-4 py-2">{sub.name}</td>
//                         <td className="border px-4 py-2">{sub.quantity}</td>
//                       </tr>
//                     ))
//                   )
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center">
//                       No inventory data available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             <div className="flex justify-end mt-4">
//               <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSummaryClose}>
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Thank You Page */}
//       {showThankYou && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-bold">Thank You!</h4>
//             <p>Your inventory has been successfully submitted.</p>
//             <div className="flex justify-center mt-4">
//               {/* Change button text to "OK" and navigate to home */}
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//                 onClick={() => navigate('/')}
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import CustomerInventory from './CustomerInventory';
// import { ListContext } from '../Household';
// import { Link, useNavigate } from 'react-router-dom';

// export let InvetoryContext = React.createContext();

// export default function Inventory({ inventoryItem, context, onImageClick }) {
//   const [inventory, setInvetory] = useState(inventoryItem);
//   const [totalItem, setTotalItem] = useState(0);
//   const [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context);
//   const [showForm, setShowForm] = useState(false);
//   const [showSummary, setShowSummary] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [formData, setFormData] = useState({
//     phoneNumber: '',
//     otp: '', // Only phone number and OTP
//   });

//   const [imageModalOpen, setImageModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [customerInventory, setCustomerInventory] = useState([]);
//   const [otpSent, setOtpSent] = useState(false); // State to track OTP sent status
//   const [otpError, setOtpError] = useState(''); // Error state for OTP
//   const navigate = useNavigate();

//   // Fetch data from the backend
//   async function fetchCustomerInventory() {
//     try {
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched data:', data);

//         // Ensure that the fetched data is an array
//         if (Array.isArray(data)) {
//           setCustomerInventory(data);
//         } else {
//           setCustomerInventory([]); // Set an empty array if the data isn't in the correct format
//         }
//       } else {
//         alert('Error: Unable to fetch data. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('An error occurred while fetching data. Please try again.');
//     }
//   }

//   // Save customer inventory
//   function saveCustomerInventory() {
//     setCustomerInventory(customerList);
//     setShowForm(true);
//   }

//   function cancelForm() {
//     setShowForm(false);
//     setFormData({ phoneNumber: '', otp: '' });
//     setOtpSent(false); // Reset OTP state
//   }

//   async function handleFormSubmit(e) {
//     e.preventDefault();
//     if (!otpSent) {
//       // Send OTP if not sent already
//       try {
//         const response = await axios.post('http://localhost/json.php/send_otp.php', {
//           phoneNumber: formData.phoneNumber, // Send phone number to backend for OTP generation
//         });

//         if (response.data.status === 'success') {
//           setOtpSent(true); // Mark OTP as sent
//         } else {
//           alert('Error sending OTP. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error sending OTP:', error);
//         alert('Error sending OTP. Please try again.');
//       }
//     } else {
//       // Verify OTP
//       try {
//         const response = await axios.post('http://localhost/json.php/velidate_otp.php', {
//           phoneNumber: formData.phoneNumber,
//           otp: formData.otp, // OTP entered by the user
//         });

//         if (response.data.status === 'success') {
//           setShowForm(false);
//           setShowSummary(true); // Proceed with the summary page
//         } else {
//           setOtpError('Invalid OTP. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error verifying OTP:', error);
//         alert('Error verifying OTP. Please try again.');
//       }
//     }
//   }

//   async function handleSummaryClose() {
//     try {
//       // Fetch any necessary data before submitting
//       await fetchCustomerInventory();

//       // Prepare payload for each sub-item
//       const payload = customerInventory.flatMap((item) =>
//         item.subItem.map((subItem) => ({
//           phone_number: formData.phoneNumber,
//           main_item: item.mainItem,
//           sub_item: subItem.name,
//           quantity: subItem.quantity,
//         }))
//       );

//       console.log('Payload to be sent:', payload);

//       // Send the data to the backend
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log('Response from server:', responseData);

//         if (responseData.status === 'success') {
//           setShowSummary(false);
//           setShowThankYou(true); // Show thank you page
//         } else {
//           alert(`Error: ${responseData.message}`);
//         }
//       } else {
//         alert('Error: Unable to submit the form. Please try again later.');
//       }
//     } catch (error) {
//       console.error('An error occurred during submission:', error);
//       alert('An error occurred while submitting the form. Please try again.');
//     }
//   }

//   function activeItem(index, e) {
//     const updatedInventory = inventory.map((item, i) => ({
//       ...item,
//       active: i === index,
//     }));
//     setInvetory(updatedInventory);
//   }

//   useEffect(() => {
//     const getTotalItem = () => {
//       setTotalItem(
//         customerList.reduce((total, item) => total + item.subItem[0].quantity, 0)
//       );
//     };
//     getTotalItem();
//   }, [customerList]);

//   function handleImageClick(imageUrl) {
//     setSelectedImage(imageUrl);
//     setImageModalOpen(true); // Open modal with the clicked image
//   }

//   return (
//     <div className="w-full flex flex-col max-w-[600px] h-full max-h-[700px] bg-white rounded-lg overflow-hidden relative loadComponent mx-4 item-center">
//       <div className="flex-2 shrink-0">
//         <div className="text-center font-semibold text-white bg-primary py-4 px-0 relative">
//           <Link
//             to={'/'}
//             className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full"
//           >
//             <i className="fa-solid fa-arrow-left "></i>
//           </Link>
//           <h4 className="text-xl max-[498px]:text-lg ">Customize Inventory</h4>
//         </div>
//         <div className="flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold max-[490px]:gap-x-2">
//           {inventory.map((item, i) => (
//             <p
//               key={i}
//               className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${item.active ? 'activeDropdown' : ''} shrink-0`}
//               onClick={(e) => {
//                 activeItem(i, e);
//               }}
//             >
//               {item.mainItem}
//             </p>
//           ))}
//         </div>
//       </div>

//       <InvetoryContext.Provider value={[inventory, setInvetory, setTotalItem, totalItem]}>
//         <div className="m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20">
//           {inventory.map((item, i) => {
//             if (item.active) {
//               return <Dropdown key={i} item={item} topLevel={i} context={InvetoryContext} context2={context} onImageClick={handleImageClick} />;
//             }
//           })}
//         </div>
//         {customerInventoryDisplay && <CustomerInventory context2={context} />}
//       </InvetoryContext.Provider>

//       {/* Modal for image display */}
//       {imageModalOpen && selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg">
//             <button className="absolute top-2 right-2 text-white" onClick={() => setImageModalOpen(false)}>
//               <i className="fa-solid fa-times"></i>
//             </button>
//             <img src={selectedImage} alt="Selected" className="max-w-full max-h-96 object-contain" />
//           </div>
//         </div>
//       )}

//       <div className="flex justify-between px-8 py-4 bg-primary items-center absolute w-full bottom-0 left-0">
//         <h4 className="text-lg text-white">
//           Total Item = <span className="text-gray-400">{totalItem}</span>
//         </h4>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={() => {
//             setcustomerInventoryDisplay(!customerInventoryDisplay);
//           }}
//         >
//           Check List
//         </button>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={saveCustomerInventory}
//         >
//           Continue
//         </button>
//       </div>

//       {/* Form Popup */}
//       {showForm && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-lg font-bold mb-4">Enter Phone Number & OTP</h4>
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="border w-full p-2 mb-4"
//                 value={formData.phoneNumber}
//                 onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//               />
//               {/* OTP Field */}
//               {otpSent && (
//                 <div>
//                   <input
//                     type="text"
//                     placeholder="Enter OTP"
//                     className="border w-full p-2 mb-4"
//                     value={formData.otp}
//                     onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
//                   />
//                   {otpError && <p className="text-red-500">{otpError}</p>}
//                 </div>
//               )}
//               <div className="flex justify-end gap-4">
//                 <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={cancelForm}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
//                   {otpSent ? 'Verify OTP' : 'Send OTP'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Inventory Summary */}
//       {showSummary && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-[800px] w-full">
//             <h4 className="text-lg font-bold mb-4">Customer Inventory Summary</h4>
//             <div className="mb-4">
//               <h5 className="text-lg font-semibold">Form Details:</h5>
//               <p>
//                 <strong>Phone Number:</strong> {formData.phoneNumber}
//               </p>
//             </div>

//             <table className="table-auto w-full border-collapse mb-4">
//               <thead>
//                 <tr>
//                   <th className="border px-4 py-2">S. No.</th>
//                   <th className="border px-4 py-2">Main Item</th>
//                   <th className="border px-4 py-2">Sub-item</th>
//                   <th className="border px-4 py-2">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Ensure that customerInventory is an array before mapping */}
//                 {Array.isArray(customerInventory) && customerInventory.length > 0 ? (
//                   customerInventory.map((item, idx) =>
//                     item.subItem.map((sub, subIdx) => (
//                       <tr key={`${idx}-${subIdx}`} className="hover:bg-gray-100">
//                         <td className="border px-4 py-2">{idx + 1}</td>
//                         <td className="border px-4 py-2">{item.mainItem}</td>
//                         <td className="border px-4 py-2">{sub.name}</td>
//                         <td className="border px-4 py-2">{sub.quantity}</td>
//                       </tr>
//                     ))
//                   )
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center">
//                       No inventory data available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             <div className="flex justify-end mt-4">
//               <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSummaryClose}>
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Thank You Page */}
//       {showThankYou && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-bold">Thank You!</h4>
//             <p>Your inventory has been successfully submitted.</p>
//             <div className="flex justify-center mt-4">
//               {/* Change button text to "OK" and navigate to home */}
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//                 onClick={() => navigate('/')}
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import CustomerInventory from './CustomerInventory';
// import { ListContext } from '../Household';
// import { Link, useNavigate } from 'react-router-dom';

// export let InvetoryContext = React.createContext();

// export default function Inventory({ inventoryItem, context, onImageClick }) {
//   const [inventory, setInvetory] = useState(inventoryItem);
//   const [totalItem, setTotalItem] = useState(0);
//   const [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context);
//   const [showForm, setShowForm] = useState(false);
//   const [showSummary, setShowSummary] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [formData, setFormData,] = useState({
//     name:'',
//     phoneno:'',
//     shiftingdate:'',
//     timeSlot:'',
//     mainItem: '',
//     subItemName: '',
//     subItemQuantity: ''
//   });
//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     phoneNumber: "",
//   });
//   // const [customerInventory, setCustomerInventory] = useState([]);
// const [editItemIndex, setEditItemIndex] = useState(null);
// const [editSubItemIndex, setEditSubItemIndex] = useState(null);

//   const [imageModalOpen, setImageModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [customerInventory, setCustomerInventory] = useState([]);
//   const navigate = useNavigate();


//   // Validation Functions
//   const validateName = (name) => {
//     const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
//     return nameRegex.test(name);
//   };

//   const validatePhoneNumber = (phone) => {
//     const phoneRegex = /^[0-9]{10}$/; // Only 10 digits
//     return phoneRegex.test(phone);
//   };

  

//   // Fetch data from the backend
//   async function fetchCustomerInventory() {
//     try {
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Fetched data:', data);

//         // Ensure that the fetched data is an array
//         if (Array.isArray(data)) {
//           setCustomerInventory(data);
//         } else {
//           setCustomerInventory([]); // Set an empty array if the data isn't in the correct format
//         }
//       } else {
//         alert('Error: Unable to fetch data. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('An error occurred while fetching data. Please try again.');
//     }
//   }

//   // Save customer inventory
//   function saveCustomerInventory() {
//     setCustomerInventory(customerList);
//     setShowForm(true);
//   }

  
//   function cancelForm() {
//     setShowForm(false);
//     setFormData({ name: '', phoneNumber: '', shiftingDate: '', timeSlot:'' });
//   }

//   async function handleFormSubmit(e) {
//     e.preventDefault();
  
//     // Perform form validation
//     let errors = {};
  
//     // Validate name
//     if (!validateName(formData.name)) {
//       errors.name = "Name should only contain letters.";
//     }
  
//     // Validate phone number (without +91)
//     if (!validatePhoneNumber(formData.phoneNumber)) {
//       errors.phoneNumber = "Phone number must be 10 digits.";
//     }
  
//     if (Object.keys(errors).length === 0) {
//       // If there are no errors, proceed to hide the form and show the summary
//       setShowForm(false);  // Hide the form
//       setShowSummary(true); // Show the summary
  
//       // Optionally, log the form data or send it to a server
//       console.log("Form submitted:", formData);
//     } else {
//       // Set errors if validation fails
//       setFormErrors(errors);
//     }
//   }

//   async function handleSummaryClose() {
//     try {
//       // Fetch any necessary data before submitting
//       await fetchCustomerInventory();

//       // Prepare payload for each sub-item
//       const payload = customerInventory.flatMap((item) =>
//         item.subItem.map((subItem) => ({
//           customer_name: formData.name,
//           phone_number: formData.phoneNumber,
//           shifting_date: formData.shiftingDate,
//           time_slot:formData.timeSlot,
//           main_item: item.mainItem,
//           sub_item: subItem.name,
//           quantity: subItem.quantity,
//         }))
//       );

//       console.log('Payload to be sent:', payload);

//       // Send the data to the backend
//       const response = await fetch('http://localhost/json.php/save_inventory.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log('Response from server:', responseData);

//         if (responseData.status === 'success') {
//           setShowSummary(false);
//           setShowThankYou(true); // Show thank you page
//         } else {
//           alert(`Error: ${responseData.message}`);
//         }
//       } else {
//         alert('Error: Unable to submit the form. Please try again later.');
//       }
//     } catch (error) {
//       console.error('An error occurred during submission:', error);
//       alert('An error occurred while submitting the form. Please try again.');
//     }
//   }

  
//   function handleEditItem(index, subIndex) {
//     // Find the item and sub-item from the indices
//     const item = customerInventory[index];
//     const subItem = item.subItem[subIndex];
  
//     // Set the form data with the sub-item details for editing
//     setFormData({
//       mainItem: item.mainItem, // Assuming you might want to edit this as well
//       subItemName: subItem.name,
//       subItemQuantity: subItem.quantity
//     });
  
//      // Set the indexes for the item and sub-item to be edited
//   setEditItemIndex(index);
//   setEditSubItemIndex(subIndex);
//   setShowSummary(true);


//   // Show the form for editing
//   setShowSummary(false);
// }
// function handleSaveChanges() {
//   const updatedCustomerInventory = [...customerInventory];

//   // Update the specific sub-item
//   updatedCustomerInventory[editItemIndex].subItem[editSubItemIndex] = {
//     name: formData.subItemName,
//     quantity: formData.subItemQuantity
//   };

//   // Set the updated customer inventory
//   setCustomerInventory(updatedCustomerInventory);

//   // Close the form and show the summary
//   setShowForm(false);
//   setShowSummary(true);
// }

//   function activeItem(index, e) {
//     const updatedInventory = inventory.map((item, i) => ({
//       ...item,
//       active: i === index,
//     }));
//     setInvetory(updatedInventory);
    
//   }

//   useEffect(() => {
//     const getTotalItem = () => {
//       setTotalItem(
//         customerList.reduce((total, item) => total + item.subItem[0].quantity, 0)
//       );
//     };
//     getTotalItem();
//   }, [customerList]);
  
//   function handleImageClick(imageUrl) {
//     setSelectedImage(imageUrl);
//     setImageModalOpen(true); // Open modal with the clicked image
//   }


//   return (
//     <div className="w-full flex flex-col max-w-[600px] h-full max-h-[700px] bg-white rounded-lg overflow-hidden relative loadComponent mx-4 item-center">
//       <div className="flex-2 shrink-0">
//         <div className="text-center font-semibold text-white bg-primary py-4 px-0 relative">
//           <Link
//             to={'/'}
//             className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full"
//           >
//             <i className="fa-solid fa-arrow-left "></i>
//           </Link>
//           <h4 className="text-xl max-[498px]:text-lg ">Customize Inventory</h4>
//         </div>
//         <div className="flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold max-[490px]:gap-x-2">
//           {inventory.map((item, i) => (
//             <p
//               key={i}
//               className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${
//                 item.active ? 'activeDropdown' : ''
//               } shrink-0`}
//               onClick={(e) => {
//                 activeItem(i, e);
//               }}
//             >
//               {item.mainItem}
//             </p>
//           ))}
//         </div>
//       </div>

//       <InvetoryContext.Provider value={[inventory, setInvetory, setTotalItem, totalItem]}>
//         <div className="m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20">
//           {inventory.map((item, i) => {
//             if (item.active) {
//               return <Dropdown key={i} item={item} topLevel={i} context={InvetoryContext} context2={context} onImageClick={handleImageClick} />;
//             }
//           })}
//         </div>
//         {customerInventoryDisplay && <CustomerInventory context2={context} />}
//       </InvetoryContext.Provider>

//       {/* Modal for image display */}
//       {imageModalOpen && selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg">
//             <button className="absolute top-2 right-2 text-white" onClick={() => setImageModalOpen(false)}>
//               <i className="fa-solid fa-times"></i>
//             </button>
//             <img src={selectedImage} alt="Selected" className="max-w-full max-h-96 object-contain" />
//           </div>
//         </div>
//       )}

//       <div className="flex justify-between px-8 py-4 bg-primary items-center absolute w-full bottom-0 left-0">
//         <h4 className="text-lg text-white">
//           Total Item = <span className="text-gray-400">{totalItem}</span>
//         </h4>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={() => {
//             setcustomerInventoryDisplay(!customerInventoryDisplay);
//           }}
//         >
//           Check List
//         </button>
//         <button
//           className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
//           onClick={saveCustomerInventory}
//         >
//           Continue
//         </button>
//       </div>

//       {/* Form Popup */}
//       {showForm && (
//        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//        <div className="bg-white p-6 rounded-lg shadow-lg">
//          <h4 className="text-lg font-bold mb-4">Fill Out Your Details</h4>
//          <form onSubmit={handleFormSubmit}>
//            {/* Name Field */}
//            <div className="relative mb-4">
//              <input
//                type="text"
//                placeholder="Name"
//                className="border w-full p-2 mb-4 rounded-full border-PeriwinklePurpleDark"
//                value={formData.name}
//                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//              />
//              {formErrors.name && (
//                <span className="text-red-500 text-sm">{formErrors.name}</span>
//              )}
//            </div>
     
//            {/* Phone Number Field */}
//            <div className="relative mb-4">
//              <div className="flex items-center">
//                {/* +91 Prefix as Static Element */}
//                <span className="px-4 py-2 bg-gray-200 rounded-l-full border border-PeriwinklePurpleDark text-PeriwinklePurpleDark">
//                  +91
//                </span>
//                {/* Phone Number Input */}
//                <input
//                  type="tel"
//                  name="phoneNumber"
//                  id="phoneNumber"
//                  placeholder="Enter your phone number"
//                  value={formData.phoneNumber}
//                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//                  maxLength={10} // Limit the user to 10 digits
//                  required
//                  className="w-full py-2 px-4 rounded-r-full border-PeriwinklePurpleDark border"
//                />
//              </div>
//              {formErrors.phoneNumber && (
//                <span className="text-red-500 text-sm">{formErrors.phoneNumber}</span>
//              )}
//            </div>
     
//            {/* Shifting Date Field */}
//            <div className="relative mb-4">
//              <label
//                htmlFor="shiftingDate"
//                className="block text-PeriwinklePurpleDark font-semibold mb-1"
//              >
//                Shifting Date
//              </label>
//              <div className="relative">
//                <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
//                <input
//                required
//                  type="date"
//                  name="date"
//                  placeholder="Shifting Date"
//                  className="w-full p-2 pl-10 border-PeriwinklePurpleDark border rounded-full"
//                  value={formData.shiftingDate}
//                  onClick={(e) => e.target.showPicker()} 
//                  onChange={(e) => setFormData({ ...formData, shiftingDate: e.target.value })}
//                />
//              </div>
//            </div>
//            {/* Timing Slot Field */}
//            <div className="relative mb-4">
//   <label htmlFor="timeSlot" className="block text-PeriwinklePurpleDark font-semibold mb-1">
//     Select Time Slot
//   </label>
//   <div className="relative">
//     <select
//       id="timeSlot"
//       className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-2 pl-10 border-PeriwinklePurpleDark border rounded-full"
//       value={formData.timeSlot}
//       onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
//       required
//     >
//       <option value="">-- Select a Time Slot --</option>
//       <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
//       <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
//       <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
//       <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
//       {/* Add more time slots here */}
//     </select>
//   </div>
// </div>


//            {/* Action Buttons */}
//            <div className="flex justify-end gap-4">
//              <button
//                type="button"
//                className="px-4 py-2 bg-gray-300 rounded"
//                onClick={cancelForm}
//              >
//                Cancel
//              </button>
//              <button
//                type="submit"
//                className="px-4 py-2 bg-green-500 text-white rounded"
//              >
//                Submit
//              </button>
//            </div>
//          </form>
//        </div>
//      </div>
//       )}

//       {/* Inventory Summary */}
//       {showSummary && (
//        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//        <div className="bg-white p-6 rounded-lg shadow-lg max-w-[800px] w-full">
//          <h4 className="text-lg font-bold mb-4">Customer Inventory Summary</h4>
//          <div className="mb-4">
//            <h5 className="text-lg font-semibold">Form Details:</h5>
//            <p><strong>Name:</strong> {formData.name}</p>
//            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
//            <p><strong>Shifting Date:</strong> {formData.shiftingDate}</p>
//            <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
//          </div>
   
//          <table className="table-auto w-full border-collapse mb-4">
//            <thead>
//              <tr>
//                <th className="border px-4 py-2">S. No.</th>
//                <th className="border px-4 py-2">Main Item</th>
//                <th className="border px-4 py-2">Sub-item</th>
//                <th className="border px-4 py-2">Quantity</th>
//                <th className="border px-4 py-2">Actions</th> {/* Column for Edit button */}
//              </tr>
//            </thead>
//            <tbody>
//              {Array.isArray(customerInventory) && customerInventory.length > 0 ? (
//                customerInventory.map((item, idx) =>
//                  item.subItem.map((sub, subIdx) => (
//                    <tr key={`${idx}-${subIdx}`} className="hover:bg-gray-100">
//                      <td className="border px-4 py-2">{idx + 1}</td>
//                      <td className="border px-4 py-2">{item.mainItem}</td>
//                      <td className="border px-4 py-2">{sub.name}</td>
//                      <td className="border px-4 py-2">{sub.quantity}</td>
//                      <td className="border px-4 py-2">
//                        <button
//                          className="border-black px-4 py-1 bg-gray-200 text-black rounded-xl font-semibold cursor-pointer text-[14px] md:text-[16px] ml-1p"
//                          onClick={() => handleEditItem(idx, subIdx)} // Call edit function with indexes
//                        >
//                          Edit
//                        </button>
//                      </td>
//                    </tr>
//                  ))
//                )
//              ) : (
//                <tr>
//                  <td colSpan="5" className="text-center">
//                    No inventory data available
//                  </td>
//                </tr>
//              )}
//            </tbody>
//          </table>
   
//          {/* Show form for editing inventory */}
//          {showForm && (
//            <div className="mt-4">
//              <h4 className="text-lg font-semibold mb-4">Edit Inventory Item</h4>
//              <div>
//                <label className="block mb-2">Main Item</label>
//                <input
//                  type="text"
//                  value={formData.mainItem}
//                  onChange={(e) => setFormData({ ...formData, mainItem: e.target.value })}
//                  className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
//                />
//                <label className="block mb-2">Sub-item Name</label>
//                <input
//                  type="text"
//                  value={formData.subItemName}
//                  onChange={(e) => setFormData({ ...formData, subItemName: e.target.value })}
//                  className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
//                />
//                <label className="block mb-2">Sub-item Quantity</label>
//                <input
//                  type="number"
//                  value={formData.subItemQuantity}
//                  onChange={(e) => setFormData({ ...formData, subItemQuantity: e.target.value })}
//                  className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
//                />
//                <div className="flex justify-end mt-4">
//                  <button
//                    className="px-4 py-2 bg-green-500 text-white rounded"
//                    onClick={handleSaveChanges} // Save changes
//                  >
//                    Save Changes
//                  </button>
//                </div>
//              </div>
//            </div>
//          )}
   
//          <div className="flex justify-end mt-4">
//            <button
//              className="px-4 py-2 bg-green-500 text-white rounded"
//              onClick={handleSummaryClose}
//            >
//              Submit
//            </button>
//          </div>
//        </div>
//      </div>
      
//       )}
//       {/* Thank You Page */}
//       {showThankYou && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h4 className="text-xl font-bold">Thank You!</h4>
//             <p>Your inventory has been successfully submitted.</p>
//             <div className="flex justify-center mt-4">
//               {/* Change button text to "OK" and navigate to home */}
//               <button
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//                 onClick={() => navigate('/')}
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useContext, useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import CustomerInventory from './CustomerInventory';
import { Link, useNavigate } from 'react-router-dom';

export let InvetoryContext = React.createContext();

export default function Inventory({ inventoryItem, context, onImageClick }) {
  const [inventory, setInvetory] = useState(inventoryItem);
  const [totalItem, setTotalItem] = useState(0);
  const [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context);
  const [showForm, setShowForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    shiftingDate: '',
    timeSlot: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phoneNumber: "",
  });
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editSubItemIndex, setEditSubItemIndex] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [customerInventory, setCustomerInventory] = useState([]);
  const navigate = useNavigate();

  // Validation Functions
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    return nameRegex.test(name);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Only 10 digits
    return phoneRegex.test(phone);
  };

  // Fetch data from the backend
  async function fetchCustomerInventory() {
    try {
      const response = await fetch('http://localhost/json.php/save_inventory.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          setCustomerInventory(data);
        } else {
          setCustomerInventory([]);
        }
      } else {
        alert('Error: Unable to fetch data. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data. Please try again.');
    }
  }

  // Save customer inventory
  function saveCustomerInventory() {
    setCustomerInventory(customerList);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setFormData({ name: '', phoneNumber: '', shiftingDate: '', timeSlot: '' });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
  
    let errors = {};
  
    if (!validateName(formData.name)) {
      errors.name = "Name should only contain letters.";
    }
  
    if (!validatePhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits.";
    }
  
    if (Object.keys(errors).length === 0) {
      setShowForm(false);
      setShowSummary(true);
      console.log("Form submitted:", formData);
    } else {
      setFormErrors(errors);
    }
  }

  async function handleSummaryClose() {
    try {
      await fetchCustomerInventory();

      // Prepare payload for the database
      const inventoryDetails = customerInventory.map(item => {
        const subItems = item.subItem.map(subItem => `${subItem.name} (Qty: ${subItem.quantity})`).join(', ');
        return `${item.mainItem}: ${subItems}`;
      }).join(' | '); // Join all items with a separator

      const payload = {
        customer_name: formData.name,
        phone_number: formData.phoneNumber,
        shifting_date: formData.shiftingDate,
        time_slot: formData.timeSlot,
        inventory_details: inventoryDetails // Store the concatenated string
      };

      console.log('Payload to be sent:', payload);

      // Send the data to the backend
      const response = await fetch('http://localhost/json.php/save_inventory.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from server:', responseData);

        if (responseData.status === 'success') {
          setShowSummary(false);
          setShowThankYou(true);
        } else {
          alert(`Error: ${responseData.message}`);
        }
      } else {
        alert('Error: Unable to submit the form. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred during submission:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  }

  function handleEditItem(index, subIndex) {
    const item = customerInventory[index];
    const subItem = item.subItem[subIndex];
  
    setFormData({
      mainItem: item.mainItem,
      subItemName: subItem.name,
      subItemQuantity: subItem.quantity
    });
  
    setEditItemIndex(index);
    setEditSubItemIndex(subIndex);
    setShowSummary(true);
    setShowSummary(false);
  }

  function handleSaveChanges() {
    const updatedCustomerInventory = [...customerInventory];

    updatedCustomerInventory[editItemIndex].subItem[editSubItemIndex] = {
      name: formData.subItemName,
      quantity: formData.subItemQuantity
    };

    setCustomerInventory(updatedCustomerInventory);
    setShowForm(false);
    setShowSummary(true);
  }

  function activeItem(index, e) {
    const updatedInventory = inventory.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setInvetory(updatedInventory);
  }

  useEffect(() => {
    const getTotalItem = () => {
      setTotalItem(
        customerList.reduce((total, item) => total + item.subItem[0].quantity, 0)
      );
    };
    getTotalItem();
  }, [customerList]);
  
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight to avoid time issues when comparing


  return (
    <div className="w-full flex flex-col max-w-[700px] h-full max-h-[600px] bg-white rounded-lg overflow-hidden relative loadComponent mx-4">
      <div className="flex-2 shrink-0">
        <div className="text-center font-semibold text-white bg-primary py-4 px-0 relative">
          <Link
            to={'/'}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full"
          >
            <i className="fa-solid fa-arrow-left "></i>
          </Link>
          <h4 className="text-xl max-[498px]:text-lg ">Customize Inventory</h4>
        </div>
        <div className="flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold max-[490px]:gap-x-2">
          {inventory.map((item, i) => (
            <p
              key={i}
              className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${
                item.active ? 'activeDropdown' : ''
              } shrink-0`}
              onClick={(e) => {
                activeItem(i, e);
              }}
            >
              {item.mainItem}
            </p>
          ))}
        </div>
      </div>

      <InvetoryContext.Provider value={[inventory, setInvetory, setTotalItem, totalItem]}>
        <div className="m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20 ">
          {inventory.map((item, i) => {
            if (item.active) {
              return <Dropdown key={i} item={item} topLevel={i} context={InvetoryContext} context2={context} onImageClick={handleImageClick} />;
            }
          })}
        </div>
        {customerInventoryDisplay && <CustomerInventory context2={context} />}
      </InvetoryContext.Provider>

      {/* Modal for image display */}
      {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <button className="absolute top-2 right-2 text-white" onClick={() => setImageModalOpen(false)}>
              <i className="fa-solid fa-times"></i>
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-96 object-contain" />
          </div>
        </div>
      )}

      <div className="flex justify-between px-8 py-4 bg-primary items-center absolute w-full bottom-0 left-0">
        <h4 className="text-lg text-white">
          Total Item = <span className="text-gray-400">{totalItem}</span>
        </h4>
        <button
          className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
          onClick={() => {
            setcustomerInventoryDisplay(!customerInventoryDisplay);
          }}
        >
          Check
        </button>
        <button
          className="text-white font-bold bg-green-500 px-4 py-2 rounded-full "
          onClick={saveCustomerInventory}
        >
          Continue
        </button>
      </div>

      {/* Form Popup */}
      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-4">Fill Out Your Details</h4>
            <form onSubmit={handleFormSubmit}>
              {/* Name Field */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="border w-full p-2 mb-4 rounded-md border-PeriwinklePurpleDark"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {formErrors.name && (
                  <span className="text-red-500 text-sm">{formErrors.name}</span>
                )}
              </div>
     
              {/* Phone Number Field */}
              <div className="relative mb-4">
                <div className="flex items-center">
                  <span className="px-4 py-2 bg-gray-200 rounded-md border border-PeriwinklePurpleDark text-PeriwinklePurpleDark">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    maxLength={10}
                    required
                    className="w-full py-2 px-4 rounded-md border-PeriwinklePurpleDark border"
                  />
                </div>
                {formErrors.phoneNumber && (
                  <span className="text-red-500 text-sm">{formErrors.phoneNumber}</span>
                )}
              </div>
     
              {/* Shifting Date Field */}
              <div className="relative mb-4">
                <label
                  htmlFor="shiftingDate"
                  className="block text-PeriwinklePurpleDark font-semibold mb-1"
                >
                  Shifting Date
                </label>
                <div className="relative">
                  <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
                  <input
                    required
                    type="date"
                    name="date"
                    placeholder="Shifting Date"
                    className="w-full p-2 pl-10 border-PeriwinklePurpleDark border rounded-md"
                    value={formData.shiftingDate}
                    onClick={(e) => e.target.showPicker()} 
                    onChange={(e) => setFormData({ ...formData, shiftingDate: e.target.value })}
                    min={today.toISOString().split('T')[0]}
                  />
                </div>
              </div>
              {/* Timing Slot Field */}
              <div className="relative mb-4">
                <label htmlFor="timeSlot" className="block text-PeriwinklePurpleDark font-semibold mb-1">
                  Select Time Slot
                </label>
                <div className="relative">
                  <select
                    id="timeSlot"
                    className="w-full sm:w-3/4 md:w-full lg:w-full p-2 pl-10 border-PeriwinklePurpleDark border rounded-md"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    required
                  >
                    <option value="">-- Select a Time Slot --</option>
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                    <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={cancelForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inventory Summary */}
      {showSummary && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full h-full p-4">
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-[90vw] md:max-w-[1050px] max-h-[90vh] overflow-auto">
      <h4 className="text-lg font-bold mb-4 text-center">Customer Inventory Summary</h4>

      {/* Form Details */}
      <div className="mb-4 text-sm md:text-base">
        {/* <h5 className="text-lg font-semibold">Form Details:</h5> */}
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        <p><strong>Shifting Date:</strong> {formData.shiftingDate}</p>
        <p><strong>Time Slot:</strong> {formData.timeSlot}</p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse mb-4 text-xs md:text-sm lg:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 md:px-4 py-2">S. No.</th>
              <th className="border px-2 md:px-4 py-2">Main Item</th>
              <th className="border px-2 md:px-4 py-2">Sub-item</th>
              <th className="border px-2 md:px-4 py-2">Quantity</th>
              <th className="border px-2 md:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customerInventory) && customerInventory.length > 0 ? (
              customerInventory.map((item, idx) =>
                item.subItem.map((sub, subIdx) => (
                  <tr key={`${idx}-${subIdx}`} className="hover:bg-gray-100">
                    <td className="border px-2 md:px-4 py-2">{idx + 1}</td>
                    <td className="border px-2 md:px-4 py-2">{item.mainItem}</td>
                    <td className="border px-2 md:px-4 py-2">{sub.name}</td>
                    <td className="border px-2 md:px-4 py-2">{sub.quantity}</td>
                    <td className="border px-2 md:px-4 py-2">
                      <button
                        className="border border-gray-400 px-2 md:px-4 py-1 bg-gray-200 text-black rounded-xl font-semibold cursor-pointer text-[12px] md:text-[14px]"
                        onClick={() => handleEditItem(idx, subIdx)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">No inventory data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleSummaryClose}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}

      {/* Thank You Page */}
      {showThankYou && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Thank You!</h4>
            <p>Your inventory has been successfully submitted.</p>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => navigate('/')}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}