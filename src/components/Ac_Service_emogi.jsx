import React from 'react';
import ac1 from '../assets/AC_emoji_images/ac_main.png';
import ac2 from '../assets/AC_emoji_images/Anti_rust_deep_clean.jpeg';
import ac3 from '../assets/AC_emoji_images/Gas_refill.jpeg';
import ac4 from '../assets/AC_emoji_images/ac_servicew.png';
import ac5 from '../assets/AC_emoji_images/Installation_unistall.jpeg';

const Ac_Service_emogi = ({ handleScrollToService }) => {
  const images = [ac1, ac2, ac3, ac4];
  const services = [
    // 'AC Mainte<br />Service',
    'Anti-Rust<br />Deep Clean',
    'AC Gas<br />Refill',
    'AC Repair<br />Service',
    'Installation/<br />Uninstallation',
  ];

  return (
    <>
      <div className="w-full lg:w-[90%]  bg-white rounded-md md:mt-56 lg:flex lg:flex-col lg:items-end lg:justify-center lg:mr-5">
        <div className="flex  flex-col-reverse justify-around items-center md:gap-4 gap-2 overflow ">
          <div className='flex  flex-nowrap justify-around items-center md:gap-4 gap-2 overflow '>

            {images.map((image, index) => (
              <div className="flex flex-col items-center min-w-max" key={index}>
                <div
                  className="lg:w-16 lg:h-16 md:w-14 md:h-16 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-gray-100 cursor-pointer lg:ml-5"
                  onClick={() => handleScrollToService(index)}
                >
                  <img
                    src={image}
                    alt={services[index].replace('<br />', ' ')}
                    className="md:w-20 md:h-20 w-14 h-16 object-cover rounded-full hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <span
                  className="p-2 text-center md:text-base lg:text-base xl:text-xl text-[0.600rem] font-bold"
                  dangerouslySetInnerHTML={{ __html: services[index] }}
                ></span>
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center items-center'>

            <h1 className="text-center md:text-2xl text-xl font-semibold text-gray-800 p-2 mr-10">Best AC Services in Mumbai</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ac_Service_emogi;
