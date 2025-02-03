import React from 'react';
import { LuNotebookPen } from "react-icons/lu";
import { LuBadgeIndianRupee } from "react-icons/lu";
import { RiCalendarCheckLine } from "react-icons/ri";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
// import { FaRocket } from 'react-icons/fa';
// import { MdBuild } from 'react-icons/md';
const Steps = () => {
  return (
    <section className="flex flex-col items-center font-title bg-white text-black w-full px-4 py-4 pb-8 lg:w-[50%] lg:mx-auto lg:ml-[8%] md:w-full">
      <div className="w-full max-w-[1000px] m-auto ">
        <h2 className="text-center  font-titlefont-extrabold text-blue-700 text-2xl mb-4">Steps of Sky Need Solution</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 list-disc gap-4 list-inside">

          {/* Step 1: Share Moving Details */}
          <li className="flex items-center gap-4 text-center">
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-12 h-12 bg-[#F7F7F8]">
              {/* <FaRocket className=" text-purple-700 transition-opacity opacity-100 w-8 h-8" /> */}
              {/* <MdBuild className="text-gray-600 w-8 h-8" /> */}
              <LuNotebookPen className='text-purple-700 transition-opacity opacity-100 w-8 h-8'/>
              <img
                // src="/icon/shift.png"
                // alt="FlowChart"
                // loading="lazy"
                // className="text-blue-800 transition-opacity opacity-100 w-8 h-8"
              />

            </div>
            <div className="flex flex-col items-start mt-1">
              <div className="font-semibold font-title text-14">Select Services</div>
              <div className="text-left text-12 font-body opacity-80">Provide your preferred moving date and destination for an accurate quote.</div>
            </div>
          </li>

          {/* Step 2: Get Instant Quote */}
          <li className="flex items-center gap-4 text-center">
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-12 h-12 bg-[#F7F7F8]">
            <LuBadgeIndianRupee className='text-purple-700 transition-opacity opacity-100 w-8 h-8' />
              <img
                // src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/instant-quote.svg"
                // alt="FlowChart"
                // loading="lazy"
                // className="transition-opacity opacity-100 w-8 h-8"
              />
            </div>
            <div className="flex flex-col items-start mt-1">
              <div className="font-semibold font-title text-14">Get Quotation</div>
              <div className="text-left text-12 font-body opacity-80">Receive the most competitive pricing for your move instantly.</div>
            </div>
          </li>

          {/* Step 3: Assign Quality Expert */}
          <li className="flex items-center gap-4 text-center">
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-12 h-12 bg-[#F7F7F8]">
            <RiCalendarCheckLine  className='text-purple-700 transition-opacity opacity-100 w-8 h-8'/>
              <img
                // src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/quality-service-expert.svg"
                // alt="FlowChart"
                // loading="lazy"
                // className="transition-opacity opacity-100 w-8 h-8"
              />
            </div>
            <div className="flex flex-col items-start mt-1">
              <div className="font-semibold font-title text-14">CheckList</div>
              <div className="text-left text-12 font-body opacity-80">A professional will be assigned to manage your move and ensure everything runs smoothly.</div>
            </div>
          </li>

          {/* Step 4: Heavy Lifting */}
          <li className="flex items-center gap-4 text-center">
            <div className="flex justify-center items-center flex-shrink-0 rounded-full w-12 h-12 bg-[#F7F7F8]">
            <FaEnvelopeCircleCheck className='text-purple-700 transition-opacity opacity-100 w-8 h-8'/>
              <img
                // src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/heavy-lifting.svg"
                // alt="FlowChart"
                // loading="lazy"
                // className="transition-opacity opacity-100 w-8 h-8"
              />
            </div>
            <div className="flex flex-col items-start mt-1">
              <div className="font-semibold font-title text-14">Submit</div>
              <div className="text-left text-12 font-body opacity-80">Relax while we take care of the heavy lifting and ensure your belongings are safely transported.</div>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Steps;
