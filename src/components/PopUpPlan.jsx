import React from 'react'
import premium from '../assets/images/premiumhalf.png'
import { useContext } from 'react'
export default function PopUpPlan({FormContext}) {
    
    let [withinForm,setWithinForm,showPlan,setShowPlan]=useContext(FormContext)
    console.log(FormContext)
    function handlePremium(e){
        
        setWithinForm({...withinForm,plan:"premium"})
        console.log({...withinForm,plan:"premium"})
        setShowPlan(false);
    }
    
    function handleBasic(e){
        
        setWithinForm({...withinForm,plan:"basic"})
        console.log({...withinForm,plan:"basic"})
        setShowPlan(false);
    }
    
  return (

    <>

      <div className='fixed top-0 left-0  bg-gray-500 h-screen w-screen opacity-50 z-30 '>

      </div> 
      {/* <div className='w-full h-screen flex justify-center items-center'> */}

      <div className='w-full max-w-[1000px] fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] grid grid-cols-2 z-40 gap-5 '>
        <div className='bg-terniary  rounded-2xl flex flex-col justify-center items-center gap-y-5 overflow-hidden loadComponent loadFromLeft'>
            <div className='bg-yellow-400 '>
            <img src={premium} alt="" />
            </div>
            <div className='p-4'>
                <ul className='list-inside'>
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                        Benefit1
                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                        Benefit1
                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                        Benefit1
                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                        Benefit1
                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                        Benefit1
                    </li>
                    
                </ul>
            </div>
            <div>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white  hover:bg-blue-700 transition-all mb-4' onClick={handlePremium}>Choose Premium Plan</button>
            </div>
        </div>
       
        <div className='bg-terniary  rounded-2xl flex flex-col justify-center items-center gap-y-5 overflow-hidden loadFromRight'>
            <div className='bg-yellow-400 '>
            <img src={premium} alt="" />
            </div>
            <div className='p-4'>
                <ul className='list-inside'>
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                    High-Quality Packing
                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                    Flexible Scheduling

                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                    Professional Assistance

                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                    Intercity and Local Shifting

                    </li>
                    
                    <li className='flex items-center font-semibold text-lg'>
                    <i class="fas fa-check text-green-500 mr-4 text-2xl"/>
                    Specialized Services
                    </li>
                    
                </ul>
            </div>
            <div>
                <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white hover:bg-blue-700 transition-all mb-4' onClick={handleBasic}>Choose Basic Plan</button>
            </div>
        </div>
       
      </div>

      {/* </div> */}
    </>
  )
}
