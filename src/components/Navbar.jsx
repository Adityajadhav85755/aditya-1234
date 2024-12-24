import React from 'react'
import logo from '../assets/images/logo2.png'
import { Link } from 'react-router-dom'
import profile from '../assets/images/profile.png'
import { useContext } from 'react'
// import { LoginStatusContext } from '../App'
export default function Navbar({LoginStatusContext,setShowLoginForm}) {
    // console.log(LoginStatusContext)
    // let [loginStatus,setLoginStatus,userData,setUserData,setShowLoginForm]=useContext(LoginStatusContext)
    let [loginStatus,setLoginStatus,userData,setUserData]=useContext(LoginStatusContext)
    

    // console.log(loginStatus)
    return (
        <nav id='navbar' className='fixed top-0 left-0 w-full z-50  shadow-md hidden md:block '>
            <div className=' flex justify-center items-center p-4 pb-0   gap-5 relative bg-primary '>
                <div className='logoContainer h-[120%] w-[120%] z-1 bg-PeriwinklePurpleDark absolute left-0 top-0'>
                {/* <div className='logoContainer h-[130%] w-full z-1 bg-secondary absolute left-0 top-0'> */}
                </div>
                 {/* Left Side: Logo */}
                 {/* <div className='flex items-center'>
                    <Link to="/" className='z-10'>
                        <img src={logo} alt="Logo" className='w-16 h-13 z-10' />
                    </Link>
                </div> */}
                </div>


            <div className='bg-PeriwinklePurpleDark w-full flex justify-center items-center'>
                <ul className='flex text-white font-semibold justify-center items-center gap-10'>
                    <li><Link to="/" className='tracking-wider px-2 py-1'>Home</Link></li>
                    <li className='group relative py-1 '>
                        <Link className='tracking-wider px-2 py-1'>Services</Link>
                        <ul className='hidden group-hover:flex absolute bg-PeriwinklePurpleDark text-white py-2  rounded-sm top-full  flex-col   gap-y-5 z-50'>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 relative group duration-300'><Link to="/household" className=' after:hidden '>Household</Link>
                            </li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300' ><Link to="/office" className=' after:hidden'>Office</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/vehicle" className=' after:hidden'>Vehicle</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/shop" className='after:hidden'>Shop</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/AcService" className='after:hidden'>Ac Service</Link></li>
                            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'><Link to="/WareHouse" className='after:hidden'>Warehouse</Link></li>
<<<<<<< HEAD
                            
                            
                        </ul>
                    </li>

                    <li><Link to="/about" className='tracking-wider px-2 py-1'>About</Link></li>
=======
                        </ul>
                    </li>

                    {/* <li><Link to="/about" className='tracking-wider px-2 py-1'>About</Link></li> */}
>>>>>>> d5cb291 (Your commit message here)
                    {/* <li><Link to="/gallery" className='tracking-wider px-2 py-1'>Gallery</Link></li> */}
                    <li><Link to="/contact" className='tracking-wider px-2 py-1'>Contact</Link></li>
                    <li><Link to="tel:9004780981" className='tracking-wider flex gap-x-2 justify-center items-center px-2 py-1'><i className="fa-solid fa-headphones text-red-600 text-xl"></i>9004780981</Link></li>
                    {loginStatus ? <li className=' px-6 py-2 duration-300 '>
                        <Link to="/AcService" className='after:hidden flex items-center gap-y-5'><img src={profile} className='w-12 h-12' alt="" />
                            <p className='ml-3'>{(userData.fullname==undefined)?"":userData.fullname}</p>
                        </Link>
                        </li>
                         :<button className='bg-green-500 text-white px-4 py-1 rounded-full' onClick={()=>{setShowLoginForm(true)}} >Login</button>}

                          {/* Menu Dropdown */}
    <li className='group relative py-1'>
        <Link className='tracking-wider px-2 py-1 text-white'>
            Menu
        </Link>
        <ul className='hidden group-hover:flex absolute bg-PeriwinklePurpleDark text-white py-2 rounded-sm top-full  flex-col gap-y-5 z-50'>
            <li className='hover:bg-white hover:text-primary px-6 py-2 relative group duration-300'>
                <Link to="/shop" className='after:hidden'>Main</Link>
            </li>
            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'>
                <Link to="/office" className='after:hidden'>Sub Type</Link>
            </li>
            <li className='hover:bg-white hover:text-primary px-6 py-2 duration-300'>
                <Link to="/item3" className='after:hidden'>Shift</Link>
            </li>
        </ul>
    </li>

                </ul>
            </div>
        </nav>
    )
}
