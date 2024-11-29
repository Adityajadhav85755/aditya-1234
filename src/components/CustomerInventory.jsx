import React, { useState } from 'react'
import { useContext } from 'react'
import { ListContext } from '../Household'
import Dropdown from './Dropdown'
import Inventory from './Inventory'
// import { ListContext } from '../Household'
export default function CustomerInventory({context2}) {


    
    // let [customerInventoryDisplay,setcustomerInventoryDisplay]=useContext(ListContext)   
    let [customerList,setCustomerList,customerInventoryDisplay,setcustomerInventoryDisplay]=useContext(context2)   
    // let [customerList,setCustomerList,customerInventoryDisplay,setcustomerInventoryDisplay]=useContext(ListContext)   
    // let [customerList,setCustomerList]=useState([])
    // let [customerList,setCustomerList,customerInventoryDisplay,setcustomerInventoryDisplay]=useContext(ListContext)   
    // console.log(customerList)
  return (
      <div className='w-full flex flex-col max-w-[400px] h-full max-h-[500px] bg-white rounded-lg overflow-hidden fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
      <div className='text-center font-semibold text-white bg-primary py-2 px-0 '>
            <h4 className='text-base'>Your Inventory</h4>

        </div>
        <div className='m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-16'>
                {(customerList.length==0)?<div className='flex justify-center items-center h-full'>Your Cart Is Empty Please Add</div>:customerList.map((item,i)=>{
                    return <div key={i} className={`w-full bg-gray-300 text-primary font-semibold py-3 text-left px-4 relative rounded-lg  justify-between items-center ${(item.subItem[0].quantity==0)?"hidden":"flex"}`}>
                        {/* <div className='flex justify-between w-full '> */}
                        <p>
                        {item.subItem[0].name}
                        </p>
       
                        <div className="flex gap-x-2 items-center border border-primary px-2 py-1 rounded-md cursor-pointer">
                                        <i className="fa-solid fa-minus" onClick={() => { }}></i>
                                        {item.subItem[0].quantity}
                                        <i className="fa-solid fa-plus" onClick={() => {  }}></i>
                                    </div>
                        </div>
                })}
                
                <div className='flex justify-center px-8 py-2 bg-primary items-center absolute w-full bottom-0 left-0 '>
                    <button className='text-white font-bold bg-green-500 px-4 py-1 rounded-full' onClick={()=>{setcustomerInventoryDisplay(false)}}>Close</button>
                </div>
            </div>
    </div>
  )
}
