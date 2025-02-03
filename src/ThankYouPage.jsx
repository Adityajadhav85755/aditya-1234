import React, { useState, useEffect } from "react";

const ThankYouPage = ({ onClose, orderDetails,  }) => {
  const [progress, setProgress] = useState(100); // Progress starts at 100%
  const [close, setClose] = useState(false);

  

  useEffect(() => {
    // Progress bar timer
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 3, 0)); // Decrease progress by 2% every 100ms
    }, 100);

    // Close the popup after progress reaches 0
    if (progress === 0) {
      onClose(); // Call the onClose callback to hide the popup
    }

    return () => {
      clearInterval(interval); // Clean up interval
    };
  }, [progress, onClose]); // Depend on progress and onClose

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Card */}
      <div className={`relative bg-slate-900 rounded-lg shadow-lg p-8 max-w-md w-full z-10 border-2 border-gray-200 font-title text-white ${close ? "animate-close" : ""}`}>
        {/* Semicircle */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-yellow-500 border-t-0 border-l-0"></div>
        </div>

        {/* Content */}
        <div className="text-center mt-6">
          <h1 className="text-2xl font-title font-bold text-yellow-500">Thank You</h1>
          <p className="md:text-2xl font-body text-xl mt-2">{orderDetails.name}</p>
          {/* Order Details */}
          <div className="mt-4">
            <p className="text-sm font-body">
              Your order is
              confirmed.
            </p>
            <p className="text-sm font-body mt-2">
              You will receive an email with your order details.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 ">
          <div className="w-full border-t border-gray-300 mb-4"></div>
          <p className="text-sm font-body text-white opacity-500 text-center">
            Download this{" "}
            <span className="text-yellow-500 font-medium font-body">awesome diagram</span>.
            Capture your audience’s attention. All images are 100% editable in
            PowerPoint.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative mt-6 h-1 font-body bg-gray-300 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-yellow-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
