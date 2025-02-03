import React from "react";
import { Link } from "react-router-dom";
import acMaintenanceImage from '../assets/images/acmaintenance.jpg';
import acInstallationImage from '../assets/images/install.png';
import acServiceImage from '../assets/images/amc.jpg';
import downloadImage from '../assets/images/acrend.png';


const AcSummerNeeds = () => {
  return (
    <section
      className="mb-1 md:px-6 relative md:w-[80%] lg:w-[50%] md:mx-auto md:ml-[8%] shadow-lg shadow-gray-400"
      style={{ borderRadius: "6px", backgroundColor: "rgb(216, 228, 249)", padding: "20px 16px" }}
    >
      <div className="font-bold font-title text-2xl sm:text-xl capitalize" style={{ marginBottom: "16px" }}>
        AC Summer Needs
      </div>
      

      <div className="grid grid-cols-2 gap-3">
  {/* AC Gas Charging */}
  <Link
    to="/ac-service" // Add your desired path here
    className="bg-white rounded-lg"
    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 10px" }}
  >
    <div className="none">
      <div
        className="h-28 rounded-t-md flex justify-center items-center overflow-hidden p-4"
        style={{ background: "rgb(247, 249, 253)" }}
      >
        <img
          src={downloadImage}
          alt="AC Gas Charging"
          loading="lazy"
          className="transition-opacity opacity-100 pt-3"
          width="120px"
          height="120px"
        />
      </div>
      <div className="p-3 font-titlefont-14 default-color">
        <div className="text-16 font-bold text-16">
          Rental Ac
          <span>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              loading="lazy"
              alt="arrow"
              width="18"
              height="18"
            />
          </span>
        </div>
        <div className="text-14 text-gray-400">Starting @ ₹1499</div>
      </div>
    </div>
  </Link>

  {/* AC Repair */}
  <Link
    to="/ac-service" // Add your desired path here
    className="bg-white rounded-lg"
    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 10px" }}
  >
    <div className="none">
      <div
        className="h-28 rounded-t-md flex justify-center items-center overflow-hidden p-4"
        style={{ background: "rgb(247, 249, 253)" }}
      >
        <img
          src={acServiceImage}
          alt="AC Repair"
          loading="lazy"
          className="transition-opacity opacity-100 pt-3"
          width="200px"
          height="220px"
        />
      </div>
      <div className="p-3 font-title font-14 default-color">
        <div className="text-16 font-bold text-16">
          AC AMC
          <span>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              loading="lazy"
              alt="arrow"
              width="18"
              height="18"
            />
          </span>
        </div>
        <div className="text-14 text-gray-400">Starting @ ₹1499</div>
      </div>
    </div>
  </Link>

  {/* New Component 1 */}
  <Link
    to="/ac-service" // Add your desired path here
    className="bg-white rounded-lg"
    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 10px" }}
  >
    <div className="none">
      <div
        className="h-28 rounded-t-md flex justify-center items-center overflow-hidden p4"
        style={{ background: "rgb(247, 249, 253)" }}
      >
        <img
          src={acInstallationImage}
          alt="AC Installation"
          loading="lazy"
          className="transition-opacity opacity-100 pt-3"
          width="120px"
          height="120px"
        />
      </div>
      <div className="p-3 font-14 font-title default-color">
        <div className="text-16 font-bold text-16">
          AC Installation
          <span>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              loading="lazy"
              alt="arrow"
              width="18"
              height="18"
            />
          </span>
        </div>
        <div className="text-14 text-gray-400">Starting @ ₹499</div>
      </div>
    </div>
  </Link>

  {/* New Component 2 */}
  <Link
    to="/ac-service" // Add your desired path here
    className="bg-white rounded-lg"
    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 10px" }}
  >
    <div className="none">
      <div
        className="h-28 rounded-t-md flex justify-center items-center overflow-hidden p-4"
        style={{ background: "rgb(247, 249, 253)" }}
      >
        <img
          src={acMaintenanceImage}
          alt="AC Maintenance"
          loading="lazy"
          className="transition-opacity opacity-100 pt-3"
          width="130px"
          height="100px"
        />
      </div>
      <div className="p-3 font-14 font-title default-color">
        <div className="text-16 font-bold text-16">
          AC Uninstallation
          <span>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              loading="lazy"
              alt="arrow"
              width="18"
              height="18"
            />
          </span>
        </div>
        <div className="text-14 text-gray-400">Starting @ ₹399</div>
      </div>
    </div>
  </Link>
</div>

    </section>
  );
};

export default AcSummerNeeds;
