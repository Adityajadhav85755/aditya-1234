// import React, { useState } from 'react';
// import shifting from '../assets/images/shifting.jpg';

// const ContactData = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     const phoneRegex = /^[0-9]{10}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
//     if (!formData.number.trim()) newErrors.number = 'Phone number is required';
//     else if (!phoneRegex.test(formData.number)) newErrors.number = 'Phone number must be exactly 10 digits';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log('Form Data Submitted:', formData);
//       setMessage('Thank you for contacting us!');
//       setSubmitted(true);
//       setFormData({ name: '', email: '', number: '', message: '' });
//       setTimeout(() => setSubmitted(false), 5000);
//     }
//   };


//   return (
//     <div
//       // style={{ backgroundImage: `url(${shifting})` }}
//       className="bg-terniary"
//     >
//       <div className="container mx-auto px-4 py-5">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* Left Column: Information Section */}
//           <div className="bg-white shadow-lg rounded-md p-6 space-y-6">
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* <!-- Address --> */}

//               {/* <!-- Call Us --> */}
//               <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="300">
//                 <div class="text-blue-500">
//                   <i class="bi bi-telephone text-3xl"></i>
//                 </div>
//                 <div>
//                   <h3 class="text-lg font-bold text-gray-700">Call Us</h3>
//                   <p class="text-gray-600">+91 9136 553631</p>
//                   <p class="text-gray-600">+91 9004 424598</p>
//                 </div>
//               </div>

//               {/* <!-- Email Us --> */}
//               <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="400">
//                 <div class="text-blue-500">
//                   <i class="bi bi-envelope text-3xl"></i>
//                 </div>
//                 <div>
//                   <h3 class="text-lg font-bold text-gray-700">Email Us</h3>
//                   <p class="text-gray-600">Skyneedsolution@gmail.com</p>
//                   <p class="text-gray-600">contact@skyneedsolution.com</p>
//                 </div>
//               </div>

//               {/* <!-- Open Hours --> */}
//               <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="500">
//                 <div class="text-blue-500">
//                   <i class="bi bi-clock text-3xl"></i>
//                 </div>
//                 <div>
//                   <h3 class="text-lg font-bold text-gray-700">Open Hours</h3>
//                   <p class="text-gray-600">Monday - Friday</p>
//                   <p class="text-gray-600">9:00AM - 05:00PM</p>
//                 </div>
//               </div>
//               {/* Social Media icon */}
//               <div class="info-item flex items-start space-x-4 p-4 bg-white shadow-lg rounded-lg" data-aos="fade" data-aos-delay="500">
//                 <div className="social-icons circle">
//                   <h3 className="text-lg font-bold ml-3 mb-3 text-gray-700">Social Media</h3>
//                   <ul className="list-inline flex justify-center space-x-4 ">
//                     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.facebook.com/Shahid Manihar" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
//                     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.instagram.com/skyneedsolution/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></a></li>
//                     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></a></li>
//                     {/* <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://maxpackersandmoversinmumbai.blogspot.com/" data-tooltip="Blog"><i className="fa fa-heart"></i></a></li> */}
//                   </ul>
//                 </div>
//               </div>
//               {/* Social Media icon */}
//               {/* <div className="social-icons circle">
//     <h3 className="text-lg font-bold ml-3 mb-3">Social Media</h3>
//     <ul className="list-inline flex justify-center space-x-4">
//     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.facebook.com/maxpackersnmovers" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
//     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.instagram.com/maxpackerandmovers/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></a></li>
//     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></a></li>
//     <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://maxpackersandmoversinmumbai.blogspot.com/" data-tooltip="Blog"><i className="fa fa-heart"></i></a></li>
//     </ul>
//   </div> */}
//             </div>


//           </div>
//           {/* <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
//               frameBorder="0"
//               style={{ border: 0, width: '100%', height: '270px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe> */}

//           {/* Right Column: Contact Form */}
//           <form className="bg-white shadow-lg rounded-md p-6" onSubmit={handleSubmit}>
//             <h1 className="text-2xl font-bold mb-4 text-primary text-center">Contact Form</h1>
//             {submitted && <p className="text-green-500 text-center mb-4">{message}</p>}
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
//               <input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.name ? 'border-red-500' : ''}`} />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//               <input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.email ? 'border-red-500' : ''}`} />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Phone Number</label>
//               <input id="number" name="number" type="text" placeholder="Your Phone Number" value={formData.number} onChange={handleChange} maxLength="10" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.number ? 'border-red-500' : ''}`} />
//               {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
//               <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.message ? 'border-red-500' : ''}`} />
//               {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//             </div>
//             <div className="flex items-center justify-between">
//               <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
//             </div>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactData;
import React, { useState } from 'react';

const ContactData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.number.trim()) newErrors.number = 'Phone number is required';
    else if (!phoneRegex.test(formData.number)) newErrors.number = 'Phone number must be exactly 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
        const response = await fetch('http://localhost/json.php/contact_form.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (result.success) {
            setMessage('Thank you for contacting us!');
            setSubmitted(true);
            setFormData({ name: '', email: '', number: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            setMessage('Failed to submit. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again later.');
    }
};


  return (
    <div className="bg-terniary">
      <div className="container mx-auto px-4 py-5">
        <form className="bg-white shadow-lg rounded-md p-6" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-4 text-primary text-center">Contact Form</h1>
          {submitted && <p className="text-green-500 text-center mb-4">{message}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.name ? 'border-red-500' : ''}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.email ? 'border-red-500' : ''}`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Phone Number</label>
            <input id="number" name="number" type="text" placeholder="Your Phone Number" value={formData.number} onChange={handleChange} maxLength="10" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.number ? 'border-red-500' : ''}`} />
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.message ? 'border-red-500' : ''}`} />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactData;