// import React from 'react';
// import logo from '../assets/images/logo2.png';
// import profile from '../assets/images/profile.png';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// export default function Sidebar({ LoginStatusContext, setShowLoginForm }) {
//     let [loginStatus, setLoginStatus] = useContext(LoginStatusContext);

//     return (
//         <div className="sidebar bg-primary w-64 min-h-screen flex flex-col p-4 text-white">
//             <div className="logoContainer bg-secondary p-4 flex items-center">
//                 <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
//                 <p className="font-bold text-xl">Sky Packers & Movers</p>
//             </div>
//             <ul className="mt-6 flex flex-col gap-4">
//                 <li><Link to="/" className="hover:text-secondary">Home</Link></li>
//                 <li className="group relative">
//                     <Link to="#" className="hover:text-secondary">Services</Link>
//                     <ul className="hidden group-hover:flex flex-col pl-4 mt-2 text-sm">
//                         <li><Link to="/household" className="hover:text-secondary">Household</Link></li>
//                         <li><Link to="/office" className="hover:text-secondary">Office</Link></li>
//                         <li><Link to="/vehicle" className="hover:text-secondary">Vehicle</Link></li>
//                         <li><Link to="/shop" className="hover:text-secondary">Shop</Link></li>
//                         <li><Link to="/AcService" className="hover:text-secondary">Ac Service</Link></li>
//                     </ul>
//                 </li>
//                 <li><Link to="/about" className="hover:text-secondary">About</Link></li>
//                 <li><Link to="/gallery" className="hover:text-secondary">Gallery</Link></li>
//                 <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
//                 <li>
//                     <Link to="tel:9004780981" className="flex items-center gap-2 hover:text-secondary">
//                         <i className="fa-solid fa-headphones text-red-600"></i>
//                         9004780981
//                     </Link>
//                 </li>
//                 {loginStatus ? (
//                     <li className="flex items-center mt-4">
//                         <img src={profile} className="w-10 h-10 rounded-full" alt="Profile" />
//                         <p className="ml-3">{("userData.name==undefined") ? "Login" : "userData.name"}</p>
//                     </li>
//                 ) : (
//                     <button className="bg-green-500 text-white px-4 py-1 rounded-full mt-4" onClick={() => setShowLoginForm(true)}>
//                         Login
//                     </button>
//                 )}
//             </ul>
//         </div>
//     );



// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png';
import logo from '../assets/images/logo2.png';
import { useContext } from 'react';
import { LoginStatusContext } from '..';
import shifting from '../assets/images/shifting.jpg'; 

export default function Sidebar({ LoginStatusContext, setShowLoginForm, }) {
    let [showSideber,setShowSidebar]=useState(false)
    let [loginStatus,setLoginStatus,userData,setUserData]=useContext(LoginStatusContext)
    let [showService,setShowService]=useState(false)
    return (
        
        <>
        <nav id='navbar' className='hidden relative max-[885px]:flex '>
<<<<<<< HEAD
            <div className=' flex justify-center items-center p-4 pb-0 gap-5 relative bg-primary '>
=======
            <div className=' flex justify-center items-center p-4 pb-0 gap-5 relative bg-PeriwinklePurpleDark '>
>>>>>>> d5cb291 (Your commit message here)
                <div className='logoContainer h-[130%] w-[130%] z-1 bg-secondary absolute left-0 top-0'>
                {/* <div className='logoContainer h-[130%] w-full z-1 bg-secondary absolute left-0 top-0'> */}
                </div>
                <Link to="/" className='z-10'>   
                    <img src={logo} alt="" className='w-16 h-13 z-10'   />
                    {/* <img src={logo} alt="" classNa me='w-16 h-12 z-10' /> */}
                </Link>
                {/* <p className='font-bold text-white text-xl leading-6 z-10' >Sky Packers & Movers</p> */}
            </div>


            <div className='bg-PeriwinklePurpleDark w-full flex items-center justify-end pr-5'>
                <ul className='flex text-white font-semibold justify-center items-center gap-10 '>
                    <li><Link to="/" className='tracking-wider px-2 py-1'>Home</Link></li>
                    <li className='group relative py-1'>
                        <Link className='tracking-wider px-2 py-1'>Services</Link>
                        <ul className='hidden group-hover:flex absolute bg-PeriwinklePurpleDark text-white py-2  rounded-sm top-full  flex-col   gap-y-5 z-50'>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 relative group duration-300'><Link to="/household" className=' after:hidden '>Household</Link>
                            </li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300' ><Link to="/office" className=' after:hidden'>Office</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/vehicle" className=' after:hidden'>Vehicle</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/shop" className='after:hidden'>Shop</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/AcService" className='after:hidden'>Ac Service</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/WareHouse" className='after:hidden'>Warehouse</Link></li>
                        </ul>
                    </li>

                {loginStatus ? <li className=' px-6 py-2 duration-300 '>
                        <Link to="/AcService" className='after:hidden flex items-center gap-y-5'>
                            <p className='ml-3'>{(userData.fullname==undefined)?"":userData.fullname}</p>
                        <img src={profile} className='w-12 h-12' alt="" />
                        </Link>
                        </li>
                         :<button className='bg-green-500 text-white px-4 py-1 rounded-full' onClick={()=>{setShowLoginForm(true)}} >Login</button>}
                    <li onClick={()=>{setShowSidebar(!showSideber)}}>
                        <i className='fa-solid fa-bars text-3xl' ></i>
                    </li>
                </ul>
            </div>
        </nav>
        {console.log(showSideber)}
        <div
<<<<<<< HEAD
    className={`sidebar bg-primary min-h-screen flex-col text-white fixed top-0 left-0 z-50 flex
=======
    className={`sidebar bg-PeriwinklePurpleDark min-h-screen flex-col text-white fixed top-0 left-0 z-50 flex
>>>>>>> d5cb291 (Your commit message here)
    ${(showSideber ? "translate-x-0" : "-translate-x-full")}
    transition-all ease-in-out
    w-1/2 max-[885px]:w-[75%] max-[616px]:w-[100%] px-4`}>
        {/* <div className={`sidebar bg-primary w-1/2 min-h-screen flex-col  text-white fixed top-0 left-0 z-50 flex ${(showSideber)?"max-[885px]:translate-x-[0]":"max-[885px]:translate-x-[-500px]"} transition-all ease max-[885px]:flex max-[616px]:w-[75%] hidden` }> */}
            {/* Profile Section */}
            {/* <i class="fa-solid fa-xmark text-3xl self-end px-8 py-4" onClick={()=>{setShowSidebar(false)}}></i>
            <div className="flex items-center gap-3 bg-secondary p-4 rounded-md mb-6 m-4">
                <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold text-lg">{userData.name}</p>
                </div>
            </div> */}



<<<<<<< HEAD
            <div className="sidebar bg-primary min-h-screen flex-col text-white fixed top-0 left-0 z-50 flex w-1/2 max-[885px]:w-[75%] max-[616px]:w-[100%] px-4">
=======
            <div className="sidebar bg-PeriwinklePurpleDark min-h-screen flex-col text-white fixed top-0 left-0 z-50 flex w-1/2 max-[885px]:w-[75%] max-[616px]:w-[100%] px-4">
>>>>>>> d5cb291 (Your commit message here)

    {/* Close Button */}
    <i className="fa-solid fa-xmark text-3xl self-end px-8 py-4" onClick={() => { setShowSidebar(false); }}></i>
    


            {/* Scrollable Wrapper */}
    <div className="scrollable-content overflow-y-auto h-[80vh] px-4">

    {/* Profile Section */}
    <div className="flex items-center gap-3 
    bg-secondary 
    p-4 sm:p-3 md:p-6 lg:p-8 
    rounded-md 
    mb-6 sm:mb-4 md:mb-5 lg:mb-8 
    m-4 
    max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] 
    mx-auto">
        <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
        <div>
            <p className="font-semibold text-lg">{userData.name}</p>
        </div>
    </div>

    {/* Video Section */}
    <div className="bg-secondary 
    p-4 sm:p-3 md:p-6 lg:p-8 
    rounded-md 
    mb-6 sm:mb-4 md:mb-5 lg:mb-8 
    m-4 
    max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] 
    mx-auto">
        <h3 className="text-xl font-semibold mb-2">Our Services</h3>
        <video 
            className="w-full rounded-md"
            controls
            // poster="path/to/thumbnail.jpg" /* Add a video poster image */
        >
            <source src="/4277721-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
{/* </div> */}

            {/* <div className="video-container w-full max-w-4xl mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md animate-fade-in"> */}
  {/* Video Content */}
  {/* <h2 className="text-xl font-semibold text-center mb-4 animate-slide-down">Videos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Autoplaying Video */}
    {/* <div className="video-item">
      <video
        className="w-full h-40 rounded-lg"
        src="https://www.example.com/sample-video.mp4"
        autoPlay
        muted
        loop
      ></video>
      <p className="text-center mt-2 animate-fade-in">Autoplay Video</p>
    </div> */}
    {/* Embedded YouTube Video 1 */}
    {/* <div className="video-item group">
      <iframe
        className="w-full h-40 rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
        src="https://www.youtube.com/embed/example1?autoplay=1&mute=1"
        title="Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-center mt-2 animate-fade-in">Video 1</p>
    </div>
    </div>
  </div>
</div> */}


           

  


            <div className="mt-[-1rem]">
                <ul className='flex flex-col gap-y-3'>

            {/* <li className="group relative">
                    <Link to="#" className="hover:text-secondary">Services</Link>
                    <ul className="hidden group-hover:flex flex-col pl-4 mt-2 text-sm">
                        <li><Link to="/household" className="  flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">Household</Link></li>
                        <li><Link to="/office" className="hover:text-secondary">Office</Link></li>
                        <li><Link to="/vehicle" className="hover:text-secondary">Vehicle</Link></li>
                        <li><Link to="/shop" className="hover:text-secondary">Shop</Link></li>
                        <li><Link to="/AcService" className="hover:text-secondary">Ac Service</Link></li>
                        <li><Link to="/WareHouse" className="hover:text-secondary">Ware House</Link></li>
                    </ul>
                </li> */}
                
                
                <div className="pt-0 -mt-1 pb-0 flex flex-wrap bg-white justify-center p-2 rounded-md mb-2 m-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 transform -translate-x-4">

  {/* Household Service */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
  {/* <div className="rounded-xl flex flex-col items-center bg-blue-100"> */}
    {/* Image container */}
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-99px -80px',
          }}
        ></div>
      </Link>
    <div className="font-2 text-center text-black px-0 pt-0">
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Household
    </div>
</div>

  {/* Office Service */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-99px -80px',
          }}
        ></div>
      </Link>
    <div className="font-2 text-center text-black px-0 pt-0">
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
    Office
    </div>
</div>


  {/* Vehicle Service */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-99px -80px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0">
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Vechile
    </div>
</div>

  {/* AC Service */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-229px -232px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0"> 
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Ac service
    </div>
</div>

{/* For other */}
<div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/warehouse">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-229px -232px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0"> 
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Warehouse
    </div>
    </div>



    {/* For other */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-229px -232px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0"> 
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Other2
    </div>
    </div>

        {/* For other */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-229px -232px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0"> 
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Other3
    </div>
    </div>


        {/* for other */}
  <div className="flex flex-col items-center mt-[1.5rem] mb-4 w-1/4">
    <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
      <Link to="/Office">
        <div
          className="h-14 w-14 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${shifting})`,
            backgroundPosition: '-229px -232px',
          }}
        ></div>
      </Link>

    {/* Text container below the image */}
    <div className="font-2 text-center text-black px-0 pt-0"> 
    </div>
  </div>
  <div className="font-semibold text-sm text-center text-black px-0 pt-0 ">
        Other4
    </div>
    </div>


  {/* Add other services in similar blocks */}
</div>  

                <li className='p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md sm:p-3 sm:mx-3 md:p-4 md:mx-5 lg:p-6 lg:mx-6 transform -translate-x-4'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md sm:p-3 sm:mx-3 md:p-4 md:mx-5 lg:p-6 lg:mx-6 transform -translate-x-4 ' onClick={()=>{setShowService(!showService)}}>Services
                <i class="fa-solid fa-angle-down"></i>
                </li>

{showService && 
                <ul className='flex flex-col gap-y-2'>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center  ml-10'><Link to={"/household"}>Household Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center  ml-10'><Link to={"/office"}>Office Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/vehicle"}>Vehicle Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/shop"}>Shop Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/WareHouse"}>Warehouse</Link></li>
                
                
                {/* SHOW TABLES FROM solution; */}
                </ul>
}

                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md sm:p-3 sm:mx-3 md:p-4 md:mx-5 lg:p-6 lg:mx-6 transform -translate-x-4'><Link to={"/about"}>About</Link></li>
                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md sm:p-3 sm:mx-3 md:p-4 md:mx-5 lg:p-6 lg:mx-6 transform -translate-x-4'><Link to={"/gallery"}>Gallery</Link></li>
                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md sm:p-3 sm:mx-3 md:p-4 md:mx-5 lg:p-6 lg:mx-6 transform -translate-x-4 '><Link to={"/contact"}>Contact</Link></li>

                </ul>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}
