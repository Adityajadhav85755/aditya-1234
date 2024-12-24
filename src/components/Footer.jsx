import React from 'react';
import whatsupLogo from '../assets/images/whatsup.png';
import phoneLogo from '../assets/images/phone.png';
import logo2 from '../assets/images/logo2.png';

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className='bg-primary text-white'>
=======
    <footer className='bg-PeriwinklePurpleLight text-black'>
>>>>>>> d5cb291 (Your commit message here)
      {/* Fixed icons */}
      <div className='fixed bottom-10 left-10'>
        <a href="tel:9004780981">
          <img src={whatsupLogo} alt="WhatsApp Sky Packers and Movers" className='w-16 h-16' />
        </a>
      </div>

      <div className='fixed bottom-10 right-10'>
        <a href="tel:9004780981">
          <img src={phoneLogo} alt="Phone Sky Packers and Movers" className='w-16 h-16' />
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
        {/* First Part: Company Logo and Description */}
        <div className="widget-area">
          <div className="textwidget widget-text mb-4">
            <p>We, Sky Need Solution Packers and Movers, located in Mumbai area, Malad WEST, S. N. S. Packers and Movers provide great services for shifting.</p>
          </div>
          {/* <div className="cmt-horizontal_sep width-100 mt-1 mb-2">
            <span className="sep_holder"><span className="sep_line"></span></span>
          </div> */}
          <div className="d-flex align-items-center">
            <div className="flex items-center">
              {/* <div className="cmt-icon cmt-icon_element-onlytxt cmt-icon_element-color-darkgrey cmt-icon_element-size-md mb-0"> */}
              <strong><i className="fa fa-files-o"></i></strong>
              {/* </div> */}
              <div className="pl-3">
                <h5 className="mb-0"><strong>Get Free Estimates</strong></h5>
              </div>
            </div>
            <div className="pl-7">
              <div className="desc cmt-textcolor-skincolor">+91-9004-780981</div>
            </div>
          </div>
        </div>

        {/* Second Part: Quick Links */}
        <div className="widget-area">
          <h3 className="widget-title flex items-center mb-2"><strong>Quick Links</strong></h3>
          <ul id="menu-footer-quick-links">
            <li><a href="/"><span className="text-green-500">✔ </span>Home</a></li>
            <li><a href="/"><span className="text-green-500">✔ </span>Service</a></li>
            <li><a href="About"><span className="text-green-500">✔ </span>About</a></li>
            
            <li><a href="Gallery"><span className="text-green-500">✔ </span>Gallery</a></li>
            {/* <li><a href=""><span className="text-green-500">✔ </span>Location</a></li> */}
            <li><a href="Contact"><span className="text-green-500">✔ </span>Contact Us</a></li>
            
          </ul>
        </div>

        {/* Third Part: Services */}
        <div className="widget-area">
          <h3 className="widget-title flex items-center mb-2"><strong>Services</strong></h3>
          <ul id="menu-footer-quick-links">
            <li><a href="Household"><span className="text-green-500">✔ </span> Home Relocation</a></li>
            <li><a href="Office"><span className="text-green-500">✔ </span> Office Relocation</a></li>
            <li><a href="Vehicle"><span className="text-green-500">✔ </span> Vehical Transportation</a></li>
            {/* <li><a href="insurance.html"><span className="text-green-500">✔ </span> Insurance Management</a></li> */}
            {/* <li><a href="warehousing"><span className="text-green-500">✔ </span> Warehousing and Storage</a></li> */}
            <li><a href="Shop"><span className="text-green-500">✔ </span> Shop Shifting</a></li>
            <li><a href="AcService"><span className="text-green-500">✔ </span> AC Rent Sevice</a></li>
            <li><a href="AcService"><span className="text-green-500">✔ </span> AC AMC Sevice</a></li>
            {/* <li><a href="AcService"><span className="text-green-500">✔ </span> AC</a></li> */}
            {/* <li><a href="AcService"><span className="text-green-500">✔ </span> AC Service</a></li> */}
          </ul>
        </div>

        {/* Fourth Part: Contact Us and Social Icons */}
        <div className="widget-area">
          <h3 className="widget-title mb-3"><strong>Contact Us</strong></h3>
          <p>Shop No. 19 Malik Compound, Damu Nagar Old Bus Stop, Near Otis Company, Opp. White City Building, Kandivali (E), Mumbai - 400101.</p>
          {/* <p className='widget-title'><strong>Phone No.:  </strong> +91-9004-780981</p> */}

          <div className="social-icons circle mt-3 mr-5 ">
            <ul className="list-inline flex justify-center space-x-4">
              <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-blue-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.facebook.com/maxpackersnmovers" data-tooltip="Facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-pink-500 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.instagram.com/maxpackerandmovers/" data-tooltip="Instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://www.youtube.com/channel/UCCoQx1q0tsjzxazPeG7CpCg" data-tooltip="YouTube"><i className="fa fa-youtube"></i></a></li>
              <li><a className="tooltip-bottom bg-white text-gray-700 hover:text-red-600 shadow-lg w-10 h-10 flex items-center justify-center rounded-full transition-colors" target="_blank" href="https://maxpackersandmoversinmumbai.blogspot.com/" data-tooltip="Blog"><i className="fa fa-heart"></i></a></li>
            </ul>
          </div>          
          </div>
      </div>
    </footer>
  );
}
