// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// // import { useState } from 'react';
// export default function Login({LoginContext}) {
//     let [form, setForm] = useState({ username: "", password: "", cpassword: "", phone: "" })
//     let [showLoginForm,setShowLoginForm]=useContext(LoginContext)
//   let [showPass,setShowPass]=useState(false)
//   let [showCPass,setShowCPass]=useState(false)

//     function handleFormInput(e) {
//         let { name, value } = e.target;
//         setForm({ ...form, [name]: value })
//     }
//      let storeData = async (e) => {
//         e.preventDefault();
//         console.log(form)
//         if(form.password==form.cpassword){
//             let response = await fetch("http://192.168.1.6/json.php/form_signup.php",{
//                 method:"POST",
//                 headers:{
//                     "Content-type":"application/json",
//                 },
//                 body:JSON.stringify(form),
//             });
//             if(response.ok){

//                 let data=await response.text();
//                 console.log(data);
//             }
//             else{
//                 console.log("error")
//             }
//         }
        

//     }
//     return (
//         <>
//             <div className='fixed top-0 left-0  bg-gray-500 h-screen w-screen opacity-50 z-30'>
//             </div>
//             <div className=' flex justify-center items-center transition-all  bg-center bg-cover bg-no-repeat z-40 fixed top-0 left-0 w-full h-screen'>
//                 <div className='w-full loadComponent'>
//                     <div className='w-full flex flex-col max-w-[500px] h-full bg-white rounded-lg overflow-hidden relative border border-primary m-auto shadow-lg shadow-gray'>
//                         <div className='flex-2 shrink-0'>
//                             <div className='text-center font-semibold text-white bg-primary py-4  flex gap-x-5 items-center relative'>
//                                 <Link to={""} onClick={()=>{setShowLoginForm(false)}} className='absolute left-5 top-1/2 -translate-y-1/2 px-4 py-1 bg-green-500 text-white rounded-full '>
//                                     <i className="fa-solid fa-arrow-left "></i>
//                                 </Link>
//                                 <h4 className='text-xl flex-1 '>Sign Up</h4>
//                             </div>
//                             <div className='flex p-2 px-4 gap-x-5 overflow-x-auto font-semibold'>


//                             </div>
//                         </div>



//                         {/* <div className='flex flex-col px-8 py-4 bg-white items-center w-full'> */}
//                         <form action="" className='shadow-md' onSubmit={storeData}>
//                             <div className='flex flex-col px-8 py-4 w-full gap-5 shadow-md '>
//                                 <div className=''>
//                                     <input type="text" value={form.username} onChange={handleFormInput} name='username' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full' placeholder='Username' />
//                                 </div>

//                                 <div>
//                                     <input type="number" value={form.phone} onChange={handleFormInput} name='phone' placeholder='Phone Number' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full' />

//                                 </div>

//                                 <div className='relative'>
//                                     <input type={`${showPass?"text":"password"}`} value={form.password} onChange={handleFormInput} name='password' placeholder='Password' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full' />
//                                     <i class={`fa-solid ${showPass?"fa-eye-slash":"fa-eye"} absolute right-4 top-1/2 -translate-y-1/2`} onClick={()=>{setShowPass(!showPass)}}></i>

//                                 </div>
//                                 <div  className='relative'>
//                                     <input type={`${showCPass?"text":"password"}`} value={form.cpassword} onChange={handleFormInput} name='cpassword' placeholder='Confirm Password' className='px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full' />
//                                     <i class={`fa-solid ${showCPass?"fa-eye-slash":"fa-eye"} absolute right-4 top-1/2 -translate-y-1/2`} onClick={()=>{setShowCPass(!showCPass)}}></i>
//                                 </div>


//                                 <div className='flex justify-center w-full bg-primary rounded-full py-2 '>
//                                     <input type='submit' className='text-white font-bold bg-green-500 px-4 py-2 rounded-full ' value={"Submit"} />
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login({ LoginContext }) {
  let [showLoginForm, setShowLoginForm,showRegisterForm,setShowRegisterForm] = useContext(LoginContext);
  let [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let response = await fetch("http://localhost/json.php/login.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setShowLoginForm(false)
    if (response.ok) {
      let responseData = await response.text();
      console.log(responseData);
    } else {
      console.log("Error");
    }
  };

  function signUp(){
    setShowLoginForm(false)
    setShowRegisterForm(true)
  }
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-500 h-screen w-screen opacity-50 z-30"></div>
      <div className="flex justify-center items-center transition-all bg-center bg-cover bg-no-repeat z-40 fixed top-0 left-0 w-full h-screen">
        <div className="w-full loadComponent">
          <div className="w-full flex flex-col max-w-[500px] h-full bg-white rounded-lg overflow-hidden relative border border-primary m-auto shadow-lg shadow-gray">
            <div className="flex-2 shrink-0">
              <div className="text-center font-semibold text-white bg-primary py-4 flex gap-x-5 items-center relative">
                <Link
                  to={""}
                  onClick={() => {
                    setShowLoginForm(false);
                  }}
                  className="absolute left-5 top-1/2 -translate-y-1/2 px-4 py-1 bg-green-500 text-white rounded-full"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <h4 className="text-xl flex-1">Login</h4>
              </div>
            </div>

            <form className="shadow-md" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col px-8 py-4 w-full gap-5 shadow-md">
                {/* Username Field */}
                {/* <div>
                  <input
                    type="text"
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 4,
                        message: "Username must be at least 4 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "Username cannot exceed 15 characters",
                      },
                    })}
                    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
                    placeholder="Username"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div> */}

<div>
  <input
    type="number"
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be exactly 10 digits",
      },
    })}
    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
    placeholder="Phone Number"
  />
  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
</div>


                {/* Password Field */}
                <div className="relative">
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                        message: "Password must contain at least 1 uppercase letter, 1 number, and 1 special character",
                      },
                    })}
                    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
                    placeholder="Password"
                  />
                  <i
                    className={`fa-solid ${showPass ? "fa-eye-slash" : "fa-eye"} absolute right-4 top-1/2 -translate-y-1/2`}
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  ></i>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div>
                    Don't have An Account ? <span className="text-primary text-base font-semibold" onClick={signUp}>Sign UP</span>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center w-full bg-primary rounded-full py-2">
                  <input
                    type="submit"
                    className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
                    value={"Login"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
