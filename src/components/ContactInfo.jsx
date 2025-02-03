import React from 'react';

const ContactData = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20 lg:mt-12 p-4 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Video Section */}
      <div className="lg:w-1/3 rounded-lg shadow-lg overflow-hidden mb-6 lg:mb-0">
        <video className="w-full object-cover" controls>
          <source src="/ContactInfoVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Motivational Text Section */}
      <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          <strong>Feel Free to Contact Us</strong>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          At our company, we believe in building lasting relationships. Your questions, ideas, and feedback are valuable to us.
        </p>
        <p className="text-lg text-black-700">
          Don’t hesitate to get in touch — we’re here to listen and support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default ContactData;
