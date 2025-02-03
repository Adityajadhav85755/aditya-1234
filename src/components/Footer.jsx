import React from 'react';
import whatsupLogo from '../assets/images/whatsup.png';
import phoneLogo from '../assets/images/phone.png';
import logo2 from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-PeriwinklePurpleLight text-black'>
      {/* Fixed icons */}
      {/* <div className='fixed bottom-10 left-10'>
        <Link to="tel:7045228136">
          <img src={whatsupLogo} alt="WhatsApp Sky Packers and Movers" className='w-16 h-16' />
        </Link>
      </div> */}

      {/* <div className='fixed bottom-10 right-10'>
        <Link to="tel:7045228136">
          <img src={phoneLogo} alt="Phone Sky Packers and Movers" className='w-16 h-16' />
        </Link>
      </div> */}

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
        {/* First Part: Company Logo and Description */}
        <div className="widget-area">
          <div className="textwidget widget-text mb-4 text-white">
            <p>We, Sky Need Solution Packers and Movers, located in Mumbai area, S. N. S. Packers and Movers provide great services for shifting.</p>
          </div>
          {/* <div className="cmt-horizontal_sep width-100 mt-1 mb-2">
            <span className="sep_holder"><span className="sep_line"></span></span>
          </div> */}
          <div className="d-flex align-items-center">
            <div className="flex items-center">
              {/* <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-md mb-0"> */}
              <strong><i className="fa fa-files-o text-white font-bold"></i></strong>
              {/* </div> */}
              <div className="pl-3">
                <h5 className="mb-0 font-extrabold text-white">Get Free Estimates</h5>
              </div>
            </div>
            <div className="pl-7">
              <div className="desc cmt-textcolor-skincolor text-white">
                <Link to="tel:+919136553631" className="cmt-textcolor-skincolor">+91-91365 53632</Link>
                <br />
                <Link to="tel:+919004424598" className="cmt-textcolor-skincolor">+91-9004 424598</Link>

              </div>
            </div>
          </div>
        </div>

        {/* Second Part: Quick Links */}
        <div className="widget-area">
          <h3 className="widget-title flex items-center mb-2 text-white"><b>Quick Links</b></h3>
          <ul id="menu-footer-quick-Links" className='text-white'>
            <li><Link to="/"><span className="text-green-500">✔ </span>Home</Link></li>
            <li><Link to="/service"><span className="text-green-500">✔ </span>Service</Link></li>
            <li><Link to="/about"><span className="text-green-500">✔ </span>About</Link></li>

            <li><Link to="/gallery"><span className="text-green-500">✔ </span>Gallery</Link></li>
            {/* <li><Link to=""><span className="text-green-500">✔ </span>Location</Link></li> */}
            <li><Link to="/contact"><span className="text-green-500">✔ </span>Contact Us</Link></li>

          </ul>
        </div>

        {/* Third Part: Services */}
        <div className="widget-area text-white">
          <h3 className="widget-title flex items-center mb-2"><strong>Services</strong></h3>
          <ul id="menu-footer-quick-Links">
            <li><Link to="/household"><span className="text-green-500">✔ </span> Home Relocation</Link></li>
            <li><Link to="/office"><span className="text-green-500">✔ </span> Office Relocation</Link></li>
            <li><Link to="/vehicle"><span className="text-green-500">✔ </span> Vehical Transportation</Link></li>
            {/* <li><Link to="insurance.html"><span className="text-green-500">✔ </span> Insurance Management</Link></li> */}
            {/* <li><Link to="warehousing"><span className="text-green-500">✔ </span> Warehousing and Storage</Link></li> */}
            <li><Link to="/shop"><span className="text-green-500">✔ </span> Shop Shifting</Link></li>
            <li><Link to="/acservice"><span className="text-green-500">✔ </span> AC Rent Sevice</Link></li>
            <li><Link to="/acservice"><span className="text-green-500">✔ </span> AC AMC Sevice</Link></li>
            {/* <li><Link to="AcService"><span className="text-green-500">✔ </span> AC</Link></li> */}
            {/* <li><Link to="AcService"><span className="text-green-500">✔ </span> AC Service</Link></li> */}
          </ul>
        </div>

        {/* Fourth Part: Contact Us and Social Icons */}
        <div className="widget-area">

          <div className="social-icons circle mt-14 mr-5 flex items-center justify-center">
            <ul className="list-inline flex items-center space-x-4">
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.facebook.com/Shahid Manihar" data-tooltip="Facebook"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.instagram.com/skyneedsolution/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></Link></li>
              <li><Link className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" to="https://skyneedsolution.com/" data-tooltip="Home"><i className="fa fa-heart"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
