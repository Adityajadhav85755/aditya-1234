
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register({ LoginContext }) {
  let [showLoginForm, setShowLoginForm,showRegisterForm,setShowRegisterForm] = useContext(LoginContext);
  let [showPass, setShowPass] = useState(false);
  let [showCPass, setShowCPass] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let response = await fetch("http://192.168.1.6/json.php/form_signup.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      let responseData = await response.text();
      console.log(responseData);
    } else {
      console.log("Error");
    }
  };

  function signIn(){
    setShowLoginForm(true)
    setShowRegisterForm(false)
  }
  const password = watch("password");

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
                    setShowRegisterForm(false);
                  }}
                  className="absolute left-5 top-1/2 -translate-y-1/2 px-4 py-1 bg-green-500 text-white rounded-full"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <h4 className="text-xl flex-1">Sign Up</h4>
              </div>
            </div>

            <form className="shadow-md" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col px-8 py-4 w-full gap-5 shadow-md">
                <div>
                  <input
                    type="text"
                    {...register("username", { required: "Username is required" })}
                    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
                    placeholder="Username"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                  <input
                    type="number"
                    {...register("phone", {
                      required: "Phone number is required",
                      maxLength: { value: 10, message: "Phone number must be 10 digits" },
                    })}
                    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="relative">
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must be at least 8 characters, include one uppercase letter, one number, and one special character",
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
                </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <div className="relative">
                  <input
                    type={`${showCPass ? "text" : "password"}`}
                    {...register("cpassword", {
                      required: "Confirm Password is required",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                    className="px-4 py-2 outline-none rounded-full border-primary border focus:border-green-500 w-full"
                    placeholder="Confirm Password"
                  />
                  <i
                    className={`fa-solid ${showCPass ? "fa-eye-slash" : "fa-eye"} absolute right-4 top-1/2 -translate-y-1/2`}
                    onClick={() => {
                      setShowCPass(!showCPass);
                    }}
                  ></i>
                </div>
                  {errors.cpassword && <p className="text-red-500 text-sm">{errors.cpassword.message}</p>}

                  <div>
                    Don't have An Account ? <span className="text-primary text-base font-semibold" onClick={signIn}>Sign UP</span>
                </div>
                <div className="flex justify-center w-full bg-primary rounded-full py-2">
                  <input
                    type="submit"
                    className="text-white font-bold bg-green-500 px-4 py-2 rounded-full"
                    value={"Submit"}
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
