import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import shifting from '../assets/images/shifting.jpg'; // Correct image path

function WareHouse() {
  const [form, setForm] = useState({
    category: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    duration: "",
  });

  const [submitted, setSubmitted] = useState(false); // Track if form is submitted
  const [message, setMessage] = useState(''); // State for message to show in message box

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // Simulate form submission success
    if (form.category && form.customerName && form.customerEmail && form.customerPhone && form.duration) {
      setMessage("Your data has been successfully submitted!"); // Success message
      setSubmitted(true); // Mark form as submitted

      // Close message and navigate to home page after a short delay
      setTimeout(closeMessage, 2000); // Close message after 2 seconds
    } else {
      setMessage("Please fill in all fields!"); // Error message
      setSubmitted(true); // Show error message
      setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
    }
  };

  const closeMessage = () => {
    setSubmitted(false); // Hide message
    navigate('/'); // Navigate to the home page
  };

  return (
    <div 
      style={{ backgroundImage: `url(${shifting})` }} // Background image
      className="h-screen w-full flex justify-center items-center bg-center bg-cover"
    >
      <div className="wherehouse-form bg-terniary p-6 rounded-md max-w-lg mx-auto bg-opacity-80">
        <h2 className="text-2xl font-bold mb-4 text-primary">Wherehouse Service</h2>

        {/* Message box to display success or error message */}
        {submitted && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 mb-4 rounded-md shadow-lg">
            <p>{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <label htmlFor="category" className="  Block text-primary font-semibold mb-1 p-6 rounded-md max-w-lg w-2xl  bg-opacity-80">
              Select Category
            </label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleInputChange}
              required
              className="w-full py-2 px-4 rounded-full border-primary border"
            >
              <option value="">-- Select Category --</option>
              <option value="Event Space">Event Space</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Rapid Deployment space">Rapid Deployment space</option>
            </select>
          </div>

          <div className="relative">
            <label htmlFor="customerName" className="block text-primary font-semibold mb-1">
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
              className="w-full py-2 px-4 rounded-full border-primary border"
            />
          </div>

          <div className="relative">
            <label htmlFor="customerEmail" className="block text-primary font-semibold mb-1">
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
              className="w-full py-2 px-4 rounded-full border-primary border"
            />
          </div>

          <div className="relative">
            <label htmlFor="customerPhone" className="block text-primary font-semibold mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="customerPhone"
              id="customerPhone"
              placeholder="Enter your phone number"
              value={form.customerPhone}
              onChange={handleInputChange}
              required
              className="w-full py-2 px-4 rounded-full border-primary border"
            />
          </div>

          <div className="relative">
            <label htmlFor="duration" className="block text-primary font-semibold mb-1">
              Storage Duration
            </label>
            <select
              name="duration"
              id="duration"
              value={form.duration}
              onChange={handleInputChange}
              required
              className="w-full py-2 px-4 rounded-full border-primary border"
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
            <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WareHouse;
