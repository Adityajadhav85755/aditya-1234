import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import aboutImg from './assets/images/about.png'
import Service from './components/Service'
import AboutContent from './components/AboutContent'
import { LoginStatusContext } from './index';
import { useContext } from 'react'
import Login from './components/Login';
import Register from './components/Register'
import { useState } from 'react'
import { useEffect } from 'react'
import Why_Choose_us from './components/Why_Choose_us'
import Statics from './components/Statics'
import { Swiper } from 'swiper/react'
import AboutSwiper from './components/AboutSwiper'
import AboutServiceDetails from './components/AboutServiceDetails'
// import AllServices from './components/AllServices'
// import Service from './components/Service'

let LoginContext = React.createContext();
export default function About() {
  // let [loginStatus,setLoginStatus]=useContext(LoginStatusContext)
  let [loginStatus,setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]=useContext(LoginStatusContext)

  // let [showLoginForm, setShowLoginForm] = useState(false)
  // let [showRegisterForm, setShowRegisterForm] = useState(false)


  return (
    <>
    <header>
        {/* <Navbar/> */}
        <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData]}>
        <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>
        </LoginStatusContext.Provider>
    </header>

    <main>
    {/* <section className='my-8 bg-terniary flex flex-col items-center py-12 pb-0 px-8'>
          <div className='flex justify-center items-center'>
            <div className='w-1/2 h-full flex justify-center'>
              <img src={aboutImg} alt="about us" className='w-[600px]' />
            </div>
            <div className='w-1/2 flex flex-col p-4 px-0'>
              <h2 className='font-bold text-primary text-2xl'>About Us</h2>
              <p className='my-2'>We, Max Packers And Movers, located in Mumbai area, Kandivali EAST. Packers And Movers Is Great Service Provider In Mumbai For Shifting. We started our business in 2009, Initialy We provide shifting services within city. We deals with great customers and have great experiance.</p>
              <p className='my-2'>
                Max Packers And Movers in Mumbai, India is a trustworthy relocation and storage services company, serving inside and outside of India. We provide affordable and best packers and movers services in Mumbai i.e home shifting, office relocation, vehicle transportation, warehousing, and logistics services to the companies and families all over the world.
              </p>
​
              <p className='my-2'>Initially we face some dificulties but we never stop. As part of expansion we now provide warehouse services also, We have our own wan for relocation and now relocating.</p>
              <ul className='list-disc'>
                <li>Residential Moving</li>
                <li>Commercial Moving</li>
                <li>Domestic Relocation Services</li>
                <li>International Home Relocation And Office Relocation Solutions</li>
                <li>Car & Bike Carrier Service</li>
              </ul>
            </div>
          </div>
          ​
        </section> */}
        {/* <ServiceDetails/> */}
        <AboutContent/>
        {/* <Services/> */}
        <AboutServiceDetails/>
        {/* <Service/> */}
        {/* <AllServices/> */}
        {/* <AboutServiceDetailNewPage/> */}
        
        <Statics/>
        <AboutSwiper/>
        <Why_Choose_us/>

        <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
          {showLoginForm && <Login LoginContext={LoginContext} />}
          {showRegisterForm && <Register LoginContext={LoginContext} />}
        </LoginContext.Provider>
    </main>
    
    <Footer/>
    </>
  )
}