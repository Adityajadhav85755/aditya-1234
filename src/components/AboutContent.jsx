import React from 'react';
import aboutImg from '../assets/images/about.png';
// import { FaFonticons } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";

export default function AboutContent() {
  return (
    <section className=' bg-terniary flex flex-col items-center py-12 px-8'>
      <div className='flex justify-center items-center max-[1155px]:flex-col'>
        <div className='w-1/2 h-full flex justify-start max-[1155px]:w-[70%] max-[736px]:w-[90%]'>
          <img src={aboutImg} alt="about us" className='w-[550px]' />
        </div>
        <div className='w-1/2 flex flex-col p-4 px-0 max-[1155px]:w-[70%] max-[736px]:w-[90%]'>
          <h2 className='font-bold font-title text-primary text-2xl text-center'>About Us</h2>
          <p className='my-2 mt-2 font-body'>
         <b> Welcome to Sky Need Solution!</b>
           <h1>We make moving easy and stress-free with our expert relocation services. Whether you're moving your home, office, or special items, we provide reliable and efficient solutions tailored just for you. Our team ensures everything is safely packed, transported, and set up at your new place. Let us handle the hard work while you focus on starting fresh in your new space!</h1>
          </p>
          <p className='my-2 font-body'>
           <b>Who We Are</b>
        <h1>Sky Need Solution is a team of experienced professionals dedicated to simplifying the relocation process. With years of expertise in the shifting industry, we take pride in our ability to handle every detail with care, precision, and professionalism.</h1>
        {/* <p className='list-disc mt-5 font-serif  ' > */}
        {/* <b>What We Do</b> */}
        {/* <ul className=' list-disc'>
          <li>Residential Shifting: Safe and secure transport of your belongings to your new home.</li>
          <li>Office Relocation: Efficiently moving your workplace with minimal downtime.</li>
          <li>Packing and Unpacking Services: Ensuring your items are handled with utmost care.</li>
          <li>Loading and Unloading: Professional handling for damage-free shifting.</li>
          <li> Custom Solutions: Tailored services for unique moving needs, including fragile and bulky items.</li>
        </ul> */}
        </p>
         {/* </p> */}
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 hover:shadow-">
            {/* Mission Card */}
            <div className="bg-white p-6 rounded-lg  shadow-lg text-center space-x-4 shadow-blue-700  hover:bg-gray-300 transition-all duration-300 ">
             
              <h3 className="text-2xl  font-semibold text-black mb-3 flex items-center gap-x-7">
              <FaRocket className='text-purple-700 ml-2  font-title'/>
                Our Mission
              </h3>
              <div>
              <p className=" p-2 text-black font-body">
              We aim to lead with expertise, prioritize customer satisfaction, and achieve sustainable growth.!
              </p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-6 rounded-lg  shadow-lg text-center space-x-4 shadow-blue-700  hover:bg-gray-300 transition-all duration-300 "> {/* shadow-blue-700 */}
              <h3 className="text-2xl  font-semibold text-black mb-3 flex items-center gap-x-7">
              <FaEye className='text-blue-800 ml-2 font-title'/>
                Our Vision
              </h3>
              <div>
              <p className="p-2 text-black font-body ">
             At Sky Need Solution, we focus on delivering great service and ensuring customer satisfaction. We respect, integrity, and building lasting relationships with everyone we serve.  {/*Your trust is our priority.!*/}
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
