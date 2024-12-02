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
    let [loginStatus,setLoginStatus,userData,setUserData]=useContext(LoginStatusContext)
    return (
        <div className="sidebar bg-primary w-72 min-h-screen flex flex-col p-4 text-white">
            {/* Profile Section */}
            <div className="flex items-center gap-3 bg-secondary p-4 rounded-md mb-6">
                <img src={profile} alt="Profile" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold text-lg">{userData.name}</p>
                </div>
            </div>



            <div className="mt-6">
                <ul>

            <li className="group relative">
                    <Link to="#" className="hover:text-secondary">Services</Link>
                    <ul className="hidden group-hover:flex flex-col pl-4 mt-2 text-sm">
                        <li><Link to="/household" className="hover:text-secondary">Household</Link></li>
                        <li><Link to="/office" className="hover:text-secondary">Office</Link></li>
                        <li><Link to="/vehicle" className="hover:text-secondary">Vehicle</Link></li>
                       <li><Link to="/shop" className="hover:text-secondary">Shop</Link></li>
                        <li><Link to="/AcService" className="hover:text-secondary">Ac Service</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
}
