// import React from 'react'

// export default function QuickContact() {
//   return (

//       <section className=' flex flex-col items-center bg-PeriwinklePurpleLight text-white w-full px-4 py-12 md:py-8 md:w-[50%] md:mx-auto md:ml-[8%]'>
//           <div className='grid grid-cols-3 gap-8 px-8 w-full max-w-[1000px] max-[866px]:grid-cols-1'>


//             <div className='py-8'>
//               <div className='flex flex-col items-center gap-y-4'>
//                 <i className="fa-solid fa-mobile-screen-button text-[3rem] max-[866px]:text-[4rem]"></i>
//                 <h4 className='text-xl font-semibold mb-4 text-[black]  '>Assistance Is Free !!</h4>
//               </div>

//               <div className='flex flex-col items-center font-semibold tracking-wider'>
//                 <p>9004424598</p>
//                 <p>9136553632</p>
//               </div>
//             </div>
//             <div className='border-2 py-8 border-t-0 border-b-0 border-[#1d3366] max-[866px]:border-primary'>
//               <div className='flex flex-col items-center gap-y-4'>
//                 <i className="fa-regular fa-envelope text-[3rem] max-[866px]:text-[4rem]"></i>
//                 {/* <i className="fa-solid fa-mobile-screen-button "></i> */}
//                 <h4 className='text-xl font-semibold mb-4 text-[black]'>We Are Just Here !!</h4>
//               </div>

//               <div className='flex flex-col items-center font-semibold tracking-wider'>
//                 <p>info@skysolution.com</p>
//                 <p>sales@skysolution.com</p>
//               </div>
//             </div>
//             <div className='py-8'>
//               <div className='flex flex-col items-center gap-y-4'>
//                 <i className="fa-regular fa-clock text-[3rem] max-[866px]:text-[4rem]"></i>
//                 <h4 className='text-xl font-semibold mb-4 text-[black] '>Always Available !!</h4>
//               </div>

//               <div className='flex flex-col items-center font-semibold tracking-wider'>
//                 <p>Monday - Sunday</p>
//                 <p>Timing - 24 / 7</p>
//               </div>
//             </div>



//           </div>
//         </section>

//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickContact() {
  return (
    <>
      {/* Quick Contact Section */}
      {/* <section className='flex flex-col items-center bg-[#1d3366] text-white w-full px-4 py-12 md:py-8 md:w-[50%] md:mx-auto md:ml-[8%]'>
        <div className='grid grid-cols-3 gap-8 px-8 w-full max-w-[1000px] max-[866px]:grid-cols-1'>
          {/* Contact Assistance Section */}
      {/* <div className='py-8'>
            <div className='flex flex-col items-center gap-y-4'>
              <i className="fa-solid fa-mobile-screen-button text-[3rem] max-[866px]:text-[4rem]"></i>
              <h4 className='text-xl font-semibold mb-4 text-[white]'>Assistance Is Free !!</h4>
            </div>
            <div className='flex flex-col items-center font-semibold tracking-wider'>
              <p>9004424598</p>
              <p>9136553632</p>
            </div>
          </div> */}

      {/* Email Section */}
      {/* <div className='border-2 py-8 border-t-0 border-b-0 border-[#1d3366] max-[866px]:border-primary'>
            <div className='flex flex-col items-center gap-y-4'>
              <i className="fa-regular fa-envelope text-[3rem] max-[866px]:text-[4rem]"></i>
              <h4 className='text-xl font-semibold mb-4 text-[white]'>We Are Just Here !!</h4>
            </div>
            <div className='flex flex-col items-center font-semibold tracking-wider'>
              <p>info@skysolution.com</p>
              <p>sales@skysolution.com</p>
            </div>
          </div> */}

      {/* Operating Hours Section */}
      {/* <div className='py-8'>
            <div className='flex flex-col items-center gap-y-4'>
              <i className="fa-regular fa-clock text-[3rem] max-[866px]:text-[4rem]"></i>
              <h4 className='text-xl font-semibold mb-4 text-[white]'>Always Available !!</h4>
            </div>
            <div className='flex flex-col items-center font-semibold tracking-wider'>
              <p>Monday - Sunday</p>
              <p>Timing - 24 / 7</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className='bg-PeriwinklePurpleDark text-white py-8 px-4 lg:w-[50%] lg:mx-auto lg:ml-[8%] md:w-full'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Company Section */}
          <div>
            <h3 className='text-xl font-title font-bold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li><Link to="/about" className='hover:underline'>About Us</Link></li>
              <li><Link to="/terms" className='hover:underline'>Terms & Conditions</Link></li>
              <li><Link to="/privacy" className='hover:underline'>Privacy Policy</Link></li>
              <li><Link to="/key" className='hover:underline'>Keys</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className='text-xl font-title font-bold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li><Link to="/history" className='hover:underline'>History of Sky Need Solution</Link></li>
              <li><Link to="/acservice" className='hover:underline'>Ac Service</Link></li>
              <li><Link to="/warehouse" className='hover:underline'>Warehouse</Link></li>
              <li><Link to="/contact" className='hover:underline'>Customer Support</Link></li>
            </ul>
          </div>


          {/* Contact Section */}
          <div className='flex flex-col gap-y-3'>
            <div>

            <h3 className='text-xl font-title font-bold mb-4'>Contact Us</h3>
            {/* <p className='font-light text-sm'>123, Sky Solutions Street,<br />Mumbai, 400095</p> */}
            <p className="mt-2 font-light text-sm mb-3">
              Phone: <a href="tel:+919004424598" className="text-white font-title cursor-pointer">+91 9004424598</a> <br />
              <a href="tel:+919136553632" className="text-white font-title cursor-pointer ml-11">+91 9136553631</a>

            </p>
            <p className='font-titlefont-light text-sm'><b>Email:</b> <span>Skyneedsolution@gmail.com</span> <span className='ml-10'>contact@skyneedsolution.com</span> </p>

            </div>
                      {/* Social Media Section */}
          <div>
            <h3 className='text-xl mb-3 font-title font-bold text-left'>Follow Us</h3>
            <ul className="list-inline flex space-x-3">
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-8 h-8 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.facebook.com/Shahid Manihar" data-tooltip="Facebook"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-8 h-8 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.instagram.com/skyneedsolution/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-8 h-8 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-8 h-8 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://skyneedsolution.com/" data-tooltip="Home"><i className="fa fa-heart"></i></Link></li>
            </ul>
          </div>

          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='text-center font-title mt-8 text-sm text-gray-400'>
          © 2025 Sky Need Solutions. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
