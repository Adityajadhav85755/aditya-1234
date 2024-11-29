import React, { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown'
// import { ListContext } from '../Household';
import CustomerInventory from './CustomerInventory';
import { ListContext } from '../Household';
import { Link } from 'react-router-dom';
export let InvetoryContext = React.createContext()

export default function Inventory({ inventoryItem,context }) {
  
    let [inventory, setInvetory] = useState(inventoryItem)
    let [totalItem,setTotalItem]=useState(0)
    let [customerList, setCustomerList, customerInventoryDisplay, setcustomerInventoryDisplay] = useContext(context)
    function saveCustomerInventory() {
        console.log(customerList)
    }
    function activeItem(index, e) {
        let element = e.target;
        let updatedInventory = inventory.map((item, i) => {
            if (i == index) {
                item.active = true;
                return item
            }
            else {
                item.active = false;
                return item
            }
        })
        setInvetory(updatedInventory)
    }

    useEffect(()=>{
        function getTotalItem(){
            // setTotalItem(1)
        }
        getTotalItem()
    },[customerList])
    return (

        <div className='w-full flex flex-col max-w-[600px] h-full max-h-[700px] bg-white rounded-lg overflow-hidden relative loadComponent'>
            <div className='flex-2 shrink-0'>
                <div className='text-center font-semibold text-white bg-primary py-4 px-0 relative'>
                <Link to={"/"} className='absolute left-5 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full '>
        <i class="fa-solid fa-arrow-left "></i>
            </Link>
                    <h4 className='text-xl '>Customize Inventory</h4>
                </div>
                <div className='flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold'>
                    {inventory.map((item, i) => {
                        return <p key={i} className={`text-primary border-primary border px-4 py-1 rounded-full cursor-pointer ${item.active ? "activeDropdown" : ""} shrink-0`} onClick={(e) => { activeItem(i, e) }}>{item.mainItem}</p>
                    })}

                </div>
            </div>

            <InvetoryContext.Provider value={[inventory, setInvetory,setTotalItem,totalItem ]}>

                <div className='m-4 flex flex-col gap-y-4 overflow-y-scroll flex-1 shrink-0 mb-20'>
                    {/* {console.log(inventory)} */}
                    {inventory.map((item, i) => {
                        if (item.active) {
                            return <Dropdown key={i} item={item} topLevel={i} context={InvetoryContext} context2={context} />
                            // return <Dropdown key={i} subItem={item.subItem}  />
                        }
                    })}
                </div>
                {customerInventoryDisplay && <CustomerInventory context2={context} />}
            </InvetoryContext.Provider>


            <div className='flex justify-between px-8 py-4 bg-primary items-center absolute w-full bottom-0 left-0'>
                <h4 className='text-lg text-white '>Total Item = <span className='text-gray-400'>{totalItem}</span></h4>
                <button className='text-white font-bold bg-green-500 px-4 py-2 rounded-full relative' onClick={() => { setcustomerInventoryDisplay(!customerInventoryDisplay) }}>Check List
                    <p className={`w-3 h-3 rounded-full bg-red-600 absolute -top-1 right-1 ${(totalItem>=1)?"block":"hidden"} checkAnimation`}></p>
                </button>
                <button className='text-white font-bold bg-green-500 px-4 py-2 rounded-full' onClick={saveCustomerInventory}>Continue</button>

            </div>

        </div>

    )
}
