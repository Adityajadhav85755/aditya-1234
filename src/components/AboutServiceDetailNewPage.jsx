import React from 'react';
import { useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();
  const { service } = location.state || {}; // Access passed state

  return (
    // Full-page container with light gray background
    // <div className="bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="bg-gray-200 min-h-screen">
      {/* Centered content container with white background */}
      <div className="service-detail-container bg-white p-2 m-auto w-full max-w-5xl">
        <h2 className="p-4 text-center font-bold text-2xl text-primary">
          {service ? service.title : 'Service Details'}
        </h2>
        {service ? (
          // Text content with margin and padding
          <div className="">
            <p className="mb-6">{service.details}</p>
            {/* You can display other service details or images here */}
          </div>
        ) : (
          <p className="text-center text-black-600">No service selected.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Gallery = () => {
//   const location = useLocation();
//   const { service } = location.state || {}; // Access passed state

//   return (
//     // This is for full page it must be light gray color
//       <div className="">
//       {/* <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
//         <strong>Feel Free to Contact Us</strong>
//       </h2> */}
//       {/* this for content related div white page color  */}
//       <div className="service-detail-container p-8 m-auto bg-white md:w-70pe mt-4 bg-gray-100">
//         <h2 className="p-2 text-center font-bold text-2xl">{service ? service.title : 'Service Details'}</h2>
//         {service ? (
//           // this is for text which must be margin and padding
//           <div>
//             <p>{service.details}</p>
//             {/* You can display other service details or images here */}
//           </div>
//         ) : (
//           <p>No service selected.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
