// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import bg from './assets/images/shifting.jpg'
// export default function AcService() {
//     let [form, setForm] = useState({ location: "", phone: "", type: "", service: "", detail: "" })
//     function handleFormInput(e) {
//         let { name, value } = e.target;
//         setForm({ ...form, [name]: value })
//     }
//     let storeData = (e) => {
//         e.preventDefault();
//         console.log(form)
//     }
//     return (
//         <div className='h-screen flex justify-center items-center transition-all  bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }}>
//             <div className='w-full loadComponent'>

//                 <div className='w-full flex flex-col max-w-[600px] h-full bg-white rounded-lg overflow-hidden relative border border-primary m-auto shadow-lg shadow-gray'>
//                     <div className='flex-2 shrink-0'>
//                         <div className='text-center font-semibold text-white bg-primary py-4  flex gap-x-5 items-center relative'>
//                             <Link to={"/"} className='absolute left-5 top-1/2 -translate-y-1/2 px-4 py-1 bg-green-500 text-white rounded-full '>
//                                 <i className="fa-solid fa-arrow-left "></i>
//                             </Link>
//                             <h4 className='text-xl flex-1 '>Get Quote</h4>
//                         </div>
//                         <div className='flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold'>


//                         </div>
//                     </div>



//                     {/* <div className='flex flex-col px-8 py-4 bg-white items-center w-full'> */}
//                     <form action="" className='shadow-md' onSubmit={storeData}>
//                         <div className='flex flex-col px-8 py-4 w-full gap-5 shadow-md '>
//                             <input type="text" value={form.location} onChange={handleFormInput} name='location' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500' placeholder='Enter Your Location' />
//                             <input type="number" value={form.phone} onChange={handleFormInput} name='phone' placeholder='Enter Your Phone Number' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500' />
//                             <select name="type" id="" value={form.type} onChange={handleFormInput} className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500'>
//                                 <option value="type1">-- Type 1 -- </option>
//                                 <option value="type2">-- Type 2 -- </option>
//                                 <option value="type3">-- Type 3 -- </option>
//                                 <option value="type4">-- Type 4 -- </option>
//                                 <option value="type5">-- Type 5 -- </option>
//                             </select>
//                             <select name="service" value={form.service} onChange={handleFormInput} id="" className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500'>
//                                 <option value="ser1">-- Service 1 -- </option>
//                                 <option value="ser2">-- Service 2 -- </option>
//                                 <option value="ser3">-- Service 3 -- </option>
//                                 <option value="ser4">-- Service 4 -- </option>
//                                 <option value="ser5">-- Service 5 -- </option>
//                             </select>
//                             <textarea name="detail" value={form.detail} onChange={handleFormInput} id="" rows={10} placeholder='Enter The Problem' className='px-4 py-2 outline-none rounded-lg border-primary border focus:border-green-500'>

//                             </textarea>
//                             <div className='flex justify-center w-full bg-primary rounded-full py-2 '>
//                                 <input type='submit' className='text-white font-bold bg-green-500 px-4 py-2 rounded-full ' value={"Submit"} />
//                             </div>

//                         </div>
//                     </form>

//                 </div>
//             </div>
//         </div>

//     )
// }


import service1 from "./assets/images/shifting.jpg";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { servicesVersion } from "typescript";
export default function AcService() {

  let services = [
    {
      id: 1,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
    {
      id: 2,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
    {
      id: 3,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
    {
      id: 4,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
    {
      id: 5,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
    {
      id: 6,
      src: service1,
      heading: "Filter Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
    },
  ];

  let [customerInventory, setCustomerInventory] = useState([]);
  let [serviceList, setServiceList] = useState(services);
  let [repairAndService,setRepairAndService]=useState(false)
  let [repairAndInspection,setRepairAndInspection]=useState(false)
  function addService(service) {
    // console.log(service);
    let exist = customerInventory.some((item) => {
      return item.id == service.id;
    });
    if (exist) {
      console.log("exist");
    } else {
      console.log("exist not");
      setCustomerInventory([...customerInventory, service]);
      console.log([...customerInventory, service]);
    }
  }

  function displayService(e){
    let {value}=e.target
    if(value=="repairAndService"){
      setRepairAndService(true)
      setRepairAndInspection(false)
    }
    else{
      setRepairAndInspection(true)
      setRepairAndService(false)
    }
  }
  return (
    <>
      <Navbar />
      <div className="flex">
      <div className=" grid grid-cols-1 place-items-center m-8 gap-10 h-[600px] overflow-y-auto w-1/3">
        {serviceList.map((item, i) => {
          return (
            <div
              key={i}
              className="card w-full max-w-[500px] border-[#0a2c5a] border-2 rounded-2xl h-[350px] overflow-hidden "
            >
              <div>
                <img src={service1} alt="" className="w-full h-[150px] object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-left leading-10">
                  Filter Cleaning
                </h3>
                <p className="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                  repellat doloremque debitis totam explicabo tempore rem
                  obcaecati a. Aut, impedit!
                </p>
                <div className="w-full text-left my-4">
                  <button
                    onClick={() => {
                      addService(item);
                    }}
                    className="text-white  font-semibold bg-[#0a2c5a] px-4 py-1 rounded-full text-left hover:bg-blue-800 transition-all"
                  >
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      </div>

<div className="flex justify-center items-center w-1/2">
      <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary max-w-[500px] w-full' >

        <div className='relative '>
          <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
          <input type="number" name='phone' placeholder='Your Phone Number'  className='w-full py-2 px-4 pl-10 rounded-full border-primary border' />
        </div>
        <div className='relative'>
          <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
          <input type="text" name='location' placeholder='Your Location'  className='w-full py-2 px-4 pl-10  rounded-full border-primary border' />
        </div>
        <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="type" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
            <option value="">-- Ac Type --</option>
            <option value="split">Split AC</option>
            <option value="window">Window Ac</option>
            <option value="Floor Mounted Ac">Floor Mounted Ac</option>
            <option value="Hybrid">Hybrid /Dual Ac</option>
          </select>
        </div>

        <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="service" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={displayService} >
            <option value="">-- Select Service --</option>
            <option value="repairAndService">Repair & Service</option>
            <option value="repairAndInspection">Repair & Inspection</option>

          </select>
        </div>

        {repairAndService && 
        <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="repairService" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
            <option value="">-- Select Service --</option>
            <option value="housefold shifting">Household Shifting</option>
            <option value="office shifting">Office Shifting</option>
            <option value="shop shifting">Shop Shifting</option>
            <option value="vehicle shifting">Vehicle Shifting</option>
          </select>
        </div>}

        
      {repairAndInspection &&   <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="repairInspection" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
            <option value="">-- Select Service --</option>
            <option value="housefold shifting">Household Shifting</option>
            <option value="office shifting">Office Shifting</option>
            <option value="shop shifting">Shop Shifting</option>
            <option value="vehicle shifting">Vehicle Shifting</option>
          </select>
        </div>}

        <div className='relative'>
          <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <input type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border'  />
        </div>


        <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="plan" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
            <option value="">-- Select Plan --</option>
            <option value="base">Base Plan</option>
            <option value="premium">Premium Plan</option>
          </select>
        </div>

        <div className=''>
          <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
        </div>
      </form>
</div>

      </div>


      <Footer />
    </>
  );
}
