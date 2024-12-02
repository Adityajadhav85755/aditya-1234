import React from 'react'
import logo from '../assets/images/logo2.png'
import { Link } from 'react-router-dom'
import profile from '../assets/images/profile.png'
import { useContext } from 'react'
// import { LoginStatusContext } from '../App'
export default function Navbar({LoginStatusContext,setShowLoginForm}) {
    // console.log(LoginStatusContext)
    // let [loginStatus,setLoginStatus,userData,setUserData,setShowLoginForm]=useContext(LoginStatusContext)
    let [loginStatus,setLoginStatus]=useContext(LoginStatusContext)


    // console.log(loginStatus)
    return (
        <nav id='navbar' className='flex relative' >
            <div className=' flex justify-center items-center p-4 pb-0   gap-5 relative bg-primary '>
                <div className='logoContainer h-[130%] w-[130%] z-1 bg-secondary absolute left-0 top-0'>
                {/* <div className='logoContainer h-[130%] w-full z-1 bg-secondary absolute left-0 top-0'> */}
                </div>
                <Link to="/" className='z-10'>   
                    <img src={logo} alt="" className='w-16 h-13 z-10'   />
                    {/* <img src={logo} alt="" classNa me='w-16 h-12 z-10' /> */}
                </Link>
                {/* <p className='font-bold text-white text-xl leading-6 z-10' >Sky Packers & Movers</p> */}
            </div>


            <div className='bg-primary w-full flex justify-center items-center'>
                <ul className='flex text-white font-semibold justify-center items-center gap-10'>
                    <li><Link to="/" className='tracking-wider px-2 py-1'>Home</Link></li>
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
                    </li>

                    <li><Link to="/about" className='tracking-wider px-2 py-1'>About</Link></li>
                    <li><Link to="/gallery" className='tracking-wider px-2 py-1'>Gallery</Link></li>
                    <li><Link to="/contact" className='tracking-wider px-2 py-1'>Contact</Link></li>
                    <li><Link to="tel:9004780981" className='tracking-wider flex gap-x-2 justify-center items-center px-2 py-1'><i className="fa-solid fa-headphones text-red-600 text-xl"></i>9004780981</Link></li>
                    {loginStatus ? <li className=' px-6 py-2 duration-300 '>
                        <Link to="/AcService" className='after:hidden flex items-center gap-y-5'><img src={profile} className='w-12 h-12' alt="" />
                            <p className='ml-3'>{("userData.name==undefined")?"Login":"userData.name"}</p>
                        </Link>
                        </li>
                         :<button className='bg-green-500 text-white px-4 py-1 rounded-full' onClick={()=>{setShowLoginForm(true)}} >Login</button>}
                    

                </ul>
            </div>
        </nav>
    )
}
