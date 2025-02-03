import React from 'react'
import premium from '../assets/images/baseplan1.png'
import { useContext } from 'react'
export default function PopUpPlan({FormContext}) {
    
    let [withinForm,setWithinForm,showPlan,setShowPlan]=useContext(FormContext)
    // console.log(FormContext)
    function handlePremium(e){
        
        // setWithinForm({...withinForm,plan:"premium"})
        // console.log({...withinForm,plan:"premium"})
        // setShowPlan(false);
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

      <div className='w-full max-w-[1000px] fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] grid grid-cols-2 z-40 gap-5 place-items-center max-[671px]:grid-cols-1'>
        
       
       
       
       
       
        <div className='bg-terniary  rounded-2xl flex flex-col  items-center gap-y-5 overflow-hidden loadFromLeft w-full max-w-[300px] py-6'>
            <div className='bg-white  bg-cover bg-top rounded-lg' >
            <img src={premium} alt="" className='h-auto w-60 max-[671px]:hidden' />
            {/* <img src={premium} alt="" className='h-24 w-24' /> */}
            </div>
            <div className='p-4'>
                <ul className='list-inside'>
                    <li className='flex items-center  text-base '>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    High-Quality Packing
                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Flexible Scheduling

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Professional Assistance

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Intercity and Local Shifting

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Specialized Services
                    </li>
                    
                </ul>
            </div>
            <div>
                <button className='bg-PeriwinklePurpleDark p-2 px-4 font-bold tracking-wide w-full rounded-md text-white hover:bg-blue-700 transition-all mb-4' onClick={handlePremium}>Choose Premium Plan</button>
            </div>
        </div>
       
       
        <div className='bg-terniary  rounded-2xl flex flex-col  items-center gap-y-5 overflow-hidden loadFromRight w-full max-w-[300px] py-6'>
            <div className='bg-white  bg-cover bg-top rounded-lg' >
            <img src={premium} alt="" className='h-auto w-60 max-[671px]:hidden' />
            {/* <img src={premium} alt="" className='h-24 w-24' /> */}
            </div>
            <div className='p-4'>
                <ul className='list-inside'>
                    <li className='flex items-center  text-base '>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    High-Quality Packing
                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Flexible Scheduling

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Professional Assistance

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Intercity and Local Shifting

                    </li>
                    
                    <li className='flex items-center  text-base'>
                    <i className="fas fa-check text-green-500 mr-8 text-base"/>
                    Specialized Services
                    </li>
                    
                </ul>
            </div>
            <div>
                <button className='bg-PeriwinklePurpleDark p-2 px-4 font-bold tracking-wide w-full rounded-md text-white hover:bg-blue-700 transition-all mb-4' onClick={handleBasic}>Choose Basic Plan</button>
            </div>
        </div>
       
      </div>

      {/* </div> */}
    </>
  )
}
