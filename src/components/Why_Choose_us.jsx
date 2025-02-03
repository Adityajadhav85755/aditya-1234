import React from 'react'
// import aboutImg from '../assets/images/about.png'

export default function AboutContent(){
  return (
<div>
<section class="flex flex-col items-center bg-blue-100 text-black w-full px-4 py-4 ">
  <div class="w-full max-w-[1000px] m-auto">
    <h2 class="text-center font-title font-bold text-2xl mb-4"><strong>Why Choose Us</strong></h2>
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-disc list-inside font-body  ">
    {/* grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 list-disc list-inside */}
      <li>Corporate Shifting</li>
      <li>Safe Shifting</li>
      <li>House Shifting</li>
      <li>Local Shifting</li>
      <li>Long Distance Shifting</li>
      <li>Safety and Security</li>
      <li>10+ Years of Experience </li>
      <li>FREE Visit </li>
      <li>Online survey</li>
      <li>Affordable Price And Discount</li>
      <li>Fast and Safe Delivery</li>
      <li>24/7 Customer support.</li>
      <li>Save Time With Appointment</li>
      <li>Avail Up to 20% Off</li>
      <li>Satisfied Customers</li>
      <li>Years of Customer's Trust </li>
      <li>Multiple Locations</li>
      </ul>
      </div></section>

</div>
)
}