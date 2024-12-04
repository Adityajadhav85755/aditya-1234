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
export default function Sidebar({ LoginStatusContext, setShowLoginForm }) {
    let [showSideber,setShowSidebar]=useState(false)
    let [loginStatus,setLoginStatus,userData,setUserData]=useContext(LoginStatusContext)
    let [showService,setShowService]=useState(false)
    return (

        <>
        <nav id='navbar' className='hidden relative max-[885px]:flex'>
            <div className=' flex justify-center items-center p-4 pb-0 gap-5 relative bg-primary '>
                <div className='logoContainer h-[130%] w-[130%] z-1 bg-secondary absolute left-0 top-0'>
                {/* <div className='logoContainer h-[130%] w-full z-1 bg-secondary absolute left-0 top-0'> */}
                </div>
                <Link to="/" className='z-10'>   
                    <img src={logo} alt="" className='w-16 h-13 z-10'   />
                    {/* <img src={logo} alt="" classNa me='w-16 h-12 z-10' /> */}
                </Link>
                {/* <p className='font-bold text-white text-xl leading-6 z-10' >Sky Packers & Movers</p> */}
            </div>


            <div className='bg-primary w-full flex items-center justify-end pr-5'>
                <ul className='flex text-white font-semibold justify-center items-center gap-10 '>
                    {/* <li><Link to="/" className='tracking-wider px-2 py-1'>Home</Link></li>
                    <li className='group relative py-1'>
                        <Link className='tracking-wider px-2 py-1'>Services</Link>
                        <ul className='hidden group-hover:flex absolute bg-primary text-white py-2  rounded-sm top-full  flex-col   gap-y-5 z-50'>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 relative group duration-300'><Link to="/household" className=' after:hidden '>Household</Link>
                            </li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300' ><Link to="/office" className=' after:hidden'>Office</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/vehicle" className=' after:hidden'>Vehicle</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/shop" className='after:hidden'>Shop</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/AcService" className='after:hidden'>Ac Service</Link></li>
                        </ul>
                    </li> */}

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
        <div className={`sidebar bg-primary w-1/2 min-h-screen flex-col  text-white fixed top-0 left-0 z-50 flex ${(showSideber)?"max-[885px]:translate-x-[0]":"max-[885px]:translate-x-[-500px]"} transition-all ease max-[885px]:flex max-[616px]:w-[75%] hidden` }>
            {/* Profile Section */}
            <i class="fa-solid fa-xmark text-3xl self-end px-8 py-4" onClick={()=>{setShowSidebar(false)}}></i>
            {/* <div className="flex items-center gap-3 bg-secondary p-4 rounded-md mb-6 m-4">
                <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold text-lg">{userData.name}</p>
                </div>
            </div> */}



            <div className="mt-6">
                <ul className='flex flex-col gap-y-3'>

            {/* <li className="group relative">
                    <Link to="#" className="hover:text-secondary">Services</Link>
                    <ul className="hidden group-hover:flex flex-col pl-4 mt-2 text-sm">
                        <li><Link to="/household" className="hover:text-secondary">Household</Link></li>
                        <li><Link to="/office" className="hover:text-secondary">Office</Link></li>
                        <li><Link to="/vehicle" className="hover:text-secondary">Vehicle</Link></li>
                        <li><Link to="/shop" className="hover:text-secondary">Shop</Link></li>
                        <li><Link to="/AcService" className="hover:text-secondary">Ac Service</Link></li>
                    </ul>
                </li> */}

                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className=' p-4 py-2 text-xl font-semibold flex justify-between cursor-pointer bg-white text-primary mx-4 rounded-md items-center ' onClick={()=>{setShowService(!showService)}}>Services
                <i class="fa-solid fa-angle-down"></i>
                </li>

{showService && 
                <ul className='flex flex-col gap-y-2'>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center  ml-10'><Link to={"/"}>Household Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center  ml-10'><Link to={"/"}>Office Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/"}>Vehicle Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/"}>Shop Shifting</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center ml-10'><Link to={"/"}>AC Service</Link></li>
                </ul>
}

                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center '><Link to={"/"}>About</Link></li>
                <li className='  p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center '><Link to={"/"}>Gallery</Link></li>
                <li className=' p-4 py-2 text-xl font-semibold cursor-pointer bg-white text-primary mx-4 rounded-md items-center '><Link to={"/"}>Contact</Link></li>

                </ul>
            </div>
        </div>
        </>
    );
}
