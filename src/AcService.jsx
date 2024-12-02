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
import { useContext } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import React from "react";
import { LoginStatusContext } from "./index";
let LoginContext = React.createContext();

// import { servicesVersion } from "typescript";
export default function AcService() {
  let [loginStatus,setLoginStatus,showLoginForm,setShowLoginForm,showRegisterForm,setShowRegisterForm,userData,setUserData]=useContext(LoginStatusContext)

  let services = [
    {
      id: 1,
      tagId: "Anti-RustDeepClean",
      heading: "Anti-RustDeepClean",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 2,
      tagId: "acGasLeakFillRefill",
      heading: "Anti-RustDeepClean",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 3,
      tagId: "installation",
      heading: "Installation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 4,
      tagId: "uninstallation",
      heading: "Uninstallation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 5,
      tagId: "lessNoCooling",
      heading: "Less No Cooling",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 6,
      tagId: "powerIssue",
      heading: "Power Issue",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 7,
      tagId: "unWantedNoiseSmell",
      heading: "Unwanted Noise/ Smell",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 8,
      tagId: "waterLeakage",
      heading: "Water Leakage",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },
    {
      id: 9,
      tagId: "other",
      heading: "Other",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet repellat doloremque debitis totam explicabo tempore rem obcaecati a Aut impedit!",
      price: 1000
    },

  ];

  let [customerInventory, setCustomerInventory] = useState([]);
  let [serviceList, setServiceList] = useState(services);
  let [repairAndInspection, setRepairAndInspection] = useState(false)
  let [form, setForm] = useState({ phone: "", location: "", type: "", service: "", date: "",time:"",repairInspection:"",brand:""  })
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

  function displayService(e) {
    let { value } = e.target
    if (value == "AcRepairInspection") {
      setRepairAndInspection(true)
    }
    else {

      setRepairAndInspection(false)
    }
  }

  const scrollToHeader = (e) => {
    // console.log(e.target.value)
    if (e.target.value == "AcRepairInspection") {

    } else {
      document.getElementById(e.target.value).scrollIntoView({ behavior: "smooth" });

    }
  };


  async function onsubmit(e){
    e.preventDefault();
    console.log(form);
    let response = await fetch("http://localhost/json.php/form_ac.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      let responseData = await response.text();
      console.log(responseData);
    } else {
      console.log("Error");
    }
  }
function handleChange(e){
  let {name,value}=e.target;
  setForm({...form,[name]:value})
}


  return (
    <>
    
    <header>
    <LoginStatusContext.Provider value={[loginStatus,setLoginStatus,userData,setUserData]}>
        <Navbar LoginStatusContext={LoginStatusContext} setShowLoginForm={setShowLoginForm}/>

        </LoginStatusContext.Provider>
    </header>
      <div className="flex">
        <div className=" grid grid-cols-1 place-items-center m-8 gap-10 h-[600px] overflow-y-auto w-1/3">
          {serviceList.map((item, i) => {
            return (
              <div
                key={i}
                id={item.tagId}
                className="card w-full max-w-[500px] border-[#0a2c5a] border-2 rounded-2xl h-[350px] overflow-hidden "
              >
                <div>
                  <img src={service1} alt="" className="w-full h-[150px] object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-left leading-10">
                    {item.heading}
                  </h3>
                  <p className="text-left">
                    {item.desc}
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
          <form action="" className='flex flex-col px-4 py-4 gap-y-4 text-primary max-w-[500px] w-full' onSubmit={onsubmit}>

            <div className='relative '>
              <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
              <input type="number" name='phone' placeholder='Your Phone Number' className='w-full py-2 px-4 pl-10 rounded-full border-primary border' onChange={handleChange} value={form.phone}   />
            </div>
            <div className='relative'>
              <i className="fa-sharp fa-solid fa-location-dot absolute top-1/2 -translate-y-1/2 text-xl left-3"></i>
              <input type="text" name='location' placeholder='Your Location' className='w-full py-2 px-4 pl-10  rounded-full border-primary border' onChange={handleChange} value={form.location}/>
            </div>
            <div className='relative'>
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select name="type" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={handleChange} value={form.type}>
                <option value="">-- Ac Type --</option>
                <option value="split">Split AC</option>
                <option value="window">Window Ac</option>
                <option value="Floor Mounted Ac">Floor Mounted Ac</option>
                <option value="Hybrid">Hybrid /Dual Ac</option>
              </select>
            </div>

            <div className='relative'>
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select name="service" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={(e) => {handleChange(e); displayService(e); scrollToHeader(e) }} value={form.service} >
                <option value="">-- Select Service --</option>
                <option value="AcRepairInspection">AC Repair & Inspection</option>
                <option value="Anti-RustDeepClean">Anti-Rust Deep Clean</option>
                <option value="acGasLeakFillRefill">AC Gas Leak Fill & Refill</option>
                <option value="installation">Installation</option>
                <option value="uninstallation">Uninstallation</option>

              </select>
            </div>



            {repairAndInspection && <div className='relative'>
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select name="repairInspection" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={(e) => { handleChange(e); scrollToHeader(e) }} value={form.repairInspection}>
                <option value="">-- Select Service --</option>
                <option value="lessNoCooling">Less / No Cooling</option>
                <option value="powerIssue">Power Issue</option>
                <option value="unWantedNoiseSmell">Unwanted Noise/ Smell</option>
                <option value="waterLeakage">Water Leakage</option>
                <option value="other">Other</option>
              </select>
            </div>}

            <div className='relative'>
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select name="brand" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={handleChange} value={form.brand}>
                <option value="">-- Select Brand --</option>
                <option value="Voltas">Voltas</option>
                <option value="Samsung">Samsung</option>
                <option value="Haie">Haie</option>
                <option value="Lloyd">Lloyd</option>
                <option value="Whirlpool">Whirlpool</option>
                <option value="Bluestar">Bluestar</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Daikin">Daikin</option>
              </select>
            </div>

            <div className="relative">
              <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <select
                name="time"
                id="time"
                className="w-full py-2 px-4 rounded-full pl-10 border-primary border"
                onChange={handleChange}
                value={form.time}
              >
                <option value="">-- Select Time --</option>
                <option value="9 AM to 10 AM">9 AM to 10 AM</option>
                <option value="10 AM to 11 AM">10 AM to 11 AM</option>
                <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                <option value="12 PM to 1 PM">12 PM to 1 PM</option>
                <option value="1 PM to 2 PM">1 PM to 2 PM</option>
                <option value="2 PM to 3 PM">2 PM to 3 PM</option>
                <option value="3 PM to 4 PM">3 PM to 4 PM</option>
                <option value="4 PM to 5 PM">4 PM to 5 PM</option>
                <option value="5 PM to 6 PM">5 PM to 6 PM</option>
                <option value="6 PM to 7 PM">6 PM to 7 PM</option>
              </select>
            </div>

            <div className='relative'>
              <i className="fa-solid fa-calendar-days absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
              <input type="date" name='date' className='w-full py-2 px-4 rounded-full pl-10 border-primary border' onChange={handleChange} value={form.date} />
            </div>
            {/* 

        <div className='relative'>
          <i className="fa-solid fa-truck-fast absolute top-1/2 -translate-y-1/2 text-lg left-3"></i>
          <select name="plan" id="" className='w-full py-2 px-4 rounded-full pl-10 border-primary border' >
            <option value="">-- Select Plan --</option>
            <option value="base">Base Plan</option>
            <option value="premium">Premium Plan</option>
          </select>
        </div> */}

            <div className=''>
              <button className='bg-primary p-2 px-4 font-bold tracking-wide w-full rounded-md text-white '>Get Quote</button>
            </div>
          </form>
        </div>



        <LoginContext.Provider value={[showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm]}>
          {showLoginForm && <Login LoginContext={LoginContext} />}
          {showRegisterForm && <Register LoginContext={LoginContext} />}
        </LoginContext.Provider>
      </div>


      <Footer />
    </>
  );
}
