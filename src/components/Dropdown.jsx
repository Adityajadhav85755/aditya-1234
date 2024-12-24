import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ListContext } from "../Household";
import { InvetoryContext } from "./Inventory";
import table from '../assets/images/table.png';
<<<<<<< HEAD


const Dropdown = ({ item, topLevel,context,context2,onImageClick }) => {
=======
const Dropdown = ({ item, topLevel,context,context2 }) => {
>>>>>>> d5cb291 (Your commit message here)
    // const Dropdown = ({ subItem }) => {
    let [imageModalOpen, setImageModalOpen] = useState(false);
    let [selectedImage, setSelectedImage] = useState(null);
        
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(item.subItem);
    let [customerList, setCustomerList] = useContext(context2);
    let [inventory, setInvetory,setTotalItem,totalItem] = useContext(context)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    function openDropdown(index) {
        
        // console.log(inventory)
        let updatedItems = items.map((item, i) => {
            if (i == index) {
                item.open = !item.open;
                return item;
            } else {
                return item;
            }
        })
        setItems(updatedItems)
    }


    function addItem(index, mainItemIndex) {
        let newObj = {}

   
        let mainItem = items[mainItemIndex]
        newObj.mainItem = mainItem.Item;
        newObj.subItem = [];
        newObj.id = mainItem.id;
        let objectToAdd = mainItem.options.find((item, i) => {
            if (i == index) {
                newObj.subItem = [...newObj.subItem,item]
                return item;
            }
        })
        newObj.subItem[0].quantity+=1;
        setTotalItem(totalItem+1)
        setCustomerList([...customerList, newObj])

        let updatedSubItem = inventory[topLevel].subItem.map((inv, i) => {
            if (inv == items[mainItemIndex]) {
                if (inv == items[mainItemIndex]) {
                    return {
                        ...inv, options: inv.options.map((option, i) => {
                            if (option == objectToAdd) {
                                return { ...option, quantity: option.quantity }
                                // return { ...option, quantity: option.quantity + 1 }
                            }
                            else {
                                return option
                            }
                        })
                    }
                }
            }
            else {
                return inv
            }
        })

        // let updatedInventory=inventory
        let updatedInventory = structuredClone(inventory);


        updatedInventory[topLevel].subItem = updatedSubItem;

        setInvetory(updatedInventory)

    }
    function handleImageClick(imageUrl) {
        setSelectedImage(imageUrl);
        setImageModalOpen(true); // Open the modal
      }
     


    function incrementQuantity(quantity, mainItemIndex, index) {
        let newObj = {}
        let mainItem = items[mainItemIndex]
        newObj.mainItem = mainItem.Item;
        newObj.subItem = [];
        let objectToAdd = mainItem.options.find((item, i) => {
            if (i == index) {
                newObj.subItem = [...newObj.subItem, item]
                return item;
            }
        })

        let updatedSubItem = inventory[topLevel].subItem.map((inv, i) => {
            if (inv == items[mainItemIndex]) {
                if (inv == items[mainItemIndex]) {
                    return {
                        ...inv, options: inv.options.map((option, i) => {
                            if (option == objectToAdd) {
                                return { ...option, quantity: option.quantity + 1 }
                            }
                            else {
                                return option
                            }
                        })
                    }
                    // return true;
                }
            }
            else {
                return inv
            }
        })

        let updatedInventory = structuredClone(inventory);
        updatedInventory[topLevel].subItem = updatedSubItem;
        setInvetory(updatedInventory)



        newObj.id = mainItem.id;
        let itemToUpdate = customerList.find((item, i) => {
            return customerList[i].subItem[0].name == newObj.subItem[0].name
        })


        let updatedCustomerList=customerList.map((item,i)=>{
            if(item.id==mainItem.id){
                return {
                    ...item,
                    subItem:item.subItem.map((sub,i)=>{
                        
                        if(sub.name===itemToUpdate.subItem[0].name){
                            return {...sub,quantity:sub.quantity+1}
                        }

                        return sub 
                    })
                }
            }
            else{
                return item;
            }
        })
        setTotalItem(totalItem+1)
        setCustomerList(updatedCustomerList)

    }



    function decrementQuantity(quantity,mainItemIndex, index) {
        let newObj = {}
        let mainItem = items[mainItemIndex]
        newObj.mainItem = mainItem.Item;
        newObj.subItem = [];
        let objectToAdd = mainItem.options.find((item, i) => {
            if (i == index) {
                newObj.subItem = [...newObj.subItem, item]
                return item;
            }
        })

     
        let updatedSubItem = inventory[topLevel].subItem.map((inv, i) => {
            if (inv == items[mainItemIndex]) {
                if (inv == items[mainItemIndex]) {
                    return {
                        ...inv, options: inv.options.map((option, i) => {
                            if (option == objectToAdd) {
                                return { ...option, quantity: (option.quantity<=0)?option.quantity=0:option.quantity - 1 }
                            }
                            else {
                                return option
                            }
                        })
                    }
                    // return true;
                }
            }
            else {
                return inv
            }
        })




        let updatedInventory = structuredClone(inventory);
        updatedInventory[topLevel].subItem = updatedSubItem;
        setInvetory(updatedInventory)


        newObj.id = mainItem.id;
        let itemToUpdate = customerList.find((item, i) => {
            return customerList[i].subItem[0].name == newObj.subItem[0].name
        })




        let updatedCustomerList=customerList.map((item,i)=>{
            if(item.id==mainItem.id){
                return {
                    ...item,
                    subItem:item.subItem.map((sub,i)=>{
                        
                        if(sub.name===itemToUpdate.subItem[0].name){
                            return {...sub,quantity:(sub.quantity<=0)?sub.quantity=0:sub.quantity - 1}
                        }

                        return sub 
                    })
                }
            }
            else{
                return item;
            }
        })
        
        // console.log(updatedCustomerList)
        console.log(updatedCustomerList)
        console.log(itemToUpdate)
        // console.log(customerList)
        setTotalItem(totalItem-1)
        setCustomerList(updatedCustomerList)

    }

    useEffect(() => {
        setItems(item.subItem);
    }, [item.subItem]);
    // useEffect(()=>{

    // },[inventory])
    return (
        <div className="w-full flex flex-col gap-y-2">
            {/* {console.log(item.subItem[0].options[0].quantity)} */}
            {items.map((item, i) => {
                return <div key={i} className="">
                    <button
                        className="w-full bg-gray-300 text-PeriwinklePurpleDark font-semibold py-3 text-left px-4 relative rounded-lg rounded-bl-none rounded-br-none"
                        onClick={() => { openDropdown(i) }}
                    >
                        {item.Item}
                        <i className="fa-solid fa-angle-down absolute right-5 top-1/2 -translate-y-1/2"></i>
                    </button>
                    <div
                        className={`transition-all ease-out duration-300 overflow-y-scroll bg-gray-300 ${item.open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            } rounded-md rounded-tl-none rounded-tr-none`}
                    >
                        {/* {console.log(item.options)} */}
                        {item.options.map((item, j) => {
                            // {console.log(item)}
                            return <div key={j}
                                className=" py-2 px-4   text-PeriwinklePurpleDark  flex justify-between items-center"
                            >
                                <div className="  overflow-hidden flex items-center p-1 gap-4">
                                    <div>

                                    {/* {console.log(item.src)} */}
<<<<<<< HEAD
                                    <img src={item.src} alt="" className="w-12 h-12 border-primary border-2 p-1 rounded-md"
                                    onClick={() => onImageClick(item.src)}
                                    />
                                    </div>
                                {item.name}
                                </div>
                                <span className="text-primary border-primary border px-2 py-1 rounded-md cursor-pointer" onClick={item.quantity === 0 ? () => addItem(j, i) : undefined}> {item.quantity >= 1 ? <div className="flex gap-x-2 items-center">
=======
                                    <img src={item.src} alt="" className="w-12 h-12 border-PeriwinklePurpleDark border-2 p-1 rounded-md" />
                                    </div>
                                {item.name}
                                </div>
                                <span className="text-PeriwinklePurpleDark border-PeriwinklePurpleDark border px-2 py-1 rounded-md cursor-pointer" onClick={item.quantity === 0 ? () => addItem(j, i) : undefined}> {item.quantity >= 1 ? <div className="flex gap-x-2 items-center">
>>>>>>> d5cb291 (Your commit message here)
                                    <div className="flex gap-x-2 items-center">
                                        <i className="fa-solid fa-minus" onClick={() => { decrementQuantity(item.quantity, i, j) }}></i>
                                        {item.quantity}
                                        {/* {()=>{incrementTotalItem(item.quantity)}} */}
                                        <i className="fa-solid fa-plus" onClick={() => { incrementQuantity(item.quantity, i, j) }}></i>
                                    </div>
                                </div> : <i className="fa-solid fa-plus "></i>}</span>
                            </div>
                        })}



                    </div>
                </div>
            })}
        </div>
    );
};

export default Dropdown;
