import React from 'react'

export default function WhatOffer() {
  let lis = [
    "Corporate Shifting",
    "Domestic Shifting",
    "House Shifting",
    "Local Shifting",
    "Long Distance Shifting",
    "Safety and Security",
    "10+ Years of Experience ",
    "FREE Visit and Online survey",
    "Affordable Price And Discount",
    "Fast and Safe Delivery.",
    "24/7 Customer support.",
    "Save Time With Appointment",
    "Avail Up to 20% Off",
    "Security",
    "Satisfied Customers",
    "Years of Customer's Trust ",
    "Multiple Locations All Over India"
  ]
  return (

//     <section className=' flex flex-col items-center bg-primary text-white w-full px-4 py-4 pb-8'>
//       <div className='  w-full max-w-[1000px] m-auto'>
//         <h2 className='text-center font-bold text-other2 text-2xl mb-4'>What We Offer</h2>
//         <ul className='grid grid-cols-3 list-disc gap-2 list-inside'>
//           {lis.map((li, i) => {
//             return <li>{li}</li>
//           })}
//         </ul>

//         {/* <div class="faq-item"> */}

//         {/* <h3><span>01</span> Non consectetur a erat nam at lectus urna duis?</h3>
//                 <div class="faq-content">
//                   <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
//                 </div>
//                 <i class="faq-toggle bi bi-chevron-right"></i>
//               </div> */}
//         {/* </div> */}



//       </div>
//     </section>
//   )
// }
<<<<<<< HEAD
  <section className="flex flex-col items-center bg-primary text-white w-full px-4 py-4 pb-8">
    <div className="w-full max-w-[1000px] m-auto">
      <h2 className="text-center font-bold text-other2 text-2xl mb-4">What We Offer</h2>
=======
  <section className="flex flex-col items-center bg-PeriwinklePurpleLight text-black w-full px-4 py-4 pb-8 shadow-md rounded-md border border-gray-200 md:py-8 md:flex md:flex-row md:justify-around md:w-[50%] md:mx-auto md:ml-[8%]">
    <div className="w-full max-w-[1000px] m-auto">
      <h2 className="text-center font-bold text-black text-2xl mb-4">What We Offer</h2>
>>>>>>> d5cb291 (Your commit message here)
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 list-disc gap-4 list-inside">
        {lis.map((li, i) => {
          return (
            <li key={i} className="text-left leading-relaxed">
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
}