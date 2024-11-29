import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bg from './assets/images/shifting.jpg'
export default function AcService() {
    let [form, setForm] = useState({ location: "", phone: "", type: "", service: "", detail: "" })
    function handleFormInput(e) {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    let storeData = (e) => {
        e.preventDefault();
        console.log(form)
    }
    return (
        <div className='h-screen flex justify-center items-center transition-all  bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-full loadComponent'>

                <div className='w-full flex flex-col max-w-[600px] h-full bg-white rounded-lg overflow-hidden relative border border-primary m-auto shadow-lg shadow-gray'>
                    <div className='flex-2 shrink-0'>
                        <div className='text-center font-semibold text-white bg-primary py-4  flex gap-x-5 items-center relative'>
                            <Link to={"/"} className='absolute left-5 top-1/2 -translate-y-1/2 px-4 py-1 bg-green-500 text-white rounded-full '>
                                <i className="fa-solid fa-arrow-left "></i>
                            </Link>
                            <h4 className='text-xl flex-1 '>Get Quote</h4>
                        </div>
                        <div className='flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold'>


                        </div>
                    </div>



                    {/* <div className='flex flex-col px-8 py-4 bg-white items-center w-full'> */}
                    <form action="" className='shadow-md' onSubmit={storeData}>
                        <div className='flex flex-col px-8 py-4 w-full gap-5 shadow-md '>
                            <input type="text" value={form.location} onChange={handleFormInput} name='location' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500' placeholder='Enter Your Location' />
                            <input type="number" value={form.phone} onChange={handleFormInput} name='phone' placeholder='Enter Your Phone Number' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500' />
                            <select name="type" id="" value={form.type} onChange={handleFormInput} className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500'>
                                <option value="type1">-- Type 1 -- </option>
                                <option value="type2">-- Type 2 -- </option>
                                <option value="type3">-- Type 3 -- </option>
                                <option value="type4">-- Type 4 -- </option>
                                <option value="type5">-- Type 5 -- </option>
                            </select>
                            <select name="service" value={form.service} onChange={handleFormInput} id="" className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500'>
                                <option value="ser1">-- Service 1 -- </option>
                                <option value="ser2">-- Service 2 -- </option>
                                <option value="ser3">-- Service 3 -- </option>
                                <option value="ser4">-- Service 4 -- </option>
                                <option value="ser5">-- Service 5 -- </option>
                            </select>
                            <textarea name="detail" value={form.detail} onChange={handleFormInput} id="" rows={10} placeholder='Enter The Problem' className='px-4 py-2 outline-none rounded-lg border-primary border focus:border-green-500'>

                            </textarea>
                            <div className='flex justify-center w-full bg-primary rounded-full py-2 '>
                                <input type='submit' className='text-white font-bold bg-green-500 px-4 py-2 rounded-full ' value={"Submit"} />
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}
