import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/lucky.png';
import profile from '../assets/images/profile.png';
import { useMediaQuery } from 'react-responsive'; // For detecting screen size

export default function Navbar({ LoginStatusContext, setShowLoginForm }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loginStatus, setLoginStatus] = React.useContext(LoginStatusContext);
    const [showMessageOption, setShowMessageOption] = useState(false);

    // Detect if the screen is mobile or desktop
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const toggleMessageOptions = () => {
        setShowMessageOption(!showMessageOption);
    };

    const callNumber = () => {
        window.open(`tel:+919004424598`);
        setShowMessageOption(false); // Close the dropdown after action
    };

    const sendWhatsAppMessage = () => {
        window.open(`https://wa.me/919004424598?text=Hello`);
        setShowMessageOption(false); // Close the dropdown after action
    };

    return (
        <>
            {/* Navbar for larger screens */}
            <nav className="hidden md:flex items-center justify-between pr-3 md:p-4 md:py-0 w-full fixed top-0 left-0 z-50 shadow-md bg-shahid">
                <div className="flex items-center gap-2">
                    <Link to="/" className="z-10 mt-2">
                        <img src={logo} alt="Logo" className="w-13 h-10" />
                    </Link>
                    <span className="hidden md:contents font-bold text-white">Sky Need Solution</span>
                </div>

                <div className="flex justify-end items-center gap-5">
                    <ul className="flex text-white font-semibold justify-center items-center gap-10">
                        <li>
                            <Link
                                to="/"
                                className="tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="group relative py-1">
                            <Link
                                className="tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-shahid hover:rounded-lg hover:shadow-lg transition-all"
                            >
                                Services
                            </Link>
                            <ul className="hidden group-hover:flex absolute bg-shahid text-white py-2 rounded-sm top-full flex-col gap-y-5 z-50">
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/household-custom-inventory">Household</Link>
                                </li>
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/office-custom-inventory">Office</Link>
                                </li>
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/vehicle-custom-inventory">Vehicle</Link>
                                </li>
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/shop-custom-inventory">Shop</Link>
                                </li>
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/ac-service">Ac Service</Link>
                                </li>
                                <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                    <Link to="/warehouse">Warehouse</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                            >
                                Contact
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/gallery"
                                className={`tracking-wider px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all`}
                            >
                                Gallery
                            </Link>
                        </li> */}
                        <li className="relative">
                            <button
                                onClick={isMobile ? toggleMessageOptions : sendWhatsAppMessage}
                                className="tracking-wider flex gap-x-2 items-center px-4 py-2 border-2 border-transparent hover:border-white hover:bg-gray-700 hover:rounded-lg hover:shadow-lg transition-all"
                            >
                                <i className="fa-solid fa-headphones text-red-600 text-xl"></i>9004424598
                            </button>
                            {isMobile && showMessageOption && (
                                <ul className="absolute bg-shahid text-white py-2 rounded-sm top-full right-0 flex-col gap-y-5 z-50">
                                    <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                        <button onClick={callNumber}>Call</button>
                                    </li>
                                    <li className="hover:bg-gray-400 px-6 py-2 border-2 border-transparent hover:border-white hover:rounded-lg hover:shadow-lg">
                                        <button onClick={sendWhatsAppMessage}>WhatsApp</button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* {loginStatus ? (
                            <li className="flex items-center gap-x-2">
                                <Link to="/" className="flex items-center">
                                    <img src={profile} className="w-12 h-12 rounded-full" alt="Profile" />
                                    <p className="ml-3">{"userData.fullname" || "userData"}</p>
                                </Link>
                            </li>
                        ) : (
                            <button
                                className="bg-green-500 text-white px-4 py-1 rounded-full"
                                onClick={() => setShowLoginForm(true)}
                            >
                                Login
                            </button>
                        )} */}
                    </ul>
                </div>
            </nav>

                {/* Mobile Sidebar */}
                <div className="md:hidden">
                    {/* Topbar with Menu Button */}
                    <div className="fixed top-0 left-0 w-full bg-shahid flex items-center justify-between px-4 py-3 z-50 text-white">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="w-10 h-auto" />
                            <p className="font-bold text-lg ml-3">Sky Need Solution</p>
                        </Link>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-white text-3xl focus:outline-none"
                        >
                            <i className={`fa-solid ${isSidebarOpen ? "fa-xmark" : "fa-bars"}`}></i>
                        </button>
                    </div>

                    {/* Sidebar Menu */}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-primary text-white flex flex-col p-4 z-40 transition-transform duration-300 ${
                            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-white text-2xl"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {/* Links */}
                        <ul className="mt-6 flex flex-col gap-4">
                            <li>
                                <Link to="/" className="hover:text-secondary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-secondary">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-secondary">
                                    Services
                                </Link>
                            </li>
                            {loginStatus ? (
                                <li className="flex items-center mt-4">
                                    <img src={profile} className="w-10 h-10 rounded-full" alt="Profile" />
                                    <p className="ml-3">{"userData.fullname" || "Login"}</p>
                                </li>
                            ) : (
                                <button
                                    className="bg-green-500 text-white px-4 py-1 rounded-full mt-4"
                                    onClick={() => setShowLoginForm(true)}
                                >
                                    Login
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
        </>
    );
}