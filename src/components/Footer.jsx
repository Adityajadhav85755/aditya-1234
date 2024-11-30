import React from 'react'
import whatsupLogo from '../assets/images/whatsup.png'
import phoneLogo from '../assets/images/phone.png'
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
    <div className='fixed bottom-10 left-10'>
      <a href="tel:9004780981">
        <img src={whatsupLogo} alt="whatsup sky packers and movers" className='w-16 h-16' />
      </a>
    </div>
    <div className='fixed bottom-10 right-10'>
      <a href="tel:9004780981">
        <img src={phoneLogo} alt="whatsup sky packers and movers" className='w-16 h-16' />
      </a>
    </div>



    <div className='grid grid-cols-3 gap-20 p-8'>
      <div className='flex flex-col gap-5'>
        <a href="/" className='z-10'>
          <img src={logo} alt="" className='w-20 h-20 z-10' />
        </a>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum tempora itaque quae eum fuga perferendis expedita impedit eaque consectetur. Cumque?</p>
      </div>

      <div>
        <h3 className='px-1 tracking-wider font-semibold'>Quick Links</h3>

        <ul className='flex flex-col  justify-center items-start gap-0 text-white'>
          <li><a href="home" className=' px-1 py-1'>Home</a></li>
          <li><a href="services" className=' px-1 py-1'>Services</a></li>
          <li><a href="about" className=' px-1 py-1'>About</a></li>
          <li><a href="gallery" className=' px-1 py-1'>Gallery</a></li>
          <li><a href="contact" className=' px-1 py-1'>Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className='px-1 tracking-wider font-semibold'>Contact Info</h3>
        <div className='flex flex-col px-1  tracking-wider'>
            <p>info@skysolution.com</p>
            <p>sales@skysolution.com</p>
            <p>9004780981</p>
            <p>9004780981</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
