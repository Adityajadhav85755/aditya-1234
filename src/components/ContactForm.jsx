import React, { useState } from 'react';
import shifting from '../assets/images/shifting.jpg';

const ContactData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Validate if all fields are filled
    if (formData.name && formData.email && formData.number && formData.message) {
      setMessage('Thank you for contacting us!');
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      });

      // Hide the thank you message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setMessage('Please fill in all fields');
      setSubmitted(true);

      // Reset the message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div
      // style={{ backgroundImage: `url(${shifting})` }}
      className="bg-terniary"
    >
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column: Information Section */}
          <div className="bg-white shadow-lg rounded-md p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* <!-- Address --> */}
  <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="200">
    <div class="text-blue-500">
      <i class="bi bi-geo-alt text-3xl"></i>
    </div>
    <div>
      <h3 class="text-lg font-bold text-gray-700">Address</h3>
      <p class="text-gray-600">A108 Adam Street</p>
      <p class="text-gray-600">New York, NY 535022</p>
    </div>
  </div>

  {/* <!-- Call Us --> */}
  <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="300">
    <div class="text-blue-500">
      <i class="bi bi-telephone text-3xl"></i>
    </div>
    <div>
      <h3 class="text-lg font-bold text-gray-700">Call Us</h3>
      <p class="text-gray-600">+1 5589 55488 55</p>
      <p class="text-gray-600">+1 6678 254445 41</p>
    </div>
  </div>

  {/* <!-- Email Us --> */}
  <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="400">
    <div class="text-blue-500">
      <i class="bi bi-envelope text-3xl"></i>
    </div>
    <div>
      <h3 class="text-lg font-bold text-gray-700">Email Us</h3>
      <p class="text-gray-600">info@example.com</p>
      <p class="text-gray-600">contact@example.com</p>
    </div>
  </div>

  {/* <!-- Open Hours --> */}
  <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="500">
    <div class="text-blue-500">
      <i class="bi bi-clock text-3xl"></i>
    </div>
    <div>
      <h3 class="text-lg font-bold text-gray-700">Open Hours</h3>
      <p class="text-gray-600">Monday - Friday</p>
      <p class="text-gray-600">9:00AM - 05:00PM</p>
    </div>
  </div>
  {/* Social Media icon */}
  <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="500">
  <div className="social-icons circle">
    <h3 className="text-lg font-bold ml-3 mb-3 text-gray-700">Social Media</h3>
    <ul className="list-inline flex justify-center space-x-4 ">
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.facebook.com/maxpackersnmovers" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.instagram.com/maxpackerandmovers/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></a></li>
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></a></li>
    {/* <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://maxpackersandmoversinmumbai.blogspot.com/" data-tooltip="Blog"><i className="fa fa-heart"></i></a></li> */}
    </ul>
  </div>
  </div>
  {/* Social Media icon */}
  {/* <div className="social-icons circle">
    <h3 className="text-lg font-bold ml-3 mb-3">Social Media</h3>
    <ul className="list-inline flex justify-center space-x-4">
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.facebook.com/maxpackersnmovers" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.instagram.com/maxpackerandmovers/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></a></li>
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></a></li>
    <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://maxpackersandmoversinmumbai.blogspot.com/" data-tooltip="Blog"><i className="fa fa-heart"></i></a></li>
    </ul>
  </div> */}
</div>

            
          </div>
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '270px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}

          {/* Right Column: Contact Form */}
          <form
            className="bg-white shadow-lg rounded-md p-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-4 text-primary text-center">Contact Form</h1>

            {/* Show the success or error message */}
            {submitted && <p className="text-green-500 text-center mb-4">{message}</p>}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                Phone Number
              </label>
              <input
                id="number"
                name="number"
                type="text"
                placeholder="Your Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactData;
